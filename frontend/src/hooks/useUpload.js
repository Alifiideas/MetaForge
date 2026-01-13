import { useState } from "react";
import axios from "axios";

export default function useUpload() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(null);

  const selectFiles = (selected) => {
    setFiles(selected);
    setUploaded(false); // reset when new files selected
    setProgress(0);
    setError(null);
  };

  const upload = async ({ apiKey }) => {
    if (!files.length) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      await axios.post("/api/upload", formData, {
        headers: {
          "x-api-key": apiKey, // ✅ MATCHES BACKEND
        },
        onUploadProgress: (e) => {
          const percent = Math.round(
            (e.loaded * 100) / e.total
          );
          setProgress(percent);
        },
      });

      setUploaded(true); // ✅ PROCESS BUTTON ENABLES
    } catch (err) {
      console.error(err);
      setError("Upload failed");
      setUploaded(false);
    } finally {
      setUploading(false);
    }
  };

  return {
    files,
    progress,
    uploading,
    uploaded,
    error,
    selectFiles,
    upload,
  };
}

