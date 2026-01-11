import { buildCsv } from "../services/csv.service.js";

/**
 * POST /api/csv/export
 * Generates and returns CSV file
 */
export const exportCsv = async (req, res) => {
  try {
    const { platform, format, metadata } = req.body;

    /* ================= VALIDATION ================= */

    if (!platform) {
      return res.status(400).json({
        success: false,
        message: "Platform is required",
      });
    }

    if (!format) {
      return res.status(400).json({
        success: false,
        message: "CSV format is required",
      });
    }

    if (!Array.isArray(metadata) || metadata.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Metadata array is required",
      });
    }

    /* ================= CSV GENERATION ================= */

    const csv = await buildCsv({
      platform,
      format,
      metadata,
    });

    const filename = `${platform}_metadata_${Date.now()}.csv`;

    /* ================= RESPONSE ================= */

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename}"`
    );

    return res.status(200).send(csv);
  } catch (error) {
    console.error("CSV export failed:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate CSV",
    });
  }
};
