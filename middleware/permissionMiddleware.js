// Middleware untuk menambahkan data user dummy ke setiap request
exports.addUserData = (req, res, next) => {
  console.log('Middleware: Menambahkan data user dummy...');
  req.user = {
    id: 123,
    nama: 'User Karyawan',
    // Ganti role ini menjadi 'admin' untuk menguji endpoint laporan nanti
    role: 'admin' 
  };
  next(); // Lanjutkan ke proses berikutnya
};

// Middleware untuk memeriksa apakah user adalah admin
exports.isAdmin = (req, res, next) => {
  // Cek data user yang sudah ditambahkan oleh middleware addUserData
  if (req.user && req.user.role === 'admin') {
    console.log('Middleware: Izin admin diberikan.');
    next(); // Lanjutkan karena user adalah admin
  } else {
    console.log('Middleware: Gagal! Pengguna bukan admin.');
    // Kirim respon error karena tidak punya akses
    return res.status(403).json({ message: 'Akses ditolak: Hanya untuk admin' });
  }
};