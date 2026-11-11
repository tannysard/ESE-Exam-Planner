import os
from pdf_builder_base import convert_markdown_string_to_pdf

ch3_md = """# INTEL 8086 MICROPROCESSOR — NUMERICAL & INSTRUCTION QUESTION BANK
## CHAPTER 3: INSTRUCTION SET, MACHINE ENCODING, ADDRESSING MODES & EXECUTION TRACING
**Focus Area:** Pure Machine Code Decoding, Effective Address Mathematics, Full Arithmetic/Logic Tracing, BCD/ASCII Adjustments, Multi-bit Shifts, String Repetition & Branch Displacement Numericals  
**Course:** Microprocessors / Computer Architecture  
**Prepared by:** Senior Faculty & Examination Paper Setter (20+ Years Experience)  
**Syllabus Restrictions:** Strictly adheres to Mid-Sem Planner (Excludes Timing Tables 3.12-3.29, IN/OUT instructions, CMC, CLI, STI, HLT, WAIT, ESC, LOCK, NOP).

---

### SECTION A: MULTIPLE CHOICE NUMERICAL & INSTRUCTION QUESTIONS (MCQs)
*(1 Mark Each. Rigorous questions testing machine bit fields, addressing math, flag conditions, and register traces)*

#### Q3.1
The machine code for an 8086 instruction is given in hexadecimal as **`89 D8H`**. Disassemble this machine code into its exact assembly language instruction:
- [A] `MOV AX, BX`
- [B] `MOV BX, AX`
- [C] `ADD AX, BX`
- [D] `MOV [BX], AX`

**Correct Answer:** **[A] `MOV AX, BX`**  
**Step-by-Step Decoding:**  
1. Byte 1 = `89H` = `1000 1001`$_2$:  
   - Opcode (bits 7-2) = `100010`$_2 \\implies$ **`MOV`** (Reg/Mem $\\leftrightarrow$ Reg).  
   - $d$ bit (bit 1) = `0` $\\implies$ Direction: `reg` is the **source operand**, `r/m` is the **destination** ($\\text{reg} \\rightarrow \\text{r/m}$).  
   - $w$ bit (bit 0) = `1` $\\implies$ Word operation (**16-bit**).  
2. Byte 2 = `D8H` = `1101 1000`$_2$:  
   - `mod` (bits 7-6) = `11`$_2 \\implies$ Register mode.  
   - `reg` (bits 5-3) = `011`$_2$. With $w=1$, `011` encodes register **`BX`** (Source).  
   - `r/m` (bits 2-0) = `000`$_2$. With $mod=11, w=1$, `000` encodes register **`AX`** (Destination).  
3. Formatted Instruction: **`MOV AX, BX`**.

---

#### Q3.2
Given the following register contents: `DS = 3000H`, `BX = 1500H`, `SI = 0250H`. What is the Effective Address (EA) and resulting 20-bit physical address for the instruction `MOV CL, [BX + SI + 10H]`?
- [A] $\\text{EA} = 1760\\text{H}$; $\\text{PA} = 31760\\text{H}$
- [B] $\\text{EA} = 1750\\text{H}$; $\\text{PA} = 31750\\text{H}$
- [C] $\\text{EA} = 1760\\text{H}$; $\\text{PA} = 47600\\text{H}$
- [D] $\\text{EA} = 0760\\text{H}$; $\\text{PA} = 30760\\text{H}$

**Correct Answer:** **[A] $\\text{EA} = 1760\\text{H}$; $\\text{PA} = 31760\\text{H}$**  
**Step-by-Step Numerical Solution:**  
$$\\text{EA} = (\\text{BX}) + (\\text{SI}) + \\text{disp} = 1500\\text{H} + 0250\\text{H} + 0010\\text{H} = \\mathbf{1760H}$$  
Default segment for `BX` is the Data Segment (`DS = 3000H`):  
$$\\text{PA} = (\\text{DS} \\times 10\\text{H}) + \\text{EA} = 30000\\text{H} + 1760\\text{H} = \\mathbf{31760H}$$

---

#### Q3.3
An 8086 programmer executes the following sequence:
```assembly
MOV AL, 85H
MOV BL, 92H
ADD AL, BL
```
What are the hexadecimal contents of `AL` and the exact status of the Carry Flag (`CF`) and Overflow Flag (`OF`)?
- [A] `AL = 17H`, `CF = 1`, `OF = 1`
- [B] `AL = 17H`, `CF = 1`, `OF = 0`
- [C] `AL = 17H`, `CF = 0`, `OF = 1`
- [D] `AL = 07H`, `CF = 1`, `OF = 1`

**Correct Answer:** **[A] `AL = 17H`, `CF = 1`, `OF = 1`**  
**Step-by-Step Numerical Solution:**  
Binary Addition:  
$$\\begin{array}{r@{\\quad}l}
  1000\\ 0101_2 & (85\\text{H} = -123_{10}) \\\\
+ 1001\\ 0010_2 & (92\\text{H} = -110_{10}) \\\\
\\hline
  1\\ 0001\\ 0111_2 & (117\\text{H})
\\end{array}$$  
- Register `AL` retains lower 8 bits: **`AL = 17H`**.  
- Carry out of MSB (bit 7) is $1 \\implies \\mathbf{CF = 1}$.  
- Two negative numbers ($MSB=1$) were added and produced a positive number ($17\\text{H} = +23_{10}$, $MSB=0$).  
  True sum $= -233_{10}$, which severely overflows 8-bit signed range ($-128 \\text{ to } +127$).  
  Therefore: $\\mathbf{OF = 1}$.

---

#### Q3.4
What are the contents of `AL` and the status of `CF` after executing `INC AL`, given that `AL = FFH` prior to execution?
- [A] `AL = 00H`, `CF = 1`
- [B] `AL = 00H`, `CF = 0` (or unchanged)
- [C] `AL = 01H`, `CF = 1`
- [D] `AL = FFH`, `CF = 0`

**Correct Answer:** **[B] `AL = 00H`, `CF = 0` (or unchanged)**  
**Step-by-Step Numerical Solution:**  
`INC` adds 1 to the operand: $\\text{FFH} + 1 = 00\\text{H}$.  
Crucial Architectural Rule: **`INC` and `DEC` DO NOT MODIFY THE CARRY FLAG (`CF`)!**  
Therefore, `CF` preserves its previous state (or remains 0).

---

#### Q3.5
If `AL = 80H` ($-128_{10}$), what are the contents of `AL` and the status of the Overflow Flag (`OF`) after executing `NEG AL`?
- [A] `AL = 80H`, `OF = 1`
- [B] `AL = 7FH`, `OF = 0`
- [C] `AL = 00H`, `OF = 0`
- [D] `AL = 80H`, `OF = 0`

**Correct Answer:** **[A] `AL = 80H`, `OF = 1`**  
**Step-by-Step Numerical Solution:**  
`NEG` computes 2's complement: $00\\text{H} - 80\\text{H}$.  
$$\\begin{array}{r@{\\quad}l}
  0000\\ 0000_2 \\\\
- 1000\\ 0000_2 \\\\
\\hline
  1000\\ 0000_2 & (80\\text{H})
\\end{array}$$  
`AL` remains **`80H`**.  
The mathematical negation of $-128_{10}$ is $+128_{10}$. However, $+128_{10}$ cannot be represented in an 8-bit signed 2's complement register (max value is $+127$).  
Because the result exceeds signed range: $\\mathbf{OF = 1}$.

---

#### Q3.6
Trace the following BCD addition sequence:
```assembly
MOV AL, 48H     ; Packed BCD 48
MOV BL, 37H     ; Packed BCD 37
ADD AL, BL
DAA
```
What is the final hexadecimal value in `AL`?
- [A] `7FH`
- [B] `85H`
- [C] `80H`
- [D] `75H`

**Correct Answer:** **[B] `85H`**  
**Step-by-Step Numerical Solution:**  
1. `ADD AL, BL`: $48\\text{H} + 37\\text{H} = \\mathbf{7FH}$.  
2. `DAA` adjustment:  
   - Lower nibble is `FH` ($15 > 9$). `DAA` adds $06\\text{H}$ to `AL`:  
     $$7\\text{FH} + 06\\text{H} = \\mathbf{85H}$$  
   - Auxiliary carry `AF` is set to 1.  
   - Upper nibble is now `8` ($\\le 9$) and $CF = 0$, so no further addition is needed.  
`85H` is the correct packed BCD result of $48 + 37 = 85$!

---

#### Q3.7
Trace the following multiplication sequence:
```assembly
MOV AL, 06H     ; Unpacked BCD 6
MOV BL, 07H     ; Unpacked BCD 7
MUL BL
AAM
```
What are the final contents of register `AX`?
- [A] `AX = 002AH`
- [B] `AX = 0402H`
- [C] `AX = 0204H`
- [D] `AX = 4200H`

**Correct Answer:** **[B] `AX = 0402H`**  
**Step-by-Step Numerical Solution:**  
1. `MUL BL`: $\\text{AX} = 06\\text{H} \\times 07\\text{H} = 42_{10} = \\mathbf{002AH}$.  
2. `AAM` (ASCII Adjust after Multiply):  
   Converts binary product in `AL` (`2AH` $= 42_{10}$) into two unpacked BCD digits:  
   $$\\text{AH} = \\text{AL} / 10_{10} = 42 / 10 = \\mathbf{04H}$$  
   $$\\text{AL} = \\text{AL} \\pmod{10_{10}} = 42 \\pmod{10} = \\mathbf{02H}$$  
   Combined: $\\mathbf{AX = 0402H}$ (`AH = 04H`, `AL = 02H`).

---

#### Q3.8
Trace the following unpacked division sequence:
```assembly
MOV AH, 04H     ; Tens digit
MOV AL, 02H     ; Units digit (Number 42)
AAD
MOV BL, 07H
DIV BL
```
What are the final contents of `AL` (Quotient) and `AH` (Remainder)?
- [A] `AL = 06H`, `AH = 00H`
- [B] `AL = 00H`, `AH = 06H`
- [C] `AL = 07H`, `AH = 00H`
- [D] `AL = 04H`, `AH = 02H`

**Correct Answer:** **[A] `AL = 06H`, `AH = 00H`**  
**Step-by-Step Numerical Solution:**  
1. Initial: `AH = 04H`, `AL = 02H`.  
2. `AAD` (ASCII Adjust before Division):  
   $$\\text{AL} = (\\text{AH} \\times 10) + \\text{AL} = (4 \\times 10) + 2 = 42_{10} = \\mathbf{2AH}$$  
   $$\\text{AH} = \\mathbf{00H}$$  
3. `DIV BL` ($2\\text{AH} / 07\\text{H} = 42 / 7$):  
   - Quotient $\\rightarrow \\mathbf{AL = 06H}$  
   - Remainder $\\rightarrow \\mathbf{AH = 00H}$

---

#### Q3.9
What occurs when an 8086 processor executes the instruction `DIV BL` if initial register states are `AX = 0500H` and `BL = 02H`?
- [A] `AL = 50H`, `AH = 00H`
- [B] `AL = FFH`, `AH = 01H`
- [C] The CPU generates an internal Type 0 Interrupt (Divide Error Exception)
- [D] The CPU sets the Overflow Flag (`OF = 1`) and continues

**Correct Answer:** **[C] The CPU generates an internal Type 0 Interrupt (Divide Error Exception)**  
**Step-by-Step Numerical Solution:**  
In byte division `DIV BL`, the 16-bit dividend is in `AX = 0500H` ($1280_{10}$), and the divisor is in `BL = 02H` ($2_{10}$).  
$$\\text{Quotient} = \\frac{1280}{2} = 640_{10}$$  
The quotient must fit in the 8-bit register `AL` (maximum value $255_{10}$).  
Because $640 > 255$, an **unsigned quotient overflow** occurs. The 8086 hardware immediately aborts the instruction and executes an internal **Type 0 Divide Error Interrupt**.

---

#### Q3.10
If register `AL` contains `A5H` (`1010 0101`$_2$), what are the contents of `AL` and the Carry Flag (`CF`) after executing the instruction `SHR AL, 1`?
- [A] `AL = 52H`, `CF = 1`
- [B] `AL = D2H`, `CF = 1`
- [C] `AL = 52H`, `CF = 0`
- [D] `AL = 4AH`, `CF = 1`

**Correct Answer:** **[A] `AL = 52H`, `CF = 1`**  
**Step-by-Step Numerical Solution:**  
`SHR` performs a logical right shift:
- Shift all bits right by 1.
- Bit 0 (LSB) shifts into `CF`. In `A5H`, bit 0 is `1` $\\implies \\mathbf{CF = 1}$.
- Bit 7 (MSB) is filled with `0`.  
$$0\\ 101\\ 0010_2 = \\mathbf{52H}$$

---

#### Q3.11
Now evaluate the same initial value `AL = A5H` (`1010 0101`$_2$) subjected to `SAR AL, 1` (Arithmetic Shift Right). What are the contents of `AL` and `CF`?
- [A] `AL = 52H`, `CF = 1`
- [B] `AL = D2H`, `CF = 1`
- [C] `AL = D2H`, `CF = 0`
- [D] `AL = E2H`, `CF = 1`

**Correct Answer:** **[B] `AL = D2H`, `CF = 1`**  
**Step-by-Step Numerical Solution:**  
`SAR` performs an arithmetic right shift:
- Bit 0 shifts into `CF` $\\implies \\mathbf{CF = 1}$.
- Bit 7 **retains its original sign bit (`1`)** and is copied into bit 6.  
$$1\\ 101\\ 0010_2 = \\mathbf{D2H}$$

---

#### Q3.12
If `AL = 81H` (`1000 0001`$_2$) and `CF = 0`, what are the contents of `AL` and `CF` after executing `RCL AL, 1` (Rotate through Carry Left)?
- [A] `AL = 02H`, `CF = 1`
- [B] `AL = 03H`, `CF = 1`
- [C] `AL = 02H`, `CF = 0`
- [D] `AL = 82H`, `CF = 0`

**Correct Answer:** **[A] `AL = 02H`, `CF = 1`**  
**Step-by-Step Numerical Solution:**  
`RCL` rotates 9 bits (8 bits of `AL` + `CF`):
- MSB of `AL` (`1`) rotates into `CF` $\\implies \\mathbf{CF = 1}$.
- Old `CF` (`0`) rotates into LSB (bit 0) of `AL`.  
$$0000\\ 0010_2 = \\mathbf{02H}$$

---

#### Q3.13
A conditional jump instruction is located at memory address `0120H`. The jump instruction is 2 bytes long (located at `0120H` and `0121H`), meaning the next sequential instruction is at `0122H`. If the jump target is at address `0152H`, what is the 8-bit signed relative displacement encoded in the instruction?
- [A] `+32H`
- [B] `+30H`
- [C] `+2FH`
- [D] `+34H`

**Correct Answer:** **[B] `+30H`**  
**Step-by-Step Numerical Solution:**  
Relative displacement is calculated from the address of the **next sequential instruction** ($IP_{\\text{next}}$):  
$$IP_{\\text{next}} = 0120\\text{H} + 2\\text{H} = 0122\\text{H}$$  
$$\\text{Displacement} = \\text{Target Address} - IP_{\\text{next}} = 0152\\text{H} - 0122\\text{H} = \\mathbf{+30H}$$

---

#### Q3.14
A subroutine terminates with the instruction `RET 0006H`. If this is a Near procedure and `SP = 1FFE0H` when `RET` begins, what will be the value of `SP` after the return completes?
- [A] `1FFE2H`
- [B] `1FFE6H`
- [C] `1FFE8H`
- [D] `1FFD8H`

**Correct Answer:** **[C] `1FFE8H`**  
**Step-by-Step Numerical Solution:**  
In a Near `RET n`:
1. `IP` is popped from stack: $\\text{SP} = \\text{SP} + 2$.
2. The parameter count $n$ is added to the stack pointer: $\\text{SP} = \\text{SP} + n = \\text{SP} + 6$.  
Total increment: $\\Delta \\text{SP} = +2 + 6 = \\mathbf{+8}$.  
$$\\text{Final SP} = 1\\text{FFE}0\\text{H} + 8 = \\mathbf{1FFE8H}$$

---

#### Q3.15
Consider the instruction `TEST AL, 08H` executed when `AL = 38H` (`0011 1000`$_2$). What is the status of the Zero Flag (`ZF`) and the contents of `AL` after execution?
- [A] `ZF = 1`, `AL = 38H`
- [B] `ZF = 0`, `AL = 38H`
- [C] `ZF = 0`, `AL = 08H`
- [D] `ZF = 1`, `AL = 00H`

**Correct Answer:** **[B] `ZF = 0`, `AL = 38H`**  
**Step-by-Step Numerical Solution:**  
`TEST` performs bitwise AND:  
$$\\begin{array}{r@{\\quad}l}
  0011\\ 1000_2 & (38\\text{H}) \\\\
\\text{AND } 0000\\ 1000_2 & (08\\text{H}) \\\\
\\hline
  0000\\ 1000_2 & (08\\text{H})
\\end{array}$$  
Because the bitwise result is non-zero ($08\\text{H} \\neq 0$), the Zero Flag is cleared: $\\mathbf{ZF = 0}$.  
`TEST` does not modify the destination register; `AL` remains **`38H`**.

---

#### Q3.16
What are the contents of `DX:AX` after executing `CWD` when `AX = 7FFFH`?
- [A] `DX = FFFFH`, `AX = 7FFFH`
- [B] `DX = 0000H`, `AX = 7FFFH`
- [C] `DX = 7FFFH`, `AX = 0000H`
- [D] `DX = FFFFH`, `AX = 8000H`

**Correct Answer:** **[B] `DX = 0000H`, `AX = 7FFFH`**  
**Step-by-Step Numerical Solution:**  
`CWD` sign-extends bit 15 of `AX` into all bits of `DX`.  
In `7FFFH` ($0111\\ 1111\\ 1111\\ 1111_2$), bit 15 is **`0`** (positive signed number).  
Therefore, `DX` is filled with zeros: $\\mathbf{DX = 0000H}$, and `AX` remains $\\mathbf{7FFFH}$.

---

#### Q3.17
The string comparison `REPE CMPSB` is executed with `CX = 0005H`, source string `'HELLO'`, and destination string `'HELPO'`. How many byte comparisons will be executed before termination, and what will be the final value in `CX`?
- [A] 5 comparisons; `CX = 0000H`
- [B] 4 comparisons; `CX = 0001H`
- [C] 3 comparisons; `CX = 0002H`
- [D] 4 comparisons; `CX = 0000H`

**Correct Answer:** **[B] 4 comparisons; `CX = 0001H`**  
**Step-by-Step Numerical Solution:**  
`REPE CMPSB` checks bytes one by one and terminates when a mismatch occurs ($ZF = 0$) or $CX = 0$:
- Byte 1: `'H'` vs `'H'` $\\implies$ match, $ZF=1, CX=4$.
- Byte 2: `'E'` vs `'E'` $\\implies$ match, $ZF=1, CX=3$.
- Byte 3: `'L'` vs `'L'` $\\implies$ match, $ZF=1, CX=2$.
- Byte 4: `'L'` vs `'P'` $\\implies$ **MISMATCH**! $ZF=0$, $CX$ decremented to **`0001H`**.  
The instruction terminates immediately on mismatch after **4 comparisons**. Final $\\mathbf{CX = 0001H}$.

---

#### Q3.18
If `AX = 0020H`, what will be the value in `AX` after executing:
```assembly
MOV CL, 03H
SHL AX, CL
```
- [A] `0060H`
- [B] `0100H`
- [C] `0200H`
- [D] `0080H`

**Correct Answer:** **[B] `0100H`**  
**Step-by-Step Numerical Solution:**  
Shifting left by 3 bit positions is mathematically equivalent to multiplying by $2^3 = 8$:  
$$\\text{AX} = 0020\\text{H} \\times 8 = 32_{10} \\times 8 = 256_{10} = \\mathbf{0100H}$$

---

#### Q3.19
What are the contents of `AX` after executing `CBW` if `AL = FEH` ($-2_{10}$)?
- [A] `00FEH`
- [B] `FFFEH`
- [C] `FE00H`
- [D] `FFFFH`

**Correct Answer:** **[B] `FFFEH`**  
**Step-by-Step Numerical Solution:**  
`CBW` sign-extends bit 7 of `AL` into `AH`.  
In `FEH` ($1111\\ 1110_2$), bit 7 is `1` (negative number).  
Therefore, `AH` is filled with `1`s (`FFH`), producing $\\mathbf{AX = FFFEH}$ ($-2_{10}$ in 16-bit 2's complement).

---

#### Q3.20
An 8086 program executes `INT 21H`. By how many bytes does the Stack Pointer (`SP`) change during this instruction execution?
- [A] Decrements by 2 bytes
- [B] Decrements by 4 bytes
- [C] Decrements by 6 bytes
- [D] Increments by 6 bytes

**Correct Answer:** **[C] Decrements by 6 bytes**  
**Step-by-Step Numerical Solution:**  
When executing `INT n`, the hardware performs three successive 16-bit pushes:
1. Pushes Flag Register ($\Delta \\text{SP} = -2$)
2. Pushes `CS` ($\Delta \\text{SP} = -2$)
3. Pushes `IP` ($\Delta \\text{SP} = -2$)  
Total stack change $= \\mathbf{-6\\text{ bytes}}$ (decrement of 6).

---

### SECTION B: FILL IN THE BLANKS (NUMERICAL & TRACE)
*(Exact mathematical results and register values)*

1. Given `AL = 7FH` ($+127_{10}$) and `BL = 01H`, executing `ADD AL, BL` results in `AL =` **_______________** and Overflow Flag `OF =` **_______________**.  
   *Answer:* **`80H`; 1**

2. The machine opcode `8B 07H` decodes to the assembly instruction **_______________**.  
   *Answer:* **`MOV AX, [BX]`** ($d=1, w=1, mod=00, reg=000, r/m=111$)

3. If `SS = 4000H` and `BP = 0200H`, the physical address accessed by `MOV AX, [BP + 08H]` is **_______________**.  
   *Answer:* **`40208H`** ($40000\\text{H} + 0200\\text{H} + 0008\\text{H} = 40208\\text{H}$)

4. If `AL = 99H` and `BL = 01H`, executing `ADD AL, BL` followed by `DAA` results in `AL =` **_______________** and Carry Flag `CF =` **_______________**.  
   *Answer:* **`00H`; 1** ($99 + 01 = 100 \\implies 00\\text{H}$ with $CF=1$)

5. The instruction `AAM` converts a binary value in `AL` into unpacked BCD by dividing `AL` by the decimal number **_______________**.  
   *Answer:* **10**

6. If `AH = 05H` and `AL = 03H`, after executing `AAD`, register `AL` contains hexadecimal **_______________**.  
   *Answer:* **`35H`** ($(5 \\times 10) + 3 = 53_{10} = 35\\text{H}$)

7. If `AL = 96H` (`1001 0110`$_2$), after executing `SAR AL, 1`, `AL` becomes **_______________** and `CF` is **_______________**.  
   *Answer:* **`CBH`; 0** ($1100\\ 1011_2 = \\text{CBH}$)

8. In a string block move using `REP MOVSW`, if `CX = 0014H`, exactly **_______________** 16-bit words or **_______________** bytes are transferred.  
   *Answer:* **20; 40** ($14\\text{H} = 20_{10}$ words $= 40$ bytes)

9. The 8-bit signed relative displacement in a conditional jump instruction is bounded between **_______________** bytes backward and **_______________** bytes forward.  
   *Answer:* **-128; +127**

10. A Near procedure ending with `RET 0004H` causes a net increment of `SP` by **_______________** bytes.  
    *Answer:* **6** ($+2 + 4 = 6$)

11. The instruction `TEST AL, AL` results in `ZF = 1` if and only if register `AL` contains **_______________**.  
    *Answer:* **`00H`**

12. If `AX = 0010H` and `BX = 0004H`, executing `MUL BX` produces a product of **_______________** in `AX` and clears `DX` to **_______________**.  
    *Answer:* **`0040H`; `0000H`** ($16 \\times 4 = 64 = 40\\text{H}$)

---

### SECTION C: TRUE OR FALSE STATEMENTS WITH TRACE PROOFS

#### Q3.21
**Statement:** Executing `INC AX` when `AX = FFFFH` sets the Carry Flag (`CF = 1`).  
**Answer:** **FALSE**  
**Proof:** `INC` wraps `AX` to `0000H`, sets `ZF = 1`, but **never modifies `CF`**. `CF` remains unchanged.

---

#### Q3.22
**Statement:** `CMP AX, BX` leaves the contents of register `AX` unaltered while updating flags.  
**Answer:** **TRUE**  
**Proof:** `CMP` performs internal subtraction $\\text{AX} - \\text{BX}$ and updates all arithmetic flags (`CF, OF, SF, ZF, AF, PF`), but discards the result.

---

#### Q3.23
**Statement:** Executing `NEG 80H` results in `OF = 1`.  
**Answer:** **TRUE**  
**Proof:** Negating $-128_{10}$ yields $+128_{10}$, which exceeds 8-bit signed limit ($+127$). Therefore, $\\mathbf{OF = 1}$.

---

#### Q3.24
**Statement:** `DAA` can be used to adjust the result after executing `SUB AL, BL`.  
**Answer:** **FALSE**  
**Proof:** `DAA` is designed strictly for addition. After subtraction, **`DAS` (Decimal Adjust after Subtraction)** must be used.

---

#### Q3.25
**Statement:** The instruction `NOT AL` modifies the Zero Flag.  
**Answer:** **FALSE**  
**Proof:** `NOT` inverts all bits (1's complement) but **does not affect any flags**.

---

#### Q3.26
**Statement:** `SHL AX, 1` multiplies the unsigned integer in `AX` by 2.  
**Answer:** **TRUE**  
**Proof:** Shifting left by 1 bit shifts in a 0 at LSB, multiplying the binary quantity by $2^1 = 2$.

---

#### Q3.27
**Statement:** `REPNZ SCASB` terminates when a matching byte is encountered ($ZF = 1$) or when $CX = 0$.  
**Answer:** **TRUE**  
**Proof:** `REPNZ` repeats while Not Zero ($ZF = 0$). When a match occurs, $ZF$ becomes 1, which immediately halts repetition.

---

#### Q3.28
**Statement:** `LOOP` decrements `CX` and modifies the Zero Flag (`ZF`).  
**Answer:** **FALSE**  
**Proof:** `LOOP` decrements `CX` internally and checks $CX \\neq 0$, but **does not modify ANY flags** in the Flag register.

---

#### Q3.29
**Statement:** A conditional jump can branch to a target located 300 bytes ahead.  
**Answer:** **FALSE**  
**Proof:** 8086 conditional jumps use an 8-bit signed displacement, restricting the branch target to $-128 \\text{ to } +127$ bytes relative to next IP.

---

#### Q3.30
**Statement:** `INT 10H` pushes 6 bytes onto the stack.  
**Answer:** **TRUE**  
**Proof:** `INT` pushes Flags (2 bytes), `CS` (2 bytes), and `IP` (2 bytes) $\\implies$ total 6 bytes.

---

#### Q3.31
**Statement:** After executing `XOR AX, AX`, `AX` contains `0000H` and `ZF = 1`.  
**Answer:** **TRUE**  
**Proof:** Any value XORed with itself produces 0. Since the result is zero, $ZF$ is set to 1.

---

#### Q3.32
**Statement:** `CBW` transforms `AL = 85H` into `AX = 0085H`.  
**Answer:** **FALSE**  
**Proof:** In `85H`, bit 7 is `1`. `CBW` sign-extends with `1`s, making $\\mathbf{AX = FF85H}$.

---

### SECTION D: 3 MARKS NUMERICAL & INSTRUCTION TRACE PROBLEMS

#### Q3.33
**Question:** Decode the machine code sequence **`8A 44 10H`** into its corresponding 8086 assembly language instruction. Show the bitwise breakdown of all fields.  
**Model Solution:**  
1. Byte 1 = `8AH` = `1000 1010`$_2$:  
   - Opcode = `100010`$_2 \\implies$ **`MOV`**  
   - $d$ bit = `1` $\\implies$ Destination is specified by `reg`  
   - $w$ bit = `0` $\\implies$ Byte operation (**8-bit**)  
2. Byte 2 = `44H` = `0100 0100`$_2$:  
   - `mod` = `01`$_2 \\implies$ Memory mode with **8-bit signed displacement**  
   - `reg` = `000`$_2 \\implies$ Register **`AL`** (Destination)  
   - `r/m` = `100`$_2 \\implies$ Base pointer `[SI]`  
3. Byte 3 = `10H` $\\implies$ 8-bit displacement $= +10\\text{H}$.  
4. Assembled Instruction:  
   $$\\mathbf{MOV\\ AL,\\ [SI + 10H]}$$  
**Marking Scheme:**
- Byte 1 analysis ($d=1, w=0$, MOV): **1 Mark**
- Byte 2 analysis ($mod=01, reg=AL, r/m=[SI]$): **1 Mark**
- Complete assembly mnemonic `MOV AL, [SI+10H]`: **1 Mark**

---

#### Q3.34
**Question:** Given the following register states: `DS = 1000H`, `ES = 2000H`, `BX = 0500H`, `DI = 0300H`.  
Calculate the Effective Address (EA) and the 20-bit physical address for:  
(a) `MOV AX, [BX + DI + 20H]`  
(b) `MOV AX, ES:[BX + DI + 20H]`  
**Model Solution:**  
(a) Standard instruction (Default segment `DS`):  
    $$\\text{EA} = (\\text{BX}) + (\\text{DI}) + 20\\text{H} = 0500\\text{H} + 0300\\text{H} + 0020\\text{H} = \\mathbf{0820H}$$  
    $$\\text{PA} = (\\text{DS} \\times 10\\text{H}) + \\text{EA} = 10000\\text{H} + 0820\\text{H} = \\mathbf{10820H}$$  
(b) With Segment Override Prefix `ES:`:  
    EA remains identical: $\\mathbf{EA = 0820H}$.  
    Physical address uses `ES = 2000H`:  
    $$\\text{PA} = (\\text{ES} \\times 10\\text{H}) + \\text{EA} = 20000\\text{H} + 0820\\text{H} = \\mathbf{20820H}$$  
**Marking Scheme:**
- (a) EA and DS physical address calculation: **1.5 Marks**
- (b) ES override physical address calculation: **1.5 Marks**

---

#### Q3.35
**Question:** Trace the execution of `ADD AL, BL` when `AL = 55H` (`0101 0101`$_2$) and `BL = 0AAH` (`1010 1010`$_2$). Find the final value in `AL` and the status of `CF, OF, SF, ZF, AF, PF`.  
**Model Solution:**  
Binary Addition:  
$$\\begin{array}{r@{\\quad}l}
  0101\\ 0101_2 & (55\\text{H} = +85_{10}) \\\\
+ 1010\\ 1010_2 & (\\text{AAH} = -86_{10}) \\\\
\\hline
  1111\\ 1111_2 & (\\text{FFH} = -1_{10})
\\end{array}$$  
- Final `AL` = **`FFH`**  
- **Flags:**  
  - $\\mathbf{CF = 0}$: No carry out of bit 7.  
  - $\\mathbf{OF = 0}$: Positive ($+85$) added to negative ($-86$) cannot overflow.  
  - $\\mathbf{SF = 1}$: MSB is 1 (negative).  
  - $\\mathbf{ZF = 0}$: Result is non-zero.  
  - $\\mathbf{AF = 0}$: No carry from bit 3 to bit 4 ($0101 + 1010 = 1111$).  
  - $\\mathbf{PF = 1}$: Result has eight 1s (even parity $\\implies PF = 1$).  
**Marking Scheme:**
- Binary trace and `AL = FFH`: **1 Mark**
- Correct evaluation of CF, OF, SF: **1 Mark**
- Correct evaluation of ZF, AF, PF: **1 Mark**

---

#### Q3.36
**Question:** Compare the execution of `AL = FFH, INC AL` versus `AL = FFH, ADD AL, 01H`. Determine `AL`, `CF`, and `ZF` for both cases and explain why compiler loop generators leverage this difference.  
**Model Solution:**  
1. **Case 1: `INC AL` (`AL = FFH`):**  
   - $\\text{AL} = \\text{FFH} + 1 = \\mathbf{00H}$  
   - $\\mathbf{ZF = 1}$ (result is zero)  
   - $\\mathbf{CF = \\text{UNMODIFIED}}$ (preserves prior state, e.g., 0)  
2. **Case 2: `ADD AL, 01H` (`AL = FFH`):**  
   - $\\text{AL} = \\text{FFH} + 1 = \\mathbf{00H}$  
   - $\\mathbf{ZF = 1}$ (result is zero)  
   - $\\mathbf{CF = 1}$ (carry generated out of bit 7)  
3. **Compiler Significance:**  
   In multi-word arithmetic loops (e.g., adding 64-bit numbers using `ADC`), pointer registers or counters must be incremented without destroying the carry bit propagating through `ADC`. Compilers use `INC` for pointers/counters to keep the carry chain intact.  
**Marking Scheme:**
- Case 1 trace (`CF` unmodified): **1 Mark**
- Case 2 trace (`CF = 1`): **1 Mark**
- Multi-word arithmetic loop justification: **1 Mark**

---

#### Q3.37
**Question:** Trace the BCD addition of `AL = 79H` and `BL = 85H` followed by `DAA`. Show intermediate nibble states, adjustments, and final `AL` and `CF`.  
**Model Solution:**  
1. `ADD AL, BL`:  
   $$79\\text{H} + 85\\text{H} = \\mathbf{FEH}$$  
   - Lower nibble $= \\text{EH} > 9$, no carry from bit 3 ($AF = 0$).  
   - Upper nibble $= \\text{FH} > 9$, no carry from bit 7 ($CF = 0$).  
2. `DAA` Execution:  
   - **Step 1 (Lower nibble adjustment):**  
     Since lower nibble $\\text{EH} > 9$, add $06\\text{H}$:  
     $$\\text{FEH} + 06\\text{H} = \\mathbf{104H} \\implies \\text{AL} = 04\\text{H}, \\quad AF = 1$$  
     Carry generated into upper nibble! Upper nibble was `FH`, now becomes `0H` with carry.  
   - **Step 2 (Upper nibble adjustment):**  
     Upper adjustment triggers because carry out was generated ($CF = 1$) and upper value exceeded 9. Add $60\\text{H}$:  
     $$04\\text{H} + 60\\text{H} = \\mathbf{64H}, \\quad \\mathbf{CF = 1}$$  
3. Final Result: **`AL = 64H`**, **`CF = 1`** (Representing BCD $79 + 85 = 164$).  
**Marking Scheme:**
- Binary sum `FEH`: **1 Mark**
- Lower nibble adjustment: **1 Mark**
- Upper nibble adjustment yielding `64H` with $CF=1$: **1 Mark**

---

#### Q3.38
**Question:** Given `AL = F0H` ($-16_{10}$ as signed, $240_{10}$ as unsigned) and `BL = 10H` ($16_{10}$).  
(a) Trace `MUL BL` (unsigned) and determine `AX`, `CF`, and `OF`.  
(b) Trace `IMUL BL` (signed) and determine `AX`, `CF`, and `OF`.  
**Model Solution:**  
(a) `MUL BL` (Unsigned: $240 \\times 16 = 3840_{10} = 0\\text{F}00\\text{H}$):  
    $$\\mathbf{AX = 0F00H} \\quad (\\text{AH} = 0\\text{FH}, \\text{AL} = 00\\text{H})$$  
    Since `AH` is non-zero ($0\\text{FH} \\neq 0$): $\\mathbf{CF = 1, OF = 1}$.  
(b) `IMUL BL` (Signed: $-16 \\times +16 = -256_{10} = \\text{FF00H}$):  
    $$\\mathbf{AX = FF00H} \\quad (\\text{AH} = \\text{FFH}, \\text{AL} = 00\\text{H})$$  
    In `FF00H`, `AH = FFH` is merely the sign-extension of `AL = 00H`?  
    Wait! For signed byte $-256_{10}$, it cannot fit in 8-bit `AL` (range $-128 \\text{ to } +127$).  
    `AH` contains significant digits (sign extension of `AL = 00H` would be `00H`).  
    Since `AH` is not sign-extension of `AL`: $\\mathbf{CF = 1, OF = 1}$.  
**Marking Scheme:**
- (a) `MUL BL` trace (`AX = 0F00H`, $CF=OF=1$): **1.5 Marks**
- (b) `IMUL BL` trace (`AX = FF00H`, $CF=OF=1$): **1.5 Marks**

---

#### Q3.39
**Question:** An initial register value is `AL = 9CH` (`1001 1100`$_2$) and `CF = 1`. Determine the resulting contents of `AL` and `CF` for:  
(a) `SHL AL, 1`  
(b) `SAR AL, 1`  
(c) `RCR AL, 1`  
**Model Solution:**  
(a) `SHL AL, 1`:  
    Bit 7 (`1`) shifts into `CF` $\\implies \\mathbf{CF = 1}$. LSB filled with 0.  
    $$\\text{AL} = 0011\\ 1000_2 = \\mathbf{38H}$$  
(b) `SAR AL, 1`:  
    Bit 0 (`0`) shifts into `CF` $\\implies \\mathbf{CF = 0}$. Sign bit (`1`) preserved.  
    $$\\text{AL} = 1100\\ 1110_2 = \\mathbf{CEH}$$  
(c) `RCR AL, 1`:  
    Bit 0 (`0`) shifts into `CF` $\\implies \\mathbf{CF = 0}$. Old `CF` (`1`) shifts into MSB.  
    $$\\text{AL} = 1100\\ 1110_2 = \\mathbf{CEH}$$  
**Marking Scheme:**
- (a) SHL trace (`38H, CF=1`): **1 Mark**
- (b) SAR trace (`CEH, CF=0`): **1 Mark**
- (c) RCR trace (`CEH, CF=0`): **1 Mark**

---

#### Q3.40
**Question:** An assembly jump instruction is located at address `2050H` and occupies 2 bytes (`2050H` and `2051H`). Calculate the signed 8-bit displacement byte required to jump to target label `DEST`:  
(a) If `DEST` is at address `2085H` (forward jump).  
(b) If `DEST` is at address `2010H` (backward jump).  
**Model Solution:**  
Address of next sequential instruction:  
$$IP_{\\text{next}} = 2050\\text{H} + 2\\text{H} = 2052\\text{H}$$  
(a) Forward Jump to `2085H`:  
    $$\\text{Disp} = 2085\\text{H} - 2052\\text{H} = \\mathbf{+33H} = \\mathbf{0011\\ 0011_2}$$  
(b) Backward Jump to `2010H`:  
    $$\\text{Disp} = 2010\\text{H} - 2052\\text{H} = -42\\text{H}$$  
    Expressing $-42\\text{H}$ as an 8-bit 2's complement negative number:  
    $$+42\\text{H} = 0100\\ 0010_2 \\implies \\text{1's complement} = 1011\\ 1101_2$$  
    $$\\text{2's complement} = 1011\\ 1101_2 + 1 = 1011\\ 1110_2 = \\mathbf{BEH}$$  
    $$\\mathbf{\\text{Displacement} = BEH}$$  
**Marking Scheme:**
- $IP_{\\text{next}}$ identification (`2052H`): **1 Mark**
- (a) Forward displacement `+33H`: **1 Mark**
- (b) Backward displacement `BEH` (-42H): **1 Mark**

---

### SECTION E: 5 MARKS ADVANCED INSTRUCTION & NUMERICAL PROBLEMS

#### Q3.41
**Question:** Encode the following three instructions into their hexadecimal machine language bytes using 8086 instruction encoding rules:  
(a) `MOV AX, BX`  
(b) `MOV [BX + SI], CX`  
(c) `MOV AL, [1234H]`  
Show the bit-by-bit breakdown ($d, w, mod, reg, r/m$) and final hex bytes.  
**Model Solution:**  
**(a) `MOV AX, BX`:**  
- Opcode = `100010`$_2$  
- Choose `reg` = `BX` (`011`), Destination is `AX` (`r/m` = `000` with $mod=11$):  
  - $d = 0$ (`reg` is source), $w = 1$ (word)  
  - Byte 1 = `1000 1001`$_2$ = **`89H`**  
  - Byte 2: $mod=11$, $reg=011$ (`BX`), $r/m=000$ (`AX`) $\\implies 1101\\ 1000_2 =$ **`D8H`**  
  - Hex Machine Code = **`89 D8H`** (or `8B C3H` if $d=1$)

**(b) `MOV [BX + SI], CX`:**  
- Opcode = `100010`$_2$  
- `CX` is source $\\implies reg = 001$ (`CX`), $d = 0$, $w = 1$  
- Byte 1 = `1000 1001`$_2$ = **`89H`**  
- Byte 2:  
  - $mod = 00$ (Memory mode, no displacement)  
  - $reg = 001$ (`CX`)  
  - $r/m = 000$ (Specifies `[BX + SI]`)  
  - Byte 2 = `0000 1000`$_2$ = **`08H`**  
- Hex Machine Code = **`89 08H`**

**(c) `MOV AL, [1234H]`:**  
- Direct addressing to accumulator `AL` has an optimized 3-byte format:  
  Opcode = `1010000` ($w=0$) $\\implies$ **`A0H`**, followed by 16-bit offset.  
  - Byte 1 = **`A0H`**  
  - Byte 2 (Offset Low) = **`34H`**  
  - Byte 3 (Offset High) = **`12H`**  
  - Hex Machine Code = **`A0 34 12H`**  
  *(Standard Mod-Reg-R/M format `8A 06 34 12H` is also accepted: $mod=00, reg=000, r/m=110$).*  
**Marking Scheme:**
- (a) Full breakdown and hex code `89 D8H`: **1.5 Marks**
- (b) Full breakdown and hex code `89 08H`: **1.5 Marks**
- (c) Full breakdown and hex code `A0 34 12H` (or `8A 06 34 12H`): **2 Marks**

---

#### Q3.42
**Question:** A program performs multi-byte packed BCD addition to add two 4-digit BCD numbers: $4567\\text{H} + 7895\\text{H}$.  
The following assembly code is executed:
```assembly
MOV AL, 67H
ADD AL, 95H
DAA
MOV BL, AL      ; Store low BCD byte result
MOV AL, 45H
ADC AL, 78H
DAA
MOV BH, AL      ; Store high BCD byte result
```
Trace the step-by-step execution, showing the exact hexadecimal values in `AL`, `BL`, `BH`, and the flags `CF` and `AF` after each arithmetic and adjustment instruction. What is the final 4-digit BCD sum in `BX` and the final `CF`?  
**Model Solution:**  
**1. Low Byte Addition:**  
- `ADD AL, 95H` (`AL = 67H`):  
  $$67\\text{H} + 95\\text{H} = \\mathbf{0FCH}$$  
  - `AL = FCH`. Flags: $CF = 0$, $AF = 0$ ($7+5 = 12 = \\text{C}$, no carry out of bit 3).  
- `DAA` Execution:  
  - Lower nibble $\\text{CH} > 9 \\implies$ add $06\\text{H}$:  
    $$\\text{FCH} + 06\\text{H} = \\mathbf{102H} \\implies \\text{AL} = 02\\text{H}, \\quad AF = 1$$  
  - Upper nibble was `FH`, received carry $\\implies$ upper adjustment adds $60\\text{H}$:  
    $$02\\text{H} + 60\\text{H} = \\mathbf{62H}, \\quad \\mathbf{CF = 1}$$  
  - `AL = 62H`, $\\mathbf{CF = 1}$.  
- `MOV BL, AL` $\\implies \\mathbf{BL = 62H}$. (Note: `MOV` does not alter `CF`; $CF$ remains 1).  

**2. High Byte Addition:**  
- `ADC AL, 78H` (`AL = 45H`, incoming $CF = 1$):  
  $$\\text{AL} = 45\\text{H} + 78\\text{H} + 1\\text{H} = \\mathbf{0BEH}$$  
  - `AL = BEH`. Flags: $CF = 0$, $AF = 0$.  
- `DAA` Execution:  
  - Lower nibble $\\text{EH} > 9 \\implies$ add $06\\text{H}$:  
    $$\\text{BEH} + 06\\text{H} = \\mathbf{0C4H} \\implies \\text{AL} = \\text{C4H}, \\quad AF = 1$$  
  - Upper nibble $\\text{CH} > 9 \\implies$ add $60\\text{H}$:  
    $$\\text{C4H} + 60\\text{H} = \\mathbf{124H} \\implies \\text{AL} = \\mathbf{24H}, \\quad \\mathbf{CF = 1}$$  
- `MOV BH, AL` $\\implies \\mathbf{BH = 24H}$.  

**3. Final Result:**  
- Combined register: $\\mathbf{BX = 2462H}$  
- Final Carry Flag: $\\mathbf{CF = 1}$  
Total decimal sum: $12,462_{10}$ (represented by $CF=1$ and $BX=2462$).  
**Marking Scheme:**
- Low byte addition and `DAA` trace (`AL = 62H, CF = 1`): **2 Marks**
- High byte `ADC` with carry propagation: **1.5 Marks**
- High byte `DAA` and final `BX = 2462H`, `CF = 1`: **1.5 Marks**

---

#### Q3.43
**Question:** Analyze the signed division instruction `IDIV BL` under two scenarios:  
- **Scenario A:** `AX = 0080H` ($+128_{10}$), `BL = 02H` ($+2_{10}$).  
- **Scenario B:** `AX = 0400H` ($+1024_{10}$), `BL = 02H` ($+2_{10}$).  
(a) Determine the quotient and remainder for Scenario A. Does it execute successfully?  
(b) Determine the mathematical quotient for Scenario B. Explain why it generates an internal Type 0 Interrupt while Scenario A does not.  
(c) What must a programmer do before executing `IDIV BL` on a signed 8-bit dividend residing in `AL`?  
**Model Solution:**  
(a) **Scenario A Analysis:**  
- Dividend $= \\text{AX} = +128_{10}$, Divisor $= \\text{BL} = +2_{10}$.  
- Mathematical Quotient $= 128 / 2 = \\mathbf{+64_{10}}$.  
- Permissible signed range for 8-bit quotient in `AL`:  
  $$-128_{10} \\le \\text{Quotient} \\le +127_{10} \\quad (-80\\text{H} \\text{ to } +7\\text{FH})$$  
- Since $+64_{10}$ ($40\\text{H}$) falls within range:  
  **`AL = 40H` (Quotient = +64), `AH = 00H` (Remainder = 0)**.  
  Executes successfully without error.  

(b) **Scenario B Analysis:**  
- Dividend $= \\text{AX} = 0400\\text{H} = +1024_{10}$, Divisor $= \\text{BL} = +2_{10}$.  
- Mathematical Quotient $= 1024 / 2 = \\mathbf{+512_{10}}$.  
- Since $+512 > +127$, the quotient **cannot fit into the 8-bit register `AL`**.  
- This triggers a **Quotient Overflow Exception**. The 8086 hardware aborts division and generates an internal **Type 0 Divide Error Interrupt**, branching through vector `00000H`.  

(c) **Required Preparation for Signed Byte Dividend:**  
If a signed 8-bit dividend resides in `AL`, the programmer **MUST execute `CBW` (Convert Byte to Word)** prior to `IDIV BL`. `CBW` copies the sign bit of `AL` into all bits of `AH`, forming a proper 16-bit signed dividend in `AX`. Failing to use `CBW` leaves garbage in `AH`, causing unintended quotient overflows.  
**Marking Scheme:**
- (a) Scenario A trace (`AL = 40H, AH = 00H`): **1.5 Marks**
- (b) Scenario B overflow mathematical proof & Type 0 explanation: **2 Marks**
- (c) Explanation and necessity of `CBW`: **1.5 Marks**

---

#### Q3.44
**Question:** A program uses `REP MOVSW` to copy an array of 5 words ($10\\text{ bytes}$) from Data Segment to Extra Segment.  
- Initial State: `DS = 1000H`, `SI = 0100H`, `ES = 2000H`, `DI = 0200H`, `CX = 0005H`.  
- Initial memory at source: `[10100H] = 11H`, `[10101H] = 22H`, `[10102H] = 33H`, `[10103H] = 44H`, $\\dots$  
**Perform the following:**  
(a) If `DF = 0` (`CLD`), trace the values of `SI`, `DI`, and `CX` after each word transfer. State the ending addresses written in `ES`.  
(b) If `DF = 1` (`STD`), trace how `SI` and `DI` change after each word transfer.  
(c) Explain the difference between `MOVSW` and `MOVSB` regarding pointer increments.  
**Model Solution:**  
**(a) Forward Transfer (`DF = 0`):**  
Because word operations move 2 bytes at a time, `SI` and `DI` increment by **+2** on each step:  
| Transfer # | Word Moved | `SI` after move | `DI` after move | `CX` after move | Destination PA Written |
|:---:|:---:|:---:|:---:|:---:|:---|
| 1 | Word 1 | `0102H` | `0202H` | `0004H` | `20200H, 20201H` |
| 2 | Word 2 | `0104H` | `0204H` | `0003H` | `20202H, 20203H` |
| 3 | Word 3 | `0106H` | `0206H` | `0002H` | `20204H, 20205H` |
| 4 | Word 4 | `0108H` | `0208H` | `0001H` | `20206H, 20207H` |
| 5 | Word 5 | `010AH` | `020AH` | `0000H` | `20208H, 20209H` |
Final States: $\\mathbf{SI = 010AH, DI = 020AH, CX = 0000H}$.  

**(b) Reverse Transfer (`DF = 1`):**  
When `DF = 1`, `SI` and `DI` auto-decrement by **-2** after each word move:  
- After Transfer 1: `SI = 00FEH`, `DI = 01FEH`, `CX = 0004H`.  
- After Transfer 5: `SI = 0100H - 10 = 00F6H`, `DI = 0200H - 10 = 01F6H`, `CX = 0000H`.  

**(c) Difference (`MOVSW` vs `MOVSB`):**  
- `MOVSB` transfers **1 byte**; increments/decrements pointers by **1**.  
- `MOVSW` transfers **1 word (2 bytes)**; increments/decrements pointers by **2**. Both decrement `CX` by 1 per transfer.  
**Marking Scheme:**
- (a) Complete table for forward transfer: **2 Marks**
- (b) Reverse transfer decrement trace: **1.5 Marks**
- (c) Contrast between MOVSW (+2/-2) and MOVSB (+1/-1): **1.5 Marks**

---

#### Q3.45
**Question:** Write an efficient assembly routine using only `MOV`, `SHL`, and `ADD` instructions to multiply the unsigned 16-bit integer in register `AX` by the decimal constant $10_{10}$ without using the hardware `MUL` instruction.  
(a) Provide the complete assembly code sequence.  
(b) Prove mathematical validity by demonstrating the algebraic identity implemented.  
(c) Numerically trace your routine for `AX = 0015H` ($21_{10}$), showing intermediate register states and confirming the final product in `AX`.  
**Model Solution:**  
**(a) Assembly Routine:**  
```assembly
; Routine: MULTIPLY_BY_10
; Input/Output: AX contains number to multiply by 10
SHL AX, 1       ; AX = AX * 2
MOV BX, AX      ; Save (AX * 2) in BX
SHL AX, 1       ; AX = (AX * 2) * 2 = AX * 4
SHL AX, 1       ; AX = (AX * 4) * 2 = AX * 8
ADD AX, BX      ; AX = (AX * 8) + (AX * 2) = AX * 10
```

**(b) Mathematical Proof:**  
Any multiplication by 10 can be decomposed into powers of 2:  
$$N \\times 10 = N \\times (8 + 2) = (N \\times 2^3) + (N \\times 2^1)$$  
- Shifting left by 1 bit multiplies by $2^1 = 2$.  
- Shifting left by 3 bits multiplies by $2^3 = 8$.  
- Summing $(8N + 2N)$ yields exactly $10N$.  
This technique executes in fewer clock cycles than the hardware `MUL` instruction.

**(c) Numerical Trace for `AX = 0015H` ($21_{10}$):**  
1. Initial: `AX = 0015H` ($21_{10}$)  
2. `SHL AX, 1`: $\\text{AX} = 0015\\text{H} \\times 2 = \\mathbf{002AH}$ ($42_{10}$)  
3. `MOV BX, AX`: $\\mathbf{BX = 002AH}$ ($42_{10}$)  
4. `SHL AX, 1`: $\\text{AX} = 002\\text{AH} \\times 2 = \\mathbf{0054H}$ ($84_{10}$)  
5. `SHL AX, 1`: $\\text{AX} = 0054\\text{H} \\times 2 = \\mathbf{00A8H}$ ($168_{10}$)  
6. `ADD AX, BX`:  
   $$\\text{AX} = 00\\text{A}8\\text{H} + 002\\text{AH} = 168_{10} + 42_{10} = 210_{10} = \\mathbf{00D2H}$$  
   Verification: $21_{10} \\times 10_{10} = 210_{10} = \\text{D2}_{16}$. Exact match!  
**Marking Scheme:**
- (a) Correct instruction sequence: **2 Marks**
- (b) Mathematical identity proof ($8N+2N$): **1 Mark**
- (c) Step-by-step trace showing `00D2H`: **2 Marks**

---

#### Q3.46
**Question:** A program executes a software interrupt `INT 40H`.  
- Initial CPU State: `SS = 6000H`, `SP = 2000H`, `CS = 1000H`, `IP = 0500H`, `Flags = 0246H`.  
- The IVT contains the following vector at Type `40H`:  
  `[00100H] = 50H`, `[00101H] = 12H`, `[00102H] = 00H`, `[00103H] = 80H`.  
**Trace the complete hardware interrupt execution:**  
(a) Show the IVT address calculation for Type `40H`.  
(b) Show the exact memory locations in the stack segment and the data bytes written as the CPU saves its context.  
(c) State the final value of `SP`.  
(d) State the new contents loaded into `CS`, `IP`, and the flags `IF` and `TF`.  
(e) What is the physical address of the first instruction executed inside the ISR?  
**Model Solution:**  
(a) IVT Address Calculation:  
    Type $N = 40\\text{H} = 64_{10}$.  
    $$\\text{IVT Base Address} = 64 \\times 4 = 256_{10} = \\mathbf{00100H}$$  
    Entry spans `00100H` to `00103H`.  

(b) Stack Context Saving ($\text{SS Base} = 60000\text{H}$, initial `SP = 2000H`):  
1. **Push Flags (`0246H`):**  
   - Location `61FFFH` receives high byte: **`02H`**  
   - Location `61FFEH` receives low byte: **`46H`**  
   - `SP` decrements to `1FFEH`.  
2. **Push CS (`1000H`):**  
   - Location `61FFDH` receives high byte: **`10H`**  
   - Location `61FFCH` receives low byte: **`00H`**  
   - `SP` decrements to `1FFCH`.  
3. **Push IP (`0500H`):**  
   - Location `61FFBH` receives high byte: **`05H`**  
   - Location `61FFAH` receives low byte: **`00H`**  
   - `SP` decrements to `1FFAH`.  

(c) Final Stack Pointer:  
    $$\\mathbf{SP = 1FFAH}$$  

(d) Updated Internal Registers:  
- `IP` loaded from `[00100H:00101H]` = **`1250H`**  
- `CS` loaded from `[00102H:00103H]` = **`8000H`**  
- **`IF = 0`** (cleared automatically)  
- **`TF = 0`** (cleared automatically)  

(e) ISR Starting Physical Address:  
    $$\\text{PA} = (8000\\text{H} \\times 10\\text{H}) + 1250\\text{H} = 80000\\text{H} + 1250\\text{H} = \\mathbf{81250H}$$  
**Marking Scheme:**
- (a) IVT address calculation: **1 Mark**
- (b) Stack memory table with addresses and bytes: **1.5 Marks**
- (c) Final SP value (`1FFAH`): **0.5 Mark**
- (d) Loaded CS, IP, and cleared IF/TF: **1 Mark**
- (e) ISR starting physical address (`81250H`): **1 Mark**

---

#### Q3.47
**Question:** An assembly language subroutine searches an array of 500 signed 8-bit integers to find the count of negative numbers. The programmer writes:
```assembly
    MOV SI, 1000H       ; Array offset
    MOV CX, 01F4H       ; Count = 500 (1F4H)
    XOR BX, BX          ; Negative count accumulator = 0
CHECK_LOOP:
    CMP BYTE PTR [SI], 00H
    JGE SKIP_COUNT      ; If number >= 0, skip
    INC BX              ; Increment negative counter
SKIP_COUNT:
    INC SI              ; Point to next element
    LOOP CHECK_LOOP
```
(a) Why did the programmer use `JGE` rather than `JAE` after the `CMP` instruction? Explain using status flags.  
(b) If the element in memory is `80H` ($-128_{10}$), trace `CMP BYTE PTR [SI], 00H` and state whether `JGE` branches.  
(c) Explain why the loop termination instruction `LOOP` does not corrupt the flags tested across iterations.  
**Model Answer:**  
**(a) Choice of `JGE` vs `JAE`:**  
- The array elements are **signed 8-bit integers** (range $-128 \\text{ to } +127$).  
- `JAE` (Jump if Above or Equal) is an **unsigned jump** that evaluates only $CF$ ($CF = 0$). Any negative number with MSB=1 (e.g., `FFH` $= 255_{10}$) would be erroneously evaluated as greater than 0.  
- `JGE` (Jump if Greater or Equal) is a **signed jump** that evaluates whether $SF = OF$. It correctly distinguishes negative numbers ($SF \\neq OF$) from positive numbers ($SF = OF$).  

**(b) Trace for Element `80H` ($-128_{10}$):**  
`CMP` executes subtraction: $80\\text{H} - 00\\text{H} = 80\\text{H}$.  
- Sign Flag: $MSB = 1 \\implies \\mathbf{SF = 1}$.  
- Overflow Flag: Subtracting 0 from $-128$ causes no overflow $\\implies \\mathbf{OF = 0}$.  
- Zero Flag: Result is non-zero $\\implies \\mathbf{ZF = 0}$.  
`JGE` condition requires: **$SF = OF$**.  
Here, $SF = 1$ and $OF = 0$ ($SF \\neq OF$). Therefore, the condition is **FALSE**.  
`JGE` does NOT branch. The CPU falls through to `INC BX`, correctly counting `80H` as a negative number!  

**(c) `LOOP` Flag Preservation:**  
The `LOOP` instruction decrements `CX` and branches if $CX \\neq 0$ **without modifying ANY flags** in the Flag register. If `DEC CX` were used, `DEC` would modify $ZF, SF, OF, AF, PF$, which would corrupt condition flags. `LOOP` guarantees zero flag interference.  
**Marking Scheme:**
- (a) Detailed explanation of signed `JGE` vs unsigned `JAE`: **2 Marks**
- (b) Numerical trace of `80H` with flags and branch decision: **2 Marks**
- (c) `LOOP` non-interference with flags: **1 Mark**

---

#### Q3.48
**Question:** A programmer implements a multi-precision subtraction routine to subtract a 32-bit integer in memory from another 32-bit integer:
```assembly
; Data: NUM1 at DS:[1000H] = 12345678H (Little-endian)
;       NUM2 at DS:[2000H] = 23456789H (Little-endian)
; Compute: NUM1 - NUM2
MOV AX, [1000H]     ; AX = 5678H (low word)
SUB AX, [2000H]     ; 5678H - 6789H
MOV [3000H], AX     ; Store low word result
MOV AX, [1002H]     ; AX = 1234H (high word)
SBB AX, [2002H]     ; 1234H - 2345H with borrow
MOV [3002H], AX     ; Store high word result
```
(a) Trace the low word subtraction: calculate the result in `AX` and the status of the Carry Flag (`CF`).  
(b) Trace the high word subtraction using `SBB`: calculate the final result in `AX` and the final `CF`.  
(c) What is the complete 32-bit hexadecimal difference stored at `[3000H]`?  
**Model Solution:**  
**(a) Low Word Subtraction (`SUB AX, [2000H]`):**  
`AX = 5678H`, operand $= 6789\\text{H}$.  
$$\\begin{array}{r@{\\quad}l}
  5678\\text{H} \\\\
- 6789\\text{H} \\\\
\\hline
  \\text{EEF} \\\\
\\end{array}$$  
Hex Subtraction check:  
$8 - 9$: Borrow 1 ($16_{10}$), $16+8-9 = 15 = \\text{FH}$.  
$6 - 8$: Borrow 1 ($16_{10}$), $16+6-8 = 14 = \\text{EH}$.  
$5 - 7$: Borrow 1 ($16_{10}$), $16+5-7 = 14 = \\text{EH}$.  
$4 - 6$: Borrow 1 ($16_{10}$), $16+4-6 = 14 = \\text{EH}$.  
- Difference in `AX` = **`EEEFH`**  
- Because a borrow was generated: **`CF = 1`**.  

**(b) High Word Subtraction with Borrow (`SBB AX, [2002H]`):**  
`AX = 1234H`, operand $= 2345\\text{H}$, incoming $CF = 1$.  
$$\\text{AX} = 1234\\text{H} - 2345\\text{H} - 1\\text{H} = 1234\\text{H} - 2346\\text{H}$$  
Hex Subtraction check:  
$4 - 6$: Borrow 1 ($16_{10}$), $16+4-6 = 14 = \\text{EH}$.  
$2 - 4$: Borrow 1 ($16_{10}$), $16+2-4 = 14 = \\text{EH}$.  
$1 - 3$: Borrow 1 ($16_{10}$), $16+1-3 = 14 = \\text{EH}$.  
$0 - 2$: Borrow 1 ($16_{10}$), $16+0-2 = 14 = \\text{EH}$.  
- Difference in `AX` = **`EEEEH`**  
- Final Borrow: **`CF = 1`**.  

**(c) Complete 32-bit Result:**  
Stored at `[3000H]` (Little-endian: low word `EEEFH` at `3000H`, high word `EEEEH` at `3002H`):  
$$\\mathbf{\\text{Difference} = EEEEEEEFH}$$  
Verification:  
$12345678\\text{H} - 23456789\\text{H} = -11111111\\text{H}$.  
$100000000\\text{H} - 11111111\\text{H} = \\text{EEEEEEEFH}$. Exact 2's complement match!  
**Marking Scheme:**
- (a) Low word subtraction trace (`AX = EEEFH, CF = 1`): **2 Marks**
- (b) High word SBB trace (`AX = EEEEH, CF = 1`): **2 Marks**
- (c) Final 32-bit difference: **1 Mark**
"""

if __name__ == "__main__":
    convert_markdown_string_to_pdf(ch3_md, "Numerical_Question_Bank_Chapter_3.pdf", "8086 Numerical Bank - Chapter 3")
