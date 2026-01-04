---
title: "Retrieval-Augmented Generation for Large Language Models: A Survey"
authors: "Yunfan Gao, Yun Xiong, Xinyu Gao, Kangxiang Jia, Jinliu Pan, Yuxi Bi, Yi Dai, Jiawei Sun, Meng Wang, Haofen Wang"
year: 2024
tags: ["Computer Science - Artificial Intelligence", "Computer Science - Computation and Language", "survey"]
link: "http://arxiv.org/abs/2312.10997"
---


# 🚀 TL;DR


เปเปอร์ survey ของแต่ละมิติใน RAG รวมทั้ง evaluation แถมมี chart สรุปรวบยอด ตบท้ายด้วย direction และปัญหาปลายเปิด


## 💡 Key Insight / "The Aha! Moment"


เปเปอร์ survey ที่เอาไว้แวะมาดู อธิบายแต่ละยุคของ RAG ได้ ตั้งแต่เริ่มต้นที่ Generative AI ยังไม่ฉลาดพอจนถึงตอนที่มันฉลาดพอที่ทำให้ RAG เริ่มสำคัญ


## 💭 My Critique

- **Strengths:**
    - สำหรับแต่ละมิติของ RAG เอามาย้อนอ้างอิงได้ วิธีและโมเดลในตลาดมีบอกและอ้างอิงได้
- **Weaknesses/Limitations:**
    - เครื่องหมายแบ่งประโยคขัดใจนิดหน่อย
    - ก็อปวางประโยคเดียวกันซ้ำสองรอบมีให้เห็น

## 🔮 Future Work / Ideas for Me

- เป็นจุดเริ่มต้นที่ดี
- ใช้ในการวางสโคปงานกับหาข้อมูลเพิ่ม น่าจะต้องตัดสินใจก่อนว่าจะลงลึกในส่วนไหน R, A, G? เพราะมันกว้างมาก

---


