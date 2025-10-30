
### 1. Endpoint Update Data Presensi (Berhasil)
Pengujian PUT /api/presensi/:id dengan mengirimkan data nama yang baru. Server merespon dengan 200 OK dan data yang telah diperbarui.

![Update Berhasil](./ss/ukaryawan.png)

---

### 2. Endpoint Update (Gagal Validasi Format Tanggal)
Pengujian PUT /api/presensi/:id dengan mengirimkan data checkIn yang formatnya tidak valid. express-validator berhasil menangkap error dan mengembalikan 400 Bad Request.

![Update Gagal Validasi](./ss/gagalvalidasi.png)

---

### 3. Endpoint Delete Data Presensi
Pengujian DELETE /api/presensi/:id untuk menghapus data. Server merespon dengan 204 No Content yang menandakan data berhasil dihapus.

![Delete Berhasil](./ss/dkaryawan.png)

---

### 4. Endpoint Search Laporan (Berdasarkan Nama)
Pengujian GET /api/reports/daily?nama=... (sebagai admin). Server berhasil memfilter dan mengembalikan data yang namanya sesuai.

![Search Berdasarkan Nama](./ss/laporanberdasarkannama.png)

---

### 5. Endpoint Search Laporan (Berdasarkan Tanggal)
Pengujian GET /api/reports/daily?tanggalMulai=... (sebagai admin). Server berhasil memfilter dan mengembalikan data presensi yang sesuai dengan rentang tanggal.

![Search Berdasarkan Tanggal](./ss/laporanberdasarkantanggal.png)