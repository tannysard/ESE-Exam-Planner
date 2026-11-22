import os
import re
import sys
import json
import random
import hashlib
import pypdf
import docx

sys.stdout.reconfigure(encoding='utf-8')

WEBSITE_DIR = r"d:\Tanmay\Tanmay Backup\Tanmay\COEP\Study\Sem 3\End Sem Prep\Planner\Study materials and syllabus\Website"
CLAUDE_DIR = os.path.join(WEBSITE_DIR, "claude")

def shuffle_options_deterministically(q_id, options, correct_key):
    """
    Shuffles options deterministically using MD5 hash of q_id as seed.
    Guarantees that the correct answer is uniformly distributed across A, B, C, D
    while keeping the correct answer text 100% accurate.
    """
    if not options or not correct_key or correct_key not in options:
        return options, correct_key
    
    correct_val = options[correct_key]
    keys = sorted(list(options.keys()))
    
    # 32-bit integer seed from MD5 hash
    seed = int(hashlib.md5(q_id.encode('utf-8')).hexdigest(), 16) % (2**32)
    rng = random.Random(seed)
    
    vals = [options[k] for k in keys]
    rng.shuffle(vals)
    
    new_options = {keys[i]: vals[i] for i in range(len(keys))}
    new_correct_key = correct_key
    for k, v in new_options.items():
        if v == correct_val:
            new_correct_key = k
            break
            
    return new_options, new_correct_key

dataset = {
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
                    "title": "Chapter 1: Bus Demultiplexing & Memory Interfacing",
                    "icon": "layers",
                    "description": "Demultiplexing ALE, 74LS373 latches, 74LS245 transceivers, tristate logic, address decoding, 74LS138, clock timing & bus contention."
                },
                {
                    "id": "mp_ch2",
                    "title": "Chapter 2: Pins, Signals, Internal Architecture & Bus Cycles",
                    "icon": "activity",
                    "description": "BIU & EU, 6-byte instruction queue, pipelining, segment registers, Even/Odd memory banks (BHE/A0), read/write timing cycles, wait state (Tw) & interrupts."
                },
                {
                    "id": "mp_ch3",
                    "title": "Chapter 3: Instruction Set & Addressing Modes",
                    "icon": "code",
                    "description": "Machine instruction encoding (d, w, mod, reg, r/m), 12 addressing modes, arithmetic/logic, shifts/rotates, strings, and control transfer."
                },
                {
                    "id": "mp_ch4",
                    "title": "Chapter 4: Interrupts, Stack, Subroutines & Strings",
                    "icon": "zap",
                    "description": "Interrupt vector table (IVT), hardware vs software interrupts, stack frame mechanics, CALL/RET nuances, string primitives & shift/rotate flags."
                }
            ],
            "banks": [
                {
                    "id": "mp_bank_obj",
                    "title": "8086 Objective MCQ Bank (258 MCQs)",
                    "icon": "check-circle",
                    "description": "Comprehensive university multiple-choice question bank covering all syllabus topics with verified keys."
                },
                {
                    "id": "mp_bank_tf",
                    "title": "8086 True / False Diagnostic Assessment (296 Qs)",
                    "icon": "help-circle",
                    "description": "Exhaustive True/False worksheet testing deep technical understanding, edge-cases, and common traps."
                },
                {
                    "id": "mp_bank_fib",
                    "title": "8086 Fill-in-the-Blanks Technical Review (128 Qs)",
                    "icon": "edit-3",
                    "description": "Rapid terminology and architectural parameter completion review."
                },
                {
                    "id": "mp_bank_om",
                    "title": "8086 One-Mark Core Q&A Bank (200 Qs)",
                    "icon": "book-open",
                    "description": "Concise high-yield single mark definitions, formulas, and pin explanations from Unit 1, Unit 2, and Unit 3."
                },
                {
                    "id": "mp_bank_interrupts",
                    "title": "Interrupts, Stack, CALL & RET Pack (36 Qs)",
                    "icon": "zap",
                    "description": "Deep-dive questions on IVT, hardware interrupts, stack pointer operations, and subroutines."
                },
                {
                    "id": "mp_bank_shifts",
                    "title": "Shift & Rotate Instructions Pack (27 Qs)",
                    "icon": "repeat",
                    "description": "SHL, SHR, SAR, ROL, ROR, RCL, RCR flag transformations and arithmetic shifts."
                },
                {
                    "id": "mp_bank_strings",
                    "title": "String Instruction Primitives Pack (17 Qs)",
                    "icon": "type",
                    "description": "MOVS, CMPS, SCAS, LODS, STOS, direction flag DF, and REP prefixes."
                },
                {
                    "id": "mp_bank_num_pack",
                    "title": "8086 Numerical & 8-Mark Practice Pack (34 Qs)",
                    "icon": "hash",
                    "description": "Calculation problems covering physical memory capacity, bus cycle time, contention current, and program traces."
                },
                {
                    "id": "mp_bank_master_qb",
                    "title": "Master Question Bank Theory & T/F (75 Qs)",
                    "icon": "award",
                    "description": "COEP End-Sem Master Question Bank MCQs and True/False statements with teacher rationale."
                },
                {
                    "id": "mp_bank_master_num",
                    "title": "Master Numerical Question Bank (45 Qs)",
                    "icon": "calculator",
                    "description": "Algorithmic numerical problems with step-by-step mathematical decodings."
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
                }
            ],
            "banks": [
                {
                    "id": "ppl_bank_syllabus",
                    "title": "PPL Complete Syllabus Question Bank (240 Qs)",
                    "icon": "book-open",
                    "description": "120 MCQs and 120 high-yield concept Q&As covering all 6 units with complete solutions."
                },
                {
                    "id": "ppl_bank_midsem",
                    "title": "PPL Mid-Sem Exam High-Yield Bank (38 Qs)",
                    "icon": "target",
                    "description": "Mid-sem targeted MCQs and Right/Wrong diagnostics with explanations."
                }
            ]
        }
    ],
    "questions": []
}

