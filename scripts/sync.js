const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

// --- DEBUGGING START ---
console.log("Notion Client Version Check:");
try {
    const notionTest = new Client({ auth: "test" });
    console.log("Client created successfully.");
    console.log("Has databases?", !!notionTest.databases);
    console.log("Has databases.query?", !!(notionTest.databases && notionTest.databases.query));
    if (!notionTest.databases || !notionTest.databases.query) {
        throw new Error("CRITICAL: The Notion Library is loaded, but methods are missing. Check npm install.");
    }
} catch (e) {
    console.error("Initialization Failed:", e);
    process.exit(1);
}
// --- DEBUGGING END ---

// Config
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const databaseId = process.env.NOTION_DATABASE_ID;
const outputDir = "notes"; // Folder where notes will be saved

async function run() {
  console.log("Fetching pages from Notion...");
  
  // 1. Get all pages from the database
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status", // Remove this block if you don't have a "Status" property
      status: {
        equals: "Done"
      }
    }
  });

  // 2. Ensure output directory exists
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }

  // 3. Loop through pages
  for (const page of response.results) {
    // --- EXTRACT PROPERTIES ---
    
    // 1. Name (Title Property)
    // Adjust if your title property is named something other than "Name"
    const title = page.properties.Name?.title[0]?.plain_text || "Untitled";
    
    // Generate filename: "Untitled" -> "untitled.md"
    const filename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".md";

    // 2. Tags (Multi-select)
    const tags = page.properties.Tags?.multi_select.map(t => t.name) || [];

    // 3. Conference/Journal (Handles Select OR Text field)
    // Note: We use ["..."] because of the slash in the name
    const venueProp = page.properties["Conference/Journal"];
    const venue = venueProp?.select?.name || venueProp?.rich_text?.[0]?.plain_text || "";

    // 4. Year (Handles Number OR Text/Select field)
    const yearProp = page.properties.Year;
    const year = yearProp?.number || yearProp?.select?.name || yearProp?.rich_text?.[0]?.plain_text || "";

    // 5. Authors (Handles Text)
    const authorsProp = page.properties.Authors;
    // If it's a simple text field:
    let authors = authorsProp?.rich_text?.[0]?.plain_text;
    authors = authors || "";

    // 6. Link (URL Property)
    const url = page.properties.Link?.url || "";

    // --- CONVERT BODY TO MARKDOWN ---
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    // --- BUILD FILE CONTENT ---
    const fileContent = `---
title: "${title}"
authors: "${authors}"
venue: "${venue}"
year: ${year}
tags: [${tags.map(t => `"${t}"`).join(", ")}]
link: "${url}"
---

${mdString.parent}
`;

    // --- WRITE FILE ---
    fs.writeFileSync(path.join(outputDir, filename), fileContent);
    console.log(`Saved: ${filename}`);
  }
}

run();
