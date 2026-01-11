import { csvTemplates } from "../utils/csvTemplates.js";

/**
 * Convert metadata to CSV
 */
export const buildCsv = ({ platform, format, metadata }) => {
  const template = csvTemplates[platform];

  if (!template) {
    throw new Error("Unsupported platform");
  }

  const headers = template.headers[format];
  if (!headers) {
    throw new Error("Unsupported CSV format");
  }

  const rows = metadata.map((item) =>
    headers.map((key) => escapeCSV(item[key]))
  );

  return [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");
};

/* ================= UTIL ================= */

const escapeCSV = (value = "") => {
  const string = String(value).replace(/"/g, '""');
  return `"${string}"`;
};