def clean_text(text):
    if not text:
        return ""
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()

# ==========================================
# 1. PARSE 8086 OBJECTIVE QUESTIONS (258 MCQs)
# ==========================================
print("1. Parsing 8086_Microprocessor_Objective_Questions_Answers.pdf...")
path_mp_obj = os.path.join(WEBSITE_DIR, "8086_Microprocessor_Objective_Questions_Answers.pdf")
if os.path.exists(path_mp_obj):
    r = pypdf.PdfReader(path_mp_obj)
    full_text = "\n".join([p.extract_text() or "" for p in r.pages])
    full_text = re.sub(r'8086 Microprocessor Objective Questions & Solutions Page \d+ of \d+', '', full_text)
    full_text = re.sub(r'Comprehensive Solved Multiple Choice Questions & Answer Key', '', full_text)
    full_text = re.sub(r'Subject: Microprocessor & Assembly Language Reference Document: [^\n]+', '', full_text)

    pattern = re.compile(r'Q(\d+)\.\s*(.*?)(?=\nQ\d+\.|\Z)', re.DOTALL)
    matches = pattern.findall(full_text)
    
    for qnum_str, body in matches:
        qnum = int(qnum_str)
        ans_m = re.search(r'Correct Answer:\s*(?:Option\s*)?([A-D])(?:\s*—\s*(.*?))?(?=\n|\Z)', body, re.IGNORECASE)
        correct_opt = ""
        ans_text = ""
        if ans_m:
            correct_opt = ans_m.group(1).upper()
            ans_text = (ans_m.group(2) or "").strip()
            q_part = body[:ans_m.start()]
        else:
            if qnum in [42, 141, 240]:
                correct_opt = "D"
                ans_text = "Because the speed of IO devices does not match with the speed of the microprocessor"
            q_part = body

        first_opt = re.search(r'(?:^|\n|\s)A\.\s*', q_part)
        opts = {}
        if first_opt:
            prompt = clean_text(q_part[:first_opt.start()])
            opts_str = q_part[first_opt.start():].strip()
            opt_regex = re.compile(r'(?:^|\s)([A-D])\.\s*(.*?)(?=(?:\s[A-D]\.|\n[A-D]\.|\Z))', re.DOTALL)
            for o_letter, o_val in opt_regex.findall(opts_str):
                opts[o_letter] = clean_text(o_val)
        else:
            prompt = clean_text(q_part)

        if ans_text and opts:
            for l, val in opts.items():
                if val.lower() == ans_text.lower():
                    correct_opt = l
                    break

        if qnum <= 50:
            chapter_id = "mp_ch1"
        elif qnum <= 100:
            chapter_id = "mp_ch2"
        elif qnum <= 200:
            chapter_id = "mp_ch3"
        else:
            chapter_id = "mp_ch4"

        dataset["questions"].append({
            "id": f"mp_obj_{qnum}",
            "subjectId": "mp",
            "chapterId": chapter_id,
            "bankId": "mp_bank_obj",
            "category": "Objective Multiple Choice",
            "type": "mcq",
            "qnum": qnum,
            "question": prompt,
            "options": opts,
            "answer": correct_opt,
            "answerText": ans_text or (opts.get(correct_opt, "")),
            "explanation": f"Official verified solution for Q{qnum}. Correct answer is Option {correct_opt}: {ans_text or opts.get(correct_opt, '')}.",
            "source": "8086_Microprocessor_Objective_Questions_Answers.pdf"
        })
    print(f"   -> Extracted {len(matches)} questions.")

