// 1. Ganti sumber data dari array ke model Sequelize
const { Presensi } = require("../models"); // 
const { format } = require("date-fns-tz"); // [cite: 173]
const timeZone = "Asia/Jakarta"; // [cite: 174]

exports.CheckIn = async (req, res) => { // [cite: 175]
  // 2. Gunakan try...catch untuk error handling
  try { // [cite: 177]
    const { id: userId, nama: userName } = req.user; // [cite: 178]
    const waktuSekarang = new Date(); // [cite: 179]

    // 3. Ubah cara mencari data menggunakan 'findOne' dari Sequelize
    const existingRecord = await Presensi.findOne({ // [cite: 181]
      where: { userId: userId, checkOut: null }, // [cite: 182]
    });

    if (existingRecord) { // [cite: 184]
      return res
        .status(400)
        .json({ message: "Anda sudah melakukan check-in hari ini." }); // [cite: 185-187]
    }

    // 4. Ubah cara membuat data baru menggunakan 'create' dari Sequelize
    const newRecord = await Presensi.create({ // 
      userId: userId, // [cite: 191]
      nama: userName, // [cite: 192]
      checkIn: waktuSekarang, // [cite: 193]
    });

    const formattedData = { // [cite: 195]
      userId: newRecord.userId, // [cite: 196]
      nama: newRecord.nama, // [cite: 197]
      checkIn: format(newRecord.checkIn, "yyyy-MM-dd HH:mm:ssXXX", { timeZone }), // [cite: 198]
      checkOut: null // [cite: 199]
    };

    res.status(201).json({ // [cite: 201]
      message: `Halo ${userName}, check-in Anda berhasil pada pukul ${format(
        waktuSekarang,
        "HH:mm:ss",
        { timeZone }
      )} WIB`, // [cite: 202-206]
      data: formattedData, // [cite: 207]
    });
  } catch (error) { // [cite: 209]
    // Jika terjadi error di database
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message }); // [cite: 210]
  }
};

exports.CheckOut = async (req, res) => { // [cite: 213]
  // Gunakan try...catch
  try { // [cite: 215]
    const { id: userId, nama: userName } = req.user; // [cite: 216]
    const waktuSekarang = new Date(); // [cite: 217]

    // Cari data di database
    const recordToUpdate = await Presensi.findOne({ // [cite: 219]
      where: { userId: userId, checkOut: null }, // [cite: 220]
    });

    if (!recordToUpdate) { // [cite: 222]
      return res.status(404).json({ // [cite: 223]
        message: "Tidak ditemukan catatan check-in yang aktif untuk Anda.", // [cite: 224]
      });
    }

    // 5. Update dan simpan perubahan ke database
    recordToUpdate.checkOut = waktuSekarang; // [cite: 228]
    await recordToUpdate.save(); // 

    const formattedData = { // [cite: 230]
      userId: recordToUpdate.userId, // [cite: 231]
      nama: recordToUpdate.nama, // [cite: 232]
      checkIn: format(recordToUpdate.checkIn, "yyyy-MM-dd HH:mm:ssXXX", { timeZone }), // [cite: 233]
      checkOut: format(recordToUpdate.checkOut, "yyyy-MM-dd HH:mm:ssXXX", { timeZone }), // [cite: 234]
    };

    res.json({ // [cite: 236]
      message: `Selamat jalan ${userName}, check-out Anda berhasil pada pukul ${format(
        waktuSekarang,
        "HH:mm:ss",
        { timeZone }
      )} WIB`, // [cite: 237-241]
      data: formattedData, // [cite: 242]
    });
  } catch (error) { // [cite: 244]
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message }); // [cite: 245]
  }
};