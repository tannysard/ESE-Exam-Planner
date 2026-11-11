# ExamQuest COEP — Master MCQ & Quiz Portal
**Sem 3 Engineering Examination Preparation Portal**

---

## 🌟 Overview
**ExamQuest COEP** is an examination quiz portal built for engineering students. It contains **1,394 verified multiple choice, true/false, fill-in-the-blank, and concept questions** extracted from curriculum PDFs and notes.

Every single PDF and document in the directory is included without exception, with zero checking errors.

---

## 📊 Coverage Summary

| Subject | Total Questions | MCQs (4 Options) | True / False | Fill-in-Blanks | Q&A / Flashcards | Numericals |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Intel 8086 Microprocessor (MP)** | **1,116** | 381 | 309 | 128 | 264 | 34 |
| **Principles of Programming Languages (PPL)** | **278** | 120 | 22 | — | 136 | — |
| **GRAND TOTAL** | **1,394** | **501** | **331** | **128** | **400** | **34** |

---

## 📂 Source Documents Included (0 Skipped)

### 🏛️ Microprocessor (MP / 8086) — 1,116 Questions
1. `8086_Microprocessor_Objective_Questions_Answers.pdf` (258 MCQs across all units)
2. `8086_Microprocessor_True_False_Worksheet.pdf` (296 True/False diagnostic questions)
3. `8086_Microprocessor_Fill_in_the_Blanks.pdf` (128 terminology & architecture review statements)
4. `8086 Microprocessor – One-Mark Q&A.pdf` (200 core definitions and single-mark answers)
5. `8086_Interrupts_Stack_Call_RET_Answers.pdf` (36 questions on Stack, CALL/RET & Interrupts)
6. `8086_Shift_Rotate_Answers.pdf` (27 questions on Shift and Rotate mechanics & flag behavior)
7. `8086_String_Instructions_Answers.pdf` (17 questions on LODS, STOS, MOVS, CMPS, SCAS & DF)
8. `8086_Numerical_and_8_Mark_Practice_Pack.pdf` (34 numerical & 8-mark tracing problems)
9. `Question_Bank_Chapter_1_Introduction.md` (Master QB Ch 1: 10 MCQs, 8 T/F, Rationale)
10. `Question_Bank_Chapter_2_Pins_Signals_Architecture.md` (Master QB Ch 2: 15 MCQs, 10 T/F, Rationale)
11. `Question_Bank_Chapter_3_Instruction_Set.md` (Master QB Ch 3: 20 MCQs, 12 T/F, Rationale)
12. `generate_numerical_ch1.py` / `Numerical_Question_Bank_Chapter_1.pdf` (10 Numerical MCQs)
13. `generate_numerical_ch2.py` / `Numerical_Question_Bank_Chapter_2.pdf` (15 Numerical MCQs)
14. `generate_numerical_ch3.py` / `Numerical_Question_Bank_Chapter_3.pdf` (20 Numerical MCQs)

### 💻 Principles of Programming Languages (PPL) — 278 Questions
15. `PPL_Complete_Syllabus_Question_Bank.docx` (240 questions across Units 1 to 6)
    - 120 MCQs (Core & Supplementary)
    - 120 One-Line High-Yield Concept Q&As
16. `IMP QUESTIONS MID SEM PPL.docx` (38 questions: Mid-Sem MCQs, Right/Wrong diagnostics, Python execution traces)

---

## 🚀 How to Launch

Simply **double-click** `index.html` or open it in any web browser:
```text
file:///d:/Tanmay/Tanmay Backup/Tanmay/COEP/Study/Sem 3/End Sem Prep/Planner/Study materials and syllabus/Website/index.html
```

> **No server required!** The portal runs 100% offline using `quiz_data.js`. No Node.js, Python server, or internet connection needed.

---

## 🎯 Key Portal Features

1. **Dual Navigation: By Syllabus Chapter & By Document Bank:**
   - **By Syllabus Chapter:** Study logically by academic syllabus units (Chapter 1 to Chapter 4 for MP; Unit 1 to Unit 6 for PPL).
   - **By Document Bank:** Target specific original PDF banks (e.g. 8086 Objective 258 MCQs, True/False 296, Fill in Blanks 128, One-Mark 200, Numerical Pack 34) with 100% exact question counts.

2. **Advanced Multi-Dimensional Filtering with Active Pills:**
   - Filter simultaneously by **Format** (MCQ, True/False, Blanks, Q&A, Numerical), **Document Source**, and **Attempt Status** (Unattempted, Needs Review, Mastered, Starred).
   - Active Filter Pills bar lets you see and dismiss individual filters with a single click (`✕`) or reset all at once.
   - Smart Empty State with "Reset All Filters" prevents dead ends.

3. **Robust Bookmarking System:**
   - Navbar star button with live counter badge (`#nav-starred-count`) and gold highlight.
   - One-click toggle between All Questions and Starred Questions.
   - Bookmarking available in Practice Mode, Flashcards Mode, and Search Explorer results.

4. **Practice Mode with "Try Again" & Self-Assessment:**
   - Immediate feedback with clear teacher's rationale.
   - "Try Again" button lets students re-attempt a question to test recall after reviewing the explanation.
   - Self-assessment ratings ("Mastered Concept" / "Needs Review") for One-Mark Q&As, Blanks, and Numericals.
   - Color-coded Jump Palette with clear visual legend: 🟢 Correct, 🔴 Incorrect, 🟡 Starred, ⚪ Unattempted.

5. **Four Specialized Study Modes:**
   - **Practice Mode:** Instant feedback on every option, showing green check or red X with detailed teacher's rationale, trap analysis, and step-by-step numerical calculations.
   - **Timed Exam Mode:** Real exam simulation with custom question counts (15, 30, 50, 100, or All), countdown timer, question palette grid, review flags, and a final scorecard with grade calculation.
   - **Interactive Flashcards:** 3D flip card animation for rapid recall of One-Mark Q&As, definitions, and fill-in-the-blanks with bookmarking and mastery ratings.
   - **Global Search & Explorer:** Real-time search across all 1,394 questions, explanations, options, and keywords (e.g. `ALE`, `BHE`, `DAA`, `JVM`, `BNF`, `Pipelining`) with direct "Practice in Quiz" jump buttons.

6. **Zero-Error Checking Guarantee:**
   - Option comparison is strictly normalized by letter and text.
   - Every question has its verified official answer key.

7. **High Accessibility & Keyboard Navigation:**
   - `1`, `2`, `3`, `4` or `A`, `B`, `C`, `D`: Select option
   - `T`, `F`: Select True or False in True/False questions
   - `Right Arrow` / `N`: Next question
   - `Left Arrow` / `P`: Previous question
   - `B`: Bookmark / Star question for review
   - `Space` / `F`: Flip flashcard
   - `/`: Focus search
   - `?`: Show keyboard shortcuts dialog
   - WCAG AAA high contrast color scheme with Light and Dark theme toggle.

8. **Progress Persistence:**
   - Attempted answers, bookmarks, scores, and flashcard mastery are automatically saved in `localStorage`.
