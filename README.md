# GrahitaGo — Kenali Bahaya & Nomor Darurat

Aplikasi web edukasi interaktif ramah sensorik (*sensory-friendly*) yang dirancang khusus untuk membantu anak tunagrahita dan autis mengenali 12 tanda bahaya di sekitar, melatih respons aman secara berulang tanpa stres (*errorless learning*), serta menghafal nomor darurat Indonesia dan nomor keluarga.

## Fitur Utama

1. **Belajar Bahaya (12 Topik Lengkap)**: Api, Listrik, Benda Tajam, Air/Banjir, Lantai Licin, Obat-obatan, Cairan Pembersih, Benda Panas, Tangga, Jalan Raya, Gempa Bumi, dan Jalur Evakuasi. Menggunakan ilustrasi SVG kustom, suara Bahasa Indonesia (TTS), dan Checklist Langkah Aman.
2. **Main Pilih Aman (*Errorless Learning*)**: Kuis visual 2 pilihan dengan soal acak setiap sesi, tanpa hukuman suara keras, dan layar nilai skor 0–100.
3. **Telepon Darurat Interaktif**: Simulator panggilan 112, 110, 113, 119, dan Nomor Keluarga yang dapat dikustomisasi, dilengkapi fitur **Panduan Cahaya** (*Guided Mode*) dan nada tombol telepon (DTMF).
4. **Panggil Siapa?**: Permainan mencocokkan situasi bahaya langsung ke nomor darurat yang tepat.
5. **Cerita Aksi Aman (*Social Stories*)**: 3 cerita langkah demi langkah untuk melatih rutinitas tenang saat darurat.
6. **Kartu Darurat Saya**: Kartu pengenal darurat kontras tinggi yang dapat dibacakan suara (TTS) untuk penolong dan siap dicetak (`Cetak Kartu`).
7. **Tenang Dulu**: Latihan pernapasan visual 4-2-4 (Tarik 4 detik, Tahan 2 detik, Hembuskan 4 detik) untuk membantu regulasi emosi.
8. **Papan Lencana & Mode Pendamping**: 6 lencana prestasi, perlindungan anti-spam XP, serta panel orang tua/guru terkunci (tahan 1,5 detik) untuk mengatur kecepatan suara, Mode Super Tenang, efek suara, dan data Kartu Darurat.

## Struktur Folder

```text
.
├── index.html       # Halaman utama aplikasi
├── style.css        # Gaya taktil responsif (Mobile, Tablet, Desktop, Print)
├── app.js           # Logika aplikasi, TTS, Web Audio SFX, dan penyimpanan progres
├── manifest.json    # Manifest PWA (bisa dipasang ke layar utama HP)
├── vercel.json      # Konfigurasi deployment statis Vercel
├── README.md        # Panduan proyek & deployment
└── assets/          # 37 ilustrasi SVG kustom, hero.webp, dan favicon.svg
```

## Cara Deploy ke Vercel

Proyek ini murni HTML, CSS, dan JavaScript statis (*zero build step*), sehingga bisa langsung dideploy dalam hitungan detik:

### Opsi 1: Melalui GitHub (Direkomendasikan)
1. Ekstrak file ZIP ini ke folder proyek Anda.
2. Push seluruh isi folder ke repository GitHub baru.
3. Buka [vercel.com](https://vercel.com), pilih **Add New... → Project**, lalu impor repository tersebut.
4. Biarkan **Framework Preset** pada `Other` (otomatis terbaca dari `vercel.json`) dan klik **Deploy**.

### Opsi 2: Melalui Vercel CLI
```bash
npm i -g vercel
vercel
```
Ikuti instruksi di terminal, lalu jalankan `vercel --prod` untuk merilis ke produksi.

### Opsi 3: Uji Coba Lokal di Komputer
Jalankan server lokal sederhana di folder proyek:
```bash
python -m http.server 8000
```
Lalu buka `http://localhost:8000` di browser.