# Zotero Notes


    # Annotations (1/4/2026, 3:25:17 PM)


        # Annotations
        (1/4/2026, 3:25:17 PM)


        “highlights the state-of-theart technologies” (Yunfan Gao et al., 2024, p. 1)


        “providing a profound understanding” (Yunfan Gao et al., 2024, p. 1)


        “introduces up-to-date evaluation framework and benchmark” (Yunfan Gao et al., 2024, p. 1)


        “delineates the challenges currently faced and points out prospective avenues for research and development” (Yunfan Gao et al., 2024, p. 1)


        “began to incorporate more with LLM fine-tuning techniques” (Yunfan Gao et al., 2024, p. 1)


        “thorough and systematic review of the state-of-the-art RAG methods,” (Yunfan Gao et al., 2024, p. 1)


        “naive RAG” (Yunfan Gao et al., 2024, p. 1)


        “advanced RAG” (Yunfan Gao et al., 2024, p. 2)


        “modular RAG” (Yunfan Gao et al., 2024, p. 2)


        “discuss the central technologies integral to the RAG process” (Yunfan Gao et al., 2024, p. 2)


        “delve into their synergies” (Yunfan Gao et al., 2024, p. 2)


        “summarized the current assessment methods” (Yunfan Gao et al., 2024, p. 2)


        “outlining the evaluation objectives and metrics” (Yunfan Gao et al., 2024, p. 2)


        “current evaluation benchmarks and tools” (Yunfan Gao et al., 2024, p. 2)


        “Naive RAG” (Yunfan Gao et al., 2024, p. 2)


        “Indexing” (Yunfan Gao et al., 2024, p. 3)


        “Retrieval” (Yunfan Gao et al., 2024, p. 3)


        “Generation” (Yunfan Gao et al., 2024, p. 3)


        “Retrieval Challenges” (Yunfan Gao et al., 2024, p. 3)


        “struggles with precision and recall” (Yunfan Gao et al., 2024, p. 3)


        “Generation Difficulties” (Yunfan Gao et al., 2024, p. 3)


        “issue of hallucination” (Yunfan Gao et al., 2024, p. 3)


        “Augmentation Hurdles” (Yunfan Gao et al., 2024, p. 3)


        “disjointed or incoherent outputs” (Yunfan Gao et al., 2024, p. 3)


        “generation models might overly rely on augmented information” (Yunfan Gao et al., 2024, p. 3)


        “Advanced RAG” (Yunfan Gao et al., 2024, p. 3)


        “enhancing retrieval quality” (Yunfan Gao et al., 2024, p. 3)


        “pre-retrieval and post-retrieval” (Yunfan Gao et al., 2024, p. 3)


        “refines its indexing techniques” (Yunfan Gao et al., 2024, p. 3)


        “use of a sliding window” (Yunfan Gao et al., 2024, p. 3)


        “fine-grained segmentation” (Yunfan Gao et al., 2024, p. 3)


        “incorporation of metadata” (Yunfan Gao et al., 2024, p. 3)


        “Pre-retrieval process” (Yunfan Gao et al., 2024, p. 4)


        “optimizing the indexing structure and the original query” (Yunfan Gao et al., 2024, p. 4)


        “make the user’s original question clearer” (Yunfan Gao et al., 2024, p. 4)


        “query rewriting” (Yunfan Gao et al., 2024, p. 4)


        “query transformation” (Yunfan Gao et al., 2024, p. 4)


        “query expansion” (Yunfan Gao et al., 2024, p. 4)


        “Post-Retrieval Process” (Yunfan Gao et al., 2024, p. 4)


        “rerank chunks” (Yunfan Gao et al., 2024, p. 4)


        “context compressing” (Yunfan Gao et al., 2024, p. 4)


        “LlamaIndex2, LangChain3, and HayStack” (Yunfan Gao et al., 2024, p. 4)


        “Modular RAG” (Yunfan Gao et al., 2024, p. 4)


        “incorporates diverse strategies” (Yunfan Gao et al., 2024, p. 4)


        “adding a search module” (Yunfan Gao et al., 2024, p. 4)


        “refining the retriever” (Yunfan Gao et al., 2024, p. 4)


        “restructured RAG modules” (Yunfan Gao et al., 2024, p. 4)


        “rearranged RAG pipelines” (Yunfan Gao et al., 2024, p. 4)


        “New Modules:” (Yunfan Gao et al., 2024, p. 4)


        “Search module” (Yunfan Gao et al., 2024, p. 4)


        “direct searches” (Yunfan Gao et al., 2024, p. 4)


        “search engines” (Yunfan Gao et al., 2024, p. 4)


        “databases” (Yunfan Gao et al., 2024, p. 4)


        “knowledge graphs” (Yunfan Gao et al., 2024, p. 4)


        “RAGFusion” (Yunfan Gao et al., 2024, p. 4)


        “multi-query strategy” (Yunfan Gao et al., 2024, p. 4)


        “expands user queries” (Yunfan Gao et al., 2024, p. 4)


        “parallel vector searches” (Yunfan Gao et al., 2024, p. 4)


        “intelligent re-ranking” (Yunfan Gao et al., 2024, p. 4)


        “Memory module” (Yunfan Gao et al., 2024, p. 4)


        “Routing” (Yunfan Gao et al., 2024, p. 5)


        “navigates” (Yunfan Gao et al., 2024, p. 5)


        “optimal pathway” (Yunfan Gao et al., 2024, p. 5)


        “involves summarization” (Yunfan Gao et al., 2024, p. 5)


        “or merging” (Yunfan Gao et al., 2024, p. 5)


        “Predict module” (Yunfan Gao et al., 2024, p. 5)


        “reduce redundancy” (Yunfan Gao et al., 2024, p. 5)


        “generating context directly” (Yunfan Gao et al., 2024, p. 5)


        “Task Adapter module” (Yunfan Gao et al., 2024, p. 5)


        “automating prompt retrieval” (Yunfan Gao et al., 2024, p. 5)


        “creating task-specific retrievers” (Yunfan Gao et al., 2024, p. 5)


        “New Patterns” (Yunfan Gao et al., 2024, p. 5)


        “module substitution or reconfiguration” (Yunfan Gao et al., 2024, p. 5)


        “Rewrite-Retrieve-Read” (Yunfan Gao et al., 2024, p. 5)


        “Rewrite-Retrieve-Read [7]model” (Yunfan Gao et al., 2024, p. 5)


        “LM-feedback” (Yunfan Gao et al., 2024, p. 5)


        “LM-feedback mechanism” (Yunfan Gao et al., 2024, p. 5)


        “Generate-Read” (Yunfan Gao et al., 2024, p. 5)


        “Generate-Read” (Yunfan Gao et al., 2024, p. 5)


        “ReciteRead” (Yunfan Gao et al., 2024, p. 5)


        “ReciteRead” (Yunfan Gao et al., 2024, p. 5)


        “Hybrid retrieval” (Yunfan Gao et al., 2024, p. 5)


        “Hybrid retrieval strategies” (Yunfan Gao et al., 2024, p. 5)


        “keyword” (Yunfan Gao et al., 2024, p. 5)


        “semantic” (Yunfan Gao et al., 2024, p. 5)


        “vector” (Yunfan Gao et al., 2024, p. 5)


        “sub-queries” (Yunfan Gao et al., 2024, p. 5)


        “(HyDE)” (Yunfan Gao et al., 2024, p. 5)


        “embedding similarities” (Yunfan Gao et al., 2024, p. 5)


        “(DSP)” (Yunfan Gao et al., 2024, p. 5)


        “Retrieve-Read-Retrieve-Read” (Yunfan Gao et al., 2024, p. 5)


        “ITERRETGEN” (Yunfan Gao et al., 2024, p. 5)


        “benefits of adaptive retrieval” (Yunfan Gao et al., 2024, p. 5)


        “FLARE” (Yunfan Gao et al., 2024, p. 5)


        “Self-RAG” (Yunfan Gao et al., 2024, p. 5)


        “RAG vs Fine-tuning” (Yunfan Gao et al., 2024, p. 5)


        “illustrated in Figure 4” (Yunfan Gao et al., 2024, p. 5)


        “dynamic environments” (Yunfan Gao et al., 2024, p. 5)


        “knowledge updates” (Yunfan Gao et al., 2024, p. 5)


        “high interpretability” (Yunfan Gao et al., 2024, p. 5)


        “higher latency and ethical considerations” (Yunfan Gao et al., 2024, p. 5)


        “deep customization” (Yunfan Gao et al., 2024, p. 5)


        “it may face challenges with unfamiliar data” (Yunfan Gao et al., 2024, p. 5)


        “RAG consistently outperforms” (Yunfan Gao et al., 2024, p. 5)


        “not mutually exclusive” (Yunfan Gao et al., 2024, p. 5)


        “may lead to optimal performance” (Yunfan Gao et al., 2024, p. 5)


        “multiple iterations” (Yunfan Gao et al., 2024, p. 5)


        “several key issues involved” (Yunfan Gao et al., 2024, p. 5)


        “Retrieval Source” (Yunfan Gao et al., 2024, p. 5)


        “Data Structure” (Yunfan Gao et al., 2024, p. 5)


        “semi-structured” (Yunfan Gao et al., 2024, p. 5)


        “structured” (Yunfan Gao et al., 2024, p. 5)


        “utilizing content generated by LLMs” (Yunfan Gao et al., 2024, p. 5)


        “Unstructured Data” (Yunfan Gao et al., 2024, p. 7)


        “text” (Yunfan Gao et al., 2024, p. 7)


        “Semi-structured data” (Yunfan Gao et al., 2024, p. 7)


        “text and table” (Yunfan Gao et al., 2024, p. 7)


        “separate tables” (Yunfan Gao et al., 2024, p. 7)


        “data corruption” (Yunfan Gao et al., 2024, p. 7)


        “Text-2-SQL” (Yunfan Gao et al., 2024, p. 7)


        “Text-2-SQL queries on tables” (Yunfan Gao et al., 2024, p. 7)


        “not optimal solutions” (Yunfan Gao et al., 2024, p. 7)


        “Structured data” (Yunfan Gao et al., 2024, p. 7)


        “knowledge graphs” (Yunfan Gao et al., 2024, p. 7)


        “KnowledGPT” (Yunfan Gao et al., 2024, p. 7)


        “G-Retriever” (Yunfan Gao et al., 2024, p. 7)


        “Graph Neural Networks” (Yunfan Gao et al., 2024, p. 7)


        “Prize-Collecting Steiner Tree” (Yunfan Gao et al., 2024, p. 7)


        “targeted graph retrieval” (Yunfan Gao et al., 2024, p. 7)


        “requires additional effort” (Yunfan Gao et al., 2024, p. 7)


        “LLMs-Generated Content” (Yunfan Gao et al., 2024, p. 7)


        “SKR” (Yunfan Gao et al., 2024, p. 7)


        “classifies” (Yunfan Gao et al., 2024, p. 7)


        “selectively” (Yunfan Gao et al., 2024, p. 7)


        “GenRead” (Yunfan Gao et al., 2024, p. 7)


        “replaces” (Yunfan Gao et al., 2024, p. 7)


        “LLM generator” (Yunfan Gao et al., 2024, p. 7)


        “Selfmem” (Yunfan Gao et al., 2024, p. 7)


        “unbounded memory pool” (Yunfan Gao et al., 2024, p. 7)


        “as dual problems” (Yunfan Gao et al., 2024, p. 7)


        “self-enhancing” (Yunfan Gao et al., 2024, p. 7)


        “Retrieval Granularity” (Yunfan Gao et al., 2024, p. 7)


        “Coarse-grained” (Yunfan Gao et al., 2024, p. 7)


        “more relevant information” (Yunfan Gao et al., 2024, p. 7)


        “contain redundant” (Yunfan Gao et al., 2024, p. 7)


        “fine-grained” (Yunfan Gao et al., 2024, p. 7)


        “text” (Yunfan Gao et al., 2024, p. 8)


        “Token, Phrase, Sentence, Proposition, Chunks, Document” (Yunfan Gao et al., 2024, p. 8)


        “Token” (Yunfan Gao et al., 2024, p. 8)


        “Phrase” (Yunfan Gao et al., 2024, p. 8)


        “Sentence” (Yunfan Gao et al., 2024, p. 8)


        “Proposition” (Yunfan Gao et al., 2024, p. 8)


        “Chunks” (Yunfan Gao et al., 2024, p. 8)


        “Document” (Yunfan Gao et al., 2024, p. 8)


        “DenseX” (Yunfan Gao et al., 2024, p. 8)


        “propositions as retrieval units” (Yunfan Gao et al., 2024, p. 8)


        “KG” (Yunfan Gao et al., 2024, p. 8)


        “Entity” (Yunfan Gao et al., 2024, p. 8)


        “Triplet” (Yunfan Gao et al., 2024, p. 8)


        “sub-Graph” (Yunfan Gao et al., 2024, p. 8)


        “Table I” (Yunfan Gao et al., 2024, p. 8)


        “Indexing Optimization” (Yunfan Gao et al., 2024, p. 8)


        “Chunking Strategy” (Yunfan Gao et al., 2024, p. 8)


        “split” (Yunfan Gao et al., 2024, p. 8)


        “chunks” (Yunfan Gao et al., 2024, p. 8)


        “Larger chunks” (Yunfan Gao et al., 2024, p. 8)


        “more context” (Yunfan Gao et al., 2024, p. 8)


        “more noise” (Yunfan Gao et al., 2024, p. 8)


        “smaller chunks” (Yunfan Gao et al., 2024, p. 8)


        “fully convey the necessary context” (Yunfan Gao et al., 2024, p. 8)


        “less noise” (Yunfan Gao et al., 2024, p. 8)


        “multiple retrieval processes” (Yunfan Gao et al., 2024, p. 8)


        “cannot strike a balance between semantic completeness and context length” (Yunfan Gao et al., 2024, p. 8)


        “Small2Big” (Yunfan Gao et al., 2024, p. 8)


        “Metadata Attachments” (Yunfan Gao et al., 2024, p. 8)


        “be artificially constructed” (Yunfan Gao et al., 2024, p. 8)


        “Reverse HyDE” (Yunfan Gao et al., 2024, p. 8)


        “Structural Index” (Yunfan Gao et al., 2024, p. 8)


        “establish a hierarchical structure” (Yunfan Gao et al., 2024, p. 8)


        “Hierarchical index structure” (Yunfan Gao et al., 2024, p. 8)


        “in parentchild relationships” (Yunfan Gao et al., 2024, p. 8)


        “Knowledge Graph index” (Yunfan Gao et al., 2024, p. 8)


        “delineates the connections” (Yunfan Gao et al., 2024, p. 8)


        “LLM can comprehend” (Yunfan Gao et al., 2024, p. 8)


        “KGP” (Yunfan Gao et al., 2024, p. 8)


        “proposed a method” (Yunfan Gao et al., 2024, p. 8)


        “using KG” (Yunfan Gao et al., 2024, p. 8)


        “Query Optimization” (Yunfan Gao et al., 2024, p. 8)


        “its direct reliance” (Yunfan Gao et al., 2024, p. 8)


        “Formulating a precise and clear question” (Yunfan Gao et al., 2024, p. 8)


        “question itself is complex” (Yunfan Gao et al., 2024, p. 8)


        “is not well-organized” (Yunfan Gao et al., 2024, p. 8)


        “complexity ambiguity” (Yunfan Gao et al., 2024, p. 8)


        “Query Expansion” (Yunfan Gao et al., 2024, p. 8)


        “Multi-Query” (Yunfan Gao et al., 2024, p. 8)


        “in parallel” (Yunfan Gao et al., 2024, p. 8)


        “Sub-Query” (Yunfan Gao et al., 2024, p. 8)


        “series of simpler sub-questions” (Yunfan Gao et al., 2024, p. 8)


        “Chain-of-Verification” (Yunfan Gao et al., 2024, p. 8)


        “undergo validation by LLM” (Yunfan Gao et al., 2024, p. 8)


        “Query Transformation” (Yunfan Gao et al., 2024, p. 9)


        “Query Rewrite” (Yunfan Gao et al., 2024, p. 9)


        “prompt LLM to rewrite the queries” (Yunfan Gao et al., 2024, p. 9)


        “smaller” (Yunfan Gao et al., 2024, p. 9)


        “RRR” (Yunfan Gao et al., 2024, p. 9)


        “let LLM generate” (Yunfan Gao et al., 2024, p. 9)


        “HyDE” (Yunfan Gao et al., 2024, p. 9)


        “Step-back Prompting method” (Yunfan Gao et al., 2024, p. 9)


        “Query Routing” (Yunfan Gao et al., 2024, p. 9)


        “Metadata Router/ Filter” (Yunfan Gao et al., 2024, p. 9)


        “extracting keywords” (Yunfan Gao et al., 2024, p. 9)


        “followed by filtering” (Yunfan Gao et al., 2024, p. 9)


        “narrow down the search scope” (Yunfan Gao et al., 2024, p. 9)


        “Semantic Router” (Yunfan Gao et al., 2024, p. 9)


        “Embedding” (Yunfan Gao et al., 2024, p. 9)


        “semantic representation capability” (Yunfan Gao et al., 2024, p. 9)


        “key role” (Yunfan Gao et al., 2024, p. 9)


        “BM25” (Yunfan Gao et al., 2024, p. 9)


        “BERT” (Yunfan Gao et al., 2024, p. 9)


        “MTEB leaderboard” (Yunfan Gao et al., 2024, p. 9)


        “Mix/hybrid Retrieval” (Yunfan Gao et al., 2024, p. 9)


        “benefit from each other” (Yunfan Gao et al., 2024, p. 9)


        “Fine-tuning Embedding Model” (Yunfan Gao et al., 2024, p. 9)


        “on your own domain dataset” (Yunfan Gao et al., 2024, p. 9)


        “align the retriever and generator” (Yunfan Gao et al., 2024, p. 9)


        “LSR” (Yunfan Gao et al., 2024, p. 9)


        “few-shot query generator” (Yunfan Gao et al., 2024, p. 9)


        “LLM-Embedder” (Yunfan Gao et al., 2024, p. 9)


        “generate reward signals” (Yunfan Gao et al., 2024, p. 9)


        “REPLUG” (Yunfan Gao et al., 2024, p. 9)


        “Adapter” (Yunfan Gao et al., 2024, p. 9)


        “limited local computational resources” (Yunfan Gao et al., 2024, p. 9)


        “UPRISE” (Yunfan Gao et al., 2024, p. 9)


        “lightweight prompt retriever” (Yunfan Gao et al., 2024, p. 9)


        “zero-shot task input” (Yunfan Gao et al., 2024, p. 9)


        “AAR” (Yunfan Gao et al., 2024, p. 9)


        “multiple downstream tasks” (Yunfan Gao et al., 2024, p. 9)


        “PRCA” (Yunfan Gao et al., 2024, p. 9)


        “reward-driven” (Yunfan Gao et al., 2024, p. 9)


        “BGM” (Yunfan Gao et al., 2024, p. 9)


        “transform the retrieved information” (Yunfan Gao et al., 2024, p. 9)


        “PKG” (Yunfan Gao et al., 2024, p. 9)


        “directive fine-tuning” (Yunfan Gao et al., 2024, p. 10)


        “GENERATION” (Yunfan Gao et al., 2024, p. 10)


        “adjusting the retrieved content” (Yunfan Gao et al., 2024, p. 10)


        “adjusting the LLM” (Yunfan Gao et al., 2024, p. 10)


        “Context Curation” (Yunfan Gao et al., 2024, p. 10)


        “Reranking” (Yunfan Gao et al., 2024, p. 10)


        “rule-based methods” (Yunfan Gao et al., 2024, p. 10)


        “model-based approaches” (Yunfan Gao et al., 2024, p. 10)


        “Cohere rerank” (Yunfan Gao et al., 2024, p. 10)


        “bge-raranker-large” (Yunfan Gao et al., 2024, p. 10)


        “Context Selection/Compression:” (Yunfan Gao et al., 2024, p. 10)


        “excessive context can introduce more noise” (Yunfan Gao et al., 2024, p. 10)


        “LLMLingua” (Yunfan Gao et al., 2024, p. 10)


        “detect and remove unimportant tokens” (Yunfan Gao et al., 2024, p. 10)


        “PRCA” (Yunfan Gao et al., 2024, p. 10)


        “training an information extractor” (Yunfan Gao et al., 2024, p. 10)


        “RECOMP” (Yunfan Gao et al., 2024, p. 10)


        “training an information condenser” (Yunfan Gao et al., 2024, p. 10)


        “reducing the number of documents” (Yunfan Gao et al., 2024, p. 10)


        “Ma et al” (Yunfan Gao et al., 2024, p. 10)


        “Filter-Reranker”” (Yunfan Gao et al., 2024, p. 10)


        “SLMs serve as filters” (Yunfan Gao et al., 2024, p. 10)


        “LLMs function as reordering agents” (Yunfan Gao et al., 2024, p. 10)


        “LLM evaluate the retrieved content” (Yunfan Gao et al., 2024, p. 10)


        “LLM Fine-tuning” (Yunfan Gao et al., 2024, p. 10)


        “adjust the model’s input and output” (Yunfan Gao et al., 2024, p. 10)


        “SANTA framework” (Yunfan Gao et al., 2024, p. 10)


        “tripartite training regimen” (Yunfan Gao et al., 2024, p. 10)


        “through reinforcement learning” (Yunfan Gao et al., 2024, p. 10)


        “manually annotating” (Yunfan Gao et al., 2024, p. 10)


        “then providing feedback” (Yunfan Gao et al., 2024, p. 10)


        “AUGMENTATION PROCESS IN RAG” (Yunfan Gao et al., 2024, p. 10)


        “Iterative Retrieval” (Yunfan Gao et al., 2024, p. 10)


        “repeatedly searched” (Yunfan Gao et al., 2024, p. 10)


        “enhance the robustness” (Yunfan Gao et al., 2024, p. 11)


        “ITERRETGEN” (Yunfan Gao et al., 2024, p. 11)


        “retrieval-enhanced generation” (Yunfan Gao et al., 2024, p. 11)


        “generationenhanced retrieval” (Yunfan Gao et al., 2024, p. 11)


        “Recursive Retrieval” (Yunfan Gao et al., 2024, p. 11)


        “improve the depth and relevance” (Yunfan Gao et al., 2024, p. 11)


        “iteratively refining search queries” (Yunfan Gao et al., 2024, p. 11)


        “obtained from previous searches” (Yunfan Gao et al., 2024, p. 11)


        “gradually converging on the most pertinent information” (Yunfan Gao et al., 2024, p. 11)


        “IRCoT” (Yunfan Gao et al., 2024, p. 11)


        “chain-of-thought” (Yunfan Gao et al., 2024, p. 11)


        “ToC” (Yunfan Gao et al., 2024, p. 11)


        “clarification tree” (Yunfan Gao et al., 2024, p. 11)


        “specific data scenarios” (Yunfan Gao et al., 2024, p. 11)


        “utilized together” (Yunfan Gao et al., 2024, p. 11)


        “structured index” (Yunfan Gao et al., 2024, p. 11)


        “may include summarizing” (Yunfan Gao et al., 2024, p. 11)


        “refines the search” (Yunfan Gao et al., 2024, p. 11)


        “delve deeper into graph-structured data sources” (Yunfan Gao et al., 2024, p. 11)


        “Adaptive Retrieval” (Yunfan Gao et al., 2024, p. 11)


        “Flare” (Yunfan Gao et al., 2024, p. 11)


        “Self-RAG” (Yunfan Gao et al., 2024, p. 11)


        “enabling LLMs” (Yunfan Gao et al., 2024, p. 11)


        “actively” (Yunfan Gao et al., 2024, p. 11)


        “optimal moments and content for retrieval” (Yunfan Gao et al., 2024, p. 11)


        “part of” (Yunfan Gao et al., 2024, p. 11)


        “LLMs employ active judgment” (Yunfan Gao et al., 2024, p. 11)


        “Graph-Toolformer” (Yunfan Gao et al., 2024, p. 11)


        “distinct steps” (Yunfan Gao et al., 2024, p. 11)


        “WebGPT” (Yunfan Gao et al., 2024, p. 11)


        “reinforcement learning framework” (Yunfan Gao et al., 2024, p. 11)


        “using special tokens” (Yunfan Gao et al., 2024, p. 11)


        “Flare” (Yunfan Gao et al., 2024, p. 11)


        “monitoring the confidence” (Yunfan Gao et al., 2024, p. 11)


        “Self-RAG” (Yunfan Gao et al., 2024, p. 12)


        ““reflection tokens”” (Yunfan Gao et al., 2024, p. 12)


        ““retrieve” and “critic”.” (Yunfan Gao et al., 2024, p. 12)


        “autonomously decides” (Yunfan Gao et al., 2024, p. 12)


        “additional classifiers” (Yunfan Gao et al., 2024, p. 12)


        “Natural Language Inference” (Yunfan Gao et al., 2024, p. 12)


        “Downstream Task” (Yunfan Gao et al., 2024, p. 12)


        “Question Answering” (Yunfan Gao et al., 2024, p. 12)


        “Information Extraction” (Yunfan Gao et al., 2024, p. 12)


        “dialogue generation” (Yunfan Gao et al., 2024, p. 12)


        “code search” (Yunfan Gao et al., 2024, p. 12)


        “Evaluation Target” (Yunfan Gao et al., 2024, p. 12)


        “question answering evaluations” (Yunfan Gao et al., 2024, p. 12)


        “EM and F1 scores” (Yunfan Gao et al., 2024, p. 12)


        “fact-checking” (Yunfan Gao et al., 2024, p. 12)


        “Accuracy” (Yunfan Gao et al., 2024, p. 12)


        “BLEU and ROUGE” (Yunfan Gao et al., 2024, p. 12)


        “answer quality” (Yunfan Gao et al., 2024, p. 12)


        “RALLE” (Yunfan Gao et al., 2024, p. 12)


        “automatic evaluation” (Yunfan Gao et al., 2024, p. 12)


        “Retrieval Quality” (Yunfan Gao et al., 2024, p. 12)


        “Hit Rate” (Yunfan Gao et al., 2024, p. 12)


        “MRR” (Yunfan Gao et al., 2024, p. 12)


        “NDCG” (Yunfan Gao et al., 2024, p. 12)


        “Generation Quality” (Yunfan Gao et al., 2024, p. 12)


        “generator’s capacity” (Yunfan Gao et al., 2024, p. 12)


        “unlabeled” (Yunfan Gao et al., 2024, p. 12)


        “faithfulness” (Yunfan Gao et al., 2024, p. 12)


        “relevance” (Yunfan Gao et al., 2024, p. 12)


        “non-harmfulness” (Yunfan Gao et al., 2024, p. 12)


        “labeled” (Yunfan Gao et al., 2024, p. 12)


        “accuracy” (Yunfan Gao et al., 2024, p. 12)


        “Evaluation Aspects” (Yunfan Gao et al., 2024, p. 12)


        “Quality Scores” (Yunfan Gao et al., 2024, p. 12)


        “Context Relevance” (Yunfan Gao et al., 2024, p. 12)


        “precision” (Yunfan Gao et al., 2024, p. 12)


        “specificity” (Yunfan Gao et al., 2024, p. 12)


        “retrieved” (Yunfan Gao et al., 2024, p. 12)


        “Answer Faithfulness” (Yunfan Gao et al., 2024, p. 12)


        “remain true to the retrieved” (Yunfan Gao et al., 2024, p. 12)


        “Answer Relevance” (Yunfan Gao et al., 2024, p. 12)


        “pertinent to the posed questions” (Yunfan Gao et al., 2024, p. 12)


        “Required Abilities” (Yunfan Gao et al., 2024, p. 12)


        “adaptability and efficiency” (Yunfan Gao et al., 2024, p. 12)


        “Noise Robustness” (Yunfan Gao et al., 2024, p. 12)


        “manage noise documents” (Yunfan Gao et al., 2024, p. 12)


        “Negative Rejection” (Yunfan Gao et al., 2024, p. 12)


        “refraining from responding” (Yunfan Gao et al., 2024, p. 12)


        “do not contain” (Yunfan Gao et al., 2024, p. 12)


        “Information Integration” (Yunfan Gao et al., 2024, p. 12)


        “synthesizing” (Yunfan Gao et al., 2024, p. 12)


        “multiple” (Yunfan Gao et al., 2024, p. 12)


        “Counterfactual Robustness” (Yunfan Gao et al., 2024, p. 12)


        “disregard known inaccuracies” (Yunfan Gao et al., 2024, p. 12)


        “quality of retrieval” (Yunfan Gao et al., 2024, p. 12)


        “quality of generation” (Yunfan Gao et al., 2024, p. 12)


        “specific metrics for each evaluation aspect” (Yunfan Gao et al., 2024, p. 14)


        “Evaluation Benchmarks and Tools” (Yunfan Gao et al., 2024, p. 14)


        “RGB” (Yunfan Gao et al., 2024, p. 14)


        “RECALL” (Yunfan Gao et al., 2024, p. 14)


        “CRUD” (Yunfan Gao et al., 2024, p. 14)


        “appraising the essential abilities” (Yunfan Gao et al., 2024, p. 14)


        “state-of-the-art automated tools” (Yunfan Gao et al., 2024, p. 14)


        “state-of-the-art automated tools” (Yunfan Gao et al., 2024, p. 14)


        “RAGAS” (Yunfan Gao et al., 2024, p. 14)


        “ARES” (Yunfan Gao et al., 2024, p. 14)


        “TruLens” (Yunfan Gao et al., 2024, p. 14)


        “quality scores” (Yunfan Gao et al., 2024, p. 14)


        “DISCUSSION AND FUTURE PROSPECTS” (Yunfan Gao et al., 2024, p. 14)


        “current challenges and future research directions” (Yunfan Gao et al., 2024, p. 14)


        “RAG vs Long Context” (Yunfan Gao et al., 2024, p. 14)


        “sparked discussions on whether RAG is still necessary” (Yunfan Gao et al., 2024, p. 14)


        “RAG-based generation” (Yunfan Gao et al., 2024, p. 14)


        “original references” (Yunfan Gao et al., 2024, p. 14)


        “help users verify” (Yunfan Gao et al., 2024, p. 14)


        “Developing new RAG methods in the context of super-long contexts is one of the future research trends” (Yunfan Gao et al., 2024, p. 14)


        “RAG Robustness” (Yunfan Gao et al., 2024, p. 14)


        “Improving RAG’s resistance to such adversarial or counterfactual inputs” (Yunfan Gao et al., 2024, p. 14)


        “including irrelevant documents can unexpectedly increase accuracy by over 30%” (Yunfan Gao et al., 2024, p. 14)


        “importance of developing specialized strategies” (Yunfan Gao et al., 2024, p. 14)


        “Hybrid Approaches” (Yunfan Gao et al., 2024, p. 14)


        “introduce SLMs with specific functionalities” (Yunfan Gao et al., 2024, p. 15)


        “Scaling laws of RAG” (Yunfan Gao et al., 2024, p. 15)


        “Inverse Scaling Law” (Yunfan Gao et al., 2024, p. 15)


        “models outperform larger ones” (Yunfan Gao et al., 2024, p. 15)


        “Production-Ready RAG” (Yunfan Gao et al., 2024, p. 15)


        “RAG ecosystem” (Yunfan Gao et al., 2024, p. 15)


        “LangChain” (Yunfan Gao et al., 2024, p. 15)


        “LLamaIndex” (Yunfan Gao et al., 2024, p. 15)


        “Flowise AI” (Yunfan Gao et al., 2024, p. 15)


        “low-code approach” (Yunfan Gao et al., 2024, p. 15)


        “drag-and-drop interface” (Yunfan Gao et al., 2024, p. 15)


        “HayStack” (Yunfan Gao et al., 2024, p. 15)


        “Meltano” (Yunfan Gao et al., 2024, p. 15)


        “Cohere Coral” (Yunfan Gao et al., 2024, p. 15)


        “unique contributions” (Yunfan Gao et al., 2024, p. 15)


        “Customization” (Yunfan Gao et al., 2024, p. 15)


        “specific requirements” (Yunfan Gao et al., 2024, p. 15)


        “Simplification” (Yunfan Gao et al., 2024, p. 15)


        “easier to use” (Yunfan Gao et al., 2024, p. 15)


        “Specialization” (Yunfan Gao et al., 2024, p. 16)


        “serve production environments” (Yunfan Gao et al., 2024, p. 16)


        “Multi-modal RAG” (Yunfan Gao et al., 2024, p. 16)


        “Image” (Yunfan Gao et al., 2024, p. 16)


        “RA-CM3” (Yunfan Gao et al., 2024, p. 16)


        “pioneering” (Yunfan Gao et al., 2024, p. 16)


        “BLIP-2” (Yunfan Gao et al., 2024, p. 16)


        “frozen image encoders” (Yunfan Gao et al., 2024, p. 16)


        “Audio and Video” (Yunfan Gao et al., 2024, p. 16)


        “GSS” (Yunfan Gao et al., 2024, p. 16)


        “UEOP” (Yunfan Gao et al., 2024, p. 16)


        “KNN-based attention fusion” (Yunfan Gao et al., 2024, p. 16)


        “Vid2Seq” (Yunfan Gao et al., 2024, p. 16)


        “Code” (Yunfan Gao et al., 2024, p. 16)


        “RBPS” (Yunfan Gao et al., 2024, p. 16)


        “CONCLUSION” (Yunfan Gao et al., 2024, p. 16)


        “summary of this paper” (Yunfan Gao et al., 2024, p. 16)


