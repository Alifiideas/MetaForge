import OpenAI from "openai";
import { buildPrompt } from "../utils/promptBuilder.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate metadata using AI
 */
export const generateMetadata = async ({
  files,
  platform,
  limits,
}) => {
  const prompt = buildPrompt({
    files,
    platform,
    limits,
  });

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content:
            "You are a professional stock media metadata generator.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const raw = response.choices[0].message.content;

    return parseAIResponse(raw);
  } catch (error) {
    console.error("AI generation failed:", error);
    throw new Error("AI metadata generation failed");
  }
};

/* ================= PARSER ================= */

const parseAIResponse = (text) => {
  try {
    const parsed = JSON.parse(text);

    if (!Array.isArray(parsed)) {
      throw new Error("Invalid AI response format");
    }

    return parsed.map((item) => ({
      filename: item.filename || "",
      title: item.title || "",
      keywords: Array.isArray(item.keywords)
        ? item.keywords.join(", ")
        : "",
      description: item.description || "",
    }));
  } catch (error) {
    console.error("AI response parse error:", text);
    throw new Error("Invalid AI response");
  }
};