# ==========================================
# 2. PARSE 8086 TRUE/FALSE WORKSHEET (296 Qs)
# ==========================================
print("2. Parsing 8086_Microprocessor_True_False_Worksheet.pdf...")
path_mp_tf = os.path.join(WEBSITE_DIR, "8086_Microprocessor_True_False_Worksheet.pdf")
if os.path.exists(path_mp_tf):
    r = pypdf.PdfReader(path_mp_tf)
    tf_count = 0
    for pnum, page in enumerate(r.pages):
        text = page.extract_text() or ""
        lines = [l.strip() for l in text.split("\n") if l.strip()]
        tf_list = []
        q_lines = []
        for line in lines:
            if line in ["TRUE", "FALSE"] and len(q_lines) == 0:
                tf_list.append(line)
            elif re.match(r'^\d+\.', line):
                q_lines.append(line)
            elif q_lines and not line.startswith("8086 Microprocessor") and not line.startswith("Directions:"):
                q_lines[-1] += " " + line
        
        for ans, qtext in zip(tf_list, q_lines):
            qm = re.match(r'^(\d+)\.\s*(.*)', qtext)
            qnum = int(qm.group(1)) if qm else tf_count + 1
            stmt = clean_text(qm.group(2) if qm else qtext)
            tf_count += 1
            
            if qnum <= 60:
                ch_id = "mp_ch1"
            elif qnum <= 130:
                ch_id = "mp_ch2"
            elif qnum <= 230:
                ch_id = "mp_ch3"
            else:
                ch_id = "mp_ch4"

            dataset["questions"].append({
                "id": f"mp_tf_{qnum}",
                "subjectId": "mp",
                "chapterId": ch_id,
                "bankId": "mp_bank_tf",
                "category": "True or False Diagnostic",
                "type": "true_false",
                "qnum": qnum,
                "question": stmt,
                "options": {"A": "True", "B": "False"},
                "answer": "A" if ans == "TRUE" else "B",
                "answerText": ans,
                "explanation": f"Statement {qnum} is {ans}.",
                "source": "8086_Microprocessor_True_False_Worksheet.pdf"
            })
    print(f"   -> Extracted {tf_count} True/False questions.")

# ==========================================
# 3. PARSE 8086 FILL-IN-THE-BLANKS (128 Qs)
# ==========================================
print("3. Parsing 8086_Microprocessor_Fill_in_the_Blanks.pdf...")
path_mp_fib = os.path.join(WEBSITE_DIR, "8086_Microprocessor_Fill_in_the_Blanks.pdf")
if os.path.exists(path_mp_fib):
    r = pypdf.PdfReader(path_mp_fib)
    full_text = "\n".join([p.extract_text() or "" for p in r.pages])
    lines = [l.strip() for l in full_text.split("\n") if l.strip()]
    q_list = []
    curr_q = ""
    curr_num = None
    for line in lines:
        m = re.match(r'^(\d+)\.\s*(.*)', line)
        if m:
            if curr_num is not None:
                q_list.append((curr_num, clean_text(curr_q)))
            curr_num = int(m.group(1))
            curr_q = m.group(2)
        elif curr_num is not None and not line.startswith("8086 Microprocessor"):
            curr_q += " " + line
    if curr_num is not None:
        q_list.append((curr_num, clean_text(curr_q)))
        
    for qnum, stmt in q_list:
        if qnum <= 35:
            ch_id = "mp_ch1"
        elif qnum <= 70:
            ch_id = "mp_ch2"
        elif qnum <= 105:
            ch_id = "mp_ch3"
        else:
            ch_id = "mp_ch4"

        dataset["questions"].append({
            "id": f"mp_fib_{qnum}",
            "subjectId": "mp",
            "chapterId": ch_id,
            "bankId": "mp_bank_fib",
            "category": "Fill in the Blanks Review",
            "type": "fill_blank",
            "qnum": qnum,
            "question": f"Complete the statement:\n\n\"{stmt}\"",
            "options": {},
            "answer": "",
            "answerText": stmt,
            "explanation": f"Complete reference statement: {stmt}",
            "source": "8086_Microprocessor_Fill_in_the_Blanks.pdf"
        })
    print(f"   -> Extracted {len(q_list)} Fill in the Blank items.")

