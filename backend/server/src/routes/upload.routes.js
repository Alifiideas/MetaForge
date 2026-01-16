import express from "express";
import multer from "multer";
import { uploadController } from "../controllers/upload.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
});

router.post(
  "/",                 // ← IMPORTANT
  authMiddleware,
  upload.array("files"),
  uploadController
);

export default router; // ← MUST be default


