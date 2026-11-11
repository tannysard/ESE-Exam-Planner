# INTEL 8086 MICROPROCESSOR — MASTER QUESTION BANK
## CHAPTER 1: INTRODUCTION, BUS ARCHITECTURE & DEMULTIPLEXING
**Course:** Microprocessors / Microprocessor Architecture & Applications  
**Prepared by:** Senior Faculty & Paper Setter (20+ Years Experience)  
**Syllabus Compliance:** Strictly aligned with Mid-Sem Study Planner (Excludes Historical Generations / Pentium material)

---

### SECTION A: MULTIPLE CHOICE QUESTIONS (MCQs)
*(Each question carries 1 Mark. Designed to test analytical concepts, bus electrical behavior, and demultiplexing timing)*

#### Q1.1
An 8086-based microcomputer system utilizes external 74LS373 transparent octal D-latches to demultiplex the address/data bus. At what exact transition of the `ALE` (Address Latch Enable) signal is the 20-bit address permanently latched into the outputs of the 74LS373 latches for the remainder of the bus cycle?
- [A] At the rising edge of `ALE` during the start of $T_1$
- [B] At the trailing (falling) edge of `ALE` during the end of $T_1$
- [C] At the rising edge of the system clock during $T_2$
- [D] At the falling edge of the `RD#` or `WR#` strobe in $T_2$

**Correct Answer:** **[B] At the trailing (falling) edge of `ALE` during the end of $T_1$**  
**Teacher's Rationale & Trap Analysis:**  
The 74LS373 is an active-high transparent latch (Enable pin $G$ or $LE$). While `ALE` is high (during the initial phase of $T_1$), the latch is transparent—meaning its outputs mirror the inputs. As soon as `ALE` transitions from HIGH to LOW (its trailing/falling edge near the end of $T_1$), the data present on the $D$-inputs is latched and frozen. Trapping option [A] is a common student misconception: the rising edge makes the latch transparent, but latching/freezing occurs strictly at the *falling edge*.

---

#### Q1.2
In a microprocessor system bus interface, three-state (tristate) logic devices are ubiquitous. If a memory peripheral's Chip Select (`CS#`) input is de-asserted (driven HIGH to logic 1), what is the electrical state of its data output pins connected to the system data bus?
- [A] Held at a logic LOW level (0 V), sinking maximum permissible current.
- [B] Held at a logic HIGH level (+5 V), sourcing maximum pull-up current.
- [C] High-impedance ($Z$) state, presenting an open-circuit condition with negligible leakage current.
- [D] Alternating between 0 V and +5 V synchronously with the system bus clock.

**Correct Answer:** **[C] High-impedance ($Z$) state, presenting an open-circuit condition with negligible leakage current.**  
**Teacher's Rationale & Trap Analysis:**  
Tristate logic defines three discrete operational states: Logic 0, Logic 1, and High-Impedance ($Hi\text{-}Z$). In the $Hi\text{-}Z$ state, both internal pull-up and pull-down output transistors are cut off, electrically isolating the chip from the shared bus. This electrical isolation prevents bus contention (short circuits) when multiple slaves share identical data bus lines.

---

#### Q1.3
The Intel 8086 microprocessor has a 20-bit physical address bus and is byte-addressable (addressability = 8 bits). If the processor architecture had instead been designed with a 20-bit address bus but *word-addressable* (addressability = 16 bits per unique physical address), what would be the total physical memory capacity addressable by the processor?
- [A] 512 Kilobytes
- [B] 1 Megabyte
- [C] 2 Megabytes
- [D] 4 Megabytes

**Correct Answer:** **[C] 2 Megabytes**  
**Teacher's Rationale & Trap Analysis:**  
Physical memory capacity is governed by:  
$$\text{Memory Capacity} = 2^n \times \text{Addressability}$$  
With $n = 20$ address lines, the CPU can generate $2^{20} = 1,048,576$ discrete physical addresses. In 8086, memory word size is 8 bits (1 byte), giving $1\text{ MB}$. If addressability were 16 bits (2 bytes per location), capacity would be:  
$$2^{20} \times 2\text{ bytes} = 2\text{ Megabytes}$$  
This tests whether students blindly memorize "20 lines = 1 MB" without understanding the fundamental role of memory addressability.

---

#### Q1.4
Why is multiplexing strictly prohibited on a computer's **System Bus**, whereas it is intentionally implemented on the **CPU Bus** of the Intel 8086?
- [A] System bus lines must carry higher electrical voltage than CPU bus lines.
- [B] The CPU bus is limited by IC physical packaging pin constraints (40 pins), whereas standard system peripheral cards require independent, stable address and data lines simultaneously across machine cycles.
- [C] CPU buses operate under asynchronous handshaking while system buses operate purely on synchronous clocking.
- [D] Demultiplexing on the CPU bus would increase internal power dissipation of the silicon substrate beyond permissible thermal limits.

