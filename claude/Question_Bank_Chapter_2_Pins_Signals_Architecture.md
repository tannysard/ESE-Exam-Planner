# INTEL 8086 MICROPROCESSOR — MASTER QUESTION BANK
## CHAPTER 2: PINS, SIGNALS, INTERNAL ARCHITECTURE & BUS CYCLES
**Course:** Microprocessors / Microprocessor Architecture & Applications  
**Prepared by:** Senior Faculty & Paper Setter (20+ Years Experience)  
**Syllabus Compliance:** Strictly aligned with Mid-Sem Study Planner (Includes Minimum Mode, S3/S4, Architecture, Segmentation, Even/Odd Banks, Memory Read/Write Cycles, Wait State, Interrupt Acknowledge; Excludes Maximum Mode signals, I/O Bus Cycles, WAIT instruction).

---

### SECTION A: MULTIPLE CHOICE QUESTIONS (MCQs)
*(Each question carries 1 Mark. Designed to test architectural subtleties, timing edge-cases, and signal interactions)*

#### Q2.1
During an instruction fetch machine cycle, the 8086 Bus Interface Unit (BIU) outputs binary `10` on the multiplexed status lines $S_4$ and $S_3$ ($S_4 = 1, S_3 = 0$). What specific segment register is being accessed by the processor during this bus cycle?
- [A] Data Segment Register (`DS`)
- [B] Stack Segment Register (`SS`)
- [C] Code Segment Register (`CS`) (or None)
- [D] Extra Segment Register (`ES`)

**Correct Answer:** **[C] Code Segment Register (`CS`) (or None)**  
**Teacher's Rationale & Trap Analysis:**  
The status lines $S_4$ and $S_3$ output on pins 36 and 37 indicate which segment register generates the physical address during that machine cycle:
- `00`: Extra Segment (`ES`)
- `01`: Stack Segment (`SS`)
- `10`: Code Segment (`CS`) or None
- `11`: Data Segment (`DS`)  
For instruction fetching, the BIU combines `CS` and `IP`, asserting $S_4 S_3 = 10$.

---

#### Q2.2
An 8086 microprocessor is instructed to execute a 16-bit word read operation from physical memory address `70005H` (`MOV AX, [70005H]`). How many bus machine cycles will the BIU execute to complete this memory transfer, and what will be the state of the bank-selection signals during the first bus cycle?
- [A] 1 bus cycle; $\overline{\text{BHE}} = 0, A_0 = 0$
- [B] 2 bus cycles; First cycle: $\overline{\text{BHE}} = 0, A_0 = 1$
- [C] 2 bus cycles; First cycle: $\overline{\text{BHE}} = 1, A_0 = 0$
- [D] 1 bus cycle; $\overline{\text{BHE}} = 0, A_0 = 1$

**Correct Answer:** **[B] 2 bus cycles; First cycle: $\overline{\text{BHE}} = 0, A_0 = 1$**  
**Teacher's Rationale & Trap Analysis:**  
The address `70005H` is an **odd address** ($A_0 = 1$). Reading a 16-bit word from an odd address represents an **unaligned (misaligned) word access**, which requires **two consecutive bus cycles**:
1. **First Bus Cycle:** Lower byte of the word (at odd address `70005H`) is fetched from the Odd Memory Bank via data lines $D_{15}-D_8$. Bank signals are $\overline{\text{BHE}} = 0, A_0 = 1$.
2. **Second Bus Cycle:** Upper byte of the word (at next even address `70006H`) is fetched from the Even Memory Bank via data lines $D_7-D_0$. Bank signals are $\overline{\text{BHE}} = 1, A_0 = 0$.  
The internal EU then automatically swaps and splices the two bytes into `AX`. This is a classic paper-setter trap testing alignment penalties.

---

#### Q2.3
At what precise instant during a basic 8086 bus cycle does the processor sample the `READY` input pin to determine whether a Wait State ($T_w$) must be inserted?
- [A] At the rising edge of clock cycle $T_1$
- [B] At the falling edge of clock cycle $T_2$ and during the transition into $T_3$
- [C] At the falling edge of clock cycle $T_3$ (and each subsequent $T_w$)
- [D] At the trailing rising edge of the `RD#` strobe in $T_4$

**Correct Answer:** **[C] At the falling edge of clock cycle $T_3$ (and each subsequent $T_w$)**  
**Teacher's Rationale & Trap Analysis:**  
The 8086 samples `READY` at the transition of $T_2 \rightarrow T_3$ and crucially tests it on the **falling edge of clock state $T_3$**. If `READY` is logic LOW (0) when sampled, the processor inserts a Wait state ($T_w$) between $T_3$ and $T_4$. During each $T_w$, `READY` is repeatedly sampled on the falling edge; as long as it stays low, successive $T_w$ states are appended.

---

#### Q2.4
When the hardware `RESET` pin of the Intel 8086 is driven HIGH for at least four clock cycles and then released, what are the exact initialized contents of the Code Segment register (`CS`) and Instruction Pointer (`IP`), and what is the resulting first instruction fetch physical address?
- [A] `CS = 0000H`, `IP = 0000H`; Physical Address = `00000H`
- [B] `CS = FFFFH`, `IP = 0000H`; Physical Address = `FFFF0H`
- [C] `CS = F000H`, `IP = FFF0H`; Physical Address = `FFFF0H`
- [D] `CS = FFFFH`, `IP = FFFFH`; Physical Address = `0FFEFH`

**Correct Answer:** **[B] `CS = FFFFH`, `IP = 0000H`; Physical Address = `FFFF0H`**  
**Teacher's Rationale & Trap Analysis:**  
Upon reset:  
- `CS` is loaded with `FFFFH`
- `IP` is cleared to `0000H`  
- Physical address $= (\text{CS} \times 10\text{H}) + \text{IP} = (\text{FFFFH} \times 10\text{H}) + 0000\text{H} = \mathbf{FFFF0H}$.  
This is why system initialization EPROM is permanently mapped to the very top of the 8086 address space (`F0000H - FFFFFH`).

---

#### Q2.5
In the 8086 internal architecture, what condition specifically triggers the Bus Interface Unit (BIU) to initiate an autonomous instruction prefetch bus cycle while the Execution Unit (EU) is busy executing an instruction?
- [A] Whenever the 6-byte instruction queue becomes completely empty (0 bytes remaining).
- [B] Whenever there are at least 2 empty byte locations in the 6-byte instruction queue.
- [C] Whenever the EU completes execution of an arithmetic instruction.
- [D] Whenever the Direction Flag (`DF`) is set to 0.

**Correct Answer:** **[B] Whenever there are at least 2 empty byte locations in the 6-byte instruction queue.**  
**Teacher's Rationale & Trap Analysis:**  
In the 8086 (which has a 16-bit external data bus), the BIU fetches instruction bytes in 16-bit words whenever possible. Hence, the BIU prefetch mechanism is activated as soon as at least **2 empty bytes** become available in the 6-byte FIFO queue (provided the external bus is not being used by the EU for memory data read/write).

---

#### Q2.6
Which of the following internal events causes the 8086 to immediately discard (flush) all prefetched instruction bytes currently residing in its 6-byte instruction queue, incurring a pipeline latency penalty?
- [A] Execution of `ADD AX, BX` resulting in an arithmetic carry
- [B] Successful execution of a branch instruction (`JMP`, `CALL`, `RET`, or taken conditional jump)
- [C] Setting the Trap Flag (`TF`) to 1
- [D] Execution of `XLAT` instruction using a data table in memory

