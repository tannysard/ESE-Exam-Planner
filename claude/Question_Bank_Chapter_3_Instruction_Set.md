# INTEL 8086 MICROPROCESSOR — MASTER QUESTION BANK
## CHAPTER 3: INSTRUCTION SET OF 8086
**Course:** Microprocessors / Microprocessor Architecture & Applications  
**Prepared by:** Senior Faculty & Paper Setter (20+ Years Experience)  
**Syllabus Compliance:** Strictly aligned with Mid-Sem Study Planner (Includes Instruction Formats/Encoding, 12 Addressing Modes, Syllabus Data Transfer, Arithmetic, Logical, Shifts/Rotates, Strings, Stack/Subroutines, Control Transfer, Interrupts, CLC/STC/CLD/STD; Excludes Timing/EACT Tables 3.12-3.29, IN/OUT instructions, CMC/CLI/STI/HLT/WAIT/ESC/LOCK/NOP).

---

### SECTION A: MULTIPLE CHOICE QUESTIONS (MCQs)
*(Each question carries 1 Mark. Designed to test encoding bits, addressing modes, instruction mechanics, and flag state traps)*

#### Q3.1
In the standard two-byte machine language format of the 8086 instruction `MOV [BX + SI], CX`, what are the exact values of the direction bit ($d$) and the word/byte bit ($w$) in the first byte of the machine opcode?
- [A] $d = 0, w = 0$
- [B] $d = 0, w = 1$
- [C] $d = 1, w = 1$
- [D] $d = 1, w = 0$

**Correct Answer:** **[B] $d = 0, w = 1$**  
**Teacher's Rationale & Trap Analysis:**  
In the 8086 instruction format byte: `Opcode (6 bits) | d | w`:
- The $d$ bit specifies the direction of data transfer with respect to the register specified in the `reg` field of byte 2:
  - $d = 1$: The register in `reg` is the **destination** (memory/reg $\rightarrow$ reg).
  - $d = 0$: The register in `reg` is the **source** (reg $\rightarrow$ memory/reg).  
- Here, `CX` is a register and is the **source operand**. Therefore, the CPU encodes `CX` in the `reg` field and sets $d = 0$.
- Because `CX` is a 16-bit register (word operation), the word bit $w = 1$.  
Hence, $d = 0, w = 1$. Trapping option [C] is chosen by students who think $d=1$ always represents a write.

---

#### Q3.2
Given the machine code byte sequence for an instruction where the `mod` field is `00` and the `r/m` field is `110`, what addressing mode is specified by the processor?
- [A] Register Indirect Addressing through Base Pointer (`[BP]`)
- [B] Direct Addressing with a 16-bit displacement (`[disp16]`)
- [C] Based Indexed Addressing (`[BP + DI]`)
- [D] Register Addressing with register `DH` or `SI`

**Correct Answer:** **[B] Direct Addressing with a 16-bit displacement (`[disp16]`)**  
**Teacher's Rationale & Trap Analysis:**  
This is one of the most famous hardware encoding traps in 8086 architecture!  
Normally, $r/m = 110$ corresponds to the base pointer `[BP]`. However, when $mod = 00$ (which denotes "memory mode, no displacement"), an exception is hardwired into the 8086 decoder: $mod = 00, r/m = 110$ does **not** mean `[BP]`; instead, it specifies **Direct Addressing (`[disp16]`)**, where the next two bytes provide a 16-bit direct offset address! To specify `[BP]` with no extra displacement, the assembler must encode $mod = 01, r/m = 110$ with an explicit displacement of $00\text{H}$.

---

#### Q3.3
Consider the 8086 instruction: `MOV AX, [BP + SI + 08H]`. Which segment register is used by default by the Bus Interface Unit to calculate the 20-bit physical memory address?
- [A] Data Segment (`DS`)
- [B] Code Segment (`CS`)
- [C] Stack Segment (`SS`)
- [D] Extra Segment (`ES`)

**Correct Answer:** **[C] Stack Segment (`SS`)**  
**Teacher's Rationale & Trap Analysis:**  
In 8086 addressing modes:
- Any Effective Address (EA) calculation that incorporates the **Base Pointer (`BP`)** uses the **Stack Segment (`SS`)** as its default segment register.
- If `BX`, `SI`, or `DI` are used without `BP`, the default segment register is the **Data Segment (`DS`)**.  
Since `BP` is present in `[BP + SI + 08H]`, the default segment is strictly `SS`.

---

#### Q3.4
An assembly programmer writes the following instruction sequence:
```assembly
MOV AL, 0FFH
ADD AL, 01H
```
What will be the contents of `AL` and the status of the Carry Flag (`CF`) and Zero Flag (`ZF`)?
- [A] `AL = 00H`, `CF = 0`, `ZF = 1`
- [B] `AL = 00H`, `CF = 1`, `ZF = 1`
- [C] `AL = 01H`, `CF = 1`, `ZF = 0`
- [D] `AL = 00H`, `CF = 1`, `ZF = 0`

**Correct Answer:** **[B] `AL = 00H`, `CF = 1`, `ZF = 1`**  
**Teacher's Rationale & Trap Analysis:**  
$\text{FFH} + 01\text{H} = 1111 1111_2 + 0000 0001_2 = \mathbf{1\ 0000\ 0000}_2$.  
The 8-bit register `AL` retains the lower 8 bits, so `AL = 00H`.  
Because the sum is zero, the Zero Flag is set: $\mathbf{ZF = 1}$.  
Because a carry was generated out of bit 7 into bit 8, the Carry Flag is set: $\mathbf{CF = 1}$.

---

#### Q3.5
Now consider the same initial value, but modified using the `INC` instruction:
```assembly
MOV AL, 0FFH
INC AL
```
What will be the contents of `AL` and the status of the Carry Flag (`CF`)?
- [A] `AL = 00H`, `CF = 1`
- [B] `AL = 00H`, `CF = 0` (or unchanged from prior state)
- [C] `AL = 01H`, `CF = 1`
- [D] `AL = 0FFH`, `CF = 0`

**Correct Answer:** **[B] `AL = 00H`, `CF = 0` (or unchanged from prior state)**  
**Teacher's Rationale & Trap Analysis:**  
This is the quintessential university examination trap!  
The `INC` and `DEC` instructions affect `OF`, `SF`, `ZF`, `AF`, and `PF`, but **THEY DO NOT AFFECT THE CARRY FLAG (`CF`)**! Intel deliberately designed `INC` and `DEC` this way so that loop counters could be incremented or decremented inside multi-byte addition/subtraction loops without destroying the carry chain maintained by `ADC` or `SBB`. Therefore, `AL = 00H`, but `CF` remains completely unaffected.

---

#### Q3.6
Which of the following 8086 instructions is syntactically and architecturally **ILLEGAL** and will be rejected by an assembler?
- [A] `PUSH CS`
- [B] `POP CS`
- [C] `PUSH DS`
- [D] `POP ES`

**Correct Answer:** **[B] `POP CS`**  
**Teacher's Rationale & Trap Analysis:**  
`POP CS` is strictly prohibited in the 8086 architecture. Popping an arbitrary value directly into the Code Segment register (`CS`) without simultaneously loading a synchronized Instruction Pointer (`IP`) would immediately cause the CPU to execute garbage code at an unpredictable memory location. To change `CS`, programmers must use inter-segment (FAR) `JMP`, `CALL`, or `RETF` instructions. Note that `PUSH CS` is completely legal.

---

#### Q3.7
What is the primary difference between the instructions `SUB AX, BX` and `CMP AX, BX`?
- [A] `SUB` performs signed subtraction, while `CMP` performs unsigned subtraction.
- [B] `SUB` updates all arithmetic flags and modifies the destination register `AX`, whereas `CMP` updates all arithmetic flags identically to `SUB` but leaves the destination register `AX` completely unaltered.
- [C] `SUB` updates the Carry Flag, whereas `CMP` only updates the Zero Flag.
- [D] `CMP` performs 2's complement negation of `BX` before addition.

**Correct Answer:** **[B] `SUB` updates all arithmetic flags and modifies the destination register `AX`, whereas `CMP` updates all arithmetic flags identically to `SUB` but leaves the destination register `AX` completely unaltered.**  
**Teacher's Rationale & Trap Analysis:**  
Both `SUB` and `CMP` execute internal subtraction: $\text{Destination} - \text{Source}$. They update `CF, OF, SF, ZF, AF, PF` identically. The only difference is that `SUB` writes the difference back into the destination operand, while `CMP` discards the result, preserving the destination contents.

