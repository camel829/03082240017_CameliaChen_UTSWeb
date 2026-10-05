EVENTHUB - Sistem Pendaftaran Workshop Informatika
Identitas

Nama: NAMA LENGKAP

NIM: NIM

Mata Kuliah: Pemrograman Web

Proyek: UTS EVENTHUB

Deskripsi

EVENTHUB merupakan website front-end untuk menampilkan informasi workshop Informatika dan menerima pendaftaran peserta secara interaktif.

Teknologi yang digunakan:

HTML5

CSS3

Bootstrap 5

JavaScript dasar

Struktur Folder
NIM_Nama_UTSWeb/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── workshop.jpg

Alur Browser → Web Server → Response

Alur dasar website adalah:

User
  ↓
Browser
  ↓
HTTP Request
  ↓
Web Server
  ↓
HTTP Response
  ↓
Browser
  ↓
Halaman EVENTHUB


Penjelasan:

Pengguna membuka website melalui browser.

Browser mengirimkan HTTP Request ke web server.

Web server menerima request dan memproses file yang diminta.

Web server mengirimkan HTTP Response kepada browser.

Browser membaca HTML, CSS, JavaScript, dan gambar.

Browser melakukan rendering sehingga halaman EVENTHUB dapat ditampilkan kepada pengguna.

Fitur Website
HTML5

Website menggunakan:

header

nav

main

section

article

footer

Form HTML5

Tabel jadwal

Datalist

Gambar

Link informasi

Workshop

Tersedia tiga pilihan workshop:

Front-End Web

UI/UX Design

Cybersecurity Dasar

Form Pendaftaran

Form menyediakan:

Nama lengkap

Email

Nomor HP

Tipe peserta

Tanggal hadir

Pilihan workshop

Pilihan sesi

Asal institusi

JavaScript

JavaScript digunakan untuk:

Validasi form

Event submit

Percabangan

Perulangan

Function

Manipulasi DOM

Perhitungan biaya

Menampilkan ringkasan pendaftaran tanpa reload halaman

Biaya Workshop
Workshop	Biaya
Front-End Web	Rp75.000
UI/UX Design	Rp65.000
Cybersecurity Dasar	Rp85.000

Peserta dengan tipe Umum mendapatkan tambahan biaya Rp10.000.

Cara Menjalankan

Buka folder NIM_Nama_UTSWeb.

Buka file index.html menggunakan browser.

Isi data pendaftaran.

Pilih minimal satu workshop.

Klik tombol Daftar Workshop.

Ringkasan pendaftaran akan ditampilkan secara otomatis.

Git

Repository menggunakan Git dengan minimal tiga commit:

git commit -m "Initial project"
git commit -m "Add HTML and CSS structure"
git commit -m "Add JavaScript interactivity"


Untuk melihat riwayat commit:

git log --oneline


Hasil perintah tersebut digunakan sebagai bukti pada git-log.pdf.