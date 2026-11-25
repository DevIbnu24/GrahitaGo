const allLessons = [
  { id: 'listrik', title: 'Bahaya listrik', category: 'Di sekolah', intro: 'Ini tanda bahaya listrik.', action: 'Jangan sentuh. Panggil guru.', safe: 'Menjauh dan panggil guru', wrong: 'Menyentuh panel listrik' },
  { id: 'licin', title: 'Lantai licin', category: 'Di sekolah', intro: 'Ini tanda lantai licin.', action: 'Jalan pelan. Lewat jalan yang kering.', safe: 'Lewat jalan yang kering', wrong: 'Berlari di lantai basah' },
  { id: 'evakuasi', title: 'Jalur evakuasi', category: 'Saat darurat', intro: 'Panah ini menunjukkan jalan keluar.', action: 'Ikuti guru menuju pintu keluar.', safe: 'Ikuti guru keluar', wrong: 'Pergi sendiri ke arah lain' },
  {"id": "panas", "title": "Benda panas", "category": "Di rumah", "intro": "Panci panas bisa melukai tangan.", "action": "Jangan sentuh. Minta bantuan orang dewasa.", "safe": "Menjauh dari panci", "wrong": "Memegang panci panas"},
  {"id": "tajam", "title": "Benda tajam", "category": "Di rumah", "intro": "Pisau bisa melukai tangan.", "action": "Jangan ambil pisau. Panggil orang dewasa.", "safe": "Menjauh dan panggil orang dewasa", "wrong": "Mengambil pisau"},
  {"id": "obat", "title": "Obat", "category": "Di rumah", "intro": "Obat hanya diminum dengan bantuan orang dewasa yang merawatmu.", "action": "Tunjukkan obat kepada orang dewasa.", "safe": "Menunjukkan obat kepada orang dewasa", "wrong": "Minum obat sendiri"},
  {"id": "pembersih", "title": "Cairan pembersih", "category": "Di rumah", "intro": "Botol pembersih bisa berbahaya jika diminum.", "action": "Jangan buka atau minum. Panggil orang dewasa.", "safe": "Menjauh dan panggil orang dewasa", "wrong": "Membuka botol untuk diminum"},
  {"id": "tangga", "title": "Tangga", "category": "Di sekolah", "intro": "Kamu bisa jatuh jika berlari di tangga.", "action": "Jalan pelan. Pegang pegangan tangga.", "safe": "Berjalan sambil memegang pegangan", "wrong": "Berlari di tangga"},
  {"id": "jalan", "title": "Menyeberang jalan", "category": "Di luar rumah", "intro": "Ada kendaraan di jalan.", "action": "Berhenti di tepi jalan. Menyeberang di zebra cross bersama orang dewasa saat aman.", "safe": "Menyeberang bersama orang dewasa saat aman", "wrong": "Langsung berlari ke jalan"},
  {"id": "air", "title": "Tepi kolam atau sungai", "category": "Di luar rumah", "intro": "Kamu bisa jatuh ke air dari tepi kolam atau sungai.", "action": "Menjauh dari tepi. Tetap bersama orang dewasa.", "safe": "Menjauh dari tepi bersama pendamping", "wrong": "Bermain sendirian di tepi air"},
  {"id": "api", "title": "Asap atau api", "category": "Saat darurat", "intro": "Asap dan api adalah tanda bahaya.", "action": "Menjauh dari api. Ikuti guru keluar lewat jalur yang aman.", "safe": "Keluar bersama guru", "wrong": "Kembali mengambil tas"},
  {"id": "gempa", "title": "Gempa di dalam ruangan", "category": "Saat darurat", "intro": "Saat gempa, lantai dan benda bisa bergoyang.", "action": "Merunduk. Lindungi kepala dan leher di bawah meja kokoh. Pegang kaki meja sampai guncangan berhenti.", "safe": "Berlindung di bawah meja kokoh", "wrong": "Berdiri dekat rak yang bergoyang"}
];

const categories = ['Di sekolah', 'Di rumah', 'Di luar rumah', 'Saat darurat'];
const lessons = categories.flatMap(category => allLessons.filter(item => item.category === category));
const numbers = { '112': 'Darurat terpadu', '110': 'Polisi', '119': 'Darurat medis' };
const icons = {
  sound: '<path d="M3 9v6h4l5 4V5L7 9H3m12 0a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12"/>',
  next: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  phone: '<path d="M8 3H4a1 1 0 0 0-1 1c0 9 8 17 17 17a1 1 0 0 0 1-1v-4l-5-2-2 2a13 13 0 0 1-6-6l2-2z"/>',
  repeat: '<path d="M4 10a8 8 0 1 1 1 7M4 4v6h6"/>'
};
const main = document.querySelector('#main');
let selectedNumber = '';
try {
  const saved = localStorage.getItem('belajar-aman-nomor');
  if (Object.hasOwn(numbers, saved)) selectedNumber = saved;
} catch {}