---

#### Q3.8
Suppose register `AX` contains `0027H` and register `BL` contains `0005H`. An engineer executes:
```assembly
ADD AL, BL
DAA
```
What is the final value in `AL` after decimal adjustment?
- [A] `2CH`
- [B] `32H`
- [C] `22H`
- [D] `30H`

**Correct Answer:** **[B] `32H`**  
**Teacher's Rationale & Trap Analysis:**  
Let us trace the BCD arithmetic:
1. `ADD AL, BL`: $27\text{H} + 05\text{H} = \mathbf{2CH}$.  
   - The lower nibble is `CH` ($12_{10}$).  
2. `DAA` (Decimal Adjust after Addition) checks:
   - Is lower nibble $> 9$ or $AF = 1$? Yes, $\text{CH} > 9$.  
   - Therefore, `DAA` adds $06\text{H}$ to `AL`:  
     $$2\text{CH} + 06\text{H} = \mathbf{32H}$$  
   - $AF$ is set to 1.  
   - The upper nibble is now $3 \le 9$ and $CF = 0$, so no further adjustment is needed.  
`32H` is the correct BCD representation of $27 + 5 = 32$!

---

#### Q3.9
A programmer wants to pack two unpacked BCD digits residing in `AH` and `AL` before performing an unsigned division. Which instruction must be executed **prior** to the `DIV` instruction?
- [A] `AAM`
- [B] `AAA`
- [C] `AAD`
- [D] `DAA`

**Correct Answer:** **[C] `AAD`**  
**Teacher's Rationale & Trap Analysis:**  
`AAD` (ASCII Adjust before Division) is the only adjust instruction executed **before** an arithmetic operation rather than after. It converts two unpacked BCD digits in `AH:AL` into a single binary value in `AL`:  
$$\text{AL} = (\text{AH} \times 10) + \text{AL}; \quad \text{AH} = 00\text{H}$$  
`AAM` is executed *after* multiplication; `AAA` and `DAA` are executed *after* addition.

---

#### Q3.10
If register `AX` contains `8FE4H` (a signed negative number), what will be the contents of register `DX` and `AX` after executing the instruction `CWD` (Convert Word to Double Word)?
- [A] `DX = 0000H`, `AX = 8FE4H`
- [B] `DX = FFFFH`, `AX = 8FE4H`
- [C] `DX = 8FE4H`, `AX = 0000H`
- [D] `DX = FFFFH`, `AX = 001CH`

**Correct Answer:** **[B] `DX = FFFFH`, `AX = 8FE4H`**  
**Teacher's Rationale & Trap Analysis:**  
`CWD` sign-extends the 16-bit word in `AX` into the 32-bit register pair `DX:AX`:
- It inspects the MSB of `AX` (bit 15).
- In `8FE4H`, bit 15 is `1` (since $8_{16} = 1000_2$).
- Therefore, `CWD` fills all 16 bits of `DX` with `1`s, making $\mathbf{DX = FFFFH}$.
- `AX` remains unchanged at $\mathbf{8FE4H}$.

---

#### Q3.11
What is the effect of executing `SAR AX, 1` (Shift Arithmetic Right) when `AX = F054H`?
- [A] `AX = 782AH`, `CF = 0`
- [B] `AX = F82AH`, `CF = 0`
- [C] `AX = F82AH`, `CF = 1`
- [D] `AX = 782AH`, `CF = 1`

**Correct Answer:** **[B] `AX = F82AH`, `CF = 0`**  
**Teacher's Rationale & Trap Analysis:**  
`SAR` performs an **arithmetic** right shift:
- The bit shifted out of the LSB (bit 0) enters the Carry Flag (`CF`).
  - In `F054H`, bit 0 is `0` (since $4_{16} = 0100_2$). Thus, $\mathbf{CF = 0}$.
- The MSB (sign bit) **retains its original value** and is duplicated into bit 14.
  - `F054H` $= 1111\ 0000\ 0101\ 0100_2$.  
  - Shifting right arithmetically by 1:  
    $$1111\ 1000\ 0010\ 1010_2 = \mathbf{F82AH}$$  
Option [A] represents `SHR` (logical shift right), which incorrectly inserts a 0 into the MSB.

---

#### Q3.12
Which of the following conditional jump instructions tests for an **unsigned** comparison where the destination operand was strictly greater than the source operand?
- [A] `JG` (Jump if Greater)
- [B] `JA` (Jump if Above)
- [C] `JGE` (Jump if Greater or Equal)
- [D] `JAE` (Jump if Above or Equal)

**Correct Answer:** **[B] `JA` (Jump if Above)**  
**Teacher's Rationale & Trap Analysis:**  
In 8086 assembly nomenclature:
- **Above / Below (`JA`, `JB`, `JAE`, `JBE`)** are strictly for **UNSIGNED** numbers. `JA` triggers when $CF = 0$ and $ZF = 0$.
- **Greater / Less (`JG`, `JL`, `JGE`, `JLE`)** are strictly for **SIGNED** numbers, testing combinations of $SF$, $OF$, and $ZF$.

---

#### Q3.13
During the execution of string instructions with the `REP` prefix (such as `REP MOVSB`), which register functions as the automatic loop counter, and what happens to the Direction Flag (`DF`)?
- [A] `CX` is decremented by 1 after each byte moved; `DF` determines whether `SI` and `DI` increment or decrement.
- [B] `DX` is decremented by 1 after each byte moved; `DF` is automatically inverted.
- [C] `AX` holds the count; `DF` must be set to 1 for increment.
- [D] `BX` is incremented; `DF` is cleared after every transfer.

**Correct Answer:** **[A] `CX` is decremented by 1 after each byte moved; `DF` determines whether `SI` and `DI` increment or decrement.**  
**Teacher's Rationale & Trap Analysis:**  
`CX` acts as the hardware count register for all string repeat prefixes. After each element transfer, `CX` is decremented by 1 until it reaches 0. If $DF = 0$ (cleared via `CLD`), `SI` and `DI` increment; if $DF = 1$ (set via `STD`), `SI` and `DI` decrement.

---

#### Q3.14
When the 8086 executes a Near `CALL` instruction (`CALL NEAR PTR SUBR`), how is the return address saved on the stack?
- [A] Both `CS` and `IP` are pushed onto the stack (4 bytes).
- [B] Only `IP` is pushed onto the stack; `SP` is decremented by 2.
- [C] Only `CS` is pushed onto the stack; `SP` is decremented by 2.
- [D] `IP` and the Flag register are pushed onto the stack.

**Correct Answer:** **[B] Only `IP` is pushed onto the stack; `SP` is decremented by 2.**  
**Teacher's Rationale & Trap Analysis:**  
A **Near CALL** is an intra-segment call (within the current code segment). Because the target procedure resides in the same code segment, `CS` does not change. Only the 16-bit offset of the next sequential instruction (`IP`) is pushed onto the stack, decrementing `SP` by 2. A **Far CALL** (inter-segment) pushes both `CS` and `IP`.

---

#### Q3.15
What is the effect of executing the instruction `TEST AL, 01H`?
- [A] It performs bitwise AND between `AL` and `01H`, updates `ZF`, and clears bit 0 of `AL`.
- [B] It performs bitwise AND between `AL` and `01H`, updates `ZF`, `SF`, `PF`, clears `CF` and `OF`, and leaves `AL` unchanged.
- [C] It compares `AL` with `01H` by subtraction and sets `CF` if `AL` is zero.
- [D] It tests if `AL` is negative and jumps to an error routine.

**Correct Answer:** **[B] It performs bitwise AND between `AL` and `01H`, updates `ZF`, `SF`, `PF`, clears `CF` and `OF`, and leaves `AL` unchanged.**  
**Teacher's Rationale & Trap Analysis:**  
`TEST` performs a non-destructive bitwise `AND`. It sets $CF = 0, OF = 0$, updates $SF, ZF, PF$ based on the result, and leaves the destination register (`AL`) completely unmodified. It is primarily used to inspect individual bits (here, bit 0 to test for odd/even).

---

#### Q3.16
What happens to the Stack Pointer (`SP`) when the instruction `RET 0004H` is executed at the conclusion of a near subroutine?
- [A] `IP` is popped from the stack, and then `SP` is decremented by 4.
- [B] `IP` is popped from the stack, and then `SP` is incremented by 4 (total increment of `SP` = 6).
- [C] 4 words are popped into general-purpose registers before returning.
- [D] `SP` is set to `0004H`.

