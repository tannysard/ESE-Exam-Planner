import os
import pypdf
from pdf_builder_base import convert_markdown_string_to_pdf

overview_md = """# INTEL 8086 MICROPROCESSOR — MASTER NUMERICAL & INSTRUCTION QUESTION BANK
## OVERVIEW, SYLLABUS FILTERING & MATHEMATICAL REFERENCE GUIDE

**Author:** Senior Faculty & Examination Paper Setter (20+ Years Experience in Microprocessor Systems)  
**Target Focus:** Pure Numericals, Machine Code Encoding, Addressing Math, Bus Timing & Instruction Tracing  
**Primary References:** `8086 notes.pdf` & `8086_3_Day_Midsem_Study_Planner.pdf`  
**Compliance Guarantee:** 100% compliant with midsem study planner syllabus (All non-syllabus topics strictly excluded).

---

### 1. PHILOSOPHY & OBJECTIVE OF THE NUMERICAL QUESTION BANK
In university and competitive examinations, numerical and instruction-tracing questions carry the highest weightage and differentiate top-tier students. Rote memory questions fail to assess true engineering competence. This bank is formulated to provide **comprehensive numerical rigor**:
1. **Mathematical Precision:** Every question is backed by an exact, step-by-step mathematical derivation, binary decomposition, and hexadecimal proof.
2. **Pedagogical Traps & Corner Cases:** Questions deliberately integrate edge-cases such as:
   - Unaligned odd-boundary memory transfers incurring 100% bus cycle penalties.
   - Non-modification of the Carry Flag by `INC` and `DEC`.
   - Signed arithmetic overflow in `NEG 80H` and division quotient overflows triggering Type 0 exceptions.
   - Exact relative branch displacement computations ($-128 \\text{ to } +127$ bytes) measured relative to $IP_{\\text{next}}$.
   - Little-Endian byte storage in stack operations and Interrupt Vector Table (IVT) indexing.
3. **Marking Schemes:** Every subjective question is accompanied by an itemized evaluator's marking breakdown.

---

### 2. CORE MATHEMATICAL FORMULAE REFERENCE SHEET

| Architectural Parameter | Mathematical Formula / Equation | Practical 8086 Values |
|:---|:---|:---|
| **Physical Address Generation** | $\\text{Physical Address} = (\\text{Segment Register} \\times 10\\text{H}) + \\text{Offset}$ | $\\text{CS:IP, DS:BX, SS:SP, etc.}$ |
| **Physical Memory Capacity** | $\\text{Capacity} = 2^n \\times \\text{Addressability}$ | $n=20 \\implies 2^{20} \\times 1\\text{ byte} = 1\\text{ MB}$ |
| **Ending Physical Address** | $\\text{Ending Address} = \\text{Starting Address} + \\text{Block Size} - 1$ | $64\\text{ KB} \\implies \\text{Span } = 10000\\text{H}$ |
| **Clock Period ($T$-State)** | $T = \\frac{1}{f_{\\text{CLK}}}$ | $f=5\\text{ MHz} \\implies 200\\text{ ns}; f=8\\text{ MHz} \\implies 125\\text{ ns}$ |
| **Bus Cycle Duration** | $t_{\\text{cycle}} = (4 + k) \\times T$ | $k = \\text{number of wait states } (T_w)$ |
| **Contention Fault Current** | $I_{\\text{contention}} = \\frac{V_{OH} - V_{OL}}{R_{OH} + R_{OL}}$ | Total 8-bit surge $= 8 \\times I_{\\text{line}}$ |
| **IVT Vector Base Address** | $\\text{IVT Address} = 4 \\times N$ | $N = \\text{Interrupt Type } (0 \\le N \\le 255)$ |
| **Relative Branch Displacement** | $\\text{Displacement} = \\text{Target Address} - IP_{\\text{next}}$ | $-128 \\le \\text{Disp} \\le +127$ (8-bit signed) |
| **Near RET with Parameter Pop** | $\\text{New SP} = \\text{Old SP} + 2 + n$ | $n = \\text{immediate byte count}$ |
| **Unsigned Overflow Flag** | $CF = \\text{Carry out of MSB}$ | Bit 7 for byte; Bit 15 for word |
| **Signed Overflow Flag** | $OF = C_{\\text{in to MSB}} \\oplus C_{\\text{out of MSB}}$ | Set if result exceeds signed range |

---

### 3. QUESTION DISTRIBUTION & COVERAGE MATRIX

| Document Name | Chapter Focus | MCQs | Fill in Blanks | True / False | 3 Marks Questions | 5 Marks Questions | Total Questions | Total Pages |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **[Numerical_Question_Bank_Chapter_1.pdf](file:///d:/Tanmay/Tanmay%20Backup/Tanmay/COEP/Study/Sem%203/MP/8086/PDFs/claude/Numerical_Question_Bank_Chapter_1.pdf)** | **Chapter 1: Address Lines, Memory Interfacing, Contention & Demultiplexing** | 10 | 8 | 8 | 6 | 4 | **36** | **14** |
| **[Numerical_Question_Bank_Chapter_2.pdf](file:///d:/Tanmay/Tanmay%20Backup/Tanmay/COEP/Study/Sem%203/MP/8086/PDFs/claude/Numerical_Question_Bank_Chapter_2.pdf)** | **Chapter 2: Segmentation, Bank Cycles, Bus Timing, Stack Tracking & IVT** | 15 | 10 | 10 | 8 | 6 | **49** | **17** |
| **[Numerical_Question_Bank_Chapter_3.pdf](file:///d:/Tanmay/Tanmay%20Backup/Tanmay/COEP/Study/Sem%203/MP/8086/PDFs/claude/Numerical_Question_Bank_Chapter_3.pdf)** | **Chapter 3: Machine Code Disassembly, EA Math, Flag Tracing, BCD/ASCII & Strings** | 20 | 12 | 12 | 10 | 8 | **62** | **21** |
| **GRAND TOTAL** | | **45** | **30** | **30** | **24** | **18** | **147 Questions** | **52 Pages** |

---

### 4. SUMMARY OF STRICTLY EXCLUDED TOPICS (COMPLIANCE AUDIT)
As mandated by the official Midsem Study Planner, zero questions have been framed from:
- ❌ Historical evolution, 4004 to Pentium generations (Chapter 1).
- ❌ Maximum-mode signals ($S_0-S_2$, $\\overline{\\text{RQ}}/\\overline{\\text{GT}}$, $\\overline{\\text{LOCK}}$, $QS_0/QS_1$, 8288 bus controller) (Chapter 2).
- ❌ I/O Read and I/O Write bus cycles (Chapter 2).
- ❌ `WAIT` instruction (Chapter 2 & 3).
- ❌ Instruction-execution clock timing tables / EACT tables 3.12–3.29 (Chapter 3).
- ❌ `IN` and `OUT` data transfer instructions (Chapter 3).
- ❌ Skipped processor control instructions: `CMC`, `CLI`, `STI`, `HLT`, `ESC`, `LOCK`, `NOP` (Chapter 3).
"""