**Correct Answer:** **[B] The CPU bus is limited by IC physical packaging pin constraints (40 pins), whereas standard system peripheral cards require independent, stable address and data lines simultaneously across machine cycles.**  
**Teacher's Rationale & Trap Analysis:**  
Intel packed a full 16-bit processor with a 20-bit address bus into a standard 40-pin Dual In-line Package (DIP). To fit 20 address lines, 16 data lines, power, ground, and control lines, multiplexing (`AD0-AD15`, `A16/S3-A19/S6`) was mandatory. However, external slaves (RAM, EPROM, I/O ports) cannot decode an address that vanishes midway through a bus cycle while data is being transferred; hence, the system bus *must* provide physically separate, demultiplexed address, data, and control pathways.

---

#### Q1.5
During an 8086 Memory Read machine cycle, what are the logic levels driven by the processor on the transceiver control pins `DT/R#` (Data Transmit/Receive) and `DEN#` (Data Enable) during the data transfer phase ($T_2 - T_4$)?
- [A] `DT/R#` = 1, `DEN#` = 1
- [B] `DT/R#` = 1, `DEN#` = 0
- [C] `DT/R#` = 0, `DEN#` = 0
- [D] `DT/R#` = 0, `DEN#` = 1

**Correct Answer:** **[C] `DT/R#` = 0, `DEN#` = 0**  
**Teacher's Rationale & Trap Analysis:**  
`DT/R#` is active-HIGH for Transmit (CPU -> Memory/Write) and active-LOW for Receive (Memory -> CPU/Read). For a Read operation, `DT/R#` is driven LOW (0). `DEN#` is an active-LOW strobe that enables the bidirectional data bus transceivers (74LS245 / 8286). Therefore, during the active data transfer phase of a read cycle, both `DT/R#` and `DEN#` must be at logic 0.

---

#### Q1.6
How many 8-bit octal D-type latches (such as 74LS373) and how many 8-bit bidirectional bus transceivers (such as 74LS245/8286) are fundamentally required to fully demultiplex the 8086 CPU bus into a dedicated 20-bit system address bus and a 16-bit buffered system data bus?
- [A] 2 Latches and 2 Transceivers
- [B] 3 Latches and 2 Transceivers
- [C] 2 Latches and 3 Transceivers
- [D] 3 Latches and 3 Transceivers

**Correct Answer:** **[B] 3 Latches and 2 Transceivers**  
**Teacher's Rationale & Trap Analysis:**  
- **Address Demultiplexing:** The 8086 outputs 20 address bits (`AD0-AD15` + `A16-A19/S3-S6`) plus `BHE#` (often latched alongside address lines). To latch 20 bits (or 21 bits including `BHE#`), an 8-bit latch can hold 8 bits. Thus, $\lceil 20 / 8 \rceil = 3$ octal latches (74LS373) are required ($3 \times 8 = 24$ latching capacity).  
- **Data Buffering:** The data bus is 16 bits wide (`D0-D15`). Each bidirectional transceiver (74LS245) buffers 8 bits. Hence, $16 / 8 = 2$ transceivers are required.

---

#### Q1.7
Consider an EPROM chip with capacity specified as **32 Kilobytes** ($32\text{ KB} \times 8$). How many physical address lines are required to access every individual byte location within this EPROM chip?
- [A] 13 address lines
- [B] 14 address lines
- [C] 15 address lines
- [D] 16 address lines

**Correct Answer:** **[C] 15 address lines**  
**Teacher's Rationale & Trap Analysis:**  
$$32\text{ KB} = 32 \times 2^{10}\text{ bytes} = 2^5 \times 2^{10}\text{ bytes} = 2^{15}\text{ bytes}$$  
To uniquely address $2^{15}$ internal byte locations, exactly 15 address lines ($A_0 \text{ to } A_{14}$) must be routed directly to the chip's internal address decoder.

---

#### Q1.8
In an 8086 microprocessor system, a memory block of $64\text{ KB}$ is to be mapped into the physical address space starting at address `40000H`. What will be the exact ending physical address of this memory block?
- [A] `4FFFFH`
- [B] `50000H`
- [C] `4EFFFH`
- [D] `5FFFFH`

**Correct Answer:** **[A] `4FFFFH`**  
**Teacher's Rationale & Trap Analysis:**  
The size of the block is $64\text{ KB} = 65,536\text{ bytes} = 10000\text{H}$ bytes.  
The ending address is calculated as:  
$$\text{Ending Address} = \text{Starting Address} + \text{Size} - 1$$  
$$\text{Ending Address} = 40000\text{H} + 10000\text{H} - 1\text{H} = 50000\text{H} - 1\text{H} = 4\text{FFFFH}$$  
Trap: Students frequently forget the "$-1$" offset in zero-indexed address spaces and choose `50000H` (Option B).

---

#### Q1.9
A system designer connects the active-low Chip Enable (`CE#`) of a memory device to the output of a 3-to-8 line decoder (74LS138). If the decoder enable lines are correctly asserted, but the CPU issues an address during which the decoder inputs select an unmapped channel, what happens on the system data bus during a CPU read cycle?
- [A] The CPU immediately executes an internal Non-Maskable Interrupt (NMI).
- [B] The unselected memory device remains in high-impedance ($Hi\text{-}Z$), and the CPU reads floating bus data (typically perceived as `0FFH` due to bus pull-ups).
- [C] The 8086 asserts the `RESET` pin to prevent memory corruption.
- [D] The CPU enters an infinite Wait State ($T_w$) loop automatically.

