/**
 * Prompt Builder
 * Creates optimized AI prompts for metadata generation
 */

export function buildPrompt({
  filename,
  platform,
  settings,
}) {
  const {
    title,
    keywords,
    description,
  } = settings;

  const lines = [];

  lines.push(
    `You are an expert stock media SEO specialist.`
  );

  lines.push(
    `Generate metadata for a file named "${filename}".`
  );

  lines.push(
    `Target platform: ${platform}.`
  );

  // ---------- TITLE ----------
  lines.push(
    `TITLE: Create a clear, descriptive title between ${title.min}-${title.max} words.`
  );

  // ---------- KEYWORDS ----------
  lines.push(
    `KEYWORDS: Generate ${keywords.min}-${keywords.max} relevant, non-repeating, comma-separated keywords.`
  );

  // ---------- DESCRIPTION ----------
  if (description.enabled) {
    lines.push(
      `DESCRIPTION: Write a concise SEO-friendly description between ${description.min}-${description.max} words.`
    );
  } else {
    lines.push(
      `DESCRIPTION: Do not generate a description.`
    );
  }

  // ---------- FORMAT RULES ----------
  lines.push(
    `Rules:`
  );
  lines.push(
    `- No emojis`
  );
  lines.push(
    `- No hashtags`
  );
  lines.push(
    `- No quotation marks`
  );
  lines.push(
    `- Output must be plain text`
  );

  lines.push(
    `Return the result in the following format:`
  );

  lines.push(`
Title:
<text>

Keywords:
<comma separated>

Description:
<text or empty>
  `);

  return lines.join("\n");
}
