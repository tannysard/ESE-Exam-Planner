/**
 * ============================================================================
 * EXAMQUEST COEP MASTER APPLICATION LOGIC
 * Zero-error answer checking, accessible UX, multi-mode quiz engine
 * ============================================================================
 */

// Application State
const state = {
  subject: 'mp',           // 'mp' | 'ppl'
  mode: 'practice',        // 'practice' | 'exam' | 'flashcards' | 'search'
  sidebarNav: 'chapters',  // 'chapters' | 'banks'
  chapterId: 'all',        // 'all' or specific chapter ID
  bankId: 'all',           // 'all' or specific bank ID
  filterType: 'all',       // 'all' | 'mcq' | 'true_false' | 'fill_blank' | 'qa' | 'numerical'
  filterSource: 'all',     // 'all' or exact source filename
  filterStatus: 'all',     // 'all' | 'unattempted' | 'incorrect' | 'correct' | 'starred'
  
  // Practice / Study state
  filteredQuestions: [],
  currentIndex: 0,
  
  // Exam session state
  exam: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},           // { [qId]: selectedOption }
    flagged: new Set(),    // Set of qIds
    timeRemaining: 0,      // in seconds
    timerInterval: null,
    totalTime: 0
  },
  
  // Flashcard session state
  flashcardIndex: 0,
  flashcardFlipped: false,
  
  // User Persistence (Stored in localStorage)
  userData: {
    answers: {},           // { [qId]: { selected, isCorrect, timestamp } }
    starred: new Set(),    // Set of qIds
    flashcardMastery: {},  // { [qId]: true | false }
    theme: 'light',
    sound: true
  }
};

// Web Audio API for offline tactile sound feedback
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  return audioCtx;
}

function playSound(type) {
  if (!state.userData.sound) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    
    const now = ctx.currentTime;
    if (type === 'correct') {
      // Pleasant major chord (C5 + E5)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now);
      osc2.frequency.setValueAtTime(659.25, now + 0.05);
      
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      
      osc1.start(now);
      osc2.start(now + 0.05);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } else if (type === 'incorrect') {
      // Gentle warning buzz
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(170, now + 0.2);
      
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {
    // Audio optional
  }
}

// LaTeX & Code Formatting Helper
function formatMathAndText(text) {
  if (!text) return '';
  
  // Format code blocks ```assembly ... ```
  let formatted = text.replace(/```(?:assembly|text|python|c)?\n([\s\S]*?)```/g, (match, code) => {
    return `<pre class="question-code"><code>${escapeHtml(code.trim())}</code></pre>`;
  });
  
  // Inline code `...`
  formatted = formatted.replace(/`([^`]+)`/g, '<code style="background:var(--bg-subtle);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:0.9em;">$1</code>');
  
  // LaTeX rendering via KaTeX if available
  if (window.katex && typeof window.katex.renderToString === 'function') {
    // Block math $$...$$
    formatted = formatted.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
      try {
        return `<div style="margin:0.5rem 0;text-align:center;">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`;
      } catch (err) {
        return `<div>${math}</div>`;
      }
    });
    // Inline math $...$
    formatted = formatted.replace(/\$([^\$\n]+?)\$/g, (match, math) => {
      try {
        return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
      } catch (err) {
        return math;
      }
    });
  } else {
    // Clean unicode math fallback
    formatted = formatted.replace(/\$2\^\{20\}\$/g, '2²⁰')
                         .replace(/\$2\^\{22\}\$/g, '2²²')
                         .replace(/\$2\^\{16\}\$/g, '2¹⁶')
                         .replace(/\$2\^\{15\}\$/g, '2¹⁵')
                         .replace(/\$2\^n\$/g, '2ⁿ')
                         .replace(/\$T_1\$/g, 'T₁')
                         .replace(/\$T_2\$/g, 'T₂')
                         .replace(/\$T_3\$/g, 'T₃')
                         .replace(/\$T_4\$/g, 'T₄')
                         .replace(/\$T_w\$/g, 'Tw')
                         .replace(/\$/g, '');
  }
  
  return formatted;
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// LocalStorage Persistence
function loadUserData() {
  try {
    const saved = localStorage.getItem('examquest_user_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.userData.answers = parsed.answers || {};
      state.userData.starred = new Set(parsed.starred || []);
      state.userData.flashcardMastery = parsed.flashcardMastery || {};
      state.userData.theme = parsed.theme || 'light';
      state.userData.sound = parsed.sound !== undefined ? parsed.sound : true;
    }
  } catch (e) {
    console.error('Error loading userData', e);
  }
  
  document.documentElement.setAttribute('data-theme', state.userData.theme);
  updateThemeIcon();
  updateSoundIcon();
  updateGlobalStats();
  updateStarredBadge();
}

function saveUserData() {
  try {
    const toSave = {
      answers: state.userData.answers,
      starred: Array.from(state.userData.starred),
      flashcardMastery: state.userData.flashcardMastery,
      theme: state.userData.theme,
      sound: state.userData.sound
    };
    localStorage.setItem('examquest_user_data', JSON.stringify(toSave));
    updateGlobalStats();
    updateStarredBadge();
  } catch (e) {
    console.error('Error saving userData', e);
  }
}

// Theme & Sound Toggles
function toggleTheme() {
  state.userData.theme = state.userData.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.userData.theme);
  updateThemeIcon();
  saveUserData();
  playSound('click');
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (state.userData.theme === 'dark') {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  } else {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
  }
}

function toggleSound() {
  state.userData.sound = !state.userData.sound;
  updateSoundIcon();
  saveUserData();
  if (state.userData.sound) playSound('click');
}

function updateSoundIcon() {
  const icon = document.getElementById('sound-icon');
  if (!icon) return;
  if (state.userData.sound) {
    icon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
  } else {
    icon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>';
  }
}

// Global Stats Calculation
function updateGlobalStats() {
  const allAnswered = Object.values(state.userData.answers);
  const accuracyElem = document.getElementById('nav-accuracy');
  if (allAnswered.length === 0) {
    if (accuracyElem) accuracyElem.textContent = '100%';
    return;
  }
  const correctCount = allAnswered.filter(a => a.isCorrect).length;
  const percent = Math.round((correctCount / allAnswered.length) * 100);
  if (accuracyElem) {
    accuracyElem.textContent = `${percent}%`;
  }
}

// Starred Badge & Toggle Handler
function updateStarredBadge() {
  const countBadge = document.getElementById('nav-starred-count');
  const starBtn = document.getElementById('btn-starred-filter');
  if (!QUIZ_DATA) return;
  
  // Count starred questions for active subject
  const currentSubjectStarred = QUIZ_DATA.questions.filter(
    q => q.subjectId === state.subject && state.userData.starred.has(q.id)
  ).length;
  
  if (countBadge) {
    countBadge.textContent = currentSubjectStarred;
    if (currentSubjectStarred > 0) {
      countBadge.classList.remove('hidden');
    } else {
      countBadge.classList.add('hidden');
    }
  }
  
  if (starBtn) {
    const isFilterActive = state.filterStatus === 'starred';
    starBtn.classList.toggle('active-starred', isFilterActive);
    starBtn.setAttribute('title', isFilterActive ? 'Clear Starred Filter (Show All)' : `View Starred Questions (${currentSubjectStarred})`);
  }
}

function toggleStarredFilter() {
  const statusSelect = document.getElementById('filter-status');
  
  if (state.filterStatus === 'starred') {
    // Toggle OFF starred filter
    state.filterStatus = 'all';
    if (statusSelect) statusSelect.value = 'all';
  } else {
    // Toggle ON starred filter
    state.filterStatus = 'starred';
    if (statusSelect) statusSelect.value = 'starred';
    
    // Switch to practice view if in another mode
    if (state.mode !== 'practice') {
      switchMode('practice');
    }
    
    // Check if the currently filtered chapter/bank has 0 starred questions
    const currentSubjectStarred = QUIZ_DATA.questions.filter(
      q => q.subjectId === state.subject && state.userData.starred.has(q.id)
    ).length;
    
    // If current chapter or bank has 0 starred questions, reset chapter/bank filter to 'all'
    const currentScopeStarred = QUIZ_DATA.questions.filter(q => {
      if (q.subjectId !== state.subject) return false;
      if (state.chapterId !== 'all' && q.chapterId !== state.chapterId) return false;
      if (state.bankId !== 'all' && q.bankId !== state.bankId) return false;
      return state.userData.starred.has(q.id);
    }).length;
    
    if (currentScopeStarred === 0 && currentSubjectStarred > 0) {
      state.chapterId = 'all';
      state.bankId = 'all';
      populateChaptersSidebar();
    }
  }
  
  applyFilters();
  updateStarredBadge();
  playSound('click');
}

// Subject & Mode Switching
function switchSubject(subjectId) {
  if (state.subject === subjectId) return;
  state.subject = subjectId;
  state.chapterId = 'all';
  state.bankId = 'all';
  state.currentIndex = 0;
  
  document.getElementById('btn-subject-mp').classList.toggle('active', subjectId === 'mp');
  document.getElementById('btn-subject-mp').setAttribute('aria-selected', subjectId === 'mp');
  document.getElementById('btn-subject-ppl').classList.toggle('active', subjectId === 'ppl');
  document.getElementById('btn-subject-ppl').setAttribute('aria-selected', subjectId === 'ppl');
  
  playSound('click');
  populateChaptersSidebar();
  populateSourceDropdown();
  updateStarredBadge();
  applyFilters();
}

function switchMode(newMode) {
  state.mode = newMode;
  
  ['practice', 'exam', 'flashcards', 'search'].forEach(m => {
    const btn = document.getElementById(`mode-btn-${m}`);
    if (btn) {
      btn.classList.toggle('active', m === newMode);
      btn.setAttribute('aria-checked', m === newMode);
    }
    const view = document.getElementById(`view-${m}`);
    if (view) {
      view.classList.toggle('hidden', m !== newMode);
    }
  });
  
  playSound('click');
  
  if (newMode === 'practice') {
    renderPracticeQuestion();
  } else if (newMode === 'exam') {
    setupExamView();
  } else if (newMode === 'flashcards') {
    renderFlashcard();
  } else if (newMode === 'search') {
    const input = document.getElementById('global-search-input');
    if (input) {
      input.focus();
      handleSearch(input.value);
    }
  }
}

// Sidebar Navigation (Chapters vs Document Banks)
function switchSidebarNav(navType) {
  state.sidebarNav = navType;
  
  const tabCh = document.getElementById('tab-nav-chapters');
  const tabBk = document.getElementById('tab-nav-banks');
  if (tabCh) {
    tabCh.classList.toggle('active', navType === 'chapters');
    tabCh.setAttribute('aria-selected', navType === 'chapters');
  }
  if (tabBk) {
    tabBk.classList.toggle('active', navType === 'banks');
    tabBk.setAttribute('aria-selected', navType === 'banks');
  }
  
  populateChaptersSidebar();
  playSound('click');
}

function populateChaptersSidebar() {
  const container = document.getElementById('chapter-list');
  if (!container || !QUIZ_DATA) return;
  
  const currentSubjectObj = QUIZ_DATA.subjects.find(s => s.id === state.subject);
  if (!currentSubjectObj) return;
  
  const subjectTotal = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject).length;
  const totalTag = document.getElementById('total-questions-tag');
  if (totalTag) totalTag.textContent = `${subjectTotal.toLocaleString()} Qs`;
  
  let html = '';
  
  if (state.sidebarNav === 'chapters') {
    const isAllActive = state.chapterId === 'all' && state.bankId === 'all';
    html += `
      <button class="chapter-item ${isAllActive ? 'active' : ''}" onclick="selectChapter('all')">
        <div class="chapter-item-header">
          <span class="chapter-item-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            All Chapters & Units
          </span>
          <span class="badge ${isAllActive ? 'badge-primary' : 'badge-muted'}">${subjectTotal}</span>
        </div>
      </button>
    `;
    
    currentSubjectObj.chapters.forEach(ch => {
      const count = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject && q.chapterId === ch.id).length;
      const answeredCount = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject && q.chapterId === ch.id && state.userData.answers[q.id]).length;
      const progressPercent = count > 0 ? Math.round((answeredCount / count) * 100) : 0;
      const isSelected = state.chapterId === ch.id && state.bankId === 'all';
      
      html += `
        <button class="chapter-item ${isSelected ? 'active' : ''}" onclick="selectChapter('${ch.id}')" title="${escapeHtml(ch.description || ch.title)}">
          <div class="chapter-item-header">
            <span class="chapter-item-title">
              <span>${escapeHtml(ch.title)}</span>
            </span>
            <span class="badge ${isSelected ? 'badge-primary' : 'badge-muted'}">${count}</span>
          </div>
          ${answeredCount > 0 ? `
            <div style="margin-top: 5px; height: 3px; background: var(--bg-muted); border-radius: 999px; overflow: hidden;">
              <div style="width: ${progressPercent}%; height: 100%; background: var(--primary);"></div>
            </div>
          ` : ''}
        </button>
      `;
    });
  } else {
    // Document Banks View
    const isAllActive = state.bankId === 'all' && state.chapterId === 'all';
    html += `
      <button class="chapter-item ${isAllActive ? 'active' : ''}" onclick="selectBank('all')">
        <div class="chapter-item-header">
          <span class="chapter-item-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            All Document Banks
          </span>
          <span class="badge ${isAllActive ? 'badge-primary' : 'badge-muted'}">${subjectTotal}</span>
        </div>
      </button>
    `;
    
    (currentSubjectObj.banks || []).forEach(bk => {
      const count = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject && q.bankId === bk.id).length;
      const answeredCount = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject && q.bankId === bk.id && state.userData.answers[q.id]).length;
      const progressPercent = count > 0 ? Math.round((answeredCount / count) * 100) : 0;
      const isSelected = state.bankId === bk.id;
      
      html += `
        <button class="chapter-item ${isSelected ? 'active' : ''}" onclick="selectBank('${bk.id}')" title="${escapeHtml(bk.description || bk.title)}">
          <div class="chapter-item-header">
            <span class="chapter-item-title">
              <span>${escapeHtml(bk.title)}</span>
            </span>
            <span class="badge ${isSelected ? 'badge-primary' : 'badge-muted'}">${count}</span>
          </div>
          ${answeredCount > 0 ? `
            <div style="margin-top: 5px; height: 3px; background: var(--bg-muted); border-radius: 999px; overflow: hidden;">
              <div style="width: ${progressPercent}%; height: 100%; background: var(--primary);"></div>
            </div>
          ` : ''}
        </button>
      `;
    });
  }
  
  container.innerHTML = html;
}

function selectChapter(chapterId) {
  state.chapterId = chapterId;
  state.bankId = 'all';
  state.currentIndex = 0;
  populateChaptersSidebar();
  applyFilters();
  playSound('click');
}

function selectBank(bankId) {
  state.bankId = bankId;
  state.chapterId = 'all';
  state.currentIndex = 0;
  populateChaptersSidebar();
  applyFilters();
  playSound('click');
}

// Source Dropdown Population
function populateSourceDropdown() {
  const select = document.getElementById('filter-source');
  if (!select || !QUIZ_DATA) return;
  
  const sources = new Set();
  QUIZ_DATA.questions
    .filter(q => q.subjectId === state.subject)
    .forEach(q => { if (q.source) sources.add(q.source); });
    
  let html = `<option value="all">All Reference Documents (${sources.size})</option>`;
  Array.from(sources).sort().forEach(src => {
    const count = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject && q.source === src).length;
    html += `<option value="${escapeHtml(src)}">${escapeHtml(src)} (${count})</option>`;
  });
  select.innerHTML = html;
}

// Active Filter Pills Bar Rendering
function renderActiveFilterBar() {
  const bar = document.getElementById('active-filter-bar');
  if (!bar || !QUIZ_DATA) return;
  
  const currentSubjectObj = QUIZ_DATA.subjects.find(s => s.id === state.subject);
  const activeFilters = [];
  
  // Chapter Filter
  if (state.chapterId !== 'all') {
    const ch = currentSubjectObj ? currentSubjectObj.chapters.find(c => c.id === state.chapterId) : null;
    activeFilters.push({
      key: 'chapter',
      label: `Chapter: ${ch ? ch.title.split(':')[0] : state.chapterId}`
    });
  }
  
  // Bank Filter
  if (state.bankId !== 'all') {
    const bk = currentSubjectObj && currentSubjectObj.banks ? currentSubjectObj.banks.find(b => b.id === state.bankId) : null;
    activeFilters.push({
      key: 'bank',
      label: `Bank: ${bk ? bk.title.split('(')[0].trim() : state.bankId}`
    });
  }
  
  // Type Filter
  if (state.filterType !== 'all') {
    const typeLabels = {
      mcq: 'Multiple Choice',
      true_false: 'True / False',
      fill_blank: 'Fill in the Blanks',
      qa: 'One-Mark Q&A',
      numerical: 'Numerical Pack'
    };
    activeFilters.push({
      key: 'type',
      label: `Format: ${typeLabels[state.filterType] || state.filterType}`
    });
  }
  
  // Source Filter
  if (state.filterSource !== 'all') {
    activeFilters.push({
      key: 'source',
      label: `Document: ${state.filterSource.replace('.pdf', '').replace('.docx', '')}`
    });
  }
  
  // Status Filter
  if (state.filterStatus !== 'all') {
    const statusLabels = {
      unattempted: 'Unattempted Only',
      incorrect: 'Needs Review (Incorrect)',
      correct: 'Mastered (Correct)',
      starred: 'Starred / Bookmarked'
    };
    activeFilters.push({
      key: 'status',
      label: `Status: ${statusLabels[state.filterStatus] || state.filterStatus}`
    });
  }
  
  if (activeFilters.length === 0) {
    bar.classList.add('hidden');
    bar.innerHTML = '';
    return;
  }
  
  bar.classList.remove('hidden');
  let html = `<span class="active-filter-label">Active Filters (${state.filteredQuestions.length} Matches):</span>`;
  
  activeFilters.forEach(f => {
    html += `
      <div class="filter-pill">
        <span>${escapeHtml(f.label)}</span>
        <button class="filter-pill-btn" onclick="removeFilter('${f.key}')" title="Remove filter" aria-label="Remove ${escapeHtml(f.label)}">✕</button>
      </div>
    `;
  });
  
  html += `
    <button class="clear-all-filters-btn" onclick="resetAllFilters()">Clear All</button>
  `;
  
  bar.innerHTML = html;
}

function removeFilter(key) {
  if (key === 'chapter') {
    state.chapterId = 'all';
  } else if (key === 'bank') {
    state.bankId = 'all';
  } else if (key === 'type') {
    state.filterType = 'all';
    const sel = document.getElementById('filter-type');
    if (sel) sel.value = 'all';
  } else if (key === 'source') {
    state.filterSource = 'all';
    const sel = document.getElementById('filter-source');
    if (sel) sel.value = 'all';
  } else if (key === 'status') {
    state.filterStatus = 'all';
    const sel = document.getElementById('filter-status');
    if (sel) sel.value = 'all';
  }
  
  populateChaptersSidebar();
  applyFilters();
  updateStarredBadge();
  playSound('click');
}

function resetAllFilters() {
  state.chapterId = 'all';
  state.bankId = 'all';
  state.filterType = 'all';
  state.filterSource = 'all';
  state.filterStatus = 'all';
  
  const typeSelect = document.getElementById('filter-type');
  const sourceSelect = document.getElementById('filter-source');
  const statusSelect = document.getElementById('filter-status');
  if (typeSelect) typeSelect.value = 'all';
  if (sourceSelect) sourceSelect.value = 'all';
  if (statusSelect) statusSelect.value = 'all';
  
  populateChaptersSidebar();
  applyFilters();
  updateStarredBadge();
  playSound('click');
}

// Question Filtering Engine
function applyFilters() {
  const typeSelect = document.getElementById('filter-type');
  const sourceSelect = document.getElementById('filter-source');
  const statusSelect = document.getElementById('filter-status');
  
  state.filterType = typeSelect ? typeSelect.value : state.filterType;
  state.filterSource = sourceSelect ? sourceSelect.value : state.filterSource;
  state.filterStatus = statusSelect ? statusSelect.value : state.filterStatus;
  
  let list = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject);
  
  // Chapter filter
  if (state.chapterId !== 'all') {
    list = list.filter(q => q.chapterId === state.chapterId);
  }
  
  // Bank filter
  if (state.bankId !== 'all') {
    list = list.filter(q => q.bankId === state.bankId);
  }
  
  // Type filter
  if (state.filterType !== 'all') {
    list = list.filter(q => q.type === state.filterType);
  }
  
  // Source filter
  if (state.filterSource !== 'all') {
    list = list.filter(q => q.source === state.filterSource);
  }
  
  // Attempt status filter
  if (state.filterStatus === 'unattempted') {
    list = list.filter(q => !state.userData.answers[q.id]);
  } else if (state.filterStatus === 'incorrect') {
    list = list.filter(q => state.userData.answers[q.id] && !state.userData.answers[q.id].isCorrect);
  } else if (state.filterStatus === 'correct') {
    list = list.filter(q => state.userData.answers[q.id] && state.userData.answers[q.id].isCorrect);
  } else if (state.filterStatus === 'starred') {
    list = list.filter(q => state.userData.starred.has(q.id));
  }
  
  state.filteredQuestions = list;
  state.currentIndex = 0;
  
  renderActiveFilterBar();
  updateStarredBadge();
  
  if (state.mode === 'practice') {
    renderPracticeQuestion();
  } else if (state.mode === 'flashcards') {
    state.flashcardIndex = 0;
    renderFlashcard();
  }
}

// Practice Mode Logic
function renderPracticeQuestion() {
  const total = state.filteredQuestions.length;
  
  const heading = document.getElementById('quiz-chapter-heading');
  const counter = document.getElementById('quiz-question-counter');
  const catTag = document.getElementById('quiz-category-tag');
  const srcTag = document.getElementById('quiz-source-tag');
  const progressBar = document.getElementById('quiz-progress-bar');
  const qText = document.getElementById('question-text');
  const codeBlock = document.getElementById('question-code-block');
  const optsContainer = document.getElementById('options-container');
  const explContainer = document.getElementById('explanation-container');
  const explText = document.getElementById('explanation-text');
  const bookmarkIcon = document.getElementById('bookmark-icon');
  const emptyState = document.getElementById('empty-state-container');
  const practiceCard = document.getElementById('practice-card');
  const retryBtn = document.getElementById('btn-retry');
  const selfAssessContainer = document.getElementById('self-assess-container');
  
  if (total === 0) {
    if (heading) heading.textContent = 'No Questions Found';
    if (counter) counter.textContent = '0 of 0';
    if (emptyState) emptyState.classList.remove('hidden');
    if (practiceCard) practiceCard.classList.add('hidden');
    if (progressBar) progressBar.style.width = '0%';
    return;
  }
  
  if (emptyState) emptyState.classList.add('hidden');
  if (practiceCard) practiceCard.classList.remove('hidden');
  
  // Bound check
  if (state.currentIndex < 0) state.currentIndex = 0;
  if (state.currentIndex >= total) state.currentIndex = total - 1;
  
  const q = state.filteredQuestions[state.currentIndex];
  
  // Header details
  if (heading) {
    const currentSubjectObj = QUIZ_DATA.subjects.find(s => s.id === state.subject);
    if (state.bankId !== 'all') {
      const bkObj = currentSubjectObj && currentSubjectObj.banks ? currentSubjectObj.banks.find(b => b.id === state.bankId) : null;
      heading.textContent = bkObj ? bkObj.title : 'Document Question Bank';
    } else {
      const chObj = currentSubjectObj ? currentSubjectObj.chapters.find(c => c.id === q.chapterId) : null;
      heading.textContent = chObj ? chObj.title : (state.subject === 'mp' ? 'Intel 8086 Microprocessor' : 'Principles of Programming Languages');
    }
  }
  
  if (counter) counter.textContent = `Question ${state.currentIndex + 1} of ${total}`;
  if (catTag) catTag.textContent = q.category || (q.type === 'mcq' ? 'Multiple Choice' : 'Concept Check');
  if (srcTag) srcTag.textContent = q.source || 'Curriculum Reference';
  if (progressBar) progressBar.style.width = `${((state.currentIndex + 1) / total) * 100}%`;
  
  // Bookmark button state
  if (bookmarkIcon) {
    const isStarred = state.userData.starred.has(q.id);
    bookmarkIcon.style.fill = isStarred ? 'var(--warning)' : 'none';
    bookmarkIcon.style.stroke = isStarred ? 'var(--warning)' : 'currentColor';
  }
  
  // Question Text
  if (qText) {
    qText.innerHTML = formatMathAndText(q.question);
  }
  
  // Code block
  if (codeBlock) {
    if (q.code) {
      codeBlock.classList.remove('hidden');
      codeBlock.innerHTML = `<code>${escapeHtml(q.code)}</code>`;
    } else {
      codeBlock.classList.add('hidden');
    }
  }
  
  const userAnswer = state.userData.answers[q.id];
  
  // Toggle retry button visibility
  if (retryBtn) {
    retryBtn.classList.toggle('hidden', !userAnswer);
  }
  
  // Render Options or Reveal
  if (optsContainer) {
    optsContainer.innerHTML = '';
    if (selfAssessContainer) {
      selfAssessContainer.innerHTML = '';
      selfAssessContainer.classList.add('hidden');
    }
    
    // For standard MCQs & True/False
    if (q.type === 'mcq' || q.type === 'true_false') {
      const optionKeys = Object.keys(q.options).sort();
      optionKeys.forEach(key => {
        const val = q.options[key];
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-label', `Option ${key}: ${val}`);
        
        const isThisCorrect = key.toUpperCase() === q.answer.toUpperCase();
        
        if (userAnswer) {
          btn.disabled = true;
          if (userAnswer.selected === key) {
            if (userAnswer.isCorrect) {
              btn.classList.add('selected-correct');
            } else {
              btn.classList.add('selected-incorrect');
            }
          } else if (isThisCorrect) {
            btn.classList.add('show-correct');
          }
        } else {
          btn.onclick = () => selectOption(q, key);
        }
        
        btn.innerHTML = `
          <div class="option-letter">${key}</div>
          <div class="option-text">${formatMathAndText(val)}</div>
        `;
        optsContainer.appendChild(btn);
      });
    } else {
      // For Q&A, Fill in blanks, Numericals
      if (!userAnswer) {
        const revealBtn = document.createElement('button');
        revealBtn.className = 'btn btn-primary';
        revealBtn.style.padding = '0.85rem 1.75rem';
        revealBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Reveal Verified Solution & Key Concept
        `;
        revealBtn.onclick = () => {
          rateSelfNonMCQ(q, true);
        };
        optsContainer.appendChild(revealBtn);
      } else {
        // Already answered/revealed: show self-assessment toggles
        if (selfAssessContainer) {
          selfAssessContainer.classList.remove('hidden');
          selfAssessContainer.innerHTML = `
            <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); width: 100%; display: block;">
              Self Assessment Rating:
            </span>
            <button class="btn btn-outline" style="border-color: ${userAnswer.isCorrect ? 'var(--success)' : 'var(--border-strong)'}; color: ${userAnswer.isCorrect ? 'var(--success)' : 'inherit'}; background: ${userAnswer.isCorrect ? 'var(--success-bg)' : 'transparent'};" onclick="rateSelfNonMCQ(state.filteredQuestions[state.currentIndex], true)">
              ✓ Mastered Concept (${userAnswer.isCorrect ? 'Marked Correct' : 'Mark as Correct'})
            </button>
            <button class="btn btn-outline" style="border-color: ${!userAnswer.isCorrect ? 'var(--danger)' : 'var(--border-strong)'}; color: ${!userAnswer.isCorrect ? 'var(--danger)' : 'inherit'}; background: ${!userAnswer.isCorrect ? 'var(--danger-bg)' : 'transparent'};" onclick="rateSelfNonMCQ(state.filteredQuestions[state.currentIndex], false)">
              ✗ Needs Review (${!userAnswer.isCorrect ? 'Marked for Review' : 'Mark for Review'})
            </button>
          `;
        }
      }
    }
  }
  
  // Explanation Container
  if (explContainer) {
    if (userAnswer) {
      explContainer.classList.remove('hidden');
      const titleElem = document.getElementById('explanation-title');
      if (titleElem) {
        if (q.type === 'mcq' || q.type === 'true_false') {
          titleElem.textContent = userAnswer.isCorrect 
            ? `✓ Correct! Option ${q.answer}: ${q.answerText || q.options[q.answer] || ''}`
            : `✗ Incorrect. Correct Answer is Option ${q.answer}: ${q.answerText || q.options[q.answer] || ''}`;
        } else {
          titleElem.textContent = `Model Answer & Architectural Rationale`;
        }
      }
      if (explText) {
        explText.innerHTML = formatMathAndText(q.explanation || q.answerText || 'Verified solution.');
      }
    } else {
      explContainer.classList.add('hidden');
    }
  }
  
  // Update Prev / Next button states
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  if (btnPrev) btnPrev.disabled = state.currentIndex === 0;
  if (btnNext) btnNext.disabled = state.currentIndex === total - 1;
}