**Correct Answer:** **[B] `IP` is popped from the stack, and then `SP` is incremented by 4 (total increment of `SP` = 6).**  
**Teacher's Rationale & Trap Analysis:**  
`RET n` is used to discard parameters passed to a subroutine via the stack. In a near return:
1. `IP` is popped from stack: $\text{SP} = \text{SP} + 2$.
2. The immediate value $n$ is added to the stack pointer: $\text{SP} = \text{SP} + n = \text{SP} + 4$.  
Net change in `SP` is $+6$. This cleanly removes 4 bytes (2 words) of parameters without extra instructions.

---

#### Q3.17
The instruction `XLAT` (Translate) computes the physical address of a lookup table entry using which register combination?
- [A] `DS:[SI + AL]`
- [B] `DS:[BX + AL]`
- [C] `ES:[DI + AL]`
- [D] `SS:[BP + AL]`

**Correct Answer:** **[B] `DS:[BX + AL]`**  
**Teacher's Rationale & Trap Analysis:**  
`XLAT` replaces the byte in `AL` with a byte from a 256-byte lookup table in memory. The base address of the table must be loaded into `BX` (in the Data Segment `DS`), and `AL` provides the unsigned 8-bit index ($0-255$). The CPU fetches `DS:[BX + AL]` and writes it into `AL`.

---

#### Q3.18
If `BX = 1000H` and `DS = 2000H`, what is the difference between the instructions `LEA AX, [BX + 50H]` and `MOV AX, [BX + 50H]`?
- [A] `LEA` loads `1050H` into `AX` without accessing memory data, whereas `MOV` accesses physical memory at `21050H` and loads the 16-bit data stored there into `AX`.
- [B] `LEA` accesses memory at `21050H`, while `MOV` loads the offset.
- [C] `LEA` affects the Zero Flag, while `MOV` does not.
- [D] There is no operational difference; both instructions produce identical results.

**Correct Answer:** **[A] `LEA` loads `1050H` into `AX` without accessing memory data, whereas `MOV` accesses physical memory at `21050H` and loads the 16-bit data stored there into `AX`.**  
**Teacher's Rationale & Trap Analysis:**  
`LEA` (Load Effective Address) calculates the offset expression ($\text{EA} = \text{BX} + 50\text{H} = 1050\text{H}$) and transfers the **address value itself** into the destination register; it performs **no memory read cycle**. `MOV AX, [BX + 50H]` initiates a bus cycle to read the **data word stored at physical address** $20000\text{H} + 1050\text{H} = 21050\text{H}$.

---

#### Q3.19
Which of the following shift/rotate instructions rotates the bits of the operand through the Carry Flag, treating `CF` as an extra 9th bit (for byte) or 17th bit (for word)?
- [A] `ROL`
- [B] `ROR`
- [C] `RCL`
- [D] `SHL`

**Correct Answer:** **[C] `RCL`**  
**Teacher's Rationale & Trap Analysis:**  
- `ROL` and `ROR` rotate bits circularly within the register; the bit leaving one end simultaneously enters `CF` and the opposite end.  
- `RCL` (Rotate through Carry Left) and `RCR` (Rotate through Carry Right) treat `CF` as an integral part of the data ring: the outgoing bit enters `CF`, and the previous contents of `CF` enter the opposite end of the register.

---

#### Q3.20
What is the operation of the instruction `LOOP LABEL` in the 8086?
- [A] It decrements `CX` by 1; if $CX \neq 0$, it branches to `LABEL`; it modifies `ZF`.
- [B] It decrements `CX` by 1; if $CX \neq 0$, it branches to `LABEL`; it **does not affect any flags**.
- [C] It increments `CX` by 1; if $CX = 0$, it branches to `LABEL`.
- [D] It decrements `AX` by 1; if $AX \neq 0$, it branches to `LABEL`.

**Correct Answer:** **[B] It decrements `CX` by 1; if $CX \neq 0$, it branches to `LABEL`; it does not affect any flags.**  
**Teacher's Rationale & Trap Analysis:**  
`LOOP` automatically decrements `CX` by 1 and branches if $CX \neq 0$. Crucially, **`LOOP` DOES NOT MODIFY ANY FLAGS** (unlike `DEC CX`, which updates `ZF`). This ensures conditional jump flags evaluated inside the loop body are not corrupted by the loop termination mechanism.

---

### SECTION B: FILL IN THE BLANKS
*(Rigorous technical completions testing machine encoding, addressing modes, and instruction mechanics)*

1. In 8086 machine instruction encoding, the $w$ bit indicates the operand data size: $w = 0$ designates an **_______________**-bit byte operation, while $w = 1$ designates a **_______________**-bit word operation.  
   *Answer:* **8; 16**  
   *Context:* Standard byte 1 encoding format.

2. In the second byte of an instruction, if the `mod` field is set to **`11`**, the `r/m` field specifies a **_______________** operand rather than a memory addressing mode.  
   *Answer:* **Register**  
   *Context:* $mod = 11$ designates register-to-register mode.

3. The addressing mode exemplified by the instruction `MOV AX, [BX + DI]` is designated as **_______________** addressing mode.  
   *Answer:* **Based-Indexed**  
   *Context:* Combines a base register (`BX`) and an index register (`DI`).

4. In all string manipulation instructions, the destination string operand must reside strictly in the **_______________** Segment, pointed to by the index register **_______________**, and its segment cannot be overridden with a segment prefix.  
   *Answer:* **Extra (`ES`); `DI` (Destination Index)**  
   *Context:* Hardware restriction on string destination operands.

5. When performing 16-bit unsigned multiplication using `MUL BX`, the multiplicand is assumed to be in register **_______________**, and the 32-bit product is stored across the register pair **_______________** (high word) and **_______________** (low word).  
   *Answer:* **`AX`; `DX`; `AX`**  
   *Context:* Implicit register architecture of `MUL`.

6. If the divisor in an 8-bit division instruction `DIV BL` is zero, or if the resulting quotient exceeds $255_{10}$ (`FFH`), the 8086 hardware immediately aborts execution and generates an internal **_______________** (Divide Error) interrupt.  
   *Answer:* **Type 0**  
   *Context:* Dedicated CPU exception handling.

7. The instruction `NEG AL` computes the arithmetic 2's complement of `AL`; if `AL = 00H` prior to execution, the Carry Flag (`CF`) is set to **_______________**, whereas for any non-zero initial value in `AL`, `CF` is set to **_______________**.  
   *Answer:* **0; 1**  
   *Context:* In 2's complement negation ($0 - X$), borrow occurs for all non-zero numbers.

8. The instruction `CBW` (Convert Byte to Word) sign-extends the value in register `AL` into register `AX` by copying bit 7 of `AL` into all bit positions of register **_______________**.  
   *Answer:* **`AH`**  
   *Context:* Sign extension mechanics.

9. In string comparison using `REPE CMPSB`, the repetition continues as long as `CX` is not zero AND the **_______________** Flag is equal to **_______________**.  
   *Answer:* **Zero (`ZF`); 1**  
   *Context:* Repeat while equal prefix.

10. The only four processor control instructions included in the syllabus for programmatic flag manipulation are `CLC`, `STC`, `CLD`, and **_______________**.  
    *Answer:* **`STD`**  
    *Context:* Syllabic restriction (CMC, CLI, STI skipped).

11. The relative displacement in an 8086 conditional jump instruction is a signed **_______________**-bit integer, restricting the jump target range to between **_______________** bytes backward and **_______________** bytes forward from the next instruction.  
    *Answer:* **8; -128; +127**  
    *Context:* Short relative branching range.

12. The instruction `SAHF` copies bits 7, 6, 4, 2, and 0 of register **_______________** directly into the lower byte of the 8086 Flag register.  
    *Answer:* **`AH`**  
    *Context:* LAHF/SAHF register transfer.

---

### SECTION C: TRUE OR FALSE STATEMENTS
*(Advanced conceptual statements with detailed technical justifications)*

#### Q3.21
**Statement:** The instruction `MOV [1200H], [3400H]` is a valid 8086 assembly language instruction that copies a word directly from one memory location to another.  
**Answer:** **FALSE**  
**Justification:** Memory-to-memory transfers are **strictly prohibited** in the 8086 instruction set. To transfer data between two memory locations, data must first be moved into an intermediate internal CPU register (e.g., `MOV AX, [3400H]` followed by `MOV [1200H], AX`), requiring two instructions.

