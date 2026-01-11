import express from "express";
import {
  generateMetadataController,
} from "../controllers/metadata.controller.js";

const router = express.Router();

/**
 * POST /api/metadata/generate
 * Body:
 * {
 *   files: [],
 *   platform: string,
 *   limits: {},
 *   format: string
 * }
 */
router.post(
  "/generate",
  generateMetadataController
);

export default router;
