# 📚 PhD Research Notes & Reading List

[![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)](https://notion.so)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Status](https://img.shields.io/badge/Status-Active_Research-success?style=for-the-badge)]()

Welcome to my personal knowledge base. This repository serves as a living document of my PhD journey, focusing on **Natural Language Processing (NLP)** and **Information Retrieval (IR)**.

> **Note:** This repository is **automatically synced** from my private Notion database every night via GitHub Actions. It represents my raw notes, critiques, and implementation ideas.

---

## 🧠 Research Focus
My primary research interests include:
* **Information Retrieval:** Search engines, RAG (Retrieval-Augmented Generation), and reranking.
* **NLP & LLMs:** Large Language Models, especially **Thai Language Models** and low-resource settings.

## 📂 Repository Structure

```text
/phd-research-notes
│
├── /notes            # 📝 The Core: Markdown summaries of papers (Auto-synced)
│   ├── paper01.md
│   ├── paper02.md
│   └── ...
│
├── /scripts          # ⚙️ Automation: Node.js scripts for Notion API sync
│   └── sync.js
│
└── .github/workflows # 🤖 CI/CD: Daily sync configuration
    └── sync.yml
```

## 🛠️ The Automation Workflow
I believe in "Write Once, Publish Everywhere."

Reading: I read papers and write structured critiques in Notion.

Metadata: I tag papers with properties like Conference, Year, and Tags.

Sync: A GitHub Action runs daily, fetches Status="Done" pages, converts them to Markdown, and pushes them here.

Frontmatter: Custom scripts generate YAML headers for better compatibility with static site generators.

## 🌟 Featured Readings
If you are looking for a place to start, here are some of my key notes:

<This is currently empty and will be available soon!>

## 🤝 Usage & Citation
Feel free to read my summaries. If you find a mistake in my interpretation of a paper, please open an Issue—I treat this as a collaborative learning process.

Original Papers: All rights belong to the original authors (links provided in each note).

Notes: Licensed under MIT.

<div align="center"> <sub>Maintained by <a href="https://github.com/panthbs">me</a> • Powered by Caffeine & arXiv</sub> </div>