**Correct Answer:** **[B] Successful execution of a branch instruction (`JMP`, `CALL`, `RET`, or taken conditional jump)**  
**Teacher's Rationale & Trap Analysis:**  
The BIU prefetches instructions sequentially based on the current `IP`. When a branch instruction (`JMP`, `CALL`, `RET`, or interrupt) alters the sequential flow, the next instructions already sitting in the queue are invalid. The queue must be completely flushed (emptied), `IP` loaded with the new target address, and a new fetch cycle executed across the external bus, causing a pipeline delay.

---

#### Q2.7
During the execution of an interrupt acknowledge sequence for a maskable hardware interrupt (`INTR`), how many `INTA#` pulses are generated by the 8086, and during which pulse does the external interrupt controller place the interrupt vector type number on the data bus?
- [A] One `INTA#` pulse; the vector type is placed during that single pulse.
- [B] Two `INTA#` pulses; the vector type is placed during the first pulse.
- [C] Two `INTA#` pulses; the vector type is placed during the second pulse on lines `AD0-AD7`.
- [D] Four `INTA#` pulses; one for each byte of the ISR vector pointer.

**Correct Answer:** **[C] Two `INTA#` pulses; the vector type is placed during the second pulse on lines `AD0-AD7`.**  
**Teacher's Rationale & Trap Analysis:**  
The 8086 generates **two negative pulses on `INTA#`** in response to `INTR`:
- **First pulse:** Informs the external interrupt controller (8259A) that the CPU has acknowledged the request and is preparing for vectoring. Bus lines `AD0-AD15` remain in high-impedance.
- **Second pulse:** Strobe to the external controller to place the 8-bit interrupt type number ($N$, 0 to 255) onto the lower data bus lines `AD0-AD7`.

---

#### Q2.8
If the Data Segment register (`DS`) contains `2400H` and the Effective Address (offset) calculated for a memory operand is `F800H`, what is the 20-bit physical address accessed by the 8086?
- [A] `24F80H`
- [B] `33800H`
- [C] `13800H`
- [D] `F8240H`

**Correct Answer:** **[B] `33800H`**  
**Teacher's Rationale & Trap Analysis:**  
$$\text{Physical Address} = (\text{DS} \times 10\text{H}) + \text{Offset}$$  
$$\text{Segment Base} = 2400\text{H} \times 10\text{H} = 24000\text{H}$$  
$$\text{Physical Address} = 24000\text{H} + \text{F800H} = \mathbf{33800H}$$  
Calculation check: $24000\text{H} + \text{F800H}$:  
$0+0=0$, $0+0=0$, $0+8=8$, $4+\text{F} = 4+15 = 19 = 16+3$ (sum = $3$, carry = $1$), $2+1 = 3 \implies 33800\text{H}$.  
Trap: Students who simply concatenate strings without multiplying by $16_{10}$ choose `24F80H` (Option A).

---

#### Q2.9
In an 8086 minimum-mode system, what signal does an external Direct Memory Access (DMA) controller assert to request mastership of the address, data, and control buses from the CPU?
- [A] `INTR`
- [B] `NMI`
- [C] `HOLD`
- [D] `HLDA`

**Correct Answer:** **[C] `HOLD`**  
**Teacher's Rationale & Trap Analysis:**  
An external master asserts the active-high `HOLD` pin. Upon receiving `HOLD`, the 8086 completes its current bus cycle, floats its address, data, and control buses to high-impedance, and asserts `HLDA` (Hold Acknowledge, Option D) to confirm that the external master may take control of the buses.

---

#### Q2.10
Which group of registers in the 8086 Execution Unit can be used to hold the Effective Address (EA) offset for memory addressing?
- [A] `AX`, `BX`, `CX`, `DX`
- [B] `BX`, `BP`, `SI`, `DI`
- [C] `CS`, `DS`, `SS`, `ES`
- [D] `SP`, `IP`, `SI`, `DI`

**Correct Answer:** **[B] `BX`, `BP`, `SI`, `DI`**  
**Teacher's Rationale & Trap Analysis:**  
Only four registers in the 8086 can serve as base or index registers to generate memory effective addresses: Base register (`BX`), Base Pointer (`BP`), Source Index (`SI`), and Destination Index (`DI`). `AX, CX, DX` cannot be used inside brackets (e.g., `MOV AX, [CX]` is illegal).

---

#### Q2.11
During an 8086 Memory Write cycle, when is the write control strobe `WR#` asserted LOW, and when does the actual data latching into memory occur?
- [A] `WR#` is asserted in $T_1$; data is latched at the falling edge of $T_2$.
- [B] `WR#` is asserted in $T_2$; data is latched at the rising (trailing) edge of `WR#` in $T_4$.
- [C] `WR#` is asserted in $T_3$; data is latched at the falling edge of $T_4$.
- [D] `WR#` is held asserted across all states from $T_1$ through $T_4$.

**Correct Answer:** **[B] `WR#` is asserted in $T_2$; data is latched at the rising (trailing) edge of `WR#` in $T_4$.**  
**Teacher's Rationale & Trap Analysis:**  
In the 8086 write timing cycle:  
- $T_1$: Address and `ALE` output; `DT/R#` = 1.  
- $T_2$: CPU places write data onto `AD0-AD15` and asserts `WR#` LOW. `DEN#` is asserted LOW.  
- $T_3$: Memory writes data.  
- $T_4$: `WR#` transitions from LOW to HIGH. The **rising edge of `WR#`** strobes/latches data permanently into the memory cells, after which `DEN#` goes high and data lines float.

---

#### Q2.12
How does the 8086 microprocessor differentiate between a memory read/write operation and an I/O read/write operation in Minimum Mode?
- [A] By the state of the pin `M/IO#` (High for Memory, Low for I/O).
- [B] By using different physical address pins for memory and I/O.
- [C] By asserting `ALE` twice for I/O operations.
- [D] By changing the clock frequency from $5\text{ MHz}$ to $10\text{ MHz}$.

**Correct Answer:** **[A] By the state of the pin `M/IO#` (High for Memory, Low for I/O).**  
**Teacher's Rationale & Trap Analysis:**  
In minimum mode, pin 28 functions as `M/IO#`. When the 8086 executes an instruction accessing memory, `M/IO#` is driven HIGH (1). When accessing peripheral ports, `M/IO#` is driven LOW (0).

---

#### Q2.13
The Flag register of the 8086 contains 16 bits, of which 9 bits are active flags. Which of the following flags is a **control flag** rather than a **conditional (status) flag**?
- [A] Auxiliary Carry Flag (`AF`)
- [B] Overflow Flag (`OF`)
- [C] Direction Flag (`DF`)
- [D] Parity Flag (`PF`)

**Correct Answer:** **[C] Direction Flag (`DF`)**  
**Teacher's Rationale & Trap Analysis:**  
The 9 active flags are split into:
- **6 Status/Conditional Flags:** Set/cleared by ALU arithmetic/logic outcomes: `CF`, `PF`, `AF`, `ZF`, `SF`, `OF`.
- **3 Control Flags:** Alter processor operation modes: `TF` (Trap/Single Step), `IF` (Interrupt enable), and `DF` (Direction for string increment/decrement).

---