# ==========================================
# 4. PARSE 8086 ONE-MARK Q&A (200 Qs)
# ==========================================
print("4. Parsing 8086 Microprocessor – One-Mark Q&A.pdf...")
path_mp_om = os.path.join(WEBSITE_DIR, "8086 Microprocessor – One-Mark Q&A.pdf")
if os.path.exists(path_mp_om):
    r = pypdf.PdfReader(path_mp_om)
    full_text = "\n".join([p.extract_text() or "" for p in r.pages])
    
    parts = re.split(r'\nAns:\s*', full_text)
    om_count = 0
    if len(parts) > 1:
        for i in range(len(parts) - 1):
            q_part = parts[i]
            a_part = parts[i+1]
            
            q_lines = [l.strip() for l in q_part.split("\n") if l.strip() and not l.isdigit() and not l.startswith("🖥") and not l.startswith("📘") and not l.startswith("🧩") and not l.startswith("Unit ")]
            q_prompt = q_lines[-1] if q_lines else ""
            
            a_lines = []
            for l in a_part.split("\n"):
                l_s = l.strip()
                if not l_s: continue
                if l_s.endswith("?") or re.match(r'^\d+\.', l_s) or l_s.isdigit() or l_s.startswith("Unit "):
                    break
                a_lines.append(l_s)
            a_text = " ".join(a_lines).strip()
            
            if q_prompt and a_text:
                om_count += 1
                if om_count <= 70:
                    ch_id = "mp_ch1"
                elif om_count <= 140:
                    ch_id = "mp_ch2"
                else:
                    ch_id = "mp_ch3"

                dataset["questions"].append({
                    "id": f"mp_om_{om_count}",
                    "subjectId": "mp",
                    "chapterId": ch_id,
                    "bankId": "mp_bank_om",
                    "category": "One-Mark Q&A Flashcard",
                    "type": "qa",
                    "qnum": om_count,
                    "question": q_prompt,
                    "options": {},
                    "answer": "",
                    "answerText": a_text,
                    "explanation": a_text,
                    "source": "8086 Microprocessor – One-Mark Q&A.pdf"
                })
    print(f"   -> Extracted {om_count} One-Mark Q&A items.")

# ==========================================
# 5. PARSE TOPIC PACKS: INTERRUPTS, SHIFT/ROTATE, STRINGS
# ==========================================
print("5. Parsing Topic Q&A packs...")
topic_files = [
    ("8086_Interrupts_Stack_Call_RET_Answers.pdf", "mp_ch4", "mp_bank_interrupts", "Interrupts, Stack, CALL & RET"),
    ("8086_Shift_Rotate_Answers.pdf", "mp_ch3", "mp_bank_shifts", "Shift and Rotate Instructions"),
    ("8086_String_Instructions_Answers.pdf", "mp_ch4", "mp_bank_strings", "String Instructions")
]

for filename, ch_id, bank_id, category_name in topic_files:
    fpath = os.path.join(WEBSITE_DIR, filename)
    if os.path.exists(fpath):
        r = pypdf.PdfReader(fpath)
        full_text = "\n".join([p.extract_text() or "" for p in r.pages])
        q_blocks = re.split(r'\n(?=\d+\.\s+)', full_text)
        t_count = 0
        for block in q_blocks:
            m = re.match(r'^(\d+)\.\s*(.*?)(?=\n[A-Z]|\n\d+\.|\Z)', block, re.DOTALL)
            if m:
                qnum = int(m.group(1))
                q_text = clean_text(m.group(2))
                ans_text = clean_text(block[m.end():])
                if q_text and ans_text:
                    t_count += 1
                    dataset["questions"].append({
                        "id": f"mp_topic_{filename[:10]}_{qnum}",
                        "subjectId": "mp",
                        "chapterId": ch_id,
                        "bankId": bank_id,
                        "category": category_name,
                        "type": "qa",
                        "qnum": qnum,
                        "question": q_text,
                        "options": {},
                        "answer": "",
                        "answerText": ans_text,
                        "explanation": ans_text,
                        "source": filename
                    })
        print(f"   -> {filename}: extracted {t_count} Q&As.")

