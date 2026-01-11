/**
 * Metadata Job
 * Handles metadata generation in background
 * Can be connected to BullMQ / Redis later
 */

import { generateMetadata } from "../services/ai.service.js";
import { buildPrompt } from "../utils/promptBuilder.js";
import { deductTokens } from "../services/token.service.js";

export async function metadataJob({
  files,
  platform,
  settings,
  apiKey,
  userId = null,
}) {
  try {
    const results = [];

    for (const file of files) {
      // Build AI prompt
      const prompt = buildPrompt({
        filename: file.originalname,
        platform,
        settings,
      });

      // Generate metadata from AI
      const metadata = await generateMetadata({
        prompt,
        apiKey,
      });

      results.push({
        file: file.originalname,
        metadata,
      });
    }

    // Deduct tokens after successful processing
    await deductTokens({
      userId,
      usage: settings.estimatedTokens,
    });

    return {
      success: true,
      results,
    };
  } catch (error) {
    console.error("Metadata Job Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}
