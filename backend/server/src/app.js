import express from "express";
import cors from "cors";
import morgan from "morgan";

import uploadRoutes from "./routes/upload.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ name: "Metaforge API", status: "running" });
});

// ✅ THIS MUST MATCH EXACTLY
app.use("/api/upload", uploadRoutes);

// ❌ DO NOT PLACE ANY app.use AFTER THIS 404
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
  });
});

export default app;