**Correct Answer:** **[B] The unselected memory device remains in high-impedance ($Hi\text{-}Z$), and the CPU reads floating bus data (typically perceived as `0FFH` due to bus pull-ups).**  
**Teacher's Rationale & Trap Analysis:**  
When an address does not assert the `CE#` of any slave device, all slaves remain in their default high-impedance tristate condition. The bus floats. In TTL/CMOS systems with pull-up resistors, floating lines float high to logic 1 (`0FFH` or `0FFFFH`). The CPU does *not* know a device is absent unless external hardware fails to return `READY`—and in basic systems where `READY` is tied high, the CPU blindly reads `0FFH`.

---

#### Q1.10
In a typical microcomputer clock waveform, if a symmetrical clock generator provides an $8\text{ MHz}$ square wave to the 8086 CPU, what is the exact duration of a single basic $T$-state?
- [A] $250\text{ ns}$
- [B] $125\text{ ns}$
- [C] $200\text{ ns}$
- [D] $62.5\text{ ns}$

**Correct Answer:** **[B] $125\text{ ns}$**  
**Teacher's Rationale & Trap Analysis:**  
A single $T$-state is defined as one complete period ($T$) of the CPU clock:  
$$T = \frac{1}{f} = \frac{1}{8 \times 10^6\text{ Hz}} = 0.125 \times 10^{-6}\text{ s} = 125\text{ ns}$$

---

### SECTION B: FILL IN THE BLANKS
*(Carefully formulated technical completions testing precise terminology and architectural parameters)*

1. The fundamental electrical condition where a digital IC pin is disconnected from both supply rails and neither sources nor sinks current is called the **_______________** state.  
   *Answer:* **High-impedance (or Hi-Z / Tristate open-circuit)**  
   *Context:* Essential for shared multi-drop buses to prevent bus fighting.

2. In an 8086 microcomputer, the group of multiplexed lines directly originating at the processor pins is designated as the **_______________** bus, whereas the demultiplexed, buffered lines distributed across the motherboard form the **_______________** bus.  
   *Answer:* **CPU; System**  
   *Context:* Notes page 1.2 distinguishes the multiplexed CPU bus from the non-multiplexed system bus.

3. The duration of the address validity pulse on the 8086 `ALE` line is confined strictly to the **_______________** state of a standard 4-clock machine cycle.  
   *Answer:* **$T_1$ (first clock state)**  
   *Context:* `ALE` transitions high and then low only during $T_1$.

4. In a microprocessor memory interface using a 74LS138 (3:8 active-low decoder), if address lines $A_{19}, A_{18}, A_{17}$ are connected to select inputs $C, B, A$ respectively, the memory space is partitioned into **_______________** distinct blocks of **_______________** Kilobytes each.  
   *Answer:* **8; 128**  
   *Context:* 20 address lines total ($1\text{ MB}$). With 3 high-order lines decoded, each block spans $2^{17} = 131,072\text{ bytes} = 128\text{ KB}$.

5. The bidirectional octal bus transceiver widely used in 8086 systems to interface data lines has part number 74LS245 (or 8286); its data flow direction is controlled by the 8086 pin **_______________**, while its output buffer is enabled by the active-low pin **_______________**.  
   *Answer:* **`DT/R#` (Data Transmit/Receive); `DEN#` (Data Enable)**  
   *Context:* Crucial hardware demultiplexing interface signals.

6. If a static RAM chip has an address range spanning from `30000H` to `37FFFH`, the absolute storage capacity of this chip is exactly **_______________** Kilobytes.  
   *Answer:* **32**  
   *Context:* Span = $37\text{FFFH} - 30000\text{H} + 1\text{H} = 8000\text{H} = 8 \times 4096 = 32,768\text{ bytes} = 32\text{ KB}$.

7. The memory word size (addressability) in an 8086 microprocessor-based system is **_______________** bits, which allows individual byte-level addressing across its entire $1\text{ MB}$ space.  
   *Answer:* **8**  
   *Context:* Notes page 1.1 explicitly defines memory word size / addressability as 8-bit for 8086.

8. When multiple tristate devices share a common data bus, simultaneous activation of more than one device's output buffers causes a catastrophic hardware fault condition known as **_______________**.  
   *Answer:* **Bus contention (or Bus collision / Bus fight)**  
   *Context:* Tristate logic prevents simultaneous drivers from destroying output transistors.

---

### SECTION C: TRUE OR FALSE STATEMENTS
*(Conceptual statements with mandatory technical justifications)*

#### Q1.11
**Statement:** In an 8086-based system, the address bus is inherently bidirectional because data can be transferred both into and out of memory locations.  
**Answer:** **FALSE**  
**Justification:** The address bus is strictly **unidirectional**; the microprocessor alone issues addresses to designate memory or I/O locations. The *data bus* is bidirectional, allowing two-way transfer between the processor and peripherals.

