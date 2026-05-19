/* ============================================
   مثّلها / Act It Out! — Bilingual Charades Game
   Pure vanilla JS — no dependencies
   ============================================ */

// ============ STRINGS (i18n) ============
const STRINGS = {
    ar: {
        gameTitle: 'مثّلها',
        gameSubtitle: 'لعبة التمثيل الصامت الجماعية',
        featTeams: 'فريقان',
        featTimer: 'وقت محدد',
        featFun: 'متعة بلا حدود',
        btnStart: 'ابدأ اللعب',
        btnHowToPlay: 'كيف تلعب؟',
        howTitle: 'كيف تلعب؟',
        howStep1: '<strong>قسّموا أنفسكم</strong> إلى فريقين وأدخلوا أسماء الفريقين.',
        howStep2: '<strong>اختاروا</strong> مدة الجولة وعدد الجولات والفئة.',
        howStep3: 'عند بدء الدور، يقوم <strong>ممثل من الفريق</strong> بقراءة الكلمة بسرية.',
        howStep4: 'يحاول الممثل <strong>تمثيل الكلمة دون التحدث</strong> ويحاول فريقه التخمين.',
        howStep5: 'اضغط <strong>"صح"</strong> عند التخمين الصحيح، أو <strong>"تخطي"</strong> لتجاوز الكلمة.',
        howStep6: 'عند انتهاء الوقت، <strong>ينتقل الدور</strong> للفريق الآخر.',
        howStep7: 'الفريق صاحب <strong>أعلى نقاط</strong> في النهاية هو الفائز! 🏆',
        setupTitle: 'إعدادات اللعبة',
        cardTeams: 'الفريقان',
        cardDuration: 'مدة الجولة',
        cardRounds: 'عدد الجولات',
        team1Label: 'اسم الفريق الأول',
        team1Placeholder: 'مثلاً: النمور',
        team1Default: 'الفريق الأحمر',
        team2Label: 'اسم الفريق الثاني',
        team2Placeholder: 'مثلاً: الصقور',
        team2Default: 'الفريق الأزرق',
        secLabel: 'ثانية',
        roundsLabel: 'جولات',
        btnNextCategory: 'التالي: اختر الفئة',
        categoriesTitle: 'اختر الفئة',
        wordsCount: 'كلمة',
        readyGetReady: 'استعدوا!',
        readyInstructions: 'اختاروا ممثلاً يقوم بالتمثيل،<br>والباقي يحاولون التخمين',
        btnStartTurn: 'ابدأ الدور',
        roundBadge: (r, t) => `الجولة ${r} من ${t}`,
        countdownLabel: 'استعد...',
        countdownGo: 'ابدأ!',
        scoreLabel: 'النقاط',
        btnSkip: 'تخطي',
        btnCorrect: 'صح',
        sbRoundBadge: (r) => `انتهت الجولة ${r}`,
        scoreboardTitle: 'النتائج حتى الآن',
        scoreUnit: 'نقطة',
        roundSummary: (team, pts) => `سجل الفريق <strong>${team}</strong> هذه الجولة <strong>${pts}</strong> نقطة!`,
        btnContinue: 'المتابعة',
        btnFinalResults: 'النتيجة النهائية',
        winnerLabel: 'الفائز',
        tieText: 'تعادل!',
        winnerScore: (s) => `${s} نقطة`,
        btnRestart: 'إعادة بنفس الإعدادات',
        btnHome: 'الصفحة الرئيسية',
        toastEnterNames: 'الرجاء إدخال اسمي الفريقين',
        toastDiffNames: 'الرجاء اختيار اسمين مختلفين',
        backArrow: '→',
        fwdArrow: '←',
        pageTitle: 'مثّلها - لعبة التمثيل الصامت',
    },
    en: {
        gameTitle: 'Act It Out!',
        gameSubtitle: 'The team charades party game',
        featTeams: '2 Teams',
        featTimer: 'Timed Rounds',
        featFun: 'Endless Fun',
        btnStart: 'Start Playing',
        btnHowToPlay: 'How to Play?',
        howTitle: 'How to Play?',
        howStep1: '<strong>Split into two teams</strong> and enter both team names.',
        howStep2: '<strong>Choose</strong> round duration, number of rounds, and a category.',
        howStep3: 'On each turn, one player <strong>secretly reads the word</strong>.',
        howStep4: 'They act it out <strong>without speaking</strong> while their team guesses.',
        howStep5: 'Press <strong>"Correct"</strong> when guessed right, or <strong>"Skip"</strong> to pass.',
        howStep6: 'When time is up, <strong>the other team</strong> takes their turn.',
        howStep7: 'The team with the <strong>most points</strong> at the end wins! 🏆',
        setupTitle: 'Game Setup',
        cardTeams: 'Teams',
        cardDuration: 'Round Duration',
        cardRounds: 'Number of Rounds',
        team1Label: 'Team 1 Name',
        team1Placeholder: 'e.g. The Tigers',
        team1Default: 'Red Team',
        team2Label: 'Team 2 Name',
        team2Placeholder: 'e.g. The Eagles',
        team2Default: 'Blue Team',
        secLabel: 'sec',
        roundsLabel: 'rounds',
        btnNextCategory: 'Next: Pick Category',
        categoriesTitle: 'Choose a Category',
        wordsCount: 'words',
        readyGetReady: 'Get Ready!',
        readyInstructions: 'Pick an actor from your team,<br>the rest try to guess!',
        btnStartTurn: 'Start Turn',
        roundBadge: (r, t) => `Round ${r} of ${t}`,
        countdownLabel: 'Get ready...',
        countdownGo: 'Go!',
        scoreLabel: 'Score',
        btnSkip: 'Skip',
        btnCorrect: 'Correct',
        sbRoundBadge: (r) => `Round ${r} Over`,
        scoreboardTitle: 'Scores So Far',
        scoreUnit: 'pts',
        roundSummary: (team, pts) => `<strong>${team}</strong> scored <strong>${pts}</strong> points this round!`,
        btnContinue: 'Continue',
        btnFinalResults: 'Final Results',
        winnerLabel: 'Winner',
        tieText: "It's a Tie!",
        winnerScore: (s) => `${s} pts`,
        btnRestart: 'Play Again (Same Settings)',
        btnHome: 'Home',
        toastEnterNames: 'Please enter both team names',
        toastDiffNames: 'Please choose different team names',
        backArrow: '←',
        fwdArrow: '→',
        pageTitle: 'Act It Out! - Charades Game',
    }
};

// ============ ARABIC WORDS DATA ============
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
        "أحلام", "أصالة", "شيرين", "تامر عاشور",
        "عبد المجيد عبد الله", "محمد حماقي", "البرت أينشتاين", "ستيف جوبز", "بيل غيتس",
        "إيلون ماسك", "نيلسون مانديلا", "غاندي", "نابليون", "كليوباترا",
        "صلاح الدين الأيوبي", "ابن سينا", "ابن خلدون", "نجيب محفوظ"
    ]
};

// ============ ARABIC CATEGORIES META ============
const CATEGORIES = [
    { id: 'movies',      name: 'أفلام',           emoji: '🎬', color: 'linear-gradient(135deg, #ef4444, #b91c1c)' },
    { id: 'animals',     name: 'حيوانات',         emoji: '🦁', color: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { id: 'jobs',        name: 'وظائف',           emoji: '👔', color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
    { id: 'daily',       name: 'أشياء يومية',     emoji: '🏠', color: 'linear-gradient(135deg, #10b981, #047857)' },
    { id: 'sports',      name: 'رياضة',           emoji: '⚽', color: 'linear-gradient(135deg, #06b6d4, #0e7490)' },
    { id: 'celebrities', name: 'شخصيات مشهورة',   emoji: '⭐', color: 'linear-gradient(135deg, #a855f7, #7e22ce)' }
];

// ============ ENGLISH WORDS DATA ============
const WORDS_EN = {
    movies: [
        "Titanic", "The Lion King", "Aladdin", "Harry Potter", "Lord of the Rings",
        "Spider-Man", "Iron Man", "Batman", "Superman", "The Joker",
        "Avengers", "Star Wars", "The Matrix", "Pirates of the Caribbean", "Indiana Jones",
        "Rocky", "The Godfather", "Forrest Gump", "Jurassic Park", "Beauty and the Beast",
        "Frozen", "Shrek", "Finding Nemo", "Toy Story", "Kung Fu Panda",
        "Madagascar", "Ice Age", "WALL-E", "Up", "Coco",
        "Avatar", "The Sixth Sense", "Mission Impossible", "James Bond", "Fast and Furious",
        "Transformers", "Inception", "Interstellar", "The Martian", "Gravity",
        "Black Panther", "Wonder Woman", "Doctor Strange", "Thor", "The Dark Knight",
        "Gladiator", "Braveheart", "Schindler's List", "The Revenant", "Dune"
    ],
    animals: [
        "Lion", "Tiger", "Elephant", "Giraffe", "Gazelle",
        "Camel", "Horse", "Donkey", "Cow", "Sheep",
        "Goat", "Dog", "Cat", "Rabbit", "Mouse",
        "Monkey", "Gorilla", "Bear", "Wolf", "Fox",
        "Snake", "Crocodile", "Turtle", "Frog", "Lizard",
        "Whale", "Dolphin", "Shark", "Octopus", "Crab",
        "Eagle", "Hawk", "Owl", "Parrot", "Peacock",
        "Penguin", "Ostrich", "Pigeon", "Duck", "Chicken",
        "Cheetah", "Rhinoceros", "Hippopotamus", "Kangaroo", "Koala",
        "Panda", "Bull", "Pig", "Bee", "Butterfly",
        "Ant", "Grasshopper", "Scorpion", "Spider", "Bat"
    ],
    jobs: [
        "Doctor", "Nurse", "Engineer", "Teacher", "Chef",
        "Baker", "Carpenter", "Blacksmith", "Mechanic", "Electrician",
        "Plumber", "Barber", "Tailor", "Pilot", "Flight Attendant",
        "Sailor", "Fisherman", "Farmer", "Firefighter", "Police Officer",
        "Soldier", "Judge", "Lawyer", "Accountant", "Journalist",
        "Presenter", "Photographer", "Painter", "Sculptor", "Musician",
        "Singer", "Actor", "Dancer", "Soccer Player", "Referee",
        "Coach", "Salesperson", "Waiter", "Driver", "Mailman",
        "Security Guard", "Scientist", "Writer", "Poet", "Translator",
        "Dentist", "Pharmacist", "Surgeon", "Architect", "Programmer",
        "Designer", "Hairdresser", "Gardener", "Astronaut", "Librarian"
    ],
    daily: [
        "Phone", "Computer", "Television", "Refrigerator", "Washing Machine",
        "Iron", "Broom", "Microwave", "Oven", "Blender",
        "Chair", "Table", "Bed", "Wardrobe", "Mirror",
        "Clock", "Glasses", "Wallet", "Keys", "Bag",
        "Pen", "Book", "Notebook", "Eraser", "Ruler",
        "Spoon", "Fork", "Knife", "Plate", "Cup",
        "Kettle", "Pot", "Pan", "Toothbrush", "Toothpaste",
        "Soap", "Shampoo", "Towel", "Pillow", "Blanket",
        "Shoes", "Shirt", "Pants", "Jacket", "Hat",
        "Socks", "Gloves", "Scarf", "Belt", "Tie",
        "Umbrella", "Box", "Bottle", "Screwdriver", "Hammer",
        "Nail", "Rope", "Ladder", "Candle", "Lamp"
    ],
    sports: [
        "Soccer", "Basketball", "Volleyball", "Handball", "Tennis",
        "Table Tennis", "Swimming", "Diving", "Running", "Jumping",
        "Boxing", "Wrestling", "Karate", "Taekwondo", "Judo",
        "Horse Riding", "Cycling", "Fishing", "Skiing", "Ice Skating",
        "Water Skiing", "Surfing", "Billiards", "Bowling", "Golf",
        "Hockey", "Cricket", "Baseball", "Rugby", "Motorcycle Racing",
        "Car Racing", "Weightlifting", "Gymnastics", "Yoga", "Pilates",
        "Archery", "Mountain Climbing", "Skydiving", "Jump Rope", "High Jump",
        "Long Jump", "Javelin", "Discus", "Marathon", "Rowing",
        "Squash", "Badminton", "Chess", "Paddle Tennis", "Fencing"
    ],
    celebrities: [
        "Mohamed Salah", "Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappe",
        "Zinedine Zidane", "Pele", "Maradona", "Muhammad Ali", "Michael Jackson",
        "Elvis Presley", "Beyonce", "Taylor Swift", "Adele", "Rihanna",
        "Madonna", "Lady Gaga", "Ed Sheeran", "Justin Bieber", "Eminem",
        "Brad Pitt", "Angelina Jolie", "Tom Hanks", "Leonardo DiCaprio", "Johnny Depp",
        "Will Smith", "Keanu Reeves", "Denzel Washington", "Meryl Streep", "Oprah Winfrey",
        "Albert Einstein", "Stephen Hawking", "Steve Jobs", "Bill Gates", "Elon Musk",
        "Nelson Mandela", "Gandhi", "Napoleon", "Cleopatra", "Shakespeare",
        "Isaac Newton", "Charles Darwin", "Abraham Lincoln", "Martin Luther King", "Marie Curie",
        "Mozart", "Beethoven", "Picasso", "Michelangelo", "Walt Disney",
        "Charlie Chaplin", "Bruce Lee", "Arnold Schwarzenegger", "Robert Downey Jr", "Dwayne Johnson"
    ]
};

// ============ ENGLISH CATEGORIES META ============
const CATEGORIES_EN = [
    { id: 'movies',      name: 'Movies',        emoji: '🎬', color: 'linear-gradient(135deg, #ef4444, #b91c1c)' },
    { id: 'animals',     name: 'Animals',        emoji: '🦁', color: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { id: 'jobs',        name: 'Jobs',           emoji: '👔', color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
    { id: 'daily',       name: 'Daily Objects',  emoji: '🏠', color: 'linear-gradient(135deg, #10b981, #047857)' },
    { id: 'sports',      name: 'Sports',         emoji: '⚽', color: 'linear-gradient(135deg, #06b6d4, #0e7490)' },
    { id: 'celebrities', name: 'Famous People',  emoji: '⭐', color: 'linear-gradient(135deg, #a855f7, #7e22ce)' }
];

// ============ GAME STATE ============
const state = {
    lang: 'ar',
    teams: [
        { name: 'الفريق الأحمر', score: 0, emoji: '🔥' },
        { name: 'الفريق الأزرق', score: 0, emoji: '💧' }
    ],
    duration: 45,
    totalRounds: 4,
    categoryId: null,
    currentRound: 1,
    currentTeamIdx: 0,
    turnsThisRound: 0,
    roundScores: [0, 0],
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

function s() { return STRINGS[state.lang]; }

function getWords() {
    return (state.lang === 'ar' ? WORDS : WORDS_EN)[state.categoryId] || [];
}

function getCategories() {
    return state.lang === 'ar' ? CATEGORIES : CATEGORIES_EN;
}

function showScreen(id) {
    $$('.screen').forEach(sc => sc.classList.remove('active'));
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

// ============ LANGUAGE ============
function applyLanguage(lang) {
    state.lang = lang;
    const str = STRINGS[lang];
    const isRTL = lang === 'ar';

    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title = str.pageTitle;

    // Update all static text nodes
    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (str[key] !== undefined) el.textContent = str[key];
    });

    // Update all HTML nodes (with <strong> etc.)
    $$('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (str[key] !== undefined) el.innerHTML = str[key];
    });

    // Update input placeholders and defaults
    const t1 = $('team1');
    const t2 = $('team2');
    const otherStr = STRINGS[lang === 'ar' ? 'en' : 'ar'];
    if (t1.value === otherStr.team1Default || t1.value === '') t1.value = str.team1Default;
    if (t2.value === otherStr.team2Default || t2.value === '') t2.value = str.team2Default;
    t1.placeholder = str.team1Placeholder;
    t2.placeholder = str.team2Placeholder;

    // Update directional arrows
    $$('.back-btn').forEach(btn => { btn.textContent = str.backArrow; });
    $$('.btn-arrow').forEach(el => { el.textContent = str.fwdArrow; });

    // Update lang toggle buttons
    $('lang-ar').classList.toggle('active', lang === 'ar');
    $('lang-en').classList.toggle('active', lang === 'en');

    renderCategories();
}

function setLangAr() { applyLanguage('ar'); }
function setLangEn() { applyLanguage('en'); }

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
    const t1 = $('team1').value.trim();
    const t2 = $('team2').value.trim();
    if (!t1 || !t2) { showToast(s().toastEnterNames); return; }
    if (t1 === t2)  { showToast(s().toastDiffNames); return; }
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
    const cats = getCategories();
    const words = state.lang === 'ar' ? WORDS : WORDS_EN;
    cats.forEach(cat => {
        const card = document.createElement('button');
        card.className = 'category-card';
        card.style.setProperty('--cat-color', cat.color);
        const count = words[cat.id] ? words[cat.id].length : 0;
        card.innerHTML = `
            <div class="category-emoji">${cat.emoji}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${count} ${s().wordsCount}</div>
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
    state.wordPool = shuffle(getWords());
    state.wordIdx = 0;
    state.roundScores = [0, 0];

    $('ready-round-badge').textContent = s().roundBadge(state.currentRound, state.totalRounds);
    const team = state.teams[state.currentTeamIdx];
    $('ready-team-name').textContent = team.name;
    $('ready-avatar').textContent = team.emoji;

    const card = $('ready-team-card');
    card.classList.remove('team-1', 'team-2');
    card.classList.add(state.currentTeamIdx === 0 ? 'team-1' : 'team-2');

    showScreen('screen-ready');
}

function startTurn() {
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
            cd.textContent = s().countdownGo;
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
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
    if (state.countdownId) { clearInterval(state.countdownId); state.countdownId = null; }
}

function updateTimerUI() {
    const num = $('timer-number');
    const wrap = num.parentElement;
    const prog = $('timer-progress');
    const circumference = 2 * Math.PI * 54;

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
        state.wordPool = shuffle(getWords());
        state.wordIdx = 0;
    }
    state.currentWord = state.wordPool[state.wordIdx];
    const el = $('word-text');
    el.textContent = state.currentWord;
    el.classList.remove('flash-correct', 'flash-skip');
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
        state.wordPool = shuffle(getWords());
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
    const str = s();

    $('sb-round-badge').textContent = str.sbRoundBadge(state.currentRound);
    $('sb-team1-name').textContent = t1.name;
    $('sb-team2-name').textContent = t2.name;
    $('sb-team1-score').textContent = t1.score;
    $('sb-team2-score').textContent = t2.score;

    $('sb-team1-card').classList.remove('leading');
    $('sb-team2-card').classList.remove('leading');
    if (t1.score > t2.score) $('sb-team1-card').classList.add('leading');
    else if (t2.score > t1.score) $('sb-team2-card').classList.add('leading');

    const team = state.teams[state.currentTeamIdx];
    const points = state.roundScores[state.currentTeamIdx];
    $('round-summary').innerHTML = str.roundSummary(team.name, points);

    const isGameOver = (state.turnsThisRound >= 2 && state.currentRound >= state.totalRounds);
    $('sb-continue-span').textContent = isGameOver ? str.btnFinalResults : str.btnContinue;

    showScreen('screen-scoreboard');
}

function nextTurn() {
    if (state.turnsThisRound >= 2) {
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
    const str = s();

    let winnerName, winnerPoints;
    const winnerEl = $('winner-name');
    winnerEl.classList.remove('tie-mode');

    if (t1.score > t2.score) {
        winnerName = t1.name; winnerPoints = t1.score;
    } else if (t2.score > t1.score) {
        winnerName = t2.name; winnerPoints = t2.score;
    } else {
        winnerName = str.tieText; winnerPoints = t1.score;
        winnerEl.classList.add('tie-mode');
    }

    winnerEl.textContent = winnerName;
    $('winner-score').textContent = str.winnerScore(winnerPoints);

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
    for (let i = 0; i < 60; i++) {
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

function restartSameSettings() { startGame(); }

// ============ ACTION ROUTER ============
const ACTIONS = {
    'go-home':       goHome,
    'go-setup':      goSetup,
    'go-categories': goCategories,
    'show-how':      showHow,
    'close-how':     closeHow,
    'start-turn':    startTurn,
    'correct-word':  correctWord,
    'skip-word':     skipWord,
    'next-turn':     nextTurn,
    'restart-same':  restartSameSettings,
    'set-lang-ar':   setLangAr,
    'set-lang-en':   setLangEn,
};

function handleAction(e) {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const fn = ACTIONS[el.dataset.action];
    if (fn) { e.preventDefault(); fn(); }
}

// ============ KEYBOARD SHORTCUTS ============
function onKey(e) {
    const isGame = $('screen-game').classList.contains('active');
    if (isGame && state.timeLeft > 0) {
        if (e.key === 'ArrowRight' || e.code === 'Space' || e.key === 'Enter') {
            e.preventDefault();
            correctWord();
        } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
            e.preventDefault();
            skipWord();
        }
    }
    if (e.key === 'Escape' && $('modal-how').classList.contains('active')) {
        closeHow();
    }
}

// ============ INIT ============
function init() {
    document.body.addEventListener('click', handleAction);
    document.addEventListener('keydown', onKey);
    $('modal-how').addEventListener('click', (e) => {
        if (e.target.id === 'modal-how') closeHow();
    });
    setupOptionButtons();
    applyLanguage('ar');
    showScreen('screen-home');
}

document.addEventListener('DOMContentLoaded', init);