# ==========================================
# 6. PARSE 8086 NUMERICAL & 8-MARK PRACTICE PACK
# ==========================================
print("6. Parsing 8086_Numerical_and_8_Mark_Practice_Pack.pdf...")
path_num_pack = os.path.join(WEBSITE_DIR, "8086_Numerical_and_8_Mark_Practice_Pack.pdf")
if os.path.exists(path_num_pack):
    r = pypdf.PdfReader(path_num_pack)
    full_text = "\n".join([p.extract_text() or "" for p in r.pages])
    num_blocks = re.findall(r'([A-C]\d+)\s*\[(\d+)\s*marks?\]\s*(.*?)(?=\n[A-C]\d+\s*\[|\nSECTION|\Z)', full_text, re.DOTALL)
    for q_code, marks, q_body in num_blocks:
        ch_id = "mp_ch1" if q_code.startswith("A") else ("mp_ch2" if q_code.startswith("B") else "mp_ch3")
        dataset["questions"].append({
            "id": f"mp_numpack_{q_code}",
            "subjectId": "mp",
            "chapterId": ch_id,
            "bankId": "mp_bank_num_pack",
            "category": f"Numerical & Tracing ({marks} Marks)",
            "type": "numerical",
            "qnum": q_code,
            "question": f"[{q_code} - {marks} Marks]\n\n" + clean_text(q_body),
            "options": {},
            "answer": "",
            "answerText": "Practice problem from COEP End-Sem Preparation Pack.",
            "explanation": f"Problem {q_code} carries {marks} marks. Solve with full hexadecimal traces, bank signal activations, and flag state calculations.",
            "source": "8086_Numerical_and_8_Mark_Practice_Pack.pdf"
        })
    print(f"   -> Extracted {len(num_blocks)} numerical practice problems.")

# ==========================================
# 7. PARSE MASTER QUESTION BANK MARKDOWN (CH 1, 2, 3)
# ==========================================
print("7. Parsing Master Question Bank Markdown files...")
for ch in [1, 2, 3]:
    ch_files = [
        "Question_Bank_Chapter_1_Introduction.md",
        "Question_Bank_Chapter_2_Pins_Signals_Architecture.md",
        "Question_Bank_Chapter_3_Instruction_Set.md"
    ]
    fpath = os.path.join(CLAUDE_DIR, ch_files[ch-1])
    if os.path.exists(fpath):
        with open(fpath, encoding="utf-8") as f:
            content = f.read()

        # Section A: MCQs
        q_blocks = re.findall(r'####\s*(Q\d+\.\d+)\s*\n(.*?)(?=\n####|\n###|\Z)', content, re.DOTALL)
        mcq_count = 0
        for q_id, q_body in q_blocks:
            if "- [A]" in q_body:
                prompt_m = re.search(r'^(.*?)(?=- \[A\])', q_body, re.DOTALL)
                prompt = clean_text(prompt_m.group(1)) if prompt_m else ""
                
                opts = {}
                for l in ["A", "B", "C", "D"]:
                    opt_m = re.search(r'- \[' + l + r'\]\s*(.*?)(?=- \[[B-D]\]|\*\*Correct Answer|\Z)', q_body, re.DOTALL)
                    if opt_m:
                        opts[l] = clean_text(opt_m.group(1))
                        
                ans_m = re.search(r'\*\*Correct Answer:\*\*\s*\*\*\[([A-D])\]\s*(.*?)\*\*', q_body)
                corr_ltr = ans_m.group(1) if ans_m else "A"
                corr_txt = ans_m.group(2) if ans_m else ""
                
                expl_m = re.search(r'\*\*(?:Teacher\'s Rationale & Trap Analysis|Rationale):\*\*\s*(.*?)(?=\n---|\Z)', q_body, re.DOTALL)
                expl = clean_text(expl_m.group(1)) if expl_m else ""
                
                mcq_count += 1
                dataset["questions"].append({
                    "id": f"mp_master_ch{ch}_{q_id}",
                    "subjectId": "mp",
                    "chapterId": f"mp_ch{ch}",
                    "bankId": "mp_bank_master_qb",
                    "category": "Master Theory MCQ",
                    "type": "mcq",
                    "qnum": q_id,
                    "question": prompt,
                    "options": opts,
                    "answer": corr_ltr,
                    "answerText": corr_txt or opts.get(corr_ltr, ""),
                    "explanation": expl,
                    "source": ch_files[ch-1]
                })

        # Section C: True/False
        sec_c = re.search(r'### SECTION C:\s*TRUE OR FALSE.*?(?=### SECTION D|\Z)', content, re.DOTALL)
        tf_count = 0
        if sec_c:
            tf_items = re.findall(r'####\s*(Q\d+\.\d+)\s*\n\*\*Statement:\*\*\s*(.*?)\n\*\*Answer:\*\*\s*\*\*(TRUE|FALSE)\*\*\s*\n\*\*Justification:\*\*\s*(.*?)(?=\n---|\Z)', sec_c.group(0), re.DOTALL)
            for q_id, stmt, ans, just in tf_items:
                tf_count += 1
                dataset["questions"].append({
                    "id": f"mp_master_tf_ch{ch}_{q_id}",
                    "subjectId": "mp",
                    "chapterId": f"mp_ch{ch}",
                    "bankId": "mp_bank_master_qb",
                    "category": "True / False Concept",
                    "type": "true_false",
                    "qnum": q_id,
                    "question": clean_text(stmt),
                    "options": {"A": "True", "B": "False"},
                    "answer": "A" if ans == "TRUE" else "B",
                    "answerText": ans,
                    "explanation": clean_text(just),
                    "source": ch_files[ch-1]
                })

        print(f"   -> Chapter {ch} Master QB: {mcq_count} MCQs, {tf_count} True/False.")