---

#### Q1.12
**Statement:** The `ALE` signal generated by the 8086 microprocessor is active-low and remains low throughout the entire execution of an instruction.  
**Answer:** **FALSE**  
**Justification:** `ALE` is an **active-HIGH** pulse. It is asserted high during the first half of clock cycle $T_1$ and returns low before the end of $T_1$ to latch the address into external 74LS373 latches.

---

#### Q1.13
**Statement:** An electrical open-circuit condition created by a tristate logic gate in the high-impedance state causes the bus line voltage to instantly collapse to zero volts.  
**Answer:** **FALSE**  
**Justification:** A high-impedance ($Hi\text{-}Z$) pin is electrically disconnected; it neither drives high nor pulls low. The voltage on the bus line is undetermined (floating) and will float to logic HIGH (+5V) if pull-up resistors are present on the bus.

---

#### Q1.14
**Statement:** A microprocessor with 16 physical address lines can directly address a maximum physical memory space of 64 Kilobytes, assuming 8-bit addressability.  
**Answer:** **TRUE**  
**Justification:** Memory locations $= 2^{16} = 65,536\text{ bytes} = 64\text{ KB}$. With byte-addressability, total capacity is exactly $64\text{ KB}$.

---

#### Q1.15
**Statement:** During demultiplexing, external 74LS373 latches must retain the 20-bit address stable across clock states $T_2$, $T_3$, and $T_4$, even though the 8086 processor disconnects the address from pins `AD0-AD15` at the end of $T_1$.  
**Answer:** **TRUE**  
**Justification:** External memory chips require the address lines to remain valid and stable throughout the entire read/write access time ($T_2$ through $T_4$). The 74LS373 latches freeze the address at the falling edge of $T_1$ and maintain it until the next $T_1$.

---

#### Q1.16
**Statement:** System buses allow multiplexing of address and data lines to reduce the manufacturing cost of printed circuit boards (PCBs).  
**Answer:** **FALSE**  
**Justification:** Multiplexing is strictly forbidden on system buses. Slaves and memory chips require dedicated, unshared address and data lines simultaneously during data exchange. Multiplexing exists only on the CPU bus due to IC package pin limitations.

---

#### Q1.17
**Statement:** EPROM memories are non-volatile and are traditionally mapped to store bootstrap/initialization programs, whereas static RAM is volatile and stores operational data.  
**Answer:** **TRUE**  
**Justification:** EPROMs retain data without power, making them ideal for holding reset initialization code (BIOS/Monitor), whereas RAM loses data upon power-down.

---

#### Q1.18
**Statement:** When the 8086 processor performs a write operation to memory, the `DT/R#` pin is driven LOW to receive data back from the memory latch.  
**Answer:** **FALSE**  
**Justification:** During a write cycle, the CPU *transmits* data from its internal registers to memory. Therefore, `DT/R#` is driven HIGH (logic 1) to configure the bidirectional data buffers for output transmission.

---

### SECTION D: 3 MARKS QUESTIONS
*(Medium-level analytical and derivation questions. Includes complete Model Answers and Marking Schemes)*

#### Q1.19
**Question:** Differentiate clearly between a **CPU Bus** and a **System Bus** in an 8086 microcomputer. Explain why an intermediate CPU Interface circuit is indispensable.  
**Model Answer:**
1. **CPU Bus:** The group of conducting lines directly connected to the pins of the 8086 microprocessor. It contains time-multiplexed signals (e.g., `AD0-AD15` carrying address in $T_1$ and data in $T_2-T_4$; `A16/S3-A19/S6` carrying address in $T_1$ and status in $T_2-T_4$).
2. **System Bus:** The group of conducting lines distributed throughout the system to interface memory and I/O devices. It is strictly demultiplexed; separate lines exist concurrently for address, data, and control.
3. **Necessity of CPU Interface:** Memory and peripheral ICs cannot process multiplexed lines directly because they need a stable address while reading/writing data. The CPU interface circuit uses latches (controlled by `ALE`) and transceivers (controlled by `DEN#`, `DT/R#`) to convert the multiplexed CPU bus into a permanent, stable system bus.  
**Marking Scheme:**
- Distinction between CPU Bus and System Bus: **1.5 Marks**
- Clear justification for the CPU Interface circuit: **1.5 Marks**

---

#### Q1.20
**Question:** Explain the electrical concept of **Tristate Logic** in microprocessor systems. Why is the high-impedance ($Hi\text{-}Z$) state critical for multi-device bus operation?  
**Model Answer:**
1. **Tristate Logic:** Unlike conventional digital logic having two states (Logic 0 and Logic 1), tristate devices feature a third state: the **High-Impedance ($Hi\text{-}Z$) state**.
2. **Electrical Characteristics:** In the $Hi\text{-}Z$ state, both the pull-up and pull-down transistors in the output buffer are turned OFF. The pin behaves as an electrical open-circuit, neither driving high (+5V) nor sinking current to ground (0V).
3. **System Importance:** Microprocessor systems utilize a shared multi-drop system bus connected to multiple memory chips and peripheral ports. Only one device must drive the bus at any given instant. Devices not selected by their Chip Enable (`CE#`) line stay in $Hi\text{-}Z$. Without tristate logic, multiple outputs would drive opposing voltages simultaneously, causing high short-circuit currents, device burnout, and signal corruption (**bus contention**).  
**Marking Scheme:**
- Definition of 3 states and open-circuit behavior: **1.5 Marks**
- Explanation of bus sharing and prevention of bus contention: **1.5 Marks**