---

#### Q3.22
**Statement:** The instruction `MOV DS, 2000H` is a legal instruction used to initialize the Data Segment register with base address `2000H`.  
**Answer:** **FALSE**  
**Justification:** Moving an immediate constant directly into any segment register is syntactically **illegal** in 8086. Segment registers can only be loaded from a general-purpose register or memory (e.g., `MOV AX, 2000H` followed by `MOV DS, AX`).

---

#### Q3.23
**Statement:** The instruction `XCHG AX, BX` swaps the 16-bit contents of `AX` and `BX` without altering any flags in the Flag register.  
**Answer:** **TRUE**  
**Justification:** The `XCHG` instruction belongs to the Data Transfer group. Like `MOV`, `XCHG` transfers binary data without modifying any conditional or control flags.

---

#### Q3.24
**Statement:** In an 8086 assembly program, the instruction `SHL AX, 1` and `SAL AX, 1` generate completely identical machine language opcodes and perform identical bit shifts.  
**Answer:** **TRUE**  
**Justification:** In binary arithmetic, shifting left logically (filling LSB with 0) is mathematically identical to shifting left arithmetically (multiplying by 2). The assembler maps both `SHL` and `SAL` to the exact same opcode (`D1 /4`).

---

#### Q3.25
**Statement:** The instruction `NOT AL` performs a 1's complement bitwise inversion on `AL` and updates the Zero Flag (`ZF`) and Sign Flag (`SF`) accordingly.  
**Answer:** **FALSE**  
**Justification:** The `NOT` instruction **DOES NOT AFFECT ANY FLAGS**! It simply inverts all bits. If a programmer wants to invert bits and update flags, they must use `XOR AL, 0FFH` instead. This is a classic paper-setter trap.

---

#### Q3.26
**Statement:** When executing `LDS SI, [2000H]`, the 8086 loads a 16-bit offset into `SI` from memory addresses `2000H:2001H` and loads a 16-bit segment base into `DS` from memory addresses `2002H:2003H`.  
**Answer:** **TRUE**  
**Justification:** `LDS` (Load Pointer using DS) reads a 32-bit far pointer (4 consecutive bytes) from memory: the lower word is placed into the specified register (`SI`), and the upper word is placed into `DS`.

---

#### Q3.27
**Statement:** Executing `LOOPZ` decrements register `CX` by 1; if $CX \neq 0$ and $ZF = 0$, the processor jumps to the specified target address.  
**Answer:** **FALSE**  
**Justification:** `LOOPZ` (Loop if Zero / Equal) branches only if $CX \neq 0$ **AND $ZF = 1$**. If $ZF = 0$, the loop terminates even if $CX \neq 0$.

---

#### Q3.28
**Statement:** Executing `AAM` (ASCII Adjust after Multiply) divides the binary value in `AL` by 10, placing the quotient in `AH` and the remainder in `AL`.  
**Answer:** **TRUE**  
**Justification:** `AAM` unpacks a binary product ($< 100$) in `AL` into two unpacked BCD digits by dividing by $10_{10}$: $\text{AH} = \text{AL} / 10$ and $\text{AL} = \text{AL} \pmod{10}$.

---

#### Q3.29
**Statement:** In an 8086 system, executing `PUSH AX` increments the Stack Pointer (`SP`) by 2.  
**Answer:** **FALSE**  
**Justification:** The 8086 stack grows downwards towards lower addresses. `PUSH` decrements `SP` by 2 ($\text{SP} \leftarrow \text{SP} - 2$); `POP` increments `SP` by 2 ($\text{SP} \leftarrow \text{SP} + 2$).

---

#### Q3.30
**Statement:** The instruction `CMP BL, 80H` affects the Sign Flag (`SF`) and Overflow Flag (`OF`), but does not modify the contents of register `BL`.  
**Answer:** **TRUE**  
**Justification:** `CMP` performs internal subtraction ($\text{BL} - 80\text{H}$) to update all status flags (`CF, OF, SF, ZF, AF, PF`), but the result is discarded and `BL` remains unchanged.

---

#### Q3.31
**Statement:** The instruction `JMP DWORD PTR [BX]` performs an intra-segment near indirect jump within the current code segment.  
**Answer:** **FALSE**  
**Justification:** The keyword `DWORD PTR` indicates a 32-bit pointer (4 bytes: new `IP` and new `CS`). Therefore, it executes an **inter-segment (FAR) indirect jump**, altering both `CS` and `IP`. A near indirect jump uses `WORD PTR`.

---

#### Q3.32
**Statement:** After executing `SUB AL, AL`, the Zero Flag (`ZF`) is set to 1, and the Carry Flag (`CF`) is cleared to 0.  
**Answer:** **TRUE**  
**Justification:** Subtracting any register from itself yields $00\text{H}$. Therefore, $ZF = 1$, and since no borrow is required, $CF = 0$.

---

### SECTION D: 3 MARKS QUESTIONS
*(Medium-level analytical questions with point-wise marking schemes)*

#### Q3.33
**Question:** Explain the meaning of the fields **`mod`**, **`reg`**, and **`r/m`** in the second byte of an 8086 machine instruction. How does the processor interpret the `r/m` field when $mod = 00$ versus when $mod = 11$?  
**Model Answer:**
1. **Field Definitions:**
   - **`mod` (Mode field, 2 bits):** Specifies whether the operand is in a register or memory, and the size of displacement following the opcode (00 = no displacement/direct; 01 = 8-bit signed disp; 10 = 16-bit disp; 11 = register mode).
   - **`reg` (Register field, 3 bits):** Identifies one of the 8 CPU registers (e.g., `000 = AL/AX`, `011 = BL/BX`) acting as source or destination.
   - **`r/m` (Register / Memory field, 3 bits):** Specifies the second operand.
2. **Interpretation of `r/m`:**
   - **When $mod = 11$ (Register Mode):** The `r/m` field specifies a CPU register (identical coding to `reg`). Combined with the $w$ bit, it selects an 8-bit or 16-bit general register.
   - **When $mod = 00$ (Memory Mode without displacement):** The `r/m` field specifies which base/index register combination computes the Effective Address (e.g., `000 = [BX+SI]`, `001 = [BX+DI]`, `100 = [SI]`, `111 = [BX]`). Exception: $mod = 00, r/m = 110$ indicates 16-bit direct addressing (`[disp16]`).  
**Marking Scheme:**
- Definition of `mod`, `reg`, and `r/m`: **1.5 Marks**
- Clear contrast of `r/m` under $mod = 11$ vs $mod = 00$: **1.5 Marks**

---

#### Q3.34
**Question:** Identify the **Addressing Mode** for each of the following 8086 instructions and calculate the Effective Address (EA) where applicable:  
(a) `MOV AX, [1500H]`  
(b) `MOV [BX + DI + 04H], CX`  
(c) `MOV AL, [SI]`  
Assume `BX = 2000H`, `SI = 0300H`, `DI = 0400H`.  
**Model Answer:**
(a) `MOV AX, [1500H]`:  
    - **Addressing Mode:** **Direct Addressing Mode**.  
    - **Effective Address (EA):** Given directly in the instruction: $\mathbf{EA = 1500H}$ (Default segment: `DS`).  
(b) `MOV [BX + DI + 04H], CX`:  
    - **Addressing Mode:** **Based-Indexed with Displacement Addressing Mode** (or Based-Indexed Relative).  
    - **Effective Address (EA):**  
      $$\text{EA} = (\text{BX}) + (\text{DI}) + \text{disp} = 2000\text{H} + 0400\text{H} + 0004\text{H} = \mathbf{2404H} \quad (\text{Default segment: DS})$$  
(c) `MOV AL, [SI]`:  
    - **Addressing Mode:** **Indexed Addressing Mode** (or Register Indirect Addressing).  
    - **Effective Address (EA):**  
      $$\text{EA} = (\text{SI}) = \mathbf{0300H} \quad (\text{Default segment: DS})$$  
**Marking Scheme:**
- (a) Mode and EA: **1 Mark**
- (b) Mode and EA calculation: **1 Mark**
- (c) Mode and EA calculation: **1 Mark**

---

#### Q3.35
**Question:** Differentiate clearly between the instructions **`TEST`** and **`AND`**, and between **`TEST`** and **`CMP`**. Give one practical programming application of the `TEST` instruction.  
**Model Answer:**
1. **`TEST` vs `AND`:**  
   Both instructions perform a bitwise logical AND operation and update the flags (`CF=OF=0`, updates `SF, ZF, PF`). However, `AND` overwrites the destination operand with the logical product, whereas `TEST` preserves the destination operand completely unchanged.
