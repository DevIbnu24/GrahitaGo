(() => {
  'use strict';

  /* =========================================================
     1. DATA MATERI (12 TOPIK BAHAYA DENGAN ASET SVG ASLI)
  ========================================================= */
  const TOPICS = [
    {
      id: 'api',
      title: 'Api & Kompor',
      tint: '#FFF3E0',
      iconImg: 'assets/api.svg',
      dangerImg: 'assets/api-pilihan.svg',
      safeImg: 'assets/api-aman.svg',
      dangerText: 'Api itu sangat panas dan bisa membakar kulit atau rumah. Jangan sentuh api, korek, atau kompor yang menyala.',
      safeText: 'Jauhi api dengan tenang, keluar lewat pintu terdekat, dan segera beri tahu orang dewasa atau hubungi 113.',
      checklist: [
        'Jangan sentuh api atau korek api',
        'Menjauh pelan menuju tempat aman',
        'Beri tahu orang dewasa atau telepon 113'
      ],
      quizQuestion: 'Jika melihat api menyala di dapur, mana sikap yang aman?',
      safeLabel: 'Menjauh bersama orang dewasa ke pintu keluar',
      unsafeLabel: 'Mendekat dan menyentuh barang dekat api'
    },
    {
      id: 'listrik',
      title: 'Listrik & Stopkontak',
      tint: '#FFF8DB',
      iconImg: 'assets/listrik.svg',
      dangerImg: 'assets/listrik-pilihan.svg',
      safeImg: 'assets/listrik-aman.svg',
      dangerText: 'Stopkontak dan kabel listrik bisa menyetrum dan sangat berbahaya, apalagi saat tangan sedang basah.',
      safeText: 'Jangan colok atau sentuh stopkontak sendiri. Minta bantuan orang tua atau guru jika ingin menyalakan alat listrik.',
      checklist: [
        'Jangan memasukkan jari ke lubang listrik',
        'Pastikan tangan selalu kering',
        'Minta bantuan orang dewasa untuk mencolok kabel'
      ],
      quizQuestion: 'Saat melihat stopkontak listrik di dinding, apa yang aman dilakukan?',
      safeLabel: 'Tetap menjauh dan minta bantuan orang dewasa',
      unsafeLabel: 'Menyentuh stopkontak listrik sendirian'
    },
    {
      id: 'tajam',
      title: 'Benda Tajam',
      tint: '#FDECEC',
      iconImg: 'assets/tajam.svg',
      dangerImg: 'assets/tajam-pilihan.svg',
      safeImg: 'assets/tajam-aman.svg',
      dangerText: 'Pisau, gunting runcing, dan pecahan kaca bisa melukai tangan atau kaki hingga berdarah.',
      safeText: 'Jangan bermain dengan benda tajam. Biarkan di tempatnya dan minta orang dewasa memindahkannya dengan aman.',
      checklist: [
        'Jangan pegang pisau atau pecahan kaca',
        'Berjalan mundur pelan menjauh',
        'Beri tahu orang tua atau guru'
      ],
      quizQuestion: 'Kamu melihat pisau tergeletak di meja. Pilihan mana yang aman?',
      safeLabel: 'Tidak menyentuh dan melapor ke orang dewasa',
      unsafeLabel: 'Mengambil dan memegang pisau sendiri'
    },
    {
      id: 'air',
      title: 'Air Dalam & Banjir',
      tint: '#E3F5FF',
      iconImg: 'assets/air.svg',
      dangerImg: 'assets/air-pilihan.svg',
      safeImg: 'assets/air-aman.svg',
      dangerText: 'Kolam dalam, sungai deras, atau air banjir bisa membuat kita terpeleset dan tenggelam.',
      safeText: 'Jangan masuk ke air dalam sendirian. Tetap di tempat kering dan selalu bersama pendamping.',
      checklist: [
        'Jangan mendekati tepi kolam atau sungai sendiri',
        'Tetap berada di tempat yang kering',
        'Pegang tangan orang tua saat dekat air'
      ],
      quizQuestion: 'Di depan ada kolam air yang dalam. Mana tindakan yang aman?',
      safeLabel: 'Menjauh dari air bersama pendamping',
      unsafeLabel: 'Bermain di pinggir air sendirian'
    },
    {
      id: 'licin',
      title: 'Lantai Licin',
      tint: '#E8F7FA',
      iconImg: 'assets/licin.svg',
      dangerImg: 'assets/licin-pilihan.svg',
      safeImg: 'assets/licin-aman.svg',
      dangerText: 'Lantai yang basah atau berair sangat licin. Jika berlari, kita bisa terpeleset dan jatuh.',
      safeText: 'Berhenti sejenak, lewati bagian lantai yang kering, berjalan pelan, dan beri tahu orang dewasa agar dilap.',
      checklist: [
        'Jangan berlari di lantai basah',
        'Pilih jalan di bagian lantai yang kering',
        'Minta bantuan orang dewasa untuk mengelap air'
      ],
      quizQuestion: 'Ada genangan air di lantai rumah. Cara berjalan mana yang aman?',
      safeLabel: 'Menghindari genangan dan berjalan pelan',
      unsafeLabel: 'Berlari melewati genangan air yang licin'
    },
    {
      id: 'obat',
      title: 'Obat-obatan',
      tint: '#F3EDFF',
      iconImg: 'assets/obat.svg',
      dangerImg: 'assets/obat-pilihan.svg',
      safeImg: 'assets/obat-aman.svg',
      dangerText: 'Obat bukan permen. Minum obat sembarangan tanpa izin bisa membuat tubuh sakit parah.',
      safeText: 'Jangan minum obat sendiri. Hanya minum obat yang diberikan langsung oleh orang tua atau dokter.',
      checklist: [
        'Obat bukan permen dan tidak boleh dicicipi',
        'Jangan membuka botol obat sendiri',
        'Hanya minum obat dari orang tua atau dokter'
      ],
      quizQuestion: 'Kamu menemukan botol obat di meja. Apa sikap yang aman?',
      safeLabel: 'Tidak mengambil dan menyerahkan ke orang dewasa',
      unsafeLabel: 'Mengambil dan meminum obat sendiri'
    },
    {
      id: 'pembersih',
      title: 'Cairan Pembersih',
      tint: '#E6FAF5',
      iconImg: 'assets/pembersih.svg',
      dangerImg: 'assets/pembersih-pilihan.svg',
      safeImg: 'assets/pembersih-aman.svg',
      dangerText: 'Sabun pel, pemutih, dan semprotan pembersih mengandung bahan kimia beracun. Tidak boleh diminum atau mengenai mata.',
      safeText: 'Jangan buka atau semprot botol pembersih. Jauhi dan beri tahu orang dewasa jika botolnya terbuka.',
      checklist: [
        'Jangan minum atau mencium cairan pembersih',
        'Jangan menyemprotkan ke wajah atau tangan',
        'Jauhkan diri dan panggil orang dewasa'
      ],
      quizQuestion: 'Ada botol semprotan pembersih di lantai. Mana pilihan yang aman?',
      safeLabel: 'Menjauh dan tidak menyentuh botol pembersih',
      unsafeLabel: 'Memegang dan bermain dengan botol pembersih'
    },
    {
      id: 'panas',
      title: 'Benda Panas',
      tint: '#FFF1E6',
      iconImg: 'assets/panas.svg',
      dangerImg: 'assets/panas-pilihan.svg',
      safeImg: 'assets/panas-aman.svg',
      dangerText: 'Panci berasap, air mendidih, dan setrika sangat panas. Menyentuhnya bisa membuat kulit melepuh.',
      safeText: 'Jauhi panci yang mengeluarkan uap panas dan tunggu orang dewasa menyajikan makanan yang sudah hangat.',
      checklist: [
        'Perhatikan tanda uap panas di atas panci',
        'Jangan sentuh panci atau setrika',
        'Tunggu orang dewasa membantu di dapur'
      ],
      quizQuestion: 'Panci di dapur sedang mengeluarkan uap panas. Mana yang aman?',
      safeLabel: 'Menjauh dari panci panas bersama orang dewasa',
      unsafeLabel: 'Menyentuh panci yang sedang berasap panas'
    },
    {
      id: 'tangga',
      title: 'Tangga',
      tint: '#FFF6E0',
      iconImg: 'assets/tangga.svg',
      dangerImg: 'assets/tangga-pilihan.svg',
      safeImg: 'assets/tangga-aman.svg',
      dangerText: 'Berlari atau melompat di tangga bisa membuat kita terjatuh dan terluka.',
      safeText: 'Naik dan turun tangga pelan-pelan, satu langkah demi satu langkah, sambil berpegangan pada pegangan tangga.',
      checklist: [
        'Pegang pegangan tangga dengan mantap',
        'Melangkah pelan satu anak tangga',
        'Jangan berlari atau mendorong teman di tangga'
      ],
      quizQuestion: 'Bagaimana cara aman saat naik atau turun tangga?',
      safeLabel: 'Berjalan pelan sambil memegang pegangan tangga',
      unsafeLabel: 'Berlari cepat di tangga tanpa berpegangan'
    },
    {
      id: 'jalan',
      title: 'Jalan Raya',
      tint: '#EEF2F6',
      iconImg: 'assets/jalan.svg',
      dangerImg: 'assets/jalan-pilihan.svg',
      safeImg: 'assets/jalan-aman.svg',
      dangerText: 'Di jalan raya ada motor dan mobil yang melaju cepat. Menyeberang sendiri sangat berbahaya.',
      safeText: 'Selalu pegang tangan orang tua atau guru, gunakan zebra cross, dan tengok kanan kiri sebelum menyeberang.',
      checklist: [
        'Berhenti di pinggir jalan sebelum menyeberang',
        'Pegang tangan orang dewasa',
        'Menyeberang pelan di garis zebra cross'
      ],
      quizQuestion: 'Saat ingin menyeberang jalan raya, mana cara yang aman?',
      safeLabel: 'Menyeberang di zebra cross bersama orang dewasa',
      unsafeLabel: 'Berlari menyeberang jalan raya sendirian'
    },
    {
      id: 'gempa',
      title: 'Gempa Bumi',
      tint: '#F5EFE6',
      iconImg: 'assets/gempa.svg',
      dangerImg: 'assets/gempa-pilihan.svg',
      safeImg: 'assets/gempa-aman.svg',
      dangerText: 'Saat gempa, lantai bergetar dan benda di rak atau lemari bisa jatuh menimpa kepala.',
      safeText: 'Tetap tenang, merunduk di bawah meja yang kuat, lindungi kepala, dan jauhi lemari atau kaca.',
      checklist: [
        'Jauhi lemari, rak buku, dan jendela kaca',
        'Merunduk di bawah meja yang kokoh',
        'Lindungi kepala dengan kedua tangan'
      ],
      quizQuestion: 'Saat terjadi gempa di dalam ruangan, mana tempat berlindung yang aman?',
      safeLabel: 'Merunduk di bawah meja dan melindungi kepala',
      unsafeLabel: 'Berdiri di dekat rak lemari yang bergoyang'
    },
    {
      id: 'evakuasi',
      title: 'Jalur Evakuasi',
      tint: '#E7F8EE',
      iconImg: 'assets/evakuasi.svg',
      dangerImg: 'assets/evakuasi-pilihan.svg',
      safeImg: 'assets/evakuasi-aman.svg',
      dangerText: 'Saat darurat, lari ke arah yang salah bisa membuat kita tersesat atau terpisah dari pendamping.',
      safeText: 'Cari papan hijau bertuliskan panah keluar, ikuti arah panah dengan tenang bersama orang tua atau guru.',
      checklist: [
        'Cari tanda panah hijau pintu keluar',
        'Ikuti arahan guru atau orang tua',
        'Berjalan tenang tanpa panik menuju tempat terbuka'
      ],
      quizQuestion: 'Saat alarm darurat berbunyi, ke mana kita harus berjalan?',
      safeLabel: 'Mengikuti panah hijau pintu keluar bersama pendamping',
      unsafeLabel: 'Berjalan menjauh ke arah berlawanan sendirian'
    }
  ];

  /* =========================================================
     2. DATA NOMOR DARURAT, PANGGIL SIAPA, CERITA & LENCANA
  ========================================================= */
  const EMERGENCY_NUMBERS = [
    { id: '112', num: '112', label: 'Darurat Umum', desc: 'Layanan darurat terpadu bebas pulsa', icon: 'ph-siren', color: '#FF4B4B' },
    { id: '110', num: '110', label: 'Polisi', desc: 'Jika tersesat atau butuh bantuan keamanan', icon: 'ph-shield-star', color: '#1CB0F6' },
    { id: '113', num: '113', label: 'Pemadam Kebakaran', desc: 'Jika ada api besar atau asap kebakaran', icon: 'ph-fire-extinguisher', color: '#FF7A00' },
    { id: '119', num: '119', label: 'Ambulans Medis', desc: 'Jika ada yang terluka parah atau pingsan', icon: 'ph-first-aid-kit', color: '#14B8A6' },
    { id: 'keluarga', num: '08123456789', label: 'Nomor Keluarga', desc: 'Hubungi orang tua atau wali terdekat', icon: 'ph-house-line', color: '#58CC02' }
  ];

  const CALL_WHO_SCENARIOS = [
    {
      id: 'cw-api',
      img: 'assets/api-pilihan.svg',
      prompt: 'Ada api besar di dapur dan asap mulai banyak. Nomor mana yang harus dihubungi?',
      answerId: '113',
      options: ['113', '110', '119'],
      explain: 'Benar! 113 adalah Pemadam Kebakaran untuk membantu memadamkan api.'
    },
    {
      id: 'cw-medis',
      img: 'assets/tangga-pilihan.svg',
      prompt: 'Ada anggota keluarga yang jatuh dari tangga dan terluka parah. Siapa yang dipanggil?',
      answerId: '119',
      options: ['119', '113', '110'],
      explain: 'Hebat! 119 adalah Ambulans Medis untuk menolong orang yang terluka atau sakit darurat.'
    },
    {
      id: 'cw-tersesat',
      img: 'assets/bantuan.svg',
      prompt: 'Kamu terpisah dari orang tua di tempat ramai dan bingung jalan pulang. Nomor darurat mana yang bisa membantu?',
      answerId: '110',
      options: ['110', '113', '119'],
      explain: 'Tepat! 110 adalah Polisi yang siap membantu menjaga dan mengantarmu dengan aman.'
    },
    {
      id: 'cw-gempa',
      img: 'assets/gempa-pilihan.svg',
      prompt: 'Terjadi bencana gempa dan kamu butuh bantuan darurat segera. Nomor umum mana yang bisa dihubungi?',
      answerId: '112',
      options: ['112', '113', '119'],
      explain: 'Bagus sekali! 112 adalah Layanan Darurat Umum yang selalu siaga untuk segala keadaan darurat.'
    },
    {
      id: 'cw-keluarga',
      img: 'assets/jalan-aman.svg',
      prompt: 'Kamu sudah sampai di tempat aman bersama petugas dan ingin mengabari Ibu atau Ayah. Hubungi siapa?',
      answerId: 'keluarga',
      options: ['keluarga', '113', '119'],
      explain: 'Benar! Hubungi Nomor Keluarga agar orang tua segera tahu kamu berada di tempat aman.'
    }
  ];

  const STORIES = [
    {
      id: 'story-api',
      title: 'Ada Api di Dapur',
      icon: 'ph-fire',
      steps: [
        { img: 'assets/api-pilihan.svg', title: 'Langkah 1: Berhenti & Jangan Sentuh', text: 'Saat melihat api di dapur, aku langsung berhenti. Aku tidak mendekat dan tidak menyentuh api.' },
        { img: 'assets/api-aman.svg', title: 'Langkah 2: Keluar Bersama Orang Dewasa', text: 'Aku berjalan tenang menuju pintu keluar bersama orang tua atau guru.' },
        { img: 'assets/bantuan.svg', title: 'Langkah 3: Minta Bantuan 113', text: 'Di luar rumah yang aman, kami memberi tahu petugas atau menelepon 113 Pemadam Kebakaran.' }
      ]
    },
    {
      id: 'story-gempa',
      title: 'Terjadi Gempa Bumi',
      icon: 'ph-house-simple',
      steps: [
        { img: 'assets/gempa-pilihan.svg', title: 'Langkah 1: Jauhi Lemari & Kaca', text: 'Saat lantai terasa bergoyang, aku tetap tenang dan menjauh dari rak lemari yang mudah jatuh.' },
        { img: 'assets/gempa-aman.svg', title: 'Langkah 2: Berlindung di Bawah Meja', text: 'Aku merunduk di bawah meja yang kuat dan melindungi kepalaku dengan kedua tangan.' },
        { img: 'assets/evakuasi-aman.svg', title: 'Langkah 3: Ikuti Jalur Evakuasi', text: 'Setelah goyangan berhenti, aku berjalan keluar mengikuti panah hijau bersama pendamping.' }
      ]
    },
    {
      id: 'story-tersesat',
      title: 'Tersesat di Luar Rumah',
      icon: 'ph-map-pin',
      steps: [
        { img: 'assets/jalan-aman.svg', title: 'Langkah 1: Berhenti di Tempat Terang', text: 'Jika aku tidak melihat orang tuaku, aku berhenti di tempat aman yang ramai dan tidak ikut orang asing.' },
        { img: 'assets/bantuan.svg', title: 'Langkah 2: Cari Petugas Berseragam', text: 'Aku mendekati satpam, polisi, atau kasir toko dan menunjukkan Kartu Darurat Saya.' },
        { img: 'assets/evakuasi-aman.svg', title: 'Langkah 3: Telepon Orang Tua atau 110', text: 'Petugas membantu menelepon Nomor Keluarga atau 110 sampai aku bertemu orang tua lagi.' }
      ]
    }
  ];

  const BADGES = [
    { id: 'first-step', name: 'Langkah Pertama', req: 'Pahami 1 topik', icon: 'ph-footprints', check: s => s.masteredTopics.length >= 1 },
    { id: 'safe-guard', name: 'Penjaga Aman', req: 'Pahami 6 topik', icon: 'ph-shield-check', check: s => s.masteredTopics.length >= 6 },
    { id: 'phone-hero', name: 'Ahli Telepon', req: 'Latihan 3 nomor', icon: 'ph-phone-call', check: s => s.masteredNumbers.length >= 3 },
    { id: 'callwho-pro', name: 'Siaga Panggil', req: 'Skor Panggil >= 80', icon: 'ph-siren', check: s => s.bestCallWhoScore >= 80 },
    { id: 'quiz-champ', name: 'Juara Kuis', req: 'Skor Kuis >= 80', icon: 'ph-trophy', check: s => s.bestQuizScore >= 80 },
    { id: 'grahita-star', name: 'Bintang GrahitaGo', req: 'Capai 250 XP', icon: 'ph-crown', check: s => s.xp >= 250 }
  ];

  /* =========================================================
     3. STATE & PENYIMPANAN AMAN (ANTI-SPAM + MIGRASI)
  ========================================================= */
  const STORAGE_KEY = 'grahitago_state_v3';

  const DEFAULT_STATE = {
    xp: 0,
    masteredTopics: [],
    awardedChecklistKeys: [],
    checkedChecklistKeys: [],
    masteredNumbers: [],
    completedStories: [],
    awardedCallWhoIds: [],
    bestQuizScore: 0,
    bestCallWhoScore: 0,
    totalCalls: 0,
    calmCyclesTotal: 0,
    settings: {
      calmMode: false,
      sfxEnabled: true,
      ttsRate: 0.85,
      guidedDial: true
    },
    profile: {
      familyPhone: '08123456789',
      childName: 'Anak Hebat',
      guardianName: 'Ibu / Ayah',
      shortAddress: 'Belum diisi (atur di Mode Pendamping)',
      helperNote: 'Saya memerlukan komunikasi pelan, singkat, dan tenang. Mohon bantu hubungi nomor keluarga di atas.'
    }
  };

  function sanitizePhone(raw) {
    const digits = String(raw || '').replace(/\D/g, '').slice(0, 15);
    return digits.length >= 3 ? digits : '08123456789';
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_STATE);
      const parsed = JSON.parse(raw);
      return {
        ...structuredClone(DEFAULT_STATE),
        ...parsed,
        masteredTopics: Array.isArray(parsed.masteredTopics) ? [...new Set(parsed.masteredTopics)] : [],
        awardedChecklistKeys: Array.isArray(parsed.awardedChecklistKeys) ? [...new Set(parsed.awardedChecklistKeys)] : [],
        checkedChecklistKeys: Array.isArray(parsed.checkedChecklistKeys) ? [...new Set(parsed.checkedChecklistKeys)] : [],
        masteredNumbers: Array.isArray(parsed.masteredNumbers) ? [...new Set(parsed.masteredNumbers)] : [],
        completedStories: Array.isArray(parsed.completedStories) ? [...new Set(parsed.completedStories)] : [],
        awardedCallWhoIds: Array.isArray(parsed.awardedCallWhoIds) ? [...new Set(parsed.awardedCallWhoIds)] : [],
        settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) },
        profile: {
          ...DEFAULT_STATE.profile,
          ...(parsed.profile || {}),
          familyPhone: sanitizePhone(parsed.profile?.familyPhone)
        }
      };
    } catch {
      return structuredClone(DEFAULT_STATE);
    }
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }
    syncHeaderAndTheme();
  }

  /* =========================================================
     4. WEB AUDIO API (SINGLETON) & INDONESIAN TTS
  ========================================================= */
  let audioCtx = null;

  function getAudioCtx() {
    if (!state.settings.sfxEnabled) return null;
    try {
      if (!audioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) audioCtx = new Ctx();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    } catch {
      return null;
    }
  }

  function playTone(freq, duration = 0.12, type = 'sine', gainVal = 0.12, delay = 0) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  function playTapSound() { playTone(520, 0.06, 'triangle', 0.08); }
  function playSoftHintSound() { playTone(310, 0.16, 'sine', 0.08); }
  function playChimeSound() {
    playTone(587.33, 0.12, 'sine', 0.11, 0);
    playTone(880, 0.2, 'sine', 0.12, 0.09);
  }
  function playFanfareSound() {
    playTone(523.25, 0.14, 'triangle', 0.11, 0);
    playTone(659.25, 0.14, 'triangle', 0.11, 0.11);
    playTone(783.99, 0.16, 'triangle', 0.11, 0.22);
    playTone(1046.5, 0.28, 'triangle', 0.13, 0.34);
  }

  const DTMF_MAP = {
    '1': [697, 1209], '2': [697, 1336], '3': [697, 1477],
    '4': [770, 1209], '5': [770, 1336], '6': [770, 1477],
    '7': [852, 1209], '8': [852, 1336], '9': [852, 1477],
    '*': [941, 1209], '0': [941, 1336], '#': [941, 1477]
  };

  function playDtmfTone(digit) {
    const pair = DTMF_MAP[digit];
    if (!pair) return playTapSound();
    playTone(pair[0], 0.11, 'sine', 0.07);
    playTone(pair[1], 0.11, 'sine', 0.07);
  }

  let cachedIdVoice = null;
  function pickIndonesianVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    cachedIdVoice =
      voices.find(v => v.lang && v.lang.toLowerCase().startsWith('id')) ||
      voices.find(v => v.name && v.name.toLowerCase().includes('indonesia')) ||
      null;
    return cachedIdVoice;
  }

  if ('speechSynthesis' in window) {
    pickIndonesianVoice();
    window.speechSynthesis.onvoiceschanged = pickIndonesianVoice;
  }

  function stopSpeaking() {
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch {}
    }
  }

  function speakText(text) {
    if (!('speechSynthesis' in window) || !text) return;
    stopSpeaking();
    try {
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'id-ID';
      utt.rate = Number(state.settings.ttsRate) || 0.85;
      utt.pitch = 1.02;
      const v = cachedIdVoice || pickIndonesianVoice();
      if (v) utt.voice = v;
      window.speechSynthesis.speak(utt);
    } catch {}
  }

  /* =========================================================
     5. VISUAL FX & TOAST (BERSIH OTOMATIS)
  ========================================================= */
  const fxLayer = document.getElementById('fx-layer');
  const toastEl = document.getElementById('app-toast');
  let toastTimer = null;

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
  }

  function showFloatingPoints(amount, anchorEl) {
    if (state.settings.calmMode) return;
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = `+${amount} XP`;
    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.42;
    if (anchorEl && anchorEl.getBoundingClientRect) {
      const r = anchorEl.getBoundingClientRect();
      x = Math.min(window.innerWidth - 60, Math.max(60, r.left + r.width / 2));
      y = Math.max(80, r.top);
    }
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    fxLayer.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }

  function burstConfetti() {
    if (state.settings.calmMode) return;
    const colors = ['#58CC02', '#1CB0F6', '#FFB020', '#FF4B4B', '#9B5DE5'];
    for (let i = 0; i < 24; i++) {
      const dot = document.createElement('div');
      dot.className = 'confetti-dot';
      dot.style.background = colors[i % colors.length];
      dot.style.left = `${30 + Math.random() * 40}vw`;
      dot.style.top = `${28 + Math.random() * 14}vh`;
      dot.style.setProperty('--dx', `${(Math.random() - 0.5) * 260}px`);
      dot.style.setProperty('--dy', `${80 + Math.random() * 200}px`);
      fxLayer.appendChild(dot);
      setTimeout(() => dot.remove(), 1350);
    }
  }

  function awardXP(amount, anchorEl) {
    state.xp += amount;
    saveState();
    showFloatingPoints(amount, anchorEl);
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* =========================================================
     6. ROUTING & STATE SESI
  ========================================================= */
  const mainEl = document.getElementById('app-main');
  let currentView = 'home';

  // Belajar Bahaya session
  let learnOrder = TOPICS.map(t => t.id);
  let learnIndex = 0;
  let learnTab = 'danger'; // 'danger' | 'safe'
  let learnActionLock = false;

  // Kuis Pilih Aman session
  let quizQuestions = [];
  let quizIndex = 0;
  let quizFirstTryCorrect = 0;
  let quizWrongOnCurrent = false;
  let quizLocked = false;
  let quizFinished = false;

  // Panggil Siapa session
  let callWhoQuestions = [];
  let callWhoIndex = 0;
  let callWhoFirstTryCorrect = 0;
  let callWhoWrongOnCurrent = false;
  let callWhoLocked = false;
  let callWhoFinished = false;

  // Telepon Darurat session
  let selectedEmId = '112';
  let dialedDigits = '';
  let isCalling = false;
  let callTimer = null;

  // Cerita Aksi Aman session
  let activeStoryIndex = 0;
  let activeStoryStep = 0;

  function syncHeaderAndTheme() {
    document.getElementById('header-xp-val').textContent = state.xp;
    document.getElementById('header-star-val').textContent = `${state.masteredTopics.length}/${TOPICS.length}`;
    document.body.classList.toggle('calm-mode', !!state.settings.calmMode);
  }

  function getEmergencyList() {
    return EMERGENCY_NUMBERS.map(item =>
      item.id === 'keluarga'
        ? { ...item, num: sanitizePhone(state.profile.familyPhone) }
        : item
    );
  }

  function navigateTo(view) {
    stopSpeaking();
    clearTimeout(callTimer);
    isCalling = false;
    currentView = view;
    window.scrollTo({ top: 0, behavior: state.settings.calmMode ? 'auto' : 'smooth' });

    if (view === 'home') {
      renderHome();
    } else if (view === 'learn') {
      renderLearn();
    } else if (view === 'quiz') {
      startNewQuiz();
    } else if (view === 'phone') {
      dialedDigits = '';
      renderPhone();
    } else if (view === 'callwho') {
      startNewCallWho();
    } else if (view === 'stories') {
      activeStoryStep = 0;
      renderStories();
    } else if (view === 'idcard') {
      renderIdCard();
    }
  }

  /* =========================================================
     7. RENDER BERANDA (HOME)
  ========================================================= */
  function renderHome() {
    const badgesHtml = BADGES.map(b => {
      const unlocked = b.check(state);
      return `
        <div class="badge-item ${unlocked ? 'unlocked' : ''}">
          <div class="badge-medal"><i class="ph-fill ${b.icon}"></i></div>
          <div class="badge-name">${b.name}</div>
          <div class="badge-req">${unlocked ? 'Terbuka' : b.req}</div>
        </div>
      `;
    }).join('');

    mainEl.innerHTML = `
      <section class="hero-card">
        <div>
          <div class="hero-badge"><i class="ph-fill ph-sparkle"></i> Belajar Aman &amp; Tenang</div>
          <h1 class="hero-title">Kenali Bahaya &amp; Hafalkan Nomor Darurat</h1>
          <p class="hero-desc">Media belajar interaktif dengan gambar jelas, panduan suara pelan, dan latihan berulang tanpa takut salah.</p>
          <div class="hero-actions">
            <button type="button" class="btn-3d btn-green" id="hero-start-learn">
              <i class="ph-fill ph-book-open-text"></i>
              <span>Mulai Belajar Bahaya</span>
            </button>
            <button type="button" class="btn-3d btn-white" id="hero-open-calm">
              <i class="ph-fill ph-wind"></i>
              <span>Tenang Dulu</span>
            </button>
          </div>
        </div>
        <div class="hero-art-box">
          <img src="assets/hero.webp" alt="Guru dan anak mengenali tanda bahaya bersama" />
        </div>
      </section>

      <div class="section-heading">
        <h2><i class="ph-fill ph-squares-four" style="color:var(--sky)"></i> Pilih Aktivitas Belajar</h2>
      </div>

      <section class="menu-grid">
        <button type="button" class="menu-card mc-green" data-nav="learn">
          <div class="menu-card-top">
            <span class="menu-icon"><i class="ph-fill ph-warning-octagon"></i></span>
            <span class="menu-tag">${state.masteredTopics.length}/12 Paham</span>
          </div>
          <h3>Belajar Bahaya</h3>
          <p>Kenali 12 tanda bahaya di rumah dan luar ruangan lengkap dengan suara &amp; checklist aman.</p>
        </button>

        <button type="button" class="menu-card mc-sky" data-nav="quiz">
          <div class="menu-card-top">
            <span class="menu-icon"><i class="ph-fill ph-check-circle"></i></span>
            <span class="menu-tag">Terbaik: ${state.bestQuizScore}</span>
          </div>
          <h3>Main Pilih Aman</h3>
          <p>Kuis santai 2 gambar dengan soal acak setiap sesi. Salah tidak apa-apa, bisa coba lagi.</p>
        </button>

        <button type="button" class="menu-card mc-red" data-nav="phone">
          <div class="menu-card-top">
            <span class="menu-icon"><i class="ph-fill ph-phone-call"></i></span>
            <span class="menu-tag">${state.masteredNumbers.length}/5 Nomor</span>
          </div>
          <h3>Telepon Darurat</h3>
          <p>Latihan menekan 112, 110, 113, 119, dan Nomor Keluarga dengan Panduan Cahaya.</p>
        </button>

        <button type="button" class="menu-card mc-amber" data-nav="callwho">
          <div class="menu-card-top">
            <span class="menu-icon"><i class="ph-fill ph-siren"></i></span>
            <span class="menu-tag">Terbaik: ${state.bestCallWhoScore}</span>
          </div>
          <h3>Panggil Siapa?</h3>
          <p>Cocokkan situasi bahaya langsung dengan nomor darurat yang tepat.</p>
        </button>

        <button type="button" class="menu-card mc-purple" data-nav="stories">
          <div class="menu-card-top">
            <span class="menu-icon"><i class="ph-fill ph-book-bookmark"></i></span>
            <span class="menu-tag">${state.completedStories.length}/3 Cerita</span>
          </div>
          <h3>Cerita Aksi Aman</h3>
          <p>3 cerita visual 3 langkah untuk melatih sikap tenang saat terjadi keadaan darurat.</p>
        </button>

        <button type="button" class="menu-card mc-teal" data-nav="idcard">
          <div class="menu-card-top">
            <span class="menu-icon"><i class="ph-fill ph-identification-card"></i></span>
            <span class="menu-tag">Siap Cetak</span>
          </div>
          <h3>Kartu Darurat Saya</h3>
          <p>Kartu identitas darurat anak dengan tombol bacakan suara untuk penolong &amp; cetak kartu.</p>
        </button>
      </section>

      <div class="section-heading">
        <h2><i class="ph-fill ph-medal" style="color:var(--amber-dark)"></i> Papan Lencana Prestasi</h2>
      </div>

      <section class="badges-panel">
        <div class="badges-grid">${badgesHtml}</div>
      </section>
    `;

    document.getElementById('hero-start-learn').addEventListener('click', () => {
      playTapSound();
      navigateTo('learn');
    });
    document.getElementById('hero-open-calm').addEventListener('click', () => {
      playTapSound();
      openCalmModal();
    });
    mainEl.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        playTapSound();
        navigateTo(btn.dataset.nav);
      });
    });
  }

  /* =========================================================
     8. MODUL 1: BELAJAR BAHAYA (ANTI-SPAM + ASET SVG ASLI)
  ========================================================= */
  function renderLearn() {
    const topicId = learnOrder[learnIndex];
    const topic = TOPICS.find(t => t.id === topicId) || TOPICS[0];
    const isMastered = state.masteredTopics.includes(topic.id);
    const pct = Math.round(((learnIndex + 1) / TOPICS.length) * 100);

    const dotsHtml = learnOrder.map((id, idx) => {
      const done = state.masteredTopics.includes(id);
      const cls = idx === learnIndex ? 'active' : (done ? 'done' : '');
      return `<button type="button" class="topic-dot ${cls}" data-dot-idx="${idx}" aria-label="Topik ${idx + 1}">${idx + 1}</button>`;
    }).join('');

    const checklistHtml = topic.checklist.map((text, idx) => {
      const key = `${topic.id}:${idx}`;
      const checked = state.checkedChecklistKeys.includes(key);
      const alreadyRewarded = state.awardedChecklistKeys.includes(key);
      return `
        <button type="button" class="checklist-item ${checked ? 'checked' : ''}" data-check-key="${key}">
          <span class="check-box-icon"><i class="ph-bold ph-check"></i></span>
          <span style="flex:1">${text}</span>
          ${alreadyRewarded ? '<span style="font-size:0.75rem;color:#15803D;font-weight:900">Tuntas</span>' : '<span style="font-size:0.75rem;color:#B45309;font-weight:900">+5 XP</span>'}
        </button>
      `;
    }).join('');

    const activeImg = learnTab === 'danger' ? topic.dangerImg : topic.safeImg;
    const activeText = learnTab === 'danger' ? topic.dangerText : topic.safeText;

    mainEl.innerHTML = `
      <div class="module-topbar">
        <button type="button" class="btn-back-pill" id="btn-back-home">
          <i class="ph-bold ph-arrow-left"></i> Beranda
        </button>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-count">${learnIndex + 1} / ${TOPICS.length}</div>
      </div>

      <section class="learn-shell">
        <div class="learn-toolbar">
          <div class="topic-chip-row">${dotsHtml}</div>
          <button type="button" class="btn-3d btn-white" id="btn-shuffle-topics" style="min-height:40px;padding:6px 14px;font-size:0.86rem">
            <i class="ph-bold ph-shuffle"></i>
            <span>Acak Urutan</span>
          </button>
        </div>

        <div class="learn-grid">
          <div class="learn-visual-card" style="--card-tint:${topic.tint}">
            <div class="learn-badge-row">
              <img src="${topic.iconImg}" alt="Ikon ${topic.title}" class="learn-icon-thumb" />
              <span class="learn-mode-pill ${learnTab === 'danger' ? 'pill-danger' : 'pill-safe'}">
                <i class="ph-fill ${learnTab === 'danger' ? 'ph-warning' : 'ph-shield-check'}"></i>
                ${learnTab === 'danger' ? 'Tanda Bahaya' : 'Cara Aman'}
              </span>
            </div>

            <div class="learn-art-wrap" id="learn-art-speak" role="button" tabindex="0" aria-label="Sentuh gambar untuk mendengarkan penjelasan">
              <img src="${activeImg}" alt="${topic.title}" />
            </div>

            <div class="learn-tap-hint">
              <i class="ph-fill ph-speaker-high"></i> Sentuh gambar atau tombol suara untuk mendengarkan
            </div>
          </div>

          <div>
            <div class="segmented-switch">
              <button type="button" class="seg-btn ${learnTab === 'danger' ? 'active-danger' : ''}" id="tab-danger">
                <i class="ph-fill ph-warning-circle"></i> Tanda Bahaya
              </button>
              <button type="button" class="seg-btn ${learnTab === 'safe' ? 'active-safe' : ''}" id="tab-safe">
                <i class="ph-fill ph-check-circle"></i> Cara Aman
              </button>
            </div>

            <h1 class="learn-title">${topic.title}</h1>
            <p class="learn-copy">${activeText}</p>

            <div class="checklist-box">
              <p class="checklist-title"><i class="ph-fill ph-list-checks"></i> Checklist Langkah Aman (Centang jika sudah paham)</p>
              ${checklistHtml}
            </div>

            <div class="learn-actions-row">
              <button type="button" class="btn-3d btn-sky" id="btn-speak-learn">
                <i class="ph-fill ph-speaker-high"></i>
                <span>Dengarkan Suara</span>
              </button>

              <button type="button" class="btn-3d ${isMastered ? 'btn-mastered' : 'btn-green'}" id="btn-master-topic" ${isMastered ? 'disabled' : ''}>
                <i class="ph-fill ${isMastered ? 'ph-seal-check' : 'ph-star'}"></i>
                <span>${isMastered ? 'Sudah Dipahami' : 'Saya Sudah Paham (+15 XP)'}</span>
              </button>
            </div>

            <div class="learn-nav-row">
              <button type="button" class="btn-3d btn-white" id="btn-prev-topic" ${learnIndex === 0 ? 'disabled' : ''}>
                <i class="ph-bold ph-arrow-left"></i> Sebelumnya
              </button>
              <button type="button" class="btn-3d btn-amber" id="btn-next-topic">
                <span>${learnIndex === TOPICS.length - 1 ? 'Lihat Ringkasan' : 'Selanjutnya'}</span>
                <i class="ph-bold ph-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    `;

    document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });

    document.getElementById('btn-shuffle-topics').addEventListener('click', () => {
      playTapSound();
      stopSpeaking();
      learnOrder = shuffleArray(TOPICS.map(t => t.id));
      learnIndex = 0;
      learnTab = 'danger';
      showToast('Urutan topik berhasil diacak!');
      renderLearn();
    });

    mainEl.querySelectorAll('[data-dot-idx]').forEach(dot => {
      dot.addEventListener('click', () => {
        playTapSound();
        stopSpeaking();
        learnIndex = Number(dot.dataset.dotIdx);
        learnTab = 'danger';
        renderLearn();
      });
    });

    document.getElementById('tab-danger').addEventListener('click', () => {
      playTapSound();
      stopSpeaking();
      learnTab = 'danger';
      renderLearn();
    });

    document.getElementById('tab-safe').addEventListener('click', () => {
      playTapSound();
      stopSpeaking();
      learnTab = 'safe';
      renderLearn();
    });

    const speakCurrent = () => {
      playTapSound();
      speakText(`${topic.title}. ${learnTab === 'danger' ? 'Tanda bahaya.' : 'Cara aman.'} ${activeText}`);
    };
    document.getElementById('btn-speak-learn').addEventListener('click', speakCurrent);
    document.getElementById('learn-art-speak').addEventListener('click', speakCurrent);

    // Checklist anti-spam: poin +5 XP hanya sekali seumur hidup per key
    mainEl.querySelectorAll('[data-check-key]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (learnActionLock) return;
        learnActionLock = true;
        setTimeout(() => { learnActionLock = false; }, 180);

        const key = btn.dataset.checkKey;
        const idxChecked = state.checkedChecklistKeys.indexOf(key);
        if (idxChecked >= 0) {
          state.checkedChecklistKeys.splice(idxChecked, 1);
          playTapSound();
        } else {
          state.checkedChecklistKeys.push(key);
          if (!state.awardedChecklistKeys.includes(key)) {
            state.awardedChecklistKeys.push(key);
            playChimeSound();
            awardXP(5, btn);
          } else {
            playTapSound();
          }
        }
        saveState();
        renderLearn();
      });
    });

    // Tombol Saya Sudah Paham (anti-spam: 1x per ID topik)
    const masterBtn = document.getElementById('btn-master-topic');
    masterBtn.addEventListener('click', () => {
      if (learnActionLock || state.masteredTopics.includes(topic.id)) return;
      learnActionLock = true;
      setTimeout(() => { learnActionLock = false; }, 250);

      state.masteredTopics.push(topic.id);
      playFanfareSound();
      awardXP(15, masterBtn);
      burstConfetti();
      speakText(`Hebat! Kamu sudah paham materi ${topic.title}.`);
      renderLearn();
    });

    document.getElementById('btn-prev-topic').addEventListener('click', () => {
      if (learnIndex > 0) {
        playTapSound();
        stopSpeaking();
        learnIndex--;
        learnTab = 'danger';
        renderLearn();
      }
    });

    document.getElementById('btn-next-topic').addEventListener('click', () => {
      playTapSound();
      stopSpeaking();
      if (learnIndex < TOPICS.length - 1) {
        learnIndex++;
        learnTab = 'danger';
        renderLearn();
      } else {
        renderLearnSummary();
      }
    });
  }

  function renderLearnSummary() {
    const masteredCount = state.masteredTopics.length;
    const scorePct = Math.round((masteredCount / TOPICS.length) * 100);
    const stars = scorePct >= 85 ? 3 : (scorePct >= 45 ? 2 : 1);
    playFanfareSound();

    mainEl.innerHTML = `
      <div class="module-topbar">
        <button type="button" class="btn-back-pill" id="btn-back-home">
          <i class="ph-bold ph-arrow-left"></i> Beranda
        </button>
      </div>
      <section class="score-card">
        <div class="score-stars">
          ${[1, 2, 3].map(n => `<i class="ph-fill ph-star ${n <= stars ? 'lit' : 'dim'}"></i>`).join('')}
        </div>
        <h1 style="margin:0;font-size:1.7rem;font-weight:900">Sesi Belajar Selesai!</h1>
        <div class="score-big-num">${masteredCount}/${TOPICS.length}</div>
        <p style="font-weight:800;color:var(--text-muted);margin:6px 0 0">Topik bahaya sudah kamu pahami. Terus ulangi agar makin hafal!</p>
        <div class="score-actions">
          <button type="button" class="btn-3d btn-green" id="btn-learn-again">
            <i class="ph-bold ph-shuffle"></i> Ulangi (Urutan Acak)
          </button>
          <button type="button" class="btn-3d btn-sky" id="btn-go-quiz">
            <i class="ph-fill ph-check-circle"></i> Coba Main Pilih Aman
          </button>
        </div>
      </section>
    `;

    document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
    document.getElementById('btn-learn-again').addEventListener('click', () => {
      playTapSound();
      learnOrder = shuffleArray(TOPICS.map(t => t.id));
      learnIndex = 0;
      learnTab = 'danger';
      renderLearn();
    });
    document.getElementById('btn-go-quiz').addEventListener('click', () => { playTapSound(); navigateTo('quiz'); });
  }

  /* =========================================================
     9. MODUL 2: MAIN PILIH AMAN (ERRORLESS, RANDOM, ANTI-SPAM)
  ========================================================= */
  function startNewQuiz() {
    quizQuestions = shuffleArray(TOPICS).slice(0, 6).map(t => {
      const options = shuffleArray([
        { isSafe: true, img: t.safeImg, label: t.safeLabel },
        { isSafe: false, img: t.dangerImg, label: t.unsafeLabel }
      ]);
      return { topic: t, options };
    });
    quizIndex = 0;
    quizFirstTryCorrect = 0;
    quizWrongOnCurrent = false;
    quizLocked = false;
    quizFinished = false;
    renderQuiz();
  }

  function renderQuiz() {
    if (quizFinished) {
      const score = Math.round((quizFirstTryCorrect / quizQuestions.length) * 100);
      if (score > state.bestQuizScore) {
        state.bestQuizScore = score;
        saveState();
      }
      const stars = score >= 85 ? 3 : (score >= 55 ? 2 : 1);
      playFanfareSound();
      burstConfetti();

      mainEl.innerHTML = `
        <div class="module-topbar">
          <button type="button" class="btn-back-pill" id="btn-back-home"><i class="ph-bold ph-arrow-left"></i> Beranda</button>
        </div>
        <section class="score-card">
          <div class="score-stars">
            ${[1, 2, 3].map(n => `<i class="ph-fill ph-star ${n <= stars ? 'lit' : 'dim'}"></i>`).join('')}
          </div>
          <h1 style="margin:0;font-size:1.75rem;font-weight:900">Nilai Pilih Aman Kamu!</h1>
          <div class="score-big-num">${score}</div>
          <p style="font-weight:800;color:var(--text-muted)">${quizFirstTryCorrect} dari ${quizQuestions.length} soal dijawab benar di percobaan pertama.</p>
          <div class="score-actions">
            <button type="button" class="btn-3d btn-green" id="btn-quiz-retry">
              <i class="ph-bold ph-arrows-clockwise"></i> Coba Lagi (Soal Acak Baru)
            </button>
            <button type="button" class="btn-3d btn-white" id="btn-quiz-home">
              <i class="ph-bold ph-house"></i> Ke Beranda
            </button>
          </div>
        </section>
      `;

      document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
      document.getElementById('btn-quiz-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
      document.getElementById('btn-quiz-retry').addEventListener('click', () => { playTapSound(); startNewQuiz(); });
      return;
    }

    const q = quizQuestions[quizIndex];
    const pct = Math.round(((quizIndex + 1) / quizQuestions.length) * 100);

    mainEl.innerHTML = `
      <div class="module-topbar">
        <button type="button" class="btn-back-pill" id="btn-back-home"><i class="ph-bold ph-arrow-left"></i> Beranda</button>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-count">Soal ${quizIndex + 1}/${quizQuestions.length}</div>
      </div>

      <section class="quiz-card">
        <div class="quiz-prompt-box">
          <h1 class="quiz-question">${q.topic.quizQuestion}</h1>
          <button type="button" class="btn-3d btn-sky" id="btn-speak-quiz" style="min-height:44px;padding:8px 14px;font-size:0.9rem">
            <i class="ph-fill ph-speaker-high"></i> Dengarkan
          </button>
        </div>

        <div class="quiz-options-grid">
          ${q.options.map((opt, idx) => `
            <button type="button" class="quiz-option-card" data-opt-idx="${idx}">
              <div class="quiz-option-img"><img src="${opt.img}" alt="${opt.label}" /></div>
              <div class="quiz-option-label">${opt.label}</div>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback-slot"></div>
      </section>
    `;

    document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
    document.getElementById('btn-speak-quiz').addEventListener('click', () => {
      playTapSound();
      speakText(q.topic.quizQuestion);
    });

    mainEl.querySelectorAll('[data-opt-idx]').forEach(card => {
      card.addEventListener('click', () => {
        if (quizLocked) return;
        const idx = Number(card.dataset.optIdx);
        const chosen = q.options[idx];
        const feedbackSlot = document.getElementById('quiz-feedback-slot');

        if (chosen.isSafe) {
          quizLocked = true;
          card.classList.add('opt-correct');
          if (!quizWrongOnCurrent) quizFirstTryCorrect++;

          playChimeSound();
          awardXP(10, card);
          speakText(`Benar sekali! ${chosen.label}.`);

          feedbackSlot.innerHTML = `
            <div class="feedback-banner feedback-success">
              <div><i class="ph-fill ph-check-circle"></i> Hebat! Pilihan kamu sangat aman.</div>
              <button type="button" class="btn-3d btn-green" id="btn-quiz-next">
                <span>${quizIndex === quizQuestions.length - 1 ? 'Lihat Nilai Akhir' : 'Soal Berikutnya'}</span>
                <i class="ph-bold ph-arrow-right"></i>
              </button>
            </div>
          `;
          document.getElementById('btn-quiz-next').addEventListener('click', () => {
            playTapSound();
            stopSpeaking();
            if (quizIndex < quizQuestions.length - 1) {
              quizIndex++;
              quizWrongOnCurrent = false;
              quizLocked = false;
              renderQuiz();
            } else {
              quizFinished = true;
              renderQuiz();
            }
          });
        } else {
          quizWrongOnCurrent = true;
          card.classList.add('opt-gentle-dim');
          card.disabled = true;
          playSoftHintSound();
          speakText('Itu kurang aman. Tidak apa-apa, yuk coba pilih gambar yang satunya.');
          feedbackSlot.innerHTML = `
            <div class="feedback-banner feedback-hint">
              <div><i class="ph-fill ph-hand-heart"></i> Kurang aman. Tidak apa-apa, yuk coba pilih gambar yang satunya!</div>
            </div>
          `;
        }
      });
    });
  }

  /* =========================================================
     10. MODUL 3: TELEPON DARURAT (GUIDED MODE + ANTI-SPAM)
  ========================================================= */
  function renderPhone() {
    const list = getEmergencyList();
    const target = list.find(e => e.id === selectedEmId) || list[0];
    const nextDigit = state.settings.guidedDial && target.num.startsWith(dialedDigits) && dialedDigits.length < target.num.length
      ? target.num[dialedDigits.length]
      : null;

    const listHtml = list.map(item => {
      const done = state.masteredNumbers.includes(item.id);
      return `
        <button type="button" class="em-target-btn ${item.id === target.id ? 'selected' : ''}" data-em-id="${item.id}">
          <div class="em-target-left">
            <span class="em-target-icon" style="background:${item.color}"><i class="ph-fill ${item.icon}"></i></span>
            <div>
              <div class="em-target-num">${escapeHtml(item.num)}</div>
              <div class="em-target-label">${item.label}</div>
            </div>
          </div>
          ${done ? '<span class="menu-tag" style="background:var(--green-soft);color:#15803D;border-color:#86EFAC">Hafal</span>' : '<span class="menu-tag">+20 XP</span>'}
        </button>
      `;
    }).join('');

    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
    const dialHtml = keys.map(k => {
      const isNext = nextDigit === k;
      return `<button type="button" class="dial-key ${isNext ? 'guided-next' : ''}" data-key="${k}">${k}</button>`;
    }).join('');

    mainEl.innerHTML = `
      <div class="module-topbar">
        <button type="button" class="btn-back-pill" id="btn-back-home"><i class="ph-bold ph-arrow-left"></i> Beranda</button>
        <div class="progress-track"><div class="progress-fill" style="width:${Math.round((state.masteredNumbers.length / 5) * 100)}%"></div></div>
        <div class="progress-count">${state.masteredNumbers.length}/5 Nomor</div>
      </div>

      <section class="phone-layout">
        <div class="phone-panel">
          <h2 style="margin:0 0 4px;font-weight:900">Pilih Nomor Latihan</h2>
          <p style="margin:0;color:var(--text-muted);font-weight:700;font-size:0.9rem">Ketuk salah satu nomor, lalu tekan angkanya di layar telepon.</p>
          <div class="emergency-list">${listHtml}</div>

          <div class="guided-toggle-row">
            <span><i class="ph-fill ph-sparkle" style="color:var(--sky-dark)"></i> Panduan Cahaya (Sorot Angka Berikutnya)</span>
            <label class="switch">
              <input type="checkbox" id="toggle-guided-dial" ${state.settings.guidedDial ? 'checked' : ''} />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="phone-panel">
          <div class="phone-screen">
            <div class="phone-screen-target">Target: ${target.label} (${escapeHtml(target.num)})</div>
            <div class="phone-screen-digits">${dialedDigits ? escapeHtml(dialedDigits) : 'Tekan Angka'}</div>
          </div>

          <div class="dial-grid">${dialHtml}</div>

          <div class="dial-actions">
            <button type="button" class="btn-3d btn-white" id="btn-dial-clear" aria-label="Hapus Semua">
              <i class="ph-bold ph-trash"></i>
            </button>
            <button type="button" class="btn-3d btn-green" id="btn-dial-call" ${isCalling ? 'disabled' : ''}>
              <i class="ph-fill ph-phone-call"></i>
              <span>${isCalling ? 'Memanggil...' : 'Panggil'}</span>
            </button>
            <button type="button" class="btn-3d btn-white" id="btn-dial-back" aria-label="Hapus Satu Angka">
              <i class="ph-bold ph-backspace"></i>
            </button>
          </div>

          <div id="phone-status-slot"></div>
        </div>
      </section>
    `;

    document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });

    mainEl.querySelectorAll('[data-em-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        playTapSound();
        selectedEmId = btn.dataset.emId;
        dialedDigits = '';
        const chosen = getEmergencyList().find(x => x.id === selectedEmId);
        if (chosen) speakText(`Mari latihan menelepon ${chosen.label}, nomor ${chosen.num.split('').join(' ')}.`);
        renderPhone();
      });
    });

    document.getElementById('toggle-guided-dial').addEventListener('change', e => {
      state.settings.guidedDial = e.target.checked;
      saveState();
      renderPhone();
    });

    mainEl.querySelectorAll('[data-key]').forEach(keyBtn => {
      keyBtn.addEventListener('click', () => {
        if (isCalling) return;
        const digit = keyBtn.dataset.key;
        if (dialedDigits.length >= 15) return;
        dialedDigits += digit;
        playDtmfTone(digit);
        speakText(digit === '*' ? 'bintang' : (digit === '#' ? 'pagar' : digit));
        renderPhone();
      });
    });

    document.getElementById('btn-dial-back').addEventListener('click', () => {
      if (isCalling) return;
      playTapSound();
      dialedDigits = dialedDigits.slice(0, -1);
      renderPhone();
    });

    document.getElementById('btn-dial-clear').addEventListener('click', () => {
      if (isCalling) return;
      playTapSound();
      dialedDigits = '';
      renderPhone();
    });

    const callBtn = document.getElementById('btn-dial-call');
    callBtn.addEventListener('click', () => {
      if (isCalling) return;
      const statusSlot = document.getElementById('phone-status-slot');

      if (dialedDigits !== target.num) {
        playSoftHintSound();
        speakText(`Nomornya belum pas. Mari tekan ${target.num.split('').join(' ')}.`);
        statusSlot.innerHTML = `
          <div class="feedback-banner feedback-hint" style="margin-top:14px">
            <div><i class="ph-fill ph-info"></i> Nomor belum pas. Targetnya adalah <strong>${escapeHtml(target.num)}</strong>. Yuk coba tekan pelan-pelan!</div>
          </div>
        `;
        return;
      }

      // Panggilan berhasil (terkunci selama simulasi berlangsung)
      isCalling = true;
      callBtn.disabled = true;
      callBtn.innerHTML = '<i class="ph-fill ph-phone-call"></i><span>Tersambung...</span>';

      state.totalCalls += 1;
      const firstTime = !state.masteredNumbers.includes(target.id);
      if (firstTime) {
        state.masteredNumbers.push(target.id);
        awardXP(20, callBtn);
      } else {
        saveState();
      }

      playFanfareSound();
      burstConfetti();
      speakText(`Halo! Panggilan ke ${target.label} berhasil tersambung. Kamu hebat sekali!`);

      statusSlot.innerHTML = `
        <div class="call-active-banner">
          <i class="ph-fill ph-check-circle" style="font-size:1.4rem"></i><br/>
          Tersambung ke <strong>${target.label} (${escapeHtml(target.num)})</strong>!<br/>
          "Halo, kami siap membantu. Tetap tenang ya!"
        </div>
      `;

      callTimer = setTimeout(() => {
        isCalling = false;
        dialedDigits = '';
        if (currentView === 'phone') renderPhone();
      }, 3400);
    });
  }

  /* =========================================================
     11. MODUL 5: PANGGIL SIAPA? (ERRORLESS + ANTI-SPAM)
  ========================================================= */
  function startNewCallWho() {
    callWhoQuestions = shuffleArray(CALL_WHO_SCENARIOS).map(sc => ({
      ...sc,
      options: shuffleArray(sc.options)
    }));
    callWhoIndex = 0;
    callWhoFirstTryCorrect = 0;
    callWhoWrongOnCurrent = false;
    callWhoLocked = false;
    callWhoFinished = false;
    renderCallWho();
  }

  function renderCallWho() {
    if (callWhoFinished) {
      const score = Math.round((callWhoFirstTryCorrect / callWhoQuestions.length) * 100);
      if (score > state.bestCallWhoScore) {
        state.bestCallWhoScore = score;
        saveState();
      }
      const stars = score >= 85 ? 3 : (score >= 55 ? 2 : 1);
      playFanfareSound();
      burstConfetti();

      mainEl.innerHTML = `
        <div class="module-topbar">
          <button type="button" class="btn-back-pill" id="btn-back-home"><i class="ph-bold ph-arrow-left"></i> Beranda</button>
        </div>
        <section class="score-card">
          <div class="score-stars">
            ${[1, 2, 3].map(n => `<i class="ph-fill ph-star ${n <= stars ? 'lit' : 'dim'}"></i>`).join('')}
          </div>
          <h1 style="margin:0;font-size:1.75rem;font-weight:900">Nilai Panggil Siapa Kamu!</h1>
          <div class="score-big-num">${score}</div>
          <p style="font-weight:800;color:var(--text-muted)">${callWhoFirstTryCorrect} dari ${callWhoQuestions.length} situasi dijawab tepat di percobaan pertama.</p>
          <div class="score-actions">
            <button type="button" class="btn-3d btn-green" id="btn-cw-retry">
              <i class="ph-bold ph-arrows-clockwise"></i> Main Lagi (Acak)
            </button>
            <button type="button" class="btn-3d btn-white" id="btn-cw-home">
              <i class="ph-bold ph-house"></i> Ke Beranda
            </button>
          </div>
        </section>
      `;

      document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
      document.getElementById('btn-cw-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
      document.getElementById('btn-cw-retry').addEventListener('click', () => { playTapSound(); startNewCallWho(); });
      return;
    }

    const q = callWhoQuestions[callWhoIndex];
    const emList = getEmergencyList();
    const pct = Math.round(((callWhoIndex + 1) / callWhoQuestions.length) * 100);

    mainEl.innerHTML = `
      <div class="module-topbar">
        <button type="button" class="btn-back-pill" id="btn-back-home"><i class="ph-bold ph-arrow-left"></i> Beranda</button>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-count">Soal ${callWhoIndex + 1}/${callWhoQuestions.length}</div>
      </div>

      <section class="quiz-card">
        <div class="callwho-scene">
          <img src="${q.img}" alt="Ilustrasi situasi darurat" />
          <div>
            <h1 class="quiz-question" style="margin-bottom:10px">${q.prompt}</h1>
            <button type="button" class="btn-3d btn-sky" id="btn-speak-cw" style="min-height:42px;padding:8px 14px;font-size:0.9rem">
              <i class="ph-fill ph-speaker-high"></i> Dengarkan Soal
            </button>
          </div>
        </div>

        <div class="callwho-grid">
          ${q.options.map(emId => {
            const info = emList.find(e => e.id === emId) || emList[0];
            return `
              <button type="button" class="callwho-btn" data-cw-id="${info.id}">
                <span class="em-target-icon" style="background:${info.color}"><i class="ph-fill ${info.icon}"></i></span>
                <span class="callwho-num">${escapeHtml(info.num)}</span>
                <span class="callwho-name">${info.label}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div id="cw-feedback-slot"></div>
      </section>
    `;

    document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
    document.getElementById('btn-speak-cw').addEventListener('click', () => { playTapSound(); speakText(q.prompt); });

    mainEl.querySelectorAll('[data-cw-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (callWhoLocked) return;
        const chosenId = btn.dataset.cwId;
        const slot = document.getElementById('cw-feedback-slot');

        if (chosenId === q.answerId) {
          callWhoLocked = true;
          btn.classList.add('opt-correct');
          if (!callWhoWrongOnCurrent) callWhoFirstTryCorrect++;

          playChimeSound();
          if (!state.awardedCallWhoIds.includes(q.id)) {
            state.awardedCallWhoIds.push(q.id);
            awardXP(10, btn);
          }
          speakText(q.explain);

          slot.innerHTML = `
            <div class="feedback-banner feedback-success">
              <div><i class="ph-fill ph-check-circle"></i> ${q.explain}</div>
              <button type="button" class="btn-3d btn-green" id="btn-cw-next">
                <span>${callWhoIndex === callWhoQuestions.length - 1 ? 'Lihat Nilai' : 'Lanjut'}</span>
                <i class="ph-bold ph-arrow-right"></i>
              </button>
            </div>
          `;
          document.getElementById('btn-cw-next').addEventListener('click', () => {
            playTapSound();
            stopSpeaking();
            if (callWhoIndex < callWhoQuestions.length - 1) {
              callWhoIndex++;
              callWhoWrongOnCurrent = false;
              callWhoLocked = false;
              renderCallWho();
            } else {
              callWhoFinished = true;
              renderCallWho();
            }
          });
        } else {
          callWhoWrongOnCurrent = true;
          btn.classList.add('opt-gentle-dim');
          btn.disabled = true;
          playSoftHintSound();
          speakText('Belum tepat, tidak apa-apa. Yuk coba pilih nomor yang lain.');
          slot.innerHTML = `
            <div class="feedback-banner feedback-hint">
              <div><i class="ph-fill ph-hand-heart"></i> Belum tepat, tidak apa-apa. Coba pilih nomor lainnya ya!</div>
            </div>
          `;
        }
      });
    });
  }

  /* =========================================================
     12. MODUL 4: CERITA AKSI AMAN (SOCIAL STORIES)
  ========================================================= */
  function renderStories() {
    const story = STORIES[activeStoryIndex];
    const step = story.steps[activeStoryStep];
    const isCompleted = state.completedStories.includes(story.id);

    mainEl.innerHTML = `
      <div class="module-topbar">
        <button type="button" class="btn-back-pill" id="btn-back-home"><i class="ph-bold ph-arrow-left"></i> Beranda</button>
        <div class="progress-track"><div class="progress-fill" style="width:${Math.round(((activeStoryStep + 1) / story.steps.length) * 100)}%"></div></div>
        <div class="progress-count">Langkah ${activeStoryStep + 1}/3</div>
      </div>

      <div class="story-picker">
        ${STORIES.map((st, idx) => `
          <button type="button" class="story-tab ${idx === activeStoryIndex ? 'active' : ''}" data-story-idx="${idx}">
            <i class="ph-fill ${st.icon}" style="font-size:1.35rem"></i>
            <span style="flex:1">${st.title}</span>
            ${state.completedStories.includes(st.id) ? '<i class="ph-fill ph-check-circle" style="color:var(--green-dark)"></i>' : ''}
          </button>
        `).join('')}
      </div>

      <section class="story-card">
        <div class="story-steps-indicator">
          ${story.steps.map((_, idx) => `
            <div class="story-step-pill ${idx === activeStoryStep ? 'current' : (idx < activeStoryStep ? 'done' : '')}">
              Langkah ${idx + 1}
            </div>
          `).join('')}
        </div>

        <div class="story-body-grid">
          <div class="story-art">
            <img src="${step.img}" alt="${step.title}" />
          </div>
          <div>
            <h2 style="margin:0 0 10px;font-size:1.45rem;font-weight:900">${step.title}</h2>
            <p class="learn-copy">${step.text}</p>

            <div class="learn-actions-row">
              <button type="button" class="btn-3d btn-sky" id="btn-speak-story">
                <i class="ph-fill ph-speaker-high"></i> Dengarkan Cerita
              </button>
            </div>

            <div class="learn-nav-row">
              <button type="button" class="btn-3d btn-white" id="btn-story-prev" ${activeStoryStep === 0 ? 'disabled' : ''}>
                <i class="ph-bold ph-arrow-left"></i> Kembali
              </button>
              <button type="button" class="btn-3d btn-purple" id="btn-story-next">
                <span>${activeStoryStep < 2 ? 'Langkah Berikutnya' : (isCompleted ? 'Selesai Dibaca' : 'Selesai Cerita (+20 XP)')}</span>
                <i class="ph-bold ${activeStoryStep < 2 ? 'ph-arrow-right' : 'ph-check'}"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    `;

    document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
    mainEl.querySelectorAll('[data-story-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        playTapSound();
        stopSpeaking();
        activeStoryIndex = Number(btn.dataset.storyIdx);
        activeStoryStep = 0;
        renderStories();
      });
    });

    document.getElementById('btn-speak-story').addEventListener('click', () => {
      playTapSound();
      speakText(`${step.title}. ${step.text}`);
    });

    document.getElementById('btn-story-prev').addEventListener('click', () => {
      if (activeStoryStep > 0) {
        playTapSound();
        stopSpeaking();
        activeStoryStep--;
        renderStories();
      }
    });

    const nextBtn = document.getElementById('btn-story-next');
    nextBtn.addEventListener('click', () => {
      stopSpeaking();
      if (activeStoryStep < 2) {
        playTapSound();
        activeStoryStep++;
        renderStories();
      } else {
        if (!state.completedStories.includes(story.id)) {
          state.completedStories.push(story.id);
          playFanfareSound();
          awardXP(20, nextBtn);
          burstConfetti();
          showToast('Cerita Aksi Aman selesai! +20 XP');
          speakText('Hebat! Kamu sudah menyelesaikan cerita aksi aman ini.');
        } else {
          playChimeSound();
          showToast('Cerita ini sudah kamu selesaikan sebelumnya.');
        }
        renderStories();
      }
    });
  }

  /* =========================================================
     13. MODUL 6: KARTU DARURAT SAYA (TTS + SIAP CETAK)
  ========================================================= */
  function renderIdCard() {
    const p = state.profile;
    mainEl.innerHTML = `
      <div class="module-topbar">
        <button type="button" class="btn-back-pill" id="btn-back-home"><i class="ph-bold ph-arrow-left"></i> Beranda</button>
      </div>

      <section class="id-card-shell">
        <div class="emergency-id-card">
          <div class="id-card-header">
            <h2><i class="ph-fill ph-first-aid"></i> KARTU DARURAT SAYA</h2>
            <span style="font-weight:900;font-size:0.85rem;background:rgba(255,255,255,0.2);padding:4px 10px;border-radius:999px">GrahitaGo</span>
          </div>
          <div class="id-card-body">
            <div class="id-row">
              <div class="id-label">Nama Anak</div>
              <div class="id-value">${escapeHtml(p.childName)}</div>
            </div>
            <div class="id-row">
              <div class="id-label">Orang Tua / Wali</div>
              <div class="id-value">${escapeHtml(p.guardianName)}</div>
            </div>
            <div class="id-row" style="border-color:#FCA5A5;background:#FFF5F5">
              <div class="id-label" style="color:var(--red-dark)">Hubungi Nomor Darurat Keluarga</div>
              <div class="id-value id-value-phone">${escapeHtml(p.familyPhone)}</div>
            </div>
            <div class="id-row">
              <div class="id-label">Alamat Singkat</div>
              <div class="id-value" style="font-size:1rem">${escapeHtml(p.shortAddress)}</div>
            </div>
            <div class="id-row">
              <div class="id-label">Pesan untuk Penolong</div>
              <div class="id-value" style="font-size:0.98rem;font-weight:800;line-height:1.45">${escapeHtml(p.helperNote)}</div>
            </div>
          </div>
        </div>

        <div class="id-card-actions">
          <button type="button" class="btn-3d btn-sky" id="btn-speak-idcard">
            <i class="ph-fill ph-speaker-high"></i> Bacakan untuk Penolong
          </button>
          <button type="button" class="btn-3d btn-green" id="btn-print-idcard">
            <i class="ph-fill ph-printer"></i> Cetak Kartu
          </button>
        </div>
        <p style="text-align:center;font-weight:800;font-size:0.86rem;color:var(--text-muted);margin-top:12px">
          Untuk mengubah data kartu, tahan tombol <strong>Pendamping</strong> di pojok kanan atas selama 1,5 detik.
        </p>
      </section>
    `;

    document.getElementById('btn-back-home').addEventListener('click', () => { playTapSound(); navigateTo('home'); });
    document.getElementById('btn-speak-idcard').addEventListener('click', () => {
      playTapSound();
      const digitsSpoken = p.familyPhone.split('').join(' ');
      speakText(`Halo, nama saya ${p.childName}. ${p.helperNote}. Mohon hubungi ${p.guardianName} di nomor ${digitsSpoken}.`);
    });
    document.getElementById('btn-print-idcard').addEventListener('click', () => {
      playTapSound();
      window.print();
    });
  }

  /* =========================================================
     14. MODAL TENANG DULU (NAPAS VISUAL 4-2-4)
  ========================================================= */
  const calmModal = document.getElementById('modal-calm');
  const breathCircle = document.getElementById('breath-circle');
  const breathCountEl = document.getElementById('breath-count');
  const breathPhaseEl = document.getElementById('breath-phase');
  const calmBarFill = document.getElementById('calm-bar-fill');
  const calmInstrEl = document.getElementById('calm-instruction');
  const calmCyclesEl = document.getElementById('calm-cycles');
  const btnToggleBreath = document.getElementById('btn-toggle-breath');

  let breathRunning = false;
  let breathInterval = null;
  let breathSessionCycles = 0;

  const BREATH_PHASES = [
    { name: 'Tarik Napas', secs: 4, cls: 'phase-inhale', instr: 'Tarik napas pelan lewat hidung...' },
    { name: 'Tahan Sebentar', secs: 2, cls: 'phase-hold', instr: 'Tahan sebentar dengan nyaman...' },
    { name: 'Hembuskan', secs: 4, cls: 'phase-exhale', instr: 'Hembuskan napas pelan lewat mulut...' }
  ];

  function stopBreathing() {
    breathRunning = false;
    clearInterval(breathInterval);
    breathInterval = null;
    breathCircle.className = 'breath-circle';
    breathCountEl.textContent = '4';
    breathPhaseEl.textContent = 'Siap';
    calmBarFill.style.width = '0%';
    calmInstrEl.textContent = 'Tekan tombol Mulai. Kita tarik napas bersama dengan tenang.';
    btnToggleBreath.innerHTML = '<i class="ph-fill ph-play"></i><span>Mulai Napas Tenang</span>';
  }

  function startBreathing() {
    breathRunning = true;
    btnToggleBreath.innerHTML = '<i class="ph-fill ph-stop"></i><span>Berhenti</span>';
    let pIdx = 0;
    let remaining = BREATH_PHASES[0].secs;

    const applyPhase = () => {
      const ph = BREATH_PHASES[pIdx];
      breathCircle.className = `breath-circle ${ph.cls}`;
      breathPhaseEl.textContent = ph.name;
      breathCountEl.textContent = remaining;
      calmInstrEl.textContent = ph.instr;
      const pct = Math.round(((ph.secs - remaining + 1) / ph.secs) * 100);
      calmBarFill.style.width = `${pct}%`;
      if (remaining === ph.secs) {
        playTone(pIdx === 0 ? 392 : (pIdx === 1 ? 440 : 329.6), 0.18, 'sine', 0.06);
        speakText(ph.name);
      }
    };

    applyPhase();
    breathInterval = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        pIdx++;
        if (pIdx >= BREATH_PHASES.length) {
          pIdx = 0;
          breathSessionCycles++;
          state.calmCyclesTotal++;
          saveState();
          calmCyclesEl.textContent = `Siklus tenang selesai: ${breathSessionCycles}`;
        }
        remaining = BREATH_PHASES[pIdx].secs;
      }
      applyPhase();
    }, 1000);
  }

  function openCalmModal() {
    stopSpeaking();
    breathSessionCycles = 0;
    calmCyclesEl.textContent = 'Siklus tenang selesai: 0';
    stopBreathing();
    calmModal.classList.remove('hidden');
  }

  function closeCalmModal() {
    stopBreathing();
    stopSpeaking();
    calmModal.classList.add('hidden');
  }

  document.getElementById('btn-open-calm').addEventListener('click', () => { playTapSound(); openCalmModal(); });
  document.getElementById('btn-close-calm').addEventListener('click', () => { playTapSound(); closeCalmModal(); });
  btnToggleBreath.addEventListener('click', () => {
    playTapSound();
    if (breathRunning) stopBreathing();
    else startBreathing();
  });

  /* =========================================================
     15. MODE PENDAMPING (TAHAN 1,5 DETIK + PENGATURAN)
  ========================================================= */
  const parentModal = document.getElementById('modal-parent');
  const parentBtn = document.getElementById('btn-parent-lock');
  const holdFill = document.getElementById('parent-hold-fill');
  let holdTimer = null;
  let holdStart = 0;
  const HOLD_DURATION = 1500;

  function cancelHold() {
    clearInterval(holdTimer);
    holdTimer = null;
    holdFill.style.width = '0%';
  }

  function startHold(e) {
    if (e && e.cancelable) e.preventDefault();
    cancelHold();
    holdStart = Date.now();
    holdTimer = setInterval(() => {
      const elapsed = Date.now() - holdStart;
      const pct = Math.min(100, (elapsed / HOLD_DURATION) * 100);
      holdFill.style.width = `${pct}%`;
      if (elapsed >= HOLD_DURATION) {
        cancelHold();
        playChimeSound();
        openParentModal();
      }
    }, 30);
  }

  parentBtn.addEventListener('pointerdown', startHold);
  parentBtn.addEventListener('pointerup', cancelHold);
  parentBtn.addEventListener('pointerleave', cancelHold);
  parentBtn.addEventListener('pointercancel', cancelHold);
  parentBtn.addEventListener('contextmenu', e => e.preventDefault());
  parentBtn.addEventListener('click', () => {
    showToast('Tahan tombol Pendamping selama 1,5 detik untuk membuka pengaturan.');
  });

  function openParentModal() {
    stopSpeaking();
    document.getElementById('parent-stats-grid').innerHTML = `
      <div class="p-stat-box"><div class="p-stat-val">${state.xp}</div><div class="p-stat-lbl">Total XP</div></div>
      <div class="p-stat-box"><div class="p-stat-val">${state.masteredTopics.length}/12</div><div class="p-stat-lbl">Topik Paham</div></div>
      <div class="p-stat-box"><div class="p-stat-val">${state.bestQuizScore}</div><div class="p-stat-lbl">Skor Kuis</div></div>
      <div class="p-stat-box"><div class="p-stat-val">${state.totalCalls}</div><div class="p-stat-lbl">Panggilan</div></div>
    `;

    document.getElementById('toggle-calm-mode').checked = !!state.settings.calmMode;
    document.getElementById('toggle-sfx-mode').checked = !!state.settings.sfxEnabled;
    document.getElementById('range-tts-rate').value = state.settings.ttsRate;
    document.getElementById('tts-rate-label').textContent = `${Number(state.settings.ttsRate).toFixed(2).replace(/\.00$/, '')}x`;

    document.getElementById('input-family-phone').value = state.profile.familyPhone;
    document.getElementById('input-child-name').value = state.profile.childName;
    document.getElementById('input-guardian-name').value = state.profile.guardianName;
    document.getElementById('input-short-address').value = state.profile.shortAddress;
    document.getElementById('input-helper-note').value = state.profile.helperNote;
    document.getElementById('parent-form-feedback').textContent = '';

    parentModal.classList.remove('hidden');
  }

  document.getElementById('btn-close-parent').addEventListener('click', () => {
    playTapSound();
    parentModal.classList.add('hidden');
  });

  document.getElementById('toggle-calm-mode').addEventListener('change', e => {
    state.settings.calmMode = e.target.checked;
    saveState();
  });

  document.getElementById('toggle-sfx-mode').addEventListener('change', e => {
    state.settings.sfxEnabled = e.target.checked;
    saveState();
  });

  document.getElementById('range-tts-rate').addEventListener('input', e => {
    const val = Number(e.target.value);
    state.settings.ttsRate = val;
    document.getElementById('tts-rate-label').textContent = `${val}x`;
    saveState();
  });

  document.getElementById('form-emergency-profile').addEventListener('submit', e => {
    e.preventDefault();
    const rawPhone = document.getElementById('input-family-phone').value;
    const cleanPhone = rawPhone.replace(/\D/g, '').slice(0, 15);
    const fb = document.getElementById('parent-form-feedback');

    if (cleanPhone.length < 3) {
      fb.style.color = '#D42C2C';
      fb.textContent = 'Nomor keluarga minimal 3 digit angka.';
      return;
    }

    state.profile.familyPhone = cleanPhone;
    state.profile.childName = document.getElementById('input-child-name').value.trim() || 'Anak Hebat';
    state.profile.guardianName = document.getElementById('input-guardian-name').value.trim() || 'Ibu / Ayah';
    state.profile.shortAddress = document.getElementById('input-short-address').value.trim() || '-';
    state.profile.helperNote = document.getElementById('input-helper-note').value.trim() || DEFAULT_STATE.profile.helperNote;
    saveState();

    playChimeSound();
    fb.style.color = '#15803D';
    fb.textContent = 'Pengaturan & data Kartu Darurat berhasil disimpan.';
    if (currentView === 'phone') renderPhone();
    if (currentView === 'idcard') renderIdCard();
  });

  document.getElementById('btn-reset-progress').addEventListener('click', () => {
    if (!window.confirm('Reset semua XP, lencana, dan progres belajar anak? Pengaturan nomor keluarga tetap disimpan.')) return;
    const keepSettings = structuredClone(state.settings);
    const keepProfile = structuredClone(state.profile);
    state = structuredClone(DEFAULT_STATE);
    state.settings = keepSettings;
    state.profile = keepProfile;
    saveState();
    playTapSound();
    parentModal.classList.add('hidden');
    showToast('Progres belajar berhasil direset.');
    navigateTo('home');
  });

  // Klik tombol brand kembali ke beranda
  document.getElementById('btn-home-brand').addEventListener('click', () => {
    playTapSound();
    navigateTo('home');
  });

  // Tutup modal saat klik backdrop
  [calmModal, parentModal].forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        if (modal === calmModal) closeCalmModal();
        else parentModal.classList.add('hidden');
      }
    });
  });

  // Inisialisasi aplikasi
  syncHeaderAndTheme();
  renderHome();
})();
