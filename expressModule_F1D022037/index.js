const express = require("express");
const app = express();
const port = 3000;

// Import modul math.js
const math = require("./utils/math");

// Import routes profile.js
const profileRouter = require("./routes/profile");

// Route utama pakai HTML styled
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Profil Mahasiswa</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #89f7fe, #66a6ff);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            text-align: center;
            width: 350px;
          }
          h1 { margin: 0; color: #333; }
          p { color: #555; font-size: 18px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Nama: Baiq Luthfida Khairunnisa</h1>
          <p>NIM: F1D022037</p>
        </div>
      </body>
    </html>
  `);
});

// Route hitung pakai fungsi tambah dari math.js
app.get("/hitung", (req, res) => {
  const hasil = math.tambah(5, 7);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hitung</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            background: #fceabb; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
          }
          .result {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            text-align: center;
          }
          h2 { margin: 0; color: #444; }
          p { font-size: 20px; color: #222; }
        </style>
      </head>
      <body>
        <div class="result">
          <h2>Hasil Penjumlahan</h2>
          <p>5 + 7 = <b>${hasil}</b></p>
        </div>
      </body>
    </html>
  `);
});

// Pakai router profile
app.use("/profile", profileRouter);

// Jalankan server
app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