2. **`TEST` vs `CMP`:**  
   `TEST` performs a **bitwise logical AND**; `CMP` performs an **arithmetic subtraction** ($\text{Dest} - \text{Src}$). `CMP` sets flags to reflect numerical magnitude, while `TEST` sets flags to reflect bit status.
3. **Application:** Checking if a specific bit is set without altering data:
   ```assembly
   TEST AL, 01H    ; Checks bit 0 (Is number odd or even?)
   JNZ  ODD_LABEL  ; Jumps if bit 0 is 1 (Odd number)
   ```  
**Marking Scheme:**
- Contrast between `TEST` and `AND`: **1 Mark**
- Contrast between `TEST` and `CMP`: **1 Mark**
- Practical programming example: **1 Mark**

---

#### Q3.36
**Question:** Explain the operation of the instructions **`DAA` (Decimal Adjust after Addition)** and **`DAS` (Decimal Adjust after Subtraction)**. Why are these instructions needed in an 8086 microprocessor?  
**Model Answer:**
1. **Need:** The 8086 ALU performs addition and subtraction purely in binary. When packed BCD numbers (where each 4-bit nibble represents $0-9$) are added or subtracted, sums exceeding 9 or producing invalid nibbles (`A` to `F`) result. `DAA` and `DAS` automatically adjust the binary result back into valid packed BCD format.
2. **`DAA` Operation:** Examines `AL`:
   - If lower nibble $> 9$ or $AF = 1$: adds $06\text{H}$ to `AL` and sets $AF = 1$.
   - If upper nibble $> 9$ or $CF = 1$: adds $60\text{H}$ to `AL` and sets $CF = 1$.
3. **`DAS` Operation:** Examines `AL` after subtraction:
   - If lower nibble $> 9$ or $AF = 1$: subtracts $06\text{H}$ from `AL` and sets $AF = 1$.
   - If upper nibble $> 9$ or $CF = 1$: subtracts $60\text{H}$ from `AL` and sets $CF = 1$.  
**Marking Scheme:**
- Justification of BCD correction necessity: **1 Mark**
- Accurate operational logic of `DAA`: **1 Mark**
- Accurate operational logic of `DAS`: **1 Mark**

---

#### Q3.37
**Question:** Trace the execution of the following instructions and find the final contents of `AX` and the Carry Flag (`CF`):
```assembly
MOV AX, 0005H
MOV BL, 02H
MUL BL
AAM
```
**Model Answer:**
1. `MOV AX, 0005H`: `AL = 05H`, `AH = 00H`.
2. `MOV BL, 02H`: `BL = 02H`.
3. `MUL BL`: Performs unsigned 8-bit multiplication:  
   $$\text{AX} = \text{AL} \times \text{BL} = 05\text{H} \times 02\text{H} = 000\text{AH} = 10_{10}$$  
   Because the upper byte `AH = 00H`, the Carry Flag is cleared: $\mathbf{CF = 0}$.  
4. `AAM` (ASCII Adjust after Multiply): Converts binary product in `AL` (`0AH`) into two unpacked BCD digits:  
   $$\text{AH} = \text{AL} / 10_{10} = 10 / 10 = \mathbf{01H}$$  
   $$\text{AL} = \text{AL} \pmod{10_{10}} = 10 \pmod{10} = \mathbf{00H}$$  
   Final contents of `AX` = **`0100H`** (`AH = 01H`, `AL = 00H`).  
**Marking Scheme:**
- Step-by-step trace of `MUL BL` and `AX = 000AH`, `CF = 0`: **1.5 Marks**
- Trace of `AAM` arithmetic yielding `AX = 0100H`: **1.5 Marks**

---

#### Q3.38
**Question:** Explain the difference between **`SHR` (Shift Logical Right)** and **`SAR` (Shift Arithmetic Right)**. Trace the result in `AL` and `CF` for both instructions when `AL = 9AH` and shift count is 1.  
**Model Answer:**
1. **Conceptual Difference:**
   - `SHR`: Logical shift right. Shifts all bits right; inserts a **`0` into the MSB** (bit 7); shifts LSB (bit 0) into `CF`. Used for unsigned division by 2.
   - `SAR`: Arithmetic shift right. Shifts all bits right; **retains the sign bit (MSB is duplicated)** into bit 7; shifts LSB into `CF`. Preserves the sign for 2's complement negative numbers.
2. **Trace for `AL = 9AH = 1001 1010`$_2$, count = 1:**
   - LSB is `0`, so in both instructions $\mathbf{CF = 0}$.
   - **For `SHR AL, 1`:**  
     Insert `0` at MSB: $\text{0 } 100\ 1101_2 = \mathbf{4DH}$.  
     $\mathbf{AL = 4DH, CF = 0}$.
   - **For `SAR AL, 1`:**  
     Duplicate MSB (`1`): $\text{1 } 100\ 1101_2 = \mathbf{CDH}$.  
     $\mathbf{AL = CDH, CF = 0}$.  
**Marking Scheme:**
- Accurate distinction between logical and arithmetic right shifts: **1.5 Marks**
- Precise binary traces showing `4DH` for `SHR` and `CDH` for `SAR`: **1.5 Marks**

---

#### Q3.39
**Question:** Explain the operation of the string instruction **`CMPSB`** with the **`REPE`** prefix. What registers must be initialized prior to executing `REPE CMPSB`, and under what two conditions will the execution terminate?  
**Model Answer:**
1. **Registers Initialized:**
   - `DS:SI`: Points to the source string.
   - `ES:DI`: Points to the destination string.
   - `CX`: Loaded with the maximum number of bytes to compare (string length).
   - `DF` (Direction Flag): Cleared (`CLD`) for auto-increment, or set (`STD`) for auto-decrement.
2. **Operation:** Compares `[SI]` with `ES:[DI]` by performing byte subtraction (`[SI] - ES:[DI]`) and updating flags (`ZF, CF, SF, etc.`), then increments/decrements `SI` and `DI` by 1, and decrements `CX` by 1.
3. **Termination Conditions:**
   - Condition 1: `CX` becomes zero (the entire string has been compared and strings are identical).
   - Condition 2: `ZF` becomes 0 (a mismatch is encountered).  
**Marking Scheme:**
- Required register initializations (`DS:SI`, `ES:DI`, `CX`, `DF`): **1 Mark**
- Internal comparison and pointer update operation: **1 Mark**
- Two termination conditions ($CX=0$ or $ZF=0$): **1 Mark**

---

#### Q3.40
**Question:** Contrast a **Near CALL** with a **Far CALL**, and a **Near RET** with a **Far RET**. How does the CPU know whether a `RET` instruction is Near or Far?  
**Model Answer:**
1. **Near vs Far CALL:**
   - **Near CALL (Intra-segment):** Branches to a subroutine within the same code segment. Pushes only the 16-bit `IP` onto the stack ($\text{SP} \leftarrow \text{SP} - 2$).
   - **Far CALL (Inter-segment):** Branches to a subroutine in a different code segment. Pushes 16-bit `CS`, then 16-bit `IP` onto the stack ($\text{SP} \leftarrow \text{SP} - 4$).
2. **Near vs Far RET:**
   - **Near RET:** Pops 2 bytes from the stack into `IP` ($\text{SP} \leftarrow \text{SP} + 2$).
   - **Far RET:** Pops 2 bytes into `IP`, then pops next 2 bytes into `CS` ($\text{SP} \leftarrow \text{SP} + 4$).
3. **Identification:** The CPU distinguishes them by their **machine opcodes**: Near RET is encoded as `C3H`, while Far RET is encoded as `CBH` (assigned by assembler based on procedure declaration `PROC NEAR` or `PROC FAR`).  
**Marking Scheme:**
- Clear distinction of Near vs Far CALL stack activity: **1 Mark**
- Clear distinction of Near vs Far RET stack activity: **1 Mark**
- Opcode differentiation (`C3H` vs `CBH`): **1 Mark**

---

