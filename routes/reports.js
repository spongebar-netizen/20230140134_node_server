const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { addUserData, isAdmin } = require('../middleware/permissionMiddleware');

// Middleware dijalankan berurutan: tambahkan data user, lalu cek apakah admin
router.get('/daily', [addUserData, isAdmin], reportController.getDailyReport);

module.exports = router;