# Assignment: Express.js & Modul Node.js

## Identitas

- Nama : Baiq Luthfida Khairunnisa
- NIM : F1D022037

---

## Deskripsi Tugas

Pada tugas ini saya membangun sebuah server sederhana menggunakan Express.js dan modul lokal Node.js. Server ini memiliki beberapa fitur utama, yaitu:

Route Utama (/)

Menampilkan Nama dan NIM saya dalam format HTML yang sudah diberi style CSS. Halaman tidak hanya menampilkan teks polos, tapi sudah berbentuk card putih dengan shadow dan background gradient biru, sehingga terlihat seperti halaman web sederhana.

Route Hitung (/hitung)

Menggunakan modul math.js yang saya buat di folder utils/. Fungsi tambah(a, b) dipanggil untuk menghitung penjumlahan angka. Hasil perhitungan ditampilkan dalam tampilan HTML styled, bukan hanya teks biasa. Saya juga menambahkan dukungan query parameter (/hitung?a=10&b=7) supaya user bisa memasukkan angka sendiri tanpa mengubah kode.

Route Profile (/profile)

Dibuat secara modular di folder routes/profile.js. Route /profile menampilkan data profil berupa JSON array (berisi beberapa mahasiswa). Route /profile/:nim menampilkan detail profil berdasarkan NIM tertentu. Jika NIM tidak ditemukan, server akan menampilkan pesan error 404 dalam format JSON.

Struktur Modular

Saya memisahkan fungsi matematika (tambah, kali) ke dalam folder utils. Saya memisahkan route /profile ke folder routes agar kode lebih terstruktur dan mudah dikembangkan. File utama index.js hanya berfungsi sebagai entrypoint server dan menghubungkan semua route serta modul.

Hasil Akhir

Server dapat dijalankan dengan node index.js atau nodemon index.js. Terdapat empat endpoint utama:

http://localhost:3000/ → Menampilkan Nama & NIM dalam tampilan web styled.

http://localhost:3000/hitung → Menampilkan hasil penjumlahan default (5 + 7).

http://localhost:3000/profile → Menampilkan JSON daftar profil.

http://localhost:3000/profile/F1D022037 → Menampilkan detail profil sesuai NIM.

Dengan demikian, tugas ini tidak hanya berhasil membuat server sederhana, tetapi juga sudah memiliki tampilan HTML pada beberapa endpoint, serta menerapkan konsep modularisasi kode sesuai instruksi.

## Hasil

![alt text](<Screenshot 2025-09-29 012156.png>) ![alt text](<Screenshot 2025-09-29 012212.png>) ![alt text](<Screenshot 2025-09-29 012224.png>)
![alt text](<Screenshot 2025-09-29 012612.png>)

1. Halaman Utama (/)

Halaman utama menampilkan Nama dan NIM saya. Tampilan menggunakan HTML + CSS inline sehingga berbentuk card putih dengan bayangan (shadow) di tengah layar. Latar belakang halaman menggunakan gradient biru sehingga terlihat lebih menarik dibanding teks polos.

2. Halaman Hitung (/hitung)

Halaman ini menampilkan hasil penjumlahan menggunakan fungsi tambah() dari file utils/math.js. Secara default, route ini menghitung 5 + 7 = 12. User juga bisa mengubah angka lewat query parameter, misalnya:
http://localhost:3000/hitung?a=10&b=15 → akan menampilkan 10 + 15 = 25. Tampilan dibuat lebih rapi dengan card putih di atas background kuning lembut.

3. Halaman Profile (/profile)

Route /profile menampilkan data JSON berupa array profil mahasiswa. Data JSON terdiri dari NIM, Nama, Angkatan, dan Jurusan.

4. Halaman Detail Profile (/profile/:nim)

Route /profile/:nim menampilkan detail 1 mahasiswa berdasarkan NIM.
Contoh akses:

http://localhost:3000/profile/F1D022037