#### Q3.41
**Question:** What is the operation of the instruction **`XLAT`**? Write a short code sequence showing how `XLAT` can be used to convert a 4-bit BCD digit ($0-9$) into its equivalent 7-segment display code.  
**Model Answer:**
1. **Operation:** `XLAT` (Translate) replaces the byte in `AL` with a byte fetched from a memory lookup table located at effective address `[BX + AL]` in `DS`.
2. **Code Sequence:**
```assembly
.DATA
TABLE  DB 3FH, 06H, 5BH, 4FH, 66H, 6DH, 7DH, 07H, 7FH, 6FH ; 7-seg codes 0-9
DIGIT  DB 05H                                              ; Digit to display (5)

.CODE
MOV AX, @DATA
MOV DS, AX
LEA BX, TABLE      ; Load base address of 7-segment table into BX
MOV AL, DIGIT      ; Load digit (e.g., 05H) into AL as index
XLAT               ; AL now contains TABLE[5] = 6DH (7-segment code for 5)
```  
**Marking Scheme:**
- Description of `XLAT` mechanism (`AL = DS:[BX + AL]`): **1.5 Marks**
- Correct assembly code with table definition and `XLAT` call: **1.5 Marks**

---

#### Q3.42
**Question:** Explain how the 8086 microprocessor distinguishes between **Signed** and **Unsigned** conditional branch instructions. List the status flag conditions tested by:  
(a) `JA` (Jump if Above)  
(b) `JG` (Jump if Greater)  
(c) `JCXZ` (Jump if CX is Zero)  
**Model Answer:**
1. **Distinction:** The 8086 does not store separate signed and unsigned numbers; it evaluates both interpretations simultaneously after every arithmetic instruction.
   - For **Unsigned jumps**, the CPU evaluates the **Carry Flag (`CF`)** and **Zero Flag (`ZF`)**.
   - For **Signed jumps**, the CPU evaluates the relationship between the **Sign Flag (`SF`)** and **Overflow Flag (`OF`)**, along with `ZF`.
2. **Flag Conditions:**
   - (a) `JA` (Unsigned: Destination > Source): **$CF = 0$ AND $ZF = 0$**  
   - (b) `JG` (Signed: Destination > Source): **$ZF = 0$ AND $SF = OF$**  
   - (c) `JCXZ`: Tests **$CX = 0000\text{H}$ directly** (does not evaluate the Flag register at all!).  
**Marking Scheme:**
- Explanation of unsigned vs signed flag logic: **1.5 Marks**
- Precise flag conditions for (a), (b), and (c): **1.5 Marks**

---

### SECTION E: 5 MARKS QUESTIONS
*(In-depth instruction tracing, machine encoding breakdown, procedure mechanics, and advanced analytical problems)*

#### Q3.43
**Question:** The machine code for an 8086 instruction is given in hexadecimal as: **`88 C3H`**.  
(a) Disassemble this machine code into its exact assembly language instruction mnemonic.  
(b) Show the step-by-step bitwise breakdown for Byte 1 (Opcode, $d$, $w$) and Byte 2 (`mod`, `reg`, `r/m`).  
(c) How would the instruction change if the hexadecimal code were **`8A C3H`**?  
**Model Answer:**
**(a) Binary Breakdown of `88 C3H`:**
- Byte 1 = `88H` = `1000 1000`$_2$  
- Byte 2 = `C3H` = `1100 0011`$_2$

**(b) Bitwise Field Analysis:**
1. **Byte 1 (`1000 1000`$_2$):**
   - **Opcode (Bits 7–2):** `100010`$_2 \implies$ Mnemonic **`MOV`** (Register/Memory to/from Register).
   - **$d$ bit (Bit 1):** `0` $\implies$ Direction: the register specified in the `reg` field is the **source operand**, and the operand specified by `r/m` is the **destination** ($\text{reg} \rightarrow \text{r/m}$).
   - **$w$ bit (Bit 0):** `0` $\implies$ Byte operation (**8-bit** data).
2. **Byte 2 (`1100 0011`$_2$):**
   - **`mod` field (Bits 7–6):** `11`$_2 \implies$ **Register addressing mode** (both operands are CPU registers).
   - **`reg` field (Bits 5–3):** `000`$_2$. With $w = 0$, `000` represents register **`AL`**. Since $d = 0$, `AL` is the **Source**.
   - **`r/m` field (Bits 2–0):** `011`$_2$. With $mod = 11$ and $w = 0$, `011` represents register **`BL`**. Since $d = 0$, `BL` is the **Destination**.
3. **Resulting Assembly Instruction:**  
   $$\mathbf{MOV\ BL,\ AL}$$

**(c) Analysis of `8A C3H`:**
- Byte 1 = `8AH` = `1000 1010`$_2$:  
  - Opcode = `100010` (`MOV`), $w = 0$ (byte operation).  
  - **$d$ bit = `1`** (Destination is specified by `reg`).  
- Byte 2 = `C3H` (same `reg = 000` $\implies$ `AL`; `r/m = 011` $\implies$ `BL`).  
- Since $d = 1$, `reg` (`AL`) becomes the **Destination**, and `r/m` (`BL`) becomes the **Source**:  
  $$\mathbf{MOV\ AL,\ BL}$$  
**Marking Scheme:**
- Binary conversion and bit field identification: **1.5 Marks**
- Step-by-step decoding of `88 C3H` to `MOV BL, AL`: **2 Marks**
- Explanation and decoding of `8A C3H` to `MOV AL, BL`: **1.5 Marks**

---

#### Q3.44
**Question:** Given the following initial register contents:
```text
AX = 0029H, BX = 0035H, CX = 0004H, DX = 0000H, CF = 0, ZF = 0, SF = 0, OF = 0
```
Trace the step-by-step execution of the following assembly language program, and determine the exact hexadecimal contents of registers `AX, BX, CX, DX` and the flags `CF, ZF, SF, OF` after each instruction:
```assembly
1. ADD AL, BL
2. DAA
3. MOV CL, 04H
4. SHL AX, CL
5. SUB AL, 20H
```
**Model Answer:**
**Step-by-Step Trace:**

1. **`ADD AL, BL`:**
   - `AL = 29H = 0010 1001`$_2$, `BL = 35H = 0011 0101`$_2$.  
   - $\text{AL} = 29\text{H} + 35\text{H} = \mathbf{5EH} = 0101\ 1110_2$.  
   - `AH` remains `00H`. `AX = 005EH`.  
   - Flags: $CF = 0$ (no carry from bit 7), $AF = 0$ ($9+5 = 14 = \text{E}$, no carry from bit 3), $ZF = 0$, $SF = 0$, $OF = 0$.

2. **`DAA` (Decimal Adjust after Addition):**
   - Inspects `AL = 5EH`.  
   - Lower nibble is `EH` ($14 > 9$).  
   - `DAA` adds $06\text{H}$ to `AL`:  
     $$5\text{EH} + 06\text{H} = \mathbf{64H}$$  
   - $AF$ is set to 1.  
   - Upper nibble is now `6` ($\le 9$) and $CF = 0$, so no further adjustment.  
   - Register: $\mathbf{AX = 0064H}$ (Representing packed BCD $29 + 35 = 64$).  
   - Flags: $CF = 0, ZF = 0, SF = 0, OF = \text{undefined/0}$.

3. **`MOV CL, 04H`:**
   - Immediate load into `CL`: $\mathbf{CX = 0004H}$. Flags unaffected.

4. **`SHL AX, CL` (Shift Left by 4 bits):**
   - Shift 16-bit word `AX = 0064H` left by 4 bit positions:  
     $$0064\text{H} \times 2^4 = 0064\text{H} \times 16_{10} = \mathbf{0640H}$$  
   - Register: $\mathbf{AX = 0640H}$ (`AH = 06H`, `AL = 40H`).  
   - Carry Flag: Bit shifted out through bit 15 was `0` $\implies \mathbf{CF = 0}$.  
   - Flags: $ZF = 0, SF = 0$ (MSB = 0), $OF = \text{undefined for multi-bit shift}$.

5. **`SUB AL, 20H`:**
   - `AL = 40H`, subtract immediate $20\text{H}$:  
     $$\text{AL} = 40\text{H} - 20\text{H} = \mathbf{20H}$$  
   - Register: $\mathbf{AX = 0620H}$.  
   - Flags:  
     - $\mathbf{CF = 0}$ (no borrow required, $40\text{H} > 20\text{H}$)  
     - $\mathbf{ZF = 0}$ (result $20\text{H} \neq 0$)  
     - $\mathbf{SF = 0}$ (MSB of $20\text{H}$ is 0)  
     - $\mathbf{OF = 0}$ (no signed overflow)  
