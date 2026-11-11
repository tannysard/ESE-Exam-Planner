import os
import re
import subprocess
import markdown
import pypdf

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
if not os.path.exists(CHROME_PATH):
    CHROME_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

MD_FILES = [
    "00_Master_Question_Bank_Overview.md",
    "Question_Bank_Chapter_1_Introduction.md",
    "Question_Bank_Chapter_2_Pins_Signals_Architecture.md",
    "Question_Bank_Chapter_3_Instruction_Set.md"
]

CSS_STYLES = """
@page {
    size: A4;
    margin: 18mm 16mm 18mm 16mm;
}
@media print {
    body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }
}
body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #1e293b;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
}
h1 {
    color: #0f172a;
    font-size: 17pt;
    font-weight: 700;
    border-bottom: 2.5px solid #2563eb;
    padding-bottom: 6px;
    margin-top: 0;
    margin-bottom: 12px;
}
h2 {
    color: #1e40af;
    font-size: 13pt;
    font-weight: 600;
    border-bottom: 1px solid #bfdbfe;
    padding-bottom: 4px;
    margin-top: 16px;
    margin-bottom: 10px;
    page-break-after: avoid;
}
h3 {
    color: #1d4ed8;
    font-size: 11.5pt;
    font-weight: 600;
    background: #eff6ff;
    padding: 6px 12px;
    border-left: 4px solid #2563eb;
    border-radius: 3px;
    margin-top: 18px;
    margin-bottom: 10px;
    page-break-after: avoid;
}
h4 {
    color: #0f172a;
    font-size: 10.5pt;
    font-weight: 600;
    margin-top: 14px;
    margin-bottom: 6px;
    page-break-after: avoid;
}
p {
    margin-top: 4px;
    margin-bottom: 8px;
}
strong {
    color: #0f172a;
}
hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 14px 0;
}
pre, code {
    font-family: 'Consolas', 'Courier New', monospace;
}
pre {
    background-color: #0f172a;
    color: #f8fafc;
    border: 1px solid #1e293b;
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 8.5pt;
    line-height: 1.35;
    white-space: pre-wrap;
    word-break: break-all;
    page-break-inside: avoid;
    margin: 8px 0 12px 0;
}
p code, li code, td code {
    background-color: #f1f5f9;
    color: #b91c1c;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 9.5pt;
    border: 1px solid #e2e8f0;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: 9pt;
    page-break-inside: avoid;
}
th, td {
    border: 1px solid #cbd5e1;
    padding: 6px 10px;
    text-align: left;
    vertical-align: top;
}
th {
    background-color: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}
tr:nth-child(even) {
    background-color: #f8fafc;
}
ul, ol {
    margin-top: 4px;
    margin-bottom: 8px;
    padding-left: 20px;
}
li {
    margin-bottom: 3px;
}
.question-block {
    page-break-inside: avoid;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 1px dashed #e2e8f0;
}
"""

def clean_math(text):
    # Common LaTeX substitutions for clean offline HTML rendering
    # Overlines
    text = re.sub(r'\\overline\{\\text\{([^}]+)\}\}', r'<span style="text-decoration: overline; font-weight:600;">\1</span>', text)
    text = re.sub(r'\\overline\{([^}]+)\}', r'<span style="text-decoration: overline; font-weight:600;">\1</span>', text)
    
    # Subscripts & Superscripts
    text = re.sub(r'(\d+)\^\{(\w+)\}', r'\1<sup>\2</sup>', text)
    text = re.sub(r'2\^(\d+)', r'2<sup>\1</sup>', text)
    text = re.sub(r'([A-Za-z]+)_\{([^{}]+)\}', r'\1<sub>\2</sub>', text)
    text = re.sub(r'([A-Za-z]+)_([0-9a-zA-Z]+)', r'\1<sub>\2</sub>', text)
    
    # Math symbols
    text = text.replace(r'\times', '&times;')
    text = text.replace(r'\approx', '&approx;')
    text = text.replace(r'\le', '&le;')
    text = text.replace(r'\ge', '&ge;')
    text = text.replace(r'\neq', '&ne;')
    text = text.replace(r'\oplus', '&oplus;')
    text = text.replace(r'\rightarrow', '&rarr;')
    text = text.replace(r'\leftarrow', '&larr;')
    text = text.replace(r'\Omega', '&Omega;')
    text = text.replace(r'\mu', '&mu;')
    text = text.replace(r'\pmod', 'mod')
    text = re.sub(r'\\text\{([^}]+)\}', r'\1', text)
    text = re.sub(r'\\mathbf\{([^}]+)\}', r'<strong>\1</strong>', text)
    
    # Clean leftover dollar signs
    text = re.sub(r'\$\$([^\$]+)\$\$', r'<div style="text-align:center; margin:6px 0; font-weight:500;">\1</div>', text)
    text = re.sub(r'\$([^\$]+)\$', r'<span style="font-weight:500;">\1</span>', text)
    
    return text

def convert_md_file(md_filename):
    pdf_filename = os.path.splitext(md_filename)[0] + ".pdf"
    html_filename = os.path.splitext(md_filename)[0] + ".html"
    
    print(f"\nProcessing {md_filename} -> {pdf_filename}...")
    
    with open(md_filename, "r", encoding="utf-8") as f:
        md_text = f.read()
        
    cleaned_text = clean_math(md_text)
    
    # Convert markdown to html
    html_body = markdown.markdown(cleaned_text, extensions=['extra', 'tables'])
    
    full_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{os.path.splitext(md_filename)[0]}</title>
<style>
{CSS_STYLES}
</style>
</head>
<body>
{html_body}
</body>
</html>"""

    with open(html_filename, "w", encoding="utf-8") as f:
        f.write(full_html)
        
    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={os.path.abspath(pdf_filename)}",
        os.path.abspath(html_filename)
    ]
    
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error running Chrome for {md_filename}: {res.stderr}")
        return False
        
    if os.path.exists(pdf_filename):
        size = os.path.getsize(pdf_filename)
        reader = pypdf.PdfReader(pdf_filename)
        pages = len(reader.pages)
        print(f"Successfully generated {pdf_filename} ({size/1024:.1f} KB, {pages} pages)")
        # Clean up temporary html
        try:
            os.remove(html_filename)
        except OSError:
            pass
        return True
    else:
        print(f"Failed to generate {pdf_filename}")
        return False

def main():
    print(f"Using browser at: {CHROME_PATH}")
    success_count = 0
    for md_file in MD_FILES:
        if os.path.exists(md_file):
            if convert_md_file(md_file):
                success_count += 1
        else:
            print(f"File not found: {md_file}")
            
    print(f"\nCompleted: {success_count}/{len(MD_FILES)} PDFs successfully generated!")

if __name__ == "__main__":
    main()
