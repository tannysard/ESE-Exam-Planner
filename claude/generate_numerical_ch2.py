import os
from pdf_builder_base import convert_markdown_string_to_pdf

ch2_md = """# INTEL 8086 MICROPROCESSOR — NUMERICAL & CALCULATION QUESTION BANK
## CHAPTER 2: 8086 ARCHITECTURE, SEGMENTATION, EVEN/ODD BANKS, BUS TIMING & INTERRUPTS
**Focus Area:** Pure Physical Address Computations, Memory Banking Cycle Counts, Bus Timing Calculations, Stack Pointer Tracking & IVT Pointer Mathematics  
**Course:** Microprocessors / Computer Architecture  
**Prepared by:** Senior Faculty & Examination Paper Setter (20+ Years Experience)  
**Syllabus Restrictions:** Strictly adheres to Mid-Sem Planner (Includes Minimum Mode, S3/S4, Even/Odd Banks, Memory Read/Write Cycles, Wait State, INTA# cycle; Excludes Maximum Mode signals, I/O bus cycles, and WAIT instruction).

---

### SECTION A: MULTIPLE CHOICE NUMERICAL QUESTIONS (MCQs)
*(1 Mark Each. Analytical problems testing segmentation math, bank cycle counts, timing parameters, and vector tables)*

#### Q2.1
If the Code Segment register (`CS`) contains `348AH` and the Instruction Pointer (`IP`) contains `12F0H`, what is the exact 20-bit physical address of the memory location from which the BIU fetches the next instruction byte?
- [A] `35B90H`
- [B] `349CFH`
- [C] `477A0H`
- [D] `35B80H`

**Correct Answer:** **[A] `35B90H`**  
**Step-by-Step Numerical Solution:**  
$$\\text{Physical Address} = (\\text{CS} \\times 10\\text{H}) + \\text{IP}$$  
$$\\text{Segment Base} = 348\\text{AH} \\times 10\\text{H} = 348\\text{A}0\\text{H}$$  
Adding the 16-bit offset `12F0H`:  
$$\\begin{array}{r@{\\quad}l}
  348\\text{A}0\\text{H} \\\\
+ 012\\text{F}0\\text{H} \\\\
\\hline
  35\\text{B}90\\text{H}
\\end{array}$$  
*(Hex Addition check: $0+0=0$; $\\text{A}+\\text{F} = 10+15 = 25 = 16+9 \\implies 9$, carry $1$; $8+2+1 = 11 = \\text{B}$; $4+1 = 5$; $3+0 = 3 \\implies \\mathbf{35B90H}$.)*

---

#### Q2.2
An 8086 CPU executes the instruction `MOV AX, [8005H]` to read a 16-bit word from memory. How many bus machine cycles will the Bus Interface Unit execute, and what will be the state of signals $\\overline{\\text{BHE}}$ and $A_0$ during the first bus cycle?
- [A] 1 bus cycle; $\\overline{\\text{BHE}} = 0, A_0 = 0$
- [B] 2 bus cycles; First cycle: $\\overline{\\text{BHE}} = 0, A_0 = 1$
- [C] 2 bus cycles; First cycle: $\\overline{\\text{BHE}} = 1, A_0 = 0$
- [D] 1 bus cycle; $\\overline{\\text{BHE}} = 0, A_0 = 1$

**Correct Answer:** **[B] 2 bus cycles; First cycle: $\\overline{\\text{BHE}} = 0, A_0 = 1$**  
**Step-by-Step Numerical Solution:**  
Address `8005H` is an **odd address** ($A_0 = 1$). A 16-bit word at an odd address spans two physical memory locations (`8005H` and `8006H`), requiring **two separate bus machine cycles**:
1. **Cycle 1:** Fetches lower byte from odd address `8005H` (Odd Bank).  
   Signals: $\\mathbf{\\overline{\\text{BHE}} = 0, A_0 = 1}$, using upper data bus lines $D_{15}-D_8$.
2. **Cycle 2:** Fetches upper byte from next even address `8006H` (Even Bank).  
   Signals: $\\overline{\\text{BHE}} = 1, A_0 = 0$, using lower data bus lines $D_7-D_0$.

---

#### Q2.3
An 8086 CPU executes `MOV AX, [8004H]` to read a 16-bit word from memory. How many bus machine cycles are executed, and what are the bank control signals?
- [A] 1 bus cycle; $\\overline{\\text{BHE}} = 0, A_0 = 0$
- [B] 2 bus cycles; $\\overline{\\text{BHE}} = 0, A_0 = 1$
- [C] 1 bus cycle; $\\overline{\\text{BHE}} = 1, A_0 = 0$
- [D] 2 bus cycles; $\\overline{\\text{BHE}} = 1, A_0 = 1$

**Correct Answer:** **[A] 1 bus cycle; $\\overline{\\text{BHE}} = 0, A_0 = 0$**  
**Step-by-Step Numerical Solution:**  
`8004H` is an **even address** ($A_0 = 0$). An aligned 16-bit word is fetched in a **single bus cycle** (4 $T$-states) because both banks are enabled concurrently:
- Even Bank enabled by $A_0 = 0$ (lower byte via $D_7-D_0$).
- Odd Bank enabled by $\\overline{\\text{BHE}} = 0$ (upper byte via $D_{15}-D_8$).

---

#### Q2.4
The Stack Segment register (`SS`) holds `9000H` and the Stack Pointer (`SP`) holds `4000H`. When the instruction `PUSH BX` is executed, what is the resulting value of `SP` and the exact physical memory address where the low byte of `BX` (`BL`) is stored?
- [A] `SP = 4002H`; Physical Address = `94002H`
- [B] `SP = 3FFEH`; Physical Address = `93FFEH`
- [C] `SP = 3FFEH`; Physical Address = `93FFFH`
- [D] `SP = 3FFFH`; Physical Address = `93FFEH`

**Correct Answer:** **[B] `SP = 3FFEH`; Physical Address = `93FFEH`**  
**Step-by-Step Numerical Solution:**  
In 8086, the stack decrements on PUSH:
1. `SP` is decremented by 2: $\\text{SP} = 4000\\text{H} - 2 = \\mathbf{3FFEH}$.
2. In Little-Endian storage:
   - High byte (`BH`) is written to higher address: $\\text{PA} = 90000\\text{H} + 3\\text{FFFH} = 93\\text{FFFH}$.
   - Low byte (`BL`) is written to lower address: $\\text{PA} = 90000\\text{H} + 3\\text{FFEH} = \\mathbf{93FFEH}$.

---

#### Q2.5
Which of the following logical address pairs (`Segment:Offset`) represents a different physical memory location than the others?
- [A] `2000H:1500H`
- [B] `2100H:0500H`
- [C] `2150H:0000H`
- [D] `2050H:0100H`

**Correct Answer:** **[D] `2050H:0100H`**  
**Step-by-Step Numerical Solution:**  
Compute physical address for each option:
- [A] $20000\\text{H} + 1500\\text{H} = \\mathbf{21500H}$
- [B] $21000\\text{H} + 0500\\text{H} = \\mathbf{21500H}$
- [C] $21500\\text{H} + 0000\\text{H} = \\mathbf{21500H}$
- [D] $20500\\text{H} + 0100\\text{H} = \\mathbf{20600H}$  
Option [D] generates `20600H`, which is different from `21500H`.

---

#### Q2.6
An external device initiates an interrupt corresponding to Interrupt Type `14H` ($20_{10}$). What is the starting hexadecimal physical address in the Interrupt Vector Table (IVT) where the 4-byte pointer for this ISR is stored?
- [A] `00014H`
- [B] `00050H`
- [C] `00028H`
- [D] `000A0H`

**Correct Answer:** **[B] `00050H`**  
**Step-by-Step Numerical Solution:**  
The base address of any interrupt vector in the IVT is given by:  
$$\\text{IVT Address} = \\text{Type Number } N \\times 4$$  
Given Type $N = 14\\text{H} = 20_{10}$:  
$$\\text{IVT Address} = 20 \\times 4 = 80_{10} = \\mathbf{00050H}$$  
The 4-byte vector spans addresses **`00050H` to `00053H`**.

---

#### Q2.7
An 8086 system operates with a $10\\text{ MHz}$ clock. An external peripheral asserts `READY` low such that one Wait State ($1\\text{ }T_w$) is inserted. What is the total duration of the memory read cycle?
- [A] $400\\text{ ns}$
- [B] $500\\text{ ns}$
- [C] $600\\text{ ns}$
- [D] $700\\text{ ns}$

**Correct Answer:** **[B] $500\\text{ ns}$**  
**Step-by-Step Numerical Solution:**  
$$T = \\frac{1}{10 \\times 10^6\\text{ Hz}} = 100\\text{ ns}$$  
$$\\text{Total Clock States} = 4\\text{ basic } (T_1, T_2, T_3, T_4) + 1\\text{ wait } (T_w) = 5\\text{ }T\\text{-states}$$  
$$\\text{Cycle Time} = 5 \\times 100\\text{ ns} = \\mathbf{500\\text{ ns}}$$

---

#### Q2.8
A program reads five consecutive 16-bit words from memory starting at physical address `40001H`. How many total bus machine cycles will the 8086 BIU execute across the external bus to complete these five reads?
- [A] 5 bus cycles
- [B] 6 bus cycles
- [C] 10 bus cycles
- [D] 8 bus cycles

**Correct Answer:** **[C] 10 bus cycles**  
**Step-by-Step Numerical Solution:**  
Let us inspect the starting address of each of the 5 consecutive words:
- Word 1 starts at `40001H` (**Odd** address) $\\implies$ **2 bus cycles** (spans `40001H-40002H`)
- Word 2 starts at `40003H` (**Odd** address) $\\implies$ **2 bus cycles** (spans `40003H-40004H`)
- Word 3 starts at `40005H` (**Odd** address) $\\implies$ **2 bus cycles** (spans `40005H-40006H`)
- Word 4 starts at `40007H` (**Odd** address) $\\implies$ **2 bus cycles** (spans `40007H-40008H`)
- Word 5 starts at `40009H` (**Odd** address) $\\implies$ **2 bus cycles** (spans `40009H-4000AH`)  
Every single word starts on an odd byte boundary!  
$$\\text{Total Bus Cycles} = 5 \\times 2 = \\mathbf{10\\text{ bus machine cycles}}$$  
*(If words had started at `40000H`, only 5 cycles would be needed! This illustrates the 100% bus penalty of unaligned arrays).*

---

#### Q2.9
During the 8086 interrupt acknowledge sequence for a maskable hardware interrupt (`INTR`), how many total clock states ($T$-states) are consumed by the two `INTA#` bus cycles, assuming no wait states are inserted?
- [A] $4\\text{ }T$-states
- [B] $6\\text{ }T$-states
- [C] $8\\text{ }T$-states
- [D] $12\\text{ }T$-states

**Correct Answer:** **[C] $8\\text{ }T$-states**  
**Step-by-Step Numerical Solution:**  
The 8086 generates **two distinct interrupt acknowledge bus machine cycles** (Pulse 1 and Pulse 2).  
Each standard bus cycle consists of $4\\text{ }T$-states ($T_1, T_2, T_3, T_4$).  
$$\\text{Total Clock Cycles} = 2 \\times 4\\text{ }T\\text{-states} = \\mathbf{8\\text{ }T\\text{-states}}$$

---

#### Q2.10
If `DS = F000H` and an instruction specifies an effective address offset of `FFFFH`, what is the 20-bit physical address accessed by the processor, and does it cause an address wraparound?
- [A] `FFFFFH`; No wraparound
- [B] `0FFFFH`; Wraparound occurs
- [C] `10000H`; Wraparound occurs
- [D] `F000FH`; No wraparound

**Correct Answer:** **[A] `FFFFFH`; No wraparound**  
**Step-by-Step Numerical Solution:**  
$$\\text{Segment Base} = \\text{F000H} \\times 10\\text{H} = \\text{F0000H}$$  
$$\\text{Physical Address} = \\text{F0000H} + \\text{FFFFH} = \\mathbf{FFFFFH}$$  
`FFFFFH` is the exact terminal byte of the 8086 $1\\text{ MB}$ physical address space. No wraparound occurs because the sum does not exceed $2^{20}-1$.

---

#### Q2.11
A subroutine execution begins with `SP = 2000H`. During its execution, the subroutine executes the following instructions in sequence:
```assembly
PUSH AX
PUSH BX
PUSH CX
POP DX
```
What is the exact hexadecimal value of `SP` after executing this sequence?
- [A] `1FF8H`
- [B] `1FFCH`
- [C] `2002H`
- [D] `1FFAH`

**Correct Answer:** **[B] `1FFCH`**  
**Step-by-Step Numerical Solution:**  
- Initial: `SP = 2000H`
- `PUSH AX`: $\\text{SP} = 2000\\text{H} - 2 = 1\\text{FFEH}$
- `PUSH BX`: $\\text{SP} = 1\\text{FFEH} - 2 = 1\\text{FFCH}$
- `PUSH CX`: $\\text{SP} = 1\\text{FFCH} - 2 = 1\\text{FFAH}$
- `POP DX`: $\\text{SP} = 1\\text{FFAH} + 2 = \\mathbf{1FFCH}$  
Net change: 3 pushes ($-6$) + 1 pop ($+2$) $= -4$.  
$$\\text{Final SP} = 2000\\text{H} - 4 = \\mathbf{1FFCH}$$

---

#### Q2.12
How much physical memory is occupied by the complete Interrupt Vector Table (IVT) in the 8086 microprocessor?
- [A] 256 bytes
- [B] 512 bytes
- [C] 1024 bytes (1 Kilobyte)
- [D] 2048 bytes (2 Kilobytes)

**Correct Answer:** **[C] 1024 bytes (1 Kilobyte)**  
**Step-by-Step Numerical Solution:**  
The 8086 supports 256 interrupt types (Type 0 to Type 255).  
Each interrupt vector requires 4 bytes (2 bytes for IP, 2 bytes for CS).  
$$\\text{Total Size} = 256 \\times 4\\text{ bytes} = 1024\\text{ bytes} = \\mathbf{1\\text{ Kilobyte}}$$  
Physical address span: `00000H` to `003FFH`.

---

#### Q2.13
An 8086 microprocessor is reset by pulsing the `RESET` pin HIGH for 5 clock cycles. What is the physical memory address from which the first instruction is fetched immediately following reset?
- [A] `00000H`
- [B] `FFFF0H`
- [C] `FFFFFH`
- [D] `F0000H`

**Correct Answer:** **[B] `FFFF0H`**  
**Step-by-Step Numerical Solution:**  
Upon reset, internal registers are initialized as:  
`CS = FFFFH`, `IP = 0000H`.  
$$\\text{Physical Address} = (\\text{CS} \\times 10\\text{H}) + \\text{IP} = (\\text{FFFFH} \\times 10\\text{H}) + 0000\\text{H} = \\text{FFFF0H} + 0 = \\mathbf{FFFF0H}$$

---

#### Q2.14
How many clock cycles are executed by the BIU to fetch a 16-bit word from physical address `90000H` versus `90001H` on an 8086 operating with zero wait states?
- [A] 4 cycles for `90000H`; 4 cycles for `90001H`
- [B] 4 cycles for `90000H`; 8 cycles for `90001H`
- [C] 8 cycles for `90000H`; 4 cycles for `90001H`
- [D] 8 cycles for `90000H`; 8 cycles for `90001H`

**Correct Answer:** **[B] 4 cycles for `90000H`; 8 cycles for `90001H`**  
**Step-by-Step Numerical Solution:**  
- `90000H` is an aligned even address $\\implies$ 1 bus cycle $= \\mathbf{4\\text{ clock cycles}}$.  
- `90001H` is an unaligned odd address $\\implies$ 2 bus cycles $= 2 \\times 4 = \\mathbf{8\\text{ clock cycles}}$.

---

#### Q2.15
The 8086 Parity Flag (`PF`) tests the parity of:
- [A] All 16 bits of the result
- [B] Only the upper 8 bits of the result
- [C] Only the lower 8 bits (least significant byte) of the result
- [D] The Carry Flag combined with the Zero Flag

**Correct Answer:** **[C] Only the lower 8 bits (least significant byte) of the result**  
**Step-by-Step Numerical Solution:**  
In the 8086 architecture, the Parity Flag (`PF`) reflects parity (even number of 1-bits) strictly for the **least significant byte (bits 0 to 7)** of any arithmetic/logical result, regardless of whether it was an 8-bit or 16-bit operation.

---

### SECTION B: FILL IN THE BLANKS (NUMERICAL)
*(Exact numerical values and address evaluations)*

1. The physical address generated by logical address `2000H:0500H` is **_______________**.  
   *Answer:* **`20500H`** ($20000\\text{H} + 0500\\text{H} = 20500\\text{H}$)

2. A word operand stored at odd memory address `12345H` requires **_______________** bus cycles to be fetched by the 8086.  
   *Answer:* **2** (Unaligned word transfer)

3. An 8086 system operating at $5\\text{ MHz}$ completes a standard 4-clock machine cycle in exactly **_______________** nanoseconds.  
   *Answer:* **800** ($4 \\times 200\\text{ ns} = 800\\text{ ns}$)

4. The memory addresses occupied by the Interrupt Vector Table range from `00000H` to **_______________**.  
   *Answer:* **`003FFH`** ($1024 - 1 = 3\\text{FFH}$)

5. If `SS = 6000H` and `SP = 1000H`, after executing `POP BX`, `SP` becomes **_______________**.  
   *Answer:* **`1002H`** ($1000\\text{H} + 2 = 1002\\text{H}$)

6. The starting physical address in the IVT for Interrupt Type `05H` is **_______________**.  
   *Answer:* **`00014H`** ($5 \\times 4 = 20 = 14\\text{H}$)

7. The maximum permissible size of any single logical segment in the 8086 is **_______________** Kilobytes.  
   *Answer:* **64** ($2^{16} = 65,536\\text{ bytes} = 64\\text{ KB}$)

8. To execute a 16-bit aligned word access, $\\overline{\\text{BHE}}$ is **_______________** and $A_0$ is **_______________**.  
   *Answer:* **0; 0** (Both banks active)

9. When an 8086 branches due to a taken jump, up to **_______________** instruction bytes in the queue are flushed.  
   *Answer:* **6** (Depth of 8086 FIFO queue)

10. In an 8086 running at $8\\text{ MHz}$, the time duration of one $T$-state is **_______________** nanoseconds.  
    *Answer:* **125** ($1 / 8\\text{ MHz} = 125\\text{ ns}$)

---

### SECTION C: TRUE OR FALSE WITH MATHEMATICAL PROOFS

#### Q2.16
**Statement:** The logical address `1234H:0005H` yields a physical address of `12345H`.  
**Answer:** **TRUE**  
**Proof:** $\\text{PA} = (1234\\text{H} \\times 10\\text{H}) + 0005\\text{H} = 12340\\text{H} + 0005\\text{H} = \\mathbf{12345H}$.

---

#### Q2.17
**Statement:** Reading a 16-bit word from physical address `40003H` requires two bus cycles.  
**Answer:** **TRUE**  
**Proof:** Address `40003H` has $A_0 = 1$ (odd boundary). Reading a word spans `40003H` (Odd Bank) and `40004H` (Even Bank), requiring two distinct bus machine cycles.

---

#### Q2.18
**Statement:** In an 8086 system operating at $8\\text{ MHz}$, one $T$-state lasts $200\\text{ ns}$.  
**Answer:** **FALSE**  
**Proof:** $T = 1 / (8 \\times 10^6\\text{ Hz}) = 125\\text{ ns}$, not $200\\text{ ns}$ (which corresponds to $5\\text{ MHz}$).

---

#### Q2.19
**Statement:** The pointer for Interrupt Type 4 is stored from physical address `00010H` to `00013H` in memory.  
**Answer:** **TRUE**  
**Proof:** Base address $= 4 \\times 4 = 16_{10} = 10\\text{H}$. The 4-byte entry spans `00010H, 00011H, 00012H, 00013H`.

---

#### Q2.20
**Statement:** The `PUSH` instruction increments the Stack Pointer by 2.  
**Answer:** **FALSE**  
**Proof:** In 8086 architecture, the stack grows downwards toward lower addresses; `PUSH` **decrements** `SP` by 2 ($\\text{SP} \\leftarrow \\text{SP} - 2$).

---

#### Q2.21
**Statement:** Reading a byte from memory address `20002H` activates the Odd Memory Bank.  
**Answer:** **FALSE**  
**Proof:** Address `20002H` has $A_0 = 0$ (even address). It activates the **Even Memory Bank** via $A_0 = 0$ and $\\overline{\\text{BHE}} = 1$.

---

#### Q2.22
**Statement:** Logical address `F000H:FFFFH` calculates to physical address `FFFFFH`.  
**Answer:** **TRUE**  
**Proof:** $\\text{PA} = \\text{F0000H} + \\text{FFFFH} = \\mathbf{FFFFFH}$.

---

#### Q2.23
**Statement:** If an external peripheral pulls `READY` low for 3 clock cycles, the CPU inserts 3 Wait States ($3\\text{ }T_w$).  
**Answer:** **TRUE**  
**Proof:** The 8086 samples `READY` on each falling edge starting at $T_3$. For every cycle `READY` is held low, an additional $T_w$ state is inserted.

---

#### Q2.24
**Statement:** A logical segment in 8086 can start at any odd physical address.  
**Answer:** **FALSE**  
**Proof:** A segment must start on a **16-byte paragraph boundary**, meaning its base physical address must have its least significant hexadecimal digit equal to `0H` (e.g., `20000H`, `20010H`), which is always an even address divisible by 16.

---

#### Q2.25
**Statement:** An interrupt acknowledge sequence executes two bus cycles lasting a total of at least 8 clock periods.  
**Answer:** **TRUE**  
**Proof:** Each `INTA#` cycle takes 4 $T$-states. Two cycles require $2 \\times 4 = 8\\text{ }T\\text{-states}$ minimum.

---

### SECTION D: 3 MARKS NUMERICAL QUESTIONS

#### Q2.26
**Question:** Prove mathematically that two different logical addresses `1000H:2000H` and `1200H:0000H` point to the exact same physical memory location. Explain why this architectural property is called **Segment Overlap**.  
**Model Solution:**  
1. Physical Address for `1000H:2000H`:  
   $$\\text{PA}_1 = (1000\\text{H} \\times 10\\text{H}) + 2000\\text{H} = 10000\\text{H} + 2000\\text{H} = \\mathbf{12000H}$$  
2. Physical Address for `1200H:0000H`:  
   $$\\text{PA}_2 = (1200\\text{H} \\times 10\\text{H}) + 0000\\text{H} = 12000\\text{H} + 0000\\text{H} = \\mathbf{12000H}$$  
3. **Segment Overlap Justification:**  
   Because segments in 8086 are spaced every 16 bytes (1 paragraph) while each segment can span up to 64 Kilobytes, adjacent segments overlap heavily. The identical physical address `12000H` can be referenced by multiple valid combinations of segment base and offset.  
**Marking Scheme:**
- Calculation for first address (`12000H`): **1 Mark**
- Calculation for second address (`12000H`): **1 Mark**
- Explanation of 16-byte paragraph spacing and overlap: **1 Mark**

---

#### Q2.27
**Question:** An 8086 CPU needs to read an array of 10 consecutive 16-bit words.  
(a) Calculate the total number of bus machine cycles and $T$-states required if the array begins at even address `50000H` (no wait states).  
(b) Calculate the total number of bus machine cycles and $T$-states required if the array begins at odd address `50001H` (no wait states).  
(c) Compute the percentage time penalty resulting from the unaligned memory allocation.  
**Model Solution:**  
(a) Aligned Array starting at `50000H`:  
    Each of the 10 words begins at an even address (`50000H, 50002H, \\dots, 50012H`).  
    Each word requires 1 bus cycle (4 $T$-states).  
    $$\\text{Total Cycles} = 10 \\times 1 = \\mathbf{10\\text{ bus cycles}}; \\quad \\text{Total } T\\text{-states} = 10 \\times 4 = \\mathbf{40\\text{ }T\\text{-states}}$$  
(b) Misaligned Array starting at `50001H`:  
    Each of the 10 words begins at an odd address (`50001H, 50003H, \\dots, 50013H`).  
    Each word requires 2 bus cycles (8 $T$-states).  
    $$\\text{Total Cycles} = 10 \\times 2 = \\mathbf{20\\text{ bus cycles}}; \\quad \\text{Total } T\\text{-states} = 10 \\times 8 = \\mathbf{80\\text{ }T\\text{-states}}$$  
(c) Percentage Time Penalty:  
    $$\\text{Penalty} = \\frac{80 - 40}{40} \\times 100\\% = \\mathbf{100\\%\\text{ overhead}}$$  
**Marking Scheme:**
- (a) Aligned calculation (10 cycles, 40 states): **1 Mark**
- (b) Misaligned calculation (20 cycles, 80 states): **1 Mark**
- (c) 100% penalty calculation: **1 Mark**

---

#### Q2.28
**Question:** Given `SS = 7000H` and `SP = 2000H`. Trace the exact hexadecimal values of `SP` and the physical addresses written/read during the execution of:
```assembly
PUSH AX     ; AX = 1234H
PUSH BX     ; BX = 5678H
POP CX      ; Destination register CX
```
**Model Solution:**  
1. Initial: `SS = 7000H`, `SP = 2000H`.  
2. `PUSH AX` (`AX = 1234H`):  
   - $\\text{SP} = 2000\\text{H} - 2 = \\mathbf{1FFEH}$  
   - Address $70000\\text{H} + 1\\text{FFFH} = \\mathbf{71FFFH}$ stores `12H` (`AH`)  
   - Address $70000\\text{H} + 1\\text{FFEH} = \\mathbf{71FFEH}$ stores `34H` (`AL`)  
3. `PUSH BX` (`BX = 5678H`):  
   - $\\text{SP} = 1\\text{FFEH} - 2 = \\mathbf{1FFCH}$  
   - Address $70000\\text{H} + 1\\text{FFDH} = \\mathbf{71FFDH}$ stores `56H` (`BH`)  
   - Address $70000\\text{H} + 1\\text{FFCH} = \\mathbf{71FFCH}$ stores `78H` (`BL`)  
4. `POP CX`:  
   - Reads low byte `78H` from address `71FFCH` into `CL`.  
   - Reads high byte `56H` from address `71FFDH` into `CH` $\\implies \\mathbf{CX = 5678H}$.  
   - $\\text{SP} = 1\\text{FFCH} + 2 = \\mathbf{1FFEH}$.  
**Marking Scheme:**
- Step 2 PUSH AX trace: **1 Mark**
- Step 3 PUSH BX trace: **1 Mark**
- Step 4 POP CX trace and final SP: **1 Mark**

---

#### Q2.29
**Question:** An external peripheral triggers Interrupt Type `1CH` (the PC timer tick interrupt).  
(a) Calculate the starting physical address in the IVT corresponding to Type `1CH`.  
(b) Detail the exact byte layout across the 4 bytes in the IVT.  
(c) If the IVT entry contains: `[00070H] = 50H`, `[00071H] = 10H`, `[00072H] = 00H`, `[00073H] = 20H`, determine the starting physical address of the ISR.  
**Model Solution:**  
(a) IVT Starting Physical Address:  
    Type $N = 1\\text{CH} = 28_{10}$.  
    $$\\text{IVT Address} = 28 \\times 4 = 112_{10} = \\mathbf{00070H}$$  
(b) Byte Layout:  
    - `00070H`: Low byte of `IP`  
    - `00071H`: High byte of `IP`  
    - `00072H`: Low byte of `CS`  
    - `00073H`: High byte of `CS`  
(c) ISR Starting Address:  
    - Offset `IP` = `1050H`  
    - Segment `CS` = `2000H`  
    $$\\text{Physical Address} = (2000\\text{H} \\times 10\\text{H}) + 1050\\text{H} = 20000\\text{H} + 1050\\text{H} = \\mathbf{21050H}$$  
**Marking Scheme:**
- (a) IVT address calculation `00070H`: **1 Mark**
- (b) Byte layout explanation: **1 Mark**
- (c) ISR physical address calculation `21050H`: **1 Mark**

---

#### Q2.30
**Question:** An 8086 system operates at $5\\text{ MHz}$ ($T = 200\\text{ ns}$). A memory read cycle requires 2 wait states ($2\\text{ }T_w$).  
(a) Calculate the total duration of the bus cycle.  
(b) In an 8086 memory read cycle, the active-low read strobe `RD#` is asserted near the end of $T_2$ and de-asserted in $T_4$. Calculate the total duration that `RD#` remains active (asserted LOW) across the cycle.  
**Model Solution:**  
(a) Total Cycle Duration:  
    $$\\text{States} = 4 + 2 = 6\\text{ }T\\text{-states}$$  
    $$\\text{Duration} = 6 \\times 200\\text{ ns} = \\mathbf{1200\\text{ ns} = 1.2\\,\\mu\\text{s}}$$  
(b) Duration of Active `RD#` Strobe:  
    `RD#` is asserted during $T_2$ and held active throughout all wait states ($T_w$) and $T_3$, ending in $T_4$.  
    Active time spans approximately $T_2(\\text{part}) + T_w + T_w + T_3 + T_4(\\text{part}) \\approx 3.5\\text{ }T$-states.  
    $$\\text{RD\\# Active Duration} \\approx 3.5 \\times 200\\text{ ns} = \\mathbf{700\\text{ ns}}$$  
**Marking Scheme:**
- (a) Total cycle duration: **1.5 Marks**
- (b) `RD#` active strobe duration calculation: **1.5 Marks**

---

#### Q2.31
**Question:** Construct a bank selection truth table and determine the state of $\\overline{\\text{BHE}}$, $A_0$, the data bus lines used, and the number of bus machine cycles for:  
(a) Read byte from `80000H`  
(b) Read byte from `80001H`  
(c) Read word from `80000H`  
(d) Read word from `80001H`  
**Model Solution:**  
| Operation | Address | $\\overline{\\text{BHE}}$ | $A_0$ | Data Lines Active | Bus Cycles |
|:---|:---|:---:|:---:|:---:|:---:|
| (a) Read Byte | `80000H` (Even) | 1 | 0 | $D_7-D_0$ (Even Bank) | 1 |
| (b) Read Byte | `80001H` (Odd) | 0 | 1 | $D_{15}-D_8$ (Odd Bank) | 1 |
| (c) Read Word | `80000H` (Even/Aligned) | 0 | 0 | $D_{15}-D_0$ (Both Banks) | 1 |
| (d) Read Word | `80001H` (Odd/Misaligned) | Cycle 1: 0<br>Cycle 2: 1 | Cycle 1: 1<br>Cycle 2: 0 | Cycle 1: $D_{15}-D_8$<br>Cycle 2: $D_7-D_0$ | 2 |
**Marking Scheme:**
- 0.75 Marks per sub-part (a, b, c, d): **3 Marks Total**

---

#### Q2.32
**Question:** Calculate the memory reset starting address of the 8086:  
(a) Show mathematically why `CS = FFFFH` and `IP = 0000H` yields physical address `FFFF0H`.  
(b) How many bytes of instructions can be stored between this starting address and the top of memory (`FFFFFH`)?  
(c) What specific instruction is typically placed at `FFFF0H` by system firmware engineers?  
**Model Solution:**  
(a) Calculation:  
    $$\\text{PA} = (\\text{FFFFH} \\times 10\\text{H}) + 0000\\text{H} = \\text{FFFF0H} + 0 = \\mathbf{FFFF0H}$$  
(b) Available Storage Span:  
    $$\\text{Bytes} = \\text{FFFFFH} - \\text{FFFF0H} + 1 = 0000\\text{FH} + 1 = 15 + 1 = \\mathbf{16\\text{ bytes}}$$  
(c) Placed Instruction:  
    Because 16 bytes is too small to hold a full initialization BIOS program, engineers place an **Inter-segment (FAR) Jump instruction** (e.g., `JMP FAR PTR BIOS_START`, which takes 5 bytes) at address `FFFF0H` to jump immediately to the main bootstrap code lower in EPROM.  
**Marking Scheme:**
- (a) Mathematical proof: **1 Mark**
- (b) Available byte count (16 bytes): **1 Mark**
- (c) FAR JMP instruction explanation: **1 Mark**

---

#### Q2.33
**Question:** An operating system loads a new program into memory. The data segment occupies physical addresses from `20000H` to `245A3H`. The code segment must be placed immediately following the data segment on the next available **paragraph boundary**.  
(a) What is the lowest valid starting physical address for the code segment?  
(b) What value must be loaded into the Code Segment register (`CS`)?  
(c) How many bytes of memory are wasted (fragmented) between the two segments?  
**Model Solution:**  
(a) Next Paragraph Boundary:  
    A paragraph must begin on a multiple of 16 (hexadecimal address ending in `0H`).  
    The data segment ends at `245A3H`.  
    The next address ending in `0H` is **`245B0H`**.  
(b) `CS` Register Value:  
    $$\\text{CS} = \\frac{\\text{Physical Address}}{10\\text{H}} = \\frac{245\\text{B}0\\text{H}}{10\\text{H}} = \\mathbf{245BH}$$  
(c) Fragmented Bytes:  
    Unused locations span from `245A4H` to `245AFH`:  
    $$\\text{Wasted Bytes} = 245\\text{AFH} - 245\\text{A4H} + 1 = \\text{B}_{16} + 1 = 11 + 1 = \\mathbf{12\\text{ bytes}}$$  
**Marking Scheme:**
- (a) Next paragraph address `245B0H`: **1 Mark**
- (b) `CS` base register value `245BH`: **1 Mark**
- (c) Calculation of 12 wasted bytes: **1 Mark**

---

### SECTION E: 5 MARKS NUMERICAL & ARCHITECTURAL PROBLEMS

#### Q2.34
**Question:** An 8086 processor running at $8\\text{ MHz}$ ($T = 125\\text{ ns}$) writes two 16-bit words into memory:  
1. Word `1234H` to physical address `40000H`  
2. Word `5678H` to physical address `40003H`  
**Perform the following:**  
(a) State the total number of bus machine cycles, total $T$-states, and total execution time for Write 1.  
(b) State the total number of bus machine cycles, total $T$-states, and total execution time for Write 2.  
(c) Detail the state of signals $\\overline{\\text{BHE}}$, $A_0$, data lines ($D_7-D_0$ and $D_{15}-D_8$), and bytes transferred during each bus cycle for both writes.  
**Model Solution:**  
**Write 1: Word `1234H` at Even Address `40000H` (Aligned):**  
- **Bus Machine Cycles:** **1 bus cycle** ($4\\text{ }T$-states).  
- **Execution Time:** $4 \\times 125\\text{ ns} = \\mathbf{500\\text{ ns}}$.  
- **Signal & Data Breakdown:**  
  - $\\overline{\\text{BHE}} = 0$, $A_0 = 0$ (Both banks enabled simultaneously).  
  - Lower byte `34H` is written to Even Bank (`40000H`) via **$D_7-D_0$**.  
  - Upper byte `12H` is written to Odd Bank (`40001H`) via **$D_{15}-D_8$**.  

**Write 2: Word `5678H` at Odd Address `40003H` (Misaligned):**  
- **Bus Machine Cycles:** **2 bus machine cycles** ($8\\text{ }T$-states total).  
- **Execution Time:** $8 \\times 125\\text{ ns} = \\mathbf{1000\\text{ ns} = 1.0\\,\\mu\\text{s}}$.  
- **Signal & Data Breakdown:**  
  - **Cycle 1 (Odd Bank Access):**  
    - Address on bus $= 40003\\text{H}$. Signals: $\\mathbf{\\overline{\\text{BHE}} = 0, A_0 = 1}$.  
    - Lower byte `78H` is transferred across **$D_{15}-D_8$** to location `40003H`.  
    - Lines $D_7-D_0$ are inactive.  
  - **Cycle 2 (Even Bank Access):**  
    - Address on bus $= 40004\\text{H}$. Signals: $\\mathbf{\\overline{\\text{BHE}} = 1, A_0 = 0}$.  
    - Upper byte `56H` is transferred across **$D_7-D_0$** to location `40004H`.  
    - Lines $D_{15}-D_8$ are inactive.  
**Marking Scheme:**
- (a) Write 1 cycles, states, and time: **1.5 Marks**
- (b) Write 2 cycles, states, and time: **1.5 Marks**
- (c) Signal and byte-to-bank breakdown for both cycles: **2 Marks**

---

#### Q2.35
**Question:** An 8086 system operating at $10\\text{ MHz}$ ($T = 100\\text{ ns}$) is interfaced to a slow memory subsystem.  
- During a Memory Read cycle, the external memory device asserts `READY = 0` during clock state $T_2$.  
- The memory maintains `READY = 0` through two full wait states, driving `READY = 1` during the second wait state.  
(a) Calculate the exact duration of each clock state ($T_1, T_2, T_{w1}, T_{w2}, T_3, T_4$).  
(b) Calculate the total cycle execution time.  
(c) State the exact logic levels driven on pins `M/IO#`, `DT/R#`, `ALE`, `DEN#`, and `RD#` during clock state $T_{w1}$.  
**Model Solution:**  
(a) Duration of Clock States:  
    Each clock state $= 100\\text{ ns}$.  
    - $T_1 = 100\\text{ ns}$ (Address output, `ALE` pulse)  
    - $T_2 = 100\\text{ ns}$ (Address floats, status output, `RD#` and `DEN#` asserted)  
    - $T_{w1} = 100\\text{ ns}$ (Wait state 1: `READY` sampled LOW at falling edge)  
    - $T_{w2} = 100\\text{ ns}$ (Wait state 2: `READY` sampled HIGH at falling edge)  
    - $T_3 = 100\\text{ ns}$ (Data placed on bus by memory)  
    - $T_4 = 100\\text{ ns}$ (Data latched, `RD#` and `DEN#` de-asserted)  
(b) Total Execution Time:  
    $$\\text{Total States} = 6\\text{ }T\\text{-states}$$  
    $$\\text{Total Time} = 6 \\times 100\\text{ ns} = \\mathbf{600\\text{ ns}}$$  
(c) Signal States during Wait State $T_{w1}$:  
    - `M/IO#` = **HIGH (1)** (Memory operation)  
    - `DT/R#` = **LOW (0)** (Receive mode: bus $\\rightarrow$ CPU)  
    - `ALE` = **LOW (0)** (Inactive, address was latched in $T_1$)  
    - `DEN#` = **LOW (0)** (Active: transceivers enabled)  
    - `RD#` = **LOW (0)** (Active: memory output buffers enabled)  
**Marking Scheme:**
- (a) Clock state breakdown: **1.5 Marks**
- (b) Total execution time calculation: **1 Mark**
- (c) Signal state evaluation during wait state: **2.5 Marks**

---

#### Q2.36
**Question:** An external peripheral triggers maskable Interrupt Type `20H`. The initial CPU register state is:  
`SS = 8000H`, `SP = 1500H`, `CS = 2000H`, `IP = 0400H`, `Flag Register = 0642H`.  
The Interrupt Vector Table contains the following bytes at the entry for Type `20H`:  
`[00080H] = 30H`, `[00081H] = 12H`, `[00082H] = 00H`, `[00083H] = 50H`.  
**Trace the complete hardware interrupt execution:**  
(a) Calculate the IVT address range accessed by the CPU.  
(b) Show the exact contents of the stack memory and the final value of `SP` after the 8086 pushes Flags, CS, and IP.  
(c) Determine the new contents loaded into `CS` and `IP`, and calculate the physical address of the first instruction of the ISR.  
(d) State the new values of the Interrupt Flag (`IF`) and Trap Flag (`TF`) inside the CPU.  
**Model Solution:**  
(a) IVT Address Calculation:  
    Type $N = 20\\text{H} = 32_{10}$.  
    $$\\text{IVT Base Address} = 32 \\times 4 = 128_{10} = \\mathbf{00080H}$$  
    Address range: **`00080H` to `00083H`**.  
(b) Stack Trace and `SP`:  
    Initial `SP = 1500H`, `SS Base = 80000H`.  
    1. **Push Flags (`0642H`):**  
       - `SP` becomes `14FEH`.  
       - Location `814FFH` stores `06H`; Location `814FEH` stores `42H`.  
    2. **Push CS (`2000H`):**  
       - `SP` becomes `14FCH`.  
       - Location `814FDH` stores `20H`; Location `814FCH` stores `00H`.  
    3. **Push IP (`0400H`):**  
       - `SP` becomes `14FAH`.  
       - Location `814FBH` stores `04H`; Location `814FAH` stores `00H`.  
    Final Stack Pointer: **`SP = 14FAH`** (decremented by 6 bytes).  
(c) New `CS:IP` and ISR Physical Address:  
    - `IP` loaded from `[00080H:00081H]` = **`1230H`**  
    - `CS` loaded from `[00082H:00083H]` = **`5000H`**  
    $$\\text{ISR Physical Address} = (5000\\text{H} \\times 10\\text{H}) + 1230\\text{H} = 50000\\text{H} + 1230\\text{H} = \\mathbf{51230H}$$  
(d) Flag Modifications:  
    The 8086 automatically clears both flags:  
    $$\\mathbf{IF = 0} \\text{ (Maskable interrupts disabled); } \\quad \\mathbf{TF = 0} \\text{ (Single-step disabled)}$$  
**Marking Scheme:**
- (a) IVT address range: **1 Mark**
- (b) Stack memory addresses and final SP (`14FAH`): **1.5 Marks**
- (c) Loaded registers and ISR address (`51230H`): **1.5 Marks**
- (d) Clearance of IF and TF: **1 Mark**

---

#### Q2.37
**Question:** A software system requires three memory segments:  
- **Code Segment:** Requires $48\\text{ Kilobytes}$  
- **Data Segment:** Requires $24\\text{ Kilobytes}$  
- **Stack Segment:** Requires $8\\text{ Kilobytes}$  
The segments are to be placed contiguously starting at physical address `10000H` on paragraph boundaries in the order: Code Segment $\\rightarrow$ Data Segment $\\rightarrow$ Stack Segment.  
(a) Determine the starting and ending physical addresses for all three segments.  
(b) Specify the exact 16-bit values that must be loaded into registers `CS`, `DS`, and `SS`.  
(c) What value must be loaded into the Stack Pointer (`SP`) so that the stack begins at the top of its allocated segment?  
**Model Solution:**  
(a) Physical Address Calculations:  
1. **Code Segment ($48\\text{ KB} = 48 \\times 1024 = 49,152\\text{ bytes} = \\text{C000H}$ bytes):**  
   - Starting Address = **`10000H`**  
   - Ending Address = $10000\\text{H} + \\text{C000H} - 1 = \\mathbf{1BFFFH}$  
2. **Data Segment ($24\\text{ KB} = 24 \\times 1024 = 24,576\\text{ bytes} = 6000\\text{H}$ bytes):**  
   - Next paragraph boundary after `1BFFFH` is **`1C000H`**.  
   - Starting Address = **`1C000H`**  
   - Ending Address = $1\\text{C}000\\text{H} + 6000\\text{H} - 1 = \\mathbf{21FFFH}$  
3. **Stack Segment ($8\\text{ KB} = 8 \\times 1024 = 8,192\\text{ bytes} = 2000\\text{H}$ bytes):**  
   - Next paragraph boundary after `21FFFH` is **`22000H`**.  
   - Starting Address = **`22000H`**  
   - Ending Address = $22000\\text{H} + 2000\\text{H} - 1 = \\mathbf{23FFFH}$  

(b) Base Segment Registers:  
- $\\text{CS} = 10000\\text{H} / 10\\text{H} = \\mathbf{1000H}$  
- $\\text{DS} = 1\\text{C}000\\text{H} / 10\\text{H} = \\mathbf{1C00H}$  
- $\\text{SS} = 22000\\text{H} / 10\\text{H} = \\mathbf{2200H}$  

(c) Stack Pointer Initialization:  
Because the stack grows downward, `SP` must be initialized to point just above the allocated $8\\text{ KB}$ block ($2000\\text{H}$ bytes offset):  
$$\\mathbf{SP = 2000H}$$  
The first push will decrement `SP` to `1FFEH` and write to physical address $22000\\text{H} + 1\\text{FFEH} = 23\\text{FFEH}$, perfectly utilizing the top of the stack segment without exceeding bounds.  
**Marking Scheme:**
- (a) Starting/ending addresses for all 3 segments: **2 Marks**
- (b) Values for CS, DS, SS: **1.5 Marks**
- (c) SP initialization to `2000H` with justification: **1.5 Marks**

---

#### Q2.38
**Question:** Compare the memory bus bandwidth (data throughput in Megabytes per second) of an 8086 microprocessor operating at a clock frequency of $10\\text{ MHz}$ under two scenarios (assuming zero wait states):  
- **Scenario A:** Transferring an array of 16-bit words stored at aligned even memory addresses.  
- **Scenario B:** Transferring an array of 16-bit words stored at unaligned odd memory addresses.  
Calculate the numerical transfer rates for both scenarios and explain why compiler optimizers enforce word alignment.  
**Model Solution:**  
**1. Scenario A (Aligned Even Addresses):**  
- Each 16-bit word transfer takes **1 bus cycle = 4 $T$-states**.  
- Time per transfer:  
  $$t_{\\text{transfer}} = 4 \\times \\left(\\frac{1}{10 \\times 10^6}\\right) = 4 \\times 100\\text{ ns} = 400\\text{ ns} = 0.4\\,\\mu\\text{s}$$  
- Bytes transferred per cycle $= 2\\text{ bytes}$.  
- Throughput:  
  $$\\text{Throughput}_A = \\frac{2\\text{ bytes}}{400 \\times 10^{-9}\\text{ s}} = 5,000,000\\text{ bytes/s} = \\mathbf{5.00\\text{ Megabytes/second (MB/s)}}$$  

**2. Scenario B (Unaligned Odd Addresses):**  
- Each 16-bit word transfer takes **2 bus cycles = 8 $T$-states**.  
- Time per transfer:  
  $$t_{\\text{transfer}} = 8 \\times 100\\text{ ns} = 800\\text{ ns} = 0.8\\,\\mu\\text{s}$$  
- Bytes transferred per 2 cycles $= 2\\text{ bytes}$.  
- Throughput:  
  $$\\text{Throughput}_B = \\frac{2\\text{ bytes}}{800 \\times 10^{-9}\\text{ s}} = 2,500,000\\text{ bytes/s} = \\mathbf{2.50\\text{ Megabytes/second (MB/s)}}$$  

**3. Architectural Conclusion:**  
- Unaligned word transfers cut the bus data bandwidth exactly in half ($2.5\\text{ MB/s}$ vs $5.0\\text{ MB/s}$).  
- Modern optimizing compilers automatically insert padding bytes (`ALIGN 2` directive) to align all 16-bit variables on even boundaries, ensuring maximum memory throughput.  
**Marking Scheme:**
- Calculation of Scenario A throughput (5.0 MB/s): **2 Marks**
- Calculation of Scenario B throughput (2.5 MB/s): **2 Marks**
- Compiler alignment justification: **1 Mark**

---

#### Q2.39
**Question:** A program initiates a sequence of nested subroutine calls:  
- Initial State: `SS = 5000H`, `SP = 3000H`, `CS = 1000H`, `IP = 0200H`.  
- At `IP = 0200H`, it executes a Near Call: `CALL NEAR PTR SUB1` (where the next sequential instruction is at `IP = 0203H`).  
- Inside `SUB1`, at `IP = 0500H`, it executes a Far Call: `CALL FAR PTR SUB2` (where the next sequential instruction is at `CS = 1000H`, `IP = 0505H`).  
- Inside `SUB2`, it executes: `PUSH AX` (`AX = 1122H`), followed by `PUSH BX` (`BX = 3344H`).  
**Calculate and document:**  
(a) The value of `SP` after each step.  
(b) The complete memory contents of the stack segment showing physical addresses and the data bytes stored at each location.  
**Model Solution:**  
**(a) Tracking `SP`:**  
1. Initial: `SP = 3000H`  
2. After `CALL NEAR PTR SUB1`:  
   Pushes 16-bit return offset `0203H` (2 bytes) $\\implies \\mathbf{SP = 2FFEH}$.  
3. After `CALL FAR PTR SUB2`:  
   Pushes 16-bit return segment `1000H` (2 bytes), then 16-bit return offset `0505H` (2 bytes) $\\implies \\mathbf{SP = 2FFAH}$.  
4. After `PUSH AX`:  
   Pushes 16-bit data `1122H` $\\implies \\mathbf{SP = 2FF8H}$.  
5. After `PUSH BX`:  
   Pushes 16-bit data `3344H` $\\implies \\mathbf{SP = 2FF6H}$.  

**(b) Complete Stack Memory Map:**  
$$\\text{SS Base} = 5000\\text{H} \\times 10\\text{H} = 50000\\text{H}$$  
| Physical Address | Offset in SS | Byte Stored | Description |
|:---|:---|:---:|:---|
| `52FF6H` | `2FF6H` | **`44H`** | Low byte of `BX` (`BL`) |
| `52FF7H` | `2FF7H` | **`33H`** | High byte of `BX` (`BH`) |
| `52FF8H` | `2FF8H` | **`22H`** | Low byte of `AX` (`AL`) |
| `52FF9H` | `2FF9H` | **`11H`** | High byte of `AX` (`AH`) |
| `52FFAH` | `2FFAH` | **`05H`** | Low byte of Far return `IP` |
| `52FFBH` | `2FFBH` | **`05H`** | High byte of Far return `IP` (`0505H`) |
| `52FFCH` | `2FFCH` | **`00H`** | Low byte of Far return `CS` |
| `52FFDH` | `2FFDH` | **`10H`** | High byte of Far return `CS` (`1000H`) |
| `52FFEH` | `2FFEH` | **`03H`** | Low byte of Near return `IP` |
| `52FFFH` | `2FFFH` | **`02H`** | High byte of Near return `IP` (`0203H`) |
**Marking Scheme:**
- (a) Correct SP tracking across all 5 steps: **2.5 Marks**
- (b) Complete stack memory map table with exact bytes and addresses: **2.5 Marks**
"""

if __name__ == "__main__":
    convert_markdown_string_to_pdf(ch2_md, "Numerical_Question_Bank_Chapter_2.pdf", "8086 Numerical Bank - Chapter 2")