#### Q2.14
If the Stack Segment register (`SS`) holds `8000H` and the Stack Pointer (`SP`) contains `2000H`, what will be the value of `SP` and the physical address where data is written after the execution of the instruction `PUSH AX`?
- [A] `SP = 2002H`; Physical Address = `82002H`
- [B] `SP = 1FFEH`; Physical Address = `81FFEH`
- [C] `SP = 1FFFH`; Physical Address = `81FFFH`
- [D] `SP = 1FFEH`; Physical Address = `82000H`

**Correct Answer:** **[B] `SP = 1FFEH`; Physical Address = `81FFEH`**  
**Teacher's Rationale & Trap Analysis:**  
In 8086, the stack grows downwards toward lower memory addresses.  
When `PUSH` executes:  
1. `SP` is decremented by 2: $\text{SP} = 2000\text{H} - 2\text{H} = \mathbf{1FFEH}$.  
2. Data is written to stack memory:  
   $$\text{Physical Address} = (\text{SS} \times 10\text{H}) + \text{SP} = 80000\text{H} + 1\text{FFEH} = \mathbf{81FFEH}$$.  
(AH is stored at `81FFFH` and AL at `81FFEH`). Trapping option [A] catches students who think the stack pointer increments on push.

---

#### Q2.15
What is the logical status of status bit $S_6$ output on pin 35 (`A19/S6`) during clock cycles $T_2, T_3, T_4$?
- [A] Always logic 1 to indicate 8086 is the bus master.
- [B] Always logic 0 in 8086 microprocessor.
- [C] Reflects the current state of the Interrupt Flag (`IF`).
- [D] Indicates whether an even or odd bank is currently enabled.

**Correct Answer:** **[B] Always logic 0 in 8086 microprocessor.**  
**Teacher's Rationale & Trap Analysis:**  
Notes Section 2.2.1 explicitly states: $S_6$ is **always logic 0** in the 8086 microprocessor (it was reserved for future processor identification). $S_5$ reflects the Interrupt Flag (`IF`).

---

### SECTION B: FILL IN THE BLANKS
*(Rigorous technical completions testing internal registers, memory interleaving, and timing)*

1. The 8086 internal architecture is split into two autonomous processing units that operate concurrently: the **_______________** and the **_______________**.  
   *Answer:* **Bus Interface Unit (BIU); Execution Unit (EU)**  
   *Context:* The architectural foundation of pipelining in 8086.

2. The 1 Megabyte physical memory of the 8086 is divided into two 512 Kilobyte banks: the **_______________** bank selected by address pin $A_0 = 0$, and the **_______________** bank selected by the active-low pin **_______________** = 0.  
   *Answer:* **Even (Bank 0); Odd (Bank 1); `BHE#` (Bus High Enable)**  
   *Context:* Notes page 2.11-2.13.

3. Accessing a 16-bit word operand located at an odd physical memory address incurs an execution penalty because the BIU must execute **_______________** consecutive bus cycles instead of **_______________** bus cycle.  
   *Answer:* **Two (2); One (1)**  
   *Context:* Unaligned word transfer requires 2 bus cycles.

4. If an external slow memory device cannot complete a read or write operation within the standard 4 clock cycles, it pulls the 8086 **_______________** pin LOW, forcing the CPU to insert **_______________** states between $T_3$ and $T_4$.  
   *Answer:* **`READY`; Wait ($T_w$)**  
   *Context:* Synchronization with slow peripherals.

5. When an active-high `HOLD` input is recognized by the 8086, the processor suspends bus activity and responds by asserting the **_______________** pin HIGH, while placing its address, data, and control lines into the **_______________** state.  
   *Answer:* **`HLDA` (Hold Acknowledge); High-impedance ($Hi\text{-}Z$)**  
   *Context:* DMA handshaking protocol.

6. The dedicated hardware inside the BIU that computes 20-bit physical memory addresses from segment and offset registers is an internal **_______________**-bit dedicated adder.  
   *Answer:* **20**  
   *Context:* Combines shifted segment base with offset.

7. The 8086 instruction queue has a depth of exactly **_______________** bytes and operates as a **_______________** (First-In, First-Out) shift register.  
   *Answer:* **6; FIFO**  
   *Context:* Instruction queue architecture.

8. When a maskable interrupt on pin `INTR` is serviced, the 8086 automatically clears the **_______________** flag to disable further maskable interrupts and the **_______________** flag to disable single-step tracing.  
   *Answer:* **`IF` (Interrupt Flag); `TF` (Trap Flag)**  
   *Context:* Automatic protection during ISR entry.

9. In the minimum mode of 8086, pin 33 (`MN/MX#`) must be tied directly to **_______________**.  
   *Answer:* **$V_{CC}$ (+5V / Logic High)**  
   *Context:* Selects minimum mode hardware configuration.

10. The non-maskable interrupt pin `NMI` is internally vector-assigned to Interrupt Type **_______________**, and is triggered on a **_______________** edge transition.  
    *Answer:* **2; Positive (Rising)**  
    *Context:* NMI characteristics.

---

### SECTION C: TRUE OR FALSE STATEMENTS
*(Deep conceptual statements with comprehensive technical justifications)*

#### Q2.16
**Statement:** In an 8086 microprocessor, the physical address of the next instruction to be fetched from memory is generated by adding the contents of the Instruction Pointer (`IP`) directly to the Code Segment register (`CS`) without any bit shifting.  
**Answer:** **FALSE**  
**Justification:** Segment registers are 16 bits wide while the physical address bus is 20 bits wide. To generate the physical address, the contents of `CS` are shifted left by 4 bit positions (multiplied by $10\text{H} = 16_{10}$) and then added to the 16-bit offset in `IP`:  
$$\text{Physical Address} = (\text{CS} \times 10\text{H}) + \text{IP}$$

---

#### Q2.17
**Statement:** When accessing an 8-bit byte from an even physical address (e.g., `40002H`), data is transferred across the upper data bus lines $D_{15}-D_8$ while $\overline{\text{BHE}}$ is asserted LOW.  
**Answer:** **FALSE**  
**Justification:** Even addresses reside in the **Even Memory Bank**, which is connected to the lower data bus lines $D_7-D_0$ and selected by $A_0 = 0$. In this access, $\overline{\text{BHE}} = 1$ (inactive) and $A_0 = 0$. $D_{15}-D_8$ and $\overline{\text{BHE}} = 0$ are used exclusively for odd addresses in the Odd Bank.

---

#### Q2.18
**Statement:** The 8086 microprocessor contains an on-chip internal clock oscillator and only requires an external quartz crystal connected across two pins.  
**Answer:** **FALSE**  
**Justification:** The 8086 **does not have an internal clock generator circuit**. It requires an external clock generator IC (the Intel 8284A clock generator) to supply a single-phase clock with a 33% duty cycle connected to its `CLK` pin (Pin 19).

---

#### Q2.19
**Statement:** The 8086 Parity Flag (`PF`) is set to logic 1 if the entire 16-bit arithmetic result contains an even number of 1-bits.  
**Answer:** **FALSE**  
**Justification:** In the 8086, the Parity Flag (`PF`) tests only the **lower 8 bits (least significant byte)** of the result! If the lower byte contains an even number of 1-bits, `PF` is set to 1; bits 8 through 15 are ignored. This is a common university examination trap.

---

#### Q2.20
**Statement:** Pipelining in the 8086 is achieved because the Bus Interface Unit (BIU) can fetch instruction bytes from memory while the Execution Unit (EU) is decoding or executing previously fetched instructions.  
**Answer:** **TRUE**  
**Justification:** Pipelining is the overlap of instruction fetch and execution phases. The BIU and EU operate independently. While the EU executes instructions out of the 6-byte queue, the BIU utilizes idle bus cycles to prefetch subsequent instruction bytes from memory into the queue.

