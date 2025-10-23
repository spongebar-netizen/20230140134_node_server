const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const PORT = 3001;

// Impor router untuk fitur baru
const presensiRoutes = require("./routes/presensi");
const reportRoutes = require("./routes/reports");

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Home Page for API Presensi");
});

// Gunakan router untuk fitur presensi dan laporan
app.use("/api/presensi", presensiRoutes);
app.use("/api/reports", reportRoutes);

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});