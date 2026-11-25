# Kenali Bahaya, Minta Bantuan

Media belajar berbahasa Indonesia untuk digunakan bersama anak dengan disabilitas intelektual dan anak autistik. Pengalaman belajar mencakup 12 materi, pilihan bergambar dengan kesempatan mencoba ulang, contoh meminta bantuan, serta simulasi telepon.

## Coba di komputer

Ekstrak ZIP, lalu buka `index.html`. Website juga dapat dijalankan melalui `python -m http.server 8000` dan dibuka di http://localhost:8000. Tombol dengarkan memakai sintesis suara browser dengan bahasa id-ID. Jika perangkat belum punya suara Indonesia, browser dapat memakai suara bawaannya. Teks instruksi selalu tersedia.

## Deploy ke Vercel

1. Buat repositori GitHub dan unggah **isi folder ini**. Pastikan `index.html` dan `vercel.json` berada di root repo.
2. Masuk ke Vercel, pilih **Add New → Project**, lalu impor repositori.
3. Pilih preset **Other** jika diminta. Gunakan root repositori dan biarkan Build Command, Install Command, serta Output Directory pada pengaturan bawaan. Proyek ini berisi HTML, CSS, JavaScript, dan gambar statis.
4. Klik **Deploy**, lalu buka tautan hasilnya dan uji tombol suara pada perangkat yang akan dipakai siswa.

Dokumentasi: https://vercel.com/docs/git

## Sebelum digunakan bersama siswa

- Buka **Panduan pendamping** dan pilih nomor yang sudah dikonfirmasi untuk lokasi sekolah. Pilihan disimpan pada browser setempat dan perlu diisi di setiap perangkat. Tanpa konfirmasi, simulasi hanya menggunakan tombol angka bebas.
- Simulasi berjalan di halaman web dan tidak membuka aplikasi telepon. Angka latihan tidak dikirim atau disimpan.
- Sesuaikan contoh gambar dengan rambu yang benar-benar dipasang di sekolah. Latih satu materi pada satu waktu, dan ajak anak menunjukkan kepada siapa ia bisa meminta bantuan.
- Sumber nomor di Indonesia: https://layanan112.komdigi.go.id/tentang
- Panduan langkah yang jelas: https://www.w3.org/WAI/WCAG2/supplemental/patterns/o1p04-clear-steps/

Materi dapat disesuaikan di `app.js`. Gambar berada di `assets/`.

## Materi

- Di sekolah: bahaya listrik, lantai licin, tangga.
- Di rumah: benda panas, benda tajam, obat, cairan pembersih.
- Di luar rumah: menyeberang jalan dan tepi kolam atau sungai.
- Saat darurat: jalur evakuasi, asap atau api, dan gempa di dalam ruangan.

Ikon materi sehari-hari adalah ilustrasi pengenalan. Untuk mengajarkan rambu resmi, cocokkan bentuk dan posisi rambu dengan yang digunakan di sekolah. Gunakan latihan kelas ini bersama pendamping dan sesuaikan dengan prosedur evakuasi sekolah.

- Gempa: https://bnpb.go.id/storage/app/media/uploads/migration/pubs/478.pdf
- Kebakaran: https://ppid.surabaya.go.id/prosedur-evakuasi-dalam-keadaan-darurat-kebakaran
- Menyeberang: https://dishub.salatiga.go.id/wp-content/uploads/2024/07/MODUL-SI-DOL-SLAMET.pdf