---

#### Q2.21
**Statement:** During an 8086 Memory Read machine cycle, data placed on the bus by the memory is latched into the processor at the beginning of clock state $T_3$.  
**Answer:** **FALSE**  
**Justification:** Data is latched into the CPU during clock state **$T_4$**, specifically at the trailing (rising) edge of the `RD#` control strobe. During $T_3$, memory access is still underway.

---

#### Q2.22
**Statement:** Two different logical addresses specified as `2500H:1200H` and `2600H:0200H` point to the exact same physical memory location in the 8086 address space.  
**Answer:** **TRUE**  
**Justification:**  
- For `2500H:1200H`: $\text{PA} = (2500\text{H} \times 10\text{H}) + 1200\text{H} = 25000\text{H} + 1200\text{H} = \mathbf{26200H}$.  
- For `2600H:0200H`: $\text{PA} = (2600\text{H} \times 10\text{H}) + 0200\text{H} = 26000\text{H} + 0200\text{H} = \mathbf{26200H}$.  
Because segments overlap every 16 bytes (paragraphs), different segment-offset pairs can map to identical physical addresses.

---

#### Q2.23
**Statement:** If an instruction modifies the Interrupt Flag (`IF`), this flag status is immediately updated and reflected on external pin 36 ($S_5$) during the next memory bus cycle.  
**Answer:** **TRUE**  
**Justification:** Pin 36 multiplexes address line $A_{18}$ during $T_1$ with status line $S_5$ during $T_2-T_4$. Status bit $S_5$ directly reflects the condition of the internal Interrupt Enable Flag (`IF`).

---

#### Q2.24
**Statement:** When an external hardware interrupt is recognized on the `INTR` pin, the 8086 pushes the Flag Register, `CS`, and `IP` onto the stack, and immediately reloads `CS` and `IP` from memory locations `00000H` through `00003H`.  
**Answer:** **FALSE**  
**Justification:** Memory locations `00000H - 00003H` belong specifically to Interrupt Type 0 (Divide by Zero). For `INTR`, the external controller supplies an 8-bit vector type $N$. The vector pointer is loaded from address $4 \times N$ ($4N, 4N+1$ for `IP`, and $4N+2, 4N+3$ for `CS`).

---

#### Q2.25
**Statement:** When the 8086 writes a byte to an odd memory address, `A0` is HIGH and `BHE#` is LOW, and data is transferred exclusively across bus lines `AD8 - AD15`.  
**Answer:** **TRUE**  
**Justification:** Odd addresses reside in the Odd Bank (Bank 1), which is wired to data lines $D_8-D_{15}$. To select this bank, $\overline{\text{BHE}}$ is asserted LOW (0) and $A_0$ is HIGH (1).

---

### SECTION D: 3 MARKS QUESTIONS
*(Medium-level analytical questions with point-wise marking schemes)*

#### Q2.26
**Question:** Explain the structural organization of **Memory Segmentation** in the Intel 8086. What are the key advantages of segmenting the 1 Megabyte physical memory space?  
**Model Answer:**
1. **Organization:** The 8086 partitions its $1\text{ MB}$ physical memory space into four logical segments: **Code Segment (CS)**, **Data Segment (DS)**, **Stack Segment (SS)**, and **Extra Segment (ES)**. Each segment can have a maximum size of **64 Kilobytes** (determined by the 16-bit offset address). A segment must begin on a 16-byte boundary (called a **paragraph**, where the lowest hex digit of the base address is `0H`).
2. **Advantages:**
   - **Enables 1 MB addressing with 16-bit registers:** A 16-bit processor with 16-bit internal pointers can easily address 1 MB by combining a shifted 16-bit segment base with a 16-bit offset.
   - **Code Relocatability:** Programs can be dynamically relocated anywhere in physical memory simply by altering the segment base register without modifying the instruction offset addresses.
   - **Memory Protection & Modularity:** Data, code, and stack are kept in logically isolated partitions, preventing inadvertent overwrite of program code by data or stack growth.  
**Marking Scheme:**
- Description of 4 segments, 64 KB limit, and 16-byte paragraph alignment: **1.5 Marks**
- Clear explanation of advantages (relocatability, 1 MB access, modular protection): **1.5 Marks**

---

#### Q2.27
**Question:** A program loaded in an 8086 system has the following register values: `CS = 348AH`, `DS = 5120H`, `SS = 7000H`, `IP = 1250H`, `BX = 0400H`, `SP = 3FE0H`. Calculate:  
(a) The physical address of the next instruction byte to be fetched.  
(b) The physical address of the memory operand accessed by `MOV AL, [BX]`.  
(c) The physical address of the current top of the stack.  
**Model Answer:**
(a) Next instruction byte ($\text{CS} : \text{IP}$):  
    $$\text{PA} = (\text{CS} \times 10\text{H}) + \text{IP} = 348\text{A}0\text{H} + 1250\text{H} = \mathbf{35\text{AF0H}}$$  
    *Calculation:* $348\text{A}0\text{H} + 1250\text{H} = 35\text{AF0H}$.
(b) Operand accessed by `MOV AL, [BX]` ($\text{DS} : \text{BX}$):  
    $$\text{PA} = (\text{DS} \times 10\text{H}) + \text{BX} = 51200\text{H} + 0400\text{H} = \mathbf{51600H}$$  
(c) Top of the stack ($\text{SS} : \text{SP}$):  
    $$\text{PA} = (\text{SS} \times 10\text{H}) + \text{SP} = 70000\text{H} + 3\text{FE0H} = \mathbf{73\text{FE0H}}$$  
**Marking Scheme:**
- (a) Instruction address calculation: **1 Mark**
- (b) Data operand address calculation: **1 Mark**
- (c) Stack address calculation: **1 Mark**

---

#### Q2.28
**Question:** Explain the function of the 8086 status pins **$S_3$ and $S_4$**. Construct their decoding truth table and explain how external hardware can utilize them.  
**Model Answer:**
1. **Function:** Status lines $S_4$ and $S_3$ are multiplexed on pins 36 and 37 (`A18/S4` and `A17/S3`). During clock states $T_2, T_3, T_4$, they identify which internal segment register the BIU is accessing to generate the current physical address.
2. **Decoding Truth Table:**
   | $S_4$ | $S_3$ | Segment Register Accessed | Description |
   |:---:|:---:|:---:|:---|
   | 0 | 0 | **ES** | Extra / Alternate Segment |
   | 0 | 1 | **SS** | Stack Segment |
   | 1 | 0 | **CS** (or None) | Code Segment / Instruction Fetch |
   | 1 | 1 | **DS** | Data Segment |
3. **Hardware Application:** Memory management units or diagnostic bus analyzers monitor $S_4, S_3$ to enforce hardware-level memory protection (e.g., preventing data writes into code segments) or to bank-switch separate memory spaces for code and data.  
**Marking Scheme:**
- Function and pin multiplexing: **1 Mark**
- Accurate decoding table: **1 Mark**
- External hardware utilization: **1 Mark**

---