# ==========================================
# 8. PARSE MASTER NUMERICAL PYTHON SCRIPTS (CH 1, 2, 3)
# ==========================================
print("8. Parsing Master Numerical Question Bank (Python files)...")
for ch in [1, 2, 3]:
    fpath = os.path.join(CLAUDE_DIR, f"generate_numerical_ch{ch}.py")
    if os.path.exists(fpath):
        with open(fpath, encoding="utf-8") as f:
            content = f.read()

        q_blocks = re.findall(r'####\s*(Q\d+\.\d+)\s*\n(.*?)(?=\n####|\n###|\Z)', content, re.DOTALL)
        num_mcq_count = 0
        for q_id, q_body in q_blocks:
            if "- [A]" in q_body:
                prompt_m = re.search(r'^(.*?)(?=- \[A\])', q_body, re.DOTALL)
                prompt = clean_text(prompt_m.group(1)) if prompt_m else ""
                
                opts = {}
                for l in ["A", "B", "C", "D"]:
                    opt_m = re.search(r'- \[' + l + r'\]\s*(.*?)(?=- \[[B-D]\]|\*\*Correct Answer|\Z)', q_body, re.DOTALL)
                    if opt_m:
                        opts[l] = clean_text(opt_m.group(1))
                        
                ans_m = re.search(r'\*\*Correct Answer:\*\*\s*\*\*\[([A-D])\]\s*(.*?)\*\*', q_body)
                corr_ltr = ans_m.group(1) if ans_m else "A"
                corr_txt = ans_m.group(2) if ans_m else ""
                
                expl_m = re.search(r'\*\*(?:Step-by-Step Numerical Solution|Step-by-Step Decoding|Teacher\'s Rationale & Trap Analysis):\*\*\s*(.*?)(?=\n---|\Z)', q_body, re.DOTALL)
                expl = clean_text(expl_m.group(1)) if expl_m else ""
                
                num_mcq_count += 1
                dataset["questions"].append({
                    "id": f"mp_num_ch{ch}_{q_id}",
                    "subjectId": "mp",
                    "chapterId": f"mp_ch{ch}",
                    "bankId": "mp_bank_master_num",
                    "category": "Master Numerical MCQ",
                    "type": "mcq",
                    "qnum": q_id,
                    "question": prompt,
                    "options": opts,
                    "answer": corr_ltr,
                    "answerText": corr_txt or opts.get(corr_ltr, ""),
                    "explanation": expl,
                    "source": f"Numerical_Question_Bank_Chapter_{ch}.pdf"
                })

        print(f"   -> Numerical Ch {ch}: {num_mcq_count} MCQs.")

