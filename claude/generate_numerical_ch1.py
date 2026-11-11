import os
from pdf_builder_base import convert_markdown_string_to_pdf

ch1_md = """# INTEL 8086 MICROPROCESSOR — NUMERICAL & CALCULATION QUESTION BANK
## CHAPTER 1: BASIC CONCEPTS, MEMORY ADDRESSING, DEMULTIPLEXING & INTERFACING
**Focus Area:** Pure Numerical Problems, Address Calculations, Bus Timing & Hardware Interfacing  
**Course:** Microprocessors / Computer Architecture  
**Prepared by:** Senior Faculty & Examination Paper Setter (20+ Years Experience)  
**Syllabus Restrictions:** Strictly adheres to Mid-Sem Planner (Excludes Historical Microprocessor Generations and Pentium-era material).

---

### SECTION A: MULTIPLE CHOICE NUMERICAL QUESTIONS (MCQs)
*(1 Mark Each. High-level calculations testing address line equations, timing math, and bus electrical parameters)*

#### Q1.1
An embedded microprocessor architecture has 22 physical address lines and is word-addressable (addressability = 16 bits per unique address location). What is the total physical memory capacity addressable by this CPU?
- [A] 4 Megabytes
- [B] 8 Megabytes
- [C] 16 Megabytes
- [D] 2 Megabytes

**Correct Answer:** **[B] 8 Megabytes**  
**Step-by-Step Numerical Solution:**  
Total Physical Memory Capacity is governed by:  
$$\\text{Memory Capacity} = 2^n \\times \\text{Addressability}$$  
Given:  
- Number of address lines $n = 22 \\implies 2^{22} = 4,194,304$ unique memory locations.  
- Addressability = 16 bits = 2 bytes per location.  
$$\\text{Capacity} = 2^{22} \\times 2\\text{ bytes} = 2^{23}\\text{ bytes} = 8\\text{ Megabytes (MB)}$$  
*(Trap Analysis: Students assuming byte-addressability choose 4 MB [A].)*

---

#### Q1.2
An Intel 8086 microprocessor is driven by a system clock generator operating at a frequency of $5\\text{ MHz}$. What is the exact time duration of a single basic $T$-state, and what is the total execution time of a standard four-clock ($4\\text{ }T$-states) machine cycle without wait states?
- [A] $T = 125\\text{ ns}$; Cycle Time = $500\\text{ ns}$
- [B] $T = 200\\text{ ns}$; Cycle Time = $800\\text{ ns}$
- [C] $T = 250\\text{ ns}$; Cycle Time = $1000\\text{ ns}$
- [D] $T = 100\\text{ ns}$; Cycle Time = $400\\text{ ns}$

**Correct Answer:** **[B] $T = 200\\text{ ns}$; Cycle Time = $800\\text{ ns}$**  
**Step-by-Step Numerical Solution:**  
Clock Period ($1\\text{ }T$-state):  
$$T = \\frac{1}{f_{\\text{CLK}}} = \\frac{1}{5 \\times 10^6\\text{ Hz}} = 0.2 \\times 10^{-6}\\text{ s} = 200\\text{ ns}$$  
Standard bus cycle comprises $4\\text{ }T$-states ($T_1, T_2, T_3, T_4$):  
$$\\text{Bus Cycle Duration} = 4 \\times T = 4 \\times 200\\text{ ns} = \\mathbf{800\\text{ ns}}$$

---

#### Q1.3
A circuit designer connects two TTL bus drivers to a common line without proper tristate decoding. During a fault condition, Driver A outputs Logic HIGH ($V_{OH} = 3.6\\text{ V}$ with internal source resistance $R_{OH} = 60\\,\\Omega$), while Driver B simultaneously outputs Logic LOW ($V_{OL} = 0.4\\text{ V}$ with internal sink resistance $R_{OL} = 20\\,\\Omega$). What is the short-circuit contention current flowing between the two drivers on this single bus line?
- [A] $20.0\\text{ mA}$
- [B] $40.0\\text{ mA}$
- [C] $45.0\\text{ mA}$
- [D] $53.3\\text{ mA}$

**Correct Answer:** **[B] $40.0\\text{ mA}$**  
**Step-by-Step Numerical Solution:**  
The net potential difference driving current through the fault path is:  
$$\\Delta V = V_{OH} - V_{OL} = 3.6\\text{ V} - 0.4\\text{ V} = 3.2\\text{ V}$$  
Total series resistance in the contention path:  
$$R_{\\text{path}} = R_{OH} + R_{OL} = 60\\,\\Omega + 20\\,\\Omega = 80\\,\\Omega$$  
Contention current per line:  
$$I_{\\text{contention}} = \\frac{\\Delta V}{R_{\\text{path}}} = \\frac{3.2\\text{ V}}{80\\,\\Omega} = 0.040\\text{ A} = \\mathbf{40.0\\text{ mA}}$$

---

#### Q1.4
In an 8086 memory decoding system, a 3-to-8 line active-low decoder (74LS138) has its select inputs $C, B, A$ connected to address lines $A_{19}, A_{18}, A_{17}$ respectively. What is the physical storage span allocated to each active-low output pin ($\\overline{Y_0}$ to $\\overline{Y_7}$)?
- [A] $64\\text{ Kilobytes}$
- [B] $128\\text{ Kilobytes}$
- [C] $256\\text{ Kilobytes}$
- [D] $512\\text{ Kilobytes}$

**Correct Answer:** **[B] $128\\text{ Kilobytes}$**  
**Step-by-Step Numerical Solution:**  
The 8086 has a 20-bit address bus ($A_{19}-A_0$).  
Address lines $A_{19}, A_{18}, A_{17}$ (3 lines) are decoded, leaving $20 - 3 = 17$ un-decoded lower address lines ($A_{16}-A_0$).  
The address capacity assigned to each decoder output is:  
$$\\text{Block Size} = 2^{17}\\text{ bytes} = 131,072\\text{ bytes} = \\mathbf{128\\text{ Kilobytes (KB)}}$$

---

#### Q1.5
A $64\\text{ KB}$ SRAM block is mapped into the 8086 physical memory space starting at hexadecimal address `70000H`. What is the exact ending physical address of this memory block?
- [A] `7FFFFH`
- [B] `80000H`
- [C] `7EFFFH`
- [D] `8FFFFH`

**Correct Answer:** **[A] `7FFFFH`**  
**Step-by-Step Numerical Solution:**  
Block capacity $= 64\\text{ KB} = 65,536\\text{ bytes} = 10000\\text{H}$ bytes.  
$$\\text{Ending Address} = \\text{Starting Address} + \\text{Block Size} - 1$$  
$$\\text{Ending Address} = 70000\\text{H} + 10000\\text{H} - 1\\text{H} = 80000\\text{H} - 1\\text{H} = \\mathbf{7FFFFH}$$

---

#### Q1.6
A static EPROM chip is specified with a capacity of $32\\text{K} \\times 8$ bits. How many physical address pins ($A_0, A_1, \\dots$) must this chip possess on its package to allow independent access to every byte location?
- [A] 13 pins
- [B] 14 pins
- [C] 15 pins
- [D] 16 pins

**Correct Answer:** **[C] 15 pins**  
**Step-by-Step Numerical Solution:**  
Number of byte locations $= 32\\text{K} = 32 \\times 1024 = 32,768\\text{ locations}$.  
Expressing in powers of 2:  
$$32,768 = 2^{15}$$  
Hence, exactly **15 address lines** ($A_0 \\text{ to } A_{14}$) are required.

---

#### Q1.7
How many memory chips of capacity $64\\text{K} \\times 8$ are mathematically required to implement a total primary memory space of $256\\text{ Kilobytes}$ in an 8086 microcomputer?
- [A] 2 chips
- [B] 4 chips
- [C] 8 chips
- [D] 16 chips

**Correct Answer:** **[B] 4 chips**  
**Step-by-Step Numerical Solution:**  
$$\\text{Total Required Storage} = 256\\text{ KB} = 256 \\times 1024\\text{ bytes}$$  
$$\\text{Storage per Chip} = 64\\text{ KB} = 64 \\times 1024\\text{ bytes}$$  
$$\\text{Number of Chips} = \\frac{256\\text{ KB}}{64\\text{ KB}} = \\mathbf{4\\text{ chips}}$$  
*(In an 8086 system, these are configured as 2 chips in the Even Bank and 2 chips in the Odd Bank).*

---

#### Q1.8
An 8086 CPU operates at an internal clock frequency of $8\\text{ MHz}$. If a slow peripheral pulls the `READY` line low such that the processor inserts two Wait States ($2\\text{ }T_w$), what is the total duration of this memory bus cycle?
- [A] $500\\text{ ns}$
- [B] $625\\text{ ns}$
- [C] $750\\text{ ns}$
- [D] $1000\\text{ ns}$

**Correct Answer:** **[C] $750\\text{ ns}$**  
**Step-by-Step Numerical Solution:**  
$$T = \\frac{1}{8 \\times 10^6\\text{ Hz}} = 125\\text{ ns}$$  
Total clock cycles for the extended bus cycle:  
$$\\text{Cycles} = 4\\text{ basic states } (T_1, T_2, T_3, T_4) + 2\\text{ wait states } (T_w) = 6\\text{ }T\\text{-states}$$  
$$\\text{Total Duration} = 6 \\times 125\\text{ ns} = \\mathbf{750\\text{ ns}}$$

---

#### Q1.9
In an 8086 system, address lines $A_{19}, A_{18}, A_{17}, A_{16}, A_{15}, A_{14}$ are wired to a decoder such that the chip is enabled only when $A_{19}-A_{14} = 110010_2$. What is the hexadecimal physical address range allocated to this device?
- [A] `C8000H` to `C9FFFH`
- [B] `C8000H` to `CBFFFH`
- [C] `C0000H` to `C3FFFH`
- [D] `D8000H` to `DBFFFH`

**Correct Answer:** **[B] `C8000H` to `CBFFFH`**  
**Step-by-Step Numerical Solution:**  
Fixed upper bits ($A_{19}-A_{14}$):  
$A_{19} A_{18} A_{17} A_{16} = 1100_2 = \\text{C}_{16}$  
$A_{15} A_{14} = 10_2$.  
The lower 14 bits ($A_{13}-A_0$) vary from all 0s to all 1s:  
- **Starting Address:**  
  Binary: $1100\\ 1000\\ 0000\\ 0000\\ 0000_2 = \\mathbf{C8000H}$  
- **Ending Address:**  
  Binary: $1100\\ 1011\\ 1111\\ 1111\\ 1111_2 = \\mathbf{CBFFFH}$  
Total span $= 2^{14}\\text{ bytes} = 16\\text{ KB}$.

---

#### Q1.10
How many 8-bit octal D-type transparent latches (74LS373) are required to fully demultiplex the 8086 address lines $A_{19}-A_0$ together with the active-low Bus High Enable signal ($\\overline{\\text{BHE}}$)?
- [A] 2 latches
- [B] 3 latches
- [C] 4 latches
- [D] 5 latches

**Correct Answer:** **[B] 3 latches**  
**Step-by-Step Numerical Solution:**  
Total signals requiring latching during $T_1$:  
$$\\text{Signals} = 20\\text{ address lines } (A_{19}-A_0) + 1\\text{ bank enable } (\\overline{\\text{BHE}}) = 21\\text{ signals}$$  
Each 74LS373 provides 8 latching flip-flops.  
$$\\text{Latches Needed} = \\left\\lceil \\frac{21}{8} \\right\\rceil = \\left\\lceil 2.625 \\right\\rceil = \\mathbf{3\\text{ octal latches}}$$  
*(Capacity provided $= 3 \\times 8 = 24$ bits, leaving 3 spare inputs).*

---

### SECTION B: FILL IN THE BLANKS (NUMERICAL)
*(Rigorous numerical completions testing exact mathematical evaluations)*

1. A computer system featuring a 20-bit address bus and an addressability of 16 bits per word has an absolute physical memory capacity of exactly **_______________** Megabytes.  
   *Answer:* **2** ($2^{20} \\times 2\\text{ bytes} = 2\\text{ MB}$)

2. When the 8086 microprocessor is driven by a $10\\text{ MHz}$ clock, the time duration of one single $T$-state is **_______________** nanoseconds.  
   *Answer:* **100** ($T = 1 / 10\\text{ MHz} = 100\\text{ ns}$)

3. If an SRAM chip occupies physical memory locations from address `50000H` to `57FFFH`, its absolute storage capacity is **_______________** Kilobytes.  
   *Answer:* **32** ($57\\text{FFFH} - 50000\\text{H} + 1\\text{H} = 8000\\text{H} = 32,768\\text{ bytes} = 32\\text{ KB}$)

4. If a 74LS138 decoder partitions the $1\\text{ MB}$ address space into 8 symmetrical blocks using lines $A_{19}, A_{18}, A_{17}$, each individual block spans an address length of **_______________** hexadecimal bytes.  
   *Answer:* **`20000H`** ($128\\text{ KB} = 131,072 = 20000\\text{H}$)

5. To provide complete bidirectional buffering for the 8086 16-bit data bus (`AD0-AD15`), exactly **_______________** 8-bit bidirectional transceivers (74LS245) must be installed.  
   *Answer:* **2** ($16 / 8 = 2$)

6. In an 8086 system, the hexadecimal offset address of the final byte in a $16\\text{ KB}$ memory block starting at base address `0000H` is **_______________**.  
   *Answer:* **`3FFFH`** ($16\\text{ KB} - 1 = 16384 - 1 = 16383 = 3\\text{FFFH}$)

7. A microprocessor operating at a clock frequency of $6\\text{ MHz}$ executes a standard four-clock machine cycle in exactly **_______________** nanoseconds.  
   *Answer:* **666.67** ($4 \\times (1 / 6\\text{ MHz}) = 4 \\times 166.67\\text{ ns} = 666.67\\text{ ns}$)

8. To construct a contiguous $512\\text{ Kilobyte}$ memory space using memory chips each of size $64\\text{K} \\times 8$, a total of **_______________** chips are required.  
   *Answer:* **8** ($512 / 64 = 8$)

---

### SECTION C: TRUE OR FALSE WITH MATHEMATICAL JUSTIFICATION
*(Numerical and timing assertions requiring rigorous proof)*

#### Q1.11
**Statement:** A microprocessor with 24 address lines can directly address a maximum physical memory capacity of 16 Megabytes, assuming 8-bit byte addressability.  
**Answer:** **TRUE**  
**Mathematical Proof:**  
$$\\text{Capacity} = 2^{24}\\text{ bytes} = 16,777,216\\text{ bytes} = \\frac{16,777,216}{1024 \\times 1024} = \\mathbf{16\\text{ Megabytes}}$$

---

#### Q1.12
**Statement:** If the clock frequency supplied to an 8086 CPU is reduced from $8\\text{ MHz}$ to $4\\text{ MHz}$, the time taken to execute a memory read cycle is halved.  
**Answer:** **FALSE**  
**Mathematical Proof:**  
Cycle duration $T_{\\text{cycle}} = 4 / f$.  
- At $8\\text{ MHz}$: $T_{\\text{cycle}} = 4 / (8 \\times 10^6) = 500\\text{ ns}$.  
- At $4\\text{ MHz}$: $T_{\\text{cycle}} = 4 / (4 \\times 10^6) = 1000\\text{ ns}$.  
Reducing frequency **doubles** the execution time rather than halving it.

---

#### Q1.13
**Statement:** The hexadecimal address span from `A0000H` to `AFFFFH` represents a total capacity of 64 Kilobytes.  
**Answer:** **TRUE**  
**Mathematical Proof:**  
$$\\text{Span} = \\text{AFFFFH} - \\text{A0000H} + 1\\text{H} = \\text{0FFFFH} + 1\\text{H} = 10000\\text{H}$$  
$$10000\\text{H} = 16^4 = 65,536\\text{ bytes} = \\frac{65,536}{1024} = \\mathbf{64\\text{ KB}}$$

---

#### Q1.14
**Statement:** A $4\\text{K} \\times 8$ memory chip requires 11 address lines on its chip package.  
**Answer:** **FALSE**  
**Mathematical Proof:**  
$4\\text{K} = 4 \\times 1024 = 4096\\text{ locations}$.  
$4096 = 2^{12}$. Therefore, it requires **12 address lines** ($A_0-A_{11}$), not 11 (which only addresses $2^{11} = 2048$ bytes).

---

#### Q1.15
**Statement:** In an 8086 system running at $5\\text{ MHz}$, a memory read bus cycle with one wait state ($1\\text{ }T_w$) takes exactly $1.0\\,\\mu\\text{s}$.  
**Answer:** **TRUE**  
**Mathematical Proof:**  
$T = 1 / 5\\text{ MHz} = 200\\text{ ns}$.  
Cycles $= 4 + 1 = 5\\text{ }T\\text{-states}$.  
$$\\text{Total Duration} = 5 \\times 200\\text{ ns} = 1000\\text{ ns} = \\mathbf{1.0\\,\\mu\\text{s}}$$

---

#### Q1.16
**Statement:** The address block `30000H` to `33FFFH` contains exactly 16 Kilobytes of storage.  
**Answer:** **TRUE**  
**Mathematical Proof:**  
$$\\text{Span} = 33\\text{FFFH} - 30000\\text{H} + 1\\text{H} = 3\\text{FFFH} + 1\\text{H} = 4000\\text{H}$$  
$$4000\\text{H} = 4 \\times 16^3 = 4 \\times 4096 = 16,384\\text{ bytes} = \\mathbf{16\\text{ KB}}$$

---

#### Q1.17
**Statement:** During a bus fight across an 8-bit bus, if each line sinks $35\\text{ mA}$ of short-circuit contention current, the total transient surge current pulled from the power supply is $280\\text{ mA}$.  
**Answer:** **TRUE**  
**Mathematical Proof:**  
$$I_{\\text{surge}} = 8 \\times I_{\\text{line}} = 8 \\times 35\\text{ mA} = \\mathbf{280\\text{ mA}}$$

---

#### Q1.18
**Statement:** A 74LS138 active-low 3-to-8 decoder asserts all 8 of its output pins LOW simultaneously when enabled.  
**Answer:** **FALSE**  
**Mathematical Proof:**  
The decoder is mutually exclusive. For any given 3-bit input combination ($CBA$), exactly **one output pin** $\\overline{Y_n}$ is asserted LOW, while the remaining 7 outputs remain HIGH (+5V).

---

### SECTION D: 3 MARKS NUMERICAL QUESTIONS
*(Analytical derivation problems with complete step-by-step calculations and point-wise marking schemes)*

#### Q1.19
**Question:** A microprocessor has 16 address lines ($A_{15}-A_0$).  
(a) Calculate the maximum addressable memory capacity if the system is byte-addressable (8-bit word).  
(b) Calculate the maximum addressable memory capacity if the system is word-addressable (16-bit word).  
(c) State the ending physical address in hexadecimal for both cases, assuming starting address is `0000H`.  
**Model Solution:**  
(a) For byte-addressable system:  
    $$\\text{Capacity} = 2^{16} \\times 1\\text{ byte} = 65,536\\text{ bytes} = \\mathbf{64\\text{ Kilobytes}}$$  
(b) For word-addressable system:  
    $$\\text{Capacity} = 2^{16} \\times 2\\text{ bytes} = 131,072\\text{ bytes} = \\mathbf{128\\text{ Kilobytes}}$$  
(c) Ending Addresses:  
    - For 64 KB (byte-addressed): $0000\\text{H} + 65,536 - 1 = \\mathbf{FFFFH}$  
    - For 128 KB (word-addressed): $2^{16}$ words $= \\mathbf{FFFFH}$ word-locations (spanning 128 KB of storage).  
**Marking Scheme:**
- (a) Correct 64 KB calculation: **1 Mark**
- (b) Correct 128 KB calculation: **1 Mark**
- (c) Correct ending addresses: **1 Mark**

---

#### Q1.20
**Question:** An engineer is testing an unknown memory module in an 8086 system. The logic analyzer shows that the module's ending address is `67FFFH` and its total capacity is measured as $32\\text{ Kilobytes}$.  
(a) Determine the starting physical address of this module in hexadecimal.  
(b) Write the starting and ending addresses in 20-bit binary format.  
**Model Solution:**  
(a) Capacity $= 32\\text{ KB} = 32 \\times 1024\\text{ bytes} = 32,768\\text{ bytes} = 8000\\text{H}$ bytes.  
    $$\\text{Starting Address} = \\text{Ending Address} - \\text{Capacity} + 1$$  
    $$\\text{Starting Address} = 67\\text{FFFH} - 8000\\text{H} + 1\\text{H} = 5\\text{FFFFH} + 1\\text{H} = \\mathbf{60000H}$$  
(b) 20-bit Binary Breakdown:  
    - Starting Address `60000H` = `0110 0000 0000 0000 0000` ($A_{19}-A_0$)  
    - Ending Address `67FFFH` = `0110 0111 1111 1111 1111` ($A_{19}-A_0$)  
    Address lines $A_{19}-A_{15}$ remain constant at `0110 0`, while lines $A_{14}-A_0$ (15 lines $= 32\\text{ KB}$) provide internal addressing.  
**Marking Scheme:**
- (a) Starting address calculation `60000H`: **1.5 Marks**
- (b) Binary representation and identification of fixed/variable lines: **1.5 Marks**

---

#### Q1.21
**Question:** An 8086 system operates at a clock frequency of $5\\text{ MHz}$.  
(a) Compute the duration of a single $T$-state.  
(b) Calculate the duration of a standard memory read machine cycle without wait states.  
(c) If memory access requires the insertion of 3 wait states ($3\\text{ }T_w$), calculate the new bus cycle time and the percentage increase in cycle duration.  
**Model Solution:**  
(a) Duration of $1\\text{ }T$-state:  
    $$T = \\frac{1}{5 \\times 10^6\\text{ Hz}} = 0.2\\,\\mu\\text{s} = \\mathbf{200\\text{ ns}}$$  
(b) Standard cycle ($4\\text{ }T$-states):  
    $$\\text{Duration} = 4 \\times 200\\text{ ns} = \\mathbf{800\\text{ ns}}$$  
(c) Cycle with 3 wait states ($4 + 3 = 7\\text{ }T$-states):  
    $$\\text{New Duration} = 7 \\times 200\\text{ ns} = \\mathbf{1400\\text{ ns} = 1.4\\,\\mu\\text{s}}$$  
    $$\\text{Percentage Increase} = \\frac{1400 - 800}{800} \\times 100\\% = \\frac{600}{800} \\times 100\\% = \\mathbf{75\\%}$$  
**Marking Scheme:**
- (a) $T$-state calculation: **1 Mark**
- (b) 4-state duration: **1 Mark**
- (c) 7-state duration and 75% increase: **1 Mark**

---

#### Q1.22
**Question:** Two conflicting TTL bus devices drive a shared line. Driver 1 drives HIGH with $V_{OH} = 3.8\\text{ V}$ and output impedance $R_1 = 50\\,\\Omega$. Driver 2 drives LOW with $V_{OL} = 0.3\\text{ V}$ and saturation impedance $R_2 = 20\\,\\Omega$.  
(a) Calculate the contention short-circuit current on the line.  
(b) Calculate the power dissipated as heat in the output stage of Driver 2 ($P = I^2 R_2$).  
(c) What would be the total fault current on a 16-bit bus if all 16 lines experience simultaneous contention?  
**Model Solution:**  
(a) Contention Current:  
    $$\\Delta V = 3.8\\text{ V} - 0.3\\text{ V} = 3.5\\text{ V}$$  
    $$R_{\\text{total}} = 50\\,\\Omega + 20\\,\\Omega = 70\\,\\Omega$$  
    $$I = \\frac{3.5\\text{ V}}{70\\,\\Omega} = \\mathbf{0.050\\text{ A} = 50\\text{ mA}}$$  
(b) Power Dissipation in Driver 2:  
    $$P = I^2 \\times R_2 = (0.050\\text{ A})^2 \\times 20\\,\\Omega = 0.0025 \\times 20 = \\mathbf{0.050\\text{ W} = 50\\text{ mW}}$$  
(c) 16-Bit Bus Total Fault Current:  
    $$I_{\\text{total}} = 16 \\times 50\\text{ mA} = \\mathbf{800\\text{ mA} = 0.8\\text{ A}}$$  
**Marking Scheme:**
- (a) Current calculation (50 mA): **1 Mark**
- (b) Power calculation (50 mW): **1 Mark**
- (c) 16-bit bus surge current (800 mA): **1 Mark**

---

#### Q1.23
**Question:** A $16\\text{ KB}$ SRAM chip is assigned the physical address range `3C000H` to `3FFFFH` in an 8086 system.  
(a) How many address lines are required for internal addressing within the chip? Identify them from $A_{19}-A_0$.  
(b) Which address lines are available for chip-select decoding?  
(c) Specify the exact binary values that the chip-select address lines must maintain to select this chip.  
**Model Solution:**  
(a) Internal Address Lines:  
    Capacity $= 16\\text{ KB} = 16,384\\text{ bytes} = 2^{14}\\text{ bytes}$.  
    Requires **14 address lines**: **$A_0 \\text{ to } A_{13}$**.  
(b) Chip Select Decoding Lines:  
    The remaining upper address lines: **$A_{19}, A_{18}, A_{17}, A_{16}, A_{15}, A_{14}$** (6 lines).  
(c) Binary Values for Chip Select:  
    Starting Address `3C000H`:  
    - $3_{16} = 0011_2$ ($A_{19} A_{18} A_{17} A_{16}$)  
    - $\\text{C}_{16} = 1100_2 \\implies A_{15} A_{14} = 11_2$.  
    Therefore, the decoding lines must satisfy:  
    $$\\mathbf{A_{19} A_{18} A_{17} A_{16} A_{15} A_{14} = 0 0 1 1 1 1}$$  
**Marking Scheme:**
- (a) 14 lines ($A_0-A_{13}$): **1 Mark**
- (b) Upper 6 lines ($A_{19}-A_{14}$): **1 Mark**
- (c) Exact binary equation `001111`: **1 Mark**

---

#### Q1.24
**Question:** A digital designer has inventory of $32\\text{K} \\times 8$ bit static RAM chips.  
(a) How many such chips are required to design a $128\\text{ Kilobyte}$ memory subsystem?  
(b) How many chips will reside in the Even Bank and how many in the Odd Bank?  
(c) How many address lines are routed to the internal address pins of each chip?  
**Model Solution:**  
(a) Total chips required:  
    $$\\text{Chips} = \\frac{128\\text{ KB}}{32\\text{ KB}} = \\mathbf{4\\text{ chips}}$$  
(b) Bank Allocation:  
    - In an 8086 system, memory is divided into Even and Odd banks:  
      - **Even Bank ($64\\text{ KB}$ total):** Requires **2 chips** of $32\\text{K} \\times 8$ connected to data bus $D_7-D_0$.  
      - **Odd Bank ($64\\text{ KB}$ total):** Requires **2 chips** of $32\\text{K} \\times 8$ connected to data bus $D_{15}-D_8$.  
(c) Internal Address Lines:  
    Each $32\\text{K} \\times 8$ chip has $2^{15}$ locations. Therefore, each chip requires **15 address lines** ($A_1 \\text{ to } A_{15}$). Address line $A_0$ is used with $\\overline{\\text{BHE}}$ for bank selection.  
**Marking Scheme:**
- (a) 4 chips calculation: **1 Mark**
- (b) Even/Odd bank partition (2 chips each): **1 Mark**
- (c) 15 address lines ($A_1-A_{15}$): **1 Mark**

---

### SECTION E: 5 MARKS DESIGN & CALCULATION PROBLEMS
*(Comprehensive engineering problems with full marking breakdown)*

#### Q1.25
**Question:** Design an address decoding interface for an 8086 microprocessor system with the following memory specifications:  
- **$128\\text{ KB}$ Static RAM** using **two $64\\text{K} \\times 8$ RAM chips** mapped starting at physical address `00000H`.  
- **$64\\text{ KB}$ EPROM** using **two $32\\text{K} \\times 8$ EPROM chips** mapped at the top of memory ending at physical address `FFFFFH`.  
**Perform the following:**  
(a) Calculate the starting and ending hexadecimal physical addresses for the RAM and EPROM blocks.  
(b) Determine the internal address lines connected to each RAM and EPROM chip.  
(c) Show the complete address mapping truth table including binary states of $A_{19}-A_{16}$.  
(d) Design the chip-select decoding logic using a 74LS138 (3:8 decoder) and logic gates.  
**Model Solution:**  
**1. Address Range Calculations:**
- **RAM Block ($128\\text{ KB} = 20000\\text{H}$ bytes):**  
  - Starting Address = `00000H`  
  - Ending Address = $00000\\text{H} + 20000\\text{H} - 1 = \\mathbf{1FFFFH}$  
  - Range: **`00000H - 1FFFFH`**
- **EPROM Block ($64\\text{ KB} = 10000\\text{H}$ bytes):**  
  - Ending Address = `FFFFFH` (required for 8086 reset vector)  
  - Starting Address = $\\text{FFFFFH} - 10000\\text{H} + 1 = \\mathbf{F0000H}$  
  - Range: **`F0000H - FFFFFH`**

**2. Chip Allocation & Internal Address Lines:**
- **RAM Subsystem ($128\\text{ KB}$):**  
  - 1 chip in Even Bank ($64\\text{K} \\times 8$, $D_7-D_0$) + 1 chip in Odd Bank ($64\\text{K} \\times 8$, $D_{15}-D_8$).  
  - $64\\text{K} = 2^{16} \\implies$ Each RAM chip connects to **16 address lines: $A_1 \\text{ to } A_{16}$**.  
  - Bank qualification: $A_0$ selects Even Bank, $\\overline{\\text{BHE}}$ selects Odd Bank.  
- **EPROM Subsystem ($64\\text{ KB}$):**  
  - 1 chip in Even Bank ($32\\text{K} \\times 8$, $D_7-D_0$) + 1 chip in Odd Bank ($32\\text{K} \\times 8$, $D_{15}-D_8$).  
  - $32\\text{K} = 2^{15} \\implies$ Each EPROM chip connects to **15 address lines: $A_1 \\text{ to } A_{15}$**.  

**3. Address Mapping Table:**
| Memory Block | Hex Address Range | $A_{19}$ | $A_{18}$ | $A_{17}$ | $A_{16}$ | Lines $A_{15}-A_0$ |
|:---|:---|:---:|:---:|:---:|:---:|:---|
| **$128\\text{ KB}$ RAM** | `00000H - 1FFFFH` | 0 | 0 | 0 | X | $0000\\text{H} \\rightarrow \\text{FFFFH}$ |
| **$64\\text{ KB}$ EPROM** | `F0000H - FFFFFH` | 1 | 1 | 1 | 1 | $0000\\text{H} \\rightarrow \\text{FFFFH}$ |

**4. 74LS138 Decoder Configuration:**
- Connect inputs of 74LS138:  
  - $C = A_{19}$, $B = A_{18}$, $A = A_{17}$.  
  - Enables: $G_1 = \\text{M/}\\overline{\\text{IO}}$ (Active only for memory), $\\overline{G_{2A}} = \\text{GND}$, $\\overline{G_{2B}} = \\text{GND}$.  
- Output $\\overline{Y_0}$ is asserted when $A_{19} A_{18} A_{17} = 000$ (covers `00000H - 1FFFFH` = $128\\text{ KB}$).  
  $$\\overline{\\text{CS}_{\\text{RAM}}} = \\overline{Y_0}$$  
  - For Even RAM: $\\overline{\\text{CS}_{\\text{RAM-EVEN}}} = \\overline{Y_0} + A_0$  
  - For Odd RAM: $\\overline{\\text{CS}_{\\text{RAM-ODD}}} = \\overline{Y_0} + \\overline{\\text{BHE}}$  
- Output $\\overline{Y_7}$ is asserted when $A_{19} A_{18} A_{17} = 111$ (covers `E0000H - FFFFFH` = $128\\text{ KB}$).  
  To select specifically `F0000H - FFFFFH` ($64\\text{ KB}$), address line $A_{16}$ must be 1.  
  Using an external NAND gate:  
  $$\\overline{\\text{CS}_{\\text{EPROM}}} = \\overline{Y_7 \\cdot A_{16}}$$  
  - For Even EPROM: $\\overline{\\text{CS}_{\\text{EPROM-EVEN}}} = \\overline{\\text{CS}_{\\text{EPROM}}} + A_0$  
  - For Odd EPROM: $\\overline{\\text{CS}_{\\text{EPROM-ODD}}} = \\overline{\\text{CS}_{\\text{EPROM}}} + \\overline{\\text{BHE}}$  
**Marking Scheme:**
- (a) Starting and ending address calculations: **1 Mark**
- (b) Internal address line allocations: **1 Mark**
- (c) Complete address mapping table: **1 Mark**
- (d) Decoder circuit equations and bank logic: **2 Marks**

---

#### Q1.26
**Question:** In an 8086 microcomputer, a 3-to-8 decoder (74LS138) is dedicated to memory address decoding. The select inputs are connected as $C = A_{19}$, $B = A_{18}$, $A = A_{17}$.  
(a) Construct a table showing the starting and ending hexadecimal physical addresses corresponding to each of the eight outputs $\\overline{Y_0}$ to $\\overline{Y_7}$.  
(b) Output $\\overline{Y_3}$ is to be further sub-decoded into four equal $32\\text{ KB}$ memory spaces using a secondary 2-to-4 line active-low decoder (74LS139). Identify which address lines must drive the 2-to-4 decoder inputs, and compute the starting and ending addresses of the four sub-blocks.  
**Model Solution:**  
**(a) 74LS138 Memory Partition Table ($128\\text{ KB}$ per output):**
| Output | $C (A_{19})$ | $B (A_{18})$ | $A (A_{17})$ | Starting Address | Ending Address | Size |
|:---:|:---:|:---:|:---:|:---|:---|:---:|
| $\\overline{Y_0}$ | 0 | 0 | 0 | `00000H` | `1FFFFH` | $128\\text{ KB}$ |
| $\\overline{Y_1}$ | 0 | 0 | 1 | `20000H` | `3FFFFH` | $128\\text{ KB}$ |
| $\\overline{Y_2}$ | 0 | 1 | 0 | `40000H` | `5FFFFH` | $128\\text{ KB}$ |
| $\\overline{Y_3}$ | 0 | 1 | 1 | `60000H` | `7FFFFH` | $128\\text{ KB}$ |
| $\\overline{Y_4}$ | 1 | 0 | 0 | `80000H` | `9FFFFH` | $128\\text{ KB}$ |
| $\\overline{Y_5}$ | 1 | 0 | 1 | `A0000H` | `BFFFFH` | $128\\text{ KB}$ |
| $\\overline{Y_6}$ | 1 | 1 | 0 | `C0000H` | `DFFFFH` | $128\\text{ KB}$ |
| $\\overline{Y_7}$ | 1 | 1 | 1 | `E0000H` | `FFFFFH` | $128\\text{ KB}$ |

**(b) Sub-Decoding of $\\overline{Y_3}$ (`60000H - 7FFFFH`):**
- Total space of $\\overline{Y_3} = 128\\text{ KB}$.  
- Dividing into 4 equal blocks requires:  
  $$\\text{Sub-block Size} = \\frac{128\\text{ KB}}{4} = 32\\text{ KB} = 8000\\text{H}\\text{ bytes}$$  
- A $32\\text{ KB}$ block requires 15 internal address lines ($A_{14}-A_0$).  
- Therefore, the secondary 2-to-4 decoder inputs $B$ and $A$ must be driven by **address lines $A_{16}$ and $A_{15}$**.  
- The active-low enable $\\overline{E}$ of the 74LS139 is driven directly by $\\overline{Y_3}$.  
**Address Ranges for the Four Sub-Blocks:**
| Sub-Output | $A_{16}$ | $A_{15}$ | Starting Address | Ending Address | Capacity |
|:---:|:---:|:---:|:---|:---|:---:|
| $\\overline{Y_{3-0}}$ | 0 | 0 | `60000H` | `67FFFH` | $32\\text{ KB}$ |
| $\\overline{Y_{3-1}}$ | 0 | 1 | `68000H` | `6FFFFH` | $32\\text{ KB}$ |
| $\\overline{Y_{3-2}}$ | 1 | 0 | `70000H` | `77FFFH` | $32\\text{ KB}$ |
| $\\overline{Y_{3-3}}$ | 1 | 1 | `78000H` | `7FFFFH` | $32\\text{ KB}$ |
**Marking Scheme:**
- (a) Complete table of 8 outputs with correct hex addresses: **2.5 Marks**
- (b) Identification of $A_{16}, A_{15}$ and sub-block table: **2.5 Marks**

---

#### Q1.27
**Question:** A memory interface timing analysis is performed on an 8086 system operating at a clock frequency of $8\\text{ MHz}$ ($T = 125\\text{ ns}$).  
- The external SRAM has an access time $t_{\\text{acc}} = 275\\text{ ns}$ (measured from stable address to valid data).  
- Total propagation delay through 74LS373 address latches and 74LS138 decoder is $t_{\\text{prop}} = 35\\text{ ns}$.  
- Transceiver delay through 74LS245 is $t_{\\text{buf}} = 10\\text{ ns}$.  
- The 8086 requires a data setup time of $t_{\\text{setup}} = 30\\text{ ns}$ prior to the end of clock state $T_3$.  
(a) Calculate the total required time from address output at start of $T_1$ until data is latched.  
(b) Calculate the available time in a standard 4-clock cycle without wait states (where data is sampled at the transition into $T_4$, giving $3\\text{ }T$-states of access time).  
(c) Determine if wait states are necessary. If yes, calculate the minimum number of wait states ($T_w$) that the READY generation logic must insert.  
(d) Calculate the final bus cycle execution time with the required wait states.  
**Model Solution:**  
(a) Total Time Required by Memory Subsystem:  
    $$t_{\\text{required}} = t_{\\text{prop}} + t_{\\text{acc}} + t_{\\text{buf}} + t_{\\text{setup}}$$  
    $$t_{\\text{required}} = 35\\text{ ns} + 275\\text{ ns} + 10\\text{ ns} + 30\\text{ ns} = \\mathbf{350\\text{ ns}}$$  
(b) Available Time in Standard Cycle ($3\\text{ }T$-states from start of $T_1$ to end of $T_3$):  
    $$t_{\\text{available}} = 3 \\times T = 3 \\times 125\\text{ ns} = \\mathbf{375\\text{ ns}}$$  
    *Note:* In 8086, address is valid at time $t_{\\text{CLAV}} \\approx 60\\text{ ns}$ after clock $T_1$ rising edge.  
    Accounting for 8086 address output delay ($60\\text{ ns}$):  
    $$t_{\\text{actual available}} = 375\\text{ ns} - 60\\text{ ns} = \\mathbf{315\\text{ ns}}$$  
(c) Wait State Evaluation:  
    Since $t_{\\text{required}} = 350\\text{ ns} > t_{\\text{actual available}} = 315\\text{ ns}$, **data will NOT be ready in time**.  
    Shortfall $= 350\\text{ ns} - 315\\text{ ns} = 35\\text{ ns}$.  
    Adding **one Wait State ($1\\text{ }T_w = 125\\text{ ns}$)**:  
    New available time $= 315\\text{ ns} + 125\\text{ ns} = 440\\text{ ns}$.  
    Since $440\\text{ ns} > 350\\text{ ns}$, exactly **ONE Wait State ($T_w$)** is required.  
(d) Final Bus Cycle Time:  
    $$\\text{Total } T\\text{-states} = 4 + 1 = 5\\text{ }T\\text{-states}$$  
    $$\\text{Final Cycle Time} = 5 \\times 125\\text{ ns} = \\mathbf{625\\text{ ns}}$$  
**Marking Scheme:**
- (a) Correct total required time calculation (350 ns): **1.5 Marks**
- (b) Available time analysis with address delay: **1.5 Marks**
- (c) Determination of exactly 1 wait state: **1 Mark**
- (d) Final cycle time calculation (625 ns): **1 Mark**

---

#### Q1.28
**Question:** An 8086 microcomputer memory subsystem is to be implemented with:  
- **$64\\text{ KB}$ EPROM** using four $16\\text{K} \\times 8$ chips located in physical address range `F0000H` to `FFFFFH`.  
- **$128\\text{ KB}$ RAM** using four $32\\text{K} \\times 8$ chips located in physical address range `00000H` to `1FFFFH`.  
(a) Determine the internal address lines for each EPROM chip and each RAM chip.  
(b) Group the chips into Even and Odd memory banks, stating the data bus lines ($D_7-D_0$ or $D_{15}-D_8$) connected to each.  
(c) Determine the starting and ending address of each individual chip.  
(d) Write the Boolean decoding equations for the chip-select inputs of all eight chips using high-order address lines $A_{19}-A_{16}$, $A_{15}$, $A_0$, and $\\overline{\\text{BHE}}$.  
**Model Solution:**  
**(a) Internal Address Lines:**  
- For $16\\text{K} \\times 8$ EPROM: $16\\text{K} = 2^{14} \\implies$ **14 address lines: $A_1 \\text{ to } A_{14}$**.  
- For $32\\text{K} \\times 8$ RAM: $32\\text{K} = 2^{15} \\implies$ **15 address lines: $A_1 \\text{ to } A_{15}$**.  

**(b) Bank & Chip Partitioning:**
- **EPROM ($64\\text{ KB}$ total, 4 chips):**  
  - Even Bank ($D_7-D_0$): Two $16\\text{K} \\times 8$ chips (EPROM 0 and EPROM 1).  
  - Odd Bank ($D_{15}-D_8$): Two $16\\text{K} \\times 8$ chips (EPROM 2 and EPROM 3).  
- **RAM ($128\\text{ KB}$ total, 4 chips):**  
  - Even Bank ($D_7-D_0$): Two $32\\text{K} \\times 8$ chips (RAM 0 and RAM 1).  
  - Odd Bank ($D_{15}-D_8$): Two $32\\text{K} \\times 8$ chips (RAM 2 and RAM 3).  

**(c) Address Range per Chip:**
- **RAM Subsystem (`00000H - 1FFFFH`):**  
  - Block 0 ($64\\text{ KB}$, `00000H - 0FFFFH`):  
    - RAM 0 (Even, $32\\text{ KB}$): `00000H - 0FFFEH` (Even addresses)  
    - RAM 2 (Odd, $32\\text{ KB}$): `00001H - 0FFFFH` (Odd addresses)  
  - Block 1 ($64\\text{ KB}$, `10000H - 1FFFFH`):  
    - RAM 1 (Even, $32\\text{ KB}$): `10000H - 1FFFEH` (Even addresses)  
    - RAM 3 (Odd, $32\\text{ KB}$): `10001H - 1FFFFH` (Odd addresses)  
- **EPROM Subsystem (`F0000H - FFFFFH`):**  
  - Block 0 ($32\\text{ KB}$, `F0000H - F7FFFH`):  
    - EPROM 0 (Even, $16\\text{ KB}$): `F0000H - F7FFEH` (Even addresses)  
    - EPROM 2 (Odd, $16\\text{ KB}$): `F0001H - F7FFFH` (Odd addresses)  
  - Block 1 ($32\\text{ KB}$, `F8000H - FFFFFH`):  
    - EPROM 1 (Even, $16\\text{ KB}$): `F8000H - FFFFEH` (Even addresses)  
    - EPROM 3 (Odd, $16\\text{ KB}$): `F8001H - FFFFFH` (Odd addresses)  

**(d) Boolean Chip-Select Equations:**  
Master RAM enable ($A_{19} A_{18} A_{17} = 000$): $\\text{RAM\\_EN} = \\overline{A_{19}} \\cdot \\overline{A_{18}} \\cdot \\overline{A_{17}} \\cdot \\text{M/}\\overline{\\text{IO}}$  
- $\\overline{\\text{CS}_{\\text{RAM0}}} = \\overline{\\text{RAM\\_EN} \\cdot \\overline{A_{16}} \\cdot \\overline{A_0}}$  
- $\\overline{\\text{CS}_{\\text{RAM2}}} = \\overline{\\text{RAM\\_EN} \\cdot \\overline{A_{16}} \\cdot \\overline{\\text{BHE}}}$  
- $\\overline{\\text{CS}_{\\text{RAM1}}} = \\overline{\\text{RAM\\_EN} \\cdot A_{16} \\cdot \\overline{A_0}}$  
- $\\overline{\\text{CS}_{\\text{RAM3}}} = \\overline{\\text{RAM\\_EN} \\cdot A_{16} \\cdot \\overline{\\text{BHE}}}$  

Master EPROM enable ($A_{19} A_{18} A_{17} A_{16} = 1111$): $\\text{EPR\\_EN} = A_{19} \\cdot A_{18} \\cdot A_{17} \\cdot A_{16} \\cdot \\text{M/}\\overline{\\text{IO}}$  
- $\\overline{\\text{CS}_{\\text{EPR0}}} = \\overline{\\text{EPR\\_EN} \\cdot \\overline{A_{15}} \\cdot \\overline{A_0}}$  
- $\\overline{\\text{CS}_{\\text{EPR2}}} = \\overline{\\text{EPR\\_EN} \\cdot \\overline{A_{15}} \\cdot \\overline{\\text{BHE}}}$  
- $\\overline{\\text{CS}_{\\text{EPR1}}} = \\overline{\\text{EPR\\_EN} \\cdot A_{15} \\cdot \\overline{A_0}}$  
- $\\overline{\\text{CS}_{\\text{EPR3}}} = \\overline{\\text{EPR\\_EN} \\cdot A_{15} \\cdot \\overline{\\text{BHE}}}$  
**Marking Scheme:**
- (a) Correct internal address lines: **1 Mark**
- (b) Bank and bus line allocation: **1 Mark**
- (c) Starting and ending addresses of all 8 chips: **1.5 Marks**
- (d) Complete, rigorous Boolean chip-select equations: **1.5 Marks**
"""

if __name__ == "__main__":
    convert_markdown_string_to_pdf(ch1_md, "Numerical_Question_Bank_Chapter_1.pdf", "8086 Numerical Bank - Chapter 1")