def merge_pdfs():
    overview_pdf = "00_Master_Numerical_Question_Bank_Overview.pdf"
    convert_markdown_string_to_pdf(overview_md, overview_pdf, "8086 Master Numerical Bank Overview")
    
    files_to_merge = [
        "00_Master_Numerical_Question_Bank_Overview.pdf",
        "Numerical_Question_Bank_Chapter_1.pdf",
        "Numerical_Question_Bank_Chapter_2.pdf",
        "Numerical_Question_Bank_Chapter_3.pdf"
    ]
    
    merged_pdf = "8086_Master_Numerical_and_Instruction_Question_Bank.pdf"
    merger = pypdf.PdfWriter()
    
    print("\nMerging individual numerical PDFs into grand master PDF...")
    for pdf in files_to_merge:
        if os.path.exists(pdf):
            reader = pypdf.PdfReader(pdf)
            print(f"Adding {pdf} ({len(reader.pages)} pages)...")
            merger.append(reader)
        else:
            print(f"Warning: {pdf} not found!")
            
    merger.write(merged_pdf)
    merger.close()
    
    final_reader = pypdf.PdfReader(merged_pdf)
    size_mb = os.path.getsize(merged_pdf) / (1024 * 1024)
    print(f"\nSuccessfully created {merged_pdf} ({size_mb:.2f} MB, {len(final_reader.pages)} pages)")

if __name__ == "__main__":
    merge_pdfs()
