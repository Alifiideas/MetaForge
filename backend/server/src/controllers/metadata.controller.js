import { buildPrompt } from "../utils/promptBuilder.js";
import { generateMetadataFromAI } from "../services/ai.service.js";
import { enforceLimits } from "../services/token.service.js";

/**
 * POST /api/metadata/generate
 * Generate metadata for uploaded files
 */
export const generateMetadata = async (req, res) => {
  try {
    const {
      files,
      platform,
      options,
      userPlan = "free",
      availableTokens = 0,
    } = req.body;

    /* ================= VALIDATION ================= */

    if (!files || !Array.isArray(files) || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files provided",
      });
    }

    if (!platform) {
      return res.status(400).json({
        success: false,
        message: "Platform is required",
      });
    }

    if (!options) {
      return res.status(400).json({
        success: false,
        message: "Metadata options missing",
      });
    }

    /* ================= LIMIT ENFORCEMENT ================= */

    const tokenUsage = enforceLimits({
      filesCount: files.length,
      options,
      plan: userPlan,
    });

    if (tokenUsage.requiredTokens > availableTokens) {
      return res.status(403).json({
        success: false,
        message: "Not enough tokens",
        required: tokenUsage.requiredTokens,
        available: availableTokens,
      });
    }

    /* ================= PROMPT BUILDING ================= */

    const prompt = buildPrompt({
      platform,
      options,
    });

    /* ================= AI GENERATION ================= */

    const metadata = await generateMetadataFromAI({
      prompt,
      files,
      options,
    });

    /* ================= RESPONSE ================= */

    return res.json({
      success: true,
      platform,
      usedTokens: tokenUsage.requiredTokens,
      metadata,
    });
  } catch (error) {
    console.error("Metadata generation failed:", error);

    return res.status(500).json({
      success: false,
      message: "Metadata generation failed",
    });
  }
};
