const express = require('express');
const router = express.Router();
const presensiController = require('../controllers/presensiController');
const { addUserData } = require('../middleware/permissionMiddleware');
const { body } = require('express-validator'); // <-- 1. IMPOR body

// Middleware ini akan dijalankan untuk semua rute di file ini
router.use(addUserData);

// Rute dari Praktikum 3 & 4
router.post('/check-in', presensiController.CheckIn);
router.post('/check-out', presensiController.CheckOut);

// Rute BARU dari Praktikum 5 (Langkah 2)
// 2. SISIPKAN ATURAN VALIDASI DI SINI
router.put(
  '/:id',
  [
    // Aturan: field 'checkIn' opsional, TAPI jika ada, harus format tanggal ISO8601
    body('checkIn')
      .optional()
      .isISO8601()
      .toDate()
      .withMessage('Format tanggal checkIn tidak valid (harus ISO8601, cth: 2025-10-22T17:00:00)'),
    // Aturan: field 'checkOut' opsional, TAPI jika ada, harus format tanggal ISO8601
    body('checkOut')
      .optional()
      .isISO8601()
      .toDate()
      .withMessage('Format tanggal checkOut tidak valid (harus ISO8601, cth: 2025-10-22T17:00:00)'),
  ],
  presensiController.updatePresensi // 3. Jika lolos, baru jalankan controller
);

// Rute dari Praktikum 5 (Langkah 1)
router.delete('/:id', presensiController.deletePresensi);

module.exports = router;