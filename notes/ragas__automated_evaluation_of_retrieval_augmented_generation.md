---
title: "Ragas: Automated Evaluation of Retrieval Augmented Generation"
authors: "Shahul Es, Jithin James, Luis Espinosa-Anke, Steven Schockaert"
year: 2025
tags: ["Computer Science - Computation and Language", "Evaluation"]
link: "http://arxiv.org/abs/2309.15217"
---


# 🚀 TL;DR


Framework การวัดผล RAG แบบไม่มีเฉลย


## 💡 Key Insight / "The Aha! Moment"


เมื่อไม่มีเฉลยแล้ววัดผล RAG ได้ยาก การวัดใน 3 ส่วนโดยใช้ LLM - Faithfulness, Answer Relevance, Context Relevance จะช่วยให้มองออกว่าด้านในบกพร่องอยู่


## 🧐 Problem Statement

- ไม่รู้จะวัดผล RAG ยังไง
- ไม่มีเฉลย ไม่อยากใช้แรงคน

## 🛠️ Methodology (The "How")

- **Architecture:** [ออกแบบการทดลองเพื่อวัด 3 ค่า ใช้ LLM ในตอนนั้น (GPT-4) และ embedding ในตอนนั้น (text-embedding-ada-002)
- **Data:** 50 Wikipedia pages ปี 2022 เป็นต้นไป เพราะโมเดลยังไม่ถูกเทรนถึง (knowledge cutoff)
- **Scoring:**
    - ต้องมี
        - คำถาม
        - ข้อมูลประกอบคำถาม (บริบท)
        - คำตอบ
    - Faithfulness - ให้ LLM แตกคำตอบออกมาย่อยๆ เอาข้อความย่อยๆไปไล่เช็คกับบริบทว่าตรงมั้ย กี่เปอร์เซ็นต์
    - Answer Relevance - จากคำตอบ ให้ LLM เดาคำถามขึ้นมา แล้วหาความคล้ายเฉลี่ยกับคำถามจริงและคำถามที่เดา
    - Context Relevance - ให้ LLM คัดเนื้อของบริบทออกมา แล้วดูว่าเนื้อเป็นกี่เปอร์เซ็นต์ของคำตอบ
- **Experiment:**
    - ข้อมูล Wikipedia
    - จัดแข่งมนุษย์ vs AI ภายใต้สมมติฐานว่ามนุษย์ต้องถูก คำตอบต้องใกล้เคียงมนุษย์
    - Faithfulness - เลือกระหว่างคำตอบจริงๆ vs คำตอบปลอมๆ
    - Answer Relevance - เลือกระหว่างคำตอบจริงๆ  vs คำตอบไม่สมบูรณ์
    - Context Relevance - เลือกระหว่างบริบทเนื้อ vs บริบทปนขยะ
    - มนุษย์ตัดสินใจได้ว่าคู่ไหนดีกว่ากันในแต่ละหมวดหมู่ AI ต้องเดา
    - AI มีสามตัว (RAGAS framework, GPT score, GPT ranking)

## 📊 Results & Evaluation

- **Baselines:** GPT
- **Metrics:** ความคล้ายของ RAGAS เหมือนมนุษย์สุด

## 💭 My Critique

- **Strengths:**
    - Framework อ้างอิงได้
- **Weaknesses/Limitations:**
    - ถ้า AI ทั้งสามตัวเก่งพอ ผลการทดลองน่าจะใช้ไม่ได้ เพราะ baseline คงดีอยู่แล้ว แต่ RAGAS ทำให้วิเคราะห์ได้ว่า RAG ผิดตรงไหน (ใช้ debug)
    - ภาษาไทยยังไม่แน่ใจ แต่ในแง่ framework ไม่ติด ส่วนของ embedding วัด similarity อาจจะเป็นปัญหาถึงความสามารถ embedding ไทยปัจจุบัน?
- **Questions:**
    - จำนวน? จำนวนคำถามที่สร้าง? จำนวนบริบทที่เอามา?

## 🔮 Future Work / Ideas for Me

- _100% for framework_

# Zotero Notes


    # Annotations (1/5/2026, 10:25:30 PM)


        # Annotations
        (1/5/2026, 10:25:30 PM)


        “reference-free” (Shahul Es et al., 2025, p. 1)


        “there are several dimensions to consider” (Shahul Es et al., 2025, p. 1)


        “ability of the retrieval system” (Shahul Es et al., 2025, p. 1)


        “ability of the LLM” (Shahul Es et al., 2025, p. 1)


        “quality of the generation” (Shahul Es et al., 2025, p. 1)


        “without having to rely on ground truth human annotations” (Shahul Es et al., 2025, p. 1)


        “idea of using LLMs as knowledge bases” (Shahul Es et al., 2025, p. 1)


        “not able to answer questions about events that have happened after they were trained” (Shahul Es et al., 2025, p. 1)


        “struggle to memorise knowledge that is only rarely mentioned in the training corpus” (Shahul Es et al., 2025, p. 1)


        “initial approaches relied on specialised LMs” (Shahul Es et al., 2025, p. 1)


        “simply adding retrieved documents to the input of a standard LM can also work well” (Shahul Es et al., 2025, p. 1)


        “affected by the retrieval model” (Shahul Es et al., 2025, p. 1)


        “or the prompt” (Shahul Es et al., 2025, p. 1)


        “Automated evaluation” (Shahul Es et al., 2025, p. 1)


        “often evaluated in terms of the language modelling task” (Shahul Es et al., 2025, p. 1)


        “not always predictive” (Shahul Es et al., 2025, p. 1)


        “not accessible for some closed models” (Shahul Es et al., 2025, p. 1)


        “we present Ragas” (Shahul Es et al., 2025, p. 1)


        “reference answers may not be available” (Shahul Es et al., 2025, p. 2)


        “an integration with both llama-index and Langchain” (Shahul Es et al., 2025, p. 2)


        “Related Work” (Shahul Es et al., 2025, p. 2)


        “Estimating faithfulness using LLMs” (Shahul Es et al., 2025, p. 2)


        “existing models struggle with detecting hallucination when using standard prompting strategies” (Shahul Es et al., 2025, p. 2)


        “linking the generated responses to facts from an external knowledge base” (Shahul Es et al., 2025, p. 2)


        “probabilities assigned to individual tokens” (Shahul Es et al., 2025, p. 2)


        “BARTScore” (Shahul Es et al., 2025, p. 2)


        “estimates factuality” (Shahul Es et al., 2025, p. 2)


        “whether the answer is true or false” (Shahul Es et al., 2025, p. 2)


        “the need to access the hidden states” (Shahul Es et al., 2025, p. 2)


        “unsuitable” (Shahul Es et al., 2025, p. 2)


        “SelfCheckGPT” (Shahul Es et al., 2025, p. 2)


        “sampling multiple answers” (Shahul Es et al., 2025, p. 2)


        “Automated evaluation of text generation systems” (Shahul Es et al., 2025, p. 2)


        “evaluate other aspects” (Shahul Es et al., 2025, p. 2)


        “GPTScore” (Shahul Es et al., 2025, p. 2)


        “based on the average probability” (Shahul Es et al., 2025, p. 2)


        “directly asks ChatGPT” (Shahul Es et al., 2025, p. 2)


        “between 0 and 100” (Shahul Es et al., 2025, p. 2)


        “of being sensitive to the design of the prompt” (Shahul Es et al., 2025, p. 2)


        “LLM to select the best answer among a number of candidates” (Shahul Es et al., 2025, p. 2)


        “the order in which the answers is presented” (Shahul Es et al., 2025, p. 2)


        “the availability of one or more reference answers” (Shahul Es et al., 2025, p. 2)


        “BERTScore” (Shahul Es et al., 2025, p. 2)


        “MoverScore” (Shahul Es et al., 2025, p. 2)


        “the similarity between the generated answer and the reference answers” (Shahul Es et al., 2025, p. 2)


        “BARTScore” (Shahul Es et al., 2025, p. 2)


        “uses reference answers” (Shahul Es et al., 2025, p. 2)


        “Evaluation Strategies” (Shahul Es et al., 2025, p. 2)


        “we usually do not have access to human-annotated datasets or reference answers” (Shahul Es et al., 2025, p. 3)


        “fully self-contained” (Shahul Es et al., 2025, p. 3)


        “reference-free” (Shahul Es et al., 2025, p. 3)


        “Faithfulness” (Shahul Es et al., 2025, p. 3)


        “the answer should be grounded in the given context” (Shahul Es et al., 2025, p. 3)


        “Answer Relevance” (Shahul Es et al., 2025, p. 3)


        “generated answer should address the actual question” (Shahul Es et al., 2025, p. 3)


        “Context Relevance” (Shahul Es et al., 2025, p. 3)


        “retrieved context should be focused, containing as little irrelevant information as possible” (Shahul Es et al., 2025, p. 3)


        “associated with feeding long context” (Shahul Es et al., 2025, p. 3)


        “long” (Shahul Es et al., 2025, p. 3)


        “often less effective” (Shahul Es et al., 2025, p. 3)


        “gpt-3.5-turbo-16k” (Shahul Es et al., 2025, p. 3)


        “Faithfulness” (Shahul Es et al., 2025, p. 3)


        “LLM to extract a set of statements” (Shahul Es et al., 2025, p. 3)


        “decompose longer sentences” (Shahul Es et al., 2025, p. 3)


        “using a verification function” (Shahul Es et al., 2025, p. 3)


        “Answer relevance” (Shahul Es et al., 2025, p. 3)


        “prompt the LLM to generate n potential questions qi based on as(q),” (Shahul Es et al., 2025, p. 3)


        “text-embedding-ada-002” (Shahul Es et al., 2025, p. 3)


        “Context relevance” (Shahul Es et al., 2025, p. 3)


        “penalise the” (Shahul Es et al., 2025, p. 3)


        “inclusion of redundant information” (Shahul Es et al., 2025, p. 4)


        “LLM extracts a subset of sentences, Sext, from c(q) that are crucial to answer q” (Shahul Es et al., 2025, p. 4)


        “The WikiEval Dataset” (Shahul Es et al., 2025, p. 4)


        “created a new dataset, which we refer to as WikiEval” (Shahul Es et al., 2025, p. 4)


        “selected 50 Wikipedia pages” (Shahul Es et al., 2025, p. 4)


        “asked ChatGPT to suggest a question that can be answered based on the introductory section of the page” (Shahul Es et al., 2025, p. 4)


        “used ChatGPT to answer the generated question” (Shahul Es et al., 2025, p. 4)


        “questions were annotated” (Shahul Es et al., 2025, p. 4)


        “by two annotators” (Shahul Es et al., 2025, p. 4)


        “Faithfulness” (Shahul Es et al., 2025, p. 4)


        “first used ChatGPT” (Shahul Es et al., 2025, p. 4)


        “without access” (Shahul Es et al., 2025, p. 4)


        “judge which of the two answers was the most faithful” (Shahul Es et al., 2025, p. 4)


        “Answer relevance” (Shahul Es et al., 2025, p. 4)


        “used ChatGPT to obtain candidate answers” (Shahul Es et al., 2025, p. 4)


        “indicate which of the two answers had the highest answer relevance” (Shahul Es et al., 2025, p. 4)


        “Context relevance” (Shahul Es et al., 2025, p. 4)


        “first added additional sentences to the context by scraping back-links” (Shahul Es et al., 2025, p. 4)


        “Experiments” (Shahul Es et al., 2025, p. 5)


        “count how often the answer/context preferred by the model” (Shahul Es et al., 2025, p. 5)


        “coincides with the answer/context preferred by the human annotators” (Shahul Es et al., 2025, p. 5)


        “terms of accuracy” (Shahul Es et al., 2025, p. 5)


        “GPT Score” (Shahul Es et al., 2025, p. 5)


        “assign a score between 0 and 10” (Shahul Es et al., 2025, p. 5)


        “GPT Ranking” (Shahul Es et al., 2025, p. 5)


        “asks ChatGPT to select the preferred answer/” (Shahul Es et al., 2025, p. 5)


        “context” (Shahul Es et al., 2025, p. 5)


        “much closer aligned with the human judgements” (Shahul Es et al., 2025, p. 5)


        “ChatGPT often struggles with the task of selecting the sentences from the context that are crucia” (Shahul Es et al., 2025, p. 5)


        “Conclusions” (Shahul Es et al., 2025, p. 5)