---

#### Q1.21
**Question:** A memory subsystem is designed with four $16\text{ KB}$ EPROM chips.  
(a) Determine the number of internal address lines required for each chip.  
(b) Calculate the total memory capacity of the subsystem in Kilobytes and Hexadecimal span.  
(c) How many address lines are required to select one of the four chips?  
**Model Answer:**
(a) Each chip has capacity $16\text{ KB} = 16 \times 1024\text{ bytes} = 16,384\text{ bytes} = 2^{14}\text{ bytes}$.  
    Therefore, **14 address lines** ($A_0 \text{ to } A_{13}$) are connected directly to each chip.  
(b) Total Capacity $= 4 \times 16\text{ KB} = \mathbf{64\text{ KB}}$.  
    In hexadecimal, $64\text{ KB} = 65,536\text{ bytes} = \mathbf{10000\text{H}}$ bytes (address span of length $10000\text{H}$).  
(c) To select one chip among four chips ($2^2 = 4$), a **2-to-4 decoder** is required, which utilizes **2 address lines** ($A_{14}$ and $A_{15}$).  
**Marking Scheme:**
- (a) Internal address lines calculation: **1 Mark**
- (b) Total capacity and hex span: **1 Mark**
- (c) Chip select decoding lines: **1 Mark**

---

#### Q1.22
**Question:** Sketch and describe the operational role of the control signals `ALE`, `DEN#`, and `DT/R#` generated by the 8086 during address and data bus demultiplexing.  
**Model Answer:**
1. **`ALE` (Address Latch Enable):** An active-high pulse issued by the 8086 during clock state $T_1$. Its falling edge enables external 74LS373 latches to capture and freeze the 20-bit address from `AD0-AD15` and `A16-A19`.
2. **`DT/R#` (Data Transmit / Receive):** A direction-control signal for external bidirectional transceivers (74LS245). It is asserted HIGH during write operations (CPU transmitting data) and asserted LOW during read operations (CPU receiving data).
3. **`DEN#` (Data Enable):** An active-LOW strobe issued during $T_2, T_3, T_4$. It enables the output buffers of the 74LS245 transceivers, ensuring that data is connected to the system data bus only when address latching has completed, preventing address-data bus conflicts.  
**Marking Scheme:**
- Role and timing of `ALE`: **1 Mark**
- Role and logic levels of `DT/R#`: **1 Mark**
- Role and timing of `DEN#`: **1 Mark**

---

#### Q1.23
**Question:** An engineer maps an $8\text{ KB}$ SRAM chip such that its starting address is `28000H`. Determine:  
(a) The ending address of this memory block in hexadecimal.  
(b) The binary range of address lines $A_{19} \text{ to } A_0$ for this block.  
**Model Answer:**
(a) Capacity $= 8\text{ KB} = 8 \times 1024\text{ bytes} = 8192\text{ bytes} = 2000\text{H}$ bytes.  
    $$\text{Ending Address} = \text{Starting Address} + \text{Capacity} - 1$$  
    $$\text{Ending Address} = 28000\text{H} + 2000\text{H} - 1\text{H} = 2\text{A}000\text{H} - 1\text{H} = \mathbf{29\text{FFFH}}$$  
(b) Binary Address Range:  
    - Starting Address `28000H` = `0010 1000 0000 0000 0000` ($A_{19}-A_0$)  
    - Ending Address `29FFFH` = `0010 1001 1111 1111 1111` ($A_{19}-A_0$)  
    Notice that address lines $A_{12}-A_0$ vary from all 0s to all 1s (13 lines for $8\text{ KB}$), while higher lines $A_{19}-A_{13}$ remain fixed at `0010 100` to select this block.  
**Marking Scheme:**
- Correct calculation of ending address `29FFFH`: **1.5 Marks**
- Correct binary breakdown and identification of fixed/variable lines: **1.5 Marks**

---

#### Q1.24
**Question:** Explain the difference between **Memory Address** and **Memory Addressability (Word Size)**. State their values for the Intel 8086 processor.  
**Model Answer:**
1. **Memory Address:** The unique binary identification number assigned to each individual storage location in the memory system. For the Intel 8086, the address bus is 20 bits wide, enabling $2^{20} = 1,048,576$ ($1\text{ MB}$) distinct addresses ranging from `00000H` to `FFFFFH`.
2. **Memory Addressability (Memory Word Size):** The number of bits stored in each uniquely addressable memory location. In an 8086-based microcomputer system, the memory addressability is **8 bits (1 byte)**.
3. **Contrast:** Even though the 8086 is a 16-bit processor (it can process 16-bit words internally and transfer 16 bits in a single bus cycle), its memory is physically byte-addressable, meaning every consecutive address stores exactly one 8-bit byte.  
**Marking Scheme:**
- Clear definition of Memory Address and 8086 specification (20-bit): **1.5 Marks**
- Clear definition of Memory Addressability and 8086 specification (8-bit): **1.5 Marks**