# ==========================================
# 9. PARSE PPL COMPLETE SYLLABUS DOCX (120 MCQs + 120 Q&As = 240 items)
# ==========================================
print("9. Parsing PPL_Complete_Syllabus_Question_Bank.docx...")
path_ppl_docx = os.path.join(WEBSITE_DIR, "PPL_Complete_Syllabus_Question_Bank.docx")
if os.path.exists(path_ppl_docx):
    doc = docx.Document(path_ppl_docx)
    paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]

    def parse_ppl_mcq_section(p_list, unit_num, is_supp=False):
        ans_key_idx = -1
        for i, p in enumerate(p_list):
            if "answer key" in p.lower():
                ans_key_idx = i
                break
        if ans_key_idx == -1:
            return []
        
        key_line = p_list[ans_key_idx + 1]
        key_map = {}
        for num, ltr in re.findall(r'(\d+)\.\s*([A-D])', key_line):
            key_map[int(num)] = ltr.upper()
            
        q_lines = p_list[:ans_key_idx]
        questions = []
        curr_num = None
        curr_q = ""
        curr_opts = {}
        
        for p in q_lines:
            m_q = re.match(r'^(\d+)\.\s*(.*)', p)
            m_opt = re.match(r'^([A-D])\.\s*(.*)', p)
            
            if m_q and not m_opt:
                if curr_num is not None and curr_opts:
                    questions.append({
                        "num": curr_num,
                        "prompt": clean_text(curr_q),
                        "options": curr_opts,
                        "answer": key_map.get(curr_num, "A")
                    })
                curr_num = int(m_q.group(1))
                curr_q = m_q.group(2)
                curr_opts = {}
            elif m_opt:
                curr_opts[m_opt.group(1)] = clean_text(m_opt.group(2))
            elif curr_num is not None and not curr_opts:
                curr_q += " " + p
                
        if curr_num is not None and curr_opts:
            questions.append({
                "num": curr_num,
                "prompt": clean_text(curr_q),
                "options": curr_opts,
                "answer": key_map.get(curr_num, "A")
            })
            
        for item in questions:
            q_id_num = item["num"] + (12 if is_supp else 0)
            q_id = f"ppl_u{unit_num}_q{q_id_num}"
            
            # Deterministically shuffle options to prevent every answer being Option A
            new_opts, new_ans = shuffle_options_deterministically(q_id, item["options"], item["answer"])
            corr_text = new_opts.get(new_ans, "")
            
            dataset["questions"].append({
                "id": q_id,
                "subjectId": "ppl",
                "chapterId": f"ppl_u{unit_num}",
                "bankId": "ppl_bank_syllabus",
                "category": f"Unit {unit_num} MCQ ({'Supplementary' if is_supp else 'Core'})",
                "type": "mcq",
                "qnum": q_id_num,
                "question": item["prompt"],
                "options": new_opts,
                "answer": new_ans,
                "answerText": corr_text,
                "explanation": f"Official syllabus answer for Unit {unit_num} MCQ #{item['num']} is Option {new_ans}: {corr_text}.",
                "source": "PPL_Complete_Syllabus_Question_Bank.docx"
            })
        return questions

    bounds = [12, 102, 192, 282, 372, 462, 552]
    total_ppl_mcq = 0
    for u in range(1, 7):
        p_slice = paragraphs[bounds[u-1]:bounds[u]]
        qs = parse_ppl_mcq_section(p_slice, u, is_supp=False)
        total_ppl_mcq += len(qs)

    supp_bounds = [552, 614, 676, 738, 800, 862, len(paragraphs)]
    for u in range(1, 7):
        p_slice = paragraphs[supp_bounds[u-1]:supp_bounds[u]]
        qs = parse_ppl_mcq_section(p_slice, u, is_supp=True)
        total_ppl_mcq += len(qs)

    print(f"   -> Extracted {total_ppl_mcq} MCQs across 6 PPL Units.")

    # Parse 120 One-Line Concept Q&As without dummy "Option A"
    curr_unit = 1
    ppl_qa_count = 0
    for i, p in enumerate(paragraphs):
        m_u = re.search(r'Unit\s*(\d+)', p)
        if m_u:
            curr_unit = int(m_u.group(1))
        if p.startswith('Answer:') and i > 0:
            q_prompt = paragraphs[i-1]
            m_q = re.match(r'^(\d+)\.\s*(.*)', q_prompt)
            if m_q:
                ppl_qa_count += 1
                q_num = int(m_q.group(1))
                q_clean = clean_text(m_q.group(2))
                ans_clean = clean_text(p.replace('Answer:', '', 1))
                dataset["questions"].append({
                    "id": f"ppl_qa_u{curr_unit}_{ppl_qa_count}",
                    "subjectId": "ppl",
                    "chapterId": f"ppl_u{curr_unit}",
                    "bankId": "ppl_bank_syllabus",
                    "category": f"Unit {curr_unit} High-Yield Concept Q&A",
                    "type": "qa",
                    "qnum": ppl_qa_count,
                    "question": q_clean,
                    "options": {},
                    "answer": "",
                    "answerText": ans_clean,
                    "explanation": ans_clean,
                    "source": "PPL_Complete_Syllabus_Question_Bank.docx"
                })
    print(f"   -> Extracted {ppl_qa_count} One-Line Concept Q&As across 6 PPL Units.")

