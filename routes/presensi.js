const express = require('express');
const router = express.Router();
const presensiController = require('../controllers/presensiController');
const { addUserData } = require('../middleware/permissionMiddleware');

// Middleware ini akan dijalankan untuk semua rute di file ini
router.use(addUserData);

// Rute dari Praktikum 3 & 4
router.post('/check-in', presensiController.CheckIn);
router.post('/check-out', presensiController.CheckOut);

// Rute BARU dari Praktikum 5 (Langkah 2)
router.put('/:id', presensiController.updatePresensi);

// Rute dari Praktikum 5 (Langkah 1)
router.delete('/:id', presensiController.deletePresensi);

module.exports = router;