---

### SECTION E: 5 MARKS QUESTIONS
*(Comprehensive design, calculation, and circuit explanation problems with step-by-step solutions)*

#### Q1.25
**Question:** With the aid of a neat, well-labeled schematic diagram, explain the complete **Bus Demultiplexing Circuit** of the Intel 8086 microprocessor in Minimum Mode. Show clearly how the multiplexed lines `AD0-AD15` and `A16/S3-A19/S6` are demultiplexed into a dedicated 20-bit System Address Bus and a buffered 16-bit System Data Bus using 74LS373 latches and 74LS245 transceivers. Specify the exact function of `ALE`, `DEN#`, and `DT/R#`.  
**Model Answer:**
```
                     +----------------------------------+
                     |            INTEL 8086            |
                     |          (MINIMUM MODE)          |
                     |                                  |
                     |          AD0 - AD7  [Pin 9-16]   |======+
                     |          AD8 - AD15 [Pin 2-8,39] |======|====+
                     |       A16/S3 - A19/S6 [35-38]    |======|====|====+
                     |          BHE#/S7 [Pin 34]        |======|====|====|====+
                     |                                  |      |    |    |    |
                     |          ALE [Pin 25] ----------->(LE)  |    |    |    |
                     |                                  |  |   |    |    |    |
                     |          DEN# [Pin 26] ---------->  |   |    |    |    |
                     |          DT/R# [Pin 27] --------->  |   |    |    |    |
                     +----------------------------------+  |   |    |    |    |
                                                           |   |    |    |    |
         +-------------------------------------------------+   |    |    |    |
         |         (Connects to Latch Enable 'G' / 'LE')       |    |    |    |
         |                                                     |    |    |    |
         v                                                     v    v    v    v
  +--------------+                                      +-----------------------+
  |  3 x 74LS373 | <====================================| AD0-AD15, A16-A19/S,  |
  |  OCTAL D-    |                                      | BHE#/S7 (from 8086)   |
  |   LATCHES    |                                      +-----------------------+
  | (Transparent)|
  |              | ---> Latches address on falling edge of ALE in T1
  +--------------+
         ||
         v
  =========================================
  DEDICATED SYSTEM ADDRESS BUS (A0 - A19) + BHE# (Stable T1 - T4)
  =========================================

         +--------------------------------------------------+
         | DEN# (Connects to active-low Output Enable OE#)  |
         | DT/R# (Connects to Direction control DIR)        |
         v                                                  v
  +--------------+
  |  2 x 74LS245 | <==================================> MULTIPLEXED AD0 - AD15
  | BIDIRECTIONAL|                                      (during T2, T3, T4)
  | TRANSCEIVERS |
  +--------------+
         ||
         v
  =========================================
  BUFFERED SYSTEM DATA BUS (D0 - D15)
  =========================================
```

**Step-by-Step Circuit Explanation:**
1. **Need for Demultiplexing:** The 8086 CPU bus shares pins `AD0-AD15` for address (during $T_1$) and data (during $T_2-T_4$). Likewise, pins 35–38 share address lines `A16-A19` (during $T_1$) with status lines `S3-S6` (during $T_2-T_4$). External memories require stable address lines throughout the cycle.
2. **Address Latching via 74LS373:**
   - Three 74LS373 octal transparent D-latches are deployed (providing $3 \times 8 = 24$ bits capacity).
   - Inputs $D_0-D_7$ of Latch 1 connect to `AD0-AD7`; Latch 2 connects to `AD8-AD15`; Latch 3 connects to `A16/S3 - A19/S6` and `BHE#/S7`.
   - The Latch Enable ($LE$) inputs of all three latches are tied to the 8086 `ALE` pin.
   - During $T_1$, the 8086 outputs the address and pulses `ALE` HIGH. At the falling edge of `ALE`, the latches freeze the 20-bit address ($A_0-A_{19}$) and `BHE#`. The latched outputs remain stable and available on the System Address Bus across $T_2, T_3, T_4$.
3. **Data Buffering via 74LS245:**
   - Two 74LS245 octal bus transceivers buffer the 16-bit data bus (`D0-D7` and `D8-D15`).
   - The active-low Output Enable ($\overline{OE}$) pins are driven by 8086 `DEN#`. During $T_1$, `DEN#` is HIGH, isolating the transceivers to prevent address bits from bleeding into the data lines. During $T_2-T_4$, `DEN#` is asserted LOW, enabling data transmission.
   - The Direction pin ($DIR$) of the 74LS245 is connected to 8086 `DT/R#`. If `DT/R#` is HIGH (write cycle), data flows from CPU to memory/peripheral ($A \rightarrow B$). If `DT/R#` is LOW (read cycle), data flows from memory/peripheral into the CPU ($B \rightarrow A$).  
