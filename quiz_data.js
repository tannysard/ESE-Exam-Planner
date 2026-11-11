// AUTO-GENERATED MASTER QUIZ DATABASE
// Contains 100% of all questions from all PDFs and documents
const QUIZ_DATA = {
  "subjects": [
    {
      "id": "mp",
      "name": "Intel 8086 Microprocessor",
      "shortName": "MP",
      "icon": "cpu",
      "badge": "Hardware & Architecture",
      "description": "Bus demultiplexing, minimum mode, segmentation, memory banking, bus timing cycles, instruction set, addressing modes, stack, CALL/RET, and interrupts.",
      "chapters": [
        {
          "id": "mp_ch1",
          "title": "Chapter 1: Bus Architecture, Demultiplexing & Memory Interfacing",
          "icon": "layers",
          "description": "Demultiplexing ALE, 74LS373 latches, 74LS245 transceivers, tristate logic, address decoding, 74LS138, clock timing & bus contention."
        },
        {
          "id": "mp_ch2",
          "title": "Chapter 2: Pins, Signals, Internal Architecture & Bus Cycles",
          "icon": "activity",
          "description": "BIU & EU, 6-byte instruction queue, pipelining, segment registers, Even/Odd memory banks, read/write timing cycles, wait state (Tw) & interrupts."
        },
        {
          "id": "mp_ch3",
          "title": "Chapter 3: Instruction Set & Addressing Modes",
          "icon": "code",
          "description": "Machine instruction encoding (d, w, mod, reg, r/m), 12 addressing modes, arithmetic/logic, shifts/rotates, strings, CALL/RET, and control transfer."
        },
        {
          "id": "mp_ch4",
          "title": "Chapter 4: Interrupts, Stack, Subroutines & Strings",
          "icon": "zap",
          "description": "Interrupt vector table (IVT), hardware vs software interrupts, stack frame mechanics, CALL/RET nuances, string primitives & shift/rotate flags."
        },
        {
          "id": "mp_obj",
          "title": "8086 Comprehensive Objective Question Bank (258 MCQs)",
          "icon": "check-circle",
          "description": "Complete exam-oriented objective multiple-choice question bank with verified answers across all syllabus topics."
        },
        {
          "id": "mp_tf",
          "title": "8086 True / False Diagnostic Assessment (296 Questions)",
          "icon": "help-circle",
          "description": "Exhaustive True/False worksheet testing deep technical understanding, edge-cases, and common pitfalls."
        },
        {
          "id": "mp_blanks",
          "title": "8086 Fill-in-the-Blanks Technical Review (127 Questions)",
          "icon": "edit-3",
          "description": "Rapid terminology and parameter completion review covering all architectural parameters."
        },
        {
          "id": "mp_onemark",
          "title": "8086 One-Mark Core Q&A Bank (205 Questions)",
          "icon": "book-open",
          "description": "Concise high-yield single mark definitions, formulas, and pin explanations from Unit 1, Unit 2, and Unit 3."
        },
        {
          "id": "mp_num",
          "title": "8086 Master Numerical & Practice Pack",
          "icon": "hash",
          "description": "Calculation problems covering physical memory capacity, ending addresses, bus cycle time, contention current, and program traces."
        }
      ]
    },
    {
      "id": "ppl",
      "name": "Principles of Programming Languages",
      "shortName": "PPL",
      "icon": "terminal",
      "badge": "Software & Paradigms",
      "description": "Language evaluation criteria, implementation models (compilers, interpreters, JVM), formal syntax/semantics, control statements, subprograms, exception handling, and paradigms.",
      "chapters": [
        {
          "id": "ppl_u1",
          "title": "Unit 1: Programming Language Concepts",
          "icon": "compass",
          "description": "Reasons for study, language evaluation criteria (readability, writability, reliability, cost), expressive power, orthogonality, and domain suitability."
        },
        {
          "id": "ppl_u2",
          "title": "Unit 2: Language Implementation Methods",
          "icon": "cpu",
          "description": "Compilers, interpreters, hybrid implementations, bytecode, JIT compilation, virtual machines (JVM), linkers, loaders, and environments."
        },
        {
          "id": "ppl_u3",
          "title": "Unit 3: Syntax, Semantics & Lexical Analysis",
          "icon": "file-text",
          "description": "Grammars, BNF, EBNF, parse trees, ambiguity, operator precedence, associativity, attribute grammars, lexical analysis, and tokens."
        },
        {
          "id": "ppl_u4",
          "title": "Unit 4: Statement Control & Subprograms",
          "icon": "git-branch",
          "description": "Selection statements, iterative statements, control flow, parameter passing methods (pass-by-value, pass-by-reference), and scoping rules."
        },
        {
          "id": "ppl_u5",
          "title": "Unit 5: Exception, Event & GUI Handling",
          "icon": "alert-triangle",
          "description": "Exception handling architectures, try/catch/finally, propagation, event-driven programming, listeners, and GUI frameworks."
        },
        {
          "id": "ppl_u6",
          "title": "Unit 6: Programming Paradigms",
          "icon": "grid",
          "description": "Imperative vs declarative, functional programming (Haskell, Lisp), logic programming (Prolog), object-oriented programming (Java, C++), and scripting."
        },
        {
          "id": "ppl_midsem",
          "title": "PPL Mid-Sem High-Yield Question Bank",
          "icon": "award",
          "description": "Mid-sem targeted MCQs, Right/Wrong diagnostics, Python execution traces, compiler/interpreter distinctions, and evolution timeline."
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "mp_obj_1",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 1,
      "question": "What is the 4-bit binary number or code called?",
      "options": {
        "A": "Byte",
        "B": "Nibble",
        "C": "Word",
        "D": "Bit"
      },
      "answer": "B",
      "answerText": "Nibble",
      "explanation": "Official verified solution for Q1. Correct answer is Option B: Nibble.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_2",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 2,
      "question": "What is the 8-bit binary number or code called?",
      "options": {
        "A": "Nibble",
        "B": "Double Word",
        "C": "Word",
        "D": "Byte"
      },
      "answer": "D",
      "answerText": "Byte",
      "explanation": "Official verified solution for Q2. Correct answer is Option D: Byte.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_3",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 3,
      "question": "What is the 16-bit binary number or code called?",
      "options": {
        "A": "Byte",
        "B": "Nibble",
        "C": "Bit",
        "D": "Word"
      },
      "answer": "D",
      "answerText": "Word",
      "explanation": "Official verified solution for Q3. Correct answer is Option D: Word.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_4",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 4,
      "question": "What is the 32-bit binary number or code called?",
      "options": {
        "A": "Double Word",
        "B": "Word",
        "C": "Multiple Word",
        "D": "Byte"
      },
      "answer": "A",
      "answerText": "Double Word",
      "explanation": "Official verified solution for Q4. Correct answer is Option A: Double Word.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_5",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 5,
      "question": "What is the quantity operated by an instruction of a program called?",
      "options": {
        "A": "Code",
        "B": "Address",
        "C": "Bus",
        "D": "Data"
      },
      "answer": "D",
      "answerText": "Data",
      "explanation": "Official verified solution for Q5. Correct answer is Option D: Data.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_6",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 6,
      "question": "What is an identification number for memory locations?",
      "options": {
        "A": "Instruction",
        "B": "Data",
        "C": "Bus",
        "D": "Address"
      },
      "answer": "D",
      "answerText": "Address",
      "explanation": "Official verified solution for Q6. Correct answer is Option D: Address.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_7",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 7,
      "question": "What is the size of the address used by the 8086 processor for memory?",
      "options": {
        "A": "32-bit",
        "B": "16-bit",
        "C": "20-bit",
        "D": "8-bit"
      },
      "answer": "C",
      "answerText": "20-bit",
      "explanation": "Official verified solution for Q7. Correct answer is Option C: 20-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_8",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 8,
      "question": "What is the memory word size for an 8086 processor-based system?",
      "options": {
        "A": "4-bit",
        "B": "16-bit",
        "C": "32-bit",
        "D": "8-bit"
      },
      "answer": "B",
      "answerText": "16-bit",
      "explanation": "Official verified solution for Q8. Correct answer is Option B: 16-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_9",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 9,
      "question": "Which unit performs arithmetic and logical operations in a microprocessor?",
      "options": {
        "A": "ALU",
        "B": "Bus",
        "C": "Register Array",
        "D": "Control Unit"
      },
      "answer": "A",
      "answerText": "ALU",
      "explanation": "Official verified solution for Q9. Correct answer is Option A: ALU.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_10",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 10,
      "question": "What is the size of the ALU in the 8086 processor?",
      "options": {
        "A": "32-bit",
        "B": "64-bit",
        "C": "8-bit",
        "D": "16-bit"
      },
      "answer": "D",
      "answerText": "16-bit",
      "explanation": "Official verified solution for Q10. Correct answer is Option D: 16-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_11",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 11,
      "question": "Which processor has a 32-bit ALU?",
      "options": {
        "A": "8008",
        "B": "8086",
        "C": "80486",
        "D": "8085"
      },
      "answer": "C",
      "answerText": "80486",
      "explanation": "Official verified solution for Q11. Correct answer is Option C: 80486.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_12",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 12,
      "question": "What is a group of conducting lines that carries data, address and control signals called?",
      "options": {
        "A": "Bus",
        "B": "Clock",
        "C": "ALU",
        "D": "Register"
      },
      "answer": "A",
      "answerText": "Bus",
      "explanation": "Official verified solution for Q12. Correct answer is Option A: Bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_13",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 13,
      "question": "Which bus carries data?",
      "options": {
        "A": "Control bus",
        "B": "Data bus",
        "C": "System bus",
        "D": "Address bus"
      },
      "answer": "B",
      "answerText": "Data bus",
      "explanation": "Official verified solution for Q13. Correct answer is Option B: Data bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_14",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 14,
      "question": "Which bus carries the address?",
      "options": {
        "A": "Address bus",
        "B": "Control bus",
        "C": "Data bus",
        "D": "System bus"
      },
      "answer": "A",
      "answerText": "Address bus",
      "explanation": "Official verified solution for Q14. Correct answer is Option A: Address bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_15",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 15,
      "question": "Which bus carries control signals?",
      "options": {
        "A": "Data bus",
        "B": "Control bus",
        "C": "Address bus",
        "D": "System bus"
      },
      "answer": "B",
      "answerText": "Control bus",
      "explanation": "Official verified solution for Q15. Correct answer is Option B: Control bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_16",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 16,
      "question": "What is the bus directly connected to the microprocessor called?",
      "options": {
        "A": "Control bus",
        "B": "Data bus",
        "C": "System bus",
        "D": "CPU bus"
      },
      "answer": "D",
      "answerText": "CPU bus",
      "explanation": "Official verified solution for Q16. Correct answer is Option D: CPU bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_17",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 17,
      "question": "In which bus are signals multiplexed?",
      "options": {
        "A": "CPU bus",
        "B": "Address bus",
        "C": "Control bus",
        "D": "System bus"
      },
      "answer": "A",
      "answerText": "CPU bus",
      "explanation": "Official verified solution for Q17. Correct answer is Option A: CPU bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_18",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 18,
      "question": "What is the bus called after demultiplexing the multiplexed bus lines?",
      "options": {
        "A": "Data bus",
        "B": "Address bus",
        "C": "System bus",
        "D": "CPU bus"
      },
      "answer": "C",
      "answerText": "System bus",
      "explanation": "Official verified solution for Q18. Correct answer is Option C: System bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_19",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 19,
      "question": "What is used to synchronize various devices in the microprocessor and in the system?",
      "options": {
        "A": "Bus",
        "B": "Register",
        "C": "Clock",
        "D": "ALU"
      },
      "answer": "C",
      "answerText": "Clock",
      "explanation": "Official verified solution for Q19. Correct answer is Option C: Clock.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_20",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 20,
      "question": "What are the normal logic levels for data, address or control signals in tristate logic?",
      "options": {
        "A": "Only high level state",
        "B": "High and low level states",
        "C": "Only low level state",
        "D": "High impedance state"
      },
      "answer": "B",
      "answerText": "High and low level states",
      "explanation": "Official verified solution for Q20. Correct answer is Option B: High and low level states.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_21",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 21,
      "question": "What is an electrical open-circuit condition in tristate logic called?",
      "options": {
        "A": "High state",
        "B": "Low state",
        "C": "Normal state",
        "D": "High impedance state"
      },
      "answer": "D",
      "answerText": "High impedance state",
      "explanation": "Official verified solution for Q21. Correct answer is Option D: High impedance state.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_22",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 22,
      "question": "What is the purpose of the high impedance state?",
      "options": {
        "A": "To synchronize the system",
        "B": "To provide a clock signal",
        "C": "To keep the device electrically isolated from the\nsystem",
        "D": "To connect the device to the system"
      },
      "answer": "C",
      "answerText": "To keep the device electrically isolated from the system",
      "explanation": "Official verified solution for Q22. Correct answer is Option C: To keep the device electrically isolated from the system.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_35",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 35,
      "question": "Where are the various conditions of the ALU result stored?",
      "options": {
        "A": "Register array",
        "B": "Control Unit",
        "C": "Flag register",
        "D": "Instruction Pointer"
      },
      "answer": "C",
      "answerText": "Flag register",
      "explanation": "Official verified solution for Q35. Correct answer is Option C: Flag register.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_36",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 36,
      "question": "What is another name for the register array?",
      "options": {
        "A": "Flag register",
        "B": "Cache",
        "C": "External memory",
        "D": "Internal memory"
      },
      "answer": "D",
      "answerText": "Internal memory",
      "explanation": "Official verified solution for Q36. Correct answer is Option D: Internal memory.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_37",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 37,
      "question": "Which unit generates the necessary control signals for internal and external operations?",
      "options": {
        "A": "Control unit",
        "B": "ALU",
        "C": "Register array",
        "D": "Instruction decoding unit"
      },
      "answer": "A",
      "answerText": "Control unit",
      "explanation": "Official verified solution for Q37. Correct answer is Option A: Control unit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_38",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 38,
      "question": "What type of memory is used to store permanent programs and data?",
      "options": {
        "A": "EPROM",
        "B": "Register array",
        "C": "RAM",
        "D": "Cache"
      },
      "answer": "A",
      "answerText": "EPROM",
      "explanation": "Official verified solution for Q38. Correct answer is Option A: EPROM.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_39",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 39,
      "question": "What type of memory is used to store temporary programs and data?",
      "options": {
        "A": "RAM",
        "B": "EPROM",
        "C": "Flash",
        "D": "ROM"
      },
      "answer": "A",
      "answerText": "RAM",
      "explanation": "Official verified solution for Q39. Correct answer is Option A: RAM.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_40",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 40,
      "question": "What is used to enter programs and data into a microcomputer system?",
      "options": {
        "A": "Input device",
        "B": "Output device",
        "C": "ALU",
        "D": "Memory"
      },
      "answer": "A",
      "answerText": "Input device",
      "explanation": "Official verified solution for Q40. Correct answer is Option A: Input device.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_41",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 41,
      "question": "What is used for examining the results in a microcomputer system?",
      "options": {
        "A": "Control unit",
        "B": "Output device",
        "C": "Input device",
        "D": "Memory"
      },
      "answer": "B",
      "answerText": "Output device",
      "explanation": "Official verified solution for Q41. Correct answer is Option B: Output device.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_42",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 42,
      "question": "Why is an interface device provided between the system bus and IO devices?",
      "options": {
        "A": "To increase the memory capacity",
        "B": "To generate clock signals",
        "C": "To provide tristate logic",
        "D": "Because the speed of IO devices does not match with\nthe speed of the microprocessor"
      },
      "answer": "D",
      "answerText": "Because the speed of IO devices does not match with the speed of the microprocessor",
      "explanation": "Official verified solution for Q42. Correct answer is Option D: Because the speed of IO devices does not match with the speed of the microprocessor.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_43",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 43,
      "question": "What is transferring different information at different well-defined times through the same lines\ncalled?",
      "options": {
        "A": "Demultiplexing",
        "B": "Addressing",
        "C": "Synchronizing",
        "D": "Multiplexing"
      },
      "answer": "D",
      "answerText": "Multiplexing",
      "explanation": "Official verified solution for Q43. Correct answer is Option D: Multiplexing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_44",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 44,
      "question": "What signal is provided by the 8086 processor to demultiplex the address/data lines?",
      "options": {
        "A": "DT/R",
        "B": "ALE",
        "C": "DEN",
        "D": "READY"
      },
      "answer": "B",
      "answerText": "ALE",
      "explanation": "Official verified solution for Q44. Correct answer is Option B: ALE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_45",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 45,
      "question": "Which T-state of every bus cycle is used for address latching in the 8086?",
      "options": {
        "A": "Third T-state",
        "B": "First T-state",
        "C": "Fourth T-state",
        "D": "Second T-state"
      },
      "answer": "B",
      "answerText": "First T-state",
      "explanation": "Official verified solution for Q45. Correct answer is Option B: First T-state.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_46",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 46,
      "question": "Which signal is used to decide the direction of data flow in data buffers?",
      "options": {
        "A": "BHE",
        "B": "ALE",
        "C": "DT/R",
        "D": "DEN"
      },
      "answer": "C",
      "answerText": "DT/R",
      "explanation": "Official verified solution for Q46. Correct answer is Option C: DT/R.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_47",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 47,
      "question": "Which signal is used to enable the data buffer?",
      "options": {
        "A": "DT/R",
        "B": "BHE",
        "C": "DEN",
        "D": "ALE"
      },
      "answer": "C",
      "answerText": "DEN",
      "explanation": "Official verified solution for Q47. Correct answer is Option C: DEN.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_48",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 48,
      "question": "Which signal is used to differentiate the memory and IO addresses in 8086?",
      "options": {
        "A": "M/IO",
        "B": "DEN",
        "C": "ALE",
        "D": "BHE"
      },
      "answer": "A",
      "answerText": "M/IO",
      "explanation": "Official verified solution for Q48. Correct answer is Option A: M/IO.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_49",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 49,
      "question": "In which mode does the 8086 itself generate all the bus control signals?",
      "options": {
        "A": "Halt mode",
        "B": "Idle mode",
        "C": "Minimum mode",
        "D": "Maximum mode"
      },
      "answer": "C",
      "answerText": "Minimum mode",
      "explanation": "Official verified solution for Q49. Correct answer is Option C: Minimum mode.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_50",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 50,
      "question": "What pin decides the operating mode of the 8086?",
      "options": {
        "A": "ALE",
        "B": "DT/R",
        "C": "MN/MX",
        "D": "BHE"
      },
      "answer": "C",
      "answerText": "MN/MX",
      "explanation": "Official verified solution for Q50. Correct answer is Option C: MN/MX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_51",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 51,
      "question": "What is the size of the external data bus in the 8088?",
      "options": {
        "A": "8-bit",
        "B": "32-bit",
        "C": "16-bit",
        "D": "64-bit"
      },
      "answer": "A",
      "answerText": "8-bit",
      "explanation": "Official verified solution for Q51. Correct answer is Option A: 8-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_52",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 52,
      "question": "Which status line indicates the status of the 8086 interrupt enable flag?",
      "options": {
        "A": "S3",
        "B": "S4",
        "C": "S6",
        "D": "S5"
      },
      "answer": "D",
      "answerText": "S5",
      "explanation": "Official verified solution for Q52. Correct answer is Option D: S5.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_53",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 53,
      "question": "Which signal is used by memory or IO devices to get extra time for data transfer?",
      "options": {
        "A": "TEST",
        "B": "HOLD",
        "C": "READY",
        "D": "WAIT"
      },
      "answer": "C",
      "answerText": "READY",
      "explanation": "Official verified solution for Q53. Correct answer is Option C: READY.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_56",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 56,
      "question": "Which unit fetches instructions and reads/writes data?",
      "options": {
        "A": "Control Unit",
        "B": "Bus Interface Unit (BIU)",
        "C": "Execution Unit (EU)",
        "D": "ALU"
      },
      "answer": "B",
      "answerText": "Bus Interface Unit (BIU)",
      "explanation": "Official verified solution for Q56. Correct answer is Option B: Bus Interface Unit (BIU).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_57",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 57,
      "question": "Which unit executes instructions that have already been fetched?",
      "options": {
        "A": "Execution Unit (EU)",
        "B": "Instruction Queue",
        "C": "Address Generation Unit",
        "D": "Bus Interface Unit (BIU)"
      },
      "answer": "A",
      "answerText": "Execution Unit (EU)",
      "explanation": "Official verified solution for Q57. Correct answer is Option A: Execution Unit (EU).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_58",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 58,
      "question": "What is the size of the instruction queue in the 8086?",
      "options": {
        "A": "6 bytes",
        "B": "16 bytes",
        "C": "8 bytes",
        "D": "4 bytes"
      },
      "answer": "A",
      "answerText": "6 bytes",
      "explanation": "Official verified solution for Q58. Correct answer is Option A: 6 bytes.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_59",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 59,
      "question": "How many 16-bit segment registers does the BIU have?",
      "options": {
        "A": "Six",
        "B": "Eight",
        "C": "Four",
        "D": "Two"
      },
      "answer": "C",
      "answerText": "Four",
      "explanation": "Official verified solution for Q59. Correct answer is Option C: Four.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_60",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 60,
      "question": "What is the size of a memory segment in the 8086?",
      "options": {
        "A": "16 kilobytes",
        "B": "1 megabyte",
        "C": "32 kilobytes",
        "D": "64 kilobytes"
      },
      "answer": "D",
      "answerText": "64 kilobytes",
      "explanation": "Official verified solution for Q60. Correct answer is Option D: 64 kilobytes.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_61",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 61,
      "question": "Which register holds the offset address of the program codes?",
      "options": {
        "A": "Base Pointer (BP)",
        "B": "Stack Pointer (SP)",
        "C": "Source Index (SI)",
        "D": "Instruction Pointer (IP)"
      },
      "answer": "D",
      "answerText": "Instruction Pointer (IP)",
      "explanation": "Official verified solution for Q61. Correct answer is Option D: Instruction Pointer (IP).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_62",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 62,
      "question": "Which register is used to hold the count value in SHIFT, ROTATE and LOOP instructions?",
      "options": {
        "A": "BX",
        "B": "AX",
        "C": "DX",
        "D": "CX"
      },
      "answer": "D",
      "answerText": "CX",
      "explanation": "Official verified solution for Q62. Correct answer is Option D: CX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_63",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 63,
      "question": "Which register is used to hold data for multiplication and division operations?",
      "options": {
        "A": "CX",
        "B": "BX",
        "C": "DX",
        "D": "AX"
      },
      "answer": "D",
      "answerText": "AX",
      "explanation": "Official verified solution for Q63. Correct answer is Option D: AX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_64",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 64,
      "question": "How many flags does the 8086 flag register have?",
      "options": {
        "A": "6",
        "B": "16",
        "C": "8",
        "D": "9"
      },
      "answer": "D",
      "answerText": "9",
      "explanation": "Official verified solution for Q64. Correct answer is Option D: 9.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_65",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 65,
      "question": "Which flag is set if there is a carry from addition or borrow from subtraction?",
      "options": {
        "A": "Overflow Flag (OF)",
        "B": "Auxiliary carry Flag (AF)",
        "C": "Zero Flag (ZF)",
        "D": "Carry Flag (CF)"
      },
      "answer": "D",
      "answerText": "Carry Flag (CF)",
      "explanation": "Official verified solution for Q65. Correct answer is Option D: Carry Flag (CF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_66",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 66,
      "question": "Which flag is set if the result is zero?",
      "options": {
        "A": "Carry Flag (CF)",
        "B": "Sign Flag (SF)",
        "C": "Zero Flag (ZF)",
        "D": "Parity Flag (PF)"
      },
      "answer": "C",
      "answerText": "Zero Flag (ZF)",
      "explanation": "Official verified solution for Q66. Correct answer is Option C: Zero Flag (ZF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_67",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 67,
      "question": "Which control flag is used for autoincrement/autodecrement of index registers?",
      "options": {
        "A": "Carry Flag (CF)",
        "B": "Trace Flag (TF)",
        "C": "Interrupt Flag (IF)",
        "D": "Direction Flag (DF)"
      },
      "answer": "D",
      "answerText": "Direction Flag (DF)",
      "explanation": "Official verified solution for Q67. Correct answer is Option D: Direction Flag (DF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_68",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 68,
      "question": "Which control flag places the 8086 in the single-step mode?",
      "options": {
        "A": "Trace Flag (TF)",
        "B": "Interrupt Flag (IF)",
        "C": "Direction Flag (DF)",
        "D": "Parity Flag (PF)"
      },
      "answer": "A",
      "answerText": "Trace Flag (TF)",
      "explanation": "Official verified solution for Q68. Correct answer is Option A: Trace Flag (TF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_69",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 69,
      "question": "What is the basic memory word size of the memories used in the 8086 system?",
      "options": {
        "A": "16-bit or 2-bytes",
        "B": "32-bit",
        "C": "8-bit or 1-byte",
        "D": "4-bit"
      },
      "answer": "C",
      "answerText": "8-bit or 1-byte",
      "explanation": "Official verified solution for Q69. Correct answer is Option C: 8-bit or 1-byte.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_70",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 70,
      "question": "How is the physical memory space of 1 MB divided in the 8086 system?",
      "options": {
        "A": "One bank of 1 MB",
        "B": "Four banks of 256 kB",
        "C": "Two banks of 512 kB",
        "D": "Eight banks of 128 kB"
      },
      "answer": "C",
      "answerText": "Two banks of 512 kB",
      "explanation": "Official verified solution for Q70. Correct answer is Option C: Two banks of 512 kB.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_71",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 71,
      "question": "Which address line is used to select the even memory bank?",
      "options": {
        "A": "A1",
        "B": "A0",
        "C": "BHE",
        "D": "A19"
      },
      "answer": "B",
      "answerText": "A0",
      "explanation": "Official verified solution for Q71. Correct answer is Option B: A0.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_72",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 72,
      "question": "Which control signal is used to select the odd memory bank?",
      "options": {
        "A": "BHE",
        "B": "ALE",
        "C": "A0",
        "D": "DEN"
      },
      "answer": "A",
      "answerText": "BHE",
      "explanation": "Official verified solution for Q72. Correct answer is Option A: BHE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_73",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 73,
      "question": "How many T-states does a normal memory read/write cycle take?",
      "options": {
        "A": "Six",
        "B": "Eight",
        "C": "Two",
        "D": "Four"
      },
      "answer": "D",
      "answerText": "Four",
      "explanation": "Official verified solution for Q73. Correct answer is Option D: Four.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_74",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 74,
      "question": "Which states are introduced between T2 and T3 of a bus cycle by slow peripherals?",
      "options": {
        "A": "Hold states",
        "B": "Halt states",
        "C": "Wait states",
        "D": "Idle states"
      },
      "answer": "C",
      "answerText": "Wait states",
      "explanation": "Official verified solution for Q74. Correct answer is Option C: Wait states.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_75",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 75,
      "question": "In which T-state does the 8086 sample the READY signal?",
      "options": {
        "A": "T3",
        "B": "T4",
        "C": "T2",
        "D": "T1"
      },
      "answer": "A",
      "answerText": "T3",
      "explanation": "Official verified solution for Q75. Correct answer is Option A: T3.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_76",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 76,
      "question": "How many T-states does the interrupt acknowledge cycle take?",
      "options": {
        "A": "Four",
        "B": "Ten",
        "C": "Eight",
        "D": "Six"
      },
      "answer": "C",
      "answerText": "Eight",
      "explanation": "Official verified solution for Q76. Correct answer is Option C: Eight.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_77",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 77,
      "question": "Which bit in the instruction format defines whether the operation is on byte or word data?",
      "options": {
        "A": "s-bit",
        "B": "w-bit",
        "C": "d-bit",
        "D": "v-bit"
      },
      "answer": "B",
      "answerText": "w-bit",
      "explanation": "Official verified solution for Q77. Correct answer is Option B: w-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_78",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 78,
      "question": "Which addressing mode specifies the data as part of the instruction?",
      "options": {
        "A": "Register addressing",
        "B": "Relative addressing",
        "C": "Direct addressing",
        "D": "Immediate addressing"
      },
      "answer": "D",
      "answerText": "Immediate addressing",
      "explanation": "Official verified solution for Q78. Correct answer is Option D: Immediate addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_79",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 79,
      "question": "Which addressing mode uses a register to hold the effective address?",
      "options": {
        "A": "Direct addressing",
        "B": "Based addressing",
        "C": "Indexed addressing",
        "D": "Register indirect addressing"
      },
      "answer": "D",
      "answerText": "Register indirect addressing",
      "explanation": "Official verified solution for Q79. Correct answer is Option D: Register indirect addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_80",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 80,
      "question": "In which addressing mode is the effective address given by the sum of a base value and an\nindex value?",
      "options": {
        "A": "Direct addressing",
        "B": "Indexed addressing",
        "C": "Based indexed addressing",
        "D": "Based addressing"
      },
      "answer": "C",
      "answerText": "Based indexed addressing",
      "explanation": "Official verified solution for Q80. Correct answer is Option C: Based indexed addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_81",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 81,
      "question": "Which string instruction prefix repeats the execution until CX=0 or ZF=1?",
      "options": {
        "A": "REPNZ/REPNE",
        "B": "REP",
        "C": "LOOP",
        "D": "REPZ/REPE"
      },
      "answer": "D",
      "answerText": "REPZ/REPE",
      "explanation": "Official verified solution for Q81. Correct answer is Option D: REPZ/REPE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_82",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 82,
      "question": "Which instruction is used to convert a byte to a word by sign extension?",
      "options": {
        "A": "CBW",
        "B": "DAA",
        "C": "AAA",
        "D": "CWD"
      },
      "answer": "A",
      "answerText": "CBW",
      "explanation": "Official verified solution for Q82. Correct answer is Option A: CBW.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_83",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 83,
      "question": "Which instruction clears the carry flag?",
      "options": {
        "A": "CLD",
        "B": "CLC",
        "C": "CMC",
        "D": "STC"
      },
      "answer": "B",
      "answerText": "CLC",
      "explanation": "Official verified solution for Q83. Correct answer is Option B: CLC.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_84",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 84,
      "question": "Which instruction pushes the flag register to the stack?",
      "options": {
        "A": "PUSH",
        "B": "POPF",
        "C": "LAHF",
        "D": "PUSHF"
      },
      "answer": "D",
      "answerText": "PUSHF",
      "explanation": "Official verified solution for Q84. Correct answer is Option D: PUSHF.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_85",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 85,
      "question": "Which instruction compares two strings word by word?",
      "options": {
        "A": "SCASW",
        "B": "MOVSW",
        "C": "CMPSW",
        "D": "LODSW"
      },
      "answer": "C",
      "answerText": "CMPSW",
      "explanation": "Official verified solution for Q85. Correct answer is Option C: CMPSW.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_86",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 86,
      "question": "Which jump instruction transfers control if the Zero Flag is 1?",
      "options": {
        "A": "JE/JZ",
        "B": "JC",
        "C": "JO",
        "D": "JNE/JNZ"
      },
      "answer": "A",
      "answerText": "JE/JZ",
      "explanation": "Official verified solution for Q86. Correct answer is Option A: JE/JZ.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_87",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 87,
      "question": "What type of interrupt is the INT 3 instruction?",
      "options": {
        "A": "Hardware interrupt",
        "B": "Software interrupt (break point)",
        "C": "Maskable interrupt",
        "D": "Non-maskable interrupt"
      },
      "answer": "B",
      "answerText": "Software interrupt (break point)",
      "explanation": "Official verified solution for Q87. Correct answer is Option B: Software interrupt (break point).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_88",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 88,
      "question": "Which instruction causes the processor to enter an idle state until an interrupt occurs?",
      "options": {
        "A": "HLT",
        "B": "WAIT",
        "C": "NOP",
        "D": "LOCK"
      },
      "answer": "A",
      "answerText": "HLT",
      "explanation": "Official verified solution for Q88. Correct answer is Option A: HLT.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_89",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 89,
      "question": "What is the execution time for the NOP instruction?",
      "options": {
        "A": "1 clock period",
        "B": "2 clock periods",
        "C": "4 clock periods",
        "D": "3 clock periods"
      },
      "answer": "D",
      "answerText": "3 clock periods",
      "explanation": "Official verified solution for Q89. Correct answer is Option D: 3 clock periods.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_90",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 90,
      "question": "Which segment register is used as the default for data accessed by the BX register?",
      "options": {
        "A": "CS",
        "B": "ES",
        "C": "DS",
        "D": "SS"
      },
      "answer": "C",
      "answerText": "DS",
      "explanation": "Official verified solution for Q90. Correct answer is Option C: DS.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_91",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 91,
      "question": "Which segment register is used as the default for data accessed by the BP register?",
      "options": {
        "A": "SS",
        "B": "CS",
        "C": "DS",
        "D": "ES"
      },
      "answer": "A",
      "answerText": "SS",
      "explanation": "Official verified solution for Q91. Correct answer is Option A: SS.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_92",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 92,
      "question": "What is the function of the STC instruction?",
      "options": {
        "A": "Set carry flag",
        "B": "Complement carry flag",
        "C": "Set direction flag",
        "D": "Clear carry flag"
      },
      "answer": "A",
      "answerText": "Set carry flag",
      "explanation": "Official verified solution for Q92. Correct answer is Option A: Set carry flag.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_93",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 93,
      "question": "Which instruction sets the interrupt enable flag?",
      "options": {
        "A": "STC",
        "B": "STD",
        "C": "STI",
        "D": "CLI"
      },
      "answer": "C",
      "answerText": "STI",
      "explanation": "Official verified solution for Q93. Correct answer is Option C: STI.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_94",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 94,
      "question": "Which arithmetic instruction performs addition with carry?",
      "options": {
        "A": "INC",
        "B": "SUB",
        "C": "ADC",
        "D": "ADD"
      },
      "answer": "C",
      "answerText": "ADC",
      "explanation": "Official verified solution for Q94. Correct answer is Option C: ADC.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_95",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 95,
      "question": "Which arithmetic instruction adjusts the result in AL to packed BCD after addition?",
      "options": {
        "A": "AAA",
        "B": "DAA",
        "C": "AAS",
        "D": "DAS"
      },
      "answer": "B",
      "answerText": "DAA",
      "explanation": "Official verified solution for Q95. Correct answer is Option B: DAA.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_96",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 96,
      "question": "Which logical instruction inverts each bit of the specified data?",
      "options": {
        "A": "AND",
        "B": "NOT",
        "C": "XOR",
        "D": "OR"
      },
      "answer": "B",
      "answerText": "NOT",
      "explanation": "Official verified solution for Q96. Correct answer is Option B: NOT.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_97",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 97,
      "question": "Which shift instruction copies the sign bit into the shifted location?",
      "options": {
        "A": "SHR",
        "B": "SHL",
        "C": "SAL",
        "D": "SAR"
      },
      "answer": "D",
      "answerText": "SAR",
      "explanation": "Official verified solution for Q97. Correct answer is Option D: SAR.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_98",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 98,
      "question": "Which rotate instruction rotates left through the carry flag?",
      "options": {
        "A": "RCL",
        "B": "RCR",
        "C": "ROR",
        "D": "ROL"
      },
      "answer": "A",
      "answerText": "RCL",
      "explanation": "Official verified solution for Q98. Correct answer is Option A: RCL.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_99",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 99,
      "question": "Which instruction copies a byte/word from an IO port to the accumulator?",
      "options": {
        "A": "MOV",
        "B": "XCHG",
        "C": "IN",
        "D": "OUT"
      },
      "answer": "C",
      "answerText": "IN",
      "explanation": "Official verified solution for Q99. Correct answer is Option C: IN.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_100",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 100,
      "question": "What is the 4-bit binary number or code called?",
      "options": {
        "A": "Byte",
        "B": "Word",
        "C": "Nibble",
        "D": "Bit"
      },
      "answer": "C",
      "answerText": "Nibble",
      "explanation": "Official verified solution for Q100. Correct answer is Option C: Nibble.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_101",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 101,
      "question": "What is the 8-bit binary number or code called?",
      "options": {
        "A": "Double Word",
        "B": "Word",
        "C": "Nibble",
        "D": "Byte"
      },
      "answer": "D",
      "answerText": "Byte",
      "explanation": "Official verified solution for Q101. Correct answer is Option D: Byte.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_102",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 102,
      "question": "What is the 16-bit binary number or code called?",
      "options": {
        "A": "Word",
        "B": "Byte",
        "C": "Bit",
        "D": "Nibble"
      },
      "answer": "A",
      "answerText": "Word",
      "explanation": "Official verified solution for Q102. Correct answer is Option A: Word.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_103",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 103,
      "question": "What is the 32-bit binary number or code called?",
      "options": {
        "A": "Byte",
        "B": "Word",
        "C": "Double Word",
        "D": "Multiple Word"
      },
      "answer": "C",
      "answerText": "Double Word",
      "explanation": "Official verified solution for Q103. Correct answer is Option C: Double Word.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_104",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 104,
      "question": "What is the quantity operated by an instruction of a program called?",
      "options": {
        "A": "Data",
        "B": "Code",
        "C": "Address",
        "D": "Bus"
      },
      "answer": "A",
      "answerText": "Data",
      "explanation": "Official verified solution for Q104. Correct answer is Option A: Data.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_105",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 105,
      "question": "What is an identification number for memory locations?",
      "options": {
        "A": "Bus",
        "B": "Data",
        "C": "Instruction",
        "D": "Address"
      },
      "answer": "D",
      "answerText": "Address",
      "explanation": "Official verified solution for Q105. Correct answer is Option D: Address.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_106",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 106,
      "question": "What is the size of the address used by the 8086 processor for memory?",
      "options": {
        "A": "32-bit",
        "B": "16-bit",
        "C": "8-bit",
        "D": "20-bit"
      },
      "answer": "D",
      "answerText": "20-bit",
      "explanation": "Official verified solution for Q106. Correct answer is Option D: 20-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_107",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 107,
      "question": "What is the memory word size for an 8086 processor-based system?",
      "options": {
        "A": "4-bit",
        "B": "16-bit",
        "C": "8-bit",
        "D": "32-bit"
      },
      "answer": "B",
      "answerText": "16-bit",
      "explanation": "Official verified solution for Q107. Correct answer is Option B: 16-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_108",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 108,
      "question": "Which unit performs arithmetic and logical operations in a microprocessor?",
      "options": {
        "A": "ALU",
        "B": "Register Array",
        "C": "Control Unit",
        "D": "Bus"
      },
      "answer": "A",
      "answerText": "ALU",
      "explanation": "Official verified solution for Q108. Correct answer is Option A: ALU.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_109",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 109,
      "question": "What is the size of the ALU in the 8086 processor?",
      "options": {
        "A": "32-bit",
        "B": "64-bit",
        "C": "16-bit",
        "D": "8-bit"
      },
      "answer": "C",
      "answerText": "16-bit",
      "explanation": "Official verified solution for Q109. Correct answer is Option C: 16-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_110",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 110,
      "question": "Which processor has a 32-bit ALU?",
      "options": {
        "A": "80486",
        "B": "8085",
        "C": "8086",
        "D": "8008"
      },
      "answer": "A",
      "answerText": "80486",
      "explanation": "Official verified solution for Q110. Correct answer is Option A: 80486.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_111",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 111,
      "question": "What is a group of conducting lines that carries data, address and control signals called?",
      "options": {
        "A": "Bus",
        "B": "Register",
        "C": "ALU",
        "D": "Clock"
      },
      "answer": "A",
      "answerText": "Bus",
      "explanation": "Official verified solution for Q111. Correct answer is Option A: Bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_112",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 112,
      "question": "Which bus carries data?",
      "options": {
        "A": "Address bus",
        "B": "Data bus",
        "C": "Control bus",
        "D": "System bus"
      },
      "answer": "B",
      "answerText": "Data bus",
      "explanation": "Official verified solution for Q112. Correct answer is Option B: Data bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_113",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 113,
      "question": "Which bus carries the address?",
      "options": {
        "A": "Control bus",
        "B": "System bus",
        "C": "Address bus",
        "D": "Data bus"
      },
      "answer": "C",
      "answerText": "Address bus",
      "explanation": "Official verified solution for Q113. Correct answer is Option C: Address bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_114",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 114,
      "question": "Which bus carries control signals?",
      "options": {
        "A": "Control bus",
        "B": "System bus",
        "C": "Data bus",
        "D": "Address bus"
      },
      "answer": "A",
      "answerText": "Control bus",
      "explanation": "Official verified solution for Q114. Correct answer is Option A: Control bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_115",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 115,
      "question": "What is the bus directly connected to the microprocessor called?",
      "options": {
        "A": "Data bus",
        "B": "Control bus",
        "C": "System bus",
        "D": "CPU bus"
      },
      "answer": "D",
      "answerText": "CPU bus",
      "explanation": "Official verified solution for Q115. Correct answer is Option D: CPU bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_116",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 116,
      "question": "In which bus are signals multiplexed?",
      "options": {
        "A": "CPU bus",
        "B": "System bus",
        "C": "Address bus",
        "D": "Control bus"
      },
      "answer": "A",
      "answerText": "CPU bus",
      "explanation": "Official verified solution for Q116. Correct answer is Option A: CPU bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_117",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 117,
      "question": "What is the bus called after demultiplexing the multiplexed bus lines?",
      "options": {
        "A": "CPU bus",
        "B": "System bus",
        "C": "Data bus",
        "D": "Address bus"
      },
      "answer": "B",
      "answerText": "System bus",
      "explanation": "Official verified solution for Q117. Correct answer is Option B: System bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_118",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 118,
      "question": "What is used to synchronize various devices in the microprocessor and in the system?",
      "options": {
        "A": "ALU",
        "B": "Register",
        "C": "Clock",
        "D": "Bus"
      },
      "answer": "C",
      "answerText": "Clock",
      "explanation": "Official verified solution for Q118. Correct answer is Option C: Clock.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_119",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 119,
      "question": "What are the normal logic levels for data, address or control signals in tristate logic?",
      "options": {
        "A": "Only low level state",
        "B": "High impedance state",
        "C": "High and low level states",
        "D": "Only high level state"
      },
      "answer": "C",
      "answerText": "High and low level states",
      "explanation": "Official verified solution for Q119. Correct answer is Option C: High and low level states.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_120",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 120,
      "question": "What is an electrical open-circuit condition in tristate logic called?",
      "options": {
        "A": "High impedance state",
        "B": "Low state",
        "C": "High state",
        "D": "Normal state"
      },
      "answer": "A",
      "answerText": "High impedance state",
      "explanation": "Official verified solution for Q120. Correct answer is Option A: High impedance state.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_121",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 121,
      "question": "What is the purpose of the high impedance state?",
      "options": {
        "A": "To provide a clock signal",
        "B": "To keep the device electrically isolated from the\nsystem",
        "C": "To connect the device to the system",
        "D": "To synchronize the system"
      },
      "answer": "B",
      "answerText": "To keep the device electrically isolated from the system",
      "explanation": "Official verified solution for Q121. Correct answer is Option B: To keep the device electrically isolated from the system.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_130",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 130,
      "question": "What is the size of the physical memory space of fourth-generation microprocessors?",
      "options": {
        "A": "16 MB",
        "B": "1 MB",
        "C": "1 TB",
        "D": "1 GB"
      },
      "answer": "A",
      "answerText": "16 MB",
      "explanation": "Official verified solution for Q130. Correct answer is Option A: 16 MB.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_131",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 131,
      "question": "What is the virtual memory space of fourth-generation microprocessors?",
      "options": {
        "A": "16 MB",
        "B": "1 GB",
        "C": "100 MB",
        "D": "1 TB"
      },
      "answer": "B",
      "answerText": "1 GB",
      "explanation": "Official verified solution for Q131. Correct answer is Option B: 1 GB.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_132",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 132,
      "question": "Which INTEL processor is considered a fifth-generation processor?",
      "options": {
        "A": "8086",
        "B": "80386",
        "C": "80486",
        "D": "Pentium"
      },
      "answer": "D",
      "answerText": "Pentium",
      "explanation": "Official verified solution for Q132. Correct answer is Option D: Pentium.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_133",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 133,
      "question": "What is the data bus size of the Pentium processor?",
      "options": {
        "A": "64-bit",
        "B": "128-bit",
        "C": "32-bit",
        "D": "16-bit"
      },
      "answer": "A",
      "answerText": "64-bit",
      "explanation": "Official verified solution for Q133. Correct answer is Option A: 64-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_134",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 134,
      "question": "Where are the various conditions of the ALU result stored?",
      "options": {
        "A": "Flag register",
        "B": "Register array",
        "C": "Control Unit",
        "D": "Instruction Pointer"
      },
      "answer": "A",
      "answerText": "Flag register",
      "explanation": "Official verified solution for Q134. Correct answer is Option A: Flag register.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_135",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 135,
      "question": "What is another name for the register array?",
      "options": {
        "A": "Internal memory",
        "B": "Cache",
        "C": "External memory",
        "D": "Flag register"
      },
      "answer": "A",
      "answerText": "Internal memory",
      "explanation": "Official verified solution for Q135. Correct answer is Option A: Internal memory.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_136",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 136,
      "question": "Which unit generates the necessary control signals for internal and external operations?",
      "options": {
        "A": "Control unit",
        "B": "ALU",
        "C": "Instruction decoding unit",
        "D": "Register array"
      },
      "answer": "A",
      "answerText": "Control unit",
      "explanation": "Official verified solution for Q136. Correct answer is Option A: Control unit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_137",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 137,
      "question": "What type of memory is used to store permanent programs and data?",
      "options": {
        "A": "Cache",
        "B": "Register array",
        "C": "RAM",
        "D": "EPROM"
      },
      "answer": "D",
      "answerText": "EPROM",
      "explanation": "Official verified solution for Q137. Correct answer is Option D: EPROM.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_138",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 138,
      "question": "What type of memory is used to store temporary programs and data?",
      "options": {
        "A": "Flash",
        "B": "ROM",
        "C": "RAM",
        "D": "EPROM"
      },
      "answer": "C",
      "answerText": "RAM",
      "explanation": "Official verified solution for Q138. Correct answer is Option C: RAM.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_139",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 139,
      "question": "What is used to enter programs and data into a microcomputer system?",
      "options": {
        "A": "Output device",
        "B": "ALU",
        "C": "Memory",
        "D": "Input device"
      },
      "answer": "D",
      "answerText": "Input device",
      "explanation": "Official verified solution for Q139. Correct answer is Option D: Input device.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_140",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 140,
      "question": "What is used for examining the results in a microcomputer system?",
      "options": {
        "A": "Control unit",
        "B": "Memory",
        "C": "Output device",
        "D": "Input device"
      },
      "answer": "C",
      "answerText": "Output device",
      "explanation": "Official verified solution for Q140. Correct answer is Option C: Output device.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_141",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 141,
      "question": "Why is an interface device provided between the system bus and IO devices?",
      "options": {
        "A": "To provide tristate logic",
        "B": "To generate clock signals",
        "C": "To increase the memory capacity",
        "D": "Because the speed of IO devices does not match with\nthe speed of the microprocessor"
      },
      "answer": "D",
      "answerText": "Because the speed of IO devices does not match with the speed of the microprocessor",
      "explanation": "Official verified solution for Q141. Correct answer is Option D: Because the speed of IO devices does not match with the speed of the microprocessor.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_142",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 142,
      "question": "What is transferring different information at different well-defined times through the same lines\ncalled?",
      "options": {
        "A": "Addressing",
        "B": "Multiplexing",
        "C": "Synchronizing",
        "D": "Demultiplexing"
      },
      "answer": "B",
      "answerText": "Multiplexing",
      "explanation": "Official verified solution for Q142. Correct answer is Option B: Multiplexing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_143",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 143,
      "question": "What signal is provided by the 8086 processor to demultiplex the address/data lines?",
      "options": {
        "A": "DEN",
        "B": "ALE",
        "C": "DT/R",
        "D": "READY"
      },
      "answer": "B",
      "answerText": "ALE",
      "explanation": "Official verified solution for Q143. Correct answer is Option B: ALE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_144",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 144,
      "question": "Which T-state of every bus cycle is used for address latching in the 8086?",
      "options": {
        "A": "Third T-state",
        "B": "Second T-state",
        "C": "Fourth T-state",
        "D": "First T-state"
      },
      "answer": "D",
      "answerText": "First T-state",
      "explanation": "Official verified solution for Q144. Correct answer is Option D: First T-state.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_145",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 145,
      "question": "Which signal is used to decide the direction of data flow in data buffers?",
      "options": {
        "A": "ALE",
        "B": "DT/R",
        "C": "DEN",
        "D": "BHE"
      },
      "answer": "B",
      "answerText": "DT/R",
      "explanation": "Official verified solution for Q145. Correct answer is Option B: DT/R.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_146",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 146,
      "question": "Which signal is used to enable the data buffer?",
      "options": {
        "A": "DEN",
        "B": "BHE",
        "C": "DT/R",
        "D": "ALE"
      },
      "answer": "A",
      "answerText": "DEN",
      "explanation": "Official verified solution for Q146. Correct answer is Option A: DEN.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_147",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 147,
      "question": "Which signal is used to differentiate the memory and IO addresses in 8086?",
      "options": {
        "A": "BHE",
        "B": "ALE",
        "C": "DEN",
        "D": "M/IO"
      },
      "answer": "D",
      "answerText": "M/IO",
      "explanation": "Official verified solution for Q147. Correct answer is Option D: M/IO.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_148",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 148,
      "question": "In which mode does the 8086 itself generate all the bus control signals?",
      "options": {
        "A": "Maximum mode",
        "B": "Idle mode",
        "C": "Halt mode",
        "D": "Minimum mode"
      },
      "answer": "D",
      "answerText": "Minimum mode",
      "explanation": "Official verified solution for Q148. Correct answer is Option D: Minimum mode.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_149",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 149,
      "question": "What pin decides the operating mode of the 8086?",
      "options": {
        "A": "BHE",
        "B": "MN/MX",
        "C": "DT/R",
        "D": "ALE"
      },
      "answer": "B",
      "answerText": "MN/MX",
      "explanation": "Official verified solution for Q149. Correct answer is Option B: MN/MX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_150",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 150,
      "question": "What is the size of the external data bus in the 8088?",
      "options": {
        "A": "8-bit",
        "B": "16-bit",
        "C": "64-bit",
        "D": "32-bit"
      },
      "answer": "A",
      "answerText": "8-bit",
      "explanation": "Official verified solution for Q150. Correct answer is Option A: 8-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_151",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 151,
      "question": "Which status line indicates the status of the 8086 interrupt enable flag?",
      "options": {
        "A": "S5",
        "B": "S6",
        "C": "S3",
        "D": "S4"
      },
      "answer": "A",
      "answerText": "S5",
      "explanation": "Official verified solution for Q151. Correct answer is Option A: S5.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_152",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 152,
      "question": "Which signal is used by memory or IO devices to get extra time for data transfer?",
      "options": {
        "A": "TEST",
        "B": "HOLD",
        "C": "WAIT",
        "D": "READY"
      },
      "answer": "D",
      "answerText": "READY",
      "explanation": "Official verified solution for Q152. Correct answer is Option D: READY.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_156",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 156,
      "question": "Which unit executes instructions that have already been fetched?",
      "options": {
        "A": "Address Generation Unit",
        "B": "Instruction Queue",
        "C": "Execution Unit (EU)",
        "D": "Bus Interface Unit (BIU)"
      },
      "answer": "C",
      "answerText": "Execution Unit (EU)",
      "explanation": "Official verified solution for Q156. Correct answer is Option C: Execution Unit (EU).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_157",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 157,
      "question": "What is the size of the instruction queue in the 8086?",
      "options": {
        "A": "16 bytes",
        "B": "4 bytes",
        "C": "6 bytes",
        "D": "8 bytes"
      },
      "answer": "C",
      "answerText": "6 bytes",
      "explanation": "Official verified solution for Q157. Correct answer is Option C: 6 bytes.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_158",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 158,
      "question": "How many 16-bit segment registers does the BIU have?",
      "options": {
        "A": "Eight",
        "B": "Four",
        "C": "Six",
        "D": "Two"
      },
      "answer": "B",
      "answerText": "Four",
      "explanation": "Official verified solution for Q158. Correct answer is Option B: Four.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_159",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 159,
      "question": "What is the size of a memory segment in the 8086?",
      "options": {
        "A": "1 megabyte",
        "B": "64 kilobytes",
        "C": "32 kilobytes",
        "D": "16 kilobytes"
      },
      "answer": "B",
      "answerText": "64 kilobytes",
      "explanation": "Official verified solution for Q159. Correct answer is Option B: 64 kilobytes.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_160",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 160,
      "question": "Which register holds the offset address of the program codes?",
      "options": {
        "A": "Stack Pointer (SP)",
        "B": "Instruction Pointer (IP)",
        "C": "Base Pointer (BP)",
        "D": "Source Index (SI)"
      },
      "answer": "B",
      "answerText": "Instruction Pointer (IP)",
      "explanation": "Official verified solution for Q160. Correct answer is Option B: Instruction Pointer (IP).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_161",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 161,
      "question": "Which register is used to hold the count value in SHIFT, ROTATE and LOOP instructions?",
      "options": {
        "A": "CX",
        "B": "AX",
        "C": "DX",
        "D": "BX"
      },
      "answer": "A",
      "answerText": "CX",
      "explanation": "Official verified solution for Q161. Correct answer is Option A: CX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_162",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 162,
      "question": "Which register is used to hold data for multiplication and division operations?",
      "options": {
        "A": "BX",
        "B": "DX",
        "C": "AX",
        "D": "CX"
      },
      "answer": "C",
      "answerText": "AX",
      "explanation": "Official verified solution for Q162. Correct answer is Option C: AX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_163",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 163,
      "question": "How many flags does the 8086 flag register have?",
      "options": {
        "A": "16",
        "B": "9",
        "C": "6",
        "D": "8"
      },
      "answer": "B",
      "answerText": "9",
      "explanation": "Official verified solution for Q163. Correct answer is Option B: 9.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_164",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 164,
      "question": "Which flag is set if there is a carry from addition or borrow from subtraction?",
      "options": {
        "A": "Auxiliary carry Flag (AF)",
        "B": "Overflow Flag (OF)",
        "C": "Carry Flag (CF)",
        "D": "Zero Flag (ZF)"
      },
      "answer": "C",
      "answerText": "Carry Flag (CF)",
      "explanation": "Official verified solution for Q164. Correct answer is Option C: Carry Flag (CF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_165",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 165,
      "question": "Which flag is set if the result is zero?",
      "options": {
        "A": "Sign Flag (SF)",
        "B": "Zero Flag (ZF)",
        "C": "Carry Flag (CF)",
        "D": "Parity Flag (PF)"
      },
      "answer": "B",
      "answerText": "Zero Flag (ZF)",
      "explanation": "Official verified solution for Q165. Correct answer is Option B: Zero Flag (ZF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_166",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 166,
      "question": "Which control flag is used for autoincrement/autodecrement of index registers?",
      "options": {
        "A": "Carry Flag (CF)",
        "B": "Direction Flag (DF)",
        "C": "Interrupt Flag (IF)",
        "D": "Trace Flag (TF)"
      },
      "answer": "B",
      "answerText": "Direction Flag (DF)",
      "explanation": "Official verified solution for Q166. Correct answer is Option B: Direction Flag (DF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_167",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 167,
      "question": "Which control flag places the 8086 in the single-step mode?",
      "options": {
        "A": "Parity Flag (PF)",
        "B": "Direction Flag (DF)",
        "C": "Trace Flag (TF)",
        "D": "Interrupt Flag (IF)"
      },
      "answer": "C",
      "answerText": "Trace Flag (TF)",
      "explanation": "Official verified solution for Q167. Correct answer is Option C: Trace Flag (TF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_168",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 168,
      "question": "What is the basic memory word size of the memories used in the 8086 system?",
      "options": {
        "A": "32-bit",
        "B": "16-bit or 2-bytes",
        "C": "4-bit",
        "D": "8-bit or 1-byte"
      },
      "answer": "D",
      "answerText": "8-bit or 1-byte",
      "explanation": "Official verified solution for Q168. Correct answer is Option D: 8-bit or 1-byte.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_169",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 169,
      "question": "How is the physical memory space of 1 MB divided in the 8086 system?",
      "options": {
        "A": "One bank of 1 MB",
        "B": "Four banks of 256 kB",
        "C": "Two banks of 512 kB",
        "D": "Eight banks of 128 kB"
      },
      "answer": "C",
      "answerText": "Two banks of 512 kB",
      "explanation": "Official verified solution for Q169. Correct answer is Option C: Two banks of 512 kB.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_170",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 170,
      "question": "Which address line is used to select the even memory bank?",
      "options": {
        "A": "BHE",
        "B": "A19",
        "C": "A1",
        "D": "A0"
      },
      "answer": "D",
      "answerText": "A0",
      "explanation": "Official verified solution for Q170. Correct answer is Option D: A0.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_171",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 171,
      "question": "Which control signal is used to select the odd memory bank?",
      "options": {
        "A": "ALE",
        "B": "BHE",
        "C": "A0",
        "D": "DEN"
      },
      "answer": "B",
      "answerText": "BHE",
      "explanation": "Official verified solution for Q171. Correct answer is Option B: BHE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_172",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 172,
      "question": "How many T-states does a normal memory read/write cycle take?",
      "options": {
        "A": "Six",
        "B": "Eight",
        "C": "Two",
        "D": "Four"
      },
      "answer": "D",
      "answerText": "Four",
      "explanation": "Official verified solution for Q172. Correct answer is Option D: Four.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_173",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 173,
      "question": "Which states are introduced between T2 and T3 of a bus cycle by slow peripherals?",
      "options": {
        "A": "Wait states",
        "B": "Idle states",
        "C": "Hold states",
        "D": "Halt states"
      },
      "answer": "A",
      "answerText": "Wait states",
      "explanation": "Official verified solution for Q173. Correct answer is Option A: Wait states.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_174",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 174,
      "question": "In which T-state does the 8086 sample the READY signal?",
      "options": {
        "A": "T4",
        "B": "T3",
        "C": "T1",
        "D": "T2"
      },
      "answer": "B",
      "answerText": "T3",
      "explanation": "Official verified solution for Q174. Correct answer is Option B: T3.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_175",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 175,
      "question": "How many T-states does the interrupt acknowledge cycle take?",
      "options": {
        "A": "Four",
        "B": "Eight",
        "C": "Ten",
        "D": "Six"
      },
      "answer": "B",
      "answerText": "Eight",
      "explanation": "Official verified solution for Q175. Correct answer is Option B: Eight.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_176",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 176,
      "question": "Which bit in the instruction format defines whether the operation is on byte or word data?",
      "options": {
        "A": "v-bit",
        "B": "w-bit",
        "C": "s-bit",
        "D": "d-bit"
      },
      "answer": "B",
      "answerText": "w-bit",
      "explanation": "Official verified solution for Q176. Correct answer is Option B: w-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_177",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 177,
      "question": "Which addressing mode specifies the data as part of the instruction?",
      "options": {
        "A": "Direct addressing",
        "B": "Relative addressing",
        "C": "Immediate addressing",
        "D": "Register addressing"
      },
      "answer": "C",
      "answerText": "Immediate addressing",
      "explanation": "Official verified solution for Q177. Correct answer is Option C: Immediate addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_178",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 178,
      "question": "Which addressing mode uses a register to hold the effective address?",
      "options": {
        "A": "Register indirect addressing",
        "B": "Based addressing",
        "C": "Indexed addressing",
        "D": "Direct addressing"
      },
      "answer": "A",
      "answerText": "Register indirect addressing",
      "explanation": "Official verified solution for Q178. Correct answer is Option A: Register indirect addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_179",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 179,
      "question": "In which addressing mode is the effective address given by the sum of a base value and an\nindex value?",
      "options": {
        "A": "Based addressing",
        "B": "Indexed addressing",
        "C": "Based indexed addressing",
        "D": "Direct addressing"
      },
      "answer": "C",
      "answerText": "Based indexed addressing",
      "explanation": "Official verified solution for Q179. Correct answer is Option C: Based indexed addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_180",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 180,
      "question": "Which string instruction prefix repeats the execution until CX=0 or ZF=1?",
      "options": {
        "A": "LOOP",
        "B": "REPZ/REPE",
        "C": "REPNZ/REPNE",
        "D": "REP"
      },
      "answer": "B",
      "answerText": "REPZ/REPE",
      "explanation": "Official verified solution for Q180. Correct answer is Option B: REPZ/REPE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_181",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 181,
      "question": "Which instruction is used to convert a byte to a word by sign extension?",
      "options": {
        "A": "CBW",
        "B": "CWD",
        "C": "DAA",
        "D": "AAA"
      },
      "answer": "A",
      "answerText": "CBW",
      "explanation": "Official verified solution for Q181. Correct answer is Option A: CBW.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_182",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 182,
      "question": "Which instruction clears the carry flag?",
      "options": {
        "A": "STC",
        "B": "CLD",
        "C": "CLC",
        "D": "CMC"
      },
      "answer": "C",
      "answerText": "CLC",
      "explanation": "Official verified solution for Q182. Correct answer is Option C: CLC.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_183",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 183,
      "question": "Which instruction pushes the flag register to the stack?",
      "options": {
        "A": "PUSH",
        "B": "POPF",
        "C": "PUSHF",
        "D": "LAHF"
      },
      "answer": "C",
      "answerText": "PUSHF",
      "explanation": "Official verified solution for Q183. Correct answer is Option C: PUSHF.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_184",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 184,
      "question": "Which instruction compares two strings word by word?",
      "options": {
        "A": "MOVSW",
        "B": "SCASW",
        "C": "CMPSW",
        "D": "LODSW"
      },
      "answer": "C",
      "answerText": "CMPSW",
      "explanation": "Official verified solution for Q184. Correct answer is Option C: CMPSW.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_185",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 185,
      "question": "Which jump instruction transfers control if the Zero Flag is 1?",
      "options": {
        "A": "JO",
        "B": "JE/JZ",
        "C": "JC",
        "D": "JNE/JNZ"
      },
      "answer": "B",
      "answerText": "JE/JZ",
      "explanation": "Official verified solution for Q185. Correct answer is Option B: JE/JZ.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_186",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 186,
      "question": "What type of interrupt is the INT 3 instruction?",
      "options": {
        "A": "Non-maskable interrupt",
        "B": "Maskable interrupt",
        "C": "Software interrupt (break point)",
        "D": "Hardware interrupt"
      },
      "answer": "C",
      "answerText": "Software interrupt (break point)",
      "explanation": "Official verified solution for Q186. Correct answer is Option C: Software interrupt (break point).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_187",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 187,
      "question": "Which instruction causes the processor to enter an idle state until an interrupt occurs?",
      "options": {
        "A": "NOP",
        "B": "WAIT",
        "C": "LOCK",
        "D": "HLT"
      },
      "answer": "D",
      "answerText": "HLT",
      "explanation": "Official verified solution for Q187. Correct answer is Option D: HLT.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_188",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 188,
      "question": "What is the execution time for the NOP instruction?",
      "options": {
        "A": "1 clock period",
        "B": "4 clock periods",
        "C": "3 clock periods",
        "D": "2 clock periods"
      },
      "answer": "C",
      "answerText": "3 clock periods",
      "explanation": "Official verified solution for Q188. Correct answer is Option C: 3 clock periods.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_189",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 189,
      "question": "Which segment register is used as the default for data accessed by the BX register?",
      "options": {
        "A": "ES",
        "B": "CS",
        "C": "SS",
        "D": "DS"
      },
      "answer": "D",
      "answerText": "DS",
      "explanation": "Official verified solution for Q189. Correct answer is Option D: DS.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_190",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 190,
      "question": "Which segment register is used as the default for data accessed by the BP register?",
      "options": {
        "A": "ES",
        "B": "CS",
        "C": "DS",
        "D": "SS"
      },
      "answer": "D",
      "answerText": "SS",
      "explanation": "Official verified solution for Q190. Correct answer is Option D: SS.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_191",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 191,
      "question": "What is the function of the STC instruction?",
      "options": {
        "A": "Clear carry flag",
        "B": "Complement carry flag",
        "C": "Set carry flag",
        "D": "Set direction flag"
      },
      "answer": "C",
      "answerText": "Set carry flag",
      "explanation": "Official verified solution for Q191. Correct answer is Option C: Set carry flag.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_193",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 193,
      "question": "Which arithmetic instruction performs addition with carry?",
      "options": {
        "A": "SUB",
        "B": "ADD",
        "C": "ADC",
        "D": "INC"
      },
      "answer": "C",
      "answerText": "ADC",
      "explanation": "Official verified solution for Q193. Correct answer is Option C: ADC.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_194",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 194,
      "question": "Which arithmetic instruction adjusts the result in AL to packed BCD after addition?",
      "options": {
        "A": "DAS",
        "B": "AAA",
        "C": "AAS",
        "D": "DAA"
      },
      "answer": "D",
      "answerText": "DAA",
      "explanation": "Official verified solution for Q194. Correct answer is Option D: DAA.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_195",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 195,
      "question": "Which logical instruction inverts each bit of the specified data?",
      "options": {
        "A": "NOT",
        "B": "AND",
        "C": "OR",
        "D": "XOR"
      },
      "answer": "A",
      "answerText": "NOT",
      "explanation": "Official verified solution for Q195. Correct answer is Option A: NOT.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_196",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 196,
      "question": "Which shift instruction copies the sign bit into the shifted location?",
      "options": {
        "A": "SHR",
        "B": "SAR",
        "C": "SAL",
        "D": "SHL"
      },
      "answer": "B",
      "answerText": "SAR",
      "explanation": "Official verified solution for Q196. Correct answer is Option B: SAR.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_197",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 197,
      "question": "Which rotate instruction rotates left through the carry flag?",
      "options": {
        "A": "RCR",
        "B": "ROL",
        "C": "ROR",
        "D": "RCL"
      },
      "answer": "D",
      "answerText": "RCL",
      "explanation": "Official verified solution for Q197. Correct answer is Option D: RCL.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_199",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 199,
      "question": "What is the 4-bit binary number or code called?",
      "options": {
        "A": "Bit",
        "B": "Nibble",
        "C": "Byte",
        "D": "Word"
      },
      "answer": "B",
      "answerText": "Nibble",
      "explanation": "Official verified solution for Q199. Correct answer is Option B: Nibble.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_200",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 200,
      "question": "What is the 8-bit binary number or code called?",
      "options": {
        "A": "Double Word",
        "B": "Word",
        "C": "Nibble",
        "D": "Byte"
      },
      "answer": "D",
      "answerText": "Byte",
      "explanation": "Official verified solution for Q200. Correct answer is Option D: Byte.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_201",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 201,
      "question": "What is the 16-bit binary number or code called?",
      "options": {
        "A": "Byte",
        "B": "Word",
        "C": "Nibble",
        "D": "Bit"
      },
      "answer": "B",
      "answerText": "Word",
      "explanation": "Official verified solution for Q201. Correct answer is Option B: Word.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_202",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 202,
      "question": "What is the 32-bit binary number or code called?",
      "options": {
        "A": "Double Word",
        "B": "Multiple Word",
        "C": "Byte",
        "D": "Word"
      },
      "answer": "A",
      "answerText": "Double Word",
      "explanation": "Official verified solution for Q202. Correct answer is Option A: Double Word.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_203",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 203,
      "question": "What is the quantity operated by an instruction of a program called?",
      "options": {
        "A": "Address",
        "B": "Data",
        "C": "Bus",
        "D": "Code"
      },
      "answer": "B",
      "answerText": "Data",
      "explanation": "Official verified solution for Q203. Correct answer is Option B: Data.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_204",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 204,
      "question": "What is an identification number for memory locations?",
      "options": {
        "A": "Data",
        "B": "Bus",
        "C": "Instruction",
        "D": "Address"
      },
      "answer": "D",
      "answerText": "Address",
      "explanation": "Official verified solution for Q204. Correct answer is Option D: Address.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_205",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 205,
      "question": "What is the size of the address used by the 8086 processor for memory?",
      "options": {
        "A": "16-bit",
        "B": "20-bit",
        "C": "32-bit",
        "D": "8-bit"
      },
      "answer": "B",
      "answerText": "20-bit",
      "explanation": "Official verified solution for Q205. Correct answer is Option B: 20-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_206",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 206,
      "question": "What is the memory word size for an 8086 processor-based system?",
      "options": {
        "A": "32-bit",
        "B": "8-bit",
        "C": "4-bit",
        "D": "16-bit"
      },
      "answer": "D",
      "answerText": "16-bit",
      "explanation": "Official verified solution for Q206. Correct answer is Option D: 16-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_207",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 207,
      "question": "Which unit performs arithmetic and logical operations in a microprocessor?",
      "options": {
        "A": "Register Array",
        "B": "Control Unit",
        "C": "Bus",
        "D": "ALU"
      },
      "answer": "D",
      "answerText": "ALU",
      "explanation": "Official verified solution for Q207. Correct answer is Option D: ALU.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_208",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 208,
      "question": "What is the size of the ALU in the 8086 processor?",
      "options": {
        "A": "32-bit",
        "B": "16-bit",
        "C": "8-bit",
        "D": "64-bit"
      },
      "answer": "B",
      "answerText": "16-bit",
      "explanation": "Official verified solution for Q208. Correct answer is Option B: 16-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_209",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 209,
      "question": "Which processor has a 32-bit ALU?",
      "options": {
        "A": "8085",
        "B": "8086",
        "C": "80486",
        "D": "8008"
      },
      "answer": "C",
      "answerText": "80486",
      "explanation": "Official verified solution for Q209. Correct answer is Option C: 80486.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_210",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 210,
      "question": "What is a group of conducting lines that carries data, address and control signals called?",
      "options": {
        "A": "ALU",
        "B": "Clock",
        "C": "Bus",
        "D": "Register"
      },
      "answer": "C",
      "answerText": "Bus",
      "explanation": "Official verified solution for Q210. Correct answer is Option C: Bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_211",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 211,
      "question": "Which bus carries data?",
      "options": {
        "A": "Data bus",
        "B": "Address bus",
        "C": "Control bus",
        "D": "System bus"
      },
      "answer": "A",
      "answerText": "Data bus",
      "explanation": "Official verified solution for Q211. Correct answer is Option A: Data bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_212",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 212,
      "question": "Which bus carries the address?",
      "options": {
        "A": "Address bus",
        "B": "Control bus",
        "C": "Data bus",
        "D": "System bus"
      },
      "answer": "A",
      "answerText": "Address bus",
      "explanation": "Official verified solution for Q212. Correct answer is Option A: Address bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_213",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 213,
      "question": "Which bus carries control signals?",
      "options": {
        "A": "Data bus",
        "B": "Address bus",
        "C": "Control bus",
        "D": "System bus"
      },
      "answer": "C",
      "answerText": "Control bus",
      "explanation": "Official verified solution for Q213. Correct answer is Option C: Control bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_214",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 214,
      "question": "What is the bus directly connected to the microprocessor called?",
      "options": {
        "A": "Control bus",
        "B": "Data bus",
        "C": "CPU bus",
        "D": "System bus"
      },
      "answer": "C",
      "answerText": "CPU bus",
      "explanation": "Official verified solution for Q214. Correct answer is Option C: CPU bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_215",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 215,
      "question": "In which bus are signals multiplexed?",
      "options": {
        "A": "CPU bus",
        "B": "System bus",
        "C": "Control bus",
        "D": "Address bus"
      },
      "answer": "A",
      "answerText": "CPU bus",
      "explanation": "Official verified solution for Q215. Correct answer is Option A: CPU bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_216",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 216,
      "question": "What is the bus called after demultiplexing the multiplexed bus lines?",
      "options": {
        "A": "CPU bus",
        "B": "System bus",
        "C": "Data bus",
        "D": "Address bus"
      },
      "answer": "B",
      "answerText": "System bus",
      "explanation": "Official verified solution for Q216. Correct answer is Option B: System bus.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_217",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 217,
      "question": "What is used to synchronize various devices in the microprocessor and in the system?",
      "options": {
        "A": "Bus",
        "B": "Register",
        "C": "ALU",
        "D": "Clock"
      },
      "answer": "D",
      "answerText": "Clock",
      "explanation": "Official verified solution for Q217. Correct answer is Option D: Clock.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_218",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 218,
      "question": "What are the normal logic levels for data, address or control signals in tristate logic?",
      "options": {
        "A": "High and low level states",
        "B": "High impedance state",
        "C": "Only high level state",
        "D": "Only low level state"
      },
      "answer": "A",
      "answerText": "High and low level states",
      "explanation": "Official verified solution for Q218. Correct answer is Option A: High and low level states.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_219",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 219,
      "question": "What is an electrical open-circuit condition in tristate logic called?",
      "options": {
        "A": "Low state",
        "B": "High impedance state",
        "C": "Normal state",
        "D": "High state"
      },
      "answer": "B",
      "answerText": "High impedance state",
      "explanation": "Official verified solution for Q219. Correct answer is Option B: High impedance state.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_220",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 220,
      "question": "What is the purpose of the high impedance state?",
      "options": {
        "A": "To provide a clock signal",
        "B": "To keep the device electrically isolated from the\nsystem",
        "C": "To connect the device to the system",
        "D": "To synchronize the system"
      },
      "answer": "B",
      "answerText": "To keep the device electrically isolated from the system",
      "explanation": "Official verified solution for Q220. Correct answer is Option B: To keep the device electrically isolated from the system.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_221",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 221,
      "question": "Which was the world's first microprocessor?",
      "options": {
        "A": "INTEL 8086",
        "B": "INTEL 4004",
        "C": "INTEL 8080",
        "D": "INTEL 8008"
      },
      "answer": "B",
      "answerText": "INTEL 4004",
      "explanation": "Official verified solution for Q221. Correct answer is Option B: INTEL 4004.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_229",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 229,
      "question": "What is the size of the physical memory space of fourth-generation microprocessors?",
      "options": {
        "A": "1 GB",
        "B": "1 MB",
        "C": "1 TB",
        "D": "16 MB"
      },
      "answer": "D",
      "answerText": "16 MB",
      "explanation": "Official verified solution for Q229. Correct answer is Option D: 16 MB.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_230",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 230,
      "question": "What is the virtual memory space of fourth-generation microprocessors?",
      "options": {
        "A": "1 TB",
        "B": "16 MB",
        "C": "100 MB",
        "D": "1 GB"
      },
      "answer": "D",
      "answerText": "1 GB",
      "explanation": "Official verified solution for Q230. Correct answer is Option D: 1 GB.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_231",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 231,
      "question": "Which INTEL processor is considered a fifth-generation processor?",
      "options": {
        "A": "80386",
        "B": "8086",
        "C": "80486",
        "D": "Pentium"
      },
      "answer": "D",
      "answerText": "Pentium",
      "explanation": "Official verified solution for Q231. Correct answer is Option D: Pentium.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_232",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 232,
      "question": "What is the data bus size of the Pentium processor?",
      "options": {
        "A": "16-bit",
        "B": "128-bit",
        "C": "64-bit",
        "D": "32-bit"
      },
      "answer": "C",
      "answerText": "64-bit",
      "explanation": "Official verified solution for Q232. Correct answer is Option C: 64-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_233",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 233,
      "question": "Where are the various conditions of the ALU result stored?",
      "options": {
        "A": "Register array",
        "B": "Control Unit",
        "C": "Flag register",
        "D": "Instruction Pointer"
      },
      "answer": "C",
      "answerText": "Flag register",
      "explanation": "Official verified solution for Q233. Correct answer is Option C: Flag register.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_234",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 234,
      "question": "What is another name for the register array?",
      "options": {
        "A": "Flag register",
        "B": "Internal memory",
        "C": "Cache",
        "D": "External memory"
      },
      "answer": "B",
      "answerText": "Internal memory",
      "explanation": "Official verified solution for Q234. Correct answer is Option B: Internal memory.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_235",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 235,
      "question": "Which unit generates the necessary control signals for internal and external operations?",
      "options": {
        "A": "ALU",
        "B": "Instruction decoding unit",
        "C": "Register array",
        "D": "Control unit"
      },
      "answer": "D",
      "answerText": "Control unit",
      "explanation": "Official verified solution for Q235. Correct answer is Option D: Control unit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_236",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 236,
      "question": "What type of memory is used to store permanent programs and data?",
      "options": {
        "A": "Register array",
        "B": "EPROM",
        "C": "Cache",
        "D": "RAM"
      },
      "answer": "B",
      "answerText": "EPROM",
      "explanation": "Official verified solution for Q236. Correct answer is Option B: EPROM.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_237",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 237,
      "question": "What type of memory is used to store temporary programs and data?",
      "options": {
        "A": "RAM",
        "B": "ROM",
        "C": "Flash",
        "D": "EPROM"
      },
      "answer": "A",
      "answerText": "RAM",
      "explanation": "Official verified solution for Q237. Correct answer is Option A: RAM.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_238",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 238,
      "question": "What is used to enter programs and data into a microcomputer system?",
      "options": {
        "A": "ALU",
        "B": "Memory",
        "C": "Input device",
        "D": "Output device"
      },
      "answer": "C",
      "answerText": "Input device",
      "explanation": "Official verified solution for Q238. Correct answer is Option C: Input device.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_239",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 239,
      "question": "What is used for examining the results in a microcomputer system?",
      "options": {
        "A": "Control unit",
        "B": "Output device",
        "C": "Memory",
        "D": "Input device"
      },
      "answer": "B",
      "answerText": "Output device",
      "explanation": "Official verified solution for Q239. Correct answer is Option B: Output device.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_240",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 240,
      "question": "Why is an interface device provided between the system bus and IO devices?",
      "options": {
        "A": "To provide tristate logic",
        "B": "To generate clock signals",
        "C": "To increase the memory capacity",
        "D": "Because the speed of IO devices does not match with\nthe speed of the microprocessor"
      },
      "answer": "D",
      "answerText": "Because the speed of IO devices does not match with the speed of the microprocessor",
      "explanation": "Official verified solution for Q240. Correct answer is Option D: Because the speed of IO devices does not match with the speed of the microprocessor.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_241",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 241,
      "question": "What is transferring different information at different well-defined times through the same lines\ncalled?",
      "options": {
        "A": "Multiplexing",
        "B": "Synchronizing",
        "C": "Addressing",
        "D": "Demultiplexing"
      },
      "answer": "A",
      "answerText": "Multiplexing",
      "explanation": "Official verified solution for Q241. Correct answer is Option A: Multiplexing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_242",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 242,
      "question": "What signal is provided by the 8086 processor to demultiplex the address/data lines?",
      "options": {
        "A": "DEN",
        "B": "DT/R",
        "C": "READY",
        "D": "ALE"
      },
      "answer": "D",
      "answerText": "ALE",
      "explanation": "Official verified solution for Q242. Correct answer is Option D: ALE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_243",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 243,
      "question": "Which T-state of every bus cycle is used for address latching in the 8086?",
      "options": {
        "A": "First T-state",
        "B": "Second T-state",
        "C": "Third T-state",
        "D": "Fourth T-state"
      },
      "answer": "A",
      "answerText": "First T-state",
      "explanation": "Official verified solution for Q243. Correct answer is Option A: First T-state.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_244",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 244,
      "question": "Which signal is used to decide the direction of data flow in data buffers?",
      "options": {
        "A": "ALE",
        "B": "DEN",
        "C": "DT/R",
        "D": "BHE"
      },
      "answer": "C",
      "answerText": "DT/R",
      "explanation": "Official verified solution for Q244. Correct answer is Option C: DT/R.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_245",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 245,
      "question": "Which signal is used to enable the data buffer?",
      "options": {
        "A": "ALE",
        "B": "DEN",
        "C": "DT/R",
        "D": "BHE"
      },
      "answer": "B",
      "answerText": "DEN",
      "explanation": "Official verified solution for Q245. Correct answer is Option B: DEN.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_246",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 246,
      "question": "Which signal is used to differentiate the memory and IO addresses in 8086?",
      "options": {
        "A": "ALE",
        "B": "DEN",
        "C": "BHE",
        "D": "M/IO"
      },
      "answer": "D",
      "answerText": "M/IO",
      "explanation": "Official verified solution for Q246. Correct answer is Option D: M/IO.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_247",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 247,
      "question": "In which mode does the 8086 itself generate all the bus control signals?",
      "options": {
        "A": "Halt mode",
        "B": "Idle mode",
        "C": "Minimum mode",
        "D": "Maximum mode"
      },
      "answer": "C",
      "answerText": "Minimum mode",
      "explanation": "Official verified solution for Q247. Correct answer is Option C: Minimum mode.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_248",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 248,
      "question": "What pin decides the operating mode of the 8086?",
      "options": {
        "A": "ALE",
        "B": "BHE",
        "C": "MN/MX",
        "D": "DT/R"
      },
      "answer": "C",
      "answerText": "MN/MX",
      "explanation": "Official verified solution for Q248. Correct answer is Option C: MN/MX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_249",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 249,
      "question": "What is the size of the external data bus in the 8088?",
      "options": {
        "A": "32-bit",
        "B": "64-bit",
        "C": "16-bit",
        "D": "8-bit"
      },
      "answer": "D",
      "answerText": "8-bit",
      "explanation": "Official verified solution for Q249. Correct answer is Option D: 8-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_250",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 250,
      "question": "Which status line indicates the status of the 8086 interrupt enable flag?",
      "options": {
        "A": "S4",
        "B": "S3",
        "C": "S6",
        "D": "S5"
      },
      "answer": "D",
      "answerText": "S5",
      "explanation": "Official verified solution for Q250. Correct answer is Option D: S5.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_251",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 251,
      "question": "Which signal is used by memory or IO devices to get extra time for data transfer?",
      "options": {
        "A": "HOLD",
        "B": "TEST",
        "C": "WAIT",
        "D": "READY"
      },
      "answer": "D",
      "answerText": "READY",
      "explanation": "Official verified solution for Q251. Correct answer is Option D: READY.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_252",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 252,
      "question": "Which signal is a maskable interrupt?",
      "options": {
        "A": "NMI",
        "B": "INTR",
        "C": "TEST",
        "D": "RESET"
      },
      "answer": "B",
      "answerText": "INTR",
      "explanation": "Official verified solution for Q252. Correct answer is Option B: INTR.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_253",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 253,
      "question": "Which signal is a non-maskable interrupt?",
      "options": {
        "A": "INTR",
        "B": "TEST",
        "C": "RESET",
        "D": "NMI"
      },
      "answer": "A",
      "answerText": "INTR",
      "explanation": "Official verified solution for Q253. Correct answer is Option A: INTR.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_254",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 254,
      "question": "Which unit fetches instructions and reads/writes data?",
      "options": {
        "A": "Control Unit",
        "B": "Bus Interface Unit (BIU)",
        "C": "Execution Unit (EU)",
        "D": "ALU"
      },
      "answer": "B",
      "answerText": "Bus Interface Unit (BIU)",
      "explanation": "Official verified solution for Q254. Correct answer is Option B: Bus Interface Unit (BIU).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_255",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 255,
      "question": "Which unit executes instructions that have already been fetched?",
      "options": {
        "A": "Instruction Queue",
        "B": "Address Generation Unit",
        "C": "Execution Unit (EU)",
        "D": "Bus Interface Unit (BIU)"
      },
      "answer": "C",
      "answerText": "Execution Unit (EU)",
      "explanation": "Official verified solution for Q255. Correct answer is Option C: Execution Unit (EU).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_256",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 256,
      "question": "What is the size of the instruction queue in the 8086?",
      "options": {
        "A": "16 bytes",
        "B": "8 bytes",
        "C": "4 bytes",
        "D": "6 bytes"
      },
      "answer": "D",
      "answerText": "6 bytes",
      "explanation": "Official verified solution for Q256. Correct answer is Option D: 6 bytes.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_257",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 257,
      "question": "How many 16-bit segment registers does the BIU have?",
      "options": {
        "A": "Eight",
        "B": "Six",
        "C": "Two",
        "D": "Four"
      },
      "answer": "D",
      "answerText": "Four",
      "explanation": "Official verified solution for Q257. Correct answer is Option D: Four.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_258",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 258,
      "question": "What is the size of a memory segment in the 8086?",
      "options": {
        "A": "64 kilobytes",
        "B": "32 kilobytes",
        "C": "16 kilobytes",
        "D": "1 megabyte"
      },
      "answer": "A",
      "answerText": "64 kilobytes",
      "explanation": "Official verified solution for Q258. Correct answer is Option A: 64 kilobytes.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_259",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 259,
      "question": "Which register holds the offset address of the program codes?",
      "options": {
        "A": "Stack Pointer (SP)",
        "B": "Instruction Pointer (IP)",
        "C": "Base Pointer (BP)",
        "D": "Source Index (SI)"
      },
      "answer": "B",
      "answerText": "Instruction Pointer (IP)",
      "explanation": "Official verified solution for Q259. Correct answer is Option B: Instruction Pointer (IP).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_260",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 260,
      "question": "Which register is used to hold the count value in SHIFT, ROTATE and LOOP instructions?",
      "options": {
        "A": "AX",
        "B": "CX",
        "C": "BX",
        "D": "DX"
      },
      "answer": "B",
      "answerText": "CX",
      "explanation": "Official verified solution for Q260. Correct answer is Option B: CX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_261",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 261,
      "question": "Which register is used to hold data for multiplication and division operations?",
      "options": {
        "A": "DX",
        "B": "BX",
        "C": "CX",
        "D": "AX"
      },
      "answer": "D",
      "answerText": "AX",
      "explanation": "Official verified solution for Q261. Correct answer is Option D: AX.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_262",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 262,
      "question": "How many flags does the 8086 flag register have?",
      "options": {
        "A": "6",
        "B": "16",
        "C": "9",
        "D": "8"
      },
      "answer": "C",
      "answerText": "9",
      "explanation": "Official verified solution for Q262. Correct answer is Option C: 9.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_263",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 263,
      "question": "Which flag is set if there is a carry from addition or borrow from subtraction?",
      "options": {
        "A": "Zero Flag (ZF)",
        "B": "Carry Flag (CF)",
        "C": "Auxiliary carry Flag (AF)",
        "D": "Overflow Flag (OF)"
      },
      "answer": "B",
      "answerText": "Carry Flag (CF)",
      "explanation": "Official verified solution for Q263. Correct answer is Option B: Carry Flag (CF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_264",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 264,
      "question": "Which flag is set if the result is zero?",
      "options": {
        "A": "Carry Flag (CF)",
        "B": "Parity Flag (PF)",
        "C": "Sign Flag (SF)",
        "D": "Zero Flag (ZF)"
      },
      "answer": "D",
      "answerText": "Zero Flag (ZF)",
      "explanation": "Official verified solution for Q264. Correct answer is Option D: Zero Flag (ZF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_265",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 265,
      "question": "Which control flag is used for autoincrement/autodecrement of index registers?",
      "options": {
        "A": "Carry Flag (CF)",
        "B": "Trace Flag (TF)",
        "C": "Interrupt Flag (IF)",
        "D": "Direction Flag (DF)"
      },
      "answer": "D",
      "answerText": "Direction Flag (DF)",
      "explanation": "Official verified solution for Q265. Correct answer is Option D: Direction Flag (DF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_266",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 266,
      "question": "Which control flag places the 8086 in the single-step mode?",
      "options": {
        "A": "Interrupt Flag (IF)",
        "B": "Trace Flag (TF)",
        "C": "Direction Flag (DF)",
        "D": "Parity Flag (PF)"
      },
      "answer": "B",
      "answerText": "Trace Flag (TF)",
      "explanation": "Official verified solution for Q266. Correct answer is Option B: Trace Flag (TF).",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_267",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 267,
      "question": "What is the basic memory word size of the memories used in the 8086 system?",
      "options": {
        "A": "8-bit or 1-byte",
        "B": "4-bit",
        "C": "16-bit or 2-bytes",
        "D": "32-bit"
      },
      "answer": "A",
      "answerText": "8-bit or 1-byte",
      "explanation": "Official verified solution for Q267. Correct answer is Option A: 8-bit or 1-byte.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_268",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 268,
      "question": "How is the physical memory space of 1 MB divided in the 8086 system?",
      "options": {
        "A": "One bank of 1 MB",
        "B": "Two banks of 512 kB",
        "C": "Four banks of 256 kB",
        "D": "Eight banks of 128 kB"
      },
      "answer": "B",
      "answerText": "Two banks of 512 kB",
      "explanation": "Official verified solution for Q268. Correct answer is Option B: Two banks of 512 kB.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_269",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 269,
      "question": "Which address line is used to select the even memory bank?",
      "options": {
        "A": "A0",
        "B": "BHE",
        "C": "A1",
        "D": "A19"
      },
      "answer": "A",
      "answerText": "A0",
      "explanation": "Official verified solution for Q269. Correct answer is Option A: A0.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_270",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 270,
      "question": "Which control signal is used to select the odd memory bank?",
      "options": {
        "A": "BHE",
        "B": "DEN",
        "C": "A0",
        "D": "ALE"
      },
      "answer": "A",
      "answerText": "BHE",
      "explanation": "Official verified solution for Q270. Correct answer is Option A: BHE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_271",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 271,
      "question": "How many T-states does a normal memory read/write cycle take?",
      "options": {
        "A": "Four",
        "B": "Two",
        "C": "Eight",
        "D": "Six"
      },
      "answer": "A",
      "answerText": "Four",
      "explanation": "Official verified solution for Q271. Correct answer is Option A: Four.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_272",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 272,
      "question": "Which states are introduced between T2 and T3 of a bus cycle by slow peripherals?",
      "options": {
        "A": "Halt states",
        "B": "Wait states",
        "C": "Idle states",
        "D": "Hold states"
      },
      "answer": "B",
      "answerText": "Wait states",
      "explanation": "Official verified solution for Q272. Correct answer is Option B: Wait states.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_273",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 273,
      "question": "In which T-state does the 8086 sample the READY signal?",
      "options": {
        "A": "T3",
        "B": "T2",
        "C": "T4",
        "D": "T1"
      },
      "answer": "A",
      "answerText": "T3",
      "explanation": "Official verified solution for Q273. Correct answer is Option A: T3.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_274",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 274,
      "question": "How many T-states does the interrupt acknowledge cycle take?",
      "options": {
        "A": "Eight",
        "B": "Ten",
        "C": "Six",
        "D": "Four"
      },
      "answer": "A",
      "answerText": "Eight",
      "explanation": "Official verified solution for Q274. Correct answer is Option A: Eight.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_275",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 275,
      "question": "Which bit in the instruction format defines whether the operation is on byte or word data?",
      "options": {
        "A": "v-bit",
        "B": "d-bit",
        "C": "w-bit",
        "D": "s-bit"
      },
      "answer": "C",
      "answerText": "w-bit",
      "explanation": "Official verified solution for Q275. Correct answer is Option C: w-bit.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_276",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 276,
      "question": "Which addressing mode specifies the data as part of the instruction?",
      "options": {
        "A": "Immediate addressing",
        "B": "Relative addressing",
        "C": "Direct addressing",
        "D": "Register addressing"
      },
      "answer": "A",
      "answerText": "Immediate addressing",
      "explanation": "Official verified solution for Q276. Correct answer is Option A: Immediate addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_277",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 277,
      "question": "Which addressing mode uses a register to hold the effective address?",
      "options": {
        "A": "Register indirect addressing",
        "B": "Indexed addressing",
        "C": "Based addressing",
        "D": "Direct addressing"
      },
      "answer": "A",
      "answerText": "Register indirect addressing",
      "explanation": "Official verified solution for Q277. Correct answer is Option A: Register indirect addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_278",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 278,
      "question": "In which addressing mode is the effective address given by the sum of a base value and an\nindex value?",
      "options": {
        "A": "Indexed addressing",
        "B": "Based indexed addressing",
        "C": "Based addressing",
        "D": "Direct addressing"
      },
      "answer": "B",
      "answerText": "Based indexed addressing",
      "explanation": "Official verified solution for Q278. Correct answer is Option B: Based indexed addressing.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_279",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 279,
      "question": "Which string instruction prefix repeats the execution until CX=0 or ZF=1?",
      "options": {
        "A": "LOOP",
        "B": "REP",
        "C": "REPNZ/REPNE",
        "D": "REPZ/REPE"
      },
      "answer": "D",
      "answerText": "REPZ/REPE",
      "explanation": "Official verified solution for Q279. Correct answer is Option D: REPZ/REPE.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_281",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 281,
      "question": "Which instruction clears the carry flag?",
      "options": {
        "A": "CLD",
        "B": "STC",
        "C": "CMC",
        "D": "CLC"
      },
      "answer": "D",
      "answerText": "CLC",
      "explanation": "Official verified solution for Q281. Correct answer is Option D: CLC.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_284",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 284,
      "question": "Which jump instruction transfers control if the Zero Flag is 1?",
      "options": {
        "A": "JC",
        "B": "JO",
        "C": "JE/JZ",
        "D": "JNE/JNZ"
      },
      "answer": "C",
      "answerText": "JE/JZ",
      "explanation": "Official verified solution for Q284. Correct answer is Option C: JE/JZ.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_288",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 288,
      "question": "Which segment register is used as the default for data accessed by the BX register?",
      "options": {
        "A": "ES",
        "B": "SS",
        "C": "DS",
        "D": "CS"
      },
      "answer": "C",
      "answerText": "DS",
      "explanation": "Official verified solution for Q288. Correct answer is Option C: DS.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_289",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 289,
      "question": "Which segment register is used as the default for data accessed by the BP register?",
      "options": {
        "A": "CS",
        "B": "ES",
        "C": "DS",
        "D": "SS"
      },
      "answer": "D",
      "answerText": "SS",
      "explanation": "Official verified solution for Q289. Correct answer is Option D: SS.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_290",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 290,
      "question": "What is the function of the STC instruction?",
      "options": {
        "A": "Complement carry flag",
        "B": "Set carry flag",
        "C": "Set direction flag",
        "D": "Clear carry flag"
      },
      "answer": "B",
      "answerText": "Set carry flag",
      "explanation": "Official verified solution for Q290. Correct answer is Option B: Set carry flag.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_291",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 291,
      "question": "Which instruction sets the interrupt enable flag?",
      "options": {
        "A": "STD",
        "B": "STI",
        "C": "STC",
        "D": "CLI"
      },
      "answer": "B",
      "answerText": "STI",
      "explanation": "Official verified solution for Q291. Correct answer is Option B: STI.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_292",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 292,
      "question": "Which arithmetic instruction performs addition with carry?",
      "options": {
        "A": "SUB",
        "B": "ADC",
        "C": "INC",
        "D": "ADD"
      },
      "answer": "B",
      "answerText": "ADC",
      "explanation": "Official verified solution for Q292. Correct answer is Option B: ADC.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_294",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 294,
      "question": "Which logical instruction inverts each bit of the specified data?",
      "options": {
        "A": "OR",
        "B": "AND",
        "C": "XOR",
        "D": "NOT"
      },
      "answer": "D",
      "answerText": "NOT",
      "explanation": "Official verified solution for Q294. Correct answer is Option D: NOT.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_295",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 295,
      "question": "Which shift instruction copies the sign bit into the shifted location?",
      "options": {
        "A": "SAL",
        "B": "SHR",
        "C": "SHL",
        "D": "SAR"
      },
      "answer": "D",
      "answerText": "SAR",
      "explanation": "Official verified solution for Q295. Correct answer is Option D: SAR.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_296",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 296,
      "question": "Which rotate instruction rotates left through the carry flag?",
      "options": {
        "A": "ROR",
        "B": "RCL",
        "C": "RCR",
        "D": "ROL"
      },
      "answer": "B",
      "answerText": "RCL",
      "explanation": "Official verified solution for Q296. Correct answer is Option B: RCL.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_298",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 298,
      "question": "What is the 4-bit binary number or code called?",
      "options": {
        "A": "Byte",
        "B": "Bit",
        "C": "Word",
        "D": "Nibble"
      },
      "answer": "D",
      "answerText": "Nibble",
      "explanation": "Official verified solution for Q298. Correct answer is Option D: Nibble.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_299",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 299,
      "question": "What is the 8-bit binary number or code called?",
      "options": {
        "A": "Byte",
        "B": "Word",
        "C": "Nibble",
        "D": "Double Word"
      },
      "answer": "A",
      "answerText": "Byte",
      "explanation": "Official verified solution for Q299. Correct answer is Option A: Byte.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_obj_300",
      "subjectId": "mp",
      "chapterId": "mp_obj",
      "category": "Objective Multiple Choice",
      "type": "mcq",
      "qnum": 300,
      "question": "What is the 16-bit binary number or code called?",
      "options": {
        "A": "Bit",
        "B": "Nibble",
        "C": "Byte",
        "D": "Word"
      },
      "answer": "D",
      "answerText": "Word",
      "explanation": "Official verified solution for Q300. Correct answer is Option D: Word.",
      "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
    },
    {
      "id": "mp_tf_1",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 1,
      "question": "The memories, input device, output device and interfacing devices are called peripherals .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 1 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_2",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 2,
      "question": "The RAM memory is used to store permanent programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 2 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_3",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 3,
      "question": "The Carry Flag is set to one if the result is zero.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 3 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_4",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 4,
      "question": "Every microprocessor system requires a clock for its functioning.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 4 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_5",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 5,
      "question": "The EPROM memory is used to store temporary programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 5 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_6",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 6,
      "question": "The microprocessor is a program-controlled semiconductor device (IC), which fetches data (from memory), decodes and executes instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 6 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_7",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 7,
      "question": "The input device is used to enter the program, data and to operate the system.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 7 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_8",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 8,
      "question": "The logical group includes instructions for addition and subtraction of binary data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 8 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_9",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 9,
      "question": "In direct addressing , an unsigned 16-bit displacement or signed 8-bit displacement will be specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 9 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_10",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 10,
      "question": "The data-transfer instructions always involve three operands.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 10 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_11",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 11,
      "question": "Multiplexing is allowed in a system bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 11 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_12",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 12,
      "question": "The RAM memory is used to store temporary programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 12 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_13",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 13,
      "question": "In a CPU bus , more than one signal is passed through the same line at the same timing.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 13 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_14",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 14,
      "question": "The memory write cycle is initiated by BIU of 8086 to write a data in memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 14 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_15",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 15,
      "question": "Every instruction of a program has to operate on a data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 15 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_16",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 16,
      "question": "A digit of the binary number or code is called a byte.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 16 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_17",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 17,
      "question": "The EU fetches instruction codes from the queue. True / False Practice Questions & Answers Reference Guide",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 17 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_18",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 18,
      "question": "When the MN/MX is tied high, it works in maximum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 18 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_19",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 19,
      "question": "The unconditional jump instructions check for the zero flag condition.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 19 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_20",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 20,
      "question": "In register addressing , the instruction will specify the name of the register which holds the data to be operated by the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 20 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_21",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 21,
      "question": "The high impedance state is an electrical short-circuit condition.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 21 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_22",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 22,
      "question": "Setting the Interrupt Flag (IF) to one causes the 8086 to recognize external maskable interrupts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 22 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_23",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 23,
      "question": "The high impedance state is an electrical short-circuit condition.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 23 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_24",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 24,
      "question": "The odd memory bank is selected by the control signal BHE.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 24 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_25",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 25,
      "question": "The instruction pointer generates the address of the instructions to be fetched from the memory and sends it through the address bus to the memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 25 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_26",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 26,
      "question": "The 8088 accesses memory in words.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 26 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_27",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 27,
      "question": "The 8086 microprocessor allows the user to define different memory areas for storing program and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 27 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_28",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 28,
      "question": "The six flags are used to indicate the status of the result of the arithmetic or logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 28 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_29",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 29,
      "question": "In a CPU bus , the signals are multiplexed, i.e., more than one signal is passed through the same line but at different timings.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 29 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_30",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 30,
      "question": "The 8-bit (8-digit) binary number or code is called a byte.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 30 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_31",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 31,
      "question": "The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 31 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_32",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 32,
      "question": "Three flags are used to control the processor operation and so they are also called control bits .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 32 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_33",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 33,
      "question": "The bus control logic of the BIU generates all the bus control signals such as read and write signals for memory and IO.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 33 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_34",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 34,
      "question": "The Sign Flag (SF) is set to one if the most significant bit of the result is one.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 34 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_35",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 35,
      "question": "In a conditional jump instruction , no flag conditions are checked.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 35 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_36",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 36,
      "question": "The processor also has the facility to extend the timing of bus cycles by introducing extra T-states called wait states using the READY control signal.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 36 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_37",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 37,
      "question": "A system designed using a microprocessor as its CPU is called a microcomputer .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 37 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_38",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 38,
      "question": "If the READY is tied high, the 8086 introduces wait states.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 38 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_39",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 39,
      "question": "In a CPU bus , the signals are never multiplexed.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 39 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_40",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 40,
      "question": "The Direction Flag is set to one for autoincrement and DF is reset to zero for autodecrement.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 40 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_41",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 41,
      "question": "The size of an 8086 flag register is 8-bit.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 41 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_42",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 42,
      "question": "The architecture of the 8086 can be internally divided into three separate functional units.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 42 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_43",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 43,
      "question": "The size of the instruction queue in 8086 is 6 bytes.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 43 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_44",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 44,
      "question": "The address line A0 is used to select the odd bank and the control signal BHE is used to select the even bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 44 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_45",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 45,
      "question": "The size of the instruction queue in 8086 is 8 bytes.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 45 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_46",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 46,
      "question": "The Carry Flag (CF) is set if there is a carry from addition or borrow from subtraction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 46 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_47",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 47,
      "question": "In register addressing , the instruction will specify the name of the register which holds the data to be operated by the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 47 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_48",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 48,
      "question": "The 8086 uses a 16-bit address to access memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 48 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_49",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 49,
      "question": "The Carry Flag is set to one if the result has even parity.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 49 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_50",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 50,
      "question": "The size of the binary number used to address the memory decides the physical memory space.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 50 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_51",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 51,
      "question": "A digit of the binary number or code is called a bit .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 51 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_52",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 52,
      "question": "A bus is a group of conducting lines that carries data, address and control signals.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 52 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_53",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 53,
      "question": "In direct addressing , an unsigned 16-bit displacement or signed 8-bit displacement will be specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 53 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_54",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 54,
      "question": "The 8086-based system will have two sets of memory IC's , one set for the even bank and another set for the odd bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 54 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_55",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 55,
      "question": "The Carry Flag is set to one if the result has even parity.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 55 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_56",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 56,
      "question": "A system designed using a microprocessor as its CPU is called a microcomputer .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 56 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_57",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 57,
      "question": "First generation processors are fabricated using HMOS technology .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 57 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_58",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 58,
      "question": "The processor-control group includes instructions to set or clear the carry flag, direction flag and interrupt flag.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 58 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_59",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 59,
      "question": "A near call refers to calling a procedure stored in the same code segment memory in which the main program (or calling program) resides.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 59 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_60",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 60,
      "question": "The BIU fetches instructions, reads data from memory and IO ports, and writes data to memory and IO ports.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 60 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_61",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 61,
      "question": "The RAM memory is used to store permanent programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 61 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_62",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 62,
      "question": "In a conditional jump instruction , no flag conditions are checked.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 62 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_63",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 63,
      "question": "Setting the Trace Flag to one causes the 8086 to recognize external maskable interrupts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 63 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_64",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 64,
      "question": "DT/R is used to decide the direction of data flow and DEN is used to enable the data buffer.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 64 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_65",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 65,
      "question": "The NMOS technology offers slower speed and higher density than PMOS.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 65 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_66",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 66,
      "question": "In a microprocessor system, all the peripheral/slave devices are connected to a common bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 66 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_67",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 67,
      "question": "Multiplexing is not allowed in a system bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 67 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_68",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 68,
      "question": "The control-transfer instructions alter the flags of 8086.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 68 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_69",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 69,
      "question": "The logical group includes instructions for addition and subtraction of binary data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 69 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_70",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 70,
      "question": "In based addressing , the BX or BP-register is used to hold a base value for effective address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 70 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_71",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 71,
      "question": "A microprocessor is a non-programmable IC .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 71 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_72",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 72,
      "question": "The address line BHE is used to select the even bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 72 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_73",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 73,
      "question": "The basic memory word size of the memories used in the 8086 system is 16-bit .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 73 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_74",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 74,
      "question": "The CALL instructions transfer control without saving the return address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 74 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_75",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 75,
      "question": "IBM designed its first Personal Computer (PC) using an INTEL 8088 microprocessor as the CPU.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 75 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_76",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 76,
      "question": "In based addressing , the BX or BP-register is used to hold a base value for effective address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 76 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_77",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 77,
      "question": "The CALL instructions transfer control without saving the return address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 77 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_78",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 78,
      "question": "The high impedance state is provided to keep the device electrically isolated from the system.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 78 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_79",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 79,
      "question": "The Direction Flag is set to one for autoincrement and DF is reset to zero for autodecrement.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 79 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_80",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 80,
      "question": "The data-transfer instructions always involve three operands.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 80 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_81",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 81,
      "question": "The normal time taken by 8086 to perform read/write cycle is four T-states.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 81 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_82",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 82,
      "question": "The RAM memory is used to store temporary programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 82 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_83",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 83,
      "question": "The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 83 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_84",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 84,
      "question": "A near call refers to calling a procedure stored in a different code segment memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 84 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_85",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 85,
      "question": "The output device is used for examining the results.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 85 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_86",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 86,
      "question": "The memory banks are called even (or lower) bank and odd (or upper) bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 86 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_87",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 87,
      "question": "The first-generation processors were designed using NMOS technology .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 87 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_88",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 88,
      "question": "The processor control group includes instructions to set/clear the flags, to delay and halt the processor execution.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 88 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_89",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 89,
      "question": "In direct addressing , the name of the register which holds the effective address will be specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 89 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_90",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 90,
      "question": "The normal time taken by 8086 to perform read/write cycle is two T-states.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 90 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_91",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 91,
      "question": "The size of the instruction queue in 8086 is 4 bytes.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 91 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_92",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 92,
      "question": "The data-transfer group includes instructions for moving data between registers, register and memory, register and stack memory, and accumulator and IO devices.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 92 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_93",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 93,
      "question": "NMI is the maskable interrupt input.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 93 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_94",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 94,
      "question": "The 8086 itself generates all the bus control signals in minimum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 94 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_95",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 95,
      "question": "The EU fetches instructions from memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 95 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_96",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 96,
      "question": "The 4 segment registers are used to hold four segment base addresses.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 96 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_97",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 97,
      "question": "The 8086 requires an external symmetric clock source.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 97 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_98",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 98,
      "question": "HMOS is High density n-type Metal Oxide Silicon field effect transistor.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 98 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_99",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 99,
      "question": "In pipelined architecture , the processor will have a number of functional units and the execution time of each functional unit overlaps.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 99 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_100",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 100,
      "question": "The unconditional jump instructions does not check for any flag condition.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 100 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_101",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 101,
      "question": "The CALL instructions transfer control to a subprogram or subroutine or a procedure after saving the return address in the stack memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 101 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_102",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 102,
      "question": "While executing a far call , the content of IP alone is pushed to stack.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 102 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_103",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 103,
      "question": "The memory banks are called even (or lower) bank and odd (or upper) bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 103 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_104",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 104,
      "question": "AX register is used to hold the count value in SHIFT, ROTATE and LOOP instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 104 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_105",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 105,
      "question": "In tristate logic , three logic levels are used: high, low and high impedance state.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 105 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_106",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 106,
      "question": "The memories, input device, output device and interfacing devices are called peripherals .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 106 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_107",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 107,
      "question": "In a CPU bus , the signals are never multiplexed.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 107 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_108",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 108,
      "question": "In multi-byte instructions, the second byte will specify the addressing mode of the operands.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 108 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_109",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 109,
      "question": "The interrupt acknowledge cycle is executed in response to an interrupt request through the INTR pin of 8086.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 109 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_110",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 110,
      "question": "A bus is a group of conducting lines that carries only data signals.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 110 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_111",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 111,
      "question": "The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 111 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_112",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 112,
      "question": "The CALL instructions transfer control without saving the return address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 112 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_113",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 113,
      "question": "The processor-control group includes instructions to set or clear the carry flag, direction flag and interrupt flag.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 113 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_114",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 114,
      "question": "The basic memory word size of the memories used in the 8086 system is 8-bit or 1-byte.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 114 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_115",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 115,
      "question": "SP register is used to hold data for multiplication and division operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 115 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_116",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 116,
      "question": "The Parity Flag is set if there is a carry from addition.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 116 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_117",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 117,
      "question": "The INT instructions are called hardware interrupts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 117 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_118",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 118,
      "question": "The normal time taken by 8086 to perform read/write cycle is eight T-states.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 118 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_119",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 119,
      "question": "The memory banks are called even (or lower) bank and odd (or upper) bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 119 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_120",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 120,
      "question": "The 8086 accesses memory in bytes but the 8088 accesses memory in words .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 120 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_121",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 121,
      "question": "The data lines D8-D15 are connected to the even bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 121 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_122",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 122,
      "question": "The HMOS technology offers better Speed Power Product (SPP) and higher packing density than NMOS.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 122 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_123",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 123,
      "question": "The BIU has four numbers of 16-bit segment registers.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 123 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_124",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 124,
      "question": "The second-generation microprocessors were manufactured using the PMOS technology.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 124 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_125",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 125,
      "question": "The six flags are used to indicate the status of the result of the arithmetic or logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 125 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_126",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 126,
      "question": "While executing a far call , the content of IP alone is pushed to stack.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 126 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_127",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 127,
      "question": "The 8086 accesses memory in bytes but the 8088 accesses memory in words .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 127 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_128",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 128,
      "question": "When the MN/MX is tied high, it works in maximum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 128 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_129",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 129,
      "question": "AX register is used to store 16-bit result of certain arithmetic and logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 129 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_130",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 130,
      "question": "The RAM memory is used to store permanent programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 130 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_131",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 131,
      "question": "The fourth-generation microprocessors were introduced in the year 1980.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 131 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_132",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 132,
      "question": "INTR is the maskable interrupt and INTR must be held high until it is recognized to generate an interrupt signal.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 132 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_133",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 133,
      "question": "The ALE is asserted high and then low by the processor at the end of every bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 133 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_134",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 134,
      "question": "The quantity (binary number/code) operated by an instruction of a program is used data .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 134 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_135",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 135,
      "question": "The 8086 accesses memory in bytes but the 8088 accesses memory in words .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 135 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_136",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 136,
      "question": "The lower 16 lines of the address are multiplexed with data and the upper four lines of the address are multiplexed with status signals .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 136 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_137",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 137,
      "question": "The 8086 processor uses a 32-bit address for memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 137 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_138",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 138,
      "question": "The 32-bit (32-digit) binary number or code is called a double word.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 138 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_139",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 139,
      "question": "The signal M/IO is used to differentiate the multiplexed and demultiplexed addresses.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 139 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_140",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 140,
      "question": "The data-transfer instructions always involve three operands.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 140 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_141",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 141,
      "question": "Almost all the devices used in a microprocessor-based system use tristate logic .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 141 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_142",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 142,
      "question": "If the READY is tied high, the 8086 introduces wait states.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 142 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_143",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 143,
      "question": "The 8-bit binary number or code is called a nibble.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 143 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_144",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 144,
      "question": "The maximum internal clock of 8086 is 10 MHz .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 144 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_145",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 145,
      "question": "The contents of segment registers are programmable.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 145 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_146",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 146,
      "question": "The arithmetic group includes instructions for performing logical operations like AND, OR, Exclusive-OR.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 146 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_147",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 147,
      "question": "In the direct port addressing mode , an 8-bit port address is directly specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 147 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_148",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 148,
      "question": "SP register is used to hold the offset address of top of the stack memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 148 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_149",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 149,
      "question": "Multiplexing is allowed in a system bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 149 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_150",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 150,
      "question": "The data lines D8-D15 are connected to the odd bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 150 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_151",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 151,
      "question": "When MN/MX is tied low, it works in minimum mode .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 151 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_152",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 152,
      "question": "The INT instructions are called software interrupts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 152 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_153",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 153,
      "question": "After 1978, the third-generation microprocessors were introduced.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 153 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_154",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 154,
      "question": "The RAM memory is used to store temporary programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 154 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_155",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 155,
      "question": "The 8086 processor has a 16-bit ALU; hence, it is called a 16-bit processor.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 155 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_156",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 156,
      "question": "In register indirect addressing , the name of the register which holds the Effective Address (EA) will be specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 156 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_157",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 157,
      "question": "The RAM memory is used to store permanent programs and data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 157 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_158",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 158,
      "question": "The microprocessor has to fetch (read) the data from the memory or input device for processing and after processing it has to store (write) the data in the memory or output device .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 158 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_159",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 159,
      "question": "The 8086 processor uses a 32-bit address for memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 159 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_160",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 160,
      "question": "The 8086 instructions can be classified into four groups .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 160 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_161",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 161,
      "question": "The Carry Flag (CF) is set if there is a carry from addition or borrow from subtraction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 161 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_162",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 162,
      "question": "The maximum internal clock of 8086 is 10 MHz .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 162 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_163",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 163,
      "question": "The 16-bit binary number or code is called a byte.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 163 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_164",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 164,
      "question": "The NMOS technology offers faster speed and higher density than PMOS and it is TTL compatible.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 164 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_165",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 165,
      "question": "The EU consists of ALU, flag register and general purpose registers.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 165 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_166",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 166,
      "question": "A microprocessor is a non-programmable IC .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 166 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_167",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 167,
      "question": "The maximum internal clock of 8086 is 10 MHz .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 167 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_168",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 168,
      "question": "The 8088 accesses memory in words.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 168 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_169",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 169,
      "question": "All string instructions have an implied source and destination operand.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 169 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_170",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 170,
      "question": "In a microprocessor system, all the peripheral/slave devices are connected to a common bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 170 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_171",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 171,
      "question": "First generation processors are fabricated using HCMOS technology .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 171 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_172",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 172,
      "question": "AX register is used to hold the count value in SHIFT, ROTATE and LOOP instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 172 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_173",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 173,
      "question": "If the READY is tied low, the 8086 introduces wait states after the second T-state of a bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 173 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_174",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 174,
      "question": "The address line A0 is used to select the odd bank and the control signal BHE is used to select the even bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 174 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_175",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 175,
      "question": "NMI is the non-maskable interrupt input activated by a leading edge signal.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 175 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_176",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 176,
      "question": "The memories, input device, output device and interfacing devices are called peripherals .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 176 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_177",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 177,
      "question": "A digit of the binary number or code is called a byte.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 177 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_178",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 178,
      "question": "The group of conducting lines that are directly connected to the microprocessor is called a CPU bus .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 178 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_179",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 179,
      "question": "The address bus is bidirectional.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 179 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_180",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 180,
      "question": "The size of the instruction queue in 8086 is 6 bytes.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 180 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_181",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 181,
      "question": "AX register is used to hold the count value in SHIFT, ROTATE and LOOP instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 181 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_182",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 182,
      "question": "The 8088 accesses memory in words.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 182 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_183",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 183,
      "question": "The maximum internal clock of 8086 is 5 MHz .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 183 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_184",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 184,
      "question": "The BIU fetches instruction code from the memory and stores it in the queue.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 184 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_185",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 185,
      "question": "The 8086 memory space can be divided into segments of 64 kilobytes (64 kB).",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 185 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_186",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 186,
      "question": "The HMOS technology offers worse Speed Power Product than NMOS.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 186 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_187",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 187,
      "question": "AX register is used to hold the count value in SHIFT, ROTATE and LOOP instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 187 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_188",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 188,
      "question": "The EU fetches instruction codes from the queue.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 188 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_189",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 189,
      "question": "Multiplexing is allowed in a system bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 189 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_190",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 190,
      "question": "The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 190 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_191",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 191,
      "question": "The interrupt acknowledge cycle takes four T-states to execute.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 191 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_192",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 192,
      "question": "The address bus is bidirectional.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 192 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_193",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 193,
      "question": "The processor control group includes instructions to set/clear the flags, to delay and halt the processor execution.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 193 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_194",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 194,
      "question": "The EU fetches instructions from memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 194 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_195",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 195,
      "question": "The logical group includes instructions for addition and subtraction of binary data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 195 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_196",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 196,
      "question": "The data lines D8-D15 are connected to the odd bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 196 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_197",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 197,
      "question": "The HMOS technology offers slower speed and lower packing density than NMOS.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 197 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_198",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 198,
      "question": "In immediate addressing mode , the instruction will specify the name of the register which holds the data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 198 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_199",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 199,
      "question": "The 8086 does have an internal clock circuit .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 199 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_200",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 200,
      "question": "In immediate addressing mode , the instruction will specify the name of the register which holds the data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 200 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_201",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 201,
      "question": "The HMOS technology offers slower speed and lower packing density than NMOS.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 201 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_202",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 202,
      "question": "In a CPU bus , the signals are never multiplexed.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 202 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_203",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 203,
      "question": "In register indirect addressing , the name of the register which holds the Effective Address (EA) will be specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 203 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_204",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 204,
      "question": "IBM designed its first Personal Computer (PC) using an INTEL 8088 microprocessor as the CPU.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 204 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_205",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 205,
      "question": "The 8086 uses a 20-bit address to access memory and hence it can directly address up to one megabyte (2^20 = 1 Mega) of memory space.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 205 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_206",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 206,
      "question": "The size of an 8086 instruction is fixed at two bytes .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 206 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_207",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 207,
      "question": "The ALE is asserted high and then low by the processor at the end of every bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 207 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_208",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 208,
      "question": "The size of an 8086 flag register is 8-bit.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 208 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_209",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 209,
      "question": "The EU has a 32-bit ALU to perform arithmetic and logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 209 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_210",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 210,
      "question": "The ALE is asserted high and then low by the processor at the end of every bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 210 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_211",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 211,
      "question": "The interrupt acknowledge cycle is executed in response to an interrupt request through the NMI pin of 8086.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 211 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_212",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 212,
      "question": "The EU has a 32-bit ALU to perform arithmetic and logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 212 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_213",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 213,
      "question": "The control-transfer instructions do not affect the flags of 8086.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 213 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_214",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 214,
      "question": "The six flags are used to indicate the status of the result of the arithmetic or logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 214 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_215",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 215,
      "question": "The address line A0 is used to select the odd bank and the control signal BHE is used to select the even bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 215 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_216",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 216,
      "question": "When the MN/MX is tied high, it works in maximum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 216 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_217",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 217,
      "question": "The architecture of the 8086 can be internally divided into two separate functional units : Bus Interface Unit (BIU) and Execution Unit (EU).",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 217 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_218",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 218,
      "question": "A far call refers to calling a procedure stored in the same code segment memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 218 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_219",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 219,
      "question": "The size of an 8086 flag register is 16-bit and in this, nine bits are defined as flags.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 219 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_220",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 220,
      "question": "The data lines D8-D15 are connected to the odd bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 220 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_221",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 221,
      "question": "First generation processors are fabricated using HMOS technology .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 221 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_222",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 222,
      "question": "In direct addressing , the name of the register which holds the effective address will be specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 222 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_223",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 223,
      "question": "The 8086 uses a 16-bit address to access memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 223 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_224",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 224,
      "question": "The 8086 does have an internal clock circuit .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 224 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_225",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 225,
      "question": "The normal time taken by 8086 to perform read/write cycle is two T-states.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 225 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_226",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 226,
      "question": "The dedicated address generation unit generates the 20-bit physical address from the segment base and an offset or effective address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 226 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_227",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 227,
      "question": "SP register is used to hold data for multiplication and division operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 227 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_228",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 228,
      "question": "When MN/MX# is tied low, it works in minimum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 228 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_229",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 229,
      "question": "Multiplexing is not allowed in a system bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 229 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_230",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 230,
      "question": "The ALE is asserted high and then low by the processor at the beginning of every bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 230 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_231",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 231,
      "question": "The Carry Flag is set to one if the result is zero.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 231 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_232",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 232,
      "question": "A clock is a square wave used to synchronize various devices in the microprocessor and in the system.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 232 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_233",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 233,
      "question": "Address is an identification number (in binary) for memory locations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 233 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_234",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 234,
      "question": "The 8086 processor uses a 20-bit address for memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 234 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_235",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 235,
      "question": "The control unit will generate the necessary control signals for internal and external operations of the microprocessor.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 235 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_236",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 236,
      "question": "All the slaves in the system are connected to the same system bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 236 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_237",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 237,
      "question": "The output device is used for examining the results.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 237 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_238",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 238,
      "question": "A bus is a group of conducting lines that carries only data signals.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 238 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_239",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 239,
      "question": "The EU has eight numbers of 16-bit general purpose registers.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 239 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_240",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 240,
      "question": "The group of conducting lines that carries data, address and control signals in a microcomputer system is called System bus.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 240 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_241",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 241,
      "question": "The data-transfer instructions always affect the flags of 8086.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 241 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_242",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 242,
      "question": "The 8086 can operate in two modes : minimum mode and maximum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 242 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_243",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 243,
      "question": "The normal time taken by 8086 to perform read/write cycle is four T-states.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 243 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_245",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 245,
      "question": "The first T-state of every bus cycle is used for reading or writing operation.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 245 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_246",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 246,
      "question": "The address line BHE is used to select the even bank.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 246 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_247",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 247,
      "question": "Apart from processing the data, the CPU controls the functioning of the entire system.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 247 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_248",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 248,
      "question": "INTR is activated by a leading edge signal .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 248 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_249",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 249,
      "question": "The microprocessor is a program-controlled semiconductor device (IC), which fetches data (from memory), decodes and executes instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 249 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_251",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 251,
      "question": "The 8086 processor has an 8-bit ALU.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 251 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_252",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 252,
      "question": "The content of IP gets incremented by one after every bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 252 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_253",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 253,
      "question": "The EU decodes and executes the instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 253 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_254",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 254,
      "question": "In register addressing , an 8-bit or 16-bit data is specified as part of the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 254 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_255",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 255,
      "question": "The control-transfer group consists of call, jump, loop and software interrupt instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 255 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_256",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 256,
      "question": "First generation processors are fabricated using HMOS technology .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 256 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_257",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 257,
      "question": "The basic memory word size of the memories used in the 8086 system is 16-bit .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 257 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_258",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 258,
      "question": "While executing a far call , the content of CS and IP are pushed to stack.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 258 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_259",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 259,
      "question": "In 1971, INTEL Corporation released the world's first microprocessor the INTEL 4004, an 8-bit microprocessor .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 259 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_260",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 260,
      "question": "The execution time of each instruction of 8086 is specified by INTEL in terms of clock cycles or periods of the processor.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 260 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_261",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 261,
      "question": "ALU is the unit that performs arithmetic or logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 261 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_262",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 262,
      "question": "The architecture of the 8086 can be internally divided into three separate functional units.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 262 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_263",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 263,
      "question": "Setting the Trace Flag to one causes the 8086 to recognize external maskable interrupts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 263 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_264",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 264,
      "question": "The second-generation microprocessors were manufactured using the PMOS technology.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 264 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_265",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 265,
      "question": "Setting the Trace Flag (TF) to one places the 8086 in the single-step mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 265 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_266",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 266,
      "question": "A microprocessor is a programmable IC which is capable of performing arithmetic and logical operations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 266 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_267",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 267,
      "question": "AX register is used to hold the count value in SHIFT, ROTATE and LOOP instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 267 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_268",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 268,
      "question": "The 4-bit (4-digit) binary number or code is called a nibble.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 268 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_269",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 269,
      "question": "INTR is activated by a leading edge signal .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 269 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_270",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 270,
      "question": "CX register is used to hold the count value in SHIFT, ROTATE and LOOP instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 270 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_271",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 271,
      "question": "The ALE is asserted high and then low by the processor at the beginning of every bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 271 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_272",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 272,
      "question": "The group of conducting lines that carries address is called an address bus .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 272 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_273",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 273,
      "question": "The size of the instruction queue in 8086 is 4 bytes.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 273 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_274",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 274,
      "question": "When the MN/MX is tied high, it works in maximum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 274 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_275",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 275,
      "question": "The Carry Flag is set to one if the result has even parity.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 275 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_276",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 276,
      "question": "DI register is used to hold the index value of destination operand (data) for string instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 276 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_277",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 277,
      "question": "The quantity (binary number/code) operated by an instruction of a program is used data .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 277 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_278",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 278,
      "question": "The first T-state of every bus cycle is used for reading or writing operation.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 278 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_279",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 279,
      "question": "Almost all the devices used in a microprocessor-based system use tristate logic .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 279 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_280",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 280,
      "question": "In the indirect port addressing mode , the instruction will specify the name of the register which holds the port address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 280 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_281",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 281,
      "question": "The EU fetches instruction codes from the queue.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 281 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_282",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 282,
      "question": "Multiplexing is transferring different information at different well-defined times through the same lines.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 282 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_283",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 283,
      "question": "The BIU has eight numbers of 16-bit segment registers.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 283 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_284",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 284,
      "question": "The INT instructions are called hardware interrupts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 284 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_285",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 285,
      "question": "The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 285 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_286",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 286,
      "question": "The logical instructions except shift and rotate involve two operands: source operand and destination operand.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 286 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_287",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 287,
      "question": "The status lines S3 and S4 are used to indicate which segment is accessed during the current bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 287 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_288",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 288,
      "question": "The high impedance state is an electrical short-circuit condition.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 288 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_289",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 289,
      "question": "The data-transfer group includes instructions for moving data between registers, register and memory, register and stack memory, and accumulator and IO devices.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 289 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_290",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 290,
      "question": "INTR is activated by a leading edge signal .",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 290 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_291",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 291,
      "question": "In immediate addressing mode , the instruction will specify the name of the register which holds the data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 291 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_292",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 292,
      "question": "The BIU keeps on fetching the program codes, word by word from consecutive memory locations whenever two locations of the queue are empty.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 292 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_293",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 293,
      "question": "The memory read cycle is initiated by BIU of 8086 to read a program code or data from memory.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 293 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_294",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 294,
      "question": "The interrupt acknowledge cycle takes four T-states to execute.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 294 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_295",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 295,
      "question": "The 8086 can operate in two modes : minimum mode and maximum mode.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 295 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_298",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 298,
      "question": "The arithmetic group includes instructions for addition and subtraction of binary, BCD and ASCII data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 298 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_299",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 299,
      "question": "In relative addressing , an 8-bit port address is directly specified in the instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement 299 is FALSE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_tf_300",
      "subjectId": "mp",
      "chapterId": "mp_tf",
      "category": "True or False Diagnostic",
      "type": "true_false",
      "qnum": 300,
      "question": "The data-transfer instructions generally involve two operands: source operand and destination operand.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement 300 is TRUE.",
      "source": "8086_Microprocessor_True_False_Worksheet.pdf"
    },
    {
      "id": "mp_fib_1",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 1,
      "question": "Complete the statement:\n\n\"The 4-bit binary number or code is called a nibble .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 4-bit binary number or code is called a nibble .",
      "explanation": "Complete reference statement: The 4-bit binary number or code is called a nibble .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_2",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 2,
      "question": "Complete the statement:\n\n\"The 16-bit binary number or code is called a word .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 16-bit binary number or code is called a word .",
      "explanation": "Complete reference statement: The 16-bit binary number or code is called a word .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_3",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 3,
      "question": "Complete the statement:\n\n\"The 32-bit binary number or code is called a double word .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 32-bit binary number or code is called a double word .",
      "explanation": "Complete reference statement: The 32-bit binary number or code is called a double word .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_4",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 4,
      "question": "Complete the statement:\n\n\"The 8086 processor uses a 20-bit address for memory.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 processor uses a 20-bit address for memory.",
      "explanation": "Complete reference statement: The 8086 processor uses a 20-bit address for memory.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_5",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 5,
      "question": "Complete the statement:\n\n\"The memory word size or addressability is the size of binary information that can be stored in a memory location.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The memory word size or addressability is the size of binary information that can be stored in a memory location.",
      "explanation": "Complete reference statement: The memory word size or addressability is the size of binary information that can be stored in a memory location.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_6",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 6,
      "question": "Complete the statement:\n\n\"The 8086 processor has a 16-bit ALU; hence, it is called a 16-bit processor.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 processor has a 16-bit ALU; hence, it is called a 16-bit processor.",
      "explanation": "Complete reference statement: The 8086 processor has a 16-bit ALU; hence, it is called a 16-bit processor.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_7",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 7,
      "question": "Complete the statement:\n\n\"The group of conducting lines that carries data is called a data bus .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The group of conducting lines that carries data is called a data bus .",
      "explanation": "Complete reference statement: The group of conducting lines that carries data is called a data bus .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_8",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 8,
      "question": "Complete the statement:\n\n\"The group of conducting lines that carries address is called an address bus .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The group of conducting lines that carries address is called an address bus .",
      "explanation": "Complete reference statement: The group of conducting lines that carries address is called an address bus .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_9",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 9,
      "question": "Complete the statement:\n\n\"The group of conducting lines that carries control signals is called a control bus .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The group of conducting lines that carries control signals is called a control bus .",
      "explanation": "Complete reference statement: The group of conducting lines that carries control signals is called a control bus .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_10",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 10,
      "question": "Complete the statement:\n\n\"The group of conducting lines that are directly connected to the microprocessor is called a CPU bus .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The group of conducting lines that are directly connected to the microprocessor is called a CPU bus .",
      "explanation": "Complete reference statement: The group of conducting lines that are directly connected to the microprocessor is called a CPU bus .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_11",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 11,
      "question": "Complete the statement:\n\n\"In a CPU bus, the signals are multiplexed , i.e., more than one signal is passed through the same line but at different timings.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In a CPU bus, the signals are multiplexed , i.e., more than one signal is passed through the same line but at different timings.",
      "explanation": "Complete reference statement: In a CPU bus, the signals are multiplexed , i.e., more than one signal is passed through the same line but at different timings.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_12",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 12,
      "question": "Complete the statement:\n\n\"The group of conducting lines that carries data, address and control signals in a microcomputer system is called System bus .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The group of conducting lines that carries data, address and control signals in a microcomputer system is called System bus .",
      "explanation": "Complete reference statement: The group of conducting lines that carries data, address and control signals in a microcomputer system is called System bus .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_13",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 13,
      "question": "Complete the statement:\n\n\"A clock is a square wave used to synchronize various devices in the microprocessor and in the system.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A clock is a square wave used to synchronize various devices in the microprocessor and in the system.",
      "explanation": "Complete reference statement: A clock is a square wave used to synchronize various devices in the microprocessor and in the system.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_14",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 14,
      "question": "Complete the statement:\n\n\"Every microprocessor system requires a clock for its functioning.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Every microprocessor system requires a clock for its functioning.",
      "explanation": "Complete reference statement: Every microprocessor system requires a clock for its functioning.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_15",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 15,
      "question": "Complete the statement:\n\n\"A clock has three edges: rising edge , level edge and falling edge .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A clock has three edges: rising edge , level edge and falling edge .",
      "explanation": "Complete reference statement: A clock has three edges: rising edge , level edge and falling edge .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_16",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 16,
      "question": "Complete the statement:\n\n\"Almost all the devices used in a microprocessor-based system use tristate logic .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Almost all the devices used in a microprocessor-based system use tristate logic .",
      "explanation": "Complete reference statement: Almost all the devices used in a microprocessor-based system use tristate logic .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_17",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 17,
      "question": "Complete the statement:\n\n\"In devices with tristate logic, three logic levels will be available: High state , Low state and High impedance state .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In devices with tristate logic, three logic levels will be available: High state , Low state and High impedance state .",
      "explanation": "Complete reference statement: In devices with tristate logic, three logic levels will be available: High state , Low state and High impedance state .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_18",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 18,
      "question": "Complete the statement:\n\n\"The high impedance state is an electrical open-circuit condition.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The high impedance state is an electrical open-circuit condition.",
      "explanation": "Complete reference statement: The high impedance state is an electrical open-circuit condition.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_19",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 19,
      "question": "Complete the statement:\n\n\"The tristate devices will normally remain in the high impedance state and their pins are physically connected in the system bus but electrically isolated.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The tristate devices will normally remain in the high impedance state and their pins are physically connected in the system bus but electrically isolated.",
      "explanation": "Complete reference statement: The tristate devices will normally remain in the high impedance state and their pins are physically connected in the system bus but electrically isolated.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_20",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 20,
      "question": "Complete the statement:\n\n\"ALU is the computational unit of the microprocessor which performs arithmetic and logical operations on binary data.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "ALU is the computational unit of the microprocessor which performs arithmetic and logical operations on binary data.",
      "explanation": "Complete reference statement: ALU is the computational unit of the microprocessor which performs arithmetic and logical operations on binary data.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_21",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 21,
      "question": "Complete the statement:\n\n\"The various conditions of the result are stored as status bits called flags in the flag register.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The various conditions of the result are stored as status bits called flags in the flag register.",
      "explanation": "Complete reference statement: The various conditions of the result are stored as status bits called flags in the flag register.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_22",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 22,
      "question": "Complete the statement:\n\n\"The instruction pointer generates the address of the instructions to be fetched from the memory and sends it through the address bus to the memory.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The instruction pointer generates the address of the instructions to be fetched from the memory and sends it through the address bus to the memory.",
      "explanation": "Complete reference statement: The instruction pointer generates the address of the instructions to be fetched from the memory and sends it through the address bus to the memory.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_23",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 23,
      "question": "Complete the statement:\n\n\"The memory will send the instruction codes and data through the data bus .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The memory will send the instruction codes and data through the data bus .",
      "explanation": "Complete reference statement: The memory will send the instruction codes and data through the data bus .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_24",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 24,
      "question": "Complete the statement:\n\n\"The instruction codes are decoded by the decoding unit and it sends information to the timing and control unit.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The instruction codes are decoded by the decoding unit and it sends information to the timing and control unit.",
      "explanation": "Complete reference statement: The instruction codes are decoded by the decoding unit and it sends information to the timing and control unit.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_25",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 25,
      "question": "Complete the statement:\n\n\"The control unit will generate the necessary control signals for internal and external operations of the microprocessor.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The control unit will generate the necessary control signals for internal and external operations of the microprocessor.",
      "explanation": "Complete reference statement: The control unit will generate the necessary control signals for internal and external operations of the microprocessor.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_26",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 26,
      "question": "Complete the statement:\n\n\"The memories, input device, output device and interfacing devices are called peripherals .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The memories, input device, output device and interfacing devices are called peripherals .",
      "explanation": "Complete reference statement: The memories, input device, output device and interfacing devices are called peripherals .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_27",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 27,
      "question": "Complete the statement:\n\n\"The EPROM memory is used to store permanent programs and data.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The EPROM memory is used to store permanent programs and data.",
      "explanation": "Complete reference statement: The EPROM memory is used to store permanent programs and data.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_28",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 28,
      "question": "Complete the statement:\n\n\"The RAM memory is used to store temporary programs and data.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The RAM memory is used to store temporary programs and data.",
      "explanation": "Complete reference statement: The RAM memory is used to store temporary programs and data.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_29",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 29,
      "question": "Complete the statement:\n\n\"The program consists of a set of instructions stored in consecutive memory locations.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The program consists of a set of instructions stored in consecutive memory locations.",
      "explanation": "Complete reference statement: The program consists of a set of instructions stored in consecutive memory locations.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_30",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 30,
      "question": "Complete the statement:\n\n\"Multiplexing is transferring different information at different well-defined times through the same lines.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Multiplexing is transferring different information at different well-defined times through the same lines.",
      "explanation": "Complete reference statement: Multiplexing is transferring different information at different well-defined times through the same lines.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_31",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 31,
      "question": "Complete the statement:\n\n\"The result of multiplexing is that fewer pins are required for microprocessors to communicate with the outside world.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The result of multiplexing is that fewer pins are required for microprocessors to communicate with the outside world.",
      "explanation": "Complete reference statement: The result of multiplexing is that fewer pins are required for microprocessors to communicate with the outside world.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_32",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 32,
      "question": "Complete the statement:\n\n\"In order to demultiplex the address/data lines, the processor provides a signal called Address Latch Enable (ALE) .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In order to demultiplex the address/data lines, the processor provides a signal called Address Latch Enable (ALE) .",
      "explanation": "Complete reference statement: In order to demultiplex the address/data lines, the processor provides a signal called Address Latch Enable (ALE) .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_33",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 33,
      "question": "Complete the statement:\n\n\"The ALE is asserted high and then low by the processor at the beginning of every bus cycle.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The ALE is asserted high and then low by the processor at the beginning of every bus cycle.",
      "explanation": "Complete reference statement: The ALE is asserted high and then low by the processor at the beginning of every bus cycle.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_34",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 34,
      "question": "Complete the statement:\n\n\"The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.",
      "explanation": "Complete reference statement: The first T-state of every bus cycle is used for address latching in 8086 and the remaining T-states are used for reading or writing operation.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_35",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 35,
      "question": "Complete the statement:\n\n\"The 8086 provides two control signals, DT/R# and DEN , for controlling the data buffers.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 provides two control signals, DT/R# and DEN , for controlling the data buffers.",
      "explanation": "Complete reference statement: The 8086 provides two control signals, DT/R# and DEN , for controlling the data buffers.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_36",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 36,
      "question": "Complete the statement:\n\n\"DT/R# is used to decide the direction of data flow and DEN is used to enable the data buffer.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "DT/R# is used to decide the direction of data flow and DEN is used to enable the data buffer.",
      "explanation": "Complete reference statement: DT/R# is used to decide the direction of data flow and DEN is used to enable the data buffer.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_37",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 37,
      "question": "Complete the statement:\n\n\"The size of the binary number used to address the memory decides the physical memory space .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The size of the binary number used to address the memory decides the physical memory space .",
      "explanation": "Complete reference statement: The size of the binary number used to address the memory decides the physical memory space .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_38",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 38,
      "question": "Complete the statement:\n\n\"If a microprocessor has n-address pins then it can directly address 2^n memory locations.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "If a microprocessor has n-address pins then it can directly address 2^n memory locations.",
      "explanation": "Complete reference statement: If a microprocessor has n-address pins then it can directly address 2^n memory locations.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_39",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 39,
      "question": "Complete the statement:\n\n\"ALU is the unit that performs arithmetic or logical operations.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "ALU is the unit that performs arithmetic or logical operations.",
      "explanation": "Complete reference statement: ALU is the unit that performs arithmetic or logical operations.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_40",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 40,
      "question": "Complete the statement:\n\n\"CPU is the unit that includes ALU and control unit .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "CPU is the unit that includes ALU and control unit .",
      "explanation": "Complete reference statement: CPU is the unit that includes ALU and control unit .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_41",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 41,
      "question": "Complete the statement:\n\n\"In tristate logic, three logic levels are used: high , low and high impedance state .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In tristate logic, three logic levels are used: high , low and high impedance state .",
      "explanation": "Complete reference statement: In tristate logic, three logic levels are used: high , low and high impedance state .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_42",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 42,
      "question": "Complete the statement:\n\n\"In a microprocessor system, all the peripheral devices are connected to a common bus .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In a microprocessor system, all the peripheral devices are connected to a common bus .",
      "explanation": "Complete reference statement: In a microprocessor system, all the peripheral devices are connected to a common bus .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_43",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 43,
      "question": "Complete the statement:\n\n\"The 8086 requires an external asymmetric clock source with 33% duty cycle.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 requires an external asymmetric clock source with 33% duty cycle.",
      "explanation": "Complete reference statement: The 8086 requires an external asymmetric clock source with 33% duty cycle.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_44",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 44,
      "question": "Complete the statement:\n\n\"The 8284 clock generator is used to generate the required clock for 8086.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8284 clock generator is used to generate the required clock for 8086.",
      "explanation": "Complete reference statement: The 8284 clock generator is used to generate the required clock for 8086.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_45",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 45,
      "question": "Complete the statement:\n\n\"The 8086 uses a 20-bit address to access memory and hence it can directly address up to one megabyte of memory space.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 uses a 20-bit address to access memory and hence it can directly address up to one megabyte of memory space.",
      "explanation": "Complete reference statement: The 8086 uses a 20-bit address to access memory and hence it can directly address up to one megabyte of memory space.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_46",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 46,
      "question": "Complete the statement:\n\n\"One megabyte of addressable memory space of 8086 are organized as two memory banks of 512 kilobytes each.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "One megabyte of addressable memory space of 8086 are organized as two memory banks of 512 kilobytes each.",
      "explanation": "Complete reference statement: One megabyte of addressable memory space of 8086 are organized as two memory banks of 512 kilobytes each.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_47",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 47,
      "question": "Complete the statement:\n\n\"The address line A0 is used to select the even bank and the control signal BHE is used to select the odd bank.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The address line A0 is used to select the even bank and the control signal BHE is used to select the odd bank.",
      "explanation": "Complete reference statement: The address line A0 is used to select the even bank and the control signal BHE is used to select the odd bank.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_48",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 48,
      "question": "Complete the statement:\n\n\"The signal M/IO# is used to differentiate the memory and IO addresses.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The signal M/IO# is used to differentiate the memory and IO addresses.",
      "explanation": "Complete reference statement: The signal M/IO# is used to differentiate the memory and IO addresses.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_49",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 49,
      "question": "Complete the statement:\n\n\"The 8086 can operate in two modes: minimum mode and maximum mode .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 can operate in two modes: minimum mode and maximum mode .",
      "explanation": "Complete reference statement: The 8086 can operate in two modes: minimum mode and maximum mode .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_50",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 50,
      "question": "Complete the statement:\n\n\"When the MN/MX# is tied high, it works in minimum mode and the system is called a uniprocessor system.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "When the MN/MX# is tied high, it works in minimum mode and the system is called a uniprocessor system.",
      "explanation": "Complete reference statement: When the MN/MX# is tied high, it works in minimum mode and the system is called a uniprocessor system.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_51",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 51,
      "question": "Complete the statement:\n\n\"When MN/MX# is tied low, it works in maximum mode and the system is called a multiprocessor system.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "When MN/MX# is tied low, it works in maximum mode and the system is called a multiprocessor system.",
      "explanation": "Complete reference statement: When MN/MX# is tied low, it works in maximum mode and the system is called a multiprocessor system.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_52",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 52,
      "question": "Complete the statement:\n\n\"The 8088 uses an 8-bit data bus externally but the 8086 uses a 16-bit data bus externally.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8088 uses an 8-bit data bus externally but the 8086 uses a 16-bit data bus externally.",
      "explanation": "Complete reference statement: The 8088 uses an 8-bit data bus externally but the 8086 uses a 16-bit data bus externally.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_53",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 53,
      "question": "Complete the statement:\n\n\"The 8086 accesses memory in words but the 8088 accesses memory in bytes .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 accesses memory in words but the 8088 accesses memory in bytes .",
      "explanation": "Complete reference statement: The 8086 accesses memory in words but the 8088 accesses memory in bytes .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_54",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 54,
      "question": "Complete the statement:\n\n\"The lower 16 lines of the address are multiplexed with data and the upper four lines of the address are multiplexed with status signals.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The lower 16 lines of the address are multiplexed with data and the upper four lines of the address are multiplexed with status signals.",
      "explanation": "Complete reference statement: The lower 16 lines of the address are multiplexed with data and the upper four lines of the address are multiplexed with status signals.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_55",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 55,
      "question": "Complete the statement:\n\n\"The status lines S3 and S4 are used to indicate which segment is accessed during the current bus cycle.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The status lines S3 and S4 are used to indicate which segment is accessed during the current bus cycle.",
      "explanation": "Complete reference statement: The status lines S3 and S4 are used to indicate which segment is accessed during the current bus cycle.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_56",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 56,
      "question": "Complete the statement:\n\n\"The status line S5 indicates the status of the 8086 interrupt enable flag.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The status line S5 indicates the status of the 8086 interrupt enable flag.",
      "explanation": "Complete reference statement: The status line S5 indicates the status of the 8086 interrupt enable flag.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_57",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 57,
      "question": "Complete the statement:\n\n\"When the processor reads from the memory or an IO location, it asserts RD# as low.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "When the processor reads from the memory or an IO location, it asserts RD# as low.",
      "explanation": "Complete reference statement: When the processor reads from the memory or an IO location, it asserts RD# as low.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_58",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 58,
      "question": "Complete the statement:\n\n\"The TEST input is tested by the WAIT instruction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The TEST input is tested by the WAIT instruction.",
      "explanation": "Complete reference statement: The TEST input is tested by the WAIT instruction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_59",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 59,
      "question": "Complete the statement:\n\n\"INTR is the maskable interrupt and INTR must be held high until it is recognized to generate an interrupt signal.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "INTR is the maskable interrupt and INTR must be held high until it is recognized to generate an interrupt signal.",
      "explanation": "Complete reference statement: INTR is the maskable interrupt and INTR must be held high until it is recognized to generate an interrupt signal.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_60",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 60,
      "question": "Complete the statement:\n\n\"NMI is the non-maskable interrupt input activated by a leading edge signal.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "NMI is the non-maskable interrupt input activated by a leading edge signal.",
      "explanation": "Complete reference statement: NMI is the non-maskable interrupt input activated by a leading edge signal.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_61",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 61,
      "question": "Complete the statement:\n\n\"RESET is the system reset input signal.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "RESET is the system reset input signal.",
      "explanation": "Complete reference statement: RESET is the system reset input signal.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_62",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 62,
      "question": "Complete the statement:\n\n\"READY is an input signal to the processor, used by the memory or IO devices to get extra time for data transfer.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "READY is an input signal to the processor, used by the memory or IO devices to get extra time for data transfer.",
      "explanation": "Complete reference statement: READY is an input signal to the processor, used by the memory or IO devices to get extra time for data transfer.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_63",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 63,
      "question": "Complete the statement:\n\n\"If the READY is tied low, the 8086 introduces wait states after the second T-state of a bus cycle.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "If the READY is tied low, the 8086 introduces wait states after the second T-state of a bus cycle.",
      "explanation": "Complete reference statement: If the READY is tied low, the 8086 introduces wait states after the second T-state of a bus cycle.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_64",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 64,
      "question": "Complete the statement:\n\n\"CLK input is the clock signal that provides the basic timing for the 8086 and bus controller.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "CLK input is the clock signal that provides the basic timing for the 8086 and bus controller.",
      "explanation": "Complete reference statement: CLK input is the clock signal that provides the basic timing for the 8086 and bus controller.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_65",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 65,
      "question": "Complete the statement:\n\n\"The 8086 has a pipelined architecture.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 has a pipelined architecture.",
      "explanation": "Complete reference statement: The 8086 has a pipelined architecture.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_66",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 66,
      "question": "Complete the statement:\n\n\"The architecture of the 8086 can be internally divided into two separate functional units: Bus Interface Unit (BIU) and Execution Unit (EU) .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The architecture of the 8086 can be internally divided into two separate functional units: Bus Interface Unit (BIU) and Execution Unit (EU) .",
      "explanation": "Complete reference statement: The architecture of the 8086 can be internally divided into two separate functional units: Bus Interface Unit (BIU) and Execution Unit (EU) .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_67",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 67,
      "question": "Complete the statement:\n\n\"The BIU fetches instructions, reads data from memory and IO ports, and writes data to memory and IO ports.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The BIU fetches instructions, reads data from memory and IO ports, and writes data to memory and IO ports.",
      "explanation": "Complete reference statement: The BIU fetches instructions, reads data from memory and IO ports, and writes data to memory and IO ports.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_68",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 68,
      "question": "Complete the statement:\n\n\"The EU executes instructions that have already been fetched by the BIU.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The EU executes instructions that have already been fetched by the BIU.",
      "explanation": "Complete reference statement: The EU executes instructions that have already been fetched by the BIU.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_69",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 69,
      "question": "Complete the statement:\n\n\"The instruction queue is a FIFO group of registers.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The instruction queue is a FIFO group of registers.",
      "explanation": "Complete reference statement: The instruction queue is a FIFO group of registers.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_70",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 70,
      "question": "Complete the statement:\n\n\"The BIU has four numbers of 16-bit segment registers.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The BIU has four numbers of 16-bit segment registers.",
      "explanation": "Complete reference statement: The BIU has four numbers of 16-bit segment registers.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_71",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 71,
      "question": "Complete the statement:\n\n\"The 8086 memory space can be divided into segments of 64 kilobytes .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 memory space can be divided into segments of 64 kilobytes .",
      "explanation": "Complete reference statement: The 8086 memory space can be divided into segments of 64 kilobytes .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_72",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 72,
      "question": "Complete the statement:\n\n\"The contents of segment registers are programmable .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The contents of segment registers are programmable .",
      "explanation": "Complete reference statement: The contents of segment registers are programmable .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_73",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 73,
      "question": "Complete the statement:\n\n\"The dedicated address generation unit generates the 20-bit physical address from the segment base and an offset or effective address.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The dedicated address generation unit generates the 20-bit physical address from the segment base and an offset or effective address.",
      "explanation": "Complete reference statement: The dedicated address generation unit generates the 20-bit physical address from the segment base and an offset or effective address.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_74",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 74,
      "question": "Complete the statement:\n\n\"The IP holds the offset address of the program codes.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The IP holds the offset address of the program codes.",
      "explanation": "Complete reference statement: The IP holds the offset address of the program codes.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_75",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 75,
      "question": "Complete the statement:\n\n\"The bus control logic of the BIU generates all the bus control signals such as read and write signals for memory and IO.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The bus control logic of the BIU generates all the bus control signals such as read and write signals for memory and IO.",
      "explanation": "Complete reference statement: The bus control logic of the BIU generates all the bus control signals such as read and write signals for memory and IO.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_76",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 76,
      "question": "Complete the statement:\n\n\"The EU has a 16-bit ALU to perform arithmetic and logical operations.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The EU has a 16-bit ALU to perform arithmetic and logical operations.",
      "explanation": "Complete reference statement: The EU has a 16-bit ALU to perform arithmetic and logical operations.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_77",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 77,
      "question": "Complete the statement:\n\n\"The EU has eight numbers of 16-bit general purpose registers.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The EU has eight numbers of 16-bit general purpose registers.",
      "explanation": "Complete reference statement: The EU has eight numbers of 16-bit general purpose registers.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_78",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 78,
      "question": "Complete the statement:\n\n\"The size of an 8086 flag register is 16-bit and in this, nine bits are defined as flags.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The size of an 8086 flag register is 16-bit and in this, nine bits are defined as flags.",
      "explanation": "Complete reference statement: The size of an 8086 flag register is 16-bit and in this, nine bits are defined as flags.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_79",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 79,
      "question": "Complete the statement:\n\n\"The Carry Flag is set if there is a carry from addition or borrow from subtraction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Carry Flag is set if there is a carry from addition or borrow from subtraction.",
      "explanation": "Complete reference statement: The Carry Flag is set if there is a carry from addition or borrow from subtraction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_80",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 80,
      "question": "Complete the statement:\n\n\"The Auxiliary carry Flag is set if there is a carry from low nibble to high nibble of the low order 8-bit of a 16-bit number.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Auxiliary carry Flag is set if there is a carry from low nibble to high nibble of the low order 8-bit of a 16-bit number.",
      "explanation": "Complete reference statement: The Auxiliary carry Flag is set if there is a carry from low nibble to high nibble of the low order 8-bit of a 16-bit number.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_81",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 81,
      "question": "Complete the statement:\n\n\"The Overflow Flag is set to one if there is an arithmetic overflow.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Overflow Flag is set to one if there is an arithmetic overflow.",
      "explanation": "Complete reference statement: The Overflow Flag is set to one if there is an arithmetic overflow.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_82",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 82,
      "question": "Complete the statement:\n\n\"The Sign Flag is set to one if the most significant bit of the result is one.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Sign Flag is set to one if the most significant bit of the result is one.",
      "explanation": "Complete reference statement: The Sign Flag is set to one if the most significant bit of the result is one.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_83",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 83,
      "question": "Complete the statement:\n\n\"The Parity Flag is set to one if the result has even parity.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Parity Flag is set to one if the result has even parity.",
      "explanation": "Complete reference statement: The Parity Flag is set to one if the result has even parity.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_84",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 84,
      "question": "Complete the statement:\n\n\"The Zero Flag is set to one if the result is zero.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Zero Flag is set to one if the result is zero.",
      "explanation": "Complete reference statement: The Zero Flag is set to one if the result is zero.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_85",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 85,
      "question": "Complete the statement:\n\n\"The Direction Flag is set to one for autodecrement and DF is reset to zero for autoincrement of SI and DI registers.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Direction Flag is set to one for autodecrement and DF is reset to zero for autoincrement of SI and DI registers.",
      "explanation": "Complete reference statement: The Direction Flag is set to one for autodecrement and DF is reset to zero for autoincrement of SI and DI registers.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_86",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 86,
      "question": "Complete the statement:\n\n\"Setting the Interrupt Flag to one causes the 8086 to recognize external maskable interrupts.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Setting the Interrupt Flag to one causes the 8086 to recognize external maskable interrupts.",
      "explanation": "Complete reference statement: Setting the Interrupt Flag to one causes the 8086 to recognize external maskable interrupts.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_87",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 87,
      "question": "Complete the statement:\n\n\"Setting the Trace Flag to one places the 8086 in the single-step mode.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Setting the Trace Flag to one places the 8086 in the single-step mode.",
      "explanation": "Complete reference statement: Setting the Trace Flag to one places the 8086 in the single-step mode.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_88",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 88,
      "question": "Complete the statement:\n\n\"The 8086 computes the 20-bit physical address of the program instruction by multiplying the content of the CS- register by 16 and adding it to the content of IP .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 computes the 20-bit physical address of the program instruction by multiplying the content of the CS- register by 16 and adding it to the content of IP .",
      "explanation": "Complete reference statement: The 8086 computes the 20-bit physical address of the program instruction by multiplying the content of the CS- register by 16 and adding it to the content of IP .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_89",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 89,
      "question": "Complete the statement:\n\n\"The BIU keeps on fetching the program codes, word by word from consecutive memory locations whenever two locations of the queue are empty.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The BIU keeps on fetching the program codes, word by word from consecutive memory locations whenever two locations of the queue are empty.",
      "explanation": "Complete reference statement: The BIU keeps on fetching the program codes, word by word from consecutive memory locations whenever two locations of the queue are empty.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_90",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 90,
      "question": "Complete the statement:\n\n\"The basic memory word size of the memories used in the 8086 system is 8-bit or 1-byte .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The basic memory word size of the memories used in the 8086 system is 8-bit or 1-byte .",
      "explanation": "Complete reference statement: The basic memory word size of the memories used in the 8086 system is 8-bit or 1-byte .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_91",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 91,
      "question": "Complete the statement:\n\n\"The 8086-based system will have two sets of memory ICs, one set for the even bank and another set for the odd bank .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086-based system will have two sets of memory ICs, one set for the even bank and another set for the odd bank .",
      "explanation": "Complete reference statement: The 8086-based system will have two sets of memory ICs, one set for the even bank and another set for the odd bank .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_92",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 92,
      "question": "Complete the statement:\n\n\"The data lines D0-D7 are connected to the even bank and the data lines D8-D15 are connected to the odd bank.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The data lines D0-D7 are connected to the even bank and the data lines D8-D15 are connected to the odd bank.",
      "explanation": "Complete reference statement: The data lines D0-D7 are connected to the even bank and the data lines D8-D15 are connected to the odd bank.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_93",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 93,
      "question": "Complete the statement:\n\n\"The BIU initiates all external operations which are also called bus activity .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The BIU initiates all external operations which are also called bus activity .",
      "explanation": "Complete reference statement: The BIU initiates all external operations which are also called bus activity .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_94",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 94,
      "question": "Complete the statement:\n\n\"The basic operations performed by the CPU bus are called bus cycles .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The basic operations performed by the CPU bus are called bus cycles .",
      "explanation": "Complete reference statement: The basic operations performed by the CPU bus are called bus cycles .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_95",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 95,
      "question": "Complete the statement:\n\n\"The normal time taken by 8086 to perform read/write cycle is four T-states .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The normal time taken by 8086 to perform read/write cycle is four T-states .",
      "explanation": "Complete reference statement: The normal time taken by 8086 to perform read/write cycle is four T-states .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_96",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 96,
      "question": "Complete the statement:\n\n\"The memory read cycle is initiated by BIU of 8086 to read a program code or data from memory.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The memory read cycle is initiated by BIU of 8086 to read a program code or data from memory.",
      "explanation": "Complete reference statement: The memory read cycle is initiated by BIU of 8086 to read a program code or data from memory.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_97",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 97,
      "question": "Complete the statement:\n\n\"The memory write cycle is initiated by BIU of 8086 to write a data in memory.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The memory write cycle is initiated by BIU of 8086 to write a data in memory.",
      "explanation": "Complete reference statement: The memory write cycle is initiated by BIU of 8086 to write a data in memory.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_98",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 98,
      "question": "Complete the statement:\n\n\"The interrupt acknowledge cycle is executed in response to an interrupt request through the INTR pin of\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The interrupt acknowledge cycle is executed in response to an interrupt request through the INTR pin of",
      "explanation": "Complete reference statement: The interrupt acknowledge cycle is executed in response to an interrupt request through the INTR pin of",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_8086",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 8086,
      "question": "Complete the statement:\n\n\"\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "",
      "explanation": "Complete reference statement: ",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_99",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 99,
      "question": "Complete the statement:\n\n\"The 8086 instructions can be classified into six groups.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 instructions can be classified into six groups.",
      "explanation": "Complete reference statement: The 8086 instructions can be classified into six groups.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_100",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 100,
      "question": "Complete the statement:\n\n\"The data-transfer group includes instructions for moving data between registers, register and memory, register and stack memory, and accumulator and IO devices.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The data-transfer group includes instructions for moving data between registers, register and memory, register and stack memory, and accumulator and IO devices.",
      "explanation": "Complete reference statement: The data-transfer group includes instructions for moving data between registers, register and memory, register and stack memory, and accumulator and IO devices.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_101",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 101,
      "question": "Complete the statement:\n\n\"The arithmetic group includes instructions for addition and subtraction of binary, BCD and ASCII data.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The arithmetic group includes instructions for addition and subtraction of binary, BCD and ASCII data.",
      "explanation": "Complete reference statement: The arithmetic group includes instructions for addition and subtraction of binary, BCD and ASCII data.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_102",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 102,
      "question": "Complete the statement:\n\n\"The logical group includes instructions for performing logical operations like AND, OR, Exclusive-OR, Complement, Shift, Rotate, etc.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The logical group includes instructions for performing logical operations like AND, OR, Exclusive-OR, Complement, Shift, Rotate, etc.",
      "explanation": "Complete reference statement: The logical group includes instructions for performing logical operations like AND, OR, Exclusive-OR, Complement, Shift, Rotate, etc.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_103",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 103,
      "question": "Complete the statement:\n\n\"The string-manipulation group includes instructions for moving string data between two memory locations.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The string-manipulation group includes instructions for moving string data between two memory locations.",
      "explanation": "Complete reference statement: The string-manipulation group includes instructions for moving string data between two memory locations.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_104",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 104,
      "question": "Complete the statement:\n\n\"The control-transfer group includes instructions to call a procedure or subroutine in the main program.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The control-transfer group includes instructions to call a procedure or subroutine in the main program.",
      "explanation": "Complete reference statement: The control-transfer group includes instructions to call a procedure or subroutine in the main program.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_105",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 105,
      "question": "Complete the statement:\n\n\"The processor control group includes instructions to set or clear the flags, to delay and halt the processor execution.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The processor control group includes instructions to set or clear the flags, to delay and halt the processor execution.",
      "explanation": "Complete reference statement: The processor control group includes instructions to set or clear the flags, to delay and halt the processor execution.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_106",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 106,
      "question": "Complete the statement:\n\n\"The size of an 8086 instruction is one to six bytes.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The size of an 8086 instruction is one to six bytes.",
      "explanation": "Complete reference statement: The size of an 8086 instruction is one to six bytes.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_107",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 107,
      "question": "Complete the statement:\n\n\"The first byte of the instruction will have a 6-bit opcode and two special bit indicators.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The first byte of the instruction will have a 6-bit opcode and two special bit indicators.",
      "explanation": "Complete reference statement: The first byte of the instruction will have a 6-bit opcode and two special bit indicators.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_108",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 108,
      "question": "Complete the statement:\n\n\"In multi-byte instructions, the second byte will specify the addressing mode of the operands.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In multi-byte instructions, the second byte will specify the addressing mode of the operands.",
      "explanation": "Complete reference statement: In multi-byte instructions, the second byte will specify the addressing mode of the operands.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_109",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 109,
      "question": "Complete the statement:\n\n\"Every instruction of a program has to operate on a data .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Every instruction of a program has to operate on a data .",
      "explanation": "Complete reference statement: Every instruction of a program has to operate on a data .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_110",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 110,
      "question": "Complete the statement:\n\n\"The method of specifying the data to be operated by the instruction is called addressing .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The method of specifying the data to be operated by the instruction is called addressing .",
      "explanation": "Complete reference statement: The method of specifying the data to be operated by the instruction is called addressing .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_111",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 111,
      "question": "Complete the statement:\n\n\"In register addressing , the instruction will specify the name of the register which holds the data to be operated by the instruction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In register addressing , the instruction will specify the name of the register which holds the data to be operated by the instruction.",
      "explanation": "Complete reference statement: In register addressing , the instruction will specify the name of the register which holds the data to be operated by the instruction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_112",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 112,
      "question": "Complete the statement:\n\n\"In immediate addressing mode , an 8-bit or 16-bit data is specified as part of the instruction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In immediate addressing mode , an 8-bit or 16-bit data is specified as part of the instruction.",
      "explanation": "Complete reference statement: In immediate addressing mode , an 8-bit or 16-bit data is specified as part of the instruction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_113",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 113,
      "question": "Complete the statement:\n\n\"In direct addressing , an unsigned 16-bit displacement or signed 8-bit displacement will be specified in the instruction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In direct addressing , an unsigned 16-bit displacement or signed 8-bit displacement will be specified in the instruction.",
      "explanation": "Complete reference statement: In direct addressing , an unsigned 16-bit displacement or signed 8-bit displacement will be specified in the instruction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_114",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 114,
      "question": "Complete the statement:\n\n\"In register indirect addressing , the name of the register which holds the effective address will be specified in the instruction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In register indirect addressing , the name of the register which holds the effective address will be specified in the instruction.",
      "explanation": "Complete reference statement: In register indirect addressing , the name of the register which holds the effective address will be specified in the instruction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_115",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 115,
      "question": "Complete the statement:\n\n\"In based addressing , the BX or BP-register is used to hold a base value for effective address.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In based addressing , the BX or BP-register is used to hold a base value for effective address.",
      "explanation": "Complete reference statement: In based addressing , the BX or BP-register is used to hold a base value for effective address.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_116",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 116,
      "question": "Complete the statement:\n\n\"In indexed addressing , the SI or DI-register is used to hold an index value for memory data.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In indexed addressing , the SI or DI-register is used to hold an index value for memory data.",
      "explanation": "Complete reference statement: In indexed addressing , the SI or DI-register is used to hold an index value for memory data.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_117",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 117,
      "question": "Complete the statement:\n\n\"In string addressing mode , the effective address of source data is stored in SI-register and the effective address of destination data is stored in DI-register.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In string addressing mode , the effective address of source data is stored in SI-register and the effective address of destination data is stored in DI-register.",
      "explanation": "Complete reference statement: In string addressing mode , the effective address of source data is stored in SI-register and the effective address of destination data is stored in DI-register.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_118",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 118,
      "question": "Complete the statement:\n\n\"In the direct port addressing mode , an 8-bit port address is directly specified in the instruction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In the direct port addressing mode , an 8-bit port address is directly specified in the instruction.",
      "explanation": "Complete reference statement: In the direct port addressing mode , an 8-bit port address is directly specified in the instruction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_119",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 119,
      "question": "Complete the statement:\n\n\"In the indirect port addressing mode , the instruction will specify the name of the register which holds the port address.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In the indirect port addressing mode , the instruction will specify the name of the register which holds the port address.",
      "explanation": "Complete reference statement: In the indirect port addressing mode , the instruction will specify the name of the register which holds the port address.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_120",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 120,
      "question": "Complete the statement:\n\n\"In relative addressing , the effective address of a program instruction is specified relative to the Instruction Pointer by an 8-bit signed displacement.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In relative addressing , the effective address of a program instruction is specified relative to the Instruction Pointer by an 8-bit signed displacement.",
      "explanation": "Complete reference statement: In relative addressing , the effective address of a program instruction is specified relative to the Instruction Pointer by an 8-bit signed displacement.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_121",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 121,
      "question": "Complete the statement:\n\n\"In implied addressing mode , the instruction itself will specify the data to be operated by the instruction.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "In implied addressing mode , the instruction itself will specify the data to be operated by the instruction.",
      "explanation": "Complete reference statement: In implied addressing mode , the instruction itself will specify the data to be operated by the instruction.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_122",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 122,
      "question": "Complete the statement:\n\n\"The execution time of each instruction of 8086 is specified by INTEL in terms of clock cycles or periods of the processor.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The execution time of each instruction of 8086 is specified by INTEL in terms of clock cycles or periods of the processor.",
      "explanation": "Complete reference statement: The execution time of each instruction of 8086 is specified by INTEL in terms of clock cycles or periods of the processor.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_123",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 123,
      "question": "Complete the statement:\n\n\"The data-transfer instructions generally involve two operands: source operand and destination operand .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The data-transfer instructions generally involve two operands: source operand and destination operand .",
      "explanation": "Complete reference statement: The data-transfer instructions generally involve two operands: source operand and destination operand .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_124",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 124,
      "question": "Complete the statement:\n\n\"The data-transfer instructions except POPF and SAHF instructions do not affect the flags of 8086.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The data-transfer instructions except POPF and SAHF instructions do not affect the flags of 8086.",
      "explanation": "Complete reference statement: The data-transfer instructions except POPF and SAHF instructions do not affect the flags of 8086.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_125",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 125,
      "question": "Complete the statement:\n\n\"The arithmetic instructions alter the flags of 8086.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The arithmetic instructions alter the flags of 8086.",
      "explanation": "Complete reference statement: The arithmetic instructions alter the flags of 8086.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_126",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 126,
      "question": "Complete the statement:\n\n\"The logical instructions except shift and rotate involve two operands: source operand and destination operand .\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The logical instructions except shift and rotate involve two operands: source operand and destination operand .",
      "explanation": "Complete reference statement: The logical instructions except shift and rotate involve two operands: source operand and destination operand .",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_fib_127",
      "subjectId": "mp",
      "chapterId": "mp_blanks",
      "category": "Fill in the Blanks Review",
      "type": "fill_blank",
      "qnum": 127,
      "question": "Complete the statement:\n\n\"When the MN/MX# is tied high, it works in minimum mode and the system is called a uniprocessor system.\"",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "When the MN/MX# is tied high, it works in minimum mode and the system is called a uniprocessor system.",
      "explanation": "Complete reference statement: When the MN/MX# is tied high, it works in minimum mode and the system is called a uniprocessor system.",
      "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
    },
    {
      "id": "mp_om_1",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 1,
      "question": "What is a bit?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A bit (binary digit) is the most basic, fundamental unit of digital data, representing either a 0 or a 1.",
      "explanation": "A bit (binary digit) is the most basic, fundamental unit of digital data, representing either a 0 or a 1.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_2",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 2,
      "question": "What is a nibble?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A nibble is a group of 4 contiguous binary bits (half a byte).",
      "explanation": "A nibble is a group of 4 contiguous binary bits (half a byte).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_3",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 3,
      "question": "What is a byte?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A byte is a group of 8 contiguous binary bits.",
      "explanation": "A byte is a group of 8 contiguous binary bits.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_4",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 4,
      "question": "What is a word?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A word is a group of bits processed as a single unit; for 8086, a word consists of 16 bits (2 bytes).",
      "explanation": "A word is a group of bits processed as a single unit; for 8086, a word consists of 16 bits (2 bytes).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_5",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 5,
      "question": "What is a double word?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A double word (dword) is a group of 32 binary bits (4 bytes or 2 words).",
      "explanation": "A double word (dword) is a group of 32 binary bits (4 bytes or 2 words).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_6",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 6,
      "question": "What is meant by multiple word?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Multiple word refers to data lengths comprising more than one word, such as double words (32 bits) or quad words (64 bits). Define data in microprocessor terminology.",
      "explanation": "Multiple word refers to data lengths comprising more than one word, such as double words (32 bits) or quad words (64 bits). Define data in microprocessor terminology.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_7",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 7,
      "question": "Define data in microprocessor terminology.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Data refers to raw information, numerical values, characters, or operands processed or manipulated by the microprocessor.",
      "explanation": "Data refers to raw information, numerical values, characters, or operands processed or manipulated by the microprocessor.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_8",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 8,
      "question": "What is an address?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "An address is a unique binary number assigned to a specific memory location or I/O port to identify where data is stored or transferred.",
      "explanation": "An address is a unique binary number assigned to a specific memory location or I/O port to identify where data is stored or transferred.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_9",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 9,
      "question": "How many address bits are used by 8086 for memory addressing?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 microprocessor uses 20 address bits (A₀–A₁₉) for memory addressing.",
      "explanation": "The 8086 microprocessor uses 20 address bits (A₀–A₁₉) for memory addressing.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_10",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 10,
      "question": "What is memory word size?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Memory word size is the maximum number of bits that can be stored or accessed in a single memory location or transferred in one bus cycle.",
      "explanation": "Memory word size is the maximum number of bits that can be stored or accessed in a single memory location or transferred in one bus cycle.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_11",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 11,
      "question": "What is the memory word size of an 8086-based system?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The memory word size of an 8086-based system is 16 bits (2 bytes).",
      "explanation": "The memory word size of an 8086-based system is 16 bits (2 bytes).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_12",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 12,
      "question": "What is a microprocessor?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A microprocessor is a programmable, clock-driven, semiconductor integrated circuit (IC) that functions as the Central Processing Unit (CPU) to fetch, decode, and execute instructions.",
      "explanation": "A microprocessor is a programmable, clock-driven, semiconductor integrated circuit (IC) that functions as the Central Processing Unit (CPU) to fetch, decode, and execute instructions.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_13",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 13,
      "question": "Why is 8086 called a 16-bit processor?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 is called a 16-bit processor because its Arithmetic Logic Unit (ALU), internal registers, and external data bus are all 16 bits wide.",
      "explanation": "The 8086 is called a 16-bit processor because its Arithmetic Logic Unit (ALU), internal registers, and external data bus are all 16 bits wide.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_14",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 14,
      "question": "What is a bus?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A bus is a group of conducting wires or lines used to transmit data, memory addresses, or control signals between system components. Name the three types of buses.",
      "explanation": "A bus is a group of conducting wires or lines used to transmit data, memory addresses, or control signals between system components. Name the three types of buses.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_15",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 15,
      "question": "Name the three types of buses.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The three types of buses are the Data Bus, Address Bus, and Control Bus.",
      "explanation": "The three types of buses are the Data Bus, Address Bus, and Control Bus.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_16",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 16,
      "question": "What is a data bus?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A data bus is a bidirectional set of signal lines used to transfer data between the CPU, memory, and peripheral devices.",
      "explanation": "A data bus is a bidirectional set of signal lines used to transfer data between the CPU, memory, and peripheral devices.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_17",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 17,
      "question": "What is an address bus?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "An address bus is a unidirectional set of signal lines used by the CPU to carry memory address or I/O port address location signals.",
      "explanation": "An address bus is a unidirectional set of signal lines used by the CPU to carry memory address or I/O port address location signals.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_18",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 18,
      "question": "What is a control bus?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A control bus consists of timing and control signal lines used to synchronize operations and indicate memory/IO read-write actions.",
      "explanation": "A control bus consists of timing and control signal lines used to synchronize operations and indicate memory/IO read-write actions.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_19",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 19,
      "question": "What is a CPU bus?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A CPU bus refers to the internal lines directly connected to the microprocessor pins that carry address, data, and status signals.",
      "explanation": "A CPU bus refers to the internal lines directly connected to the microprocessor pins that carry address, data, and status signals.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_20",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 20,
      "question": "What is a system bus?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A system bus is the combined bus structure (address, data, control) that connects the processor to memory, peripherals, and expansion slots across the system board.",
      "explanation": "A system bus is the combined bus structure (address, data, control) that connects the processor to memory, peripherals, and expansion slots across the system board.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_21",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 21,
      "question": "What is multiplexing?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Multiplexing is the technique of sharing a single physical set of pin lines to transmit different types of signals (e.g., address and data) at different times.",
      "explanation": "Multiplexing is the technique of sharing a single physical set of pin lines to transmit different types of signals (e.g., address and data) at different times.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_22",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 22,
      "question": "What is a multiplexed bus?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A multiplexed bus is a bus line system that carries address signals during one part of a cycle and data or status signals during another part.",
      "explanation": "A multiplexed bus is a bus line system that carries address signals during one part of a cycle and data or status signals during another part.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_23",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 23,
      "question": "What is demultiplexing?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Demultiplexing is the process of separating multiplexed signals (such as separating address and data from AD lines using external latches driven by ALE).",
      "explanation": "Demultiplexing is the process of separating multiplexed signals (such as separating address and data from AD lines using external latches driven by ALE).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_24",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 24,
      "question": "Why is multiplexing used in microprocessors?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Multiplexing is used to reduce the total IC pin count, overall package size, and manufacturing cost of the processor chip.",
      "explanation": "Multiplexing is used to reduce the total IC pin count, overall package size, and manufacturing cost of the processor chip.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_25",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 25,
      "question": "What is a clock?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A clock is a periodic timing signal that synchronizes all internal and external operations of the microprocessor system.",
      "explanation": "A clock is a periodic timing signal that synchronizes all internal and external operations of the microprocessor system.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_26",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 26,
      "question": "What type of waveform is generally used as a clock?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A square wave waveform is generally used as a clock signal. Name the three edges of a clock signal.",
      "explanation": "A square wave waveform is generally used as a clock signal. Name the three edges of a clock signal.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_27",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 27,
      "question": "Name the three edges of a clock signal.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The three edges/states are the Rising Edge (Leading edge), Falling Edge (Trailing edge), and Steady Level (High/Low logic levels).",
      "explanation": "The three edges/states are the Rising Edge (Leading edge), Falling Edge (Trailing edge), and Steady Level (High/Low logic levels).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_28",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 28,
      "question": "What is tristate logic?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Tristate logic is a digital logic circuit capability that provides three distinct output states: Logic 0, Logic 1, and High-Impedance (Hi-Z). Name the three states of tristate logic.",
      "explanation": "Tristate logic is a digital logic circuit capability that provides three distinct output states: Logic 0, Logic 1, and High-Impedance (Hi-Z). Name the three states of tristate logic.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_29",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 29,
      "question": "Name the three states of tristate logic.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The three states are High level (Logic 1), Low level (Logic 0), and High- Impedance state (Hi-Z / floating).",
      "explanation": "The three states are High level (Logic 1), Low level (Logic 0), and High- Impedance state (Hi-Z / floating).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_30",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 30,
      "question": "What is the high-impedance state?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The high-impedance state (Hi-Z) is an open-circuit state where an output pin is electrically disconnected from the bus to avoid bus contention.",
      "explanation": "The high-impedance state (Hi-Z) is an open-circuit state where an output pin is electrically disconnected from the bus to avoid bus contention.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_31",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 31,
      "question": "Why is high-impedance state required in a microprocessor system?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "High-impedance state is required to allow multiple devices to share the same physical bus without signal conflicts or electrical shorting.",
      "explanation": "High-impedance state is required to allow multiple devices to share the same physical bus without signal conflicts or electrical shorting.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_32",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 32,
      "question": "What is a chip-select signal?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A chip-select (CS) signal is a control input used to enable or activate a specific memory chip or peripheral device.",
      "explanation": "A chip-select (CS) signal is a control input used to enable or activate a specific memory chip or peripheral device.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_33",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 33,
      "question": "What is an ALU?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "An Arithmetic Logic Unit (ALU) is the digital functional unit within the CPU that executes arithmetic (ADD, SUB) and logical (AND, OR, XOR) operations.",
      "explanation": "An Arithmetic Logic Unit (ALU) is the digital functional unit within the CPU that executes arithmetic (ADD, SUB) and logical (AND, OR, XOR) operations.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_34",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 34,
      "question": "What is a register array?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A register array is a collection of internal high-speed storage registers used within the CPU to hold temporary data, addresses, and status info.",
      "explanation": "A register array is a collection of internal high-speed storage registers used within the CPU to hold temporary data, addresses, and status info.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_35",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 35,
      "question": "What is a control unit?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A control unit is the component of the CPU that decodes instructions and generates internal/external timing and control signals to direct operations.",
      "explanation": "A control unit is the component of the CPU that decodes instructions and generates internal/external timing and control signals to direct operations.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_36",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 36,
      "question": "What is a flag register?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A flag register is a dedicated internal register containing individual status and control bit flags that reflect ALU operation results or control CPU modes.",
      "explanation": "A flag register is a dedicated internal register containing individual status and control bit flags that reflect ALU operation results or control CPU modes.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_37",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 37,
      "question": "What is an instruction pointer?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "An instruction pointer (IP) is a 16-bit register that holds the offset address of the next instruction byte to be fetched from memory.",
      "explanation": "An instruction pointer (IP) is a 16-bit register that holds the offset address of the next instruction byte to be fetched from memory.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_38",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 38,
      "question": "What is the function of an instruction decoding unit?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The instruction decoding unit interprets fetched instruction opcodes and translates them into control signals for execution by the ALU.",
      "explanation": "The instruction decoding unit interprets fetched instruction opcodes and translates them into control signals for execution by the ALU.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_39",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 39,
      "question": "What is the function of a timing and control unit?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The timing and control unit generates synchronized clock signals, bus control signals, and system timing sequences needed to perform machine cycles.",
      "explanation": "The timing and control unit generates synchronized clock signals, bus control signals, and system timing sequences needed to perform machine cycles.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_40",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 40,
      "question": "Does 8086 have an internal clock-generation circuit?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "No, the 8086 does not have an internal clock generator; it requires an external clock generator IC (such as 8284A).",
      "explanation": "No, the 8086 does not have an internal clock generator; it requires an external clock generator IC (such as 8284A).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_41",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 41,
      "question": "What type of clock source does 8086 require?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "8086 requires an external clock generator IC (8284A) driven by an external crystal oscillator.",
      "explanation": "8086 requires an external clock generator IC (8284A) driven by an external crystal oscillator.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_42",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 42,
      "question": "What is the duty cycle of the external clock source required by 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The external clock signal required by 8086 must have a 33% duty cycle (1/3 high, 2/3 low).",
      "explanation": "The external clock signal required by 8086 must have a 33% duty cycle (1/3 high, 2/3 low).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_43",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 43,
      "question": "Which IC is used to generate the clock for 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8284A Clock Generator IC is used to generate the clock signal for 8086.",
      "explanation": "The 8284A Clock Generator IC is used to generate the clock signal for 8086.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_44",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 44,
      "question": "What is the maximum internal clock frequency of the basic 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The basic 8086 operates at a maximum clock frequency of 5 MHz.",
      "explanation": "The basic 8086 operates at a maximum clock frequency of 5 MHz.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_45",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 45,
      "question": "What is the maximum clock frequency of 8086-1?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086-1 operates at a maximum clock frequency of 10 MHz.",
      "explanation": "The 8086-1 operates at a maximum clock frequency of 10 MHz.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_46",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 46,
      "question": "What is the maximum clock frequency of 8086-2?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086-2 operates at a maximum clock frequency of 8 MHz.",
      "explanation": "The 8086-2 operates at a maximum clock frequency of 8 MHz.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_47",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 47,
      "question": "What is the maximum clock frequency of 8086-4?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086-4 operates at a maximum clock frequency of 4 MHz.",
      "explanation": "The 8086-4 operates at a maximum clock frequency of 4 MHz.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_48",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 48,
      "question": "How many address bits does 8086 use for memory?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "8086 uses 20 address lines (A₀–A₁₉) for memory addressing.",
      "explanation": "8086 uses 20 address lines (A₀–A₁₉) for memory addressing.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_49",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 49,
      "question": "What is the maximum memory space directly addressable by 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The maximum directly addressable memory space is 1 MB (2²⁰ bytes = 1,048,576 bytes).",
      "explanation": "The maximum directly addressable memory space is 1 MB (2²⁰ bytes = 1,048,576 bytes).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_50",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 50,
      "question": "How is the 1 MB memory space divided physically?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 1 MB memory space is divided physically into two 512 KB memory banks: Even (Low) Bank and Odd (High) Bank.",
      "explanation": "The 1 MB memory space is divided physically into two 512 KB memory banks: Even (Low) Bank and Odd (High) Bank.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_51",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 51,
      "question": "What is the size of each memory bank in 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The size of each memory bank is 512 KB.",
      "explanation": "The size of each memory bank is 512 KB.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_52",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 52,
      "question": "What are the two memory banks called?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The two banks are called the Even Bank (Low Bank) and the Odd Bank (High Bank).",
      "explanation": "The two banks are called the Even Bank (Low Bank) and the Odd Bank (High Bank).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_53",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 53,
      "question": "Which signal selects the even memory bank?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Address line A₀ = 0 selects the even memory bank.",
      "explanation": "Address line A₀ = 0 selects the even memory bank.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_54",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 54,
      "question": "Which signal selects the odd memory bank?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Bus High Enable signal (BHE = 0) selects the odd memory bank.",
      "explanation": "The Bus High Enable signal (BHE = 0) selects the odd memory bank.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_55",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 55,
      "question": "How many address bits are used for I/O addressing?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "8086 uses 16 address bits (A₀–A₁₅) for I/O port addressing.",
      "explanation": "8086 uses 16 address bits (A₀–A₁₅) for I/O port addressing.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_56",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 56,
      "question": "How many I/O addresses can 8086 generate?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "8086 can generate 65,536 (64 KB) 8-bit I/O addresses or 32,768 16-bit I/O addresses.",
      "explanation": "8086 can generate 65,536 (64 KB) 8-bit I/O addresses or 32,768 16-bit I/O addresses.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_57",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 57,
      "question": "Which signal differentiates memory and I/O addresses?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The M/IO signal differentiates memory access from I/O access (in minimum mode).",
      "explanation": "The M/IO signal differentiates memory access from I/O access (in minimum mode).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_58",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 58,
      "question": "What is the status of M/IO during memory access?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "During memory access, M/IO is High (Logic 1).",
      "explanation": "During memory access, M/IO is High (Logic 1).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_59",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 59,
      "question": "What is the status of M/IO during I/O access?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "During I/O access, M/IO is Low (Logic 0).",
      "explanation": "During I/O access, M/IO is Low (Logic 0).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_60",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 60,
      "question": "What are the two operating modes of 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The two operating modes are Minimum Mode (single processor) and Maximum Mode (multiprocessor).",
      "explanation": "The two operating modes are Minimum Mode (single processor) and Maximum Mode (multiprocessor).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_61",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 61,
      "question": "Which pin selects the operating mode of 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The MN/MX pin (Pin 33) selects the operating mode.",
      "explanation": "The MN/MX pin (Pin 33) selects the operating mode.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_62",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 62,
      "question": "What mode is selected when MN/MX is high?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Minimum Mode is selected when MN/MX is tied high (VCC).",
      "explanation": "Minimum Mode is selected when MN/MX is tied high (VCC).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_63",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 63,
      "question": "What mode is selected when MN/MX is low?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Maximum Mode is selected when MN/MX is tied low (GND).",
      "explanation": "Maximum Mode is selected when MN/MX is tied low (GND).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_64",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 64,
      "question": "Which mode is generally used for a uniprocessor system?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Minimum Mode is used for a uniprocessor (single processor) system.",
      "explanation": "Minimum Mode is used for a uniprocessor (single processor) system.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_65",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 65,
      "question": "Which mode is generally used for a multiprocessor system?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Maximum Mode is used for a multiprocessor system.",
      "explanation": "Maximum Mode is used for a multiprocessor system.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_66",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 66,
      "question": "Which coprocessor can work with 8086 in maximum mode?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8087 Math Coprocessor (Numeric Data Processor) can work with 8086 in maximum mode.",
      "explanation": "The 8087 Math Coprocessor (Numeric Data Processor) can work with 8086 in maximum mode.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_67",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 67,
      "question": "Which external bus controller is required in maximum mode?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8288 Bus Controller IC is required in maximum mode.",
      "explanation": "The 8288 Bus Controller IC is required in maximum mode.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_68",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 68,
      "question": "What is the external data bus size of 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The external data bus size of 8086 is 16 bits.",
      "explanation": "The external data bus size of 8086 is 16 bits.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_69",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 69,
      "question": "What is the external data bus size of 8088?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The external data bus size of 8088 is 8 bits.",
      "explanation": "The external data bus size of 8088 is 8 bits.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_70",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 70,
      "question": "How does 8086 access memory compared with 8088?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "8086 fetches 16 bits (2 bytes) in a single bus cycle, whereas 8088 fetches only 8 bits (1 byte) per bus cycle.",
      "explanation": "8086 fetches 16 bits (2 bytes) in a single bus cycle, whereas 8088 fetches only 8 bits (1 byte) per bus cycle.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_71",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 71,
      "question": "Which processor was used by IBM in its first PC according to the notes?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Intel 8088 processor was used by IBM in its first Personal Computer (IBM PC/XT).",
      "explanation": "The Intel 8088 processor was used by IBM in its first Personal Computer (IBM PC/XT).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_72",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 72,
      "question": "Are the 8086 and 8088 instruction sets common?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Yes, 8086 and 8088 share 100% software instruction set compatibility.",
      "explanation": "Yes, 8086 and 8088 share 100% software instruction set compatibility.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_73",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 73,
      "question": "What is the function of AD0–AD15 lines?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "AD₀–AD₁₅ are time-multiplexed address/data lines carrying memory/IO addresses during T₁ and data during T₂, T₃, T₄.",
      "explanation": "AD₀–AD₁₅ are time-multiplexed address/data lines carrying memory/IO addresses during T₁ and data during T₂, T₃, T₄.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_74",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 74,
      "question": "Are AD0–AD15 unidirectional or bidirectional?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "They are bidirectional lines (address signals are output, data signals are bidirectional input/output).",
      "explanation": "They are bidirectional lines (address signals are output, data signals are bidirectional input/output).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_75",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 75,
      "question": "What does A16/S3 represent?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "It is a time-multiplexed line carrying address bit A₁₆ during T₁ and segment register status S₃ during T₂–T₄.",
      "explanation": "It is a time-multiplexed line carrying address bit A₁₆ during T₁ and segment register status S₃ during T₂–T₄.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_76",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 76,
      "question": "What does A17/S4 represent?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "It is a time-multiplexed line carrying address bit A₁₇ during T₁ and segment register status S₄ during T₂–T₄.",
      "explanation": "It is a time-multiplexed line carrying address bit A₁₇ during T₁ and segment register status S₄ during T₂–T₄.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_77",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 77,
      "question": "What does A18/S5 represent?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "It is a time-multiplexed line carrying address bit A₁₈ during T₁ and Interrupt Enable Flag status S₅ during T₂–T₄.",
      "explanation": "It is a time-multiplexed line carrying address bit A₁₈ during T₁ and Interrupt Enable Flag status S₅ during T₂–T₄.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_78",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 78,
      "question": "What does A19/S6 represent?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "It is a time-multiplexed line carrying address bit A₁₉ during T₁ and bus master status S₆ (always 0 for 8086) during T₂–T₄.",
      "explanation": "It is a time-multiplexed line carrying address bit A₁₉ during T₁ and bus master status S₆ (always 0 for 8086) during T₂–T₄.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_79",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 79,
      "question": "What does BHE stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "BHE stands for Bus High Enable.",
      "explanation": "BHE stands for Bus High Enable.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_80",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 80,
      "question": "What does S7 indicate?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "S₇ is a spare status bit combined with BHE during T₂–T₄ (currently unused/reserved).",
      "explanation": "S₇ is a spare status bit combined with BHE during T₂–T₄ (currently unused/reserved).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_81",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 81,
      "question": "What is the function of the RD signal?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "RD (Read) indicates that the CPU is performing a memory or I/O read operation.",
      "explanation": "RD (Read) indicates that the CPU is performing a memory or I/O read operation.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_82",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 82,
      "question": "Is RD active high or active low?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "RD is an active-low signal.",
      "explanation": "RD is an active-low signal.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_83",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 83,
      "question": "What is the function of the RESET pin?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "RESET causes the processor to immediately terminate present activity and restart execution from CS:IP = FFFF:0000H.",
      "explanation": "RESET causes the processor to immediately terminate present activity and restart execution from CS:IP = FFFF:0000H.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_84",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 84,
      "question": "What type of interrupt is NMI?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "NMI (Non-Maskable Interrupt) is a hardware interrupt that cannot be masked or disabled by software.",
      "explanation": "NMI (Non-Maskable Interrupt) is a hardware interrupt that cannot be masked or disabled by software.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_85",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 85,
      "question": "What type of interrupt is INTR?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "INTR (Interrupt Request) is a maskable hardware interrupt controlled by the Interrupt Flag (IF).",
      "explanation": "INTR (Interrupt Request) is a maskable hardware interrupt controlled by the Interrupt Flag (IF).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_86",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 86,
      "question": "What is the function of CLK?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "CLK provides the basic timing signal for processor operations.",
      "explanation": "CLK provides the basic timing signal for processor operations.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_87",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 87,
      "question": "What is the function of VCC?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "VCC supplies power (+5V DC) to the microprocessor chip.",
      "explanation": "VCC supplies power (+5V DC) to the microprocessor chip.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_88",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 88,
      "question": "What is the function of GND?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "GND provides the ground reference voltage (0V) for the processor.",
      "explanation": "GND provides the ground reference voltage (0V) for the processor.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_89",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 89,
      "question": "What is the function of READY?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "READY is an input signal from slow memory or I/O devices indicating data is ready, inserting Wait states if low.",
      "explanation": "READY is an input signal from slow memory or I/O devices indicating data is ready, inserting Wait states if low.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_90",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 90,
      "question": "What is the function of TEST?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "TEST is examined by the WAIT instruction; if TEST is high, CPU waits until TEST becomes low.",
      "explanation": "TEST is examined by the WAIT instruction; if TEST is high, CPU waits until TEST becomes low.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_91",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 91,
      "question": "What is the function of MN/MX?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "MN/MX selects Minimum Mode when connected to VCC and Maximum Mode when connected to GND.",
      "explanation": "MN/MX selects Minimum Mode when connected to VCC and Maximum Mode when connected to GND.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_92",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 92,
      "question": "Which signals indicate the segment accessed during a bus cycle?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Status signals S₄ and S₃ indicate the segment register accessed during a bus cycle.",
      "explanation": "Status signals S₄ and S₃ indicate the segment register accessed during a bus cycle.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_93",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 93,
      "question": "What segment is indicated by S4S3 = 00?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "S₄S₃ = 00 indicates Extra Segment (ES) access (or Alternate Data).",
      "explanation": "S₄S₃ = 00 indicates Extra Segment (ES) access (or Alternate Data).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_94",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 94,
      "question": "What segment is indicated by S4S3 = 01?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "S₄S₃ = 01 indicates Stack Segment (SS) access.",
      "explanation": "S₄S₃ = 01 indicates Stack Segment (SS) access.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_95",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 95,
      "question": "What segment is indicated by S4S3 = 10?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "S₄S₃ = 10 indicates Code Segment (CS) access (or no segment access).",
      "explanation": "S₄S₃ = 10 indicates Code Segment (CS) access (or no segment access).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_96",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 96,
      "question": "What segment is indicated by S4S3 = 11?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "S₄S₃ = 11 indicates Data Segment (DS) access.",
      "explanation": "S₄S₃ = 11 indicates Data Segment (DS) access.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_97",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 97,
      "question": "What does S5 indicate?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "S₅ reflects the current state of the Interrupt Enable Flag (IF).",
      "explanation": "S₅ reflects the current state of the Interrupt Enable Flag (IF).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_98",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 98,
      "question": "What does a low level on S6 indicate?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A low level on S₆ indicates that 8086 is controlling the bus (S₆ is always held low by 8086).",
      "explanation": "A low level on S₆ indicates that 8086 is controlling the bus (S₆ is always held low by 8086).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_99",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 99,
      "question": "What does BHE become after T1?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "After T₁, the BHE pin multiplexes to output status bit S₇ during T₂, T₃, T₄.",
      "explanation": "After T₁, the BHE pin multiplexes to output status bit S₇ during T₂, T₃, T₄.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_100",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 100,
      "question": "What does S7 indicate during subsequent T-states?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "S₇ is a spare status signal (currently undefined / logic 1).",
      "explanation": "S₇ is a spare status signal (currently undefined / logic 1).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_101",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 101,
      "question": "How are BHE and A0 used together?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "BHE and A₀ are decoded together to determine byte or word transfers across even/odd memory banks (BHE=0, A₀=0: Whole Word transfer; BHE=0, A₀=1: Upper Byte from odd bank; BHE=1, A₀=0: Lower Byte from even bank).",
      "explanation": "BHE and A₀ are decoded together to determine byte or word transfers across even/odd memory banks (BHE=0, A₀=0: Whole Word transfer; BHE=0, A₀=1: Upper Byte from odd bank; BHE=1, A₀=0: Lower Byte from even bank).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_102",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 102,
      "question": "For how long is RESET held high for power-on reset according to the notes?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "For power-on reset, RESET must be held high for at least 50 microseconds.",
      "explanation": "For power-on reset, RESET must be held high for at least 50 microseconds.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_103",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 103,
      "question": "For how many clock cycles is RESET held high during a working reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "During normal running operations, RESET must be held high for at least 4 clock cycles.",
      "explanation": "During normal running operations, RESET must be held high for at least 4 clock cycles.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_104",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 104,
      "question": "What happens to the instruction queue during reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The instruction queue is cleared / flushed during reset.",
      "explanation": "The instruction queue is cleared / flushed during reset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_105",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 105,
      "question": "What is the value loaded into CS after reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Code Segment register CS is loaded with FFFFH after reset.",
      "explanation": "Code Segment register CS is loaded with FFFFH after reset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_106",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 106,
      "question": "What is the initial physical address fetched after reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The initial physical address fetched is FFFFFH (calculated from CS:IP = FFFF0H + 0000H).",
      "explanation": "The initial physical address fetched is FFFFFH (calculated from CS:IP = FFFF0H + 0000H).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_107",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 107,
      "question": "What happens to DS during reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Data Segment register DS is cleared to 0000H during reset.",
      "explanation": "Data Segment register DS is cleared to 0000H during reset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_108",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 108,
      "question": "What happens to SS during reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Stack Segment register SS is cleared to 0000H during reset.",
      "explanation": "Stack Segment register SS is cleared to 0000H during reset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_109",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 109,
      "question": "What happens to ES during reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Extra Segment register ES is cleared to 0000H during reset.",
      "explanation": "Extra Segment register ES is cleared to 0000H during reset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_110",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 110,
      "question": "What happens to IP during reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Instruction Pointer IP is cleared to 0000H during reset.",
      "explanation": "Instruction Pointer IP is cleared to 0000H during reset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_111",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 111,
      "question": "What happens to the flag register during reset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Flag Register is cleared to 0000H (disabling interrupts, single-step, etc.).",
      "explanation": "The Flag Register is cleared to 0000H (disabling interrupts, single-step, etc.).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_112",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 112,
      "question": "What is the purpose of READY?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "READY synchronizes slow memory or I/O devices with the fast CPU by signaling whether data transfer is complete.",
      "explanation": "READY synchronizes slow memory or I/O devices with the fast CPU by signaling whether data transfer is complete.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_113",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 113,
      "question": "When is READY sampled by 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "READY is sampled during clock cycle T₃ (or previous wait state T_w).",
      "explanation": "READY is sampled during clock cycle T₃ (or previous wait state T_w).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_114",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 114,
      "question": "What happens if READY is low?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "If READY is low, the CPU inserts Wait states (T_w) into the bus cycle and pauses execution.",
      "explanation": "If READY is low, the CPU inserts Wait states (T_w) into the bus cycle and pauses execution.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_115",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 115,
      "question": "When does the processor resume from wait states?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The processor resumes normal bus operations when READY goes high.",
      "explanation": "The processor resumes normal bus operations when READY goes high.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_116",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 116,
      "question": "What logic level is applied to MN/MX for minimum mode?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "High logic level (+5V / VCC) is applied to MN/MX for minimum mode.",
      "explanation": "High logic level (+5V / VCC) is applied to MN/MX for minimum mode.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_117",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 117,
      "question": "Who generates bus-control signals in minimum mode?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The 8086 microprocessor itself generates all bus-control signals directly in minimum mode.",
      "explanation": "The 8086 microprocessor itself generates all bus-control signals directly in minimum mode.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_118",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 118,
      "question": "What does DT/R stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "DT/R stands for Data Transmit / Receive.",
      "explanation": "DT/R stands for Data Transmit / Receive.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_119",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 119,
      "question": "What is the function of DT/R?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "DT/R controls direction of data flow through external transceivers (High = Transmit/Write, Low = Receive/Read).",
      "explanation": "DT/R controls direction of data flow through external transceivers (High = Transmit/Write, Low = Receive/Read).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_120",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 120,
      "question": "What does DEN stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "DEN stands for Data Enable.",
      "explanation": "DEN stands for Data Enable.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_121",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 121,
      "question": "What is the function of DEN?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "DEN is an active-low output signal that enables external data bus transceivers (buffers).",
      "explanation": "DEN is an active-low output signal that enables external data bus transceivers (buffers).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_122",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 122,
      "question": "What does ALE stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "ALE stands for Address Latch Enable.",
      "explanation": "ALE stands for Address Latch Enable.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_123",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 123,
      "question": "What is the function of ALE?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "ALE is a high pulse generated during T₁ to strobe memory addresses into external latches (e.g., 8282).",
      "explanation": "ALE is a high pulse generated during T₁ to strobe memory addresses into external latches (e.g., 8282).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_124",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 124,
      "question": "What is the function of M/IO?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "M/IO distinguishes memory accesses (High) from I/O accesses (Low).",
      "explanation": "M/IO distinguishes memory accesses (High) from I/O accesses (Low).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_125",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 125,
      "question": "What is the function of WR?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "WR (Write) indicates that the CPU is writing data to memory or an I/O device.",
      "explanation": "WR (Write) indicates that the CPU is writing data to memory or an I/O device.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_126",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 126,
      "question": "When is WR asserted low?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "WR is asserted low during T₂ and T₃ of a write bus cycle when valid data is present on the data bus.",
      "explanation": "WR is asserted low during T₂ and T₃ of a write bus cycle when valid data is present on the data bus.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_127",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 127,
      "question": "What does HOLD indicate?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "HOLD is an input signal requesting the microprocessor to relinquish control of system buses.",
      "explanation": "HOLD is an input signal requesting the microprocessor to relinquish control of system buses.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_128",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 128,
      "question": "What does HLDA stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "HLDA stands for Hold Acknowledge.",
      "explanation": "HLDA stands for Hold Acknowledge.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_129",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 129,
      "question": "What is the function of HLDA?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "HLDA is an output signal acknowledging that the CPU has accepted HOLD and placed bus lines in High-Z.",
      "explanation": "HLDA is an output signal acknowledging that the CPU has accepted HOLD and placed bus lines in High-Z.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_130",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 130,
      "question": "What happens to tristate pins when HOLD is accepted?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Address, data, and control pins are driven into the High-Impedance (Hi-Z) state.",
      "explanation": "Address, data, and control pins are driven into the High-Impedance (Hi-Z) state.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_131",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 131,
      "question": "What is the relationship between HOLD and HLDA?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "HOLD is the bus request input from an external bus master, and HLDA is the CPU's output confirmation signal.",
      "explanation": "HOLD is the bus request input from an external bus master, and HLDA is the CPU's output confirmation signal.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_132",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 132,
      "question": "What is the purpose of a bidirectional data buffer?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A bidirectional data buffer (transceiver e.g., 8286) isolates and amplifies signal drive capability on the data bus.",
      "explanation": "A bidirectional data buffer (transceiver e.g., 8286) isolates and amplifies signal drive capability on the data bus.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_133",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 133,
      "question": "What type of architecture does 8086 use?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "8086 uses a pipelined architecture split into two independent functional units (BIU and EU).",
      "explanation": "8086 uses a pipelined architecture split into two independent functional units (BIU and EU).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_134",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 134,
      "question": "What is pipelining?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Pipelining is overlapping instruction fetch and execution stages simultaneously to speed up instruction throughput. Name the two functional units of 8086.",
      "explanation": "Pipelining is overlapping instruction fetch and execution stages simultaneously to speed up instruction throughput. Name the two functional units of 8086.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_135",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 135,
      "question": "What does BIU stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "BIU stands for Bus Interface Unit.",
      "explanation": "BIU stands for Bus Interface Unit.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_136",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 136,
      "question": "What does EU stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "EU stands for Execution Unit.",
      "explanation": "EU stands for Execution Unit.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_137",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 137,
      "question": "What is the main function of BIU?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "BIU handles all external bus operations, including fetching instruction bytes, reading/writing memory and I/O operands, and physical address calculation.",
      "explanation": "BIU handles all external bus operations, including fetching instruction bytes, reading/writing memory and I/O operands, and physical address calculation.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_138",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 138,
      "question": "What is the main function of EU?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "EU decodes fetched instructions, executes arithmetic and logical operations, and manages general registers and flags.",
      "explanation": "EU decodes fetched instructions, executes arithmetic and logical operations, and manages general registers and flags.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_139",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 139,
      "question": "Do BIU and EU operate independently?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Yes, BIU and EU operate independently and concurrently in a pipelined fashion.",
      "explanation": "Yes, BIU and EU operate independently and concurrently in a pipelined fashion.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_140",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 140,
      "question": "What is the size of the 8086 instruction queue?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The instruction queue size is 6 bytes.",
      "explanation": "The instruction queue size is 6 bytes.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_141",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 141,
      "question": "What type of queue is used in 8086?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "A First-In-First-Out (FIFO) queue structure is used.",
      "explanation": "A First-In-First-Out (FIFO) queue structure is used.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_142",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 142,
      "question": "What does FIFO stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "FIFO stands for First-In, First-Out.",
      "explanation": "FIFO stands for First-In, First-Out.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_143",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 143,
      "question": "Who fetches instructions from memory?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Bus Interface Unit (BIU) fetches instructions from memory.",
      "explanation": "The Bus Interface Unit (BIU) fetches instructions from memory.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_144",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 144,
      "question": "Who fetches instructions from the instruction queue?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The Execution Unit (EU) fetches instruction bytes from the queue.",
      "explanation": "The Execution Unit (EU) fetches instruction bytes from the queue.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_145",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 145,
      "question": "How many segment registers are present in BIU?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "There are 4 segment registers in the BIU.",
      "explanation": "There are 4 segment registers in the BIU.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_146",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 146,
      "question": "What is the size of each segment register?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Each segment register is 16 bits wide. Name the four segment registers.",
      "explanation": "Each segment register is 16 bits wide. Name the four segment registers.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_147",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 147,
      "question": "Name the four segment registers.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Code Segment (CS), Data Segment (DS), Stack Segment (SS), and Extra Segment (ES).",
      "explanation": "Code Segment (CS), Data Segment (DS), Stack Segment (SS), and Extra Segment (ES).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_148",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 148,
      "question": "What does CS stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "CS stands for Code Segment register.",
      "explanation": "CS stands for Code Segment register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_149",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 149,
      "question": "What does DS stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "DS stands for Data Segment register.",
      "explanation": "DS stands for Data Segment register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_150",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 150,
      "question": "What does SS stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "SS stands for Stack Segment register.",
      "explanation": "SS stands for Stack Segment register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_151",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 151,
      "question": "What does ES stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "ES stands for Extra Segment register.",
      "explanation": "ES stands for Extra Segment register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_152",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 152,
      "question": "What is the size of an 8086 memory segment?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The maximum size of an 8086 memory segment is 64 KB.",
      "explanation": "The maximum size of an 8086 memory segment is 64 KB.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_153",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 153,
      "question": "How many segments can be directly addressed at a time?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "4 active segments (CS, DS, SS, ES) totaling up to 256 KB can be addressed at any given time.",
      "explanation": "4 active segments (CS, DS, SS, ES) totaling up to 256 KB can be addressed at any given time.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_154",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 154,
      "question": "What is the purpose of memory segmentation?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Memory segmentation allows addressing 1 MB physical memory using 16-bit registers and provides memory protection and code relocatability.",
      "explanation": "Memory segmentation allows addressing 1 MB physical memory using 16-bit registers and provides memory protection and code relocatability.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_155",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 155,
      "question": "Can 8086 memory segments overlap?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Yes, memory segments in 8086 can overlap or be non-overlapping (disjoint).",
      "explanation": "Yes, memory segments in 8086 can overlap or be non-overlapping (disjoint).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_156",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 156,
      "question": "Name one possible type of segment arrangement.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Overlapping segments or Disjoint (Non-overlapping) segments.",
      "explanation": "Overlapping segments or Disjoint (Non-overlapping) segments.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_157",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 157,
      "question": "What is the function of the address generation unit?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "It calculates 20-bit physical addresses using the formula: Physical Address = (Segment Base × 16) + Offset.",
      "explanation": "It calculates 20-bit physical addresses using the formula: Physical Address = (Segment Base × 16) + Offset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_158",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 158,
      "question": "How is a physical address generated from a segment address?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Physical Address is generated by shifting the 16-bit segment base left by 4 bit positions (multiplying by 10H) and adding the 16-bit offset.",
      "explanation": "Physical Address is generated by shifting the 16-bit segment base left by 4 bit positions (multiplying by 10H) and adding the 16-bit offset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_159",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 159,
      "question": "By what factor is the segment base address shifted?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The segment base address is shifted left by 4 bits (multiplied by 16 or 10H).",
      "explanation": "The segment base address is shifted left by 4 bits (multiplied by 16 or 10H).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_160",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 160,
      "question": "Which register is used with CS to generate the program address?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Instruction Pointer (IP) is used with CS.",
      "explanation": "Instruction Pointer (IP) is used with CS.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_161",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 161,
      "question": "What is the function of IP?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "IP holds the 16-bit offset address of the next instruction byte in the Code Segment.",
      "explanation": "IP holds the 16-bit offset address of the next instruction byte in the Code Segment.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_162",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 162,
      "question": "By how much is IP incremented after a bus cycle?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "IP is incremented by 1 byte or 2 bytes depending on the number of instruction bytes fetched. How many bytes are fetched in one instruction-fetch bus cycle according to the",
      "explanation": "IP is incremented by 1 byte or 2 bytes depending on the number of instruction bytes fetched. How many bytes are fetched in one instruction-fetch bus cycle according to the",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_163",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 163,
      "question": "notes?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Up to 2 bytes (1 word) are fetched in a single instruction-fetch bus cycle.",
      "explanation": "Up to 2 bytes (1 word) are fetched in a single instruction-fetch bus cycle.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_164",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 164,
      "question": "Which registers can provide the data-segment base address?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Data Segment (DS) register (or ES for destination strings).",
      "explanation": "Data Segment (DS) register (or ES for destination strings).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_165",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 165,
      "question": "Which register provides the stack-segment base address?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Stack Segment (SS) register.",
      "explanation": "Stack Segment (SS) register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_166",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 166,
      "question": "Which register provides the stack offset?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Stack Pointer (SP) or Base Pointer (BP) provides the stack offset.",
      "explanation": "Stack Pointer (SP) or Base Pointer (BP) provides the stack offset.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_167",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 167,
      "question": "What does the bus-control logic of BIU generate?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "BIU bus-control logic generates external memory/IO control signals like RD, WR, ALE, DEN, DT/R.",
      "explanation": "BIU bus-control logic generates external memory/IO control signals like RD, WR, ALE, DEN, DT/R.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_168",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 168,
      "question": "What components form the EU?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "EU consists of Arithmetic Logic Unit (ALU), Control Unit, Flag Register, General Purpose Registers, and Pointer/Index Registers.",
      "explanation": "EU consists of Arithmetic Logic Unit (ALU), Control Unit, Flag Register, General Purpose Registers, and Pointer/Index Registers.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_169",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 169,
      "question": "What is the size of the EU ALU?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "The EU ALU size is 16 bits.",
      "explanation": "The EU ALU size is 16 bits.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_170",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 170,
      "question": "How many 16-bit general-purpose registers are present in EU?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "There are 8 16-bit general/pointer/index registers in EU (AX, BX, CX, DX, SP, BP, SI, DI). Name all eight 16-bit general-purpose registers.",
      "explanation": "There are 8 16-bit general/pointer/index registers in EU (AX, BX, CX, DX, SP, BP, SI, DI). Name all eight 16-bit general-purpose registers.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_171",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 171,
      "question": "Name all eight 16-bit general-purpose registers.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "AX, BX, CX, DX, SP, BP, SI, and DI.",
      "explanation": "AX, BX, CX, DX, SP, BP, SI, and DI.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_172",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 172,
      "question": "What is the special function of AX?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "AX is the Accumulator, used in I/O operations, multiplication, division, and arithmetic/logic tasks.",
      "explanation": "AX is the Accumulator, used in I/O operations, multiplication, division, and arithmetic/logic tasks.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_173",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 173,
      "question": "What is the special function of AL?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "AL acts as an 8-bit accumulator for 8-bit operations and string translation.",
      "explanation": "AL acts as an 8-bit accumulator for 8-bit operations and string translation.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_174",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 174,
      "question": "What is the special function of BX?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "BX is the Base Register, used as a base pointer to hold offset addresses for data memory indexing.",
      "explanation": "BX is the Base Register, used as a base pointer to hold offset addresses for data memory indexing.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_175",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 175,
      "question": "Which register is used as the counter register?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "CX register.",
      "explanation": "CX register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_176",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 176,
      "question": "What is the special function of DX?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "DX is the Data Register, used to hold port addresses for indirect I/O and upper 16 bits in 32-bit multiply/divide.",
      "explanation": "DX is the Data Register, used to hold port addresses for indirect I/O and upper 16 bits in 32-bit multiply/divide.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_177",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 177,
      "question": "Which register is used for multiplication and division data?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "AX (and DX for 32-bit results/operands).",
      "explanation": "AX (and DX for 32-bit results/operands).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_178",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 178,
      "question": "What is the function of SP?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Stack Pointer (SP) holds the offset address of the current top of stack in Stack Segment.",
      "explanation": "Stack Pointer (SP) holds the offset address of the current top of stack in Stack Segment.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_179",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 179,
      "question": "What does SP point to?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "SP points to the current top byte/word location in the stack memory.",
      "explanation": "SP points to the current top byte/word location in the stack memory.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_180",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 180,
      "question": "What is the function of BP?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Base Pointer (BP) is used to access parameters and local variables stored on the stack frame.",
      "explanation": "Base Pointer (BP) is used to access parameters and local variables stored on the stack frame.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_181",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 181,
      "question": "Which segment is generally used with BP for stack data access?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Stack Segment (SS).",
      "explanation": "Stack Segment (SS).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_182",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 182,
      "question": "What is the function of SI?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Source Index (SI) holds offset address for source data in string instructions and indexed addressing.",
      "explanation": "Source Index (SI) holds offset address for source data in string instructions and indexed addressing.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_183",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 183,
      "question": "What is the function of DI?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Destination Index (DI) holds offset address for destination data in string instructions and indexed addressing.",
      "explanation": "Destination Index (DI) holds offset address for destination data in string instructions and indexed addressing.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_184",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 184,
      "question": "Which register is used as source index in string instructions?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Source Index (SI) register.",
      "explanation": "Source Index (SI) register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_185",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 185,
      "question": "Which register is used as destination index in string instructions?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Destination Index (DI) register.",
      "explanation": "Destination Index (DI) register.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_186",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 186,
      "question": "Which 16-bit register can be divided into AH and AL?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Accumulator register AX.",
      "explanation": "Accumulator register AX.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_187",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 187,
      "question": "Which register can be divided into BH and BL?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Base register BX.",
      "explanation": "Base register BX.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_188",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 188,
      "question": "Which register can be divided into CH and CL?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Count register CX.",
      "explanation": "Count register CX.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_189",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 189,
      "question": "Which register can be divided into DH and DL?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Data register DX.",
      "explanation": "Data register DX.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_190",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 190,
      "question": "What is the size of the 8086 flag register?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "16 bits (containing 9 active flags and 7 undefined bits).",
      "explanation": "16 bits (containing 9 active flags and 7 undefined bits).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_191",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 191,
      "question": "How many flags are defined in the 8086 flag register?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "9 active flags are defined.",
      "explanation": "9 active flags are defined.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_192",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 192,
      "question": "How many flags indicate arithmetic/logical results?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "6 status flags indicate arithmetic/logical results.",
      "explanation": "6 status flags indicate arithmetic/logical results.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_193",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 193,
      "question": "How many flags are control flags?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "3 control flags (DF, IF, TF). Name the six status flags.",
      "explanation": "3 control flags (DF, IF, TF). Name the six status flags.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_194",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 194,
      "question": "Name the six status flags.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Carry Flag (CF), Parity Flag (PF), Auxiliary Carry Flag (AF), Zero Flag (ZF), Sign Flag (SF), and Overflow Flag (OF). Name the three control flags.",
      "explanation": "Carry Flag (CF), Parity Flag (PF), Auxiliary Carry Flag (AF), Zero Flag (ZF), Sign Flag (SF), and Overflow Flag (OF). Name the three control flags.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_195",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 195,
      "question": "Name the three control flags.",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Direction Flag (DF), Interrupt Flag (IF), and Trap Flag (TF).",
      "explanation": "Direction Flag (DF), Interrupt Flag (IF), and Trap Flag (TF).",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_196",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 196,
      "question": "What does CF stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "CF stands for Carry Flag.",
      "explanation": "CF stands for Carry Flag.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_197",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 197,
      "question": "When is Carry Flag set?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Carry Flag is set (CF = 1) when there is a carry out of the MSB in addition or a borrow into the MSB in subtraction.",
      "explanation": "Carry Flag is set (CF = 1) when there is a carry out of the MSB in addition or a borrow into the MSB in subtraction.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_198",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 198,
      "question": "What does PF stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "PF stands for Parity Flag.",
      "explanation": "PF stands for Parity Flag.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_199",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 199,
      "question": "When is Parity Flag set?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "Parity Flag is set (PF = 1) if the lower byte of the result contains an EVEN number of 1s.",
      "explanation": "Parity Flag is set (PF = 1) if the lower byte of the result contains an EVEN number of 1s.",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_om_200",
      "subjectId": "mp",
      "chapterId": "mp_onemark",
      "category": "One-Mark Q&A Flashcard",
      "type": "qa",
      "qnum": 200,
      "question": "What does AF stand for?",
      "options": {
        "A": "Revealed in Explanation"
      },
      "answer": "A",
      "answerText": "AF stands for Auxiliary Carry Flag. • 150+ essential one-mark questions • 8086 architecture, buses, flags, segmentation, registers, and more",
      "explanation": "AF stands for Auxiliary Carry Flag. • 150+ essential one-mark questions • 8086 architecture, buses, flags, segmentation, registers, and more",
      "source": "8086 Microprocessor – One-Mark Q&A.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_1",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 1,
      "question": "What is the stack?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The stack is the memory area accessed through the Stack Segment register SS and the Stack Pointer SP. It is\nused by PUSH and POP and also stores return information for CALL, interrupt entry, and interrupt return.",
      "explanation": "The stack is the memory area accessed through the Stack Segment register SS and the Stack Pointer SP. It is\nused by PUSH and POP and also stores return information for CALL, interrupt entry, and interrupt return.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_2",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 2,
      "question": "What registers are associated with the stack SS:SP?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "SS provides the segment base address of the stack, and SP provides the offset or effective address of the top of\nthe stack.",
      "explanation": "SS provides the segment base address of the stack, and SP provides the offset or effective address of the top of\nthe stack.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_3",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 3,
      "question": "How is the Stack Segment SS initialized?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The 128-page notes state that SS is a programmable segment register used as the stack segment base address,\nbut they do not provide a specific initialization instruction or startup value for SS. That exact initialization\nprocedure is therefore not stated in the source notes.",
      "explanation": "The 128-page notes state that SS is a programmable segment register used as the stack segment base address,\nbut they do not provide a specific initialization instruction or startup value for SS. That exact initialization\nprocedure is therefore not stated in the source notes.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_4",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 4,
      "question": "How is the Stack Pointer SP initialized?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The notes explain that SP is the offset of the top of the stack, but they do not state a specific initialization\ninstruction or startup value for SP. That exact initialization procedure is not provided in the source notes.",
      "explanation": "The notes explain that SP is the offset of the top of the stack, but they do not state a specific initialization\ninstruction or startup value for SP. That exact initialization procedure is not provided in the source notes.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_5",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 5,
      "question": "How many bytes are pushed onto the stack during a PUSH instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "A PUSH operation stores a 16-bit quantity, so 2 bytes are pushed. The notes show SP being decremented by 2\nbefore the word is stored.",
      "explanation": "A PUSH operation stores a 16-bit quantity, so 2 bytes are pushed. The notes show SP being decremented by 2\nbefore the word is stored.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_6",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 6,
      "question": "What is the value of SP after a PUSH instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "SP becomes two less than its previous value. In symbolic form: SP <- SP - 2.",
      "explanation": "SP becomes two less than its previous value. In symbolic form: SP <- SP - 2.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_7",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 7,
      "question": "What is the POP instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "POP removes the 16-bit value at the top of the stack and transfers it to the specified 16-bit register, segment\nregister, or memory destination. Afterward SP is increased by 2.",
      "explanation": "POP removes the 16-bit value at the top of the stack and transfers it to the specified 16-bit register, segment\nregister, or memory destination. Afterward SP is increased by 2.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_8",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 8,
      "question": "What is the value of SP after a POP instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "SP becomes two greater than its previous value. In symbolic form: SP <- SP + 2.\nSubroutines: CALL and RET",
      "explanation": "SP becomes two greater than its previous value. In symbolic form: SP <- SP + 2.\nSubroutines: CALL and RET",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_9",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 9,
      "question": "What is the CALL instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "CALL transfers program control to a procedure or subroutine after saving the return address in the stack memory.",
      "explanation": "CALL transfers program control to a procedure or subroutine after saving the return address in the stack memory.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_10",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 10,
      "question": "In a NEAR CALL instruction, what is pushed onto the stack?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "Only the content of IP, the return offset of the next instruction, is pushed onto the stack.",
      "explanation": "Only the content of IP, the return offset of the next instruction, is pushed onto the stack.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_11",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 11,
      "question": "In a FAR CALL instruction, what is pushed onto the stack?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "Both CS and IP are pushed onto the stack because the called procedure is in a different code segment.",
      "explanation": "Both CS and IP are pushed onto the stack because the called procedure is in a different code segment.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_12",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 12,
      "question": "How many bytes are pushed onto the stack for a NEAR CALL versus a FAR CALL?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "A near call pushes one 16-bit IP value, so 2 bytes. A far call pushes two 16-bit values, CS and IP, so 4 bytes in\ntotal.",
      "explanation": "A near call pushes one 16-bit IP value, so 2 bytes. A far call pushes two 16-bit values, CS and IP, so 4 bytes in\ntotal.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_13",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 13,
      "question": "How is the address of the next instruction stored in IP pushed onto the stack?\n\n8086 Mid-Sem Answer Pack - grounded in the supplied 128-page notes",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "For a near call, SP is first decremented by 2 and the current IP is stored at the new stack top. For a far call, CS is\nsaved and then IP is saved, each using a 16-bit stack operation.",
      "explanation": "For a near call, SP is first decremented by 2 and the current IP is stored at the new stack top. For a far call, CS is\nsaved and then IP is saved, each using a 16-bit stack operation.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_14",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 14,
      "question": "Why is the address of the next instruction pushed onto the stack?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "It is saved so that RET can later restore the execution point and return control to the calling program after the\nsubroutine finishes.",
      "explanation": "It is saved so that RET can later restore the execution point and return control to the calling program after the\nsubroutine finishes.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_15",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 15,
      "question": "What is the RET instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "RET returns control from a called procedure to the calling program by taking the saved return information from the\nstack.",
      "explanation": "RET returns control from a called procedure to the calling program by taking the saved return information from the\nstack.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_16",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 16,
      "question": "Where are the popped bytes stored, and how are they used?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "For a near return, the top stack word is popped into IP. For a far return, the top word is loaded into IP and the next\nword is loaded into CS. This restores the return address of the calling program.",
      "explanation": "For a near return, the top stack word is popped into IP. For a far return, the top word is loaded into IP and the next\nword is loaded into CS. This restores the return address of the calling program.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_17",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 17,
      "question": "How is IP reloaded to return to the main program in a NEAR return?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The word at the current top of the stack is moved into IP and SP is incremented by 2.",
      "explanation": "The word at the current top of the stack is moved into IP and SP is incremented by 2.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_18",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 18,
      "question": "How are both CS and IP reloaded to return to the main program in a FAR return?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "First the top stack word is moved into IP and SP is increased by 2. Then the next stack word is moved into CS\nand SP is increased by another 2.",
      "explanation": "First the top stack word is moved into IP and SP is increased by 2. Then the next stack word is moved into CS\nand SP is increased by another 2.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_19",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 19,
      "question": "What is the value of SP after a RET instruction execution?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "For a near RET, SP is increased by 2. For a far RET, SP is increased by 4 because both IP and CS are restored.\nIf an immediate-data form of RET is used, the notes also describe an additional increment by the specified value.\nInterrupts and IRET",
      "explanation": "For a near RET, SP is increased by 2. For a far RET, SP is increased by 4 because both IP and CS are restored.\nIf an immediate-data form of RET is used, the notes also describe an additional increment by the specified value.\nInterrupts and IRET",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_20",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 20,
      "question": "What is a software interrupt instruction such as INT n?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "INT is a software interrupt instruction. It calls an interrupt service procedure on an interrupt basis. The type\nnumber n can range from 0 to 255.",
      "explanation": "INT is a software interrupt instruction. It calls an interrupt service procedure on an interrupt basis. The type\nnumber n can range from 0 to 255.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_21",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 21,
      "question": "What happens when an INT n instruction is executed by the 8086 CPU in a main program?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The processor saves the current flag register, CS, and IP on the stack, clears IF and TF, calculates the interrupt\nvector address as type x 4, and loads IP and CS from the interrupt vector table so execution can continue from\nthe interrupt service routine.",
      "explanation": "The processor saves the current flag register, CS, and IP on the stack, clears IF and TF, calculates the interrupt\nvector address as type x 4, and loads IP and CS from the interrupt vector table so execution can continue from\nthe interrupt service routine.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_22",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 22,
      "question": "In an INT n instruction, what values are pushed onto the stack?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The flag register, CS, and IP are pushed onto the stack, in that sequence of interrupt-entry operations, with SP\ndecremented by 2 before each push.",
      "explanation": "The flag register, CS, and IP are pushed onto the stack, in that sequence of interrupt-entry operations, with SP\ndecremented by 2 before each push.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_23",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 23,
      "question": "How many bytes are pushed onto the stack during an INT n instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "Three 16-bit values are saved: FLAGS, CS, and IP. Therefore 6 bytes are pushed in total.",
      "explanation": "Three 16-bit values are saved: FLAGS, CS, and IP. Therefore 6 bytes are pushed in total.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_24",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 24,
      "question": "How is the address of the next instruction pushed onto the stack?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The current IP, which points to the next instruction to return to, is stored as a 16-bit stack value after SP is\ndecremented by 2.",
      "explanation": "The current IP, which points to the next instruction to return to, is stored as a 16-bit stack value after SP is\ndecremented by 2.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_25",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 25,
      "question": "Why are the Flags Register, CS, and IP all pushed onto the stack?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "They preserve the processor state and the exact execution context of the main program so the interrupt service\nroutine can later return to it. IRET restores IP, CS, and the flags.",
      "explanation": "They preserve the processor state and the exact execution context of the main program so the interrupt service\nroutine can later return to it. IRET restores IP, CS, and the flags.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_26",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 26,
      "question": "What is the IRET instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "IRET terminates the interrupt service routine and returns program control to the interrupted main program by\nrestoring IP, CS, and the flag register from the stack.",
      "explanation": "IRET terminates the interrupt service routine and returns program control to the interrupted main program by\nrestoring IP, CS, and the flag register from the stack.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_27",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 27,
      "question": "Where are the popped bytes stored, and how are they used?\n\n8086 Mid-Sem Answer Pack - grounded in the supplied 128-page notes",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "IRET loads the top stack word into IP, the next into CS, and the next into the flag register. These values restore\nthe saved execution context of the interrupted program.",
      "explanation": "IRET loads the top stack word into IP, the next into CS, and the next into the flag register. These values restore\nthe saved execution context of the interrupted program.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_28",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 28,
      "question": "How are CS and IP reloaded to return to the main program after an interrupt?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "IRET first pops the saved IP, then the saved CS, and finally the saved flags. SP is increased by 2 after each pop.",
      "explanation": "IRET first pops the saved IP, then the saved CS, and finally the saved flags. SP is increased by 2 after each pop.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_29",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 29,
      "question": "What is the value of SP after an IRET instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "Because IRET restores three 16-bit values, SP increases by 6 overall.",
      "explanation": "Because IRET restores three 16-bit values, SP increases by 6 overall.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_30",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 30,
      "question": "What does the 8086 CPU do immediately after receiving an INT instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "It saves FLAGS, CS, and IP on the stack, clears IF and TF, computes the vector address, and obtains the new IP\nand CS values from the interrupt vector table.",
      "explanation": "It saves FLAGS, CS, and IP on the stack, clears IF and TF, computes the vector address, and obtains the new IP\nand CS values from the interrupt vector table.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_31",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 31,
      "question": "How does the 8086 access the Interrupt Vector Table IVT, and why is the IVT necessary?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "For interrupt type n, the vector address is n x 4. Four memory locations are reserved for each interrupt type in the\nfirst 1 KB of memory. The IVT is necessary because it stores the address of the interrupt service routine for each\ninterrupt type.",
      "explanation": "For interrupt type n, the vector address is n x 4. Four memory locations are reserved for each interrupt type in the\nfirst 1 KB of memory. The IVT is necessary because it stores the address of the interrupt service routine for each\ninterrupt type.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_32",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 32,
      "question": "What information is stored in the Interrupt Vector Table IVT?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "For each interrupt type, four bytes are reserved. The first two bytes store the effective address to be loaded into\nIP, and the next two bytes store the segment base address to be loaded into CS.",
      "explanation": "For each interrupt type, four bytes are reserved. The first two bytes store the effective address to be loaded into\nIP, and the next two bytes store the segment base address to be loaded into CS.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_33",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 33,
      "question": "What specific operations are performed using the IVT when an INT instruction is executed?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The CPU multiplies the interrupt type number by 4 to get the vector address, reads the first word into IP, and\nreads the next word into CS. Execution then continues from that CS:IP location.",
      "explanation": "The CPU multiplies the interrupt type number by 4 to get the vector address, reads the first word into IP, and\nreads the next word into CS. Execution then continues from that CS:IP location.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_34",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 34,
      "question": "How does the 8086 switch execution to the Interrupt Service Routine ISR?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "After saving FLAGS, CS, and IP, the processor loads IP and CS from the vector entry corresponding to the\ninterrupt type. That new CS:IP identifies the ISR entry point.",
      "explanation": "After saving FLAGS, CS, and IP, the processor loads IP and CS from the vector entry corresponding to the\ninterrupt type. That new CS:IP identifies the ISR entry point.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_35",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 35,
      "question": "What is the IRET instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "IRET is the interrupt-return instruction used at the end of an ISR. It restores IP, CS, and flags from the stack.",
      "explanation": "IRET is the interrupt-return instruction used at the end of an ISR. It restores IP, CS, and flags from the stack.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Inter_36",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "Interrupts, Stack, CALL & RET",
      "type": "qa",
      "qnum": 36,
      "question": "After the execution of the ISR, how does the CPU return to the main program?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The ISR ends with IRET. IRET pops the saved IP, CS, and flag register values from the stack, increasing SP by 2\nafter each pop. The original program context is therefore restored.",
      "explanation": "The ISR ends with IRET. IRET pops the saved IP, CS, and flag register values from the stack, increasing SP by 2\nafter each pop. The original program context is therefore restored.",
      "source": "8086_Interrupts_Stack_Call_RET_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_1",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 1,
      "question": "What is a shift instruction in the 8086 microprocessor?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "A shift instruction moves every bit of a register or memory operand one or more positions to the left or right.\nDuring the shift, a bit is moved into the Carry Flag and a new bit position is filled according to the type of shift.",
      "explanation": "A shift instruction moves every bit of a register or memory operand one or more positions to the left or right.\nDuring the shift, a bit is moved into the Carry Flag and a new bit position is filled according to the type of shift.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_2",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 2,
      "question": "What is the difference between a Logical Shift (SHL/SHR) and an Arithmetic Shift (SAL/SAR)?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "For left shift, SHL and SAL are functionally identical: bits move left, the old most significant bit goes to CF, and\nzero enters the least significant bit. SHR is logical right shift: zero enters the most significant bit. SAR is arithmetic\nright shift: the sign bit is copied into the most significant bit so the sign is preserved.",
      "explanation": "For left shift, SHL and SAL are functionally identical: bits move left, the old most significant bit goes to CF, and\nzero enters the least significant bit. SHR is logical right shift: zero enters the most significant bit. SAR is arithmetic\nright shift: the sign bit is copied into the most significant bit so the sign is preserved.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_3",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 3,
      "question": "Which register is used to specify a multi-bit count shift operation?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The CL register is used to specify the count for a multi-bit shift or rotate operation.",
      "explanation": "The CL register is used to specify the count for a multi-bit shift or rotate operation.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_4",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 4,
      "question": "What is the maximum count value allowed in the CL register for shift operations?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The notes specify a count range of 1 to 255 when CL is used. Therefore the maximum count stated in the notes is\n255 decimal.",
      "explanation": "The notes specify a count range of 1 to 255 when CL is used. Therefore the maximum count stated in the notes is\n255 decimal.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_5",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 5,
      "question": "Can a shift instruction use an immediate value like 3 directly, for example SHL AX, 3? If not, what\nare the only two valid ways to specify the count?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "According to the instruction forms shown in the notes, the count is specified either as 1 or through the CL register.\nSo the two forms are SHL/SAL operand,1 and SHL/SAL operand,CL. An immediate count such as 3 is not listed\nas a valid 8086 form.",
      "explanation": "According to the instruction forms shown in the notes, the count is specified either as 1 or through the CL register.\nSo the two forms are SHL/SAL operand,1 and SHL/SAL operand,CL. An immediate count such as 3 is not listed\nas a valid 8086 form.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_6",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 6,
      "question": "How does the SHL instruction work? What enters the LSB, and where does the shifted MSB go?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "All bits move one position to the left. The old MSB is shifted into CF, and 0 enters the LSB. For multiple shifts\nusing CL, this operation is repeated for the specified count.",
      "explanation": "All bits move one position to the left. The old MSB is shifted into CF, and 0 enters the LSB. For multiple shifts\nusing CL, this operation is repeated for the specified count.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_7",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 7,
      "question": "How does the SHR instruction work? What enters the MSB, and where does the shifted LSB go?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "All bits move one position to the right. The old LSB is shifted into CF, and 0 enters the MSB.",
      "explanation": "All bits move one position to the right. The old LSB is shifted into CF, and 0 enters the MSB.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_8",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 8,
      "question": "How does the SAR instruction work? Why is the MSB sign bit preserved during SAR?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "All bits move one position to the right. The old LSB is shifted into CF, while the old MSB is retained in the MSB\nposition. Because the sign bit is copied rather than replaced by zero, the sign of a signed two’s-complement value\nis preserved.",
      "explanation": "All bits move one position to the right. The old LSB is shifted into CF, while the old MSB is retained in the MSB\nposition. Because the sign bit is copied rather than replaced by zero, the sign of a signed two’s-complement value\nis preserved.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_9",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 9,
      "question": "Why are SHL and SAL functionally identical in execution?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The notes list SHL and SAL as alternative names for the same left-shift operation: the operand shifts left, the old\nMSB goes to CF, and zero enters the LSB.",
      "explanation": "The notes list SHL and SAL as alternative names for the same left-shift operation: the operand shifts left, the old\nMSB goes to CF, and zero enters the LSB.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_10",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 10,
      "question": "How can SHL be used to perform fast multiplication by powers of 2?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "Each left shift moves the binary point-equivalent position by one place and therefore corresponds to multiplying\nthe bit pattern by 2 when overflow is ignored. Repeated left shifts can therefore be used for multiplication by 2, 4,\n8, and other powers of 2.",
      "explanation": "Each left shift moves the binary point-equivalent position by one place and therefore corresponds to multiplying\nthe bit pattern by 2 when overflow is ignored. Repeated left shifts can therefore be used for multiplication by 2, 4,\n8, and other powers of 2.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_11",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 11,
      "question": "How can SAR be used to perform fast division of signed numbers by powers of 2?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "SAR shifts a signed value right while preserving the sign bit. Therefore repeated SAR operations can be used as\na fast right-shift division technique for signed binary values, with the discarded low-order bits lost during the shift.\n\n8086 Mid-Sem Answer Pack - grounded in the supplied 128-page notes",
      "explanation": "SAR shifts a signed value right while preserving the sign bit. Therefore repeated SAR operations can be used as\na fast right-shift division technique for signed binary values, with the discarded low-order bits lost during the shift.\n\n8086 Mid-Sem Answer Pack - grounded in the supplied 128-page notes",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_12",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 12,
      "question": "Why is SHR unsuitable for performing division on signed negative numbers?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "SHR always inserts 0 into the MSB. A negative two’s-complement number has a 1 in its sign bit, so replacing that\nbit with 0 does not preserve the negative sign. SAR is the arithmetic right shift intended to retain the sign bit.",
      "explanation": "SHR always inserts 0 into the MSB. A negative two’s-complement number has a 1 in its sign bit, so replacing that\nbit with 0 does not preserve the negative sign. SAR is the arithmetic right shift intended to retain the sign bit.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_13",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 13,
      "question": "What happens to precision or data when shifting an odd number right using SHR or SAR?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The LSB is shifted out and placed into CF, so that bit of the original data is no longer part of the operand. Thus\none bit of information is discarded on each right shift.",
      "explanation": "The LSB is shifted out and placed into CF, so that bit of the original data is no longer part of the operand. Thus\none bit of information is discarded on each right shift.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_14",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 14,
      "question": "What is a rotate instruction, and how does it differ from a shift instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "A rotate operation circulates the bit pattern instead of inserting a new zero or sign bit. In a shift, a bit is discarded\nand a new bit enters. In a rotate, the shifted-out bit is fed back into the operand or through CF.",
      "explanation": "A rotate operation circulates the bit pattern instead of inserting a new zero or sign bit. In a shift, a bit is discarded\nand a new bit enters. In a rotate, the shifted-out bit is fed back into the operand or through CF.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_15",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 15,
      "question": "What are simple rotate instructions ROL and ROR?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "ROL rotates the operand left and feeds the old MSB into the LSB; the old MSB is also copied to CF. ROR rotates\nthe operand right and feeds the old LSB into the MSB; the old LSB is also copied to CF.",
      "explanation": "ROL rotates the operand left and feeds the old MSB into the LSB; the old MSB is also copied to CF. ROR rotates\nthe operand right and feeds the old LSB into the MSB; the old LSB is also copied to CF.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_16",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 16,
      "question": "What are rotate-through-carry instructions RCL and RCR?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "RCL rotates left through the Carry Flag. The old MSB goes to CF and the old CF enters the LSB. RCR rotates\nright through CF. The old LSB goes to CF and the old CF enters the MSB.",
      "explanation": "RCL rotates left through the Carry Flag. The old MSB goes to CF and the old CF enters the LSB. RCR rotates\nright through CF. The old LSB goes to CF and the old CF enters the MSB.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_17",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 17,
      "question": "In ROL, what happens to the MSB as it is shifted out?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The old MSB is moved into the LSB and is also copied into CF.",
      "explanation": "The old MSB is moved into the LSB and is also copied into CF.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_18",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 18,
      "question": "In ROR, what happens to the LSB as it is shifted out?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The old LSB is moved into the MSB and is also copied into CF.",
      "explanation": "The old LSB is moved into the MSB and is also copied into CF.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_19",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 19,
      "question": "In ROL, where does the MSB go? In RCL, where does the MSB go, and where does the old Carry",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "Flag go?\nIn ROL, the old MSB goes to the LSB and to CF. In RCL, the old MSB goes to CF, while the old CF goes into the\nLSB.",
      "explanation": "Flag go?\nIn ROL, the old MSB goes to the LSB and to CF. In RCL, the old MSB goes to CF, while the old CF goes into the\nLSB.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_20",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 20,
      "question": "How does RCL use the Carry Flag CF as a 9-bit or 17-bit register extension?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The notes show that RCL moves the old MSB into CF while the old CF enters the LSB. Thus the operand bits and\nCF participate in one circular path. For an 8-bit operand this forms a 9-bit rotation path; for a 16-bit operand it\nforms a 17-bit path.",
      "explanation": "The notes show that RCL moves the old MSB into CF while the old CF enters the LSB. Thus the operand bits and\nCF participate in one circular path. For an 8-bit operand this forms a 9-bit rotation path; for a 16-bit operand it\nforms a 17-bit path.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_21",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 21,
      "question": "How does RCR use the Carry Flag CF as a 9-bit or 17-bit register extension?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The notes show that RCR moves the old LSB into CF while the old CF enters the MSB. Hence the operand and\nCF form one circular path: 9 bits for an 8-bit operand and 17 bits for a 16-bit operand.",
      "explanation": "The notes show that RCR moves the old LSB into CF while the old CF enters the MSB. Hence the operand and\nCF form one circular path: 9 bits for an 8-bit operand and 17 bits for a 16-bit operand.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_22",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 22,
      "question": "What is the practical purpose of RCL and RCR in multi-byte or multi-word arithmetic operations?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "Because CF participates in the rotation, RCL and RCR allow a carry or borrow-related bit to move between\nadjacent word or byte portions. This makes them useful when propagating bit information across multi-byte or\nmulti-word arithmetic operations.",
      "explanation": "Because CF participates in the rotation, RCL and RCR allow a carry or borrow-related bit to move between\nadjacent word or byte portions. This makes them useful when propagating bit information across multi-byte or\nmulti-word arithmetic operations.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_23",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 23,
      "question": "Which status flags are modified by shift and rotate instructions?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The notes distinguish them as follows. For SHL/SAL, SHR, and SAR, CF, OF, SF, ZF, and PF are altered, while\nAF is shown as undefined. For ROL, ROR, RCL, and RCR, CF and OF are altered; SF, ZF, AF, and PF are not\naltered.",
      "explanation": "The notes distinguish them as follows. For SHL/SAL, SHR, and SAR, CF, OF, SF, ZF, and PF are altered, while\nAF is shown as undefined. For ROL, ROR, RCL, and RCR, CF and OF are altered; SF, ZF, AF, and PF are not\naltered.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_24",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 24,
      "question": "What does the Carry Flag CF hold after a shift or rotate operation completes?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "CF holds the last bit shifted or rotated out of the operand. For a left shift this is the old MSB; for a right shift this is\nthe old LSB. For RCL/RCR, CF receives the bit specified by the rotate-through-carry rule.",
      "explanation": "CF holds the last bit shifted or rotated out of the operand. For a left shift this is the old MSB; for a right shift this is\nthe old LSB. For RCL/RCR, CF receives the bit specified by the rotate-through-carry rule.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_25",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 25,
      "question": "When the shift or rotate count is exactly 1, what does the Overflow Flag OF indicate?\n\n8086 Mid-Sem Answer Pack - grounded in the supplied 128-page notes",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The 128-page notes supplied here do not state the exact bit-level rule for interpreting OF for a single shift or rotate\ncount. They only record in the flag table that OF is altered by these instructions. Therefore this specific rule is not\nstated in the source notes and is not invented here.",
      "explanation": "The 128-page notes supplied here do not state the exact bit-level rule for interpreting OF for a single shift or rotate\ncount. They only record in the flag table that OF is altered by these instructions. Therefore this specific rule is not\nstated in the source notes and is not invented here.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_26",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 26,
      "question": "Why is the value of OF undefined when the shift or rotate count is greater than 1?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The supplied notes do not explicitly give a rule explaining the undefined meaning of OF for counts greater than 1.\nThey provide the flag-impact table but do not state the count-dependent OF formula. Therefore the exact\nexplanation is not available in the source notes.",
      "explanation": "The supplied notes do not explicitly give a rule explaining the undefined meaning of OF for counts greater than 1.\nThey provide the flag-impact table but do not state the count-dependent OF formula. Therefore the exact\nexplanation is not available in the source notes.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Shift_27",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Shift and Rotate Instructions",
      "type": "qa",
      "qnum": 27,
      "question": "Which flags are left undefined or not modified after shift and rotate operations?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "From the notes: for shift instructions, AF is marked undefined. For rotate instructions, SF, ZF, AF, and PF are not\naltered; only CF and OF are altered. The notes therefore distinguish undefined from not modified rather than\ntreating them as the same.",
      "explanation": "From the notes: for shift instructions, AF is marked undefined. For rotate instructions, SF, ZF, AF, and PF are not\naltered; only CF and OF are altered. The notes therefore distinguish undefined from not modified rather than\ntreating them as the same.",
      "source": "8086_Shift_Rotate_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_1",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 1,
      "question": "Which segments are used in string instructions?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The notes use the Data Segment for source string data and the Extra Segment for destination string data. LODS\nreads from DS, while STOS writes to ES. MOVS and CMPS use DS for the source and ES for the destination.\nSCAS uses ES for the string being scanned.",
      "explanation": "The notes use the Data Segment for source string data and the Extra Segment for destination string data. LODS\nreads from DS, while STOS writes to ES. MOVS and CMPS use DS for the source and ES for the destination.\nSCAS uses ES for the string being scanned.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_2",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 2,
      "question": "Which segment registers and associated index or pointer registers are used in string\ninstructions?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "SI holds the source effective address and is associated with DS. DI holds the destination effective address and is\nassociated with ES. The accumulator is involved for LODS and STOS: LODSB/LODSW load AL/AX, while\nSTOSB/STOSW store AL/AX.",
      "explanation": "SI holds the source effective address and is associated with DS. DI holds the destination effective address and is\nassociated with ES. The accumulator is involved for LODS and STOS: LODSB/LODSW load AL/AX, while\nSTOSB/STOSW store AL/AX.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_3",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 3,
      "question": "What is the Direction Flag DF?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "DF controls the direction in which SI and DI are automatically updated after a string instruction. DF = 0 means\nincrement; DF = 1 means decrement.",
      "explanation": "DF controls the direction in which SI and DI are automatically updated after a string instruction. DF = 0 means\nincrement; DF = 1 means decrement.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_4",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 4,
      "question": "Which instructions are used to set and clear the DF flag?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "CLD clears DF to 0. STD sets DF to 1.",
      "explanation": "CLD clears DF to 0. STD sets DF to 1.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_5",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 5,
      "question": "Why is it necessary to set and clear the DF flag?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The DF determines whether string pointers move forward or backward through memory. It must be set or cleared\naccording to the direction in which the string data has to be processed.",
      "explanation": "The DF determines whether string pointers move forward or backward through memory. It must be set or cleared\naccording to the direction in which the string data has to be processed.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_6",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 6,
      "question": "What happens during string instruction execution when DF = 1?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The index registers are decremented after the operation. For byte operations SI and DI change by 1; for word\noperations they change by 2.",
      "explanation": "The index registers are decremented after the operation. For byte operations SI and DI change by 1; for word\noperations they change by 2.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_7",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 7,
      "question": "What happens during string instruction execution when DF = 0?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The index registers are incremented after the operation. For byte operations SI and DI change by 1; for word\noperations they change by 2.",
      "explanation": "The index registers are incremented after the operation. For byte operations SI and DI change by 1; for word\noperations they change by 2.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_8",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 8,
      "question": "What are repeat prefixes REP, REPE/REPZ, REPNE/REPNZ?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "REP is a prefix used to repeat a string instruction. REPE and REPZ are equivalent names for repeat while equal,\nand REPNZ and REPNE are equivalent names for repeat while not equal. The comparison-based forms use CX\ntogether with the Zero Flag.",
      "explanation": "REP is a prefix used to repeat a string instruction. REPE and REPZ are equivalent names for repeat while equal,\nand REPNZ and REPNE are equivalent names for repeat while not equal. The comparison-based forms use CX\ntogether with the Zero Flag.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_9",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 9,
      "question": "Which register is used as the loop counter for repeat prefixes?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "CX is the repetition counter. It is decremented by 1 after each execution of the string instruction under the repeat\nprefix.",
      "explanation": "CX is the repetition counter. It is decremented by 1 after each execution of the string instruction under the repeat\nprefix.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_10",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 10,
      "question": "How does REP work with MOVSB and STOSB?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "With a plain REP prefix, the string instruction is repeated while CX is not zero. CX is decremented after each\nexecution. Thus REP MOVSB copies a sequence of bytes from DS:SI to ES:DI, while REP STOSB stores AL\nrepeatedly into ES:DI.",
      "explanation": "With a plain REP prefix, the string instruction is repeated while CX is not zero. CX is decremented after each\nexecution. Thus REP MOVSB copies a sequence of bytes from DS:SI to ES:DI, while REP STOSB stores AL\nrepeatedly into ES:DI.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_11",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 11,
      "question": "What is the difference between REPE and REPNE?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "REPE/REPZ repeats while CX is not zero and ZF = 1. REPNZ/REPNE repeats while CX is not zero and ZF = 0.\nThe repeat terminates when either the CX condition or the required ZF condition becomes false.\n\n8086 Mid-Sem Answer Pack - grounded in the supplied 128-page notes",
      "explanation": "REPE/REPZ repeats while CX is not zero and ZF = 1. REPNZ/REPNE repeats while CX is not zero and ZF = 0.\nThe repeat terminates when either the CX condition or the required ZF condition becomes false.\n\n8086 Mid-Sem Answer Pack - grounded in the supplied 128-page notes",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_12",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 12,
      "question": "Which status flag is checked by REPE and REPNE during termination?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "The Zero Flag, ZF, is checked. REPE/REPZ requires ZF = 1; REPNZ/REPNE requires ZF = 0.",
      "explanation": "The Zero Flag, ZF, is checked. REPE/REPZ requires ZF = 1; REPNZ/REPNE requires ZF = 0.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_13",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 13,
      "question": "How do LODSB/LODSW and STOSB/STOSW work? Which segment registers and associated\nregisters are used?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "LODS reads string data from the Data Segment using DS:SI and places one byte into AL or one word into AX. SI\nis then incremented or decremented according to DF. STOS writes AL or AX to the Extra Segment using ES:DI,\nand DI is then incremented or decremented according to DF.",
      "explanation": "LODS reads string data from the Data Segment using DS:SI and places one byte into AL or one word into AX. SI\nis then incremented or decremented according to DF. STOS writes AL or AX to the Extra Segment using ES:DI,\nand DI is then incremented or decremented according to DF.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_14",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 14,
      "question": "How do MOVSB/MOVSW work? Which segment registers and associated registers are used?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "MOVSB copies one byte from DS:SI to ES:DI. MOVSW copies one word from DS:SI to ES:DI. Afterward SI and\nDI are automatically updated according to DF: by 1 for byte operations and by 2 for word operations.",
      "explanation": "MOVSB copies one byte from DS:SI to ES:DI. MOVSW copies one word from DS:SI to ES:DI. Afterward SI and\nDI are automatically updated according to DF: by 1 for byte operations and by 2 for word operations.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_15",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 15,
      "question": "What is the difference between executing combined LODSB and STOSB instructions versus a\nsingle MOVSB instruction?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "LODSB first loads the source byte from DS:SI into AL, and STOSB then stores AL to ES:DI. MOVSB performs the\nmemory-to-memory string move directly from DS:SI to ES:DI. Therefore the LODSB + STOSB sequence uses the\naccumulator as an intermediate step, whereas MOVSB transfers the byte directly between the two string memory\nlocations.",
      "explanation": "LODSB first loads the source byte from DS:SI into AL, and STOSB then stores AL to ES:DI. MOVSB performs the\nmemory-to-memory string move directly from DS:SI to ES:DI. Therefore the LODSB + STOSB sequence uses the\naccumulator as an intermediate step, whereas MOVSB transfers the byte directly between the two string memory\nlocations.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_16",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 16,
      "question": "How do CMPSB/CMPSW instructions work? Which segment registers and associated registers\nare used?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "CMPSB compares one byte from DS:SI with one byte from ES:DI by subtraction and uses the result to modify\nflags. CMPSW does the same for one word. SI and DI are then automatically updated according to DF.",
      "explanation": "CMPSB compares one byte from DS:SI with one byte from ES:DI by subtraction and uses the result to modify\nflags. CMPSW does the same for one word. SI and DI are then automatically updated according to DF.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_topic_8086_Strin_17",
      "subjectId": "mp",
      "chapterId": "mp_ch4",
      "category": "String Instructions",
      "type": "qa",
      "qnum": 17,
      "question": "How do SCASB/SCASW instructions work? Which segment registers and associated registers\nare used?",
      "options": {
        "A": "Show Model Answer"
      },
      "answer": "A",
      "answerText": "SCASB compares AL with the byte at ES:DI by subtraction and modifies the flags. SCASW compares AX with the\nword at ES:DI. DI is automatically incremented or decremented according to DF.",
      "explanation": "SCASB compares AL with the byte at ES:DI by subtraction and modifies the flags. SCASW compares AX with the\nword at ES:DI. DI is automatically incremented or decremented according to DF.",
      "source": "8086_String_Instructions_Answers.pdf"
    },
    {
      "id": "mp_numpack_A1",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (2 Marks)",
      "type": "numerical",
      "qnum": "A1",
      "question": "[A1 - 2 Marks]\n\nA memory space of 48 KB starts at 12000H. Find the ending address. Show the hexadecimal addition.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A1 carries 2 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A2",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A2",
      "question": "[A2 - 3 Marks]\n\nAn 8086 system must provide 128 KB RAM using 32K x 8 RAM chips. Determine: (i) number of chips required,\n(ii) number of address lines required by each chip, and (iii) the address range occupied if the first address is\n00000H.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A2 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A3",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A3",
      "question": "[A3 - 3 Marks]\n\nCalculate the chip requirement for 64 KB EPROM using 16K x 8 EPROM chips. Also determine the ending\naddress when the EPROM begins at 80000H.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A3 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A4",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (2 Marks)",
      "type": "numerical",
      "qnum": "A4",
      "question": "[A4 - 2 Marks]\n\nFor 8086, calculate the physical address for each case: (i) DS = 3A00H, SI = 1250H; (ii) ES = 2400H, DI =\n01F0H; (iii) SS = 1800H, SP = 0A20H.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A4 carries 2 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A5",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (2 Marks)",
      "type": "numerical",
      "qnum": "A5",
      "question": "[A5 - 2 Marks]\n\nFor BHE# / A0 = (0/0), (0/1), (1/0), (1/1), state whether the access is whole word from even address, byte from\neven address, byte from odd address, or no bank selected.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A5 carries 2 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A6",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A6",
      "question": "[A6 - 3 Marks]\n\nGiven BX = 1400H, SI = 0210H, DS = 3000H, find the physical address of the memory operand in MOV AX, [BX\n+ SI + 20H]. State the memory bus operation.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A6 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A7",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A7",
      "question": "[A7 - 3 Marks]\n\nGiven BX = 1A00H, DS = 2500H, find the physical address and bus-cycle type for MOV [BX + 10H], AX. State\nwhether the data-transfer phase is a memory read or write.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A7 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A8",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A8",
      "question": "[A8 - 3 Marks]\n\nTrace the result and flags for:\nMOV AX, 7FFFH\nADD AX, 0001H\nGive final AX, CF, SF, ZF and OF.\n\n8086 Numerical & 8-Mark Practice\nPage 2",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A8 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A9",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A9",
      "question": "[A9 - 3 Marks]\n\nTrace the result and flags for:\nMOV AX, 0003H\nSUB AX, 0005H\nGive final AX, CF and SF.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A9 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A10",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A10",
      "question": "[A10 - 3 Marks]\n\nIdentify the addressing mode used in each: (i) MOV AX, BX; (ii) MOV AX, 1234H; (iii) MOV AX, [2000H]; (iv)\nMOV AX, [BX + 20H]; (v) MOV AX, [BX + SI]; (vi) JMP 3456H.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A10 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A11",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A11",
      "question": "[A11 - 3 Marks]\n\nIn DS, memory location 1000H contains 34H and 1001H contains 12H. Compare final SI (initially 0000H) after: (i)\nMOV SI, [1000H] and (ii) LEA SI, [1000H].",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A11 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A12",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A12",
      "question": "[A12 - 3 Marks]\n\nLet AL = 96H and initial CF = 0. Execute SHL AL, 1 followed by ROR AL, 1. Find AL and CF after each\ninstruction.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A12 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A13",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A13",
      "question": "[A13 - 3 Marks]\n\nGiven CX = 0005H, SI = 0100H, DI = 0200H, and DF = 0, execute REP MOVSB. Determine final SI, final DI, final\nCX, and the number of bytes copied.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A13 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A14",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A14",
      "question": "[A14 - 3 Marks]\n\nSuppose SS = 2000H, SP = 0100H, AX = 1234H. Execute PUSH AX. Find the new SP and the physical\naddresses of the memory bytes holding 34H and 12H.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A14 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A15",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A15",
      "question": "[A15 - 3 Marks]\n\nA near CALL is executed when SP = 0800H. Determine SP immediately after CALL and immediately after the\nmatching near RET. How many bytes are pushed by the CALL?",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A15 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_A16",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (3 Marks)",
      "type": "numerical",
      "qnum": "A16",
      "question": "[A16 - 3 Marks]\n\nFor software interrupt type 21H, calculate the starting address of its IVT entry and identify where the new IP and\nCS are obtained within that 4-byte entry.\n\n8086 Numerical & 8-Mark Practice\nPage 3",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem A16 carries 3 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B1",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B1",
      "question": "[B1 - 4 Marks]\n\nAn 8086 has DS = 4000H, BX = 1200H, SI = 0030H. For ADD [BX + SI + 10H], 0055H: find the effective offset,\nphysical address, bus data direction, and which operand is read from memory.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B1 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B2",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B2",
      "question": "[B2 - 4 Marks]\n\nFor ES = 2200H, DI = 0100H, AL = 7AH, execute STOSB first with DF = 0 and then for DF = 1. Give destination\nphysical address and final DI in both cases.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B2 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B3",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B3",
      "question": "[B3 - 4 Marks]\n\nGiven DS = 3000H, SI = 0100H, ES = 3200H, DI = 0200H, CX = 0003H, source bytes A1H, B2H, C3H. Execute\nCLD; REP MOVSB. Write the destination bytes and final SI, DI and CX.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B3 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B4",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B4",
      "question": "[B4 - 4 Marks]\n\nGiven SS = 5000H, SP = 0200H, DX = 5678H, execute PUSH DX followed by POP AX. Track SP and state the\ntwo physical memory addresses used by the PUSH.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B4 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B5",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B5",
      "question": "[B5 - 4 Marks]\n\nA far CALL is executed with SP = 1000H. Before CALL: CS = 2500H, IP = 1234H. Determine bytes pushed, new\nSP, and which two values are restored by the matching far RET.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B5 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B6",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B6",
      "question": "[B6 - 4 Marks]\n\nSuppose the CPU executes INT 40H when SS = 3000H and SP = 0200H. Compute the IVT entry address for\ntype 40H and the SP immediately after the interrupt's three-word save.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B6 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B7",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B7",
      "question": "[B7 - 4 Marks]\n\nTrace AX, CF and ZF after each arithmetic/logical instruction.\n MOV AX, 0F0FH\nAND AX, 00FFH\nXOR AX, 0003H\nOR AX, 0100H",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B7 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B8",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (4 Marks)",
      "type": "numerical",
      "qnum": "B8",
      "question": "[B8 - 4 Marks]\n\nDetermine final AX, CF and ZF for the following sequence.\n MOV AX, 0006H\nMOV BX, 0002H\nADD AX, BX\nSHL AX, 1\nSUB AX, 0004H",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B8 carries 4 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B9",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (5 Marks)",
      "type": "numerical",
      "qnum": "B9",
      "question": "[B9 - 5 Marks]\n\nFor the following loop, find the number of times the body executes, final CX, and final SI.\n MOV CX, 0005H\nMOV SI, 0100H\nAGAIN: INC SI\nLOOP AGAIN",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B9 carries 5 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B10",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (5 Marks)",
      "type": "numerical",
      "qnum": "B10",
      "question": "[B10 - 5 Marks]\n\nComplete a bus-level trace for MOV AX, [BX] with DS = 3000H, BX = 0100H. Give the effective offset, physical\naddress, and roles of ALE, RD#, and DT/R#.\n\n8086 Numerical & 8-Mark Practice\nPage 4",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B10 carries 5 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B11",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (5 Marks)",
      "type": "numerical",
      "qnum": "B11",
      "question": "[B11 - 5 Marks]\n\nA byte is accessed at an even address and a word is accessed at an even address. For each access, write BHE#\n/ A0 and state which bank(s) are active.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B11 carries 5 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_B12",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (5 Marks)",
      "type": "numerical",
      "qnum": "B12",
      "question": "[B12 - 5 Marks]\n\nA memory device needs extra time because READY is low after T2. Explain where wait state(s) are inserted in\nthe 8086 bus cycle and what condition allows execution to continue.\n\n8086 Numerical & 8-Mark Practice\nPage 5",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem B12 carries 5 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_C1",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (8 Marks)",
      "type": "numerical",
      "qnum": "C1",
      "question": "[C1 - 8 Marks]\n\nFor the following program, assume AX = 0000H, DS = 2000H, SI = 0010H. Trace the program and answer all\nparts.\n XOR AX, AX\nMOV SI, 0010H\nOR AL, 20H\nADD AL, 07H\nXOR AL, 0FH\nMOV [SI], AL\nAGAIN: INC SI\nADD AL, AL\nJC AHEAD\nMOV [SI], AL\nJMP AGAIN\nAHEAD: MOV [SI], AL\nAnswer: (1) Trace AX, AL, SI and CF after every changing instruction. (2) Show every memory location written\nand its physical address. (3) Identify the iteration in which AHEAD is reached. (4) Give final AL, SI and CF.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem C1 carries 8 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_C2",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (8 Marks)",
      "type": "numerical",
      "qnum": "C2",
      "question": "[C2 - 8 Marks]\n\nGiven DS = 3000H, ES = 3400H, SI = 0100H, DI = 0200H, CX = 0004H, DF = 0, and source bytes 11H, 22H,\n33H, 44H. Execute the program and answer all parts.\n CLD\nREP MOVSB\nAnswer: (1) List the four physical source addresses. (2) List the four physical destination addresses. (3) Show\ndestination contents. (4) Give final SI, DI and CX. (5) State what changes for DF = 1.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem C2 carries 8 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_C3",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (8 Marks)",
      "type": "numerical",
      "qnum": "C3",
      "question": "[C3 - 8 Marks]\n\nAssume SS = 4000H, SP = 0100H, AX = 1234H, BX = ABCDH. A near subroutine is executed. Work out the\ncomplete stack trace.\n PUSH AX\nCALL SUB1\nPOP DX\nSUB1: PUSH BX\nPOP CX\nRET\nAnswer: (1) SP after every stack operation. (2) Physical stack addresses used. (3) Values popped into DX and\nCX. (4) Value restored into IP by RET. (5) Total number of word transfers involving the stack.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem C3 carries 8 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_C4",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (8 Marks)",
      "type": "numerical",
      "qnum": "C4",
      "question": "[C4 - 8 Marks]\n\nA software interrupt of type 30H occurs when SS = 5000H, SP = 0200H, CS = 2400H, IP = 1350H. The IVT entry\ncontains IP(new) = 5678H and CS(new) = 3200H. Work out the full interrupt sequence.\nAnswer: (1) Compute the IVT entry starting address. (2) Compute SP after FLAGS, CS and IP are pushed. (3)\nState save order. (4) Give new CS:IP. (5) Explain IRET and calculate SP after return.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem C4 carries 8 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_C5",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (8 Marks)",
      "type": "numerical",
      "qnum": "C5",
      "question": "[C5 - 8 Marks]\n\nA word array begins at DS:0100H and contains 0003H, 0005H, 0002H, 0004H. Write and trace an 8086 program\nusing only syllabus instructions to add all four words and store the final sum at DS:0110H. Use LOOP and a valid\narray addressing mode.\n\n8086 Numerical & 8-Mark Practice\nPage 6\nYour trace must show: (1) register values after each iteration, (2) physical memory address used in each\niteration, (3) LOOP-control register, (4) final stored 16-bit sum, and (5) final index register.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem C5 carries 8 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_numpack_C6",
      "subjectId": "mp",
      "chapterId": "mp_num",
      "category": "Numerical & Tracing (8 Marks)",
      "type": "numerical",
      "qnum": "C6",
      "question": "[C6 - 8 Marks]\n\nDesign an 8086 memory-interfacing numerical for 128 KB RAM using 32K x 8 RAM chips, starting at physical\naddress 20000H. Determine chip count, address span, ending address, address lines per chip, even/odd bank\npopulation, whole-word BHE# / A0 combination, and address range handled by each bank.\nShow a neat address-map style answer and clearly separate the even-bank and odd-bank ranges.\n\n8086 Numerical & 8-Mark Practice\nPage 7\nLAST-MINUTE CHECKLIST\n1. Ending address = starting address + size - 1.\n2. Physical address = segment x 16 + offset.\n3. BHE# / A0 decides even bank, odd bank, or both.\n4. Memory-reference instruction: identify the memory read/write operation.\n5. PUSH and POP change SP by 2 bytes for 8086 word stack operations.\n6. Near CALL/RET use IP; far CALL/RET involve CS and IP.\n7. Software INT uses a 4-byte IVT entry at type x 4 and saves FLAGS, CS, IP.\n8. String instructions: DS:SI is source, ES:DI is destination, DF controls increment/decrement.\n9. For tracing questions, write intermediate register and flag states - do not jump directly to the final answer.\n10. For 8-mark questions, show working, memory addresses, loop/jump decisions, and final register state.\nThis is a question-only practice pack. It is intentionally mixed across memory, addressing, bus cycles, flags, shifts/rotates, strings,\nstack, CALL/RET, interrupts, branches, and long program traces so you do not spend the last hour solving the same pattern\nrepeatedly.",
      "options": {
        "A": "Study Problem"
      },
      "answer": "A",
      "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
      "explanation": "Problem C6 carries 8 marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
      "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
    },
    {
      "id": "mp_master_ch1_Q1.1",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.1",
      "question": "An 8086-based microcomputer system utilizes external 74LS373 transparent octal D-latches to demultiplex the address/data bus. At what exact transition of the `ALE` (Address Latch Enable) signal is the 20-bit address permanently latched into the outputs of the 74LS373 latches for the remainder of the bus cycle?",
      "options": {
        "A": "At the rising edge of `ALE` during the start of $T_1$",
        "B": "At the trailing (falling) edge of `ALE` during the end of $T_1$",
        "C": "At the rising edge of the system clock during $T_2$",
        "D": "At the falling edge of the `RD#` or `WR#` strobe in $T_2$"
      },
      "answer": "B",
      "answerText": "At the trailing (falling) edge of `ALE` during the end of $T_1$",
      "explanation": "The 74LS373 is an active-high transparent latch (Enable pin $G$ or $LE$). While `ALE` is high (during the initial phase of $T_1$), the latch is transparent—meaning its outputs mirror the inputs. As soon as `ALE` transitions from HIGH to LOW (its trailing/falling edge near the end of $T_1$), the data present on the $D$-inputs is latched and frozen. Trapping option [A] is a common student misconception: the rising edge makes the latch transparent, but latching/freezing occurs strictly at the *falling edge*.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.2",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.2",
      "question": "In a microprocessor system bus interface, three-state (tristate) logic devices are ubiquitous. If a memory peripheral's Chip Select (`CS#`) input is de-asserted (driven HIGH to logic 1), what is the electrical state of its data output pins connected to the system data bus?",
      "options": {
        "A": "Held at a logic LOW level (0 V), sinking maximum permissible current.",
        "B": "Held at a logic HIGH level (+5 V), sourcing maximum pull-up current.",
        "C": "High-impedance ($Z$) state, presenting an open-circuit condition with negligible leakage current.",
        "D": "Alternating between 0 V and +5 V synchronously with the system bus clock."
      },
      "answer": "C",
      "answerText": "High-impedance ($Z$) state, presenting an open-circuit condition with negligible leakage current.",
      "explanation": "Tristate logic defines three discrete operational states: Logic 0, Logic 1, and High-Impedance ($Hi\\text{-}Z$). In the $Hi\\text{-}Z$ state, both internal pull-up and pull-down output transistors are cut off, electrically isolating the chip from the shared bus. This electrical isolation prevents bus contention (short circuits) when multiple slaves share identical data bus lines.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.3",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.3",
      "question": "The Intel 8086 microprocessor has a 20-bit physical address bus and is byte-addressable (addressability = 8 bits). If the processor architecture had instead been designed with a 20-bit address bus but *word-addressable* (addressability = 16 bits per unique physical address), what would be the total physical memory capacity addressable by the processor?",
      "options": {
        "A": "512 Kilobytes",
        "B": "1 Megabyte",
        "C": "2 Megabytes",
        "D": "4 Megabytes"
      },
      "answer": "C",
      "answerText": "2 Megabytes",
      "explanation": "Physical memory capacity is governed by: \n$$\\text{Memory Capacity} = 2^n \\times \\text{Addressability}$$ \nWith $n = 20$ address lines, the CPU can generate $2^{20} = 1,048,576$ discrete physical addresses. In 8086, memory word size is 8 bits (1 byte), giving $1\\text{ MB}$. If addressability were 16 bits (2 bytes per location), capacity would be: \n$$2^{20} \\times 2\\text{ bytes} = 2\\text{ Megabytes}$$ \nThis tests whether students blindly memorize \"20 lines = 1 MB\" without understanding the fundamental role of memory addressability.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.4",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.4",
      "question": "Why is multiplexing strictly prohibited on a computer's **System Bus**, whereas it is intentionally implemented on the **CPU Bus** of the Intel 8086?",
      "options": {
        "A": "System bus lines must carry higher electrical voltage than CPU bus lines.",
        "B": "The CPU bus is limited by IC physical packaging pin constraints (40 pins), whereas standard system peripheral cards require independent, stable address and data lines simultaneously across machine cycles.",
        "C": "CPU buses operate under asynchronous handshaking while system buses operate purely on synchronous clocking.",
        "D": "Demultiplexing on the CPU bus would increase internal power dissipation of the silicon substrate beyond permissible thermal limits."
      },
      "answer": "B",
      "answerText": "The CPU bus is limited by IC physical packaging pin constraints (40 pins), whereas standard system peripheral cards require independent, stable address and data lines simultaneously across machine cycles.",
      "explanation": "Intel packed a full 16-bit processor with a 20-bit address bus into a standard 40-pin Dual In-line Package (DIP). To fit 20 address lines, 16 data lines, power, ground, and control lines, multiplexing (`AD0-AD15`, `A16/S3-A19/S6`) was mandatory. However, external slaves (RAM, EPROM, I/O ports) cannot decode an address that vanishes midway through a bus cycle while data is being transferred; hence, the system bus *must* provide physically separate, demultiplexed address, data, and control pathways.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.5",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.5",
      "question": "During an 8086 Memory Read machine cycle, what are the logic levels driven by the processor on the transceiver control pins `DT/R#` (Data Transmit/Receive) and `DEN#` (Data Enable) during the data transfer phase ($T_2 - T_4$)?",
      "options": {
        "A": "`DT/R#` = 1, `DEN#` = 1",
        "B": "`DT/R#` = 1, `DEN#` = 0",
        "C": "`DT/R#` = 0, `DEN#` = 0",
        "D": "`DT/R#` = 0, `DEN#` = 1"
      },
      "answer": "C",
      "answerText": "`DT/R#` = 0, `DEN#` = 0",
      "explanation": "`DT/R#` is active-HIGH for Transmit (CPU -> Memory/Write) and active-LOW for Receive (Memory -> CPU/Read). For a Read operation, `DT/R#` is driven LOW (0). `DEN#` is an active-LOW strobe that enables the bidirectional data bus transceivers (74LS245 / 8286). Therefore, during the active data transfer phase of a read cycle, both `DT/R#` and `DEN#` must be at logic 0.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.6",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.6",
      "question": "How many 8-bit octal D-type latches (such as 74LS373) and how many 8-bit bidirectional bus transceivers (such as 74LS245/8286) are fundamentally required to fully demultiplex the 8086 CPU bus into a dedicated 20-bit system address bus and a 16-bit buffered system data bus?",
      "options": {
        "A": "2 Latches and 2 Transceivers",
        "B": "3 Latches and 2 Transceivers",
        "C": "2 Latches and 3 Transceivers",
        "D": "3 Latches and 3 Transceivers"
      },
      "answer": "B",
      "answerText": "3 Latches and 2 Transceivers",
      "explanation": "- **Address Demultiplexing:** The 8086 outputs 20 address bits (`AD0-AD15` + `A16-A19/S3-S6`) plus `BHE#` (often latched alongside address lines). To latch 20 bits (or 21 bits including `BHE#`), an 8-bit latch can hold 8 bits. Thus, $\\lceil 20 / 8 \\rceil = 3$ octal latches (74LS373) are required ($3 \\times 8 = 24$ latching capacity). \n- **Data Buffering:** The data bus is 16 bits wide (`D0-D15`). Each bidirectional transceiver (74LS245) buffers 8 bits. Hence, $16 / 8 = 2$ transceivers are required.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.7",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.7",
      "question": "Consider an EPROM chip with capacity specified as **32 Kilobytes** ($32\\text{ KB} \\times 8$). How many physical address lines are required to access every individual byte location within this EPROM chip?",
      "options": {
        "A": "13 address lines",
        "B": "14 address lines",
        "C": "15 address lines",
        "D": "16 address lines"
      },
      "answer": "C",
      "answerText": "15 address lines",
      "explanation": "$$32\\text{ KB} = 32 \\times 2^{10}\\text{ bytes} = 2^5 \\times 2^{10}\\text{ bytes} = 2^{15}\\text{ bytes}$$ \nTo uniquely address $2^{15}$ internal byte locations, exactly 15 address lines ($A_0 \\text{ to } A_{14}$) must be routed directly to the chip's internal address decoder.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.8",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.8",
      "question": "In an 8086 microprocessor system, a memory block of $64\\text{ KB}$ is to be mapped into the physical address space starting at address `40000H`. What will be the exact ending physical address of this memory block?",
      "options": {
        "A": "`4FFFFH`",
        "B": "`50000H`",
        "C": "`4EFFFH`",
        "D": "`5FFFFH`"
      },
      "answer": "A",
      "answerText": "`4FFFFH`",
      "explanation": "The size of the block is $64\\text{ KB} = 65,536\\text{ bytes} = 10000\\text{H}$ bytes. \nThe ending address is calculated as: \n$$\\text{Ending Address} = \\text{Starting Address} + \\text{Size} - 1$$ \n$$\\text{Ending Address} = 40000\\text{H} + 10000\\text{H} - 1\\text{H} = 50000\\text{H} - 1\\text{H} = 4\\text{FFFFH}$$ \nTrap: Students frequently forget the \"$-1$\" offset in zero-indexed address spaces and choose `50000H` (Option B).",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.9",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.9",
      "question": "A system designer connects the active-low Chip Enable (`CE#`) of a memory device to the output of a 3-to-8 line decoder (74LS138). If the decoder enable lines are correctly asserted, but the CPU issues an address during which the decoder inputs select an unmapped channel, what happens on the system data bus during a CPU read cycle?",
      "options": {
        "A": "The CPU immediately executes an internal Non-Maskable Interrupt (NMI).",
        "B": "The unselected memory device remains in high-impedance ($Hi\\text{-}Z$), and the CPU reads floating bus data (typically perceived as `0FFH` due to bus pull-ups).",
        "C": "The 8086 asserts the `RESET` pin to prevent memory corruption.",
        "D": "The CPU enters an infinite Wait State ($T_w$) loop automatically."
      },
      "answer": "B",
      "answerText": "The unselected memory device remains in high-impedance ($Hi\\text{-}Z$), and the CPU reads floating bus data (typically perceived as `0FFH` due to bus pull-ups).",
      "explanation": "When an address does not assert the `CE#` of any slave device, all slaves remain in their default high-impedance tristate condition. The bus floats. In TTL/CMOS systems with pull-up resistors, floating lines float high to logic 1 (`0FFH` or `0FFFFH`). The CPU does *not* know a device is absent unless external hardware fails to return `READY`—and in basic systems where `READY` is tied high, the CPU blindly reads `0FFH`.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch1_Q1.10",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q1.10",
      "question": "In a typical microcomputer clock waveform, if a symmetrical clock generator provides an $8\\text{ MHz}$ square wave to the 8086 CPU, what is the exact duration of a single basic $T$-state?",
      "options": {
        "A": "$250\\text{ ns}$",
        "B": "$125\\text{ ns}$",
        "C": "$200\\text{ ns}$",
        "D": "$62.5\\text{ ns}$"
      },
      "answer": "B",
      "answerText": "$125\\text{ ns}$",
      "explanation": "A single $T$-state is defined as one complete period ($T$) of the CPU clock: \n$$T = \\frac{1}{f} = \\frac{1}{8 \\times 10^6\\text{ Hz}} = 0.125 \\times 10^{-6}\\text{ s} = 125\\text{ ns}$$",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.11",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.11",
      "question": "In an 8086-based system, the address bus is inherently bidirectional because data can be transferred both into and out of memory locations.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "The address bus is strictly **unidirectional**; the microprocessor alone issues addresses to designate memory or I/O locations. The *data bus* is bidirectional, allowing two-way transfer between the processor and peripherals.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.12",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.12",
      "question": "The `ALE` signal generated by the 8086 microprocessor is active-low and remains low throughout the entire execution of an instruction.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "`ALE` is an **active-HIGH** pulse. It is asserted high during the first half of clock cycle $T_1$ and returns low before the end of $T_1$ to latch the address into external 74LS373 latches.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.13",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.13",
      "question": "An electrical open-circuit condition created by a tristate logic gate in the high-impedance state causes the bus line voltage to instantly collapse to zero volts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "A high-impedance ($Hi\\text{-}Z$) pin is electrically disconnected; it neither drives high nor pulls low. The voltage on the bus line is undetermined (floating) and will float to logic HIGH (+5V) if pull-up resistors are present on the bus.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.14",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.14",
      "question": "A microprocessor with 16 physical address lines can directly address a maximum physical memory space of 64 Kilobytes, assuming 8-bit addressability.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Memory locations $= 2^{16} = 65,536\\text{ bytes} = 64\\text{ KB}$. With byte-addressability, total capacity is exactly $64\\text{ KB}$.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.15",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.15",
      "question": "During demultiplexing, external 74LS373 latches must retain the 20-bit address stable across clock states $T_2$, $T_3$, and $T_4$, even though the 8086 processor disconnects the address from pins `AD0-AD15` at the end of $T_1$.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "External memory chips require the address lines to remain valid and stable throughout the entire read/write access time ($T_2$ through $T_4$). The 74LS373 latches freeze the address at the falling edge of $T_1$ and maintain it until the next $T_1$.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.16",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.16",
      "question": "System buses allow multiplexing of address and data lines to reduce the manufacturing cost of printed circuit boards (PCBs).",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Multiplexing is strictly forbidden on system buses. Slaves and memory chips require dedicated, unshared address and data lines simultaneously during data exchange. Multiplexing exists only on the CPU bus due to IC package pin limitations.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.17",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.17",
      "question": "EPROM memories are non-volatile and are traditionally mapped to store bootstrap/initialization programs, whereas static RAM is volatile and stores operational data.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "EPROMs retain data without power, making them ideal for holding reset initialization code (BIOS/Monitor), whereas RAM loses data upon power-down.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_tf_ch1_Q1.18",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q1.18",
      "question": "When the 8086 processor performs a write operation to memory, the `DT/R#` pin is driven LOW to receive data back from the memory latch.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "During a write cycle, the CPU *transmits* data from its internal registers to memory. Therefore, `DT/R#` is driven HIGH (logic 1) to configure the bidirectional data buffers for output transmission.",
      "source": "Question_Bank_Chapter_1_Introduction.md"
    },
    {
      "id": "mp_master_ch2_Q2.1",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.1",
      "question": "During an instruction fetch machine cycle, the 8086 Bus Interface Unit (BIU) outputs binary `10` on the multiplexed status lines $S_4$ and $S_3$ ($S_4 = 1, S_3 = 0$). What specific segment register is being accessed by the processor during this bus cycle?",
      "options": {
        "A": "Data Segment Register (`DS`)",
        "B": "Stack Segment Register (`SS`)",
        "C": "Code Segment Register (`CS`) (or None)",
        "D": "Extra Segment Register (`ES`)"
      },
      "answer": "C",
      "answerText": "Code Segment Register (`CS`) (or None)",
      "explanation": "The status lines $S_4$ and $S_3$ output on pins 36 and 37 indicate which segment register generates the physical address during that machine cycle:\n- `00`: Extra Segment (`ES`)\n- `01`: Stack Segment (`SS`)\n- `10`: Code Segment (`CS`) or None\n- `11`: Data Segment (`DS`) \nFor instruction fetching, the BIU combines `CS` and `IP`, asserting $S_4 S_3 = 10$.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.2",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.2",
      "question": "An 8086 microprocessor is instructed to execute a 16-bit word read operation from physical memory address `70005H` (`MOV AX, [70005H]`). How many bus machine cycles will the BIU execute to complete this memory transfer, and what will be the state of the bank-selection signals during the first bus cycle?",
      "options": {
        "A": "1 bus cycle; $\\overline{\\text{BHE}} = 0, A_0 = 0$",
        "B": "2 bus cycles; First cycle: $\\overline{\\text{BHE}} = 0, A_0 = 1$",
        "C": "2 bus cycles; First cycle: $\\overline{\\text{BHE}} = 1, A_0 = 0$",
        "D": "1 bus cycle; $\\overline{\\text{BHE}} = 0, A_0 = 1$"
      },
      "answer": "B",
      "answerText": "2 bus cycles; First cycle: $\\overline{\\text{BHE}} = 0, A_0 = 1$",
      "explanation": "The address `70005H` is an **odd address** ($A_0 = 1$). Reading a 16-bit word from an odd address represents an **unaligned (misaligned) word access**, which requires **two consecutive bus cycles**:\n1. **First Bus Cycle:** Lower byte of the word (at odd address `70005H`) is fetched from the Odd Memory Bank via data lines $D_{15}-D_8$. Bank signals are $\\overline{\\text{BHE}} = 0, A_0 = 1$.\n2. **Second Bus Cycle:** Upper byte of the word (at next even address `70006H`) is fetched from the Even Memory Bank via data lines $D_7-D_0$. Bank signals are $\\overline{\\text{BHE}} = 1, A_0 = 0$. \nThe internal EU then automatically swaps and splices the two bytes into `AX`. This is a classic paper-setter trap testing alignment penalties.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.3",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.3",
      "question": "At what precise instant during a basic 8086 bus cycle does the processor sample the `READY` input pin to determine whether a Wait State ($T_w$) must be inserted?",
      "options": {
        "A": "At the rising edge of clock cycle $T_1$",
        "B": "At the falling edge of clock cycle $T_2$ and during the transition into $T_3$",
        "C": "At the falling edge of clock cycle $T_3$ (and each subsequent $T_w$)",
        "D": "At the trailing rising edge of the `RD#` strobe in $T_4$"
      },
      "answer": "C",
      "answerText": "At the falling edge of clock cycle $T_3$ (and each subsequent $T_w$)",
      "explanation": "The 8086 samples `READY` at the transition of $T_2 \\rightarrow T_3$ and crucially tests it on the **falling edge of clock state $T_3$**. If `READY` is logic LOW (0) when sampled, the processor inserts a Wait state ($T_w$) between $T_3$ and $T_4$. During each $T_w$, `READY` is repeatedly sampled on the falling edge; as long as it stays low, successive $T_w$ states are appended.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.4",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.4",
      "question": "When the hardware `RESET` pin of the Intel 8086 is driven HIGH for at least four clock cycles and then released, what are the exact initialized contents of the Code Segment register (`CS`) and Instruction Pointer (`IP`), and what is the resulting first instruction fetch physical address?",
      "options": {
        "A": "`CS = 0000H`, `IP = 0000H`; Physical Address = `00000H`",
        "B": "`CS = FFFFH`, `IP = 0000H`; Physical Address = `FFFF0H`",
        "C": "`CS = F000H`, `IP = FFF0H`; Physical Address = `FFFF0H`",
        "D": "`CS = FFFFH`, `IP = FFFFH`; Physical Address = `0FFEFH`"
      },
      "answer": "B",
      "answerText": "`CS = FFFFH`, `IP = 0000H`; Physical Address = `FFFF0H`",
      "explanation": "Upon reset: \n- `CS` is loaded with `FFFFH`\n- `IP` is cleared to `0000H` \n- Physical address $= (\\text{CS} \\times 10\\text{H}) + \\text{IP} = (\\text{FFFFH} \\times 10\\text{H}) + 0000\\text{H} = \\mathbf{FFFF0H}$. \nThis is why system initialization EPROM is permanently mapped to the very top of the 8086 address space (`F0000H - FFFFFH`).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.5",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.5",
      "question": "In the 8086 internal architecture, what condition specifically triggers the Bus Interface Unit (BIU) to initiate an autonomous instruction prefetch bus cycle while the Execution Unit (EU) is busy executing an instruction?",
      "options": {
        "A": "Whenever the 6-byte instruction queue becomes completely empty (0 bytes remaining).",
        "B": "Whenever there are at least 2 empty byte locations in the 6-byte instruction queue.",
        "C": "Whenever the EU completes execution of an arithmetic instruction.",
        "D": "Whenever the Direction Flag (`DF`) is set to 0."
      },
      "answer": "B",
      "answerText": "Whenever there are at least 2 empty byte locations in the 6-byte instruction queue.",
      "explanation": "In the 8086 (which has a 16-bit external data bus), the BIU fetches instruction bytes in 16-bit words whenever possible. Hence, the BIU prefetch mechanism is activated as soon as at least **2 empty bytes** become available in the 6-byte FIFO queue (provided the external bus is not being used by the EU for memory data read/write).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.6",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.6",
      "question": "Which of the following internal events causes the 8086 to immediately discard (flush) all prefetched instruction bytes currently residing in its 6-byte instruction queue, incurring a pipeline latency penalty?",
      "options": {
        "A": "Execution of `ADD AX, BX` resulting in an arithmetic carry",
        "B": "Successful execution of a branch instruction (`JMP`, `CALL`, `RET`, or taken conditional jump)",
        "C": "Setting the Trap Flag (`TF`) to 1",
        "D": "Execution of `XLAT` instruction using a data table in memory"
      },
      "answer": "B",
      "answerText": "Successful execution of a branch instruction (`JMP`, `CALL`, `RET`, or taken conditional jump)",
      "explanation": "The BIU prefetches instructions sequentially based on the current `IP`. When a branch instruction (`JMP`, `CALL`, `RET`, or interrupt) alters the sequential flow, the next instructions already sitting in the queue are invalid. The queue must be completely flushed (emptied), `IP` loaded with the new target address, and a new fetch cycle executed across the external bus, causing a pipeline delay.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.7",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.7",
      "question": "During the execution of an interrupt acknowledge sequence for a maskable hardware interrupt (`INTR`), how many `INTA#` pulses are generated by the 8086, and during which pulse does the external interrupt controller place the interrupt vector type number on the data bus?",
      "options": {
        "A": "One `INTA#` pulse; the vector type is placed during that single pulse.",
        "B": "Two `INTA#` pulses; the vector type is placed during the first pulse.",
        "C": "Two `INTA#` pulses; the vector type is placed during the second pulse on lines `AD0-AD7`.",
        "D": "Four `INTA#` pulses; one for each byte of the ISR vector pointer."
      },
      "answer": "C",
      "answerText": "Two `INTA#` pulses; the vector type is placed during the second pulse on lines `AD0-AD7`.",
      "explanation": "The 8086 generates **two negative pulses on `INTA#`** in response to `INTR`:\n- **First pulse:** Informs the external interrupt controller (8259A) that the CPU has acknowledged the request and is preparing for vectoring. Bus lines `AD0-AD15` remain in high-impedance.\n- **Second pulse:** Strobe to the external controller to place the 8-bit interrupt type number ($N$, 0 to 255) onto the lower data bus lines `AD0-AD7`.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.8",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.8",
      "question": "If the Data Segment register (`DS`) contains `2400H` and the Effective Address (offset) calculated for a memory operand is `F800H`, what is the 20-bit physical address accessed by the 8086?",
      "options": {
        "A": "`24F80H`",
        "B": "`33800H`",
        "C": "`13800H`",
        "D": "`F8240H`"
      },
      "answer": "B",
      "answerText": "`33800H`",
      "explanation": "$$\\text{Physical Address} = (\\text{DS} \\times 10\\text{H}) + \\text{Offset}$$ \n$$\\text{Segment Base} = 2400\\text{H} \\times 10\\text{H} = 24000\\text{H}$$ \n$$\\text{Physical Address} = 24000\\text{H} + \\text{F800H} = \\mathbf{33800H}$$ \nCalculation check: $24000\\text{H} + \\text{F800H}$: \n$0+0=0$, $0+0=0$, $0+8=8$, $4+\\text{F} = 4+15 = 19 = 16+3$ (sum = $3$, carry = $1$), $2+1 = 3 \\implies 33800\\text{H}$. \nTrap: Students who simply concatenate strings without multiplying by $16_{10}$ choose `24F80H` (Option A).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.9",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.9",
      "question": "In an 8086 minimum-mode system, what signal does an external Direct Memory Access (DMA) controller assert to request mastership of the address, data, and control buses from the CPU?",
      "options": {
        "A": "`INTR`",
        "B": "`NMI`",
        "C": "`HOLD`",
        "D": "`HLDA`"
      },
      "answer": "C",
      "answerText": "`HOLD`",
      "explanation": "An external master asserts the active-high `HOLD` pin. Upon receiving `HOLD`, the 8086 completes its current bus cycle, floats its address, data, and control buses to high-impedance, and asserts `HLDA` (Hold Acknowledge, Option D) to confirm that the external master may take control of the buses.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.10",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.10",
      "question": "Which group of registers in the 8086 Execution Unit can be used to hold the Effective Address (EA) offset for memory addressing?",
      "options": {
        "A": "`AX`, `BX`, `CX`, `DX`",
        "B": "`BX`, `BP`, `SI`, `DI`",
        "C": "`CS`, `DS`, `SS`, `ES`",
        "D": "`SP`, `IP`, `SI`, `DI`"
      },
      "answer": "B",
      "answerText": "`BX`, `BP`, `SI`, `DI`",
      "explanation": "Only four registers in the 8086 can serve as base or index registers to generate memory effective addresses: Base register (`BX`), Base Pointer (`BP`), Source Index (`SI`), and Destination Index (`DI`). `AX, CX, DX` cannot be used inside brackets (e.g., `MOV AX, [CX]` is illegal).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.11",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.11",
      "question": "During an 8086 Memory Write cycle, when is the write control strobe `WR#` asserted LOW, and when does the actual data latching into memory occur?",
      "options": {
        "A": "`WR#` is asserted in $T_1$; data is latched at the falling edge of $T_2$.",
        "B": "`WR#` is asserted in $T_2$; data is latched at the rising (trailing) edge of `WR#` in $T_4$.",
        "C": "`WR#` is asserted in $T_3$; data is latched at the falling edge of $T_4$.",
        "D": "`WR#` is held asserted across all states from $T_1$ through $T_4$."
      },
      "answer": "B",
      "answerText": "`WR#` is asserted in $T_2$; data is latched at the rising (trailing) edge of `WR#` in $T_4$.",
      "explanation": "In the 8086 write timing cycle: \n- $T_1$: Address and `ALE` output; `DT/R#` = 1. \n- $T_2$: CPU places write data onto `AD0-AD15` and asserts `WR#` LOW. `DEN#` is asserted LOW. \n- $T_3$: Memory writes data. \n- $T_4$: `WR#` transitions from LOW to HIGH. The **rising edge of `WR#`** strobes/latches data permanently into the memory cells, after which `DEN#` goes high and data lines float.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.12",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.12",
      "question": "How does the 8086 microprocessor differentiate between a memory read/write operation and an I/O read/write operation in Minimum Mode?",
      "options": {
        "A": "By the state of the pin `M/IO#` (High for Memory, Low for I/O).",
        "B": "By using different physical address pins for memory and I/O.",
        "C": "By asserting `ALE` twice for I/O operations.",
        "D": "By changing the clock frequency from $5\\text{ MHz}$ to $10\\text{ MHz}$."
      },
      "answer": "A",
      "answerText": "By the state of the pin `M/IO#` (High for Memory, Low for I/O).",
      "explanation": "In minimum mode, pin 28 functions as `M/IO#`. When the 8086 executes an instruction accessing memory, `M/IO#` is driven HIGH (1). When accessing peripheral ports, `M/IO#` is driven LOW (0).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.13",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.13",
      "question": "The Flag register of the 8086 contains 16 bits, of which 9 bits are active flags. Which of the following flags is a **control flag** rather than a **conditional (status) flag**?",
      "options": {
        "A": "Auxiliary Carry Flag (`AF`)",
        "B": "Overflow Flag (`OF`)",
        "C": "Direction Flag (`DF`)",
        "D": "Parity Flag (`PF`)"
      },
      "answer": "C",
      "answerText": "Direction Flag (`DF`)",
      "explanation": "The 9 active flags are split into:\n- **6 Status/Conditional Flags:** Set/cleared by ALU arithmetic/logic outcomes: `CF`, `PF`, `AF`, `ZF`, `SF`, `OF`.\n- **3 Control Flags:** Alter processor operation modes: `TF` (Trap/Single Step), `IF` (Interrupt enable), and `DF` (Direction for string increment/decrement).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.14",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.14",
      "question": "If the Stack Segment register (`SS`) holds `8000H` and the Stack Pointer (`SP`) contains `2000H`, what will be the value of `SP` and the physical address where data is written after the execution of the instruction `PUSH AX`?",
      "options": {
        "A": "`SP = 2002H`; Physical Address = `82002H`",
        "B": "`SP = 1FFEH`; Physical Address = `81FFEH`",
        "C": "`SP = 1FFFH`; Physical Address = `81FFFH`",
        "D": "`SP = 1FFEH`; Physical Address = `82000H`"
      },
      "answer": "B",
      "answerText": "`SP = 1FFEH`; Physical Address = `81FFEH`",
      "explanation": "In 8086, the stack grows downwards toward lower memory addresses. \nWhen `PUSH` executes: \n1. `SP` is decremented by 2: $\\text{SP} = 2000\\text{H} - 2\\text{H} = \\mathbf{1FFEH}$. \n2. Data is written to stack memory: \n $$\\text{Physical Address} = (\\text{SS} \\times 10\\text{H}) + \\text{SP} = 80000\\text{H} + 1\\text{FFEH} = \\mathbf{81FFEH}$$. \n(AH is stored at `81FFFH` and AL at `81FFEH`). Trapping option [A] catches students who think the stack pointer increments on push.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch2_Q2.15",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q2.15",
      "question": "What is the logical status of status bit $S_6$ output on pin 35 (`A19/S6`) during clock cycles $T_2, T_3, T_4$?",
      "options": {
        "A": "Always logic 1 to indicate 8086 is the bus master.",
        "B": "Always logic 0 in 8086 microprocessor.",
        "C": "Reflects the current state of the Interrupt Flag (`IF`).",
        "D": "Indicates whether an even or odd bank is currently enabled."
      },
      "answer": "B",
      "answerText": "Always logic 0 in 8086 microprocessor.",
      "explanation": "Notes Section 2.2.1 explicitly states: $S_6$ is **always logic 0** in the 8086 microprocessor (it was reserved for future processor identification). $S_5$ reflects the Interrupt Flag (`IF`).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.16",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.16",
      "question": "In an 8086 microprocessor, the physical address of the next instruction to be fetched from memory is generated by adding the contents of the Instruction Pointer (`IP`) directly to the Code Segment register (`CS`) without any bit shifting.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Segment registers are 16 bits wide while the physical address bus is 20 bits wide. To generate the physical address, the contents of `CS` are shifted left by 4 bit positions (multiplied by $10\\text{H} = 16_{10}$) and then added to the 16-bit offset in `IP`: \n$$\\text{Physical Address} = (\\text{CS} \\times 10\\text{H}) + \\text{IP}$$",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.17",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.17",
      "question": "When accessing an 8-bit byte from an even physical address (e.g., `40002H`), data is transferred across the upper data bus lines $D_{15}-D_8$ while $\\overline{\\text{BHE}}$ is asserted LOW.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Even addresses reside in the **Even Memory Bank**, which is connected to the lower data bus lines $D_7-D_0$ and selected by $A_0 = 0$. In this access, $\\overline{\\text{BHE}} = 1$ (inactive) and $A_0 = 0$. $D_{15}-D_8$ and $\\overline{\\text{BHE}} = 0$ are used exclusively for odd addresses in the Odd Bank.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.18",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.18",
      "question": "The 8086 microprocessor contains an on-chip internal clock oscillator and only requires an external quartz crystal connected across two pins.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "The 8086 **does not have an internal clock generator circuit**. It requires an external clock generator IC (the Intel 8284A clock generator) to supply a single-phase clock with a 33% duty cycle connected to its `CLK` pin (Pin 19).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.19",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.19",
      "question": "The 8086 Parity Flag (`PF`) is set to logic 1 if the entire 16-bit arithmetic result contains an even number of 1-bits.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "In the 8086, the Parity Flag (`PF`) tests only the **lower 8 bits (least significant byte)** of the result! If the lower byte contains an even number of 1-bits, `PF` is set to 1; bits 8 through 15 are ignored. This is a common university examination trap.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.20",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.20",
      "question": "Pipelining in the 8086 is achieved because the Bus Interface Unit (BIU) can fetch instruction bytes from memory while the Execution Unit (EU) is decoding or executing previously fetched instructions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Pipelining is the overlap of instruction fetch and execution phases. The BIU and EU operate independently. While the EU executes instructions out of the 6-byte queue, the BIU utilizes idle bus cycles to prefetch subsequent instruction bytes from memory into the queue.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.21",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.21",
      "question": "During an 8086 Memory Read machine cycle, data placed on the bus by the memory is latched into the processor at the beginning of clock state $T_3$.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Data is latched into the CPU during clock state **$T_4$**, specifically at the trailing (rising) edge of the `RD#` control strobe. During $T_3$, memory access is still underway.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.22",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.22",
      "question": "Two different logical addresses specified as `2500H:1200H` and `2600H:0200H` point to the exact same physical memory location in the 8086 address space.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "- For `2500H:1200H`: $\\text{PA} = (2500\\text{H} \\times 10\\text{H}) + 1200\\text{H} = 25000\\text{H} + 1200\\text{H} = \\mathbf{26200H}$. \n- For `2600H:0200H`: $\\text{PA} = (2600\\text{H} \\times 10\\text{H}) + 0200\\text{H} = 26000\\text{H} + 0200\\text{H} = \\mathbf{26200H}$. \nBecause segments overlap every 16 bytes (paragraphs), different segment-offset pairs can map to identical physical addresses.",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.23",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.23",
      "question": "If an instruction modifies the Interrupt Flag (`IF`), this flag status is immediately updated and reflected on external pin 36 ($S_5$) during the next memory bus cycle.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Pin 36 multiplexes address line $A_{18}$ during $T_1$ with status line $S_5$ during $T_2-T_4$. Status bit $S_5$ directly reflects the condition of the internal Interrupt Enable Flag (`IF`).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.24",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.24",
      "question": "When an external hardware interrupt is recognized on the `INTR` pin, the 8086 pushes the Flag Register, `CS`, and `IP` onto the stack, and immediately reloads `CS` and `IP` from memory locations `00000H` through `00003H`.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Memory locations `00000H - 00003H` belong specifically to Interrupt Type 0 (Divide by Zero). For `INTR`, the external controller supplies an 8-bit vector type $N$. The vector pointer is loaded from address $4 \\times N$ ($4N, 4N+1$ for `IP`, and $4N+2, 4N+3$ for `CS`).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_tf_ch2_Q2.25",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q2.25",
      "question": "When the 8086 writes a byte to an odd memory address, `A0` is HIGH and `BHE#` is LOW, and data is transferred exclusively across bus lines `AD8 - AD15`.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Odd addresses reside in the Odd Bank (Bank 1), which is wired to data lines $D_8-D_{15}$. To select this bank, $\\overline{\\text{BHE}}$ is asserted LOW (0) and $A_0$ is HIGH (1).",
      "source": "Question_Bank_Chapter_2_Pins_Signals_Architecture.md"
    },
    {
      "id": "mp_master_ch3_Q3.1",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.1",
      "question": "In the standard two-byte machine language format of the 8086 instruction `MOV [BX + SI], CX`, what are the exact values of the direction bit ($d$) and the word/byte bit ($w$) in the first byte of the machine opcode?",
      "options": {
        "A": "$d = 0, w = 0$",
        "B": "$d = 0, w = 1$",
        "C": "$d = 1, w = 1$",
        "D": "$d = 1, w = 0$"
      },
      "answer": "B",
      "answerText": "$d = 0, w = 1$",
      "explanation": "In the 8086 instruction format byte: `Opcode (6 bits) | d | w`:\n- The $d$ bit specifies the direction of data transfer with respect to the register specified in the `reg` field of byte 2:\n - $d = 1$: The register in `reg` is the **destination** (memory/reg $\\rightarrow$ reg).\n - $d = 0$: The register in `reg` is the **source** (reg $\\rightarrow$ memory/reg). \n- Here, `CX` is a register and is the **source operand**. Therefore, the CPU encodes `CX` in the `reg` field and sets $d = 0$.\n- Because `CX` is a 16-bit register (word operation), the word bit $w = 1$. \nHence, $d = 0, w = 1$. Trapping option [C] is chosen by students who think $d=1$ always represents a write.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.2",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.2",
      "question": "Given the machine code byte sequence for an instruction where the `mod` field is `00` and the `r/m` field is `110`, what addressing mode is specified by the processor?",
      "options": {
        "A": "Register Indirect Addressing through Base Pointer (`[BP]`)",
        "B": "Direct Addressing with a 16-bit displacement (`[disp16]`)",
        "C": "Based Indexed Addressing (`[BP + DI]`)",
        "D": "Register Addressing with register `DH` or `SI`"
      },
      "answer": "B",
      "answerText": "Direct Addressing with a 16-bit displacement (`[disp16]`)",
      "explanation": "This is one of the most famous hardware encoding traps in 8086 architecture! \nNormally, $r/m = 110$ corresponds to the base pointer `[BP]`. However, when $mod = 00$ (which denotes \"memory mode, no displacement\"), an exception is hardwired into the 8086 decoder: $mod = 00, r/m = 110$ does **not** mean `[BP]`; instead, it specifies **Direct Addressing (`[disp16]`)**, where the next two bytes provide a 16-bit direct offset address! To specify `[BP]` with no extra displacement, the assembler must encode $mod = 01, r/m = 110$ with an explicit displacement of $00\\text{H}$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.3",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.3",
      "question": "Consider the 8086 instruction: `MOV AX, [BP + SI + 08H]`. Which segment register is used by default by the Bus Interface Unit to calculate the 20-bit physical memory address?",
      "options": {
        "A": "Data Segment (`DS`)",
        "B": "Code Segment (`CS`)",
        "C": "Stack Segment (`SS`)",
        "D": "Extra Segment (`ES`)"
      },
      "answer": "C",
      "answerText": "Stack Segment (`SS`)",
      "explanation": "In 8086 addressing modes:\n- Any Effective Address (EA) calculation that incorporates the **Base Pointer (`BP`)** uses the **Stack Segment (`SS`)** as its default segment register.\n- If `BX`, `SI`, or `DI` are used without `BP`, the default segment register is the **Data Segment (`DS`)**. \nSince `BP` is present in `[BP + SI + 08H]`, the default segment is strictly `SS`.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.4",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.4",
      "question": "An assembly programmer writes the following instruction sequence:\n```assembly\nMOV AL, 0FFH\nADD AL, 01H\n```\nWhat will be the contents of `AL` and the status of the Carry Flag (`CF`) and Zero Flag (`ZF`)?",
      "options": {
        "A": "`AL = 00H`, `CF = 0`, `ZF = 1`",
        "B": "`AL = 00H`, `CF = 1`, `ZF = 1`",
        "C": "`AL = 01H`, `CF = 1`, `ZF = 0`",
        "D": "`AL = 00H`, `CF = 1`, `ZF = 0`"
      },
      "answer": "B",
      "answerText": "`AL = 00H`, `CF = 1`, `ZF = 1`",
      "explanation": "$\\text{FFH} + 01\\text{H} = 1111 1111_2 + 0000 0001_2 = \\mathbf{1\\ 0000\\ 0000}_2$. \nThe 8-bit register `AL` retains the lower 8 bits, so `AL = 00H`. \nBecause the sum is zero, the Zero Flag is set: $\\mathbf{ZF = 1}$. \nBecause a carry was generated out of bit 7 into bit 8, the Carry Flag is set: $\\mathbf{CF = 1}$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.5",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.5",
      "question": "Now consider the same initial value, but modified using the `INC` instruction:\n```assembly\nMOV AL, 0FFH\nINC AL\n```\nWhat will be the contents of `AL` and the status of the Carry Flag (`CF`)?",
      "options": {
        "A": "`AL = 00H`, `CF = 1`",
        "B": "`AL = 00H`, `CF = 0` (or unchanged from prior state)",
        "C": "`AL = 01H`, `CF = 1`",
        "D": "`AL = 0FFH`, `CF = 0`"
      },
      "answer": "B",
      "answerText": "`AL = 00H`, `CF = 0` (or unchanged from prior state)",
      "explanation": "This is the quintessential university examination trap! \nThe `INC` and `DEC` instructions affect `OF`, `SF`, `ZF`, `AF`, and `PF`, but **THEY DO NOT AFFECT THE CARRY FLAG (`CF`)**! Intel deliberately designed `INC` and `DEC` this way so that loop counters could be incremented or decremented inside multi-byte addition/subtraction loops without destroying the carry chain maintained by `ADC` or `SBB`. Therefore, `AL = 00H`, but `CF` remains completely unaffected.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.6",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.6",
      "question": "Which of the following 8086 instructions is syntactically and architecturally **ILLEGAL** and will be rejected by an assembler?",
      "options": {
        "A": "`PUSH CS`",
        "B": "`POP CS`",
        "C": "`PUSH DS`",
        "D": "`POP ES`"
      },
      "answer": "B",
      "answerText": "`POP CS`",
      "explanation": "`POP CS` is strictly prohibited in the 8086 architecture. Popping an arbitrary value directly into the Code Segment register (`CS`) without simultaneously loading a synchronized Instruction Pointer (`IP`) would immediately cause the CPU to execute garbage code at an unpredictable memory location. To change `CS`, programmers must use inter-segment (FAR) `JMP`, `CALL`, or `RETF` instructions. Note that `PUSH CS` is completely legal.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.7",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.7",
      "question": "What is the primary difference between the instructions `SUB AX, BX` and `CMP AX, BX`?",
      "options": {
        "A": "`SUB` performs signed subtraction, while `CMP` performs unsigned subtraction.",
        "B": "`SUB` updates all arithmetic flags and modifies the destination register `AX`, whereas `CMP` updates all arithmetic flags identically to `SUB` but leaves the destination register `AX` completely unaltered.",
        "C": "`SUB` updates the Carry Flag, whereas `CMP` only updates the Zero Flag.",
        "D": "`CMP` performs 2's complement negation of `BX` before addition."
      },
      "answer": "B",
      "answerText": "`SUB` updates all arithmetic flags and modifies the destination register `AX`, whereas `CMP` updates all arithmetic flags identically to `SUB` but leaves the destination register `AX` completely unaltered.",
      "explanation": "Both `SUB` and `CMP` execute internal subtraction: $\\text{Destination} - \\text{Source}$. They update `CF, OF, SF, ZF, AF, PF` identically. The only difference is that `SUB` writes the difference back into the destination operand, while `CMP` discards the result, preserving the destination contents.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.8",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.8",
      "question": "Suppose register `AX` contains `0027H` and register `BL` contains `0005H`. An engineer executes:\n```assembly\nADD AL, BL\nDAA\n```\nWhat is the final value in `AL` after decimal adjustment?",
      "options": {
        "A": "`2CH`",
        "B": "`32H`",
        "C": "`22H`",
        "D": "`30H`"
      },
      "answer": "B",
      "answerText": "`32H`",
      "explanation": "Let us trace the BCD arithmetic:\n1. `ADD AL, BL`: $27\\text{H} + 05\\text{H} = \\mathbf{2CH}$. \n - The lower nibble is `CH` ($12_{10}$). \n2. `DAA` (Decimal Adjust after Addition) checks:\n - Is lower nibble $> 9$ or $AF = 1$? Yes, $\\text{CH} > 9$. \n - Therefore, `DAA` adds $06\\text{H}$ to `AL`: \n $$2\\text{CH} + 06\\text{H} = \\mathbf{32H}$$ \n - $AF$ is set to 1. \n - The upper nibble is now $3 \\le 9$ and $CF = 0$, so no further adjustment is needed. \n`32H` is the correct BCD representation of $27 + 5 = 32$!",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.9",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.9",
      "question": "A programmer wants to pack two unpacked BCD digits residing in `AH` and `AL` before performing an unsigned division. Which instruction must be executed **prior** to the `DIV` instruction?",
      "options": {
        "A": "`AAM`",
        "B": "`AAA`",
        "C": "`AAD`",
        "D": "`DAA`"
      },
      "answer": "C",
      "answerText": "`AAD`",
      "explanation": "`AAD` (ASCII Adjust before Division) is the only adjust instruction executed **before** an arithmetic operation rather than after. It converts two unpacked BCD digits in `AH:AL` into a single binary value in `AL`: \n$$\\text{AL} = (\\text{AH} \\times 10) + \\text{AL}; \\quad \\text{AH} = 00\\text{H}$$ \n`AAM` is executed *after* multiplication; `AAA` and `DAA` are executed *after* addition.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.10",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.10",
      "question": "If register `AX` contains `8FE4H` (a signed negative number), what will be the contents of register `DX` and `AX` after executing the instruction `CWD` (Convert Word to Double Word)?",
      "options": {
        "A": "`DX = 0000H`, `AX = 8FE4H`",
        "B": "`DX = FFFFH`, `AX = 8FE4H`",
        "C": "`DX = 8FE4H`, `AX = 0000H`",
        "D": "`DX = FFFFH`, `AX = 001CH`"
      },
      "answer": "B",
      "answerText": "`DX = FFFFH`, `AX = 8FE4H`",
      "explanation": "`CWD` sign-extends the 16-bit word in `AX` into the 32-bit register pair `DX:AX`:\n- It inspects the MSB of `AX` (bit 15).\n- In `8FE4H`, bit 15 is `1` (since $8_{16} = 1000_2$).\n- Therefore, `CWD` fills all 16 bits of `DX` with `1`s, making $\\mathbf{DX = FFFFH}$.\n- `AX` remains unchanged at $\\mathbf{8FE4H}$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.11",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.11",
      "question": "What is the effect of executing `SAR AX, 1` (Shift Arithmetic Right) when `AX = F054H`?",
      "options": {
        "A": "`AX = 782AH`, `CF = 0`",
        "B": "`AX = F82AH`, `CF = 0`",
        "C": "`AX = F82AH`, `CF = 1`",
        "D": "`AX = 782AH`, `CF = 1`"
      },
      "answer": "B",
      "answerText": "`AX = F82AH`, `CF = 0`",
      "explanation": "`SAR` performs an **arithmetic** right shift:\n- The bit shifted out of the LSB (bit 0) enters the Carry Flag (`CF`).\n - In `F054H`, bit 0 is `0` (since $4_{16} = 0100_2$). Thus, $\\mathbf{CF = 0}$.\n- The MSB (sign bit) **retains its original value** and is duplicated into bit 14.\n - `F054H` $= 1111\\ 0000\\ 0101\\ 0100_2$. \n - Shifting right arithmetically by 1: \n $$1111\\ 1000\\ 0010\\ 1010_2 = \\mathbf{F82AH}$$ \nOption [A] represents `SHR` (logical shift right), which incorrectly inserts a 0 into the MSB.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.12",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.12",
      "question": "Which of the following conditional jump instructions tests for an **unsigned** comparison where the destination operand was strictly greater than the source operand?",
      "options": {
        "A": "`JG` (Jump if Greater)",
        "B": "`JA` (Jump if Above)",
        "C": "`JGE` (Jump if Greater or Equal)",
        "D": "`JAE` (Jump if Above or Equal)"
      },
      "answer": "B",
      "answerText": "`JA` (Jump if Above)",
      "explanation": "In 8086 assembly nomenclature:\n- **Above / Below (`JA`, `JB`, `JAE`, `JBE`)** are strictly for **UNSIGNED** numbers. `JA` triggers when $CF = 0$ and $ZF = 0$.\n- **Greater / Less (`JG`, `JL`, `JGE`, `JLE`)** are strictly for **SIGNED** numbers, testing combinations of $SF$, $OF$, and $ZF$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.13",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.13",
      "question": "During the execution of string instructions with the `REP` prefix (such as `REP MOVSB`), which register functions as the automatic loop counter, and what happens to the Direction Flag (`DF`)?",
      "options": {
        "A": "`CX` is decremented by 1 after each byte moved; `DF` determines whether `SI` and `DI` increment or decrement.",
        "B": "`DX` is decremented by 1 after each byte moved; `DF` is automatically inverted.",
        "C": "`AX` holds the count; `DF` must be set to 1 for increment.",
        "D": "`BX` is incremented; `DF` is cleared after every transfer."
      },
      "answer": "A",
      "answerText": "`CX` is decremented by 1 after each byte moved; `DF` determines whether `SI` and `DI` increment or decrement.",
      "explanation": "`CX` acts as the hardware count register for all string repeat prefixes. After each element transfer, `CX` is decremented by 1 until it reaches 0. If $DF = 0$ (cleared via `CLD`), `SI` and `DI` increment; if $DF = 1$ (set via `STD`), `SI` and `DI` decrement.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.14",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.14",
      "question": "When the 8086 executes a Near `CALL` instruction (`CALL NEAR PTR SUBR`), how is the return address saved on the stack?",
      "options": {
        "A": "Both `CS` and `IP` are pushed onto the stack (4 bytes).",
        "B": "Only `IP` is pushed onto the stack; `SP` is decremented by 2.",
        "C": "Only `CS` is pushed onto the stack; `SP` is decremented by 2.",
        "D": "`IP` and the Flag register are pushed onto the stack."
      },
      "answer": "B",
      "answerText": "Only `IP` is pushed onto the stack; `SP` is decremented by 2.",
      "explanation": "A **Near CALL** is an intra-segment call (within the current code segment). Because the target procedure resides in the same code segment, `CS` does not change. Only the 16-bit offset of the next sequential instruction (`IP`) is pushed onto the stack, decrementing `SP` by 2. A **Far CALL** (inter-segment) pushes both `CS` and `IP`.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.15",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.15",
      "question": "What is the effect of executing the instruction `TEST AL, 01H`?",
      "options": {
        "A": "It performs bitwise AND between `AL` and `01H`, updates `ZF`, and clears bit 0 of `AL`.",
        "B": "It performs bitwise AND between `AL` and `01H`, updates `ZF`, `SF`, `PF`, clears `CF` and `OF`, and leaves `AL` unchanged.",
        "C": "It compares `AL` with `01H` by subtraction and sets `CF` if `AL` is zero.",
        "D": "It tests if `AL` is negative and jumps to an error routine."
      },
      "answer": "B",
      "answerText": "It performs bitwise AND between `AL` and `01H`, updates `ZF`, `SF`, `PF`, clears `CF` and `OF`, and leaves `AL` unchanged.",
      "explanation": "`TEST` performs a non-destructive bitwise `AND`. It sets $CF = 0, OF = 0$, updates $SF, ZF, PF$ based on the result, and leaves the destination register (`AL`) completely unmodified. It is primarily used to inspect individual bits (here, bit 0 to test for odd/even).",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.16",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.16",
      "question": "What happens to the Stack Pointer (`SP`) when the instruction `RET 0004H` is executed at the conclusion of a near subroutine?",
      "options": {
        "A": "`IP` is popped from the stack, and then `SP` is decremented by 4.",
        "B": "`IP` is popped from the stack, and then `SP` is incremented by 4 (total increment of `SP` = 6).",
        "C": "4 words are popped into general-purpose registers before returning.",
        "D": "`SP` is set to `0004H`."
      },
      "answer": "B",
      "answerText": "`IP` is popped from the stack, and then `SP` is incremented by 4 (total increment of `SP` = 6).",
      "explanation": "`RET n` is used to discard parameters passed to a subroutine via the stack. In a near return:\n1. `IP` is popped from stack: $\\text{SP} = \\text{SP} + 2$.\n2. The immediate value $n$ is added to the stack pointer: $\\text{SP} = \\text{SP} + n = \\text{SP} + 4$. \nNet change in `SP` is $+6$. This cleanly removes 4 bytes (2 words) of parameters without extra instructions.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.17",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.17",
      "question": "The instruction `XLAT` (Translate) computes the physical address of a lookup table entry using which register combination?",
      "options": {
        "A": "`DS:[SI + AL]`",
        "B": "`DS:[BX + AL]`",
        "C": "`ES:[DI + AL]`",
        "D": "`SS:[BP + AL]`"
      },
      "answer": "B",
      "answerText": "`DS:[BX + AL]`",
      "explanation": "`XLAT` replaces the byte in `AL` with a byte from a 256-byte lookup table in memory. The base address of the table must be loaded into `BX` (in the Data Segment `DS`), and `AL` provides the unsigned 8-bit index ($0-255$). The CPU fetches `DS:[BX + AL]` and writes it into `AL`.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.18",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.18",
      "question": "If `BX = 1000H` and `DS = 2000H`, what is the difference between the instructions `LEA AX, [BX + 50H]` and `MOV AX, [BX + 50H]`?",
      "options": {
        "A": "`LEA` loads `1050H` into `AX` without accessing memory data, whereas `MOV` accesses physical memory at `21050H` and loads the 16-bit data stored there into `AX`.",
        "B": "`LEA` accesses memory at `21050H`, while `MOV` loads the offset.",
        "C": "`LEA` affects the Zero Flag, while `MOV` does not.",
        "D": "There is no operational difference; both instructions produce identical results."
      },
      "answer": "A",
      "answerText": "`LEA` loads `1050H` into `AX` without accessing memory data, whereas `MOV` accesses physical memory at `21050H` and loads the 16-bit data stored there into `AX`.",
      "explanation": "`LEA` (Load Effective Address) calculates the offset expression ($\\text{EA} = \\text{BX} + 50\\text{H} = 1050\\text{H}$) and transfers the **address value itself** into the destination register; it performs **no memory read cycle**. `MOV AX, [BX + 50H]` initiates a bus cycle to read the **data word stored at physical address** $20000\\text{H} + 1050\\text{H} = 21050\\text{H}$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.19",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.19",
      "question": "Which of the following shift/rotate instructions rotates the bits of the operand through the Carry Flag, treating `CF` as an extra 9th bit (for byte) or 17th bit (for word)?",
      "options": {
        "A": "`ROL`",
        "B": "`ROR`",
        "C": "`RCL`",
        "D": "`SHL`"
      },
      "answer": "C",
      "answerText": "`RCL`",
      "explanation": "- `ROL` and `ROR` rotate bits circularly within the register; the bit leaving one end simultaneously enters `CF` and the opposite end. \n- `RCL` (Rotate through Carry Left) and `RCR` (Rotate through Carry Right) treat `CF` as an integral part of the data ring: the outgoing bit enters `CF`, and the previous contents of `CF` enter the opposite end of the register.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_ch3_Q3.20",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Theory MCQ",
      "type": "mcq",
      "qnum": "Q3.20",
      "question": "What is the operation of the instruction `LOOP LABEL` in the 8086?",
      "options": {
        "A": "It decrements `CX` by 1; if $CX \\neq 0$, it branches to `LABEL`; it modifies `ZF`.",
        "B": "It decrements `CX` by 1; if $CX \\neq 0$, it branches to `LABEL`; it **does not affect any flags**.",
        "C": "It increments `CX` by 1; if $CX = 0$, it branches to `LABEL`.",
        "D": "It decrements `AX` by 1; if $AX \\neq 0$, it branches to `LABEL`."
      },
      "answer": "B",
      "answerText": "It decrements `CX` by 1; if $CX \\neq 0$, it branches to `LABEL`; it does not affect any flags.",
      "explanation": "`LOOP` automatically decrements `CX` by 1 and branches if $CX \\neq 0$. Crucially, **`LOOP` DOES NOT MODIFY ANY FLAGS** (unlike `DEC CX`, which updates `ZF`). This ensures conditional jump flags evaluated inside the loop body are not corrupted by the loop termination mechanism.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.21",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.21",
      "question": "The instruction `MOV [1200H], [3400H]` is a valid 8086 assembly language instruction that copies a word directly from one memory location to another.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Memory-to-memory transfers are **strictly prohibited** in the 8086 instruction set. To transfer data between two memory locations, data must first be moved into an intermediate internal CPU register (e.g., `MOV AX, [3400H]` followed by `MOV [1200H], AX`), requiring two instructions.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.22",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.22",
      "question": "The instruction `MOV DS, 2000H` is a legal instruction used to initialize the Data Segment register with base address `2000H`.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Moving an immediate constant directly into any segment register is syntactically **illegal** in 8086. Segment registers can only be loaded from a general-purpose register or memory (e.g., `MOV AX, 2000H` followed by `MOV DS, AX`).",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.23",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.23",
      "question": "The instruction `XCHG AX, BX` swaps the 16-bit contents of `AX` and `BX` without altering any flags in the Flag register.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "The `XCHG` instruction belongs to the Data Transfer group. Like `MOV`, `XCHG` transfers binary data without modifying any conditional or control flags.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.24",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.24",
      "question": "In an 8086 assembly program, the instruction `SHL AX, 1` and `SAL AX, 1` generate completely identical machine language opcodes and perform identical bit shifts.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "In binary arithmetic, shifting left logically (filling LSB with 0) is mathematically identical to shifting left arithmetically (multiplying by 2). The assembler maps both `SHL` and `SAL` to the exact same opcode (`D1 /4`).",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.25",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.25",
      "question": "The instruction `NOT AL` performs a 1's complement bitwise inversion on `AL` and updates the Zero Flag (`ZF`) and Sign Flag (`SF`) accordingly.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "The `NOT` instruction **DOES NOT AFFECT ANY FLAGS**! It simply inverts all bits. If a programmer wants to invert bits and update flags, they must use `XOR AL, 0FFH` instead. This is a classic paper-setter trap.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.26",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.26",
      "question": "When executing `LDS SI, [2000H]`, the 8086 loads a 16-bit offset into `SI` from memory addresses `2000H:2001H` and loads a 16-bit segment base into `DS` from memory addresses `2002H:2003H`.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "`LDS` (Load Pointer using DS) reads a 32-bit far pointer (4 consecutive bytes) from memory: the lower word is placed into the specified register (`SI`), and the upper word is placed into `DS`.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.27",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.27",
      "question": "Executing `LOOPZ` decrements register `CX` by 1; if $CX \\neq 0$ and $ZF = 0$, the processor jumps to the specified target address.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "`LOOPZ` (Loop if Zero / Equal) branches only if $CX \\neq 0$ **AND $ZF = 1$**. If $ZF = 0$, the loop terminates even if $CX \\neq 0$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.28",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.28",
      "question": "Executing `AAM` (ASCII Adjust after Multiply) divides the binary value in `AL` by 10, placing the quotient in `AH` and the remainder in `AL`.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "`AAM` unpacks a binary product ($< 100$) in `AL` into two unpacked BCD digits by dividing by $10_{10}$: $\\text{AH} = \\text{AL} / 10$ and $\\text{AL} = \\text{AL} \\pmod{10}$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.29",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.29",
      "question": "In an 8086 system, executing `PUSH AX` increments the Stack Pointer (`SP`) by 2.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "The 8086 stack grows downwards towards lower addresses. `PUSH` decrements `SP` by 2 ($\\text{SP} \\leftarrow \\text{SP} - 2$); `POP` increments `SP` by 2 ($\\text{SP} \\leftarrow \\text{SP} + 2$).",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.30",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.30",
      "question": "The instruction `CMP BL, 80H` affects the Sign Flag (`SF`) and Overflow Flag (`OF`), but does not modify the contents of register `BL`.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "`CMP` performs internal subtraction ($\\text{BL} - 80\\text{H}$) to update all status flags (`CF, OF, SF, ZF, AF, PF`), but the result is discarded and `BL` remains unchanged.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.31",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.31",
      "question": "The instruction `JMP DWORD PTR [BX]` performs an intra-segment near indirect jump within the current code segment.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "The keyword `DWORD PTR` indicates a 32-bit pointer (4 bytes: new `IP` and new `CS`). Therefore, it executes an **inter-segment (FAR) indirect jump**, altering both `CS` and `IP`. A near indirect jump uses `WORD PTR`.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_master_tf_ch3_Q3.32",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "True / False Concept",
      "type": "true_false",
      "qnum": "Q3.32",
      "question": "After executing `SUB AL, AL`, the Zero Flag (`ZF`) is set to 1, and the Carry Flag (`CF`) is cleared to 0.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Subtracting any register from itself yields $00\\text{H}$. Therefore, $ZF = 1$, and since no borrow is required, $CF = 0$.",
      "source": "Question_Bank_Chapter_3_Instruction_Set.md"
    },
    {
      "id": "mp_num_ch1_Q1.1",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.1",
      "question": "An embedded microprocessor architecture has 22 physical address lines and is word-addressable (addressability = 16 bits per unique address location). What is the total physical memory capacity addressable by this CPU?",
      "options": {
        "A": "4 Megabytes",
        "B": "8 Megabytes",
        "C": "16 Megabytes",
        "D": "2 Megabytes"
      },
      "answer": "B",
      "answerText": "8 Megabytes",
      "explanation": "Total Physical Memory Capacity is governed by: \n$$\\\\text{Memory Capacity} = 2^n \\\\times \\\\text{Addressability}$$ \nGiven: \n- Number of address lines $n = 22 \\\\implies 2^{22} = 4,194,304$ unique memory locations. \n- Addressability = 16 bits = 2 bytes per location. \n$$\\\\text{Capacity} = 2^{22} \\\\times 2\\\\text{ bytes} = 2^{23}\\\\text{ bytes} = 8\\\\text{ Megabytes (MB)}$$ \n*(Trap Analysis: Students assuming byte-addressability choose 4 MB [A].)*",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.2",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.2",
      "question": "An Intel 8086 microprocessor is driven by a system clock generator operating at a frequency of $5\\\\text{ MHz}$. What is the exact time duration of a single basic $T$-state, and what is the total execution time of a standard four-clock ($4\\\\text{ }T$-states) machine cycle without wait states?",
      "options": {
        "A": "$T = 125\\\\text{ ns}$; Cycle Time = $500\\\\text{ ns}$",
        "B": "$T = 200\\\\text{ ns}$; Cycle Time = $800\\\\text{ ns}$",
        "C": "$T = 250\\\\text{ ns}$; Cycle Time = $1000\\\\text{ ns}$",
        "D": "$T = 100\\\\text{ ns}$; Cycle Time = $400\\\\text{ ns}$"
      },
      "answer": "B",
      "answerText": "$T = 200\\\\text{ ns}$; Cycle Time = $800\\\\text{ ns}$",
      "explanation": "Clock Period ($1\\\\text{ }T$-state): \n$$T = \\\\frac{1}{f_{\\\\text{CLK}}} = \\\\frac{1}{5 \\\\times 10^6\\\\text{ Hz}} = 0.2 \\\\times 10^{-6}\\\\text{ s} = 200\\\\text{ ns}$$ \nStandard bus cycle comprises $4\\\\text{ }T$-states ($T_1, T_2, T_3, T_4$): \n$$\\\\text{Bus Cycle Duration} = 4 \\\\times T = 4 \\\\times 200\\\\text{ ns} = \\\\mathbf{800\\\\text{ ns}}$$",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.3",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.3",
      "question": "A circuit designer connects two TTL bus drivers to a common line without proper tristate decoding. During a fault condition, Driver A outputs Logic HIGH ($V_{OH} = 3.6\\\\text{ V}$ with internal source resistance $R_{OH} = 60\\\\,\\\\Omega$), while Driver B simultaneously outputs Logic LOW ($V_{OL} = 0.4\\\\text{ V}$ with internal sink resistance $R_{OL} = 20\\\\,\\\\Omega$). What is the short-circuit contention current flowing between the two drivers on this single bus line?",
      "options": {
        "A": "$20.0\\\\text{ mA}$",
        "B": "$40.0\\\\text{ mA}$",
        "C": "$45.0\\\\text{ mA}$",
        "D": "$53.3\\\\text{ mA}$"
      },
      "answer": "B",
      "answerText": "$40.0\\\\text{ mA}$",
      "explanation": "The net potential difference driving current through the fault path is: \n$$\\\\Delta V = V_{OH} - V_{OL} = 3.6\\\\text{ V} - 0.4\\\\text{ V} = 3.2\\\\text{ V}$$ \nTotal series resistance in the contention path: \n$$R_{\\\\text{path}} = R_{OH} + R_{OL} = 60\\\\,\\\\Omega + 20\\\\,\\\\Omega = 80\\\\,\\\\Omega$$ \nContention current per line: \n$$I_{\\\\text{contention}} = \\\\frac{\\\\Delta V}{R_{\\\\text{path}}} = \\\\frac{3.2\\\\text{ V}}{80\\\\,\\\\Omega} = 0.040\\\\text{ A} = \\\\mathbf{40.0\\\\text{ mA}}$$",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.4",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.4",
      "question": "In an 8086 memory decoding system, a 3-to-8 line active-low decoder (74LS138) has its select inputs $C, B, A$ connected to address lines $A_{19}, A_{18}, A_{17}$ respectively. What is the physical storage span allocated to each active-low output pin ($\\\\overline{Y_0}$ to $\\\\overline{Y_7}$)?",
      "options": {
        "A": "$64\\\\text{ Kilobytes}$",
        "B": "$128\\\\text{ Kilobytes}$",
        "C": "$256\\\\text{ Kilobytes}$",
        "D": "$512\\\\text{ Kilobytes}$"
      },
      "answer": "B",
      "answerText": "$128\\\\text{ Kilobytes}$",
      "explanation": "The 8086 has a 20-bit address bus ($A_{19}-A_0$). \nAddress lines $A_{19}, A_{18}, A_{17}$ (3 lines) are decoded, leaving $20 - 3 = 17$ un-decoded lower address lines ($A_{16}-A_0$). \nThe address capacity assigned to each decoder output is: \n$$\\\\text{Block Size} = 2^{17}\\\\text{ bytes} = 131,072\\\\text{ bytes} = \\\\mathbf{128\\\\text{ Kilobytes (KB)}}$$",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.5",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.5",
      "question": "A $64\\\\text{ KB}$ SRAM block is mapped into the 8086 physical memory space starting at hexadecimal address `70000H`. What is the exact ending physical address of this memory block?",
      "options": {
        "A": "`7FFFFH`",
        "B": "`80000H`",
        "C": "`7EFFFH`",
        "D": "`8FFFFH`"
      },
      "answer": "A",
      "answerText": "`7FFFFH`",
      "explanation": "Block capacity $= 64\\\\text{ KB} = 65,536\\\\text{ bytes} = 10000\\\\text{H}$ bytes. \n$$\\\\text{Ending Address} = \\\\text{Starting Address} + \\\\text{Block Size} - 1$$ \n$$\\\\text{Ending Address} = 70000\\\\text{H} + 10000\\\\text{H} - 1\\\\text{H} = 80000\\\\text{H} - 1\\\\text{H} = \\\\mathbf{7FFFFH}$$",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.6",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.6",
      "question": "A static EPROM chip is specified with a capacity of $32\\\\text{K} \\\\times 8$ bits. How many physical address pins ($A_0, A_1, \\\\dots$) must this chip possess on its package to allow independent access to every byte location?",
      "options": {
        "A": "13 pins",
        "B": "14 pins",
        "C": "15 pins",
        "D": "16 pins"
      },
      "answer": "C",
      "answerText": "15 pins",
      "explanation": "Number of byte locations $= 32\\\\text{K} = 32 \\\\times 1024 = 32,768\\\\text{ locations}$. \nExpressing in powers of 2: \n$$32,768 = 2^{15}$$ \nHence, exactly **15 address lines** ($A_0 \\\\text{ to } A_{14}$) are required.",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.7",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.7",
      "question": "How many memory chips of capacity $64\\\\text{K} \\\\times 8$ are mathematically required to implement a total primary memory space of $256\\\\text{ Kilobytes}$ in an 8086 microcomputer?",
      "options": {
        "A": "2 chips",
        "B": "4 chips",
        "C": "8 chips",
        "D": "16 chips"
      },
      "answer": "B",
      "answerText": "4 chips",
      "explanation": "$$\\\\text{Total Required Storage} = 256\\\\text{ KB} = 256 \\\\times 1024\\\\text{ bytes}$$ \n$$\\\\text{Storage per Chip} = 64\\\\text{ KB} = 64 \\\\times 1024\\\\text{ bytes}$$ \n$$\\\\text{Number of Chips} = \\\\frac{256\\\\text{ KB}}{64\\\\text{ KB}} = \\\\mathbf{4\\\\text{ chips}}$$ \n*(In an 8086 system, these are configured as 2 chips in the Even Bank and 2 chips in the Odd Bank).*",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.8",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.8",
      "question": "An 8086 CPU operates at an internal clock frequency of $8\\\\text{ MHz}$. If a slow peripheral pulls the `READY` line low such that the processor inserts two Wait States ($2\\\\text{ }T_w$), what is the total duration of this memory bus cycle?",
      "options": {
        "A": "$500\\\\text{ ns}$",
        "B": "$625\\\\text{ ns}$",
        "C": "$750\\\\text{ ns}$",
        "D": "$1000\\\\text{ ns}$"
      },
      "answer": "C",
      "answerText": "$750\\\\text{ ns}$",
      "explanation": "$$T = \\\\frac{1}{8 \\\\times 10^6\\\\text{ Hz}} = 125\\\\text{ ns}$$ \nTotal clock cycles for the extended bus cycle: \n$$\\\\text{Cycles} = 4\\\\text{ basic states } (T_1, T_2, T_3, T_4) + 2\\\\text{ wait states } (T_w) = 6\\\\text{ }T\\\\text{-states}$$ \n$$\\\\text{Total Duration} = 6 \\\\times 125\\\\text{ ns} = \\\\mathbf{750\\\\text{ ns}}$$",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.9",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.9",
      "question": "In an 8086 system, address lines $A_{19}, A_{18}, A_{17}, A_{16}, A_{15}, A_{14}$ are wired to a decoder such that the chip is enabled only when $A_{19}-A_{14} = 110010_2$. What is the hexadecimal physical address range allocated to this device?",
      "options": {
        "A": "`C8000H` to `C9FFFH`",
        "B": "`C8000H` to `CBFFFH`",
        "C": "`C0000H` to `C3FFFH`",
        "D": "`D8000H` to `DBFFFH`"
      },
      "answer": "B",
      "answerText": "`C8000H` to `CBFFFH`",
      "explanation": "Fixed upper bits ($A_{19}-A_{14}$): \n$A_{19} A_{18} A_{17} A_{16} = 1100_2 = \\\\text{C}_{16}$ \n$A_{15} A_{14} = 10_2$. \nThe lower 14 bits ($A_{13}-A_0$) vary from all 0s to all 1s: \n- **Starting Address:** \n Binary: $1100\\\\ 1000\\\\ 0000\\\\ 0000\\\\ 0000_2 = \\\\mathbf{C8000H}$ \n- **Ending Address:** \n Binary: $1100\\\\ 1011\\\\ 1111\\\\ 1111\\\\ 1111_2 = \\\\mathbf{CBFFFH}$ \nTotal span $= 2^{14}\\\\text{ bytes} = 16\\\\text{ KB}$.",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch1_Q1.10",
      "subjectId": "mp",
      "chapterId": "mp_ch1",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q1.10",
      "question": "How many 8-bit octal D-type transparent latches (74LS373) are required to fully demultiplex the 8086 address lines $A_{19}-A_0$ together with the active-low Bus High Enable signal ($\\\\overline{\\\\text{BHE}}$)?",
      "options": {
        "A": "2 latches",
        "B": "3 latches",
        "C": "4 latches",
        "D": "5 latches"
      },
      "answer": "B",
      "answerText": "3 latches",
      "explanation": "Total signals requiring latching during $T_1$: \n$$\\\\text{Signals} = 20\\\\text{ address lines } (A_{19}-A_0) + 1\\\\text{ bank enable } (\\\\overline{\\\\text{BHE}}) = 21\\\\text{ signals}$$ \nEach 74LS373 provides 8 latching flip-flops. \n$$\\\\text{Latches Needed} = \\\\left\\\\lceil \\\\frac{21}{8} \\\\right\\\\rceil = \\\\left\\\\lceil 2.625 \\\\right\\\\rceil = \\\\mathbf{3\\\\text{ octal latches}}$$ \n*(Capacity provided $= 3 \\\\times 8 = 24$ bits, leaving 3 spare inputs).*",
      "source": "Numerical_Question_Bank_Chapter_1.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.1",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.1",
      "question": "If the Code Segment register (`CS`) contains `348AH` and the Instruction Pointer (`IP`) contains `12F0H`, what is the exact 20-bit physical address of the memory location from which the BIU fetches the next instruction byte?",
      "options": {
        "A": "`35B90H`",
        "B": "`349CFH`",
        "C": "`477A0H`",
        "D": "`35B80H`"
      },
      "answer": "A",
      "answerText": "`35B90H`",
      "explanation": "$$\\\\text{Physical Address} = (\\\\text{CS} \\\\times 10\\\\text{H}) + \\\\text{IP}$$ \n$$\\\\text{Segment Base} = 348\\\\text{AH} \\\\times 10\\\\text{H} = 348\\\\text{A}0\\\\text{H}$$ \nAdding the 16-bit offset `12F0H`: \n$$\\\\begin{array}{r@{\\\\quad}l}\n 348\\\\text{A}0\\\\text{H} \\\\\\\\\n+ 012\\\\text{F}0\\\\text{H} \\\\\\\\\n\\\\hline\n 35\\\\text{B}90\\\\text{H}\n\\\\end{array}$$ \n*(Hex Addition check: $0+0=0$; $\\\\text{A}+\\\\text{F} = 10+15 = 25 = 16+9 \\\\implies 9$, carry $1$; $8+2+1 = 11 = \\\\text{B}$; $4+1 = 5$; $3+0 = 3 \\\\implies \\\\mathbf{35B90H}$.)*",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.2",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.2",
      "question": "An 8086 CPU executes the instruction `MOV AX, [8005H]` to read a 16-bit word from memory. How many bus machine cycles will the Bus Interface Unit execute, and what will be the state of signals $\\\\overline{\\\\text{BHE}}$ and $A_0$ during the first bus cycle?",
      "options": {
        "A": "1 bus cycle; $\\\\overline{\\\\text{BHE}} = 0, A_0 = 0$",
        "B": "2 bus cycles; First cycle: $\\\\overline{\\\\text{BHE}} = 0, A_0 = 1$",
        "C": "2 bus cycles; First cycle: $\\\\overline{\\\\text{BHE}} = 1, A_0 = 0$",
        "D": "1 bus cycle; $\\\\overline{\\\\text{BHE}} = 0, A_0 = 1$"
      },
      "answer": "B",
      "answerText": "2 bus cycles; First cycle: $\\\\overline{\\\\text{BHE}} = 0, A_0 = 1$",
      "explanation": "Address `8005H` is an **odd address** ($A_0 = 1$). A 16-bit word at an odd address spans two physical memory locations (`8005H` and `8006H`), requiring **two separate bus machine cycles**:\n1. **Cycle 1:** Fetches lower byte from odd address `8005H` (Odd Bank). \n Signals: $\\\\mathbf{\\\\overline{\\\\text{BHE}} = 0, A_0 = 1}$, using upper data bus lines $D_{15}-D_8$.\n2. **Cycle 2:** Fetches upper byte from next even address `8006H` (Even Bank). \n Signals: $\\\\overline{\\\\text{BHE}} = 1, A_0 = 0$, using lower data bus lines $D_7-D_0$.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.3",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.3",
      "question": "An 8086 CPU executes `MOV AX, [8004H]` to read a 16-bit word from memory. How many bus machine cycles are executed, and what are the bank control signals?",
      "options": {
        "A": "1 bus cycle; $\\\\overline{\\\\text{BHE}} = 0, A_0 = 0$",
        "B": "2 bus cycles; $\\\\overline{\\\\text{BHE}} = 0, A_0 = 1$",
        "C": "1 bus cycle; $\\\\overline{\\\\text{BHE}} = 1, A_0 = 0$",
        "D": "2 bus cycles; $\\\\overline{\\\\text{BHE}} = 1, A_0 = 1$"
      },
      "answer": "A",
      "answerText": "1 bus cycle; $\\\\overline{\\\\text{BHE}} = 0, A_0 = 0$",
      "explanation": "`8004H` is an **even address** ($A_0 = 0$). An aligned 16-bit word is fetched in a **single bus cycle** (4 $T$-states) because both banks are enabled concurrently:\n- Even Bank enabled by $A_0 = 0$ (lower byte via $D_7-D_0$).\n- Odd Bank enabled by $\\\\overline{\\\\text{BHE}} = 0$ (upper byte via $D_{15}-D_8$).",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.4",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.4",
      "question": "The Stack Segment register (`SS`) holds `9000H` and the Stack Pointer (`SP`) holds `4000H`. When the instruction `PUSH BX` is executed, what is the resulting value of `SP` and the exact physical memory address where the low byte of `BX` (`BL`) is stored?",
      "options": {
        "A": "`SP = 4002H`; Physical Address = `94002H`",
        "B": "`SP = 3FFEH`; Physical Address = `93FFEH`",
        "C": "`SP = 3FFEH`; Physical Address = `93FFFH`",
        "D": "`SP = 3FFFH`; Physical Address = `93FFEH`"
      },
      "answer": "B",
      "answerText": "`SP = 3FFEH`; Physical Address = `93FFEH`",
      "explanation": "In 8086, the stack decrements on PUSH:\n1. `SP` is decremented by 2: $\\\\text{SP} = 4000\\\\text{H} - 2 = \\\\mathbf{3FFEH}$.\n2. In Little-Endian storage:\n - High byte (`BH`) is written to higher address: $\\\\text{PA} = 90000\\\\text{H} + 3\\\\text{FFFH} = 93\\\\text{FFFH}$.\n - Low byte (`BL`) is written to lower address: $\\\\text{PA} = 90000\\\\text{H} + 3\\\\text{FFEH} = \\\\mathbf{93FFEH}$.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.5",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.5",
      "question": "Which of the following logical address pairs (`Segment:Offset`) represents a different physical memory location than the others?",
      "options": {
        "A": "`2000H:1500H`",
        "B": "`2100H:0500H`",
        "C": "`2150H:0000H`",
        "D": "`2050H:0100H`"
      },
      "answer": "D",
      "answerText": "`2050H:0100H`",
      "explanation": "Compute physical address for each option:\n- [A] $20000\\\\text{H} + 1500\\\\text{H} = \\\\mathbf{21500H}$\n- [B] $21000\\\\text{H} + 0500\\\\text{H} = \\\\mathbf{21500H}$\n- [C] $21500\\\\text{H} + 0000\\\\text{H} = \\\\mathbf{21500H}$\n- [D] $20500\\\\text{H} + 0100\\\\text{H} = \\\\mathbf{20600H}$ \nOption [D] generates `20600H`, which is different from `21500H`.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.6",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.6",
      "question": "An external device initiates an interrupt corresponding to Interrupt Type `14H` ($20_{10}$). What is the starting hexadecimal physical address in the Interrupt Vector Table (IVT) where the 4-byte pointer for this ISR is stored?",
      "options": {
        "A": "`00014H`",
        "B": "`00050H`",
        "C": "`00028H`",
        "D": "`000A0H`"
      },
      "answer": "B",
      "answerText": "`00050H`",
      "explanation": "The base address of any interrupt vector in the IVT is given by: \n$$\\\\text{IVT Address} = \\\\text{Type Number } N \\\\times 4$$ \nGiven Type $N = 14\\\\text{H} = 20_{10}$: \n$$\\\\text{IVT Address} = 20 \\\\times 4 = 80_{10} = \\\\mathbf{00050H}$$ \nThe 4-byte vector spans addresses **`00050H` to `00053H`**.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.7",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.7",
      "question": "An 8086 system operates with a $10\\\\text{ MHz}$ clock. An external peripheral asserts `READY` low such that one Wait State ($1\\\\text{ }T_w$) is inserted. What is the total duration of the memory read cycle?",
      "options": {
        "A": "$400\\\\text{ ns}$",
        "B": "$500\\\\text{ ns}$",
        "C": "$600\\\\text{ ns}$",
        "D": "$700\\\\text{ ns}$"
      },
      "answer": "B",
      "answerText": "$500\\\\text{ ns}$",
      "explanation": "$$T = \\\\frac{1}{10 \\\\times 10^6\\\\text{ Hz}} = 100\\\\text{ ns}$$ \n$$\\\\text{Total Clock States} = 4\\\\text{ basic } (T_1, T_2, T_3, T_4) + 1\\\\text{ wait } (T_w) = 5\\\\text{ }T\\\\text{-states}$$ \n$$\\\\text{Cycle Time} = 5 \\\\times 100\\\\text{ ns} = \\\\mathbf{500\\\\text{ ns}}$$",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.8",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.8",
      "question": "A program reads five consecutive 16-bit words from memory starting at physical address `40001H`. How many total bus machine cycles will the 8086 BIU execute across the external bus to complete these five reads?",
      "options": {
        "A": "5 bus cycles",
        "B": "6 bus cycles",
        "C": "10 bus cycles",
        "D": "8 bus cycles"
      },
      "answer": "C",
      "answerText": "10 bus cycles",
      "explanation": "Let us inspect the starting address of each of the 5 consecutive words:\n- Word 1 starts at `40001H` (**Odd** address) $\\\\implies$ **2 bus cycles** (spans `40001H-40002H`)\n- Word 2 starts at `40003H` (**Odd** address) $\\\\implies$ **2 bus cycles** (spans `40003H-40004H`)\n- Word 3 starts at `40005H` (**Odd** address) $\\\\implies$ **2 bus cycles** (spans `40005H-40006H`)\n- Word 4 starts at `40007H` (**Odd** address) $\\\\implies$ **2 bus cycles** (spans `40007H-40008H`)\n- Word 5 starts at `40009H` (**Odd** address) $\\\\implies$ **2 bus cycles** (spans `40009H-4000AH`) \nEvery single word starts on an odd byte boundary! \n$$\\\\text{Total Bus Cycles} = 5 \\\\times 2 = \\\\mathbf{10\\\\text{ bus machine cycles}}$$ \n*(If words had started at `40000H`, only 5 cycles would be needed! This illustrates the 100% bus penalty of unaligned arrays).*",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.9",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.9",
      "question": "During the 8086 interrupt acknowledge sequence for a maskable hardware interrupt (`INTR`), how many total clock states ($T$-states) are consumed by the two `INTA#` bus cycles, assuming no wait states are inserted?",
      "options": {
        "A": "$4\\\\text{ }T$-states",
        "B": "$6\\\\text{ }T$-states",
        "C": "$8\\\\text{ }T$-states",
        "D": "$12\\\\text{ }T$-states"
      },
      "answer": "C",
      "answerText": "$8\\\\text{ }T$-states",
      "explanation": "The 8086 generates **two distinct interrupt acknowledge bus machine cycles** (Pulse 1 and Pulse 2). \nEach standard bus cycle consists of $4\\\\text{ }T$-states ($T_1, T_2, T_3, T_4$). \n$$\\\\text{Total Clock Cycles} = 2 \\\\times 4\\\\text{ }T\\\\text{-states} = \\\\mathbf{8\\\\text{ }T\\\\text{-states}}$$",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.10",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.10",
      "question": "If `DS = F000H` and an instruction specifies an effective address offset of `FFFFH`, what is the 20-bit physical address accessed by the processor, and does it cause an address wraparound?",
      "options": {
        "A": "`FFFFFH`; No wraparound",
        "B": "`0FFFFH`; Wraparound occurs",
        "C": "`10000H`; Wraparound occurs",
        "D": "`F000FH`; No wraparound"
      },
      "answer": "A",
      "answerText": "`FFFFFH`; No wraparound",
      "explanation": "$$\\\\text{Segment Base} = \\\\text{F000H} \\\\times 10\\\\text{H} = \\\\text{F0000H}$$ \n$$\\\\text{Physical Address} = \\\\text{F0000H} + \\\\text{FFFFH} = \\\\mathbf{FFFFFH}$$ \n`FFFFFH` is the exact terminal byte of the 8086 $1\\\\text{ MB}$ physical address space. No wraparound occurs because the sum does not exceed $2^{20}-1$.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.11",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.11",
      "question": "A subroutine execution begins with `SP = 2000H`. During its execution, the subroutine executes the following instructions in sequence:\n```assembly\nPUSH AX\nPUSH BX\nPUSH CX\nPOP DX\n```\nWhat is the exact hexadecimal value of `SP` after executing this sequence?",
      "options": {
        "A": "`1FF8H`",
        "B": "`1FFCH`",
        "C": "`2002H`",
        "D": "`1FFAH`"
      },
      "answer": "B",
      "answerText": "`1FFCH`",
      "explanation": "- Initial: `SP = 2000H`\n- `PUSH AX`: $\\\\text{SP} = 2000\\\\text{H} - 2 = 1\\\\text{FFEH}$\n- `PUSH BX`: $\\\\text{SP} = 1\\\\text{FFEH} - 2 = 1\\\\text{FFCH}$\n- `PUSH CX`: $\\\\text{SP} = 1\\\\text{FFCH} - 2 = 1\\\\text{FFAH}$\n- `POP DX`: $\\\\text{SP} = 1\\\\text{FFAH} + 2 = \\\\mathbf{1FFCH}$ \nNet change: 3 pushes ($-6$) + 1 pop ($+2$) $= -4$. \n$$\\\\text{Final SP} = 2000\\\\text{H} - 4 = \\\\mathbf{1FFCH}$$",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.12",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.12",
      "question": "How much physical memory is occupied by the complete Interrupt Vector Table (IVT) in the 8086 microprocessor?",
      "options": {
        "A": "256 bytes",
        "B": "512 bytes",
        "C": "1024 bytes (1 Kilobyte)",
        "D": "2048 bytes (2 Kilobytes)"
      },
      "answer": "C",
      "answerText": "1024 bytes (1 Kilobyte)",
      "explanation": "The 8086 supports 256 interrupt types (Type 0 to Type 255). \nEach interrupt vector requires 4 bytes (2 bytes for IP, 2 bytes for CS). \n$$\\\\text{Total Size} = 256 \\\\times 4\\\\text{ bytes} = 1024\\\\text{ bytes} = \\\\mathbf{1\\\\text{ Kilobyte}}$$ \nPhysical address span: `00000H` to `003FFH`.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.13",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.13",
      "question": "An 8086 microprocessor is reset by pulsing the `RESET` pin HIGH for 5 clock cycles. What is the physical memory address from which the first instruction is fetched immediately following reset?",
      "options": {
        "A": "`00000H`",
        "B": "`FFFF0H`",
        "C": "`FFFFFH`",
        "D": "`F0000H`"
      },
      "answer": "B",
      "answerText": "`FFFF0H`",
      "explanation": "Upon reset, internal registers are initialized as: \n`CS = FFFFH`, `IP = 0000H`. \n$$\\\\text{Physical Address} = (\\\\text{CS} \\\\times 10\\\\text{H}) + \\\\text{IP} = (\\\\text{FFFFH} \\\\times 10\\\\text{H}) + 0000\\\\text{H} = \\\\text{FFFF0H} + 0 = \\\\mathbf{FFFF0H}$$",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.14",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.14",
      "question": "How many clock cycles are executed by the BIU to fetch a 16-bit word from physical address `90000H` versus `90001H` on an 8086 operating with zero wait states?",
      "options": {
        "A": "4 cycles for `90000H`; 4 cycles for `90001H`",
        "B": "4 cycles for `90000H`; 8 cycles for `90001H`",
        "C": "8 cycles for `90000H`; 4 cycles for `90001H`",
        "D": "8 cycles for `90000H`; 8 cycles for `90001H`"
      },
      "answer": "B",
      "answerText": "4 cycles for `90000H`; 8 cycles for `90001H`",
      "explanation": "- `90000H` is an aligned even address $\\\\implies$ 1 bus cycle $= \\\\mathbf{4\\\\text{ clock cycles}}$. \n- `90001H` is an unaligned odd address $\\\\implies$ 2 bus cycles $= 2 \\\\times 4 = \\\\mathbf{8\\\\text{ clock cycles}}$.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch2_Q2.15",
      "subjectId": "mp",
      "chapterId": "mp_ch2",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q2.15",
      "question": "The 8086 Parity Flag (`PF`) tests the parity of:",
      "options": {
        "A": "All 16 bits of the result",
        "B": "Only the upper 8 bits of the result",
        "C": "Only the lower 8 bits (least significant byte) of the result",
        "D": "The Carry Flag combined with the Zero Flag"
      },
      "answer": "C",
      "answerText": "Only the lower 8 bits (least significant byte) of the result",
      "explanation": "In the 8086 architecture, the Parity Flag (`PF`) reflects parity (even number of 1-bits) strictly for the **least significant byte (bits 0 to 7)** of any arithmetic/logical result, regardless of whether it was an 8-bit or 16-bit operation.",
      "source": "Numerical_Question_Bank_Chapter_2.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.1",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.1",
      "question": "The machine code for an 8086 instruction is given in hexadecimal as **`89 D8H`**. Disassemble this machine code into its exact assembly language instruction:",
      "options": {
        "A": "`MOV AX, BX`",
        "B": "`MOV BX, AX`",
        "C": "`ADD AX, BX`",
        "D": "`MOV [BX], AX`"
      },
      "answer": "A",
      "answerText": "`MOV AX, BX`",
      "explanation": "1. Byte 1 = `89H` = `1000 1001`$_2$: \n - Opcode (bits 7-2) = `100010`$_2 \\\\implies$ **`MOV`** (Reg/Mem $\\\\leftrightarrow$ Reg). \n - $d$ bit (bit 1) = `0` $\\\\implies$ Direction: `reg` is the **source operand**, `r/m` is the **destination** ($\\\\text{reg} \\\\rightarrow \\\\text{r/m}$). \n - $w$ bit (bit 0) = `1` $\\\\implies$ Word operation (**16-bit**). \n2. Byte 2 = `D8H` = `1101 1000`$_2$: \n - `mod` (bits 7-6) = `11`$_2 \\\\implies$ Register mode. \n - `reg` (bits 5-3) = `011`$_2$. With $w=1$, `011` encodes register **`BX`** (Source). \n - `r/m` (bits 2-0) = `000`$_2$. With $mod=11, w=1$, `000` encodes register **`AX`** (Destination). \n3. Formatted Instruction: **`MOV AX, BX`**.",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.2",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.2",
      "question": "Given the following register contents: `DS = 3000H`, `BX = 1500H`, `SI = 0250H`. What is the Effective Address (EA) and resulting 20-bit physical address for the instruction `MOV CL, [BX + SI + 10H]`?",
      "options": {
        "A": "$\\\\text{EA} = 1760\\\\text{H}$; $\\\\text{PA} = 31760\\\\text{H}$",
        "B": "$\\\\text{EA} = 1750\\\\text{H}$; $\\\\text{PA} = 31750\\\\text{H}$",
        "C": "$\\\\text{EA} = 1760\\\\text{H}$; $\\\\text{PA} = 47600\\\\text{H}$",
        "D": "$\\\\text{EA} = 0760\\\\text{H}$; $\\\\text{PA} = 30760\\\\text{H}$"
      },
      "answer": "A",
      "answerText": "$\\\\text{EA} = 1760\\\\text{H}$; $\\\\text{PA} = 31760\\\\text{H}$",
      "explanation": "$$\\\\text{EA} = (\\\\text{BX}) + (\\\\text{SI}) + \\\\text{disp} = 1500\\\\text{H} + 0250\\\\text{H} + 0010\\\\text{H} = \\\\mathbf{1760H}$$ \nDefault segment for `BX` is the Data Segment (`DS = 3000H`): \n$$\\\\text{PA} = (\\\\text{DS} \\\\times 10\\\\text{H}) + \\\\text{EA} = 30000\\\\text{H} + 1760\\\\text{H} = \\\\mathbf{31760H}$$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.3",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.3",
      "question": "An 8086 programmer executes the following sequence:\n```assembly\nMOV AL, 85H\nMOV BL, 92H\nADD AL, BL\n```\nWhat are the hexadecimal contents of `AL` and the exact status of the Carry Flag (`CF`) and Overflow Flag (`OF`)?",
      "options": {
        "A": "`AL = 17H`, `CF = 1`, `OF = 1`",
        "B": "`AL = 17H`, `CF = 1`, `OF = 0`",
        "C": "`AL = 17H`, `CF = 0`, `OF = 1`",
        "D": "`AL = 07H`, `CF = 1`, `OF = 1`"
      },
      "answer": "A",
      "answerText": "`AL = 17H`, `CF = 1`, `OF = 1`",
      "explanation": "Binary Addition: \n$$\\\\begin{array}{r@{\\\\quad}l}\n 1000\\\\ 0101_2 & (85\\\\text{H} = -123_{10}) \\\\\\\\\n+ 1001\\\\ 0010_2 & (92\\\\text{H} = -110_{10}) \\\\\\\\\n\\\\hline\n 1\\\\ 0001\\\\ 0111_2 & (117\\\\text{H})\n\\\\end{array}$$ \n- Register `AL` retains lower 8 bits: **`AL = 17H`**. \n- Carry out of MSB (bit 7) is $1 \\\\implies \\\\mathbf{CF = 1}$. \n- Two negative numbers ($MSB=1$) were added and produced a positive number ($17\\\\text{H} = +23_{10}$, $MSB=0$). \n True sum $= -233_{10}$, which severely overflows 8-bit signed range ($-128 \\\\text{ to } +127$). \n Therefore: $\\\\mathbf{OF = 1}$.",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.4",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.4",
      "question": "What are the contents of `AL` and the status of `CF` after executing `INC AL`, given that `AL = FFH` prior to execution?",
      "options": {
        "A": "`AL = 00H`, `CF = 1`",
        "B": "`AL = 00H`, `CF = 0` (or unchanged)",
        "C": "`AL = 01H`, `CF = 1`",
        "D": "`AL = FFH`, `CF = 0`"
      },
      "answer": "B",
      "answerText": "`AL = 00H`, `CF = 0` (or unchanged)",
      "explanation": "`INC` adds 1 to the operand: $\\\\text{FFH} + 1 = 00\\\\text{H}$. \nCrucial Architectural Rule: **`INC` and `DEC` DO NOT MODIFY THE CARRY FLAG (`CF`)!** \nTherefore, `CF` preserves its previous state (or remains 0).",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.5",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.5",
      "question": "If `AL = 80H` ($-128_{10}$), what are the contents of `AL` and the status of the Overflow Flag (`OF`) after executing `NEG AL`?",
      "options": {
        "A": "`AL = 80H`, `OF = 1`",
        "B": "`AL = 7FH`, `OF = 0`",
        "C": "`AL = 00H`, `OF = 0`",
        "D": "`AL = 80H`, `OF = 0`"
      },
      "answer": "A",
      "answerText": "`AL = 80H`, `OF = 1`",
      "explanation": "`NEG` computes 2's complement: $00\\\\text{H} - 80\\\\text{H}$. \n$$\\\\begin{array}{r@{\\\\quad}l}\n 0000\\\\ 0000_2 \\\\\\\\\n- 1000\\\\ 0000_2 \\\\\\\\\n\\\\hline\n 1000\\\\ 0000_2 & (80\\\\text{H})\n\\\\end{array}$$ \n`AL` remains **`80H`**. \nThe mathematical negation of $-128_{10}$ is $+128_{10}$. However, $+128_{10}$ cannot be represented in an 8-bit signed 2's complement register (max value is $+127$). \nBecause the result exceeds signed range: $\\\\mathbf{OF = 1}$.",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.6",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.6",
      "question": "Trace the following BCD addition sequence:\n```assembly\nMOV AL, 48H ; Packed BCD 48\nMOV BL, 37H ; Packed BCD 37\nADD AL, BL\nDAA\n```\nWhat is the final hexadecimal value in `AL`?",
      "options": {
        "A": "`7FH`",
        "B": "`85H`",
        "C": "`80H`",
        "D": "`75H`"
      },
      "answer": "B",
      "answerText": "`85H`",
      "explanation": "1. `ADD AL, BL`: $48\\\\text{H} + 37\\\\text{H} = \\\\mathbf{7FH}$. \n2. `DAA` adjustment: \n - Lower nibble is `FH` ($15 > 9$). `DAA` adds $06\\\\text{H}$ to `AL`: \n $$7\\\\text{FH} + 06\\\\text{H} = \\\\mathbf{85H}$$ \n - Auxiliary carry `AF` is set to 1. \n - Upper nibble is now `8` ($\\\\le 9$) and $CF = 0$, so no further addition is needed. \n`85H` is the correct packed BCD result of $48 + 37 = 85$!",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.7",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.7",
      "question": "Trace the following multiplication sequence:\n```assembly\nMOV AL, 06H ; Unpacked BCD 6\nMOV BL, 07H ; Unpacked BCD 7\nMUL BL\nAAM\n```\nWhat are the final contents of register `AX`?",
      "options": {
        "A": "`AX = 002AH`",
        "B": "`AX = 0402H`",
        "C": "`AX = 0204H`",
        "D": "`AX = 4200H`"
      },
      "answer": "B",
      "answerText": "`AX = 0402H`",
      "explanation": "1. `MUL BL`: $\\\\text{AX} = 06\\\\text{H} \\\\times 07\\\\text{H} = 42_{10} = \\\\mathbf{002AH}$. \n2. `AAM` (ASCII Adjust after Multiply): \n Converts binary product in `AL` (`2AH` $= 42_{10}$) into two unpacked BCD digits: \n $$\\\\text{AH} = \\\\text{AL} / 10_{10} = 42 / 10 = \\\\mathbf{04H}$$ \n $$\\\\text{AL} = \\\\text{AL} \\\\pmod{10_{10}} = 42 \\\\pmod{10} = \\\\mathbf{02H}$$ \n Combined: $\\\\mathbf{AX = 0402H}$ (`AH = 04H`, `AL = 02H`).",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.8",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.8",
      "question": "Trace the following unpacked division sequence:\n```assembly\nMOV AH, 04H ; Tens digit\nMOV AL, 02H ; Units digit (Number 42)\nAAD\nMOV BL, 07H\nDIV BL\n```\nWhat are the final contents of `AL` (Quotient) and `AH` (Remainder)?",
      "options": {
        "A": "`AL = 06H`, `AH = 00H`",
        "B": "`AL = 00H`, `AH = 06H`",
        "C": "`AL = 07H`, `AH = 00H`",
        "D": "`AL = 04H`, `AH = 02H`"
      },
      "answer": "A",
      "answerText": "`AL = 06H`, `AH = 00H`",
      "explanation": "1. Initial: `AH = 04H`, `AL = 02H`. \n2. `AAD` (ASCII Adjust before Division): \n $$\\\\text{AL} = (\\\\text{AH} \\\\times 10) + \\\\text{AL} = (4 \\\\times 10) + 2 = 42_{10} = \\\\mathbf{2AH}$$ \n $$\\\\text{AH} = \\\\mathbf{00H}$$ \n3. `DIV BL` ($2\\\\text{AH} / 07\\\\text{H} = 42 / 7$): \n - Quotient $\\\\rightarrow \\\\mathbf{AL = 06H}$ \n - Remainder $\\\\rightarrow \\\\mathbf{AH = 00H}$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.9",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.9",
      "question": "What occurs when an 8086 processor executes the instruction `DIV BL` if initial register states are `AX = 0500H` and `BL = 02H`?",
      "options": {
        "A": "`AL = 50H`, `AH = 00H`",
        "B": "`AL = FFH`, `AH = 01H`",
        "C": "The CPU generates an internal Type 0 Interrupt (Divide Error Exception)",
        "D": "The CPU sets the Overflow Flag (`OF = 1`) and continues"
      },
      "answer": "C",
      "answerText": "The CPU generates an internal Type 0 Interrupt (Divide Error Exception)",
      "explanation": "In byte division `DIV BL`, the 16-bit dividend is in `AX = 0500H` ($1280_{10}$), and the divisor is in `BL = 02H` ($2_{10}$). \n$$\\\\text{Quotient} = \\\\frac{1280}{2} = 640_{10}$$ \nThe quotient must fit in the 8-bit register `AL` (maximum value $255_{10}$). \nBecause $640 > 255$, an **unsigned quotient overflow** occurs. The 8086 hardware immediately aborts the instruction and executes an internal **Type 0 Divide Error Interrupt**.",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.10",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.10",
      "question": "If register `AL` contains `A5H` (`1010 0101`$_2$), what are the contents of `AL` and the Carry Flag (`CF`) after executing the instruction `SHR AL, 1`?",
      "options": {
        "A": "`AL = 52H`, `CF = 1`",
        "B": "`AL = D2H`, `CF = 1`",
        "C": "`AL = 52H`, `CF = 0`",
        "D": "`AL = 4AH`, `CF = 1`"
      },
      "answer": "A",
      "answerText": "`AL = 52H`, `CF = 1`",
      "explanation": "`SHR` performs a logical right shift:\n- Shift all bits right by 1.\n- Bit 0 (LSB) shifts into `CF`. In `A5H`, bit 0 is `1` $\\\\implies \\\\mathbf{CF = 1}$.\n- Bit 7 (MSB) is filled with `0`. \n$$0\\\\ 101\\\\ 0010_2 = \\\\mathbf{52H}$$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.11",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.11",
      "question": "Now evaluate the same initial value `AL = A5H` (`1010 0101`$_2$) subjected to `SAR AL, 1` (Arithmetic Shift Right). What are the contents of `AL` and `CF`?",
      "options": {
        "A": "`AL = 52H`, `CF = 1`",
        "B": "`AL = D2H`, `CF = 1`",
        "C": "`AL = D2H`, `CF = 0`",
        "D": "`AL = E2H`, `CF = 1`"
      },
      "answer": "B",
      "answerText": "`AL = D2H`, `CF = 1`",
      "explanation": "`SAR` performs an arithmetic right shift:\n- Bit 0 shifts into `CF` $\\\\implies \\\\mathbf{CF = 1}$.\n- Bit 7 **retains its original sign bit (`1`)** and is copied into bit 6. \n$$1\\\\ 101\\\\ 0010_2 = \\\\mathbf{D2H}$$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.12",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.12",
      "question": "If `AL = 81H` (`1000 0001`$_2$) and `CF = 0`, what are the contents of `AL` and `CF` after executing `RCL AL, 1` (Rotate through Carry Left)?",
      "options": {
        "A": "`AL = 02H`, `CF = 1`",
        "B": "`AL = 03H`, `CF = 1`",
        "C": "`AL = 02H`, `CF = 0`",
        "D": "`AL = 82H`, `CF = 0`"
      },
      "answer": "A",
      "answerText": "`AL = 02H`, `CF = 1`",
      "explanation": "`RCL` rotates 9 bits (8 bits of `AL` + `CF`):\n- MSB of `AL` (`1`) rotates into `CF` $\\\\implies \\\\mathbf{CF = 1}$.\n- Old `CF` (`0`) rotates into LSB (bit 0) of `AL`. \n$$0000\\\\ 0010_2 = \\\\mathbf{02H}$$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.13",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.13",
      "question": "A conditional jump instruction is located at memory address `0120H`. The jump instruction is 2 bytes long (located at `0120H` and `0121H`), meaning the next sequential instruction is at `0122H`. If the jump target is at address `0152H`, what is the 8-bit signed relative displacement encoded in the instruction?",
      "options": {
        "A": "`+32H`",
        "B": "`+30H`",
        "C": "`+2FH`",
        "D": "`+34H`"
      },
      "answer": "B",
      "answerText": "`+30H`",
      "explanation": "Relative displacement is calculated from the address of the **next sequential instruction** ($IP_{\\\\text{next}}$): \n$$IP_{\\\\text{next}} = 0120\\\\text{H} + 2\\\\text{H} = 0122\\\\text{H}$$ \n$$\\\\text{Displacement} = \\\\text{Target Address} - IP_{\\\\text{next}} = 0152\\\\text{H} - 0122\\\\text{H} = \\\\mathbf{+30H}$$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.14",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.14",
      "question": "A subroutine terminates with the instruction `RET 0006H`. If this is a Near procedure and `SP = 1FFE0H` when `RET` begins, what will be the value of `SP` after the return completes?",
      "options": {
        "A": "`1FFE2H`",
        "B": "`1FFE6H`",
        "C": "`1FFE8H`",
        "D": "`1FFD8H`"
      },
      "answer": "C",
      "answerText": "`1FFE8H`",
      "explanation": "In a Near `RET n`:\n1. `IP` is popped from stack: $\\\\text{SP} = \\\\text{SP} + 2$.\n2. The parameter count $n$ is added to the stack pointer: $\\\\text{SP} = \\\\text{SP} + n = \\\\text{SP} + 6$. \nTotal increment: $\\\\Delta \\\\text{SP} = +2 + 6 = \\\\mathbf{+8}$. \n$$\\\\text{Final SP} = 1\\\\text{FFE}0\\\\text{H} + 8 = \\\\mathbf{1FFE8H}$$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.15",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.15",
      "question": "Consider the instruction `TEST AL, 08H` executed when `AL = 38H` (`0011 1000`$_2$). What is the status of the Zero Flag (`ZF`) and the contents of `AL` after execution?",
      "options": {
        "A": "`ZF = 1`, `AL = 38H`",
        "B": "`ZF = 0`, `AL = 38H`",
        "C": "`ZF = 0`, `AL = 08H`",
        "D": "`ZF = 1`, `AL = 00H`"
      },
      "answer": "B",
      "answerText": "`ZF = 0`, `AL = 38H`",
      "explanation": "`TEST` performs bitwise AND: \n$$\\\\begin{array}{r@{\\\\quad}l}\n 0011\\\\ 1000_2 & (38\\\\text{H}) \\\\\\\\\n\\\\text{AND } 0000\\\\ 1000_2 & (08\\\\text{H}) \\\\\\\\\n\\\\hline\n 0000\\\\ 1000_2 & (08\\\\text{H})\n\\\\end{array}$$ \nBecause the bitwise result is non-zero ($08\\\\text{H} \\\\neq 0$), the Zero Flag is cleared: $\\\\mathbf{ZF = 0}$. \n`TEST` does not modify the destination register; `AL` remains **`38H`**.",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.16",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.16",
      "question": "What are the contents of `DX:AX` after executing `CWD` when `AX = 7FFFH`?",
      "options": {
        "A": "`DX = FFFFH`, `AX = 7FFFH`",
        "B": "`DX = 0000H`, `AX = 7FFFH`",
        "C": "`DX = 7FFFH`, `AX = 0000H`",
        "D": "`DX = FFFFH`, `AX = 8000H`"
      },
      "answer": "B",
      "answerText": "`DX = 0000H`, `AX = 7FFFH`",
      "explanation": "`CWD` sign-extends bit 15 of `AX` into all bits of `DX`. \nIn `7FFFH` ($0111\\\\ 1111\\\\ 1111\\\\ 1111_2$), bit 15 is **`0`** (positive signed number). \nTherefore, `DX` is filled with zeros: $\\\\mathbf{DX = 0000H}$, and `AX` remains $\\\\mathbf{7FFFH}$.",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.17",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.17",
      "question": "The string comparison `REPE CMPSB` is executed with `CX = 0005H`, source string `'HELLO'`, and destination string `'HELPO'`. How many byte comparisons will be executed before termination, and what will be the final value in `CX`?",
      "options": {
        "A": "5 comparisons; `CX = 0000H`",
        "B": "4 comparisons; `CX = 0001H`",
        "C": "3 comparisons; `CX = 0002H`",
        "D": "4 comparisons; `CX = 0000H`"
      },
      "answer": "B",
      "answerText": "4 comparisons; `CX = 0001H`",
      "explanation": "`REPE CMPSB` checks bytes one by one and terminates when a mismatch occurs ($ZF = 0$) or $CX = 0$:\n- Byte 1: `'H'` vs `'H'` $\\\\implies$ match, $ZF=1, CX=4$.\n- Byte 2: `'E'` vs `'E'` $\\\\implies$ match, $ZF=1, CX=3$.\n- Byte 3: `'L'` vs `'L'` $\\\\implies$ match, $ZF=1, CX=2$.\n- Byte 4: `'L'` vs `'P'` $\\\\implies$ **MISMATCH**! $ZF=0$, $CX$ decremented to **`0001H`**. \nThe instruction terminates immediately on mismatch after **4 comparisons**. Final $\\\\mathbf{CX = 0001H}$.",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.18",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.18",
      "question": "If `AX = 0020H`, what will be the value in `AX` after executing:\n```assembly\nMOV CL, 03H\nSHL AX, CL\n```",
      "options": {
        "A": "`0060H`",
        "B": "`0100H`",
        "C": "`0200H`",
        "D": "`0080H`"
      },
      "answer": "B",
      "answerText": "`0100H`",
      "explanation": "Shifting left by 3 bit positions is mathematically equivalent to multiplying by $2^3 = 8$: \n$$\\\\text{AX} = 0020\\\\text{H} \\\\times 8 = 32_{10} \\\\times 8 = 256_{10} = \\\\mathbf{0100H}$$",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.19",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.19",
      "question": "What are the contents of `AX` after executing `CBW` if `AL = FEH` ($-2_{10}$)?",
      "options": {
        "A": "`00FEH`",
        "B": "`FFFEH`",
        "C": "`FE00H`",
        "D": "`FFFFH`"
      },
      "answer": "B",
      "answerText": "`FFFEH`",
      "explanation": "`CBW` sign-extends bit 7 of `AL` into `AH`. \nIn `FEH` ($1111\\\\ 1110_2$), bit 7 is `1` (negative number). \nTherefore, `AH` is filled with `1`s (`FFH`), producing $\\\\mathbf{AX = FFFEH}$ ($-2_{10}$ in 16-bit 2's complement).",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "mp_num_ch3_Q3.20",
      "subjectId": "mp",
      "chapterId": "mp_ch3",
      "category": "Master Numerical MCQ",
      "type": "mcq",
      "qnum": "Q3.20",
      "question": "An 8086 program executes `INT 21H`. By how many bytes does the Stack Pointer (`SP`) change during this instruction execution?",
      "options": {
        "A": "Decrements by 2 bytes",
        "B": "Decrements by 4 bytes",
        "C": "Decrements by 6 bytes",
        "D": "Increments by 6 bytes"
      },
      "answer": "C",
      "answerText": "Decrements by 6 bytes",
      "explanation": "When executing `INT n`, the hardware performs three successive 16-bit pushes:\n1. Pushes Flag Register ($\\Delta \\\\text{SP} = -2$)\n2. Pushes `CS` ($\\Delta \\\\text{SP} = -2$)\n3. Pushes `IP` ($\\Delta \\\\text{SP} = -2$) \nTotal stack change $= \\\\mathbf{-6\\\\text{ bytes}}$ (decrement of 6).",
      "source": "Numerical_Question_Bank_Chapter_3.pdf"
    },
    {
      "id": "ppl_u1_q1",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 1,
      "question": "Why study programming language concepts?",
      "options": {
        "A": "To avoid algorithms",
        "B": "To understand design, implementation, and language choice",
        "C": "To replace compilers",
        "D": "To guarantee portability"
      },
      "answer": "B",
      "answerText": "To understand design, implementation, and language choice",
      "explanation": "Official syllabus answer for Unit 1 MCQ #1 is Option B: To understand design, implementation, and language choice.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q2",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 2,
      "question": "Expressive power chiefly affects ability to:",
      "options": {
        "A": "Communicate computational ideas",
        "B": "Allocate disk sectors",
        "C": "Avoid syntax",
        "D": "Run without a CPU"
      },
      "answer": "A",
      "answerText": "Communicate computational ideas",
      "explanation": "Official syllabus answer for Unit 1 MCQ #2 is Option A: Communicate computational ideas.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q3",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 3,
      "question": "Which criterion measures ease of understanding code?",
      "options": {
        "A": "Cost",
        "B": "Portability",
        "C": "Readability",
        "D": "Reliability"
      },
      "answer": "C",
      "answerText": "Readability",
      "explanation": "Official syllabus answer for Unit 1 MCQ #3 is Option C: Readability.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q4",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 4,
      "question": "Too many language features may hurt readability because:",
      "options": {
        "A": "All features slow execution",
        "B": "Programmers must learn and distinguish many features",
        "C": "Algorithms cannot be expressed",
        "D": "Compilation is impossible"
      },
      "answer": "B",
      "answerText": "Programmers must learn and distinguish many features",
      "explanation": "Official syllabus answer for Unit 1 MCQ #4 is Option B: Programmers must learn and distinguish many features.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q5",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 5,
      "question": "Orthogonality means:",
      "options": {
        "A": "Features combine consistently with few exceptions",
        "B": "Only one data type exists",
        "C": "Code runs on one platform",
        "D": "Use of diagrams"
      },
      "answer": "A",
      "answerText": "Features combine consistently with few exceptions",
      "explanation": "Official syllabus answer for Unit 1 MCQ #5 is Option A: Features combine consistently with few exceptions.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q6",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 6,
      "question": "C array assignment restrictions illustrate:",
      "options": {
        "A": "Portability",
        "B": "Dynamic typing",
        "C": "Lack of orthogonality",
        "D": "Exception handling"
      },
      "answer": "C",
      "answerText": "Lack of orthogonality",
      "explanation": "Official syllabus answer for Unit 1 MCQ #6 is Option C: Lack of orthogonality.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q7",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 7,
      "question": "Writability measures:",
      "options": {
        "A": "Ease of creating programs for a domain",
        "B": "Ease of reading a disk",
        "C": "Code secrecy",
        "D": "Number of operating systems"
      },
      "answer": "A",
      "answerText": "Ease of creating programs for a domain",
      "explanation": "Official syllabus answer for Unit 1 MCQ #7 is Option A: Ease of creating programs for a domain.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q8",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 8,
      "question": "Type checking supports reliability by:",
      "options": {
        "A": "Checking compatible types in operations",
        "B": "Making variables global",
        "C": "Removing testing",
        "D": "Turning errors into warnings"
      },
      "answer": "A",
      "answerText": "Checking compatible types in operations",
      "explanation": "Official syllabus answer for Unit 1 MCQ #8 is Option A: Checking compatible types in operations.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q9",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 9,
      "question": "An int plus str TypeError in Python is detected by:",
      "options": {
        "A": "Static checks only",
        "B": "Dynamic type checking",
        "C": "Preprocessing",
        "D": "Linking"
      },
      "answer": "B",
      "answerText": "Dynamic type checking",
      "explanation": "Official syllabus answer for Unit 1 MCQ #9 is Option B: Dynamic type checking.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q10",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 10,
      "question": "Aliasing occurs when:",
      "options": {
        "A": "Two names refer to one location/object",
        "B": "A function has two results",
        "C": "A variable lacks a type",
        "D": "A program runs twice"
      },
      "answer": "A",
      "answerText": "Two names refer to one location/object",
      "explanation": "Official syllabus answer for Unit 1 MCQ #10 is Option A: Two names refer to one location/object.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q11",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 11,
      "question": "Language cost includes:",
      "options": {
        "A": "Learning, development, execution, maintenance",
        "B": "Only source-file count",
        "C": "Only CPU purchase",
        "D": "Only keywords"
      },
      "answer": "A",
      "answerText": "Learning, development, execution, maintenance",
      "explanation": "Official syllabus answer for Unit 1 MCQ #11 is Option A: Learning, development, execution, maintenance.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q12",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Core)",
      "type": "mcq",
      "qnum": 12,
      "question": "Which domain-language pairing is suitable?",
      "options": {
        "A": "FORTRAN - scientific computing",
        "B": "COBOL - device drivers",
        "C": "C - symbolic AI only",
        "D": "HTML - kernels"
      },
      "answer": "A",
      "answerText": "FORTRAN - scientific computing",
      "explanation": "Official syllabus answer for Unit 1 MCQ #12 is Option A: FORTRAN - scientific computing.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q1",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 1,
      "question": "A compiler generally:",
      "options": {
        "A": "Translates the whole source before execution",
        "B": "Executes one line at a time only",
        "C": "Expands macros only",
        "D": "Converts machine code to source"
      },
      "answer": "A",
      "answerText": "Translates the whole source before execution",
      "explanation": "Official syllabus answer for Unit 2 MCQ #1 is Option A: Translates the whole source before execution.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q2",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 2,
      "question": "An interpreter generally:",
      "options": {
        "A": "Translates and executes statements as encountered",
        "B": "Always creates bytecode first",
        "C": "Optimizes all code first",
        "D": "Runs only assembly"
      },
      "answer": "A",
      "answerText": "Translates and executes statements as encountered",
      "explanation": "Official syllabus answer for Unit 2 MCQ #2 is Option A: Translates and executes statements as encountered.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q3",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 3,
      "question": "A hybrid implementation commonly compiles source into:",
      "options": {
        "A": "Syntax errors",
        "B": "Bytecode or other intermediate code",
        "C": "Preprocessor directives",
        "D": "CPU registers"
      },
      "answer": "B",
      "answerText": "Bytecode or other intermediate code",
      "explanation": "Official syllabus answer for Unit 2 MCQ #3 is Option B: Bytecode or other intermediate code.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q4",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 4,
      "question": "The JVM or CLR:",
      "options": {
        "A": "Edits source",
        "B": "Provides a runtime for intermediate code",
        "C": "Writes macros",
        "D": "Replaces the OS"
      },
      "answer": "B",
      "answerText": "Provides a runtime for intermediate code",
      "explanation": "Official syllabus answer for Unit 2 MCQ #4 is Option B: Provides a runtime for intermediate code.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q5",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 5,
      "question": "A JIT compiler:",
      "options": {
        "A": "Compiles frequently used bytecode to native code at runtime",
        "B": "Interprets comments",
        "C": "Removes the VM",
        "D": "Converts executables to pseudocode"
      },
      "answer": "A",
      "answerText": "Compiles frequently used bytecode to native code at runtime",
      "explanation": "Official syllabus answer for Unit 2 MCQ #5 is Option A: Compiles frequently used bytecode to native code at runtime.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q6",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 6,
      "question": "A limitation of hybrid implementation is:",
      "options": {
        "A": "No portability",
        "B": "Needs a compatible VM and may use more memory",
        "C": "Cannot optimize hot code",
        "D": "Cannot execute"
      },
      "answer": "B",
      "answerText": "Needs a compatible VM and may use more memory",
      "explanation": "Official syllabus answer for Unit 2 MCQ #6 is Option B: Needs a compatible VM and may use more memory.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q7",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 7,
      "question": "A preprocessor operates:",
      "options": {
        "A": "After execution",
        "B": "Before compilation",
        "C": "After linking only",
        "D": "Inside the CPU"
      },
      "answer": "B",
      "answerText": "Before compilation",
      "explanation": "Official syllabus answer for Unit 2 MCQ #7 is Option B: Before compilation.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q8",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 8,
      "question": "#include typically:",
      "options": {
        "A": "Includes header-file contents",
        "B": "Declares a loop",
        "C": "Runs the program",
        "D": "Declares a constant"
      },
      "answer": "A",
      "answerText": "Includes header-file contents",
      "explanation": "Official syllabus answer for Unit 2 MCQ #8 is Option A: Includes header-file contents.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q9",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 9,
      "question": "#define is used to:",
      "options": {
        "A": "Test macro absence",
        "B": "Define macros/constants",
        "C": "Remove a macro",
        "D": "Include files"
      },
      "answer": "B",
      "answerText": "Define macros/constants",
      "explanation": "Official syllabus answer for Unit 2 MCQ #9 is Option B: Define macros/constants.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q10",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 10,
      "question": "Assembly language uses:",
      "options": {
        "A": "Mnemonic instructions translated by an assembler",
        "B": "Natural language commands",
        "C": "JVM bytecode",
        "D": "Regular expressions as instructions"
      },
      "answer": "A",
      "answerText": "Mnemonic instructions translated by an assembler",
      "explanation": "Official syllabus answer for Unit 2 MCQ #10 is Option A: Mnemonic instructions translated by an assembler.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q11",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 11,
      "question": "FORTRAN was developed chiefly for:",
      "options": {
        "A": "Scientific and engineering computation",
        "B": "Web styling",
        "C": "GUI event handling",
        "D": "Database-only work"
      },
      "answer": "A",
      "answerText": "Scientific and engineering computation",
      "explanation": "Official syllabus answer for Unit 2 MCQ #11 is Option A: Scientific and engineering computation.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q12",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Core)",
      "type": "mcq",
      "qnum": 12,
      "question": "C++ was developed by:",
      "options": {
        "A": "Bjarne Stroustrup",
        "B": "John McCarthy",
        "C": "John Backus",
        "D": "James Gosling"
      },
      "answer": "A",
      "answerText": "Bjarne Stroustrup",
      "explanation": "Official syllabus answer for Unit 2 MCQ #12 is Option A: Bjarne Stroustrup.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q1",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 1,
      "question": "Lexical analysis is also called:",
      "options": {
        "A": "Scanning",
        "B": "Optimization",
        "C": "Code generation",
        "D": "Binding"
      },
      "answer": "A",
      "answerText": "Scanning",
      "explanation": "Official syllabus answer for Unit 3 MCQ #1 is Option A: Scanning.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q2",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 2,
      "question": "A token is:",
      "options": {
        "A": "A category of lexical units",
        "B": "A source line",
        "C": "An entire parse tree",
        "D": "A memory address"
      },
      "answer": "A",
      "answerText": "A category of lexical units",
      "explanation": "Official syllabus answer for Unit 3 MCQ #2 is Option A: A category of lexical units.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q3",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 3,
      "question": "The actual character sequence matching a token pattern is a:",
      "options": {
        "A": "Lexeme",
        "B": "Grammar",
        "C": "Scope",
        "D": "Binding time"
      },
      "answer": "A",
      "answerText": "Lexeme",
      "explanation": "Official syllabus answer for Unit 3 MCQ #3 is Option A: Lexeme.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q4",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 4,
      "question": "Scanners commonly use:",
      "options": {
        "A": "Regular expressions and finite automata",
        "B": "Only CFGs",
        "C": "Garbage collection",
        "D": "Virtual methods"
      },
      "answer": "A",
      "answerText": "Regular expressions and finite automata",
      "explanation": "Official syllabus answer for Unit 3 MCQ #4 is Option A: Regular expressions and finite automata.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q5",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 5,
      "question": "A parser checks whether:",
      "options": {
        "A": "Tokens follow the language grammar",
        "B": "Identifiers are portable",
        "C": "Code is optimized",
        "D": "Variables are dynamic"
      },
      "answer": "A",
      "answerText": "Tokens follow the language grammar",
      "explanation": "Official syllabus answer for Unit 3 MCQ #5 is Option A: Tokens follow the language grammar.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q6",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 6,
      "question": "Top-down parsing builds from:",
      "options": {
        "A": "Input toward start symbol",
        "B": "Start symbol toward input, often leftmost derivation",
        "C": "Machine code toward source",
        "D": "Heap toward roots"
      },
      "answer": "B",
      "answerText": "Start symbol toward input, often leftmost derivation",
      "explanation": "Official syllabus answer for Unit 3 MCQ #6 is Option B: Start symbol toward input, often leftmost derivation.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q7",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 7,
      "question": "Bottom-up parsing is also called:",
      "options": {
        "A": "Shift-reduce parsing",
        "B": "Scanning",
        "C": "Name binding",
        "D": "Mark-and-sweep"
      },
      "answer": "A",
      "answerText": "Shift-reduce parsing",
      "explanation": "Official syllabus answer for Unit 3 MCQ #7 is Option A: Shift-reduce parsing.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q8",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 8,
      "question": "Semantic analysis checks:",
      "options": {
        "A": "Logical meaning under language rules",
        "B": "Whitespace only",
        "C": "Alphabetical token order",
        "D": "Runtime speed"
      },
      "answer": "A",
      "answerText": "Logical meaning under language rules",
      "explanation": "Official syllabus answer for Unit 3 MCQ #8 is Option A: Logical meaning under language rules.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q9",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 9,
      "question": "Which structure records identifier attributes?",
      "options": {
        "A": "Symbol table",
        "B": "Call stack only",
        "C": "Heap bitmap",
        "D": "Parse token"
      },
      "answer": "A",
      "answerText": "Symbol table",
      "explanation": "Official syllabus answer for Unit 3 MCQ #9 is Option A: Symbol table.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q10",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 10,
      "question": "Static binding resolves a call:",
      "options": {
        "A": "At compile time",
        "B": "After termination",
        "C": "During scanning only",
        "D": "During collection"
      },
      "answer": "A",
      "answerText": "At compile time",
      "explanation": "Official syllabus answer for Unit 3 MCQ #10 is Option A: At compile time.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q11",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 11,
      "question": "Dynamic scoping depends on:",
      "options": {
        "A": "Textual structure only",
        "B": "Active call chain at runtime",
        "C": "Identifier length",
        "D": "Target CPU"
      },
      "answer": "B",
      "answerText": "Active call chain at runtime",
      "explanation": "Official syllabus answer for Unit 3 MCQ #11 is Option B: Active call chain at runtime.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q12",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Core)",
      "type": "mcq",
      "qnum": 12,
      "question": "A && B skips B when:",
      "options": {
        "A": "A is false",
        "B": "A is true",
        "C": "B is an identifier",
        "D": "A is numeric"
      },
      "answer": "A",
      "answerText": "A is false",
      "explanation": "Official syllabus answer for Unit 3 MCQ #12 is Option A: A is false.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q1",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 1,
      "question": "Sequential control executes statements:",
      "options": {
        "A": "In written order unless control changes",
        "B": "Only on events",
        "C": "Randomly",
        "D": "Only after recursion"
      },
      "answer": "A",
      "answerText": "In written order unless control changes",
      "explanation": "Official syllabus answer for Unit 4 MCQ #1 is Option A: In written order unless control changes.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q2",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 2,
      "question": "Selection logic chooses a path using:",
      "options": {
        "A": "Conditions",
        "B": "Heap size",
        "C": "Token count",
        "D": "Parameter names"
      },
      "answer": "A",
      "answerText": "Conditions",
      "explanation": "Official syllabus answer for Unit 4 MCQ #2 is Option A: Conditions.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q3",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 3,
      "question": "Iteration logic uses:",
      "options": {
        "A": "A repeated loop body",
        "B": "Only overloading",
        "C": "A symbol table",
        "D": "A catch block"
      },
      "answer": "A",
      "answerText": "A repeated loop body",
      "explanation": "Official syllabus answer for Unit 4 MCQ #3 is Option A: A repeated loop body.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q4",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 4,
      "question": "A formal parameter is:",
      "options": {
        "A": "Declared in a subprogram definition",
        "B": "Supplied by the caller",
        "C": "An executable",
        "D": "A global constant"
      },
      "answer": "A",
      "answerText": "Declared in a subprogram definition",
      "explanation": "Official syllabus answer for Unit 4 MCQ #4 is Option A: Declared in a subprogram definition.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q5",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 5,
      "question": "An actual argument is:",
      "options": {
        "A": "A value/expression supplied in a call",
        "B": "A return type",
        "C": "A scope",
        "D": "A handler"
      },
      "answer": "A",
      "answerText": "A value/expression supplied in a call",
      "explanation": "Official syllabus answer for Unit 4 MCQ #5 is Option A: A value/expression supplied in a call.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q6",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 6,
      "question": "A stack-dynamic local typically:",
      "options": {
        "A": "Gets storage per invocation",
        "B": "Retains one fixed program-wide location",
        "C": "Is always global",
        "D": "Cannot be initialized"
      },
      "answer": "A",
      "answerText": "Gets storage per invocation",
      "explanation": "Official syllabus answer for Unit 4 MCQ #6 is Option A: Gets storage per invocation.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q7",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 7,
      "question": "A generic subprogram permits:",
      "options": {
        "A": "One algorithm to work with multiple types",
        "B": "Only one argument type",
        "C": "No parameters",
        "D": "Multiple scopes for one variable"
      },
      "answer": "A",
      "answerText": "One algorithm to work with multiple types",
      "explanation": "Official syllabus answer for Unit 4 MCQ #7 is Option A: One algorithm to work with multiple types.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q8",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 8,
      "question": "Overloading permits:",
      "options": {
        "A": "Same name with different parameter lists",
        "B": "Only one subprogram",
        "C": "All parameters to alias",
        "D": "Calls without definitions"
      },
      "answer": "A",
      "answerText": "Same name with different parameter lists",
      "explanation": "Official syllabus answer for Unit 4 MCQ #8 is Option A: Same name with different parameter lists.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q9",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 9,
      "question": "Static scope depends mainly on:",
      "options": {
        "A": "Textual declarations",
        "B": "Active call chain only",
        "C": "Current instruction",
        "D": "User events"
      },
      "answer": "A",
      "answerText": "Textual declarations",
      "explanation": "Official syllabus answer for Unit 4 MCQ #9 is Option A: Textual declarations.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q10",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 10,
      "question": "In pass-by-reference, the formal is:",
      "options": {
        "A": "An alias for caller's variable",
        "B": "An independent copy",
        "C": "An expression re-evaluated each time",
        "D": "Uninitialized output"
      },
      "answer": "A",
      "answerText": "An alias for caller's variable",
      "explanation": "Official syllabus answer for Unit 4 MCQ #10 is Option A: An alias for caller's variable.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q11",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 11,
      "question": "Pass-by-value-result is also called:",
      "options": {
        "A": "Copy-in/copy-out",
        "B": "Name substitution",
        "C": "Dynamic scope",
        "D": "Early binding"
      },
      "answer": "A",
      "answerText": "Copy-in/copy-out",
      "explanation": "Official syllabus answer for Unit 4 MCQ #11 is Option A: Copy-in/copy-out.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q12",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Core)",
      "type": "mcq",
      "qnum": 12,
      "question": "In pass-by-name, the argument is conceptually:",
      "options": {
        "A": "Substituted and evaluated when used",
        "B": "Copied once at call",
        "C": "Only copied back",
        "D": "Always passed as address"
      },
      "answer": "A",
      "answerText": "Substituted and evaluated when used",
      "explanation": "Official syllabus answer for Unit 4 MCQ #12 is Option A: Substituted and evaluated when used.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q1",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 1,
      "question": "An exception is:",
      "options": {
        "A": "An abnormal runtime condition interrupting normal flow",
        "B": "A normal click",
        "C": "A token",
        "D": "A parameter"
      },
      "answer": "A",
      "answerText": "An abnormal runtime condition interrupting normal flow",
      "explanation": "Official syllabus answer for Unit 5 MCQ #1 is Option A: An abnormal runtime condition interrupting normal flow.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q2",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 2,
      "question": "Java checked exceptions generally must be:",
      "options": {
        "A": "Caught or declared",
        "B": "Ignored",
        "C": "Converted to events",
        "D": "Handled only in finally"
      },
      "answer": "A",
      "answerText": "Caught or declared",
      "explanation": "Official syllabus answer for Unit 5 MCQ #2 is Option A: Caught or declared.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q3",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 3,
      "question": "Which keyword starts code that may throw?",
      "options": {
        "A": "try",
        "B": "throwable",
        "C": "event",
        "D": "catcher"
      },
      "answer": "A",
      "answerText": "try",
      "explanation": "Official syllabus answer for Unit 5 MCQ #3 is Option A: try.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q4",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 4,
      "question": "finally is mainly for code that:",
      "options": {
        "A": "Runs for cleanup after try/catch flow",
        "B": "Runs only without exceptions",
        "C": "Declares exception types",
        "D": "Registers mouse events"
      },
      "answer": "A",
      "answerText": "Runs for cleanup after try/catch flow",
      "explanation": "Official syllabus answer for Unit 5 MCQ #4 is Option A: Runs for cleanup after try/catch flow.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q5",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 5,
      "question": "A user-defined Java exception is commonly made by:",
      "options": {
        "A": "Extending an exception class",
        "B": "Using #define",
        "C": "Making a JFrame",
        "D": "Declaring a token"
      },
      "answer": "A",
      "answerText": "Extending an exception class",
      "explanation": "Official syllabus answer for Unit 5 MCQ #5 is Option A: Extending an exception class.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q6",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 6,
      "question": "Exception-handler binding associates:",
      "options": {
        "A": "A raised exception with a handler",
        "B": "Button with label",
        "C": "Bytecode with native code",
        "D": "Token with lexeme"
      },
      "answer": "A",
      "answerText": "A raised exception with a handler",
      "explanation": "Official syllabus answer for Unit 5 MCQ #6 is Option A: A raised exception with a handler.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q7",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 7,
      "question": "If no local handler matches, Java typically:",
      "options": {
        "A": "Searches outward through callers",
        "B": "Restarts automatically",
        "C": "Treats it as an event",
        "D": "Issues only a warning"
      },
      "answer": "A",
      "answerText": "Searches outward through callers",
      "explanation": "Official syllabus answer for Unit 5 MCQ #7 is Option A: Searches outward through callers.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q8",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 8,
      "question": "An event may come from:",
      "options": {
        "A": "User, OS, device, timer, or software",
        "B": "Only exceptions",
        "C": "Only compiler",
        "D": "Only keyboard"
      },
      "answer": "A",
      "answerText": "User, OS, device, timer, or software",
      "explanation": "Official syllabus answer for Unit 5 MCQ #8 is Option A: User, OS, device, timer, or software.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q9",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 9,
      "question": "Event-driven programs generally:",
      "options": {
        "A": "Wait for events and invoke handlers",
        "B": "Run a fixed sequence without input",
        "C": "Compile each click",
        "D": "Use no control flow"
      },
      "answer": "A",
      "answerText": "Wait for events and invoke handlers",
      "explanation": "Official syllabus answer for Unit 5 MCQ #9 is Option A: Wait for events and invoke handlers.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q10",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 10,
      "question": "Java button clicks commonly use:",
      "options": {
        "A": "ActionListener",
        "B": "Lexer",
        "C": "Garbage collector",
        "D": "Macro"
      },
      "answer": "A",
      "answerText": "ActionListener",
      "explanation": "Official syllabus answer for Unit 5 MCQ #10 is Option A: ActionListener.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q11",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 11,
      "question": "Swing is:",
      "options": {
        "A": "A GUI toolkit built on AWT infrastructure",
        "B": "An exception category",
        "C": "Assembly language",
        "D": "A Prolog engine"
      },
      "answer": "A",
      "answerText": "A GUI toolkit built on AWT infrastructure",
      "explanation": "Official syllabus answer for Unit 5 MCQ #11 is Option A: A GUI toolkit built on AWT infrastructure.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q12",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Core)",
      "type": "mcq",
      "qnum": 12,
      "question": "Which Swing component is a top-level window?",
      "options": {
        "A": "JFrame",
        "B": "JTextField",
        "C": "JLabel",
        "D": "JButton"
      },
      "answer": "A",
      "answerText": "JFrame",
      "explanation": "Official syllabus answer for Unit 5 MCQ #12 is Option A: JFrame.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q1",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 1,
      "question": "A programming paradigm is:",
      "options": {
        "A": "A general style for expressing computation",
        "B": "A compiler error",
        "C": "A memory address",
        "D": "A widget"
      },
      "answer": "A",
      "answerText": "A general style for expressing computation",
      "explanation": "Official syllabus answer for Unit 6 MCQ #1 is Option A: A general style for expressing computation.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q2",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 2,
      "question": "Logic programming represents knowledge with:",
      "options": {
        "A": "Facts, rules, queries",
        "B": "Mutable loops only",
        "C": "Classes only",
        "D": "Registers"
      },
      "answer": "A",
      "answerText": "Facts, rules, queries",
      "explanation": "Official syllabus answer for Unit 6 MCQ #2 is Option A: Facts, rules, queries.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q3",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 3,
      "question": "In Prolog, :- is read as:",
      "options": {
        "A": "If",
        "B": "And",
        "C": "Not",
        "D": "Then only"
      },
      "answer": "A",
      "answerText": "If",
      "explanation": "Official syllabus answer for Unit 6 MCQ #3 is Option A: If.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q4",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 4,
      "question": "Unification attempts to:",
      "options": {
        "A": "Find substitutions that make terms match",
        "B": "Allocate heap",
        "C": "Translate bytecode",
        "D": "Handle GUI events"
      },
      "answer": "A",
      "answerText": "Find substitutions that make terms match",
      "explanation": "Official syllabus answer for Unit 6 MCQ #4 is Option A: Find substitutions that make terms match.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q5",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 5,
      "question": "Backtracking enables Prolog to:",
      "options": {
        "A": "Explore alternatives and find more solutions",
        "B": "Avoid recursion",
        "C": "Compile before execution",
        "D": "Remove variables"
      },
      "answer": "A",
      "answerText": "Explore alternatives and find more solutions",
      "explanation": "Official syllabus answer for Unit 6 MCQ #5 is Option A: Explore alternatives and find more solutions.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q6",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 6,
      "question": "Referential transparency means replacing expression by value:",
      "options": {
        "A": "Does not change behavior",
        "B": "Only at compile time",
        "C": "Mutates state",
        "D": "Throws an exception"
      },
      "answer": "A",
      "answerText": "Does not change behavior",
      "explanation": "Official syllabus answer for Unit 6 MCQ #6 is Option A: Does not change behavior.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q7",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 7,
      "question": "A higher-order function:",
      "options": {
        "A": "Accepts/returns a function",
        "B": "Must be assembly",
        "C": "Cannot return values",
        "D": "Must recurse"
      },
      "answer": "A",
      "answerText": "Accepts/returns a function",
      "explanation": "Official syllabus answer for Unit 6 MCQ #7 is Option A: Accepts/returns a function.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q8",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 8,
      "question": "Which function retains values meeting a predicate?",
      "options": {
        "A": "filter",
        "B": "map",
        "C": "cons",
        "D": "car"
      },
      "answer": "A",
      "answerText": "filter",
      "explanation": "Official syllabus answer for Unit 6 MCQ #8 is Option A: filter.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q9",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 9,
      "question": "In Lisp, car returns:",
      "options": {
        "A": "First element of a nonempty list",
        "B": "Tail of list",
        "C": "List length",
        "D": "Quoted symbol"
      },
      "answer": "A",
      "answerText": "First element of a nonempty list",
      "explanation": "Official syllabus answer for Unit 6 MCQ #9 is Option A: First element of a nonempty list.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q10",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 10,
      "question": "Reference counting can miss unreachable objects that:",
      "options": {
        "A": "Form reference cycles",
        "B": "Have zero references",
        "C": "Are lists",
        "D": "Are immutable"
      },
      "answer": "A",
      "answerText": "Form reference cycles",
      "explanation": "Official syllabus answer for Unit 6 MCQ #10 is Option A: Form reference cycles.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q11",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 11,
      "question": "Mark-and-sweep reclaims objects:",
      "options": {
        "A": "Unmarked after tracing from roots",
        "B": "Young objects only",
        "C": "Referenced locally",
        "D": "Defined by classes"
      },
      "answer": "A",
      "answerText": "Unmarked after tracing from roots",
      "explanation": "Official syllabus answer for Unit 6 MCQ #11 is Option A: Unmarked after tracing from roots.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q12",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Core)",
      "type": "mcq",
      "qnum": 12,
      "question": "OOP encapsulation aims to:",
      "options": {
        "A": "Group state/behavior and control state access",
        "B": "Represent Prolog facts",
        "C": "Replace methods with globals",
        "D": "Avoid all state"
      },
      "answer": "A",
      "answerText": "Group state/behavior and control state access",
      "explanation": "Official syllabus answer for Unit 6 MCQ #12 is Option A: Group state/behavior and control state access.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q13",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 13,
      "question": "Which reason for language study helps programmers avoid using a familiar but unsuitable language?",
      "options": {
        "A": "Improved background for choosing languages",
        "B": "Aliasing",
        "C": "Portability",
        "D": "Interpretation"
      },
      "answer": "A",
      "answerText": "Improved background for choosing languages",
      "explanation": "Official syllabus answer for Unit 1 MCQ #1 is Option A: Improved background for choosing languages.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q14",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 14,
      "question": "In Python, assigning b = a for a list means:",
      "options": {
        "A": "A deep copy is always made",
        "B": "Both names can refer to the same list object",
        "C": "The list becomes immutable",
        "D": "a is deleted"
      },
      "answer": "B",
      "answerText": "Both names can refer to the same list object",
      "explanation": "Official syllabus answer for Unit 1 MCQ #2 is Option B: Both names can refer to the same list object.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q15",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 15,
      "question": "In C, how can a function change a caller's integer?",
      "options": {
        "A": "Pass its address and modify through a pointer",
        "B": "Use pass-by-name",
        "C": "Use a macro only",
        "D": "Return no value"
      },
      "answer": "A",
      "answerText": "Pass its address and modify through a pointer",
      "explanation": "Official syllabus answer for Unit 1 MCQ #3 is Option A: Pass its address and modify through a pointer.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q16",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 16,
      "question": "Python argument behavior is commonly described as:",
      "options": {
        "A": "Pass by object reference/sharing",
        "B": "Strict pass-by-reference",
        "C": "Copy-in/copy-out",
        "D": "Pass-by-name"
      },
      "answer": "A",
      "answerText": "Pass by object reference/sharing",
      "explanation": "Official syllabus answer for Unit 1 MCQ #4 is Option A: Pass by object reference/sharing.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q17",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 17,
      "question": "Which action changes a Python list argument in place?",
      "options": {
        "A": "Rebinding an integer parameter",
        "B": "Calling append on the referenced list",
        "C": "Converting a name to a token",
        "D": "Declaring an exception"
      },
      "answer": "B",
      "answerText": "Calling append on the referenced list",
      "explanation": "Official syllabus answer for Unit 1 MCQ #5 is Option B: Calling append on the referenced list.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q18",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 18,
      "question": "A business application commonly emphasizes:",
      "options": {
        "A": "File/database handling and reports",
        "B": "Machine registers only",
        "C": "Grammar parsing only",
        "D": "Image rendering only"
      },
      "answer": "A",
      "answerText": "File/database handling and reports",
      "explanation": "Official syllabus answer for Unit 1 MCQ #6 is Option A: File/database handling and reports.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q19",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 19,
      "question": "Systems programming commonly emphasizes:",
      "options": {
        "A": "Execution speed and memory control",
        "B": "Report generation",
        "C": "Natural-language grammar only",
        "D": "Browser styling"
      },
      "answer": "A",
      "answerText": "Execution speed and memory control",
      "explanation": "Official syllabus answer for Unit 1 MCQ #7 is Option A: Execution speed and memory control.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u1_q20",
      "subjectId": "ppl",
      "chapterId": "ppl_u1",
      "category": "Unit 1 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 20,
      "question": "A scripting language is often used to:",
      "options": {
        "A": "Automate tasks or add functionality to applications",
        "B": "Define CPU opcodes only",
        "C": "Replace all operating systems",
        "D": "Represent parse trees only"
      },
      "answer": "A",
      "answerText": "Automate tasks or add functionality to applications",
      "explanation": "Official syllabus answer for Unit 1 MCQ #8 is Option A: Automate tasks or add functionality to applications.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q13",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 13,
      "question": "Which early programming approach used symbolic or pseudo instructions before modern HLLs?",
      "options": {
        "A": "Pseudocode languages",
        "B": "Swing",
        "C": "Prolog",
        "D": "JIT"
      },
      "answer": "A",
      "answerText": "Pseudocode languages",
      "explanation": "Official syllabus answer for Unit 2 MCQ #1 is Option A: Pseudocode languages.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q14",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 14,
      "question": "Assembly language is machine dependent mainly because:",
      "options": {
        "A": "Its instructions reflect a particular architecture's instruction set",
        "B": "It uses a JVM",
        "C": "It has no mnemonics",
        "D": "It is written in Java"
      },
      "answer": "A",
      "answerText": "Its instructions reflect a particular architecture's instruction set",
      "explanation": "Official syllabus answer for Unit 2 MCQ #2 is Option A: Its instructions reflect a particular architecture's instruction set.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q15",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 15,
      "question": "Which was an early contribution of FORTRAN?",
      "options": {
        "A": "Demonstrating compilers could produce efficient machine code",
        "B": "Creating object-oriented inheritance",
        "C": "Introducing GUI listeners",
        "D": "Inventing garbage collection"
      },
      "answer": "A",
      "answerText": "Demonstrating compilers could produce efficient machine code",
      "explanation": "Official syllabus answer for Unit 2 MCQ #3 is Option A: Demonstrating compilers could produce efficient machine code.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q16",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 16,
      "question": "C was developed chiefly to support:",
      "options": {
        "A": "UNIX and efficient portable systems software",
        "B": "Web page layouts",
        "C": "AI list processing",
        "D": "Java virtual machines"
      },
      "answer": "A",
      "answerText": "UNIX and efficient portable systems software",
      "explanation": "Official syllabus answer for Unit 2 MCQ #4 is Option A: UNIX and efficient portable systems software.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q17",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 17,
      "question": "Java's WORA goal means:",
      "options": {
        "A": "Write Once, Run Anywhere with a compatible runtime",
        "B": "Write Once, Run Assembly",
        "C": "Work Only on Runtime Analysis",
        "D": "Without Object Reference Assignment"
      },
      "answer": "A",
      "answerText": "Write Once, Run Anywhere with a compatible runtime",
      "explanation": "Official syllabus answer for Unit 2 MCQ #5 is Option A: Write Once, Run Anywhere with a compatible runtime.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q18",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 18,
      "question": "Which assembly operation changes control flow?",
      "options": {
        "A": "JMP",
        "B": "MOV",
        "C": "ADD",
        "D": "SUB"
      },
      "answer": "A",
      "answerText": "JMP",
      "explanation": "Official syllabus answer for Unit 2 MCQ #6 is Option A: JMP.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q19",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 19,
      "question": "A linker/loader or execution stage follows compilation to:",
      "options": {
        "A": "Prepare translated code for execution",
        "B": "Convert facts to rules",
        "C": "Handle mouse clicks",
        "D": "Tokenize identifiers"
      },
      "answer": "A",
      "answerText": "Prepare translated code for execution",
      "explanation": "Official syllabus answer for Unit 2 MCQ #7 is Option A: Prepare translated code for execution.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u2_q20",
      "subjectId": "ppl",
      "chapterId": "ppl_u2",
      "category": "Unit 2 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 20,
      "question": "Conditional compilation uses directives such as:",
      "options": {
        "A": "#ifdef and #ifndef",
        "B": "try and catch",
        "C": "car and cdr",
        "D": "JFrame and JLabel"
      },
      "answer": "A",
      "answerText": "#ifdef and #ifndef",
      "explanation": "Official syllabus answer for Unit 2 MCQ #8 is Option A: #ifdef and #ifndef.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q13",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 13,
      "question": "Which compiler phase groups characters into tokens?",
      "options": {
        "A": "Lexical analysis",
        "B": "Syntax analysis",
        "C": "Semantic analysis",
        "D": "Code optimization"
      },
      "answer": "A",
      "answerText": "Lexical analysis",
      "explanation": "Official syllabus answer for Unit 3 MCQ #1 is Option A: Lexical analysis.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q14",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 14,
      "question": "Missing semicolon detection is chiefly a:",
      "options": {
        "A": "Syntax error",
        "B": "Lexical error",
        "C": "Memory leak",
        "D": "Binding-time error"
      },
      "answer": "A",
      "answerText": "Syntax error",
      "explanation": "Official syllabus answer for Unit 3 MCQ #2 is Option A: Syntax error.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q15",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 15,
      "question": "An invalid source character is chiefly a:",
      "options": {
        "A": "Lexical error",
        "B": "Syntax tree",
        "C": "Dynamic binding",
        "D": "Type coercion"
      },
      "answer": "A",
      "answerText": "Lexical error",
      "explanation": "Official syllabus answer for Unit 3 MCQ #3 is Option A: Lexical error.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q16",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 16,
      "question": "Common subexpression elimination belongs to:",
      "options": {
        "A": "Code optimization",
        "B": "Lexical analysis",
        "C": "Scope resolution",
        "D": "Event handling"
      },
      "answer": "A",
      "answerText": "Code optimization",
      "explanation": "Official syllabus answer for Unit 3 MCQ #4 is Option A: Code optimization.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q17",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 17,
      "question": "Target code generation produces:",
      "options": {
        "A": "Machine/assembly code for a target architecture",
        "B": "Only comments",
        "C": "Prolog queries",
        "D": "A source grammar"
      },
      "answer": "A",
      "answerText": "Machine/assembly code for a target architecture",
      "explanation": "Official syllabus answer for Unit 3 MCQ #5 is Option A: Machine/assembly code for a target architecture.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q18",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 18,
      "question": "Implicit type conversion is also called:",
      "options": {
        "A": "Coercion",
        "B": "Backtracking",
        "C": "Aliasing",
        "D": "Marking"
      },
      "answer": "A",
      "answerText": "Coercion",
      "explanation": "Official syllabus answer for Unit 3 MCQ #6 is Option A: Coercion.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q19",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 19,
      "question": "Casting a float to int manually is an example of:",
      "options": {
        "A": "Explicit conversion",
        "B": "Dynamic binding",
        "C": "Lexical scanning",
        "D": "Copy-out"
      },
      "answer": "A",
      "answerText": "Explicit conversion",
      "explanation": "Official syllabus answer for Unit 3 MCQ #7 is Option A: Explicit conversion.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u3_q20",
      "subjectId": "ppl",
      "chapterId": "ppl_u3",
      "category": "Unit 3 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 20,
      "question": "Which expression short-circuits before its second term when x is nonzero?",
      "options": {
        "A": "x != 0 && f()",
        "B": "x == 0 || f()",
        "C": "x + f()",
        "D": "f() == x"
      },
      "answer": "A",
      "answerText": "x != 0 && f()",
      "explanation": "Official syllabus answer for Unit 3 MCQ #8 is Option A: x != 0 && f().",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q13",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 13,
      "question": "A repeat-for loop is a form of:",
      "options": {
        "A": "Iteration",
        "B": "Selection",
        "C": "Sequential-only flow",
        "D": "Exception propagation"
      },
      "answer": "A",
      "answerText": "Iteration",
      "explanation": "Official syllabus answer for Unit 4 MCQ #1 is Option A: Iteration.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q14",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 14,
      "question": "Pass-by-result requires the actual argument to be:",
      "options": {
        "A": "A variable location that can receive the output",
        "B": "A constant expression only",
        "C": "A function name",
        "D": "A type name"
      },
      "answer": "A",
      "answerText": "A variable location that can receive the output",
      "explanation": "Official syllabus answer for Unit 4 MCQ #2 is Option A: A variable location that can receive the output.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q15",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 15,
      "question": "Which method copies an argument in and the final parameter value out?",
      "options": {
        "A": "Pass-by-value-result",
        "B": "Pass-by-name",
        "C": "Pass-by-reference",
        "D": "Pass-by-result"
      },
      "answer": "A",
      "answerText": "Pass-by-value-result",
      "explanation": "Official syllabus answer for Unit 4 MCQ #3 is Option A: Pass-by-value-result.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q16",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 16,
      "question": "Which method provides no initial input value but copies its output back?",
      "options": {
        "A": "Pass-by-result",
        "B": "Pass-by-value",
        "C": "Pass-by-name",
        "D": "Pass-by-reference"
      },
      "answer": "A",
      "answerText": "Pass-by-result",
      "explanation": "Official syllabus answer for Unit 4 MCQ #4 is Option A: Pass-by-result.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q17",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 17,
      "question": "Which method avoids an immediate value copy but creates an alias?",
      "options": {
        "A": "Pass-by-reference",
        "B": "Pass-by-value",
        "C": "Pass-by-result",
        "D": "Pass-by-name"
      },
      "answer": "A",
      "answerText": "Pass-by-reference",
      "explanation": "Official syllabus answer for Unit 4 MCQ #5 is Option A: Pass-by-reference.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q18",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 18,
      "question": "Under pass-by-value, changing the formal parameter:",
      "options": {
        "A": "Does not directly change the caller's separate variable",
        "B": "Always changes the caller's variable",
        "C": "Re-evaluates the expression",
        "D": "Copies it back on return"
      },
      "answer": "A",
      "answerText": "Does not directly change the caller's separate variable",
      "explanation": "Official syllabus answer for Unit 4 MCQ #6 is Option A: Does not directly change the caller's separate variable.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q19",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 19,
      "question": "A local referencing environment may include:",
      "options": {
        "A": "Locals, parameters, visible globals, and accessible enclosing names",
        "B": "Only heap objects",
        "C": "Only keywords",
        "D": "Only actual arguments"
      },
      "answer": "A",
      "answerText": "Locals, parameters, visible globals, and accessible enclosing names",
      "explanation": "Official syllabus answer for Unit 4 MCQ #7 is Option A: Locals, parameters, visible globals, and accessible enclosing names.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u4_q20",
      "subjectId": "ppl",
      "chapterId": "ppl_u4",
      "category": "Unit 4 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 20,
      "question": "Overloaded methods are typically distinguished by:",
      "options": {
        "A": "Their parameter lists/signatures",
        "B": "Their source-file names",
        "C": "Their comments",
        "D": "Their runtime addresses"
      },
      "answer": "A",
      "answerText": "Their parameter lists/signatures",
      "explanation": "Official syllabus answer for Unit 4 MCQ #8 is Option A: Their parameter lists/signatures.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q13",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 13,
      "question": "Which Java category represents serious system-level problems?",
      "options": {
        "A": "Error",
        "B": "Checked exception",
        "C": "ActionEvent",
        "D": "Runtime parameter"
      },
      "answer": "A",
      "answerText": "Error",
      "explanation": "Official syllabus answer for Unit 5 MCQ #1 is Option A: Error.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q14",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 14,
      "question": "Which keyword explicitly raises an exception?",
      "options": {
        "A": "throw",
        "B": "throws",
        "C": "try",
        "D": "finally"
      },
      "answer": "A",
      "answerText": "throw",
      "explanation": "Official syllabus answer for Unit 5 MCQ #2 is Option A: throw.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q15",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 15,
      "question": "Which keyword declares that a method may propagate exceptions?",
      "options": {
        "A": "throws",
        "B": "throw",
        "C": "catch",
        "D": "finally"
      },
      "answer": "A",
      "answerText": "throws",
      "explanation": "Official syllabus answer for Unit 5 MCQ #3 is Option A: throws.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q16",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 16,
      "question": "Catching a superclass exception can handle:",
      "options": {
        "A": "Several related subclass exception types",
        "B": "Only one GUI event",
        "C": "Lexical tokens",
        "D": "All syntax errors"
      },
      "answer": "A",
      "answerText": "Several related subclass exception types",
      "explanation": "Official syllabus answer for Unit 5 MCQ #4 is Option A: Several related subclass exception types.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q17",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 17,
      "question": "Which event listener is commonly used for mouse actions?",
      "options": {
        "A": "MouseListener",
        "B": "ActionListener only",
        "C": "ErrorListener",
        "D": "Scanner"
      },
      "answer": "A",
      "answerText": "MouseListener",
      "explanation": "Official syllabus answer for Unit 5 MCQ #5 is Option A: MouseListener.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q18",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 18,
      "question": "A lambda can provide an implementation for:",
      "options": {
        "A": "A functional interface listener",
        "B": "A grammar production",
        "C": "A class constructor only",
        "D": "An exception object"
      },
      "answer": "A",
      "answerText": "A functional interface listener",
      "explanation": "Official syllabus answer for Unit 5 MCQ #6 is Option A: A functional interface listener.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q19",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 19,
      "question": "NumberFormatException handling in a registration form validates:",
      "options": {
        "A": "That numeric input can be parsed",
        "B": "That a JFrame opened",
        "C": "That bytecode is portable",
        "D": "That a token is reserved"
      },
      "answer": "A",
      "answerText": "That numeric input can be parsed",
      "explanation": "Official syllabus answer for Unit 5 MCQ #7 is Option A: That numeric input can be parsed.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u5_q20",
      "subjectId": "ppl",
      "chapterId": "ppl_u5",
      "category": "Unit 5 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 20,
      "question": "AWT components are generally described as:",
      "options": {
        "A": "Native-peer based/heavierweight compared with Swing components",
        "B": "A Prolog database",
        "C": "A compiler phase",
        "D": "An exception type"
      },
      "answer": "A",
      "answerText": "Native-peer based/heavierweight compared with Swing components",
      "explanation": "Official syllabus answer for Unit 5 MCQ #8 is Option A: Native-peer based/heavierweight compared with Swing components.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q13",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 13,
      "question": "In Prolog, commas between goals in a rule body mean:",
      "options": {
        "A": "Logical AND",
        "B": "Logical OR",
        "C": "Negation",
        "D": "Assignment"
      },
      "answer": "A",
      "answerText": "Logical AND",
      "explanation": "Official syllabus answer for Unit 6 MCQ #1 is Option A: Logical AND.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q14",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 14,
      "question": "A variable query asks Prolog to:",
      "options": {
        "A": "Find substitutions/values satisfying the goal",
        "B": "Compile a class",
        "C": "Collect garbage",
        "D": "Display a GUI"
      },
      "answer": "A",
      "answerText": "Find substitutions/values satisfying the goal",
      "explanation": "Official syllabus answer for Unit 6 MCQ #2 is Option A: Find substitutions/values satisfying the goal.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q15",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 15,
      "question": "map separates:",
      "options": {
        "A": "Transformation logic from list traversal",
        "B": "Exception handlers from events",
        "C": "Heap from stack",
        "D": "Classes from objects"
      },
      "answer": "A",
      "answerText": "Transformation logic from list traversal",
      "explanation": "Official syllabus answer for Unit 6 MCQ #3 is Option A: Transformation logic from list traversal.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q16",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 16,
      "question": "In Lisp, cdr returns:",
      "options": {
        "A": "The remainder of a list after its first element",
        "B": "The first element",
        "C": "A new class",
        "D": "The list's sum"
      },
      "answer": "A",
      "answerText": "The remainder of a list after its first element",
      "explanation": "Official syllabus answer for Unit 6 MCQ #4 is Option A: The remainder of a list after its first element.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q17",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 17,
      "question": "Semispace collection copies live objects from:",
      "options": {
        "A": "From-space to to-space",
        "B": "Stack to source code",
        "C": "Old objects to the parser",
        "D": "A rule to a query"
      },
      "answer": "A",
      "answerText": "From-space to to-space",
      "explanation": "Official syllabus answer for Unit 6 MCQ #5 is Option A: From-space to to-space.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q18",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 18,
      "question": "Generational collection relies on the hypothesis that:",
      "options": {
        "A": "Many objects become unreachable young",
        "B": "Objects never die",
        "C": "Every object is global",
        "D": "All objects form cycles"
      },
      "answer": "A",
      "answerText": "Many objects become unreachable young",
      "explanation": "Official syllabus answer for Unit 6 MCQ #6 is Option A: Many objects become unreachable young.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q19",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 19,
      "question": "A subclass-specialization relation is modeled by:",
      "options": {
        "A": "Inheritance",
        "B": "Filtering",
        "C": "Unification",
        "D": "Reference counting"
      },
      "answer": "A",
      "answerText": "Inheritance",
      "explanation": "Official syllabus answer for Unit 6 MCQ #7 is Option A: Inheritance.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_u6_q20",
      "subjectId": "ppl",
      "chapterId": "ppl_u6",
      "category": "Unit 6 MCQ (Supplementary)",
      "type": "mcq",
      "qnum": 20,
      "question": "Dynamic dispatch selects an overridden method based on:",
      "options": {
        "A": "The runtime object's type",
        "B": "Only source line number",
        "C": "The list length",
        "D": "The query's punctuation"
      },
      "answer": "A",
      "answerText": "The runtime object's type",
      "explanation": "Official syllabus answer for Unit 6 MCQ #8 is Option A: The runtime object's type.",
      "source": "PPL_Complete_Syllabus_Question_Bank.docx"
    },
    {
      "id": "ppl_mid_mcq_1",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 1,
      "question": "Which language was primarily developed for scientific and numerical computations?",
      "options": {
        "A": "COBOL",
        "B": "FORTRAN",
        "C": "Java",
        "D": "C++"
      },
      "answer": "B",
      "answerText": "FORTRAN",
      "explanation": "Mid-Sem exam solution: Option B (FORTRAN).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_2",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 2,
      "question": "Which language was developed by Dennis Ritchie at Bell Labs?",
      "options": {
        "A": "FORTRAN",
        "B": "Java",
        "C": "C",
        "D": "Python"
      },
      "answer": "C",
      "answerText": "C",
      "explanation": "Mid-Sem exam solution: Option C (C).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_3",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 3,
      "question": "Java is commonly described as using which approach?",
      "options": {
        "A": "Only interpretation",
        "B": "Only direct machine-code compilation",
        "C": "Compilation to bytecode followed by JVM execution/JIT compilation",
        "D": "No translation"
      },
      "answer": "C",
      "answerText": "Compilation to bytecode followed by JVM execution/JIT compilation",
      "explanation": "Mid-Sem exam solution: Option C (Compilation to bytecode followed by JVM execution/JIT compilation).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_4",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 4,
      "question": "Which of the following is NOT a programming language?",
      "options": {
        "A": "FORTRAN",
        "B": "Python",
        "C": "Pseudocode",
        "D": "Java"
      },
      "answer": "C",
      "answerText": "Pseudocode",
      "explanation": "Mid-Sem exam solution: Option C (Pseudocode).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_5",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 5,
      "question": "Assembly language is:",
      "options": {
        "A": "A high-level language",
        "B": "A machine-independent language",
        "C": "A low-level language using symbolic instructions",
        "D": "Pseudocode"
      },
      "answer": "C",
      "answerText": "A low-level language using symbolic instructions",
      "explanation": "Mid-Sem exam solution: Option C (A low-level language using symbolic instructions).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_6",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 6,
      "question": "Which programming language strongly influenced the development of C?",
      "options": {
        "A": "B",
        "B": "Java",
        "C": "Python",
        "D": "FORTRAN"
      },
      "answer": "D",
      "answerText": "FORTRAN",
      "explanation": "Mid-Sem exam solution: Option D (FORTRAN).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_7",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 7,
      "question": "Which of the following is the best description of pseudocode?",
      "options": {
        "A": "Executable machine code",
        "B": "A formal programming language with strict syntax",
        "C": "An informal representation of an algorithm using programming-like statements",
        "D": "Assembly code"
      },
      "answer": "C",
      "answerText": "An informal representation of an algorithm using programming-like statements",
      "explanation": "Mid-Sem exam solution: Option C (An informal representation of an algorithm using programming-like statements).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_8",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 8,
      "question": "What happens when this program is interpreted?",
      "options": {
        "A": "Nothing is printed because the program contains an error",
        "B": "15 is printed, then a runtime error occurs",
        "C": "15, Hello are printed",
        "D": "Compilation error occurs before execution"
      },
      "answer": "B",
      "answerText": "15 is printed, then a runtime error occurs",
      "explanation": "Mid-Sem exam solution: Option B (15 is printed, then a runtime error occurs).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_9",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 9,
      "question": "Which statement is correct?",
      "options": {
        "A": "No statement executes because of the error",
        "B": "30 is printed, then execution stops at 10 / 0",
        "C": "30 and End are printed",
        "D": "End is printed before the error"
      },
      "answer": "B",
      "answerText": "30 is printed, then execution stops at 10 / 0",
      "explanation": "Mid-Sem exam solution: Option B (30 is printed, then execution stops at 10 / 0).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_10",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 10,
      "question": "What is the most appropriate result with a typical C compiler?",
      "options": {
        "A": "10 is printed and then execution stops",
        "B": "Compiler reports an error before successful execution",
        "C": "10 and garbage value are printed",
        "D": "Interpreter executes the first printf"
      },
      "answer": "B",
      "answerText": "Compiler reports an error before successful execution",
      "explanation": "Mid-Sem exam solution: Option B (Compiler reports an error before successful execution).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_11",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 11,
      "question": "Which sequence best represents the execution process?",
      "options": {
        "A": "Java source → Machine code directly → CPU",
        "B": "Java source → Bytecode → JVM → Execution",
        "C": "Java source → Assembly → CPU",
        "D": "Java source → Pseudocode → JVM"
      },
      "answer": "B",
      "answerText": "Java source → Bytecode → JVM → Execution",
      "explanation": "Mid-Sem exam solution: Option B (Java source → Bytecode → JVM → Execution).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_12",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 12,
      "question": "Why is this useful?",
      "options": {
        "A": "It eliminates bytecode",
        "B": "Frequently executed code can be converted into optimized native machine code",
        "C": "It converts Java into pseudocode",
        "D": "It prevents runtime execution"
      },
      "answer": "B",
      "answerText": "Frequently executed code can be converted into optimized native machine code",
      "explanation": "Mid-Sem exam solution: Option B (Frequently executed code can be converted into optimized native machine code).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_13",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 13,
      "question": "If the language implementation is interpreted, what is the most likely behavior?",
      "options": {
        "A": "A is printed, then execution stops because of the type error",
        "B": "Nothing is printed",
        "C": "A and B are printed",
        "D": "The program is converted completely into machine code first"
      },
      "answer": "A",
      "answerText": "A is printed, then execution stops because of the type error",
      "explanation": "Mid-Sem exam solution: Option A (A is printed, then execution stops because of the type error).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_14",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 14,
      "question": "Is this statement completely correct?",
      "options": {
        "A": "Yes",
        "B": "No, implementations such as CPython first compile source into bytecode, which is then executed by a virtual machine",
        "C": "Yes, because Python executes directly as machine code",
        "D": "No, because Python is always converted directly to assembly"
      },
      "answer": "B",
      "answerText": "No, implementations such as CPython first compile source into bytecode, which is then executed by a virtual machine",
      "explanation": "Mid-Sem exam solution: Option B (No, implementations such as CPython first compile source into bytecode, which is then executed by a virtual machine).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_15",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 15,
      "question": "Which implementation characteristic is most helpful here?",
      "options": {
        "A": "Interpretation",
        "B": "Linking",
        "C": "Assembly",
        "D": "Static binding"
      },
      "answer": "A",
      "answerText": "Interpretation",
      "explanation": "Mid-Sem exam solution: Option A (Interpretation).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_16",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 16,
      "question": "Which feature of C gives it a major advantage for low-level systems programming?",
      "options": {
        "A": "Built-in matrix operations",
        "B": "Pointer manipulation and direct memory access",
        "C": "Automatic garbage collection",
        "D": "Scientific notation syntax"
      },
      "answer": "B",
      "answerText": "Pointer manipulation and direct memory access",
      "explanation": "Mid-Sem exam solution: Option B (Pointer manipulation and direct memory access).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_tf_17",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Right / Wrong Diagnostic",
      "type": "true_false",
      "qnum": 17,
      "question": "FORTRAN was developed before C.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement is TRUE.",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_tf_18",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Right / Wrong Diagnostic",
      "type": "true_false",
      "qnum": 18,
      "question": "12. C was designed at Bell Labs and became important for operating-system development.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement is TRUE.",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_tf_19",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Right / Wrong Diagnostic",
      "type": "true_false",
      "qnum": 19,
      "question": "13. FORTRAN cannot perform general-purpose programming.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement is FALSE.",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_tf_20",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Right / Wrong Diagnostic",
      "type": "true_false",
      "qnum": 20,
      "question": "14. C is generally considered closer to hardware than traditional high-level scientific languages such as FORTRAN.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "A",
      "answerText": "TRUE",
      "explanation": "Statement is TRUE.",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_tf_21",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Right / Wrong Diagnostic",
      "type": "true_false",
      "qnum": 21,
      "question": "15. FORTRAN and C use identical array indexing conventions.",
      "options": {
        "A": "True",
        "B": "False"
      },
      "answer": "B",
      "answerText": "FALSE",
      "explanation": "Statement is FALSE.",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_22",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 22,
      "question": "Which historical language would be the more natural choice?",
      "options": {
        "A": "FORTRAN",
        "B": "C",
        "C": "Assembly only",
        "D": "HTML"
      },
      "answer": "A",
      "answerText": "FORTRAN",
      "explanation": "Mid-Sem exam solution: Option A (FORTRAN).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_23",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 23,
      "question": "Which statement is correct?",
      "options": {
        "A": "All three require explicit declaration of the variable type",
        "B": "C and Java require explicit type declaration, while Python generally uses dynamic typing",
        "C": "Only Python requires type declaration",
        "D": "None of them use variables"
      },
      "answer": "B",
      "answerText": "C and Java require explicit type declaration, while Python generally uses dynamic typing",
      "explanation": "Mid-Sem exam solution: Option B (C and Java require explicit type declaration, while Python generally uses dynamic typing).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_24",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 24,
      "question": "A programming language designer wants to increase reliability by enforcing strict type checking. What is a likely trade-off?",
      "options": {
        "A": "Increased flexibility",
        "B": "Reduced programmer freedom/flexibility",
        "C": "Elimination of compilation",
        "D": "Faster hardware execution"
      },
      "answer": "B",
      "answerText": "Reduced programmer freedom/flexibility",
      "explanation": "Mid-Sem exam solution: Option B (Reduced programmer freedom/flexibility).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_25",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 25,
      "question": "Consider a language that allows programmers to directly manipulate memory using pointers. What is the most likely trade-off?",
      "options": {
        "A": "Greater control but potentially lower reliability",
        "B": "Greater reliability and no additional complexity",
        "C": "Less flexibility and less control",
        "D": "No effect on program safety"
      },
      "answer": "A",
      "answerText": "Greater control but potentially lower reliability",
      "explanation": "Mid-Sem exam solution: Option A (Greater control but potentially lower reliability).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_26",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 26,
      "question": "A language designer adds many implicit type conversions to make programs easier to write. What is a possible disadvantage?",
      "options": {
        "A": "Reduced readability and increased possibility of unexpected behavior",
        "B": "No flexibility",
        "C": "No runtime support",
        "D": "Elimination of type checking"
      },
      "answer": "A",
      "answerText": "Reduced readability and increased possibility of unexpected behavior",
      "explanation": "Mid-Sem exam solution: Option A (Reduced readability and increased possibility of unexpected behavior).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_27",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 27,
      "question": "Which language feature can improve writability but potentially reduce reliability?",
      "options": {
        "A": "Extensive implicit conversions",
        "B": "Strict type checking",
        "C": "Array-bounds checking",
        "D": "Restricted pointer operations"
      },
      "answer": "A",
      "answerText": "Extensive implicit conversions",
      "explanation": "Mid-Sem exam solution: Option A (Extensive implicit conversions).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_28",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 28,
      "question": "Which trade-off is most clearly illustrated?",
      "options": {
        "A": "Efficiency vs reliability",
        "B": "Readability vs syntax",
        "C": "Portability vs compilation",
        "D": "Writability vs keywords"
      },
      "answer": "A",
      "answerText": "Efficiency vs reliability",
      "explanation": "Mid-Sem exam solution: Option A (Efficiency vs reliability).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_29",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 29,
      "question": "Which programming paradigm focuses on describing what should be computed rather than explicitly specifying how?",
      "options": {
        "A": "Imperative",
        "B": "Declarative",
        "C": "Procedural",
        "D": "Assembly"
      },
      "answer": "B",
      "answerText": "Declarative",
      "explanation": "Mid-Sem exam solution: Option B (Declarative).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_30",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 30,
      "question": "2. C is primarily classified as a:",
      "options": {
        "A": "Functional language",
        "B": "Logic programming language",
        "C": "Procedural/imperative language",
        "D": "Markup language"
      },
      "answer": "C",
      "answerText": "Procedural/imperative language",
      "explanation": "Mid-Sem exam solution: Option C (Procedural/imperative language).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_31",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 31,
      "question": "3. Which language is strongly associated with functional programming?",
      "options": {
        "A": "Haskell",
        "B": "Assembly",
        "C": "COBOL",
        "D": "C"
      },
      "answer": "A",
      "answerText": "Haskell",
      "explanation": "Mid-Sem exam solution: Option A (Haskell).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_32",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 32,
      "question": "4. Which programming language is particularly associated with logic programming?",
      "options": {
        "A": "Java",
        "B": "Prolog",
        "C": "C",
        "D": "FORTRAN"
      },
      "answer": "B",
      "answerText": "Prolog",
      "explanation": "Mid-Sem exam solution: Option B (Prolog).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_33",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 33,
      "question": "5. Which type of language is most closely associated with direct hardware manipulation?",
      "options": {
        "A": "Assembly language",
        "B": "SQL",
        "C": "Python",
        "D": "Haskell"
      },
      "answer": "A",
      "answerText": "Assembly language",
      "explanation": "Mid-Sem exam solution: Option A (Assembly language).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_34",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 34,
      "question": "6. Which language is commonly used for scientific and numerical computing?",
      "options": {
        "A": "FORTRAN",
        "B": "HTML",
        "C": "Prolog",
        "D": "SQL"
      },
      "answer": "A",
      "answerText": "FORTRAN",
      "explanation": "Mid-Sem exam solution: Option A (FORTRAN).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_35",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 35,
      "question": "7. Which language is widely used for database querying?",
      "options": {
        "A": "SQL",
        "B": "Assembly",
        "C": "C",
        "D": "Haskell"
      },
      "answer": "A",
      "answerText": "SQL",
      "explanation": "Mid-Sem exam solution: Option A (SQL).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_36",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 36,
      "question": "8. Which programming approach is most closely associated with objects, classes, inheritance and polymorphism?",
      "options": {
        "A": "Functional",
        "B": "Object-oriented",
        "C": "Logic",
        "D": "Assembly"
      },
      "answer": "B",
      "answerText": "Object-oriented",
      "explanation": "Mid-Sem exam solution: Option B (Object-oriented).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_37",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 37,
      "question": "9. Which of the following is a common application of C?",
      "options": {
        "A": "Operating systems",
        "B": "Database queries only",
        "C": "Web-page markup",
        "D": "Spreadsheet formatting"
      },
      "answer": "A",
      "answerText": "Operating systems",
      "explanation": "Mid-Sem exam solution: Option A (Operating systems).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    },
    {
      "id": "ppl_mid_mcq_38",
      "subjectId": "ppl",
      "chapterId": "ppl_midsem",
      "category": "Mid-Sem Core MCQ",
      "type": "mcq",
      "qnum": 38,
      "question": "10. Python is widely used in:",
      "options": {
        "A": "Data science and AI",
        "B": "Only operating-system kernels",
        "C": "Only hardware programming",
        "D": "Only database management"
      },
      "answer": "A",
      "answerText": "Data science and AI",
      "explanation": "Mid-Sem exam solution: Option A (Data science and AI).",
      "source": "IMP QUESTIONS MID SEM PPL.docx"
    }
  ]
};