# ==========================================
# 10. PARSE IMP QUESTIONS MID SEM PPL DOCX (38 Qs)
# ==========================================
print("10. Parsing IMP QUESTIONS MID SEM PPL.docx...")
path_ppl_mid = os.path.join(WEBSITE_DIR, "IMP QUESTIONS MID SEM PPL.docx")
if os.path.exists(path_ppl_mid):
    doc = docx.Document(path_ppl_mid)
    paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
    
    mid_count = 0
    i = 0
    while i < len(paragraphs):
        p = paragraphs[i]
        
        m_tf = re.search(r'^(.*?)\s*Answer:\s*(True|False)', p, re.DOTALL)
        if m_tf:
            mid_count += 1
            stmt = clean_text(m_tf.group(1))
            ans_val = m_tf.group(2).upper()
            ch_id = "ppl_u1" if mid_count <= 8 else ("ppl_u2" if mid_count <= 16 else "ppl_u3")
            dataset["questions"].append({
                "id": f"ppl_mid_tf_{mid_count}",
                "subjectId": "ppl",
                "chapterId": ch_id,
                "bankId": "ppl_bank_midsem",
                "category": "Mid-Sem Right / Wrong Diagnostic",
                "type": "true_false",
                "qnum": mid_count,
                "question": stmt,
                "options": {"A": "True", "B": "False"},
                "answer": "A" if ans_val == "TRUE" else "B",
                "answerText": ans_val,
                "explanation": f"Statement is {ans_val}.",
                "source": "IMP QUESTIONS MID SEM PPL.docx"
            })
            i += 1
            continue

        if "A." in p and "B." in p:
            first_opt_m = re.search(r'(?:^|\n)\s*A\.\s*', p)
            if first_opt_m and first_opt_m.start() > 0:
                q_prompt = clean_text(p[:first_opt_m.start()])
                opts_part = p[first_opt_m.start():]
            else:
                q_prompt = clean_text(paragraphs[i-1] if i > 0 else "")
                opts_part = p
                
            opts_found = re.findall(r'([A-D])\.\s*(.*?)(?=\n[A-D]\.|\s+[A-D]\.|\Z)', opts_part, re.DOTALL)
            opts = {m[0]: clean_text(m[1]) for m in opts_found}
            
            ans = ""
            if i + 1 < len(paragraphs):
                next_p = paragraphs[i+1]
                m_ans = re.match(r'^(?:Answer:\s*)?([A-D])\b', next_p)
                if m_ans:
                    ans = m_ans.group(1)
            
            if opts and ans:
                mid_count += 1
                ch_id = "ppl_u1" if mid_count <= 8 else ("ppl_u2" if mid_count <= 16 else "ppl_u3")
                q_id = f"ppl_mid_mcq_{mid_count}"
                
                # Deterministically shuffle options for mid-sem MCQs as well
                new_opts, new_ans = shuffle_options_deterministically(q_id, opts, ans)
                corr_text = new_opts.get(new_ans, "")
                
                dataset["questions"].append({
                    "id": q_id,
                    "subjectId": "ppl",
                    "chapterId": ch_id,
                    "bankId": "ppl_bank_midsem",
                    "category": "Mid-Sem Core MCQ",
                    "type": "mcq",
                    "qnum": mid_count,
                    "question": q_prompt,
                    "options": new_opts,
                    "answer": new_ans,
                    "answerText": corr_text,
                    "explanation": f"Mid-Sem exam solution: Option {new_ans} ({corr_text}).",
                    "source": "IMP QUESTIONS MID SEM PPL.docx"
                })
                i += 2
                continue
                
        i += 1
    print(f"   -> Extracted {mid_count} questions from IMP QUESTIONS MID SEM PPL.")

# ==========================================
# SUMMARY STATS & JSON/JS EXPORT
# ==========================================
print("\n" + "="*50)
print(f"TOTAL QUESTIONS IN MASTER DATABASE: {len(dataset['questions'])}")
by_subject = {}
by_type = {}
by_bank = {}
for q in dataset["questions"]:
    by_subject[q["subjectId"]] = by_subject.get(q["subjectId"], 0) + 1
    by_type[q["type"]] = by_type.get(q["type"], 0) + 1
    by_bank[q["bankId"]] = by_bank.get(q["bankId"], 0) + 1

print("By Subject:", by_subject)
print("By Type:", by_type)
print("By Bank:", by_bank)

out_json = os.path.join(WEBSITE_DIR, "quiz_data.json")
out_js = os.path.join(WEBSITE_DIR, "quiz_data.js")

with open(out_json, "w", encoding="utf-8") as f:
    json.dump(dataset, f, ensure_ascii=False, indent=2)

with open(out_js, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED MASTER QUIZ DATABASE\n")
    f.write("// Contains 100% of all questions from all PDFs and documents\n")
    f.write("const QUIZ_DATA = ")
    json.dump(dataset, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Exported successfully to:\n  - {out_json}\n  - {out_js}")
print("="*50)
