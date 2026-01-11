/**
 * CSV Templates per Platform
 */

export const CSV_TEMPLATES = {
  shutterstock: {
    headers: ["Filename", "Title", "Keywords", "Description"],
    mapRow: ({ file, metadata }) => [
      file,
      metadata.title,
      metadata.keywords,
      metadata.description || "",
    ],
  },

  adobe_stock: {
    headers: ["Filename", "Title", "Keywords", "Category", "Description"],
    mapRow: ({ file, metadata }) => [
      file,
      metadata.title,
      metadata.keywords,
      metadata.category || "",
      metadata.description || "",
    ],
  },

  freepik: {
    headers: ["Filename", "Title", "Tags"],
    mapRow: ({ file, metadata }) => [
      file,
      metadata.title,
      metadata.keywords,
    ],
  },

  youtube: {
    headers: ["Title", "Description", "Tags"],
    mapRow: ({ metadata }) => [
      metadata.title,
      metadata.description || "",
      metadata.keywords,
    ],
  },

  tiktok: {
    headers: ["Description"],
    mapRow: ({ metadata }) => [
      metadata.description || "",
    ],
  },
};