#### Q2.29
**Question:** Describe the exact internal sequence of events executed by the 8086 hardware when a valid maskable interrupt request (`INTR`) is acknowledged.  
**Model Answer:**
When `INTR` is sampled HIGH during the last clock cycle of an instruction and `IF = 1`:
1. The 8086 executes **two `INTA#` machine cycles**. On the second cycle, it reads the 8-bit interrupt vector type number $N$ from `AD0-AD7`.
2. The CPU decrements `SP` by 2 and **pushes the 16-bit Flag register** onto the stack.
3. The CPU **clears `IF` (Interrupt Flag)** to prevent nested interrupts and **clears `TF` (Trap Flag)** to disable single-stepping.
4. The CPU decrements `SP` by 2 and **pushes the current `CS`** onto the stack, then decrements `SP` by 2 and **pushes the current `IP`** onto the stack.
5. The CPU computes the vector address in the Interrupt Vector Table ($\text{Vector Address} = 4 \times N$):
   - Loads `IP` from memory word at $4N$ (`[4N]` and `[4N+1]`).
   - Loads `CS` from memory word at $4N+2$ (`[4N+2]` and `[4N+3]`).
6. The CPU resumes execution from the first instruction of the Interrupt Service Routine (ISR).  
**Marking Scheme:**
- `INTA#` cycles and vector fetch: **1 Mark**
- Stacking sequence (Flags, CS, IP): **1 Mark**
- Flag clearance (`IF`, `TF`) and vector table loading: **1 Mark**

---

#### Q2.30
**Question:** Explain why reading a 16-bit word from physical address `30001H` takes twice as long as reading a 16-bit word from address `30000H`. Justify your answer with bank activation signals.  
**Model Answer:**
1. **Address `30000H` (Aligned Word Access):**
   - Address `30000H` is an **even address** ($A_0 = 0$).
   - The 8086 activates both memory banks simultaneously in a **single bus cycle** (4 $T$-states):
     - Even Bank is enabled by driving $A_0 = 0$ (lower byte via $D_7-D_0$).
     - Odd Bank is enabled by driving $\overline{\text{BHE}} = 0$ (upper byte via $D_{15}-D_8$).
   - The complete 16-bit word is read in **1 bus cycle**.
2. **Address `30001H` (Misaligned Word Access):**
   - Address `30001H` is an **odd address** ($A_0 = 1$).
   - A 16-bit word spanning `30001H` and `30002H` cannot be fetched in one cycle because line $A_0$ can only point to one physical bank row at a time. The BIU must execute **two consecutive bus cycles** (at least 8 $T$-states):
     - **Cycle 1:** Fetches lower byte from odd address `30001H` ($\overline{\text{BHE}} = 0, A_0 = 1$ via $D_{15}-D_8$).
     - **Cycle 2:** Fetches upper byte from next even address `30002H` ($\overline{\text{BHE}} = 1, A_0 = 0$ via $D_7-D_0$).
   - Because it requires two full bus cycles instead of one, it takes **twice as long**.  
**Marking Scheme:**
- Explanation of aligned access at `30000H` with $\overline{\text{BHE}}=0, A_0=0$ in 1 cycle: **1.5 Marks**
- Explanation of misaligned access at `30001H` with 2 distinct cycles: **1.5 Marks**

---

#### Q2.31
**Question:** State the functions of the 8086 Minimum Mode pins **`DT/R#`** and **`DEN#`**. How do their signal transitions differ between a Memory Read cycle and a Memory Write cycle?  
**Model Answer:**
1. **`DT/R#` (Data Transmit / Receive):** Sets the direction of data flow through external bus transceivers (74LS245).
   - In **Memory Read**: Driven **LOW** (0) during $T_1$ and held LOW throughout $T_2-T_4$, causing transceivers to route data from the system bus into the CPU.
   - In **Memory Write**: Driven **HIGH** (1) during $T_1$ and held HIGH throughout $T_2-T_4$, causing transceivers to transmit data from CPU onto the system bus.
2. **`DEN#` (Data Enable):** Active-LOW enable strobe that activates the output buffers of the data transceivers.
   - In both Read and Write cycles, `DEN#` is asserted **LOW** during $T_2, T_3, T_4$ to connect data to the bus, and goes HIGH in $T_4$ to isolate the bus.
   - Crucially, `DEN#` is kept **HIGH during $T_1$** in both cycles to ensure the multiplexed address on `AD0-AD15` is latched before data transceivers are turned on.  
**Marking Scheme:**
- Detailed role of `DT/R#` in read vs write cycles: **1.5 Marks**
- Detailed role and timing of `DEN#`: **1.5 Marks**

---

#### Q2.32
**Question:** Explain the operation and purpose of the 8086 **Instruction Queue**. Why is the queue depth fixed at 6 bytes in the 8086, whereas it is 4 bytes in the Intel 8088?  
**Model Answer:**
1. **Purpose:** The instruction queue implements instruction pipelining. It allows the BIU to fetch future instruction bytes from memory and buffer them internally while the EU executes instructions, hiding instruction fetch latency.
2. **Operation:** Operates as a FIFO buffer. When the queue has at least 2 empty bytes, the BIU fetches a 16-bit word from memory. The EU decodes and consumes bytes directly from the front of the queue without waiting for external bus access.
3. **Queue Depth (8086 vs 8088):**
   - The 8086 has a **16-bit data bus** and fetches instructions 2 bytes (one word) at a time. If the queue had only 4 bytes, a 2-byte fetch would fill 50% of the queue, causing frequent bus stalls. A 6-byte queue provides optimal buffering so the BIU can always complete a 2-byte prefetch whenever 2 bytes are free.
   - The 8088 has an **8-bit external data bus** and fetches only 1 byte at a time; hence, a smaller 4-byte queue is sufficient to keep the EU supplied.  
**Marking Scheme:**
- Pipelining role and FIFO operation: **1.5 Marks**
- Contrast between 8086 (6 bytes / 16-bit bus) and 8088 (4 bytes / 8-bit bus): **1.5 Marks**

---

#### Q2.33
**Question:** Define the conditions under which the 8086 sets or clears the **Overflow Flag (`OF`)** and the **Carry Flag (`CF`)**. Provide an 8-bit arithmetic addition example where `CF = 0` but `OF = 1`.  
**Model Answer:**
1. **Carry Flag (`CF`):** Set to 1 if an arithmetic operation generates a carry out of the most significant bit (bit 7 for byte, bit 15 for word) in unsigned addition, or a borrow in subtraction.
2. **Overflow Flag (`OF`):** Set to 1 if the result of a **signed arithmetic operation** exceeds the representable signed range ($-128 \text{ to } +127$ for an 8-bit signed byte). Mathematically:  
   $$\text{OF} = C_{\text{in to MSB}} \oplus C_{\text{out of MSB}}$$
3. **Example (`CF = 0, OF = 1`):**  
   Consider the signed 8-bit addition of $+80$ and $+50$:
   - $+80_{10} = 50\text{H} = \text{0101 0000}_2$  
   - $+50_{10} = 32\text{H} = \text{0011 0010}_2$  
   Adding the two values:  
   $$\begin{array}{r@{\quad}l}
     0101 & 0000 \\
   + 0011 & 0010 \\
   \hline
     1000 & 0010_2 = 82\text{H} = -126_{10} \text{ (in 2's complement)}
   \end{array}$$  
   - Carry out of bit 7 = **0** $\implies \mathbf{CF = 0}$.  
   - Adding two positive numbers produced a negative number ($MSB = 1$). The true sum ($+130$) exceeds $+127$. Thus, an overflow occurred: $\mathbf{OF = 1}$.  
**Marking Scheme:**
- Accurate definition of `CF` and `OF`: **1.5 Marks**
- Precise binary addition example showing $CF=0$ and $OF=1$: **1.5 Marks**

---

### SECTION E: 5 MARKS QUESTIONS
*(In-depth timing diagram analysis, memory organization, and architectural design questions)*

#### Q2.34
**Question:** Draw a comprehensive, neatly labeled timing diagram of the **8086 Memory Read Bus Cycle** in Minimum Mode showing one inserted Wait State ($T_w$). Detail the signal behavior across all clock states ($T_1, T_2, T_w, T_3, T_4$) for:  
(a) `CLK`  
(b) `AD0 - AD15` and `A16/S3 - A19/S6`  
(c) `ALE`  
(d) `M/IO#`, `DT/R#`, and `DEN#`  
(e) `RD#`  
(f) `READY`  
**Model Answer:**
```
CLK      :   --+  +--+  +--+  +--+  +--+  +--+  +--+  +--+  +--+  +--
               |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
                 T1        T2        Tw        T3        T4
           +---------+
ALE        |         |______________________________________________
           +---------+
AD0-AD15   --< ADDRESS >---<  Hi-Z  >--------<  VALID DATA IN  >----
             (A0 - A15)                       (Latched at RD# rising)
A16-A19    --< ADDRESS >---< STATUS S3-S6 >-------------------------
             (A16 - A19)
M/IO#      ------------------ HIGH (Memory = 1) --------------------
DT/R#      ------------------ LOW (Receive = 0) -------------------
RD#        ________________+                                 +------
                           |_________________________________|
DEN#       ________________+                                 +------
                           |_________________________________|
READY      ----------------------------+                     +------
 (Sampled at falling edge of Tw/T3)    |_____________________|
```

**State-by-State Signal Breakdown:**
1. **$T_1$ (Address Output Phase):**
   - The CPU asserts `M/IO#` HIGH to indicate a memory operation.
   - `DT/R#` is driven LOW to set transceivers to receive mode (bus $\rightarrow$ CPU).
   - The 20-bit address is driven onto `AD0-AD15` and `A16-A19`. `BHE#` is output.
   - `ALE` is pulsed HIGH and returns LOW; its falling edge latches the address into external 74LS373 latches.
   - `DEN#` remains HIGH (disabled).
2. **$T_2$ (Bus Turn-around & Read Strobe Initiation):**
   - `AD0-AD15` lines are put into high-impedance ($Hi\text{-}Z$) to allow the addressed memory to take drive control of the lines without bus fighting.
   - Lines `A16-A19` switch to status signals $S_3-S_6$; `BHE#` switches to $S_7$.
   - `RD#` is asserted LOW to enable the memory output buffers.
   - `DEN#` is asserted LOW to enable the external 74LS245 data transceivers.
3. **$T_2 \rightarrow T_3$ Transition & $T_w$ Insertion:**
   - The CPU samples the `READY` line at the falling edge of $T_2$ / $T_3$.
   - Because the slow memory drives `READY` LOW, the processor inserts a **Wait State ($T_w$)** between $T_3$ and $T_4$.
   - During $T_w$, all control signals (`RD#`, `DEN#`, status) are maintained in their active states.
4. **$T_3$ (Data Access Phase):**
   - `READY` is sampled again at the falling edge of $T_w$. Finding `READY` HIGH, the CPU proceeds to $T_4$.
   - The memory places valid read data onto `AD0-AD15`.
5. **$T_4$ (Data Latching & Cycle Termination):**
   - During $T_4$, the 8086 latches the data from `AD0-AD15` into its internal registers.
   - `RD#` is driven HIGH. The rising edge of `RD#` guarantees that data is latched safely before memory floats.
   - `DEN#` is driven HIGH, disabling data transceivers.
   - The bus cycle completes.  
**Marking Scheme:**
- Correct timing diagram showing all signals across $T_1-T_4$ with $T_w$: **2 Marks**
- Detailed explanation of $T_1$ and $T_2$ phases: **1 Mark**
- Detailed explanation of `READY` sampling and $T_w$ insertion: **1 Mark**
- Detailed explanation of $T_4$ data latching and strobe de-assertion: **1 Mark**

---

#### Q2.35
**Question:** Draw a comprehensive, neatly labeled timing diagram of the **8086 Memory Write Bus Cycle** in Minimum Mode (without wait states). Explain the critical differences between the Read and Write bus cycles regarding `DT/R#`, `DEN#`, `AD0-AD15`, and the write strobe `WR#`.  
**Model Answer:**
```
CLK      :   --+  +--+  +--+  +--+  +--+  +--+  +--+  +--
               |  |  |  |  |  |  |  |  |  |  |  |  |  |
                 T1        T2        T3        T4
           +---------+
ALE        |         |__________________________________
           +---------+
AD0-AD15   --< ADDRESS >---<      VALID WRITE DATA     >
             (A0 - A15)     (Data output from 8086)
A16-A19    --< ADDRESS >---<    STATUS S3 - S6         >
             (A16 - A19)
M/IO#      ------------------ HIGH (Memory = 1) --------
DT/R#      ------------------ HIGH (Transmit = 1) ------
WR#        ________________+                       +----
                           |_______________________|
DEN#       ________________+                       +----
                           |_______________________|
```

**Key Differences Between Memory Read and Memory Write Cycles:**
1. **Direction Signal (`DT/R#`):**  
   - In Read Cycle: `DT/R#` is driven **LOW** (0) during $T_1$ and held LOW, configuring transceivers to route data from memory to CPU.  
   - In Write Cycle: `DT/R#` is driven **HIGH** (1) during $T_1$, configuring transceivers to drive data from CPU to memory.
2. **Behavior of `AD0-AD15` Lines:**  
   - In Read Cycle: Lines `AD0-AD15` float into high-impedance ($Hi\text{-}Z$) during $T_2$ to allow memory to drive the bus.  
   - In Write Cycle: Lines `AD0-AD15` **do not float**. The CPU directly replaces the address with valid write data during $T_2$ and maintains valid data across $T_3$ and into $T_4$.
3. **Control Strobes (`RD#` vs `WR#`):**  
   - In Read: `RD#` is asserted LOW in $T_2$ and de-asserted HIGH in $T_4$; data is sampled on the rising edge of `RD#`.  
   - In Write: `WR#` is asserted LOW in $T_2$. Data is permanently written into memory on the **rising edge of `WR#`** in $T_4$.
4. **Data Enable (`DEN#`):**  
   - In Read: `DEN#` is asserted after the bus floats in $T_2$.  
   - In Write: `DEN#` is asserted simultaneously with write data placement in $T_2$ to drive data through the transceivers immediately.  
**Marking Scheme:**
- Accurately drawn write cycle timing diagram: **2 Marks**
- Analytical comparison of `DT/R#` and `DEN#`: **1 Mark**
- Contrast of `AD0-AD15` floating vs active driving: **1 Mark**
- Explanation of `WR#` strobe and rising edge latching: **1 Mark**

---

#### Q2.36
**Question:** Explain the concept of **Memory Banking (Even and Odd Banks)** in the Intel 8086 microprocessor.  
(a) Why is memory interleaving necessary in a 16-bit processor?  
(b) Construct the complete Bank Selection truth table for signals $\overline{\text{BHE}}$ and $A_0$.  
(c) Explain the step-by-step bus transactions required when executing:  
    `MOV WORD PTR [2000H], 1234H` vs `MOV WORD PTR [2001H], 1234H`.  
**Model Answer:**
**(a) Necessity of Memory Banking:**  
The 8086 has a 16-bit internal word length and a 16-bit external data bus, but its memory is byte-addressable. Programs must be able to read or write individual 8-bit bytes as well as complete 16-bit words. To allow independent 8-bit byte access while simultaneously permitting 16-bit word transfers in a single bus cycle, the 1 MB physical memory is partitioned into two 512 KB banks:
- **Even Bank (Bank 0):** Stores bytes at even addresses (`00000H, 00002H, ...`). Connected to lower data bus lines $D_7-D_0$. Activated by address line $A_0 = 0$.
- **Odd Bank (Bank 1):** Stores bytes at odd addresses (`00001H, 00003H, ...`). Connected to upper data bus lines $D_{15}-D_8$. Activated by $\overline{\text{BHE}} = 0$.

**(b) Bank Selection Truth Table:**
| $\overline{\text{BHE}}$ | $A_0$ | Operation Performed | Data Bus Lines Used | Bus Cycles Required |
|:---:|:---:|:---|:---:|:---:|
| 0 | 0 | **16-bit Word Access at Even Address** (Aligned Word) | $D_{15}-D_0$ (Both Banks) | 1 Cycle |
| 0 | 1 | **8-bit Byte Access at Odd Address** | $D_{15}-D_8$ (Odd Bank Only) | 1 Cycle |
| 1 | 0 | **8-bit Byte Access at Even Address** | $D_7-D_0$ (Even Bank Only) | 1 Cycle |
| 1 | 1 | **No Operation (Bus Idle)** | None (Both Banks Disabled) | None |

**(c) Execution Comparison:**
1. `MOV WORD PTR [2000H], 1234H` (Aligned Word at Even Address `2000H`):
   - Physical address `2000H` has $A_0 = 0$.  
   - Both bytes are written simultaneously in **ONE bus cycle**:
     - `34H` (lower byte) is written to Even Bank at `2000H` via $D_7-D_0$ ($A_0 = 0$).
     - `12H` (upper byte) is written to Odd Bank at `2001H` via $D_{15}-D_8$ ($\overline{\text{BHE}} = 0$).
2. `MOV WORD PTR [2001H], 1234H` (Misaligned Word at Odd Address `2001H`):
   - Physical address `2001H` has $A_0 = 1$. It requires **TWO bus cycles**:
     - **Bus Cycle 1:** The CPU writes the lower byte (`34H`) into the Odd Bank at address `2001H`. Signals: $\overline{\text{BHE}} = 0, A_0 = 1$, using data lines $D_{15}-D_8$.
     - **Bus Cycle 2:** The CPU increments the internal address to `2002H` ($A_0 = 0$) and writes the upper byte (`12H`) into the Even Bank at address `2002H`. Signals: $\overline{\text{BHE}} = 1, A_0 = 0$, using data lines $D_7-D_0$.  
   - Writing an unaligned word causes a 100% bus time overhead (2 cycles vs 1 cycle).  
**Marking Scheme:**
- Justification of memory banking and 16-bit/8-bit compatibility: **1.5 Marks**
- Truth table of $\overline{\text{BHE}}$ and $A_0$: **1.5 Marks**
- Step-by-step trace of aligned vs misaligned write transactions: **2 Marks**

---

#### Q2.37
**Question:** With the help of an architectural block diagram, explain the internal architecture of the Intel 8086 microprocessor. Describe the functions of all functional blocks in the **Bus Interface Unit (BIU)** and the **Execution Unit (EU)**. Explain how asynchronous parallel execution between BIU and EU provides instruction pipelining.  
**Model Answer:**
```
+-------------------------------------------------------------------------+
|                        BUS INTERFACE UNIT (BIU)                         |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   | Segment Registers:  CS [16] | DS [16] | SS [16] | ES [16]       |   |
|   | Instruction Pointer: IP [16]                                    |   |
|   +-----------------------------------------------------------------+   |
|                                   |                                     |
|                                   v                                     |
|                       +----------------------+                          |
|                       | Dedicated 20-bit     |                          |
|                       | Address Adder        |                          |
|                       +----------------------+                          |
|                                   |                                     |
|                                   v                                     |
|                        20-bit Memory Address                            |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   | 6-Byte Instruction FIFO Queue: [ 1 | 2 | 3 | 4 | 5 | 6 ]        |   |
|   +-----------------------------------------------------------------+   |
+-----------------------------------|-------------------------------------+
                                    | (Prefetched instruction stream)
                                    v
+-------------------------------------------------------------------------+
|                         EXECUTION UNIT (EU)                             |
|                                                                         |
|                       +----------------------+                          |
|                       | Instruction Decoder  |                          |
|                       | & Control Logic Unit |                          |
|                       +----------------------+                          |
|                                   |                                     |
|   +-------------------------------+---------------------------------+   |
|   | General Registers:  AX (AH, AL) | BX (BH, BL)                   |   |
|   |                     CX (CH, CL) | DX (DH, DL)                   |   |
|   | Pointer / Index:    SP [16]     | BP [16]                       |   |
|   |                     SI [16]     | DI [16]                       |   |
|   +-------------------------------+---------------------------------+   |
|                                   |                                     |
|                                   v                                     |
|                       +----------------------+                          |
|                       | 16-bit ALU           | <---> Flag Register [16] |
|                       +----------------------+                          |
+-------------------------------------------------------------------------+
```

**1. Bus Interface Unit (BIU):**
- **Function:** Handles all external bus transfers (fetching instructions, reading/writing memory and I/O operands).
- **Components:**
  - **Segment Registers (`CS, DS, SS, ES`):** 16-bit registers storing base segment addresses.
  - **Instruction Pointer (`IP`):** Holds the 16-bit offset of the next instruction byte to be fetched from `CS`.
  - **20-bit Dedicated Address Adder:** Hardwired adder that computes physical address $= (\text{Segment} \times 16) + \text{Offset}$.
  - **6-Byte Instruction FIFO Queue:** Buffers up to 6 bytes of prefetched instruction code.
  - **Bus Control Logic:** Generates bus control strobes (`ALE`, `RD#`, `WR#`, `M/IO#`).

**2. Execution Unit (EU):**
- **Function:** Decodes and executes instructions received from the instruction queue.
- **Components:**
  - **Instruction Decoder:** Decodes machine code opcodes into internal micro-operations.
  - **Arithmetic Logic Unit (ALU):** 16-bit computation engine performing arithmetic (`ADD`, `SUB`, `MUL`, `DIV`) and logical (`AND`, `OR`, `XOR`) operations.
  - **Register Array:**
    - Four 16-bit general data registers (`AX, BX, CX, DX`), individually addressable as 8-bit halves (`AH/AL`, etc.).
    - Two pointer registers (`SP` for stack top, `BP` for stack base frame).
    - Two index registers (`SI` for source index, `DI` for destination index).
  - **Flag Register:** 16-bit register containing 9 active flags (6 conditional: `CF, PF, AF, ZF, SF, OF`; 3 control: `TF, IF, DF`).

**3. Instruction Pipelining Mechanism:**
- In earlier processors (like 8085), fetch and execute were strictly sequential: the CPU had to wait for the bus during fetch, and the bus was idle during execute.
- In 8086, the BIU and EU operate **concurrently and asynchronously**.
- Whenever the queue has at least 2 empty bytes and the EU does not require the bus for data operands, the BIU fetches the next instruction bytes from memory.
- The EU extracts instructions directly from the front of the queue without initiating external memory cycles. Instruction fetch time is effectively hidden behind execution time, dramatically increasing instruction throughput.  
**Marking Scheme:**
- Neat, accurate block diagram showing BIU, EU, registers, queue, and ALU: **2 Marks**
- Detailed functional explanation of BIU and EU components: **1.5 Marks**
- Clear explanation of asynchronous concurrent pipelining: **1.5 Marks**

---

#### Q2.38
**Question:** Explain the structure and operation of the **8086 Flag Register**.  
(a) Draw the bit-level format of the 16-bit Flag Register, identifying the positions of all 9 active flags and undefined bits.  
(b) Describe the function of all 6 status flags and all 3 control flags.  
(c) Given the initial register states: `AL = 7FH`, `BL = 01H`. Trace the exact binary result and the status of `CF, PF, AF, ZF, SF, OF` after executing the instruction `ADD AL, BL`.  
**Model Answer:**
**(a) Bit Format of 8086 Flag Register (16 bits):**
```
 Bit:   15  14  13  12  11  10   9   8   7   6   5   4   3   2   1   0
      +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
      | U | U | U | U | OF| DF| IF| TF| SF| ZF| U | AF| U | PF| U | CF|
      +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
        (U = Undefined / Reserved for future expansion)
```
- Active Flags:
  - Bit 0: **`CF`** (Carry Flag)
  - Bit 2: **`PF`** (Parity Flag)
  - Bit 4: **`AF`** (Auxiliary Carry Flag)
  - Bit 6: **`ZF`** (Zero Flag)
  - Bit 7: **`SF`** (Sign Flag)
  - Bit 8: **`TF`** (Trap / Single-Step Flag)
  - Bit 9: **`IF`** (Interrupt Enable Flag)
  - Bit 10: **`DF`** (Direction Flag)
  - Bit 11: **`OF`** (Overflow Flag)

**(b) Function of Flags:**
- **Status (Conditional) Flags (Updated by ALU operations):**
  1. `CF`: Set if carry out from MSB occurs in addition, or borrow in subtraction.
  2. `PF`: Set if the lowest byte of the result contains an **even number of 1s**.
  3. `AF`: Set if carry occurs from bit 3 to bit 4 (lower nibble to upper nibble; used in BCD).
  4. `ZF`: Set if the entire arithmetic/logic result is zero.
  5. `SF`: Set if the result's MSB is 1 (indicates negative number in signed interpretation).
  6. `OF`: Set if signed result exceeds signed range ($-128 \text{ to } +127$ for byte).
- **Control Flags (Programmatically set/cleared):**
  7. `TF`: When set, puts CPU in single-step debugging mode (Type 1 interrupt after each instruction).
  8. `IF`: When set, maskable interrupts on pin `INTR` are recognized; when cleared, ignored.
  9. `DF`: Used in string operations; if $DF=0$ (`CLD`), string pointers auto-increment; if $DF=1$ (`STD`), auto-decrement.

**(c) Instruction Trace: `ADD AL, BL`**
- Initial: `AL = 7FH = 0111 1111` ($+127_{10}$), `BL = 01H = 0000 0001` ($+1_{10}$).  
- Binary Addition:
  $$\begin{array}{r@{\quad}l}
    0111 & 1111_2 \quad (7\text{FH}) \\
  + 0000 & 0001_2 \quad (01\text{H}) \\
  \hline
    1000 & 0000_2 \quad (80\text{H} = -128_{10})
  \end{array}$$
- Result in `AL` = **`80H`**.
- **Flag Evaluation:**
  - `CF = 0`: No carry generated out of bit 7.
  - `PF = 0`: Result `1000 0000` has only one '1' bit (odd parity $\implies PF = 0$).
  - `AF = 1`: Carry was generated from bit 3 to bit 4 ($1111 + 0001 = 10000$).
  - `ZF = 0`: Result is non-zero (`80H`).
  - `SF = 1`: MSB (bit 7) is 1.
  - `OF = 1`: Two positive numbers ($+127$ and $+1$) yielded a negative result ($-128$). Signed limit $+127$ exceeded.  
**Marking Scheme:**
- Correct 16-bit register diagram with bit indices: **1.5 Marks**
- Complete description of status and control flags: **1.5 Marks**
- Precise step-by-step binary trace and flag evaluations: **2 Marks**

---

#### Q2.39
**Question:** Explain the **Interrupt Structure of the Intel 8086 Microprocessor**.  
(a) What is the Interrupt Vector Table (IVT)? Where is it located, and how much physical memory does it occupy?  
(b) How does the 8086 calculate the physical memory addresses for the ISR pointer given an Interrupt Type Number $N$?  
(c) Trace the complete physical addresses and contents loaded for Interrupt Type `08H`, assuming the vector stored at its IVT entry is `Offset = 1050H` and `Segment = 2000H`.  
**Model Answer:**
**(a) Interrupt Vector Table (IVT):**
- The IVT is a reserved lookup table in system memory that stores the entry pointers (starting addresses) for all 256 possible interrupt service routines (ISRs).
- **Memory Location:** It is permanently located at the very bottom of physical memory, spanning from **`00000H` to `003FFH`**.
- **Memory Size:** It holds 256 interrupt vectors. Each vector consists of 4 bytes (2 bytes for offset `IP` and 2 bytes for base segment `CS`). Total size:  
  $$256 \times 4\text{ bytes} = 1024\text{ bytes} = \mathbf{1\text{ Kilobyte}}$$

**(b) Vector Address Calculation:**
For any Interrupt Type Number $N$ (where $0 \le N \le 255$):
- Base address of the vector in IVT is computed as:  
  $$\text{Vector Address} = N \times 4$$
- In memory, the 4 bytes are arranged in Little-Endian format:
  1. Low-order byte of `IP` is stored at address $4N$
  2. High-order byte of `IP` is stored at address $4N + 1$
  3. Low-order byte of `CS` is stored at address $4N + 2$
  4. High-order byte of `CS` is stored at address $4N + 3$

**(c) Numerical Trace for Interrupt Type `08H`:**
- Interrupt Type $N = 08\text{H} = 8_{10}$.
- Base Address in IVT:  
  $$\text{Base Address} = 8 \times 4 = 32_{10} = \mathbf{00020H}$$
- The 4-byte table entry spans physical addresses **`00020H` to `00023H`**:
  - Address `00020H`: Stores lower byte of `IP` (`1050H`) $\implies \mathbf{50H}$
  - Address `00021H`: Stores upper byte of `IP` (`1050H`) $\implies \mathbf{10H}$
  - Address `00022H`: Stores lower byte of `CS` (`2000H`) $\implies \mathbf{00H}$
  - Address `00023H`: Stores upper byte of `CS` (`2000H`) $\implies \mathbf{20H}$
- When Interrupt Type `08H` occurs:
  1. The 8086 fetches `[00020H]` and `[00021H]` and loads `IP = 1050H`.
  2. The 8086 fetches `[00022H]` and `[00023H]` and loads `CS = 2000H`.
  3. Execution branches to the ISR starting at physical address:  
     $$\text{PA} = (\text{CS} \times 10\text{H}) + \text{IP} = 20000\text{H} + 1050\text{H} = \mathbf{21050H}$$  
**Marking Scheme:**
- IVT location, capacity, and structure explanation: **1.5 Marks**
- Formula for vector address calculation and byte layout: **1.5 Marks**
- Step-by-step numerical trace of Interrupt `08H` with byte assignments and ISR physical address: **2 Marks**