**Marking Scheme:**
- Clear, correct circuit schematic showing 8086, 74LS373, 74LS245, and bus widths: **2 Marks**
- Explanation of address latching mechanism and `ALE` timing: **1.5 Marks**
- Explanation of data transceivers, `DEN#`, and `DT/R#` operation: **1.5 Marks**

---

#### Q1.26
**Question:** Design an address decoding interface for an 8086-based system requiring **128 Kilobytes of RAM** implemented using **two 64K $\times$ 8 RAM chips** (one in the Even Bank and one in the Odd Bank) and **64 Kilobytes of EPROM** implemented using **two 32K $\times$ 8 EPROM chips**.  
The address mapping requirements are:  
- EPROM space: Must occupy the top of memory terminating at `FFFFFH`.  
- RAM space: Must start at address `00000H`.  
Calculate the complete address map (starting and ending addresses in hexadecimal), identify the required address lines for internal addressing, and design the chip-select decoding scheme using a 3-to-8 decoder (74LS138).  
**Model Answer:**
**1. Capacity and Address Lines for Each Chip:**
- **EPROM Subsystem ($64\text{ KB}$ total):**  
  Composed of two $32\text{ KB} \times 8$ chips.  
  Capacity per chip $= 32\text{ KB} = 2^{15}\text{ bytes}$.  
  Therefore, each EPROM chip requires **15 internal address lines** ($A_1 \text{ to } A_{15}$). Address line $A_0$ and `BHE#` are used for bank qualification (Even/Odd).
- **RAM Subsystem ($128\text{ KB}$ total):**  
  Composed of two $64\text{ KB} \times 8$ chips.  
  Capacity per chip $= 64\text{ KB} = 2^{16}\text{ bytes}$.  
  Therefore, each RAM chip requires **16 internal address lines** ($A_1 \text{ to } A_{16}$).

**2. Address Map Calculations:**
- **EPROM Address Map:**  
  Total size $= 64\text{ KB} = 10000\text{H}$ bytes.  
  Ending address $= \mathbf{FFFFFH}$ (mandated top of 8086 memory for reset).  
  $$\text{Starting Address} = \text{Ending Address} - \text{Size} + 1 = \text{FFFFFH} - 10000\text{H} + 1\text{H} = \mathbf{F0000H}$$  
  Hex Range for EPROM: **`F0000H` to `FFFFFH`**  
  Binary for `F0000H` = `1111 0000 0000 0000 0000`  
  Binary for `FFFFFH` = `1111 1111 1111 1111 1111`  
  Lines $A_{19}, A_{18}, A_{17}, A_{16}$ are all **`1 1 1 1`**.
- **RAM Address Map:**  
  Total size $= 128\text{ KB} = 20000\text{H}$ bytes.  
  Starting address $= \mathbf{00000H}$.  
  $$\text{Ending Address} = \text{Starting Address} + \text{Size} - 1 = 00000\text{H} + 20000\text{H} - 1\text{H} = \mathbf{1FFFFH}$$  
  Hex Range for RAM: **`00000H` to `1FFFFH`**  
  Binary for `00000H` = `0000 0000 0000 0000 0000`  
  Binary for `1FFFFH` = `0001 1111 1111 1111 1111`  
  Lines $A_{19}, A_{18}, A_{17}$ are all **`0 0 0`** (covering `00000H` to `1FFFFH`).

