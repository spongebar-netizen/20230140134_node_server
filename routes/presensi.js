const express = require('express');
const router = express.Router();
const presensiController = require('../controllers/presensiController');
const { addUserData } = require('../middleware/permissionMiddleware');

// Middleware ini akan dijalankan untuk semua rute di file ini
// Menambahkan req.user ke setiap request
router.use(addUserData);

// Rute dari Praktikum 3 & 4
router.post('/check-in', presensiController.CheckIn);
router.post('/check-out', presensiController.CheckOut);

// Rute BARU dari Praktikum 5
// :id adalah parameter rute yang akan menangkap ID dari URL
router.delete('/:id', presensiController.deletePresensi);

module.exports = router;