// Option Selection & Zero-Error Check
function selectOption(question, selectedLetter) {
  const isCorrect = selectedLetter.toUpperCase() === question.answer.toUpperCase();
  
  state.userData.answers[question.id] = {
    selected: selectedLetter,
    isCorrect: isCorrect,
    timestamp: Date.now()
  };
  
  saveUserData();
  playSound(isCorrect ? 'correct' : 'incorrect');
  renderPracticeQuestion();
}

function rateSelfNonMCQ(question, isKnown) {
  state.userData.answers[question.id] = {
    selected: isKnown ? 'A' : 'REVIEW',
    isCorrect: isKnown,
    timestamp: Date.now()
  };
  
  saveUserData();
  playSound(isKnown ? 'correct' : 'incorrect');
  renderPracticeQuestion();
}

function retryCurrentQuestion() {
  if (state.filteredQuestions.length === 0) return;
  const q = state.filteredQuestions[state.currentIndex];
  if (state.userData.answers[q.id]) {
    delete state.userData.answers[q.id];
    saveUserData();
    renderPracticeQuestion();
    playSound('click');
  }
}

function navigateQuestion(delta) {
  const nextIdx = state.currentIndex + delta;
  if (nextIdx >= 0 && nextIdx < state.filteredQuestions.length) {
    state.currentIndex = nextIdx;
    renderPracticeQuestion();
    playSound('click');
  }
}

function toggleBookmarkCurrent() {
  if (state.filteredQuestions.length === 0) return;
  const q = state.filteredQuestions[state.currentIndex];
  if (state.userData.starred.has(q.id)) {
    state.userData.starred.delete(q.id);
  } else {
    state.userData.starred.add(q.id);
  }
  saveUserData();
  
  // If in starred filter and removed star, re-filter
  if (state.filterStatus === 'starred') {
    applyFilters();
  } else {
    renderPracticeQuestion();
  }
  
  updateStarredBadge();
  playSound('click');
}

// Jump Modal
function openJumpModal() {
  const modal = document.getElementById('modal-jump');
  const grid = document.getElementById('jump-grid-container');
  if (!modal || !grid) return;
  
  let html = '';
  state.filteredQuestions.forEach((q, idx) => {
    const ans = state.userData.answers[q.id];
    const isCurrent = idx === state.currentIndex;
    const isStarred = state.userData.starred.has(q.id);
    
    let cls = 'grid-dot';
    if (isCurrent) cls += ' current';
    if (isStarred) cls += ' starred';
    if (ans) {
      cls += ans.isCorrect ? ' correct' : ' incorrect';
    }
    
    html += `
      <button class="${cls}" onclick="jumpToQuestion(${idx})" aria-label="Question ${idx + 1}">
        ${idx + 1}
      </button>
    `;
  });
  grid.innerHTML = html;
  openModal('modal-jump');
}

function jumpToQuestion(idx) {
  state.currentIndex = idx;
  closeModal('modal-jump');
  renderPracticeQuestion();
  playSound('click');
}

// Reset Progress
function resetChapterProgress() {
  if (!confirm('Are you sure you want to reset your answered question history for this subject? Bookmarks will be preserved.')) {
    return;
  }
  const subjectQs = new Set(QUIZ_DATA.questions.filter(q => q.subjectId === state.subject).map(q => q.id));
  for (const qId of Object.keys(state.userData.answers)) {
    if (subjectQs.has(qId)) {
      delete state.userData.answers[qId];
    }
  }
  saveUserData();
  populateChaptersSidebar();
  applyFilters();
  alert('Subject statistics have been reset successfully.');
}

// ==========================================
// TIMED EXAM MODE LOGIC
// ==========================================
function setupExamView() {
  const setupCard = document.getElementById('exam-setup-card');
  const activeContainer = document.getElementById('exam-active-container');
  const resultsContainer = document.getElementById('exam-results-container');
  
  if (setupCard) setupCard.classList.remove('hidden');
  if (activeContainer) activeContainer.classList.add('hidden');
  if (resultsContainer) resultsContainer.classList.add('hidden');
}

function startExamSession() {
  const countSelect = document.getElementById('exam-count-select');
  const timerSelect = document.getElementById('exam-timer-select');
  
  let pool = QUIZ_DATA.questions.filter(q => q.subjectId === state.subject && (q.type === 'mcq' || q.type === 'true_false'));
  if (state.chapterId !== 'all') {
    pool = pool.filter(q => q.chapterId === state.chapterId);
  }
  if (state.bankId !== 'all') {
    pool = pool.filter(q => q.bankId === state.bankId);
  }
  
  if (pool.length === 0) {
    alert('No MCQs or True/False questions available for the selected chapter/bank to run an exam.');
    return;
  }
  
  // Shuffle pool
  pool = [...pool].sort(() => Math.random() - 0.5);
  
  const countChoice = countSelect.value === 'all' ? pool.length : parseInt(countSelect.value, 10);
  const examQuestions = pool.slice(0, Math.min(countChoice, pool.length));
  
  const minutes = parseInt(timerSelect.value, 10);
  
  state.exam = {
    active: true,
    questions: examQuestions,
    currentIndex: 0,
    answers: {},
    flagged: new Set(),
    timeRemaining: minutes * 60,
    totalTime: minutes * 60,
    timerInterval: null
  };
  
  document.getElementById('exam-setup-card').classList.add('hidden');
  document.getElementById('exam-active-container').classList.remove('hidden');
  document.getElementById('exam-results-container').classList.add('hidden');
  
  if (minutes > 0) {
    startExamTimer();
  } else {
    document.getElementById('exam-timer-display').textContent = 'Untimed';
  }
  
  renderExamQuestion();
  renderExamPalette();
  playSound('click');
}

function startExamTimer() {
  if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
  
  const display = document.getElementById('exam-timer-display');
  
  state.exam.timerInterval = setInterval(() => {
    state.exam.timeRemaining--;
    
    const m = Math.floor(state.exam.timeRemaining / 60);
    const s = state.exam.timeRemaining % 60;
    if (display) {
      display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    
    if (state.exam.timeRemaining <= 0) {
      clearInterval(state.exam.timerInterval);
      alert('Time is up! Your examination paper is being automatically submitted.');
      finishExam();
    }
  }, 1000);
}

function renderExamQuestion() {
  const exam = state.exam;
  const q = exam.questions[exam.currentIndex];
  if (!q) return;
  
  document.getElementById('exam-header-title').textContent = `${state.subject === 'mp' ? 'Intel 8086 MP' : 'PPL'} Examination`;
  document.getElementById('exam-progress-counter').textContent = `Question ${exam.currentIndex + 1} of ${exam.questions.length}`;
  
  const qText = document.getElementById('exam-question-text');
  const codeBlock = document.getElementById('exam-code-block');
  const optsContainer = document.getElementById('exam-options-container');
  const flagBtn = document.getElementById('btn-flag-exam');
  
  if (qText) qText.innerHTML = formatMathAndText(q.question);
  if (codeBlock) {
    if (q.code) {
      codeBlock.classList.remove('hidden');
      codeBlock.innerHTML = `<code>${escapeHtml(q.code)}</code>`;
    } else {
      codeBlock.classList.add('hidden');
    }
  }
  
  if (flagBtn) {
    const isFlagged = exam.flagged.has(q.id);
    flagBtn.style.color = isFlagged ? 'var(--warning)' : 'var(--text-primary)';
    flagBtn.style.borderColor = isFlagged ? 'var(--warning)' : 'var(--border-strong)';
  }
  
  if (optsContainer) {
    optsContainer.innerHTML = '';
    const selected = exam.answers[q.id];
    
    Object.keys(q.options).sort().forEach(key => {
      const val = q.options[key];
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (selected === key) {
        btn.style.borderColor = 'var(--primary)';
        btn.style.background = 'var(--primary-light)';
      }
      
      btn.onclick = () => {
        exam.answers[q.id] = key;
        renderExamQuestion();
        renderExamPalette();
        playSound('click');
      };
      
      btn.innerHTML = `
        <div class="option-letter">${key}</div>
        <div class="option-text">${formatMathAndText(val)}</div>
      `;
      optsContainer.appendChild(btn);
    });
  }
}

function renderExamPalette() {
  const container = document.getElementById('exam-palette-nav');
  if (!container) return;
  
  let html = '';
  state.exam.questions.forEach((q, idx) => {
    const isCurrent = idx === state.exam.currentIndex;
    const isAnswered = !!state.exam.answers[q.id];
    const isFlagged = state.exam.flagged.has(q.id);
    
    let cls = '';
    if (isFlagged) cls = 'flagged';
    else if (isAnswered) cls = 'answered';
    if (isCurrent) cls += ' current';
    
    html += `
      <button class="grid-dot ${cls}" onclick="jumpExamQuestion(${idx})" aria-label="Exam Question ${idx + 1}">
        ${idx + 1}
      </button>
    `;
  });
  container.innerHTML = html;
}

function jumpExamQuestion(idx) {
  state.exam.currentIndex = idx;
  renderExamQuestion();
  renderExamPalette();
  playSound('click');
}

function navigateExamQuestion(delta) {
  const nextIdx = state.exam.currentIndex + delta;
  if (nextIdx >= 0 && nextIdx < state.exam.questions.length) {
    state.exam.currentIndex = nextIdx;
    renderExamQuestion();
    renderExamPalette();
    playSound('click');
  }
}

function toggleFlagCurrentExamQuestion() {
  const q = state.exam.questions[state.exam.currentIndex];
  if (state.exam.flagged.has(q.id)) {
    state.exam.flagged.delete(q.id);
  } else {
    state.exam.flagged.add(q.id);
  }
  renderExamQuestion();
  renderExamPalette();
}

function confirmFinishExam() {
  const total = state.exam.questions.length;
  const answered = Object.keys(state.exam.answers).length;
  const unanswered = total - answered;
  
  let msg = `You have answered ${answered} of ${total} questions.`;
  if (unanswered > 0) {
    msg += ` You have ${unanswered} unanswered question(s).`;
  }
  msg += ' Are you sure you want to finish and submit your exam?';
  
  if (confirm(msg)) {
    finishExam();
  }
}

function finishExam() {
  if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
  state.exam.active = false;
  
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;
  
  state.exam.questions.forEach(q => {
    const userSel = state.exam.answers[q.id];
    if (!userSel) {
      skippedCount++;
    } else {
      const isCorrect = userSel.toUpperCase() === q.answer.toUpperCase();
      if (isCorrect) correctCount++;
      else wrongCount++;
      
      state.userData.answers[q.id] = { selected: userSel, isCorrect: isCorrect, timestamp: Date.now() };
    }
  });
  
  saveUserData();
  
  const total = state.exam.questions.length;
  const scorePercent = Math.round((correctCount / total) * 100);
  
  let grade = 'Needs Improvement';
  let summary = 'Review key formulas and architectural trade-offs to strengthen your scores.';
  if (scorePercent >= 80) {
    grade = 'Distinction';
    summary = 'Exceptional performance! You have thoroughly mastered core concepts and instruction mechanics.';
  } else if (scorePercent >= 60) {
    grade = 'First Class';
    summary = 'Strong knowledge base. Review the few questions missed below for full mastery.';
  } else if (scorePercent >= 45) {
    grade = 'Pass';
    summary = 'Passing grade achieved. Practice numerical calculations and edge-cases before the final exam.';
  }
  
  document.getElementById('result-score-percent').textContent = `${scorePercent}%`;
  document.getElementById('result-score-grade').textContent = grade;
  document.getElementById('result-summary-msg').textContent = summary;
  document.getElementById('result-correct-count').textContent = correctCount;
  document.getElementById('result-wrong-count').textContent = wrongCount;
  document.getElementById('result-skipped-count').textContent = skippedCount;
  
  document.getElementById('exam-active-container').classList.add('hidden');
  document.getElementById('exam-results-container').classList.remove('hidden');
  
  if (scorePercent >= 60) {
    playSound('correct');
  } else {
    playSound('incorrect');
  }
}

function reviewExamAnswers() {
  state.filteredQuestions = state.exam.questions;
  state.currentIndex = 0;
  switchMode('practice');
}

// ==========================================
// FLASHCARD MODE LOGIC
// ==========================================
function renderFlashcard() {
  const cardList = state.filteredQuestions;
  const total = cardList.length;
  
  const counter = document.getElementById('fc-counter');
  const frontCat = document.getElementById('fc-front-cat');
  const frontSrc = document.getElementById('fc-front-source');
  const qText = document.getElementById('fc-question-text');
  const aText = document.getElementById('fc-answer-text');
  const inner = document.getElementById('flashcard-inner');
  const fcBookmarkIcon = document.getElementById('bookmark-fc-icon');
  
  if (total === 0) {
    if (counter) counter.textContent = '0 of 0';
    if (qText) qText.textContent = 'No flashcards match your current filter. Please adjust your criteria.';
    if (aText) aText.textContent = '';
    return;
  }
  
  if (state.flashcardIndex < 0) state.flashcardIndex = 0;
  if (state.flashcardIndex >= total) state.flashcardIndex = total - 1;
  
  const q = cardList[state.flashcardIndex];
  
  if (counter) counter.textContent = `Card ${state.flashcardIndex + 1} of ${total}`;
  if (frontCat) frontCat.textContent = q.category || 'Core Question';
  if (frontSrc) frontSrc.textContent = q.source || 'Curriculum Reference';
  if (qText) qText.innerHTML = formatMathAndText(q.question);
  
  // Flashcard Bookmark icon
  if (fcBookmarkIcon) {
    const isStarred = state.userData.starred.has(q.id);
    fcBookmarkIcon.style.fill = isStarred ? 'var(--warning)' : 'none';
    fcBookmarkIcon.style.stroke = isStarred ? 'var(--warning)' : 'currentColor';
  }
  
  let ansOutput = q.answerText || '';
  if (q.options && q.options[q.answer] && q.type === 'mcq') {
    ansOutput = `<strong>Option ${q.answer}:</strong> ${q.options[q.answer]}<br><br>${q.explanation || ''}`;
  } else if (q.explanation && q.explanation !== q.answerText) {
    ansOutput += `<br><br>${q.explanation}`;
  }
  if (aText) aText.innerHTML = formatMathAndText(ansOutput);
  
  state.flashcardFlipped = false;
  if (inner) inner.classList.remove('is-flipped');
}

function flipFlashcard() {
  state.flashcardFlipped = !state.flashcardFlipped;
  const inner = document.getElementById('flashcard-inner');
  if (inner) inner.classList.toggle('is-flipped', state.flashcardFlipped);
  playSound('click');
}

function navigateFlashcard(delta) {
  const nextIdx = state.flashcardIndex + delta;
  if (nextIdx >= 0 && nextIdx < state.filteredQuestions.length) {
    state.flashcardIndex = nextIdx;
    renderFlashcard();
    playSound('click');
  }
}

function shuffleFlashcards() {
  state.filteredQuestions = [...state.filteredQuestions].sort(() => Math.random() - 0.5);
  state.flashcardIndex = 0;
  renderFlashcard();
  playSound('click');
}

function rateFlashcard(mastered) {
  const q = state.filteredQuestions[state.flashcardIndex];
  if (q) {
    state.userData.flashcardMastery[q.id] = mastered;
    // Also record into master answers to sync accuracy
    state.userData.answers[q.id] = {
      selected: mastered ? 'A' : 'REVIEW',
      isCorrect: mastered,
      timestamp: Date.now()
    };
    saveUserData();
  }
  playSound(mastered ? 'correct' : 'incorrect');
  navigateFlashcard(1);
}

function toggleBookmarkFlashcard() {
  if (state.filteredQuestions.length === 0) return;
  const q = state.filteredQuestions[state.flashcardIndex];
  if (state.userData.starred.has(q.id)) {
    state.userData.starred.delete(q.id);
  } else {
    state.userData.starred.add(q.id);
  }
  saveUserData();
  renderFlashcard();
  updateStarredBadge();
  playSound('click');
}

// ==========================================
// SEARCH & EXPLORER ENGINE
// ==========================================
function handleSearch(query) {
  const container = document.getElementById('search-results-container');
  const countBadge = document.getElementById('search-count-badge');
  if (!container || !QUIZ_DATA) return;
  
  const qStr = (query || '').trim().toLowerCase();
  if (qStr.length < 2) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem auto; display: block;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        Type at least 2 characters to search across all 1,394 questions, explanations, and options.
      </div>
    `;
    if (countBadge) countBadge.textContent = '0 results';
    return;
  }
  
  const matches = QUIZ_DATA.questions.filter(q => {
    const inQ = (q.question || '').toLowerCase().includes(qStr);
    const inExpl = (q.explanation || '').toLowerCase().includes(qStr);
    const inAns = (q.answerText || '').toLowerCase().includes(qStr);
    const inOpts = Object.values(q.options || {}).some(v => v.toLowerCase().includes(qStr));
    return inQ || inExpl || inAns || inOpts;
  });
  
  if (countBadge) countBadge.textContent = `${matches.length} found`;
  
  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
        No questions matched "<strong>${escapeHtml(query)}</strong>". Try broader keywords.
      </div>
    `;
    return;
  }
  
  // Render up to 50 results
  const displayMatches = matches.slice(0, 50);
  let html = '';
  displayMatches.forEach(q => {
    const isStarred = state.userData.starred.has(q.id);
    html += `
      <article class="search-item">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="badge ${q.subjectId === 'mp' ? 'badge-primary' : 'badge-warning'}">${q.subjectId === 'mp' ? '8086 MP' : 'PPL'}</span>
            <span class="badge badge-muted">${escapeHtml(q.category || q.type)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(q.source)}</span>
            <button class="icon-btn" style="width: 28px; height: 28px;" onclick="toggleBookmarkFromSearch('${q.id}', this)" title="Bookmark Question">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isStarred ? 'var(--warning)' : 'none'}" stroke="${isStarred ? 'var(--warning)' : 'currentColor'}" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.75rem;">
          ${highlightKeyword(formatMathAndText(q.question), qStr)}
        </div>
        ${q.options && Object.keys(q.options).length > 1 ? `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-bottom: 0.75rem; font-size: 0.88rem;">
            ${Object.keys(q.options).sort().map(k => `
              <div style="padding: 4px 8px; border-radius: 4px; background: ${k === q.answer ? 'var(--success-bg); border: 1px solid var(--success); font-weight: 600;' : 'var(--bg-subtle);'}">
                <strong>${k}:</strong> ${escapeHtml(q.options[k])}
              </div>
            `).join('')}
          </div>
        ` : ''}
        <div style="font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-subtle); padding: 0.75rem; border-radius: var(--radius-md); border-left: 3px solid var(--primary); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong>Correct Answer: Option ${q.answer}</strong> — ${highlightKeyword(formatMathAndText(q.explanation || q.answerText || ''), qStr)}
          </div>
          <button class="btn btn-outline" style="padding: 0.35rem 0.65rem; font-size: 0.75rem; margin-left: 1rem; white-space: nowrap;" onclick="jumpToPracticeQuestion('${q.id}')">
            Practice in Quiz
          </button>
        </div>
      </article>
    `;
  });
  
  if (matches.length > 50) {
    html += `<div style="text-align: center; color: var(--text-muted); padding: 1rem;">Showing first 50 of ${matches.length} matches. Narrow your search for more specific results.</div>`;
  }
  
  container.innerHTML = html;
}

function toggleBookmarkFromSearch(qId, btnElem) {
  if (state.userData.starred.has(qId)) {
    state.userData.starred.delete(qId);
    if (btnElem) {
      btnElem.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
  } else {
    state.userData.starred.add(qId);
    if (btnElem) {
      btnElem.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="var(--warning)" stroke="var(--warning)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
  }
  saveUserData();
  updateStarredBadge();
  playSound('click');
}

function jumpToPracticeQuestion(qId) {
  const q = QUIZ_DATA.questions.find(item => item.id === qId);
  if (!q) return;
  
  if (state.subject !== q.subjectId) {
    state.subject = q.subjectId;
    document.getElementById('btn-subject-mp').classList.toggle('active', q.subjectId === 'mp');
    document.getElementById('btn-subject-ppl').classList.toggle('active', q.subjectId === 'ppl');
  }
  
  // Clear scope filters to ensure the question is included
  state.chapterId = 'all';
  state.bankId = 'all';
  state.filterType = 'all';
  state.filterSource = 'all';
  state.filterStatus = 'all';
  
  const typeSelect = document.getElementById('filter-type');
  const sourceSelect = document.getElementById('filter-source');
  const statusSelect = document.getElementById('filter-status');
  if (typeSelect) typeSelect.value = 'all';
  if (sourceSelect) sourceSelect.value = 'all';
  if (statusSelect) statusSelect.value = 'all';
  
  populateChaptersSidebar();
  applyFilters();
  
  const targetIdx = state.filteredQuestions.findIndex(item => item.id === qId);
  if (targetIdx !== -1) {
    state.currentIndex = targetIdx;
  }
  
  switchMode('practice');
  playSound('click');
}

function highlightKeyword(htmlText, query) {
  if (!query) return htmlText;
  try {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return htmlText.replace(regex, '<mark style="background: rgba(250, 204, 21, 0.4); border-radius: 2px; padding: 0 2px;">$1</mark>');
  } catch (e) {
    return htmlText;
  }
}

// Modal System
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

// Keyboard Navigation Listeners
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
    return;
  }
  
  if (e.key === '?') {
    openModal('modal-shortcuts');
    return;
  }
  
  if (e.key === '/') {
    e.preventDefault();
    switchMode('search');
    return;
  }
  
  if (e.key === 'Escape') {
    ['modal-jump', 'modal-shortcuts'].forEach(closeModal);
    return;
  }
  
  if (state.mode === 'flashcards' && (e.code === 'Space' || e.key.toLowerCase() === 'f')) {
    e.preventDefault();
    flipFlashcard();
    return;
  }
  
  if (state.mode === 'practice') {
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
      navigateQuestion(1);
    } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      navigateQuestion(-1);
    } else if (e.key.toLowerCase() === 'b') {
      toggleBookmarkCurrent();
    } else if (['1', '2', '3', '4'].includes(e.key)) {
      const q = state.filteredQuestions[state.currentIndex];
      if (q && (q.type === 'mcq' || q.type === 'true_false') && !state.userData.answers[q.id]) {
        const letters = ['A', 'B', 'C', 'D'];
        const chosen = letters[parseInt(e.key, 10) - 1];
        if (q.options && q.options[chosen]) {
          selectOption(q, chosen);
        }
      }
    } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
      const q = state.filteredQuestions[state.currentIndex];
      const chosen = e.key.toUpperCase();
      if (q && (q.type === 'mcq' || q.type === 'true_false') && !state.userData.answers[q.id]) {
        if (q.options && q.options[chosen]) {
          selectOption(q, chosen);
        }
      }
    } else if (e.key.toLowerCase() === 't') {
      // True option for True/False questions
      const q = state.filteredQuestions[state.currentIndex];
      if (q && q.type === 'true_false' && !state.userData.answers[q.id]) {
        selectOption(q, 'A');
      }
    } else if (e.key.toLowerCase() === 'f') {
      // False option for True/False questions
      const q = state.filteredQuestions[state.currentIndex];
      if (q && q.type === 'true_false' && !state.userData.answers[q.id]) {
        selectOption(q, 'B');
      }
    }
  } else if (state.mode === 'exam' && state.exam.active) {
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
      navigateExamQuestion(1);
    } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      navigateExamQuestion(-1);
    }
  } else if (state.mode === 'flashcards') {
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
      navigateFlashcard(1);
    } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      navigateFlashcard(-1);
    } else if (e.key.toLowerCase() === 'b') {
      toggleBookmarkFlashcard();
    }
  }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  populateChaptersSidebar();
  populateSourceDropdown();
  applyFilters();
});