**3. Decoding Logic Scheme (using 74LS138):**
- Connect 74LS138 inputs:  
  - $C = A_{19}$, $B = A_{18}$, $A = A_{17}$.  
  - Enable inputs: $G_1 = \text{M/IO#}$ (ensures decoder is active only during memory operations, not I/O), $\overline{G_{2A}} = \text{GND}$, $\overline{G_{2B}} = \text{GND}$.
- When $A_{19} A_{18} A_{17} = 0 0 0$, output $\overline{Y_0}$ is asserted LOW:  
  This covers the range `00000H` to `1FFFFH` ($128\text{ KB}$). $\overline{Y_0}$ is used as the Master Chip Select for the **$128\text{ KB}$ RAM**.
- For EPROM (`F0000H - FFFFFH`), $A_{19} A_{18} A_{17} = 1 1 1$ (output $\overline{Y_7}$, covering `E0000H - FFFFFH` = $128\text{ KB}$). To isolate specifically `F0000H - FFFFFH` ($64\text{ KB}$), line $A_{16}$ must be HIGH. Thus, $\overline{Y_7}$ and $A_{16}$ are qualified through an external NAND/inverter gate:  
  $$\overline{\text{CS}_{\text{EPROM}}} = \overline{Y_7 \cdot A_{16}}$$  
  This output asserts LOW only when $A_{19} A_{18} A_{17} A_{16} = 1 1 1 1$, precisely selecting the EPROM.  
**Marking Scheme:**
- Correct calculation of EPROM and RAM address maps (hex & binary): **2 Marks**
- Identification of internal address lines per chip and bank requirements: **1 Mark**
- Complete 74LS138 decoder pin assignment and gate logic equations: **2 Marks**

---

#### Q1.27
**Question:** Explain the timing sequence of a generalized **Clock Cycle ($T$-states)** in a microcomputer system. With reference to signal edges (rising edge, level edge, falling edge), explain why digital memory and latch devices are made sensitive to specific transitions rather than static voltage levels.  
**Model Answer:**
1. **Definition of Clock & $T$-State:**  
   The system clock is an asymmetric or symmetric square wave that governs every internal step of the microprocessor. The time period of one complete clock cycle is called a **$T$-state**. The total execution time of every instruction is an integer multiple of $T$-states ($T = 1/f$).
2. **Clock Anatomy:**  
   A clock pulse possesses three distinct operational regions:
   - **Rising (Positive) Edge:** Fast transition from $0\text{ V}$ (logic 0) to $+5\text{ V}$ (logic 1).
   - **Level (High/Low) State:** The stable duration during which the signal remains at logic 1 or logic 0.
   - **Falling (Negative) Edge:** Fast transition from $+5\text{ V}$ back to $0\text{ V}$.
3. **Edge-Triggering vs Level-Triggering:**
   - If digital storage devices (such as latches, flip-flops, and counters) were purely level-sensitive, any data input fluctuation or race condition occurring while the clock level remains HIGH would propagate uncontrolled through the internal logic (the classic "race-around condition").
   - By making latches and registers **edge-sensitive** (e.g., triggering on the falling edge of `ALE` or the rising edge of clock/write strobe), state changes are permitted **only during the infinitesimal picosecond transition window** of the edge.
   - This guarantees that inputs have satisfied the required **Setup Time ($t_{su}$)** and are maintained for the required **Hold Time ($t_h$)**, preventing meta-stability and ensuring strict synchronous operation across the entire microcomputer bus.  
**Marking Scheme:**
- Definition of clock period and $T$-state with mathematical relation: **1.5 Marks**
- Explanation of the three clock regions with diagrams/descriptions: **1.5 Marks**
- Analytical justification of edge-triggering, prevention of race conditions, and setup/hold stability: **2 Marks**

---

#### Q1.28
**Question:** A microprocessor system bus has an 8-bit bidirectional data bus connected to multiple memory devices.  
(a) What electrical fault occurs if two memory chips drive the bus simultaneously with opposing logic levels (`0` and `1`)?  
(b) Calculate the typical short-circuit current if a TTL output driving HIGH ($V_{OH} = 3.5\text{ V}$, internal resistance $R_1 \approx 70\,\Omega$) conflicts with a TTL output driving LOW ($V_{OL} = 0.4\text{ V}$, internal saturation resistance $R_2 \approx 10\,\Omega$).  
(c) Explain how address decoding and active-low chip select strobes prevent this catastrophe.  
**Model Answer:**
(a) **Bus Contention (Bus Fight):** When two output stages simultaneously connect to the same conducting line, one trying to pull the line to $+5\text{ V}$ (Logic 1) and the other trying to pull it to Ground (Logic 0), a low-resistance path is established directly across the power supply.  
(b) **Short-Circuit Current Calculation:**  
    The net voltage difference across the conflicting driver stages is:  
    $$\Delta V = V_{OH} - V_{OL} = 3.5\text{ V} - 0.4\text{ V} = 3.1\text{ V}$$  
    The total series resistance is:  
    $$R_{\text{total}} = R_1 + R_2 = 70\,\Omega + 10\,\Omega = 80\,\Omega$$  
    The resulting short-circuit contention current is:  
    $$I_{\text{contention}} = \frac{\Delta V}{R_{\text{total}}} = \frac{3.1\text{ V}}{80\,\Omega} \approx 38.75\text{ mA per line}$$  
    For an 8-bit bus where all 8 lines conflict, the total surge current exceeds:  
    $$I_{\text{surge}} = 8 \times 38.75\text{ mA} \approx \mathbf{310\text{ mA}}$$  
    This massive current surge causes severe overheating, silicon localized thermal breakdown (burnout of output totem-pole transistors), and creates inductive voltage drops on the power rails that reset or crash the CPU.  
(c) **Prevention Mechanism:**  
    - System address decoders (e.g., 74LS138) are mathematically mutually exclusive: only one output pin $\overline{Y_n}$ can be asserted LOW for any unique binary address combination.  
    - The Chip Select inputs (`CS#` / `CE#`) of memory devices are active-LOW. Therefore, only the uniquely selected chip exits the high-impedance state and connects its output buffers to the bus.  
    - All remaining unselected chips remain in high-impedance ($Hi\text{-}Z$), presenting an open circuit ($\approx 10\,\text{M}\Omega$, leakage current $< 10\,\mu\text{A}$), completely eliminating any possibility of bus contention.  
**Marking Scheme:**
- Identification of Bus Contention: **1 Mark**
- Numerical calculation of short-circuit contention current: **2 Marks**
- Clear explanation of mutual exclusion via decoders and active-low `CS#`: **2 Marks**
