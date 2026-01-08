---
title: "Docling Technical Report"
authors: ""
year: 2024
tags: []
link: ""
---


# 🚀 TL;DR


Docling เป็นแพ็คเกจแปลง pdf ให้เป็น json/markdown


## 💡 Key Insight / "The Aha! Moment"


เป็นแหล่งแรกๆ ที่พบว่าใช้ extraction กับ layout แปลกๆได้


## 🧐 Problem Statement

- pdf โครงสร้างไม่แน่นอน extract ข้อมูลมาใช้ลำบาก

## 🛠️ Methodology (The "How")

- DocLayNet ทำวิเคราะห์ layout
- Tableformer (SOTA) ทำโครงสร้างตาราง

## My Critique

- **Strengths:**
    - เร็วและเบา
    - open source
    - json/md เอาไปใช้ต่อได้
- **Weaknesses/Limitations:**
    - OCR น่าจะยังเป็นปัญหา โดยเฉพาะไทย
    - รูปภาพยังไม่ได้มีการจัดการ

## 🔮 Future Work / Ideas for Me

- RegCom น่าจะเอาไปช่วยได้ตอน extract เอกสาร
- จะเอาไอเดียการทำความเข้าใจรูปภาพมาต่อยอดได้มั้ย เช่นทำความเข้าใจตัวเลขในกราฟ

---


# Zotero Notes


    # Annotations (1/7/2026, 8:48:27 PM)


        # Annotations
        (1/7/2026, 8:48:27 PM)


        “huge variability in formats” (Auer et al., 2024, p. 1)


        “weak standardization” (Auer et al., 2024, p. 1)


        “printing-optimized characteristic” (Auer et al., 2024, p. 1)


        “linear pipeline” (Auer et al., 2024, p. 2)


        “all text content” (Auer et al., 2024, p. 2)


        “their geometric coordinates” (Auer et al., 2024, p. 2)


        “render the visual” (Auer et al., 2024, p. 2)


        “two highly capable AI models” (Auer et al., 2024, p. 3)


        “layout analysis model” (Auer et al., 2024, p. 3)


        “TableFormer” (Auer et al., 2024, p. 3)


        “Layout Analysis Model” (Auer et al., 2024, p. 3)


        “object-detector” (Auer et al., 2024, p. 3)


        “predicts the bounding-boxes” (Auer et al., 2024, p. 3)


        “classes of various elements” (Auer et al., 2024, p. 3)


        “derived from RT-DETR” (Auer et al., 2024, p. 3)


        “re-trained on DocLayNet” (Auer et al., 2024, p. 3)


        “72 dpi resolution” (Auer et al., 2024, p. 3)


        “post-processed” (Auer et al., 2024, p. 3)


        “group them into meaningful and complete units” (Auer et al., 2024, p. 3)


        “Table Structure Recognition” (Auer et al., 2024, p. 3)


        “TableFormer” (Auer et al., 2024, p. 3)


        “vision-transformer model for table structure recovery” (Auer et al., 2024, p. 3)


        “TableFormer handles many characteristics of tables” (Auer et al., 2024, p. 3)


        “feeds all table objects detected” (Auer et al., 2024, p. 4)


        “OCR” (Auer et al., 2024, p. 4)


        “optional” (Auer et al., 2024, p. 4)


        “EasyOCR” (Auer et al., 2024, p. 4)


        “final output” (Auer et al., 2024, p. 4)


        “serialized to JSON” (Auer et al., 2024, p. 4)


        “Markdown representation” (Auer et al., 2024, p. 4)


        “quackling” (Auer et al., 2024, p. 5)


        “enable document-native optimized vector embedding and chunking” (Auer et al., 2024, p. 5)


        “open IBM data prep kit” (Auer et al., 2024, p. 5)


        “figure-classifier model” (Auer et al., 2024, p. 5)


        “equationrecognition model” (Auer et al., 2024, p. 5)


        “code-recognition model” (Auer et al., 2024, p. 5)


