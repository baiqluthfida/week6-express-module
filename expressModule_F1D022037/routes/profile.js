const express = require("express");
const router = express.Router();

// Data profil contoh
const profiles = [
  { nim: "F1D022037", nama: "Baiq Luthfida Kahirunnisa" },
  { nim: "F1D022038", nama: "mamak" },
  { nim: "F1D022039", nama: "mamik" },
];

// Route /profile → tampilkan semua profile
router.get("/", (req, res) => {
  res.json(profiles);
});

// Route /profile/:nim → tampilkan detail profile sesuai NIM
router.get("/:nim", (req, res) => {
  const nim = req.params.nim;
  const profile = profiles.find((p) => p.nim === nim);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: "Profile tidak ditemukan" });
  }
});

module.exports = router;