**Final Registers:** `AX = 0620H`, `BX = 0035H`, `CX = 0004H`, `DX = 0000H`.  
**Final Flags:** `CF = 0`, `ZF = 0`, `SF = 0`, `OF = 0`.  
**Marking Scheme:**
- Step 1 trace (`AX = 005EH`): **1 Mark**
- Step 2 `DAA` adjustment (`AX = 0064H`): **1 Mark**
- Step 4 16-bit multi-bit shift (`AX = 0640H`): **1.5 Marks**
- Step 5 subtraction and final register/flag states: **1.5 Marks**

---

#### Q3.45
**Question:** Explain the complete execution mechanism of the 8086 multiplication and division instructions:  
(a) Contrast unsigned multiplication (`MUL`) with signed multiplication (`IMUL`). How does the CPU inform the programmer whether the upper half of the product contains significant digits?  
(b) Explain the operand rules for 8-bit and 16-bit division (`DIV` and `IDIV`).  
(c) Under what exact mathematical conditions does the 8086 trigger a **Divide by Zero / Divide Error (Type 0)** interrupt during an `IDIV BL` instruction?  
**Model Answer:**
**(a) `MUL` vs `IMUL` and Flag Behavior:**
- **`MUL src` (Unsigned):** Multiplies unsigned numbers.  
  - For Byte: $\text{AX} = \text{AL} \times \text{src8}$.  
  - For Word: $\text{DX:AX} = \text{AX} \times \text{src16}$.  
  - **Flag Signaling:** If the upper half of the product (`AH` for byte, `DX` for word) contains non-zero data, the CPU sets **`CF = 1` and `OF = 1`**. If the upper half is all zeros, **`CF = 0` and `OF = 0`**. This tells the programmer whether the result fits in a single register.
- **`IMUL src` (Signed):** Multiplies signed 2's complement numbers.  
  - **Flag Signaling:** If the upper half (`AH` or `DX`) is **not just a sign extension** of the lower half, the CPU sets **`CF = 1` and `OF = 1`** (indicating significant digits reside in the upper register). If the upper half merely sign-extends the lower half, **`CF = 0` and `OF = 0`**.

**(b) Division Operand Rules:**
- **Byte Division (`DIV / IDIV src8`):**  
  - Numerator (Dividend) must be in **`AX`** (16 bits).  
  - Divisor is `src8` (register or memory byte).  
  - **Quotient $\rightarrow$ `AL`**, **Remainder $\rightarrow$ `AH`**.
- **Word Division (`DIV / IDIV src16`):**  
  - Numerator (Dividend) must be in **`DX:AX`** (32 bits, `DX` high word, `AX` low word).  
  - Divisor is `src16` (register or memory word).  
  - **Quotient $\rightarrow$ `AX`**, **Remainder $\rightarrow$ `DX`**.

**(c) Type 0 Interrupt Triggering in `IDIV BL`:**  
During signed byte division `IDIV BL` ($\text{AX} / \text{BL}$):
1. **Condition 1 (Divide by Zero):** If the divisor `BL = 00H`.
2. **Condition 2 (Quotient Overflow):** The signed quotient must fit within the 8-bit register `AL`, which has a permissible signed range of:  
   $$-128_{10} \le \text{Quotient} \le +127_{10} \quad (-80\text{H} \text{ to } +7\text{FH})$$  
   If the dividend `AX` divided by `BL` produces a quotient outside this range (e.g., `AX = 03E8H` ($+1000_{10}$) and `BL = 02H`, quotient $= +500 > 127$), the quotient overflows `AL`, and the 8086 immediately aborts execution and generates an internal **Type 0 Divide Error Interrupt**.  
**Marking Scheme:**
- `MUL` vs `IMUL` mechanics and `CF/OF` significance flags: **2 Marks**
- Dividend/divisor register assignments for byte and word division: **1.5 Marks**
- Precise mathematical conditions for Type 0 interrupt: **1.5 Marks**

---

#### Q3.46
**Question:** Write an 8086 assembly language procedure that searches a block of 100 consecutive bytes in memory to find the first occurrence of the character byte `'$'` (`24H`).  
Requirements:  
- Use appropriate **string manipulation instructions** (`SCASB` with repeat prefix).  
- If found, store the offset address of the character in register `DX`.  
- If not found, load `DX` with `FFFFH`.  
- Ensure `DF` is properly managed.  
Explain the operation of each string instruction used.  
**Model Answer:**
```assembly
; ===================================================================
; Procedure: SEARCH_CHAR
; Inputs   : ES:DI points to the starting address of the 100-byte block
; Outputs  : DX contains offset of '$' if found, or FFFFH if not found
; ===================================================================
SEARCH_CHAR PROC NEAR
    CLD                 ; Step 1: Clear Direction Flag (DF=0) for forward scan
    MOV CX, 0064H       ; Step 2: Load string length (100 bytes = 64H) into CX
    MOV AL, '$'         ; Step 3: Load target character ('$' = 24H) into AL

    REPNZ SCASB         ; Step 4: Scan string byte while CX != 0 and ZF == 0
                        ; Computes (AL - ES:[DI]), updates ZF, increments DI

    JZ FOUND            ; If ZF = 1, match was found!

    ; Case: Not Found (CX exhausted without match)
    MOV DX, 0FFFFH      ; Set DX = FFFFH (error/not found flag)
    RET

FOUND:
    DEC DI              ; Since SCASB auto-incremented DI past the matched byte,
                        ; decrement DI by 1 to point directly to the '$'
    MOV DX, DI          ; Store matching offset address in DX
    RET
SEARCH_CHAR ENDP
```

**Instructional Explanation:**
1. **`CLD`:** Clears `DF` to guarantee `DI` increments (+1) after each byte comparison.
2. **`SCASB` (Scan String Byte):** Subtracts the byte in memory addressed by `ES:[DI]` from register `AL` (`AL - ES:[DI]`). Flags are updated (particularly `ZF`), but neither operand is changed. `DI` is automatically incremented by 1.
3. **`REPNZ` Prefix:** Repeats `SCASB` as long as `CX != 0` AND `ZF == 0` (mismatch). It terminates instantly when a matching byte is encountered (`ZF = 1`) or when `CX` decrements to 0.  
**Marking Scheme:**
- Correct procedure code structure with `CLD, MOV CX, MOV AL`: **1.5 Marks**
- Correct implementation of `REPNZ SCASB` and branch logic: **2 Marks**
- Post-scan pointer adjustment (`DEC DI`) and technical explanation: **1.5 Marks**

---

#### Q3.47
**Question:** Explain the complete memory and register operations performed during the execution of:  
(a) `PUSH WORD PTR [BX]`  
(b) `POP WORD PTR [SI]`  
Assume initial states: `SS = 5000H`, `SP = 2000H`, `DS = 6000H`, `BX = 1200H`, `SI = 3400H`. Memory contents are:  
`[61200H] = 78H`, `[61201H] = 56H`.  
Trace the exact values of `SP` and the physical memory addresses written and read during both operations.  
**Model Answer:**
**(a) Trace for `PUSH WORD PTR [BX]`:**
1. **Memory Read of Source Operand:**
   - The CPU reads a 16-bit word from `DS:BX`.  
   - $\text{PA}_{\text{source}} = (\text{DS} \times 10\text{H}) + \text{BX} = 60000\text{H} + 1200\text{H} = \mathbf{61200H}$.  
   - Reads low byte `78H` from `61200H` and high byte `56H` from `61201H` $\implies \text{Word} = \mathbf{5678H}$.
2. **Stack Modification:**
   - `SP` is decremented by 1: $\text{SP} = 2000\text{H} - 1 = 1\text{FFFH}$.
   - High byte (`56H`) is stored at:  
     $$\text{PA} = (\text{SS} \times 10\text{H}) + 1\text{FFFH} = 50000\text{H} + 1\text{FFFH} = \mathbf{51FFFH}$$
   - `SP` is decremented by 1: $\text{SP} = 1\text{FFFH} - 1 = \mathbf{1FFEH}$.
   - Low byte (`78H`) is stored at:  
     $$\text{PA} = (\text{SS} \times 10\text{H}) + 1\text{FFEH} = 50000\text{H} + 1\text{FFEH} = \mathbf{51FFEH}$$
   - Final `SP` after PUSH = **`1FFEH`**.

**(b) Trace for `POP WORD PTR [SI]` (executed immediately after PUSH):**
1. **Stack Memory Read:**
   - Low byte is read from current top of stack:  
     $$\text{PA} = (\text{SS} \times 10\text{H}) + \text{SP} = 50000\text{H} + 1\text{FFEH} = \mathbf{51FFEH} \implies \text{Data} = \mathbf{78H}$$
   - `SP` is incremented by 1: $\text{SP} = 1\text{FFFH}$.
   - High byte is read from:  
     $$\text{PA} = 50000\text{H} + 1\text{FFFH} = \mathbf{51FFFH} \implies \text{Data} = \mathbf{56H}$$
   - `SP` is incremented by 1: $\text{SP} = 1\text{FFFH} + 1 = \mathbf{2000H}$.
   - Popped 16-bit word $= \mathbf{5678H}$.
2. **Memory Write to Destination:**
   - Destination address: $\text{PA}_{\text{dest}} = (\text{DS} \times 10\text{H}) + \text{SI} = 60000\text{H} + 3400\text{H} = \mathbf{63400H}$.
   - Writes `78H` into memory at address `63400H`.
   - Writes `56H` into memory at address `63401H`.
   - Final `SP` after POP = **`2000H`**.  
**Marking Scheme:**
- Source read trace and `PUSH` decrements with physical addresses: **2.5 Marks**
- Stack pop reads, `SP` increments, and destination writes: **2.5 Marks**

---

#### Q3.48
**Question:** Explain the complete execution cycle of the software interrupt instruction **`INT n`** (where $n$ is an 8-bit vector type number). Compare `INT n` with a Far `CALL` instruction, highlighting three fundamental differences. What instruction terminates an Interrupt Service Routine?  
**Model Answer:**
**1. Execution Sequence of `INT n`:**
When the 8086 executes `INT n`:
1. Decrements `SP` by 2 and **pushes the 16-bit Flag register** onto the stack.
2. Clears the **Interrupt Flag (`IF = 0`)** to disable maskable interrupts and clears the **Trap Flag (`TF = 0`)** to prevent single-stepping during ISR entry.
3. Decrements `SP` by 2 and **pushes the current Code Segment (`CS`)** onto the stack.
4. Decrements `SP` by 2 and **pushes the current Instruction Pointer (`IP`)** (address of next sequential instruction) onto the stack.
5. Computes the vector address: $\text{IVT Address} = n \times 4$.
6. Fetches the 16-bit offset from address $4n$ and loads it into **`IP`**.
7. Fetches the 16-bit segment from address $4n + 2$ and loads it into **`CS`**.
8. Commences execution of the ISR at the newly loaded `CS:IP`.

**2. Comparison between `INT n` and Far `CALL`:**
| Feature | `INT n` (Software Interrupt) | Far `CALL` (Inter-segment Call) |
|:---|:---|:---|
| **Flags on Stack** | Automatically pushes the 16-bit **Flag register** before `CS` and `IP`. | Pushes **only `CS` and `IP`**; Flag register is NOT saved. |
| **Flag Modification** | Automatically **clears `IF` and `TF`** to protect ISR execution. | Leaves all status and control flags completely **unaltered**. |
| **Target Address Resolution** | Indirect through the **Interrupt Vector Table** ($00000\text{H}-003FF\text{H}$) using vector type $n$. | Target address is encoded directly in the instruction or in a specified register/memory operand. |
| **Return Instruction** | Terminated exclusively by **`IRET`** (pops IP, CS, and Flags). | Terminated by **`RETF`** (pops only IP and CS). |

**3. ISR Termination Instruction:**
An Interrupt Service Routine must always terminate with **`IRET` (Interrupt Return)**. `IRET` pops `IP`, pops `CS`, and then pops the original Flag register from the stack, restoring the exact pre-interrupt processor state.  
**Marking Scheme:**
- Complete 8-step internal sequence of `INT n`: **2 Marks**
- Comparison table highlighting 3 distinct architectural differences: **2 Marks**
- Explanation of `IRET` and flag restoration: **1 Mark**

---

#### Q3.49
**Question:** Explain the operation of the instructions **`LDS`** and **`LES`**. Write a code snippet showing how `LES` and `LDS` are used to set up the source and destination pointers for a block transfer of 50 words from Data Segment to Extra Segment using `REP MOVSW`.  
**Model Answer:**
1. **Operation:**
   - `LDS reg16, mem32`: Reads a 4-byte (double-word) pointer from memory. The first word is loaded into the general-purpose register (`reg16`), and the second word is loaded into `DS`.
   - `LES reg16, mem32`: Reads a 4-byte pointer from memory. The first word is loaded into `reg16`, and the second word is loaded into `ES`.
2. **Code Snippet:**
```assembly
.DATA
SOURCE_PTR  DD 10002000H    ; Source: Segment 1000H, Offset 2000H
DEST_PTR    DD 30004000H    ; Destination: Segment 3000H, Offset 4000H

.CODE
; Load DS and SI simultaneously from SOURCE_PTR (4 bytes)
LDS SI, SOURCE_PTR          ; SI = 2000H, DS = 1000H

; Load ES and DI simultaneously from DEST_PTR (4 bytes)
LES DI, DEST_PTR            ; DI = 4000H, ES = 3000H

MOV CX, 50                  ; Set loop counter for 50 words
CLD                         ; Clear DF: auto-increment SI and DI by 2
REP MOVSW                   ; Transfer 50 words from DS:SI to ES:DI
```
3. **Execution Analysis:**  
   `REP MOVSW` transfers 50 words ($100\text{ bytes}$). After each word move, `SI` and `DI` auto-increment by 2, and `CX` decrements by 1 until $CX = 0$. Using `LDS` and `LES` initializes both 32-bit segment-offset pointers in only two instructions without needing intermediate registers.  
**Marking Scheme:**
- Detailed explanation of `LDS` and `LES` 4-byte loading: **2 Marks**
- Correct assembly code initializing `DS:SI`, `ES:DI`, `CX`, and `CLD`: **2 Marks**
- Analysis of `REP MOVSW` word transfer and pointer updates: **1 Mark**

---

#### Q3.50
**Question:** An assembly programmer writes the following loop to add an array of five 8-bit numbers:
```assembly
    MOV SI, 2000H       ; Array offset
    MOV CX, 0005H       ; Count of numbers
    XOR AL, AL          ; Sum accumulator = 0
BACK:
    ADD AL, [SI]        ; Add array element to sum
    INC SI              ; Point to next element
    LOOP BACK           ; Decrement CX and loop if CX != 0
```
(a) Explain why the programmer chose `INC SI` instead of `ADD SI, 01H` inside the loop.  
(b) Explain why `LOOP BACK` cannot be replaced by `DEC CX` followed by `JNZ BACK` if the programmer wanted to preserve the Carry Flag across loop iterations.  
(c) How would you modify the loop to compute a 16-bit sum in `AX` to prevent 8-bit overflow?  
**Model Answer:**
**(a) Choice of `INC SI`:**
- `INC SI` is a compact 1-byte opcode (`46H`), whereas `ADD SI, 01H` is a 3-byte instruction (`83 C6 01H`), saving code memory.
- More importantly, `INC` does not modify the Carry Flag (`CF`). While not critical here, it is standard engineering practice when carry state needs preservation.

**(b) `LOOP` vs `DEC CX + JNZ`:**
- **`LOOP` does not affect ANY flags** (including `ZF` and `CF`). It decrements `CX` internally and branches based on the decrement without altering the Flag register.
- If `DEC CX` were used, `DEC` **modifies `ZF`, `SF`, `OF`, `AF`, and `PF`**.
- Furthermore, if a multi-byte addition loop were maintaining a running carry via `ADC`, replacing `LOOP` with instructions that corrupt flags could alter CPU status. `LOOP` guarantees zero flag interference.

**(c) Modified Code for 16-bit Sum:**
```assembly
    MOV SI, 2000H       ; Array offset
    MOV CX, 0005H       ; Count = 5
    XOR AX, AX          ; Clear entire 16-bit sum in AX (AH=0, AL=0)
    MOV BL, 00H         ; Use BL as temporary zero for carry propagation
BACK:
    MOV DL, [SI]        ; Load byte element
    MOV DH, 00H         ; Zero-extend into 16-bit word DX
    ADD AX, DX          ; 16-bit addition (sum cannot overflow 16 bits for 5 bytes)
    INC SI              ; Next byte
    LOOP BACK
```  
**Marking Scheme:**
- Explanation of opcode size and non-flag modification of `INC SI`: **1.5 Marks**
- Detailed justification of `LOOP` non-interference with flags vs `DEC CX`: **1.5 Marks**
- Correct 16-bit sum code preventing overflow: **2 Marks**
