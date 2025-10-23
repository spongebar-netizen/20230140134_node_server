# Laporan Tugas Praktikum 4: Koneksi Database Sequelize

Berikut adalah hasil pengujian endpoint API Presensi setelah dihubungkan ke database MySQL menggunakan Sequelize.

### 1. Endpoint Presensi Check-in
![Hasil Check-in Berhasil](./SS/checkin2.png)

### 2. Endpoint Presensi Check-out
![Hasil Check-out Berhasil](./SS/checkout2.png)

### 3. Endpoint Laporan Harian (Sebagai Admin)
![Hasil Laporan Harian Berhasil](./SS/reportdailyadmin2.png)

---

## Skenario Error Handling

#### Check-in Gagal (Duplikat)
![Check-in Gagal Duplikat](./SS/sudahcheckin2.png)

#### Check-out Gagal (Belum Check-in)
![Check-out Gagal Belum Check-in](./SS/sudahcheckout2.png)

#### Laporan Gagal (Sebagai Karyawan)
![Laporan Gagal Forbidden](./SS/reportdailykaryawan2.png)

---

### 4. Tampilan Database Setelah Presensi
(Screenshot database-mu akan diletakkan di sini, pastikan filenya ada di dalam folder SS juga)
![Tampilan Database](./SS/databasesetelahpresensi.png)