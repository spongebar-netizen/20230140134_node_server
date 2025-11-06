const { Presensi } = require("../models");
const { Op } = require("sequelize"); // Op sudah kita impor di langkah sebelumnya

exports.getDailyReport = async (req, res) => {
  try {
    // 1. Ambil semua query: nama, tanggalMulai, tanggalSelesai
    const { nama, tanggalMulai, tanggalSelesai } = req.query;
    
    let options = {
        where: {},
        order: [['checkIn', 'DESC']]
    };

    // 2. Filter by Nama (dari praktikum)
    if (nama) {
      options.where.nama = {
        [Op.like]:`%${nama}%`,
      };
    }

    // 3. TUGAS: Filter by Date Range
    if (tanggalMulai && tanggalSelesai) {
      // Jika ada tanggalMulai DAN tanggalSelesai, gunakan Op.between
      // Ini akan mencari checkIn di antara dua tanggal tersebut
      options.where.checkIn = {
        [Op.between]: [new Date(tanggalMulai), new Date(tanggalSelesai)],
      };
    } else if (tanggalMulai) {
      // Jika hanya ada tanggalMulai, gunakan Op.gte (Greater Than or Equal)
      // Ini akan mencari checkIn yang lebih besar atau sama dengan tanggalMulai
      options.where.checkIn = {
        [Op.gte]: new Date(tanggalMulai),
      };
    }

    console.log("Controller: Mengambil data laporan harian...", options);
    const records = await Presensi.findAll(options);

    res.json({
      reportDate: new Date().toLocaleDateString(),
      data: records,
    });

  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal mengambil laporan", error: error.message });
  }
};