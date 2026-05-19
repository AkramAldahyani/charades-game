/* ============================================
   مثّلها — Arabic Charades Game
   Pure vanilla JS — no dependencies
   ============================================ */

// ============ WORDS DATA ============
// Add or edit words freely. Each category has many entries.
const WORDS = {
    movies: [
        "تيتانيك", "الأسد الملك", "علاء الدين", "هاري بوتر", "سيد الخواتم",
        "الرجل العنكبوت", "الرجل الحديدي", "باتمان", "سوبرمان", "الجوكر",
        "المنتقمون", "حرب النجوم", "ماتريكس", "بحرية كاريبي", "إنديانا جونز",
        "روكي", "العراب", "فورست غامب", "جوراسيك بارك", "الجميلة والوحش",
        "فروزن", "شريك", "البحث عن نيمو", "توي ستوري", "كونغ فو باندا",
        "مدغشقر", "عصر الجليد", "وول-إي", "أعلى", "كوكو",
        "نمر وحيد", "الرسالة", "عمارة يعقوبيان", "الكيت كات", "تيمور وشفيقة",
        "أسد ومربي وحوش", "تومب رايدر", "أفاتار", "الحاسة السادسة", "أوقات حرجة",
        "صعود الفينيق", "ميشن إمبوسيبل", "جيمس بوند", "السريع والغاضب", "ترانسفورمرز",
        "ساعي البريد", "بداية", "بين النجوم", "الكوكب الأحمر", "الجاذبية",
        "العميل ٠٠٧"
    ],
    animals: [
        "أسد", "نمر", "فيل", "زرافة", "غزال",
        "جمل", "حصان", "حمار", "بقرة", "خروف",
        "ماعز", "كلب", "قطة", "أرنب", "فأر",
        "قرد", "غوريلا", "دب", "ذئب", "ثعلب",
        "أفعى", "تمساح", "سلحفاة", "ضفدع", "سحلية",
        "حوت", "دلفين", "قرش", "أخطبوط", "سرطان البحر",
        "نسر", "صقر", "بومة", "ببغاء", "طاووس",
        "بطريق", "نعامة", "حمامة", "بطة", "دجاجة",
        "فهد", "وحيد القرن", "فرس النهر", "كنغر", "كوالا",
        "بندا", "ثور", "خنزير", "نحلة", "فراشة",
        "نملة", "جرادة", "عقرب", "عنكبوت", "خفاش"
    ],
    jobs: [
        "طبيب", "ممرض", "مهندس", "معلم", "طباخ",
        "خباز", "نجار", "حداد", "ميكانيكي", "كهربائي",
        "سباك", "حلاق", "خياط", "طيار", "مضيف طيران",
        "بحار", "صياد", "مزارع", "رجل إطفاء", "شرطي",
        "جندي", "قاضي", "محامي", "محاسب", "صحفي",
        "مذيع", "مصور", "رسام", "نحات", "موسيقي",
        "مغني", "ممثل", "راقص", "لاعب كرة", "حكم",
        "مدرب", "بائع", "تاجر", "نادل", "سائق",
        "ساعي بريد", "حارس", "عالم", "كاتب", "شاعر",
        "مترجم", "طبيب أسنان", "صيدلي", "جراح", "ميكانيكي طائرات",
        "مبرمج", "مصمم", "مزين", "بستاني", "مهندس معماري"
    ],
    daily: [
        "هاتف", "حاسوب", "تلفاز", "ثلاجة", "غسالة",
        "مكواة", "مكنسة", "ميكروويف", "فرن", "خلاط",
        "كرسي", "طاولة", "سرير", "خزانة", "مرآة",
        "ساعة", "نظارة", "محفظة", "مفاتيح", "حقيبة",
        "قلم", "كتاب", "دفتر", "ممحاة", "مسطرة",
        "ملعقة", "شوكة", "سكين", "صحن", "كوب",
        "إبريق", "قدر", "مقلاة", "فرشاة أسنان", "معجون",
        "صابون", "شامبو", "منشفة", "وسادة", "بطانية",
        "حذاء", "قميص", "بنطلون", "جاكيت", "قبعة",
        "جوارب", "قفازات", "وشاح", "حزام", "ربطة عنق",
        "مظلة", "كيس", "صندوق", "علبة", "زجاجة",
        "مفك", "مطرقة", "مسمار", "حبل", "سلم"
    ],
    sports: [
        "كرة القدم", "كرة السلة", "كرة الطائرة", "كرة اليد", "تنس",
        "تنس الطاولة", "سباحة", "غوص", "ركض", "قفز",
        "ملاكمة", "مصارعة", "كاراتيه", "تايكوندو", "جودو",
        "ركوب الخيل", "ركوب الجمال", "صيد", "صيد السمك", "تزلج",
        "تزلج على الجليد", "تزلج على الماء", "ركوب الأمواج", "بلياردو", "بولينج",
        "غولف", "هوكي", "كريكيت", "بيسبول", "رغبي",
        "دراجة هوائية", "دراجة نارية", "سباق سيارات", "رفع أثقال", "جمباز",
        "يوغا", "بيلاتس", "رماية", "تسلق جبال", "مظلات",
        "قفز بالحبل", "قفز عالي", "قفز طويل", "رمي رمح", "رمي قرص",
        "رمي مطرقة", "ماراثون", "ركوب قوارب", "تجديف", "سكواش",
        "كرة الريشة", "شطرنج", "داما", "بادل"
    ],
    celebrities: [
        "محمد صلاح", "كريستيانو رونالدو", "ليونيل ميسي", "نيمار", "كيليان مبابي",
        "زين الدين زيدان", "بيليه", "مارادونا", "محمد علي كلاي", "أم كلثوم",
        "فيروز", "عبد الحليم حافظ", "فريد الأطرش", "محمد عبد الوهاب", "نجاة الصغيرة",
        "وردة الجزائرية", "ماجدة الرومي", "إليسا", "نانسي عجرم", "عمرو دياب",
        "كاظم الساهر", "راشد الماجد", "محمد عبده", "طلال مداح", "هاني شاكر",
        "محمد منير", "تامر حسني", "وائل كفوري", "نجوى كرم", "هيفاء وهبي",
        "عادل إمام", "محمد رمضان", "أحمد حلمي", "أحمد السقا", "كريم عبد العزيز",
        "نور الشريف", "محمود ياسين", "فاتن حمامة", "عمر الشريف", "يوسف شاهين",
        "ليلى علوي", "يسرا", "نيللي كريم", "منى زكي", "هند صبري",
        "نانسي عجرم", "أحلام", "أصالة", "شيرين", "تامر عاشور",
        "عبد المجيد عبد الله", "محمد حماقي", "البرت أينشتاين", "ستيف جوبز", "بيل غيتس",
        "إيلون ماسك", "نيلسون مانديلا", "غاندي", "نابليون", "كليوباترا",
        "صلاح الدين الأيوبي", "ابن سينا", "ابن خلدون", "نجيب محفوظ"
    ]
};

// ============ CATEGORIES META ============
const CATEGORIES = [
    { id: 'movies',      name: 'أفلام',           emoji: '🎬', color: 'linear-gradient(135deg, #ef4444, #b91c1c)' },
    { id: 'animals',     name: 'حيوانات',         emoji: '🦁', color: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { id: 'jobs',        name: 'وظائف',           emoji: '👔', color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
    { id: 'daily',       name: 'أشياء يومية',     emoji: '🏠', color: 'linear-gradient(135deg, #10b981, #047857)' },
    { id: 'sports',      name: 'رياضة',           emoji: '⚽', color: 'linear-gradient(135deg, #06b6d4, #0e7490)' },
    { id: 'celebrities', name: 'شخصيات مشهورة',   emoji: '⭐', color: 'linear-gradient(135deg, #a855f7, #7e22ce)' }
];

// ============ GAME STATE ============
const state = {
    teams: [
        { name: 'الفريق الأحمر', score: 0, emoji: '🔥' },
        { name: 'الفريق الأزرق', score: 0, emoji: '💧' }
    ],
    duration: 45,
    totalRounds: 4,
    categoryId: null,
    currentRound: 1,          // 1..totalRounds
    currentTeamIdx: 0,        // 0 or 1
    turnsThisRound: 0,        // how many of the 2 teams have played this round
    roundScores: [0, 0],      // points scored by current team during current turn
    wordPool: [],
    wordIdx: 0,
    currentWord: '',
    timeLeft: 0,
    timerId: null,
    countdownId: null
};

// ============ HELPERS ============
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

function showScreen(id) {
    $$('.screen').forEach(s => s.classList.remove('active'));
    const target = $(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function showToast(msg, ms = 1800) {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._tid);
    t._tid = setTimeout(() => t.classList.remove('show'), ms);
}

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ============ HOME / NAVIGATION ============
function goHome() {
    stopTimer();
    showScreen('screen-home');
}

function goSetup() {
    stopTimer();
    showScreen('screen-setup');
}

function goCategories() {
    // Validate setup
    const t1 = $('team1').value.trim();
    const t2 = $('team2').value.trim();
    if (!t1 || !t2) {
        showToast('الرجاء إدخال اسمي الفريقين');
        return;
    }
    if (t1 === t2) {
        showToast('الرجاء اختيار اسمين مختلفين');
        return;
    }
    state.teams[0].name = t1;
    state.teams[1].name = t2;
    renderCategories();
    showScreen('screen-categories');
}

// ============ MODAL ============
function showHow() { $('modal-how').classList.add('active'); }
function closeHow() { $('modal-how').classList.remove('active'); }

// ============ SETUP HANDLERS ============
function setupOptionButtons() {
    $('duration-options').addEventListener('click', (e) => {
        const btn = e.target.closest('.option-btn');
        if (!btn) return;
        $$('#duration-options .option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.duration = parseInt(btn.dataset.duration, 10);
    });

    $('rounds-options').addEventListener('click', (e) => {
        const btn = e.target.closest('.option-btn');
        if (!btn) return;
        $$('#rounds-options .option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.totalRounds = parseInt(btn.dataset.rounds, 10);
    });
}

// ============ CATEGORIES ============
function renderCategories() {
    const grid = $('categories-grid');
    grid.innerHTML = '';
    CATEGORIES.forEach(cat => {
        const card = document.createElement('button');
        card.className = 'category-card';
        card.style.setProperty('--cat-color', cat.color);
        const count = WORDS[cat.id] ? WORDS[cat.id].length : 0;
        card.innerHTML = `
            <div class="category-emoji">${cat.emoji}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${count} كلمة</div>
        `;
        card.addEventListener('click', () => selectCategory(cat.id));
        grid.appendChild(card);
    });
}

function selectCategory(id) {
    state.categoryId = id;
    startGame();
}

// ============ GAME FLOW ============
function startGame() {
    state.teams[0].score = 0;
    state.teams[1].score = 0;
    state.currentRound = 1;
    state.currentTeamIdx = 0;
    state.turnsThisRound = 0;
    prepareTurn();
}

function prepareTurn() {
    // Build a fresh shuffled word pool for this turn
    state.wordPool = shuffle(WORDS[state.categoryId] || []);
    state.wordIdx = 0;
    state.roundScores = [0, 0];

    // Ready screen
    $('ready-round').textContent = state.currentRound;
    $('ready-total').textContent = state.totalRounds;
    const team = state.teams[state.currentTeamIdx];
    $('ready-team-name').textContent = team.name;
    $('ready-avatar').textContent = team.emoji;

    const card = $('ready-team-card');
    card.classList.remove('team-1', 'team-2');
    card.classList.add(state.currentTeamIdx === 0 ? 'team-1' : 'team-2');

    showScreen('screen-ready');
}

function startTurn() {
    // 3-2-1 countdown then go to game
    showScreen('screen-countdown');
    let n = 3;
    const cd = $('countdown-num');
    cd.textContent = n;
    cd.style.animation = 'none';
    void cd.offsetWidth;
    cd.style.animation = '';

    state.countdownId = setInterval(() => {
        n--;
        if (n > 0) {
            cd.textContent = n;
            cd.style.animation = 'none';
            void cd.offsetWidth;
            cd.style.animation = 'countdownPop 0.9s var(--ease)';
        } else if (n === 0) {
            cd.textContent = 'ابدأ!';
            cd.style.animation = 'none';
            void cd.offsetWidth;
            cd.style.animation = 'countdownPop 0.9s var(--ease)';
        } else {
            clearInterval(state.countdownId);
            state.countdownId = null;
            beginTurn();
        }
    }, 900);
}

function beginTurn() {
    // Setup game screen
    const team = state.teams[state.currentTeamIdx];
    const badge = $('game-team-badge');
    badge.classList.remove('team-1', 'team-2');
    badge.classList.add(state.currentTeamIdx === 0 ? 'team-1' : 'team-2');
    $('game-team-name').textContent = team.name;
    $('game-team-emoji').textContent = team.emoji;
    $('game-score').textContent = team.score;

    state.roundScores[state.currentTeamIdx] = 0;
    state.timeLeft = state.duration;
    updateTimerUI();
    showWord();
    showScreen('screen-game');
    startTimer();
}

function startTimer() {
    stopTimer();
    state.timerId = setInterval(() => {
        state.timeLeft--;
        updateTimerUI();
        if (state.timeLeft <= 0) {
            stopTimer();
            endTurn();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
    }
    if (state.countdownId) {
        clearInterval(state.countdownId);
        state.countdownId = null;
    }
}

function updateTimerUI() {
    const num = $('timer-number');
    const wrap = num.parentElement;
    const prog = $('timer-progress');
    const circumference = 2 * Math.PI * 54; // 339.292

    num.textContent = state.timeLeft;

    const pct = Math.max(0, state.timeLeft / state.duration);
    prog.style.strokeDashoffset = (circumference * (1 - pct)).toFixed(2);

    prog.classList.remove('warning', 'danger');
    wrap.classList.remove('danger');

    if (state.timeLeft <= 5) {
        prog.classList.add('danger');
        wrap.classList.add('danger');
    } else if (state.timeLeft <= 15) {
        prog.classList.add('warning');
    }
}

function showWord() {
    const word = state.wordPool[state.wordIdx];
    if (!word) {
        // Shouldn't happen often, but reshuffle if exhausted
        state.wordPool = shuffle(WORDS[state.categoryId] || []);
        state.wordIdx = 0;
    }
    state.currentWord = state.wordPool[state.wordIdx];
    const el = $('word-text');
    el.textContent = state.currentWord;
    el.classList.remove('flash-correct', 'flash-skip');
    // Force reflow to restart animation
    void el.offsetWidth;
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
}

function correctWord() {
    if (state.timeLeft <= 0) return;
    state.teams[state.currentTeamIdx].score++;
    state.roundScores[state.currentTeamIdx]++;
    $('game-score').textContent = state.teams[state.currentTeamIdx].score;

    const el = $('word-text');
    el.classList.add('flash-correct');
    setTimeout(() => nextWord(), 250);
}

function skipWord() {
    if (state.timeLeft <= 0) return;
    const el = $('word-text');
    el.classList.add('flash-skip');
    setTimeout(() => nextWord(), 200);
}

function nextWord() {
    state.wordIdx++;
    if (state.wordIdx >= state.wordPool.length) {
        // Reshuffle to keep playing if we run out
        state.wordPool = shuffle(WORDS[state.categoryId] || []);
        state.wordIdx = 0;
    }
    showWord();
}

function endTurn() {
    state.turnsThisRound++;
    showScoreboard();
}

// ============ SCOREBOARD ============
function showScoreboard() {
    const t1 = state.teams[0];
    const t2 = state.teams[1];

    $('sb-round').textContent = state.currentRound;
    $('sb-team1-name').textContent = t1.name;
    $('sb-team2-name').textContent = t2.name;
    $('sb-team1-score').textContent = t1.score;
    $('sb-team2-score').textContent = t2.score;

    $('sb-team1-card').classList.remove('leading');
    $('sb-team2-card').classList.remove('leading');
    if (t1.score > t2.score) $('sb-team1-card').classList.add('leading');
    else if (t2.score > t1.score) $('sb-team2-card').classList.add('leading');

    // Summary of the team that just played
    const team = state.teams[state.currentTeamIdx];
    const points = state.roundScores[state.currentTeamIdx];
    $('sb-this-team').textContent = team.name;
    $('sb-this-points').textContent = points;

    const isGameOver = (state.turnsThisRound >= 2 && state.currentRound >= state.totalRounds);
    const btn = $('sb-continue-btn');
    btn.querySelector('span:first-child').textContent = isGameOver ? 'النتيجة النهائية' : 'المتابعة';

    showScreen('screen-scoreboard');
}

function nextTurn() {
    // Advance round/team
    if (state.turnsThisRound >= 2) {
        // both teams played this round
        if (state.currentRound >= state.totalRounds) {
            endGame();
            return;
        }
        state.currentRound++;
        state.turnsThisRound = 0;
        state.currentTeamIdx = 0;
    } else {
        state.currentTeamIdx = 1 - state.currentTeamIdx;
    }
    prepareTurn();
}

// ============ END GAME ============
function endGame() {
    const t1 = state.teams[0];
    const t2 = state.teams[1];

    let winnerName, winnerScore;
    const winnerEl = $('winner-name');
    winnerEl.classList.remove('tie-mode');

    if (t1.score > t2.score) {
        winnerName = t1.name;
        winnerScore = t1.score;
    } else if (t2.score > t1.score) {
        winnerName = t2.name;
        winnerScore = t2.score;
    } else {
        winnerName = 'تعادل!';
        winnerScore = t1.score;
        winnerEl.classList.add('tie-mode');
    }

    winnerEl.textContent = winnerName;
    $('winner-score').textContent = `${winnerScore} نقطة`;

    $('final-name-1').textContent = t1.name;
    $('final-name-2').textContent = t2.name;
    $('final-score-1').textContent = t1.score;
    $('final-score-2').textContent = t2.score;

    const row1 = $('final-row-1');
    const row2 = $('final-row-2');
    row1.classList.remove('winner-row');
    row2.classList.remove('winner-row');
    if (t1.score > t2.score) row1.classList.add('winner-row');
    else if (t2.score > t1.score) row2.classList.add('winner-row');

    showScreen('screen-end');
    launchConfetti();
}

function launchConfetti() {
    const container = $('confetti');
    container.innerHTML = '';
    const colors = ['#facc15', '#fb923c', '#f472b6', '#3b82f6', '#22c55e', '#ef4444', '#a855f7'];
    const count = 60;
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
        piece.style.animationDelay = (Math.random() * 1.2) + 's';
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (10 + Math.random() * 10) + 'px';
        container.appendChild(piece);
    }
}

function restartSameSettings() {
    startGame();
}

// ============ ACTION ROUTER ============
const ACTIONS = {
    'go-home': goHome,
    'go-setup': goSetup,
    'go-categories': goCategories,
    'show-how': showHow,
    'close-how': closeHow,
    'start-turn': startTurn,
    'correct-word': correctWord,
    'skip-word': skipWord,
    'next-turn': nextTurn,
    'restart-same': restartSameSettings
};

function handleAction(e) {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const fn = ACTIONS[el.dataset.action];
    if (fn) {
        e.preventDefault();
        fn();
    }
}

// ============ KEYBOARD SHORTCUTS ============
function onKey(e) {
    const isGame = $('screen-game').classList.contains('active');
    if (isGame && state.timeLeft > 0) {
        if (e.key === 'ArrowRight' || e.code === 'Space' || e.key === 'Enter') {
            // Right arrow in RTL maps to "correct" (the primary positive action button is on the right in our layout)
            e.preventDefault();
            correctWord();
        } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
            e.preventDefault();
            skipWord();
        }
    }

    // Close modal on Escape
    if (e.key === 'Escape' && $('modal-how').classList.contains('active')) {
        closeHow();
    }
}

// ============ INIT ============
function init() {
    document.body.addEventListener('click', handleAction);
    document.addEventListener('keydown', onKey);

    // Close modal on backdrop click
    $('modal-how').addEventListener('click', (e) => {
        if (e.target.id === 'modal-how') closeHow();
    });

    setupOptionButtons();
    renderCategories();
    showScreen('screen-home');
}

document.addEventListener('DOMContentLoaded', init);
