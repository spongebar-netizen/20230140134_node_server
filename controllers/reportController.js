// 1. Impor model Presensi dari Sequelize
const { Presensi } = require("../models");

exports.getDailyReport = async (req, res) => {
  try {
    console.log("Controller: Mengambil data laporan harian dari database...");

    // 2. Gunakan Presensi.findAll() untuk mengambil semua data dari tabel
    const allPresensi = await Presensi.findAll({
        order: [['checkIn', 'DESC']] // Mengurutkan data dari yang terbaru
    });

    res.json({
      reportDate: new Date().toLocaleDateString(),
      data: allPresensi, // Kirim data dari database
    });

  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
  }
};