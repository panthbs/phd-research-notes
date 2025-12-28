const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

// Config
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const outputDir = "notes"; 

async function run() {
  console.log("Initializing Notion Sync (2025 Protocol)...");

  // --- STEP 1: RESOLVE DATA SOURCE ID ---
  // We cannot query the database_id directly anymore.
  // We must retrieve the database metadata to find the 'data_source_id'.
  
  let targetId = process.env.NOTION_DATABASE_ID;
  let isLegacy = false;

  try {
    console.log(`Retrieving metadata for Database: ${targetId}`);
    const dbMetadata = await notion.databases.retrieve({ database_id: targetId });

    // Check if this database has been migrated to the new Data Source format
    if (dbMetadata.data_sources && dbMetadata.data_sources.length > 0) {
       // It's the new format: Use the first data source ID
       targetId = dbMetadata.data_sources[0].id;
       console.log(`✅  Resolved Data Source ID: ${targetId}`);
    } else {
       // Fallback: It might still be a legacy database
       console.log("⚠️  No Data Source found. Attempting legacy query...");
       isLegacy = true;
    }
  } catch (e) {
    console.error("❌ Error retrieving database metadata:", e.message);
    process.exit(1);
  }

  // --- STEP 2: QUERY THE DATA ---
  let response;
  try {
    const queryPayload = {
      filter: {
        property: "Status",       // Remove this block if you don't use Status
        status: { equals: "Done" }
      }
    };

    if (isLegacy) {
        // OLD WAY (Backup)
        response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            ...queryPayload
        });
    } else {
        // NEW WAY (Future-Proof)
        // Note: The method name might be 'dataSources.query' or just 'query' on a new client
        // depending on the exact library version. We use the generic request if the helper is missing.
        if (notion.dataSources && notion.dataSources.query) {
             response = await notion.dataSources.query({
                data_source_id: targetId,
                ...queryPayload
             });
        } else {
             // If the library hasn't updated the helper function yet, 
             // we can manually call the new endpoint.
             response = await notion.request({
                path: `data_sources/${targetId}/query`,
                method: "POST",
                body: queryPayload,
             });
        }
    }
  } catch (e) {
    console.error("❌ Query Failed:", e.message);
    process.exit(1);
  }

  // --- STEP 3: PROCESS FILES (Same as before) ---
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }

  for (const page of response.results) {
    const title = page.properties.Name?.title[0]?.plain_text || "Untitled";
    const filename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".md";
    
    // Extract Properties (Adjusted for safety)
    const tags = page.properties.Tags?.multi_select.map(t => t.name) || [];
    const date = page.properties.Year?.number || page.properties.Year?.rich_text?.[0]?.plain_text || "No Date";
    const url = page.properties.Link?.url || "";
    
    // Handle Authors
    const authorsProp = page.properties.Authors;
    let authors = authorsProp?.rich_text?.[0]?.plain_text;
    if (!authors && authorsProp?.multi_select) {
        authors = authorsProp.multi_select.map(a => a.name).join(", ");
    }

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const fileContent = `---
title: "${title}"
authors: "${authors || ''}"
year: ${date}
tags: [${tags.map(t => `"${t}"`).join(", ")}]
link: "${url}"
---

${mdString.parent}
`;

    fs.writeFileSync(path.join(outputDir, filename), fileContent);
    console.log(`Saved: ${filename}`);
  }
}

run();
