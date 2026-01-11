import dotenv from "dotenv";
import http from "http";
import app from "./app.js";

/* ======================================================
   ENV SETUP
====================================================== */

dotenv.config();

/* ======================================================
   CONFIG
====================================================== */

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

/* ======================================================
   SERVER
====================================================== */

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `🚀 Metaforge API running on port ${PORT} (${NODE_ENV})`
  );
});

/* ======================================================
   PROCESS SAFETY
====================================================== */

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("🔥 Unhandled Rejection:", err.message);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err.message);
  process.exit(1);
});