function icon(name) {
  return name ? `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>` : '';
}
function link(label, route, type = '', symbol = '') {
  return `<a class="btn ${type}" href="#${route}">${icon(symbol)}${label}</a>`;
}
function speakButton() {
  return `<button type="button" data-speak>${icon('sound')} Dengarkan</button>`;
}
function scene(file, alt = '', type = '') {
  return `<img class="scene ${type}" src="assets/${file}.svg" alt="${alt}">`;
}
function layout(title, content, label = '', back = 'beranda') {
  return `<div class="lesson"><div class="lesson-top">${link('Kembali', back, '', 'back')}<span>${label}</span></div>
    <section class="panel"><h1>${title}</h1>${content}</section></div>`;
}
function listen(message) {
  const button = main.querySelector('[data-speak]');
  if (!button) return;
  button.addEventListener('click', () => {
    const status = main.querySelector('[data-audio-status]');
    if (!('speechSynthesis' in window)) {
      status.textContent = 'Suara tidak tersedia di browser ini. Bacakan teks bersama pendamping.';
      return;
    }
    const speech = new SpeechSynthesisUtterance(typeof message === 'function' ? message() : message);
    speech.lang = 'id-ID';
    speech.rate = 0.82;
    const voice = speechSynthesis.getVoices().find(item => /^id(?:-|_|$)/i.test(item.lang));
    if (voice) speech.voice = voice;
    speech.onerror = event => {
      if (!['canceled', 'interrupted'].includes(event.error)) {
        status.textContent = 'Suara belum bisa diputar. Bacakan teks bersama pendamping.';
      }
    };
    status.textContent = '';
    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
  });
}
function actions(next, label = 'Lanjut') {
  return `<div class="actions">${speakButton()}${next ? link(label, next, 'primary', 'next') : ''}</div><p class="feedback" data-audio-status role="status"></p>`;
}
function home() {
  return `<section class="hero"><div class="hero-copy"><p class="eyebrow">Belajar keselamatan</p>
    <h1>Kenali bahaya.<br>Minta bantuan.</h1><p>Lihat gambar, pilih tindakan aman, dan latihan meminta bantuan.</p>
    ${link('Mulai belajar', 'belajar/listrik/tanda', 'primary', 'next')}</div>
    <img src="assets/hero.webp" alt="Anak dan guru melihat rambu bahaya listrik"></section>
    <h2 class="section-title">Pilih materi</h2>
    <nav class="category-nav" aria-label="Kategori materi">${categories.map((category, i) => `<button type="button" data-category="${i}">${category}</button>`).join('')}</nav>
    ${categories.map((category, i) => `<section class="topic-group" aria-labelledby="group-${i}">
      <h3 id="group-${i}" tabindex="-1">${category}</h3><div class="cards">${lessons.filter(item => item.category === category).map(item =>
      `<a class="card" href="#belajar/${item.id}/tanda"><img src="assets/${item.id}.svg" alt="">${item.title}<span>Mulai materi →</span></a>`).join('')}</div>
    </section>`).join('')}
    <div class="actions">${link('Latihan minta bantuan', 'bantuan')}${link('Simulasi telepon', 'telepon', '', 'phone')}</div>`;
}

function renderLesson(index, step) {
  const item = lessons[index];
  const base = `belajar/${item.id}/`;
  const nextLesson = lessons[index + 1] ? `belajar/${lessons[index + 1].id}/tanda` : 'bantuan';
  const label = `Materi ${index + 1} dari ${lessons.length}`;
  if (step === 'tanda') {
    main.innerHTML = layout(item.title,
      `${scene(item.id, item.title, 'sign')}<p class="lead">${item.intro}</p>${actions(base + 'aman')}`, label);
    listen(item.intro);
    return;
  }
  if (step === 'aman') {
    main.innerHTML = layout('Apa yang harus kulakukan?',
      `${scene(item.id + '-aman', item.safe)}<p class="lead">${item.action}</p>${actions(base + 'kuis', 'Coba pilih')}`, label, base + 'tanda');
    listen(item.action);
    return;
  }
  const options = [{ key: 'aman', text: item.safe }, { key: 'pilihan', text: item.wrong }];
  if (index % 2 === 0) options.reverse();
  main.innerHTML = layout('Mana yang aman?',
    `<p class="lead">Pilih satu gambar.</p><div class="choices">${options.map(option =>
      `<button class="choice" data-answer="${option.key}"><img src="assets/${item.id}-${option.key}.svg" alt="">${option.text}</button>`).join('')}</div>
      <p class="feedback" data-feedback role="status"></p>
      ${actions()}<div class="actions" data-followup></div>`, label, base + 'aman');
  listen('Mana yang aman? Pilih satu gambar.');
  main.querySelectorAll('[data-answer]').forEach(button => {
    button.addEventListener('click', () => {
      const correct = button.dataset.answer === 'aman';
      main.querySelectorAll('[data-answer]').forEach(choice => choice.classList.remove('correct', 'retry'));
      button.classList.add(correct ? 'correct' : 'retry');
      main.querySelector('[data-feedback]').textContent = correct
        ? `Tepat! ${item.action}`
        : 'Coba lagi. Kamu bisa melihat contoh.';
      main.querySelector('[data-followup]').innerHTML = correct
        ? link(index === lessons.length - 1 ? 'Latihan minta bantuan' : 'Materi berikutnya', nextLesson, 'primary', 'next')
        : link('Lihat contoh', base + 'aman', '', 'repeat');
    });
  });
}

function assistance() {
  const example = 'Bu Guru, tolong. Ada lantai basah di dekat kelas.';
  main.innerHTML = layout('Minta bantuan', `${scene('bantuan', 'Anak berbicara dengan guru')}
    <p class="lead">Ada lantai basah di sekolah. Siapa yang bisa kamu panggil?</p>
    <div class="choices"><button class="choice" data-helper="guru">Bu Guru</button><button class="choice" data-helper="teman">Teman sekelas</button></div>
    <p class="feedback" data-help-feedback role="status"></p>
    <p class="notice" hidden data-help-example><strong>Coba katakan:</strong> “${example}”</p>
    ${actions()}<div class="actions" data-help-next></div>`, 'Latihan', 'belajar/gempa/kuis');
  let speech = 'Ada lantai basah di sekolah. Siapa yang bisa kamu panggil? Bu Guru atau teman sekelas?';
  listen(() => speech);
  main.querySelectorAll('[data-helper]').forEach(button => button.addEventListener('click', () => {
    const correct = button.dataset.helper === 'guru';
    main.querySelectorAll('[data-helper]').forEach(choice => choice.classList.remove('correct', 'retry'));
    button.classList.add(correct ? 'correct' : 'retry');
    main.querySelector('[data-help-feedback]').textContent = correct ? 'Tepat! Panggil Bu Guru.' : 'Ajak teman menemui Bu Guru. Coba pilih lagi.';
    main.querySelector('[data-help-example]').hidden = !correct;
    main.querySelector('[data-help-next]').innerHTML = correct ? link('Latihan telepon', 'telepon', 'primary', 'next') : '';
    speech = correct ? example : 'Ajak teman menemui Bu Guru. Coba pilih lagi.';
  }));
}

function phone() {
  const target = selectedNumber;
  let digits = '';
  let completed = false;
  main.innerHTML = layout('Telepon latihan',
    `<p class="lead">${target
      ? `Masukkan <strong>${target.split('').join(' – ')}</strong> lalu tekan <strong>Coba panggil</strong>.`
      : 'Coba tekan sampai tiga angka, lalu tekan Coba panggil.'}</p>
    <p class="notice">Latihan bersama pendamping. Tombol ini hanya menjalankan simulasi.${target ? '' : ' Pendamping bisa memilih nomor di menu panduan.'}</p>
    <p class="digits" aria-live="polite" aria-label="Angka yang dimasukkan">—</p>
    <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(digit => `<button class="key" data-digit="${digit}">${digit}</button>`).join('')}
    <button class="key" data-clear>Hapus</button><button class="key" data-digit="0">0</button>
    <button class="key" data-call disabled>${icon('phone')}<span>Coba panggil</span></button></div>
    <p class="feedback" data-feedback role="status"></p>
    <div class="actions" data-finish></div>${actions()}`, 'Simulasi', 'bantuan');
  listen(target ? `Tekan ${target.split('').map(digit => ({0:'nol',1:'satu',2:'dua',9:'sembilan'}[digit])).join(', ')}. Lalu tekan Coba panggil.`
    : 'Coba tekan tiga angka, lalu tekan Coba panggil.');
  const display = main.querySelector('.digits');
  const call = main.querySelector('[data-call]');
  const feedback = main.querySelector('[data-feedback]');
  const finish = main.querySelector('[data-finish]');
  function update() {
    display.textContent = digits || '—';
    call.disabled = digits.length !== 3 || completed;
  }
  main.querySelectorAll('[data-digit]').forEach(button => button.addEventListener('click', () => {
    if (digits.length === 3 || completed) return;
    digits += button.dataset.digit;
    feedback.textContent = '';
    update();
  }));
  main.querySelector('[data-clear]').addEventListener('click', () => {
    completed = false;
    digits = '';
    feedback.textContent = '';
    finish.innerHTML = '';
    update();
  });
  call.addEventListener('click', () => {
    if (target && digits !== target) {
      feedback.textContent = 'Coba lagi. Lihat angka contoh di atas.';
      digits = '';
      update();
      main.querySelector('[data-digit]').focus();
      return;
    }
    completed = true;
    feedback.textContent = 'Simulasi tersambung. Bersama pendamping, coba katakan: Saya di [nama sekolah atau alamat]. Ada [kejadian].';
    finish.innerHTML = link('Selesai', 'selesai', 'primary', 'next');
    finish.querySelector('a').focus();
    update();
  });
}

function guide() {
  main.innerHTML = layout('Panduan pendamping', `<p>Mulai dengan satu rambu. Bacakan instruksi atau tekan Dengarkan. Ajak anak menunjukkan tindakan yang aman, lalu ulangi sesuai kebutuhannya.</p>
    <h2>Atur nomor latihan</h2><p>Konfirmasi nomor yang berlaku untuk sekolah sebelum memilih. Ketersediaan layanan 112 bergantung pada kabupaten atau kota.</p>
    <form><label for="training-number">Nomor simulasi</label><input id="training-number" type="text" list="nomor" inputmode="numeric" maxlength="3" value="${selectedNumber}" aria-describedby="number-help">
      <datalist id="nomor">${Object.entries(numbers).map(([key, name]) => `<option value="${key}">${name}</option>`).join('')}</datalist>
      <p id="number-help">Kosongkan untuk latihan tombol angka bebas.</p><button class="primary" type="submit">Simpan pengaturan</button>
      <p class="feedback" data-guide-status role="status"></p></form>
    <table><thead><tr><th scope="col">Nomor</th><th scope="col">Layanan</th></tr></thead><tbody>${Object.entries(numbers).map(([key, name]) => `<tr><td>${key}</td><td>${name}</td></tr>`).join('')}</tbody></table>
    <p><a href="https://layanan112.komdigi.go.id/tentang">Sumber informasi layanan darurat Komdigi</a></p>
    ${link('Buka simulasi', 'telepon', '', 'phone')}`);
  main.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const input = main.querySelector('#training-number');
    const status = main.querySelector('[data-guide-status]');
    const value = input.value.trim();
    if (value && !Object.hasOwn(numbers, value)) {
      status.textContent = 'Pilih salah satu nomor pada tabel atau kosongkan kolom.';
      input.focus();
      return;
    }
    selectedNumber = value;
    try {
      localStorage.setItem('belajar-aman-nomor', value);
      status.textContent = 'Pengaturan tersimpan di browser ini.';
    } catch {
      status.textContent = 'Pengaturan berlaku sampai halaman dimuat ulang.';
    }
  });
}

function render(focus = true) {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  const route = location.hash.slice(1);
  const [page, id, step] = route.split('/');
  const index = lessons.findIndex(item => item.id === id);
  if (page === 'belajar' && index >= 0 && ['tanda','aman','kuis'].includes(step)) renderLesson(index, step);
  else if (route === 'bantuan') assistance();
  else if (route === 'telepon') phone();
  else if (route === 'panduan') guide();
  else if (route === 'selesai') {
    main.innerHTML = layout('Latihan selesai!', `<p class="lead">Kamu sudah berlatih meminta bantuan. Kamu bisa mengulang kapan saja.</p>
      <div class="actions">${link('Ulangi dari awal', 'belajar/listrik/tanda', 'primary', 'repeat')}${link('Ke beranda', 'beranda')}</div>`, '', 'telepon');
  } else {
    main.innerHTML = home();
    main.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
      main.querySelector('#group-' + button.dataset.category).focus();
    }));
  }
  if (focus) {
    const heading = main.querySelector('h1');
    heading.tabIndex = -1;
    heading.focus({preventScroll: true});
    window.scrollTo(0, 0);
  }
}

document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});
window.addEventListener('hashchange', () => render());
render(false);
