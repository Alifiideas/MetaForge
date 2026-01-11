import express from "express";
import multer from "multer";
import {
  uploadController,
} from "../controllers/upload.controller.js";

const router = express.Router();

/* ================= MULTER CONFIG ================= */

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const unique =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${unique}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024, // 25MB
  },
});

/* ================= ROUTES ================= */

/**
 * POST /api/upload
 * multipart/form-data
 */
router.post(
  "/",
  upload.array("files", 100),
  uploadController
);

export default router;
