import { useState } from "react";
import { uploadFiles, validateFiles } from "../api/upload.api";

/**
 * useUpload
 * Handles file validation, upload, progress & errors
 */
export default function useUpload() {
  const [files, setFiles] = useState([]);
  const [validatedFiles, setValidatedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false); // ✅ NEW
  const [error, setError] = useState(null);

  /* ================= FILE SELECTION ================= */

  const selectFiles = (fileList) => {
    const { validFiles, errors } = validateFiles(fileList);

    if (errors.length) {
      setError(errors.join("\n"));
      return false;
    }

    setFiles(validFiles.map((f) => f.file));
    setValidatedFiles(validFiles);

    setProgress(0);
    setUploaded(false);
    setError(null);

    return true;
  };

  /* ================= UPLOAD ================= */

  const upload = async ({ apiKey }) => {
    if (!validatedFiles.length) {
      setError("No files selected");
      return false;
    }

    try {
      setUploading(true);
      setProgress(1);
      setError(null);

      await uploadFiles({
        files: validatedFiles,
        apiKey,
        onProgress: setProgress,
      });

      setProgress(100);      // ✅ KEEP 100
      setUploaded(true);     // ✅ MARK SUCCESS

      return true;
    } catch (err) {
      console.error(err);
      setError("Upload failed");
      return false;
    } finally {
      setUploading(false);
      // ❌ DO NOT RESET PROGRESS HERE
    }
  };

  /* ================= RESET ================= */

  const reset = () => {
    setFiles([]);
    setValidatedFiles([]);
    setProgress(0);
    setUploaded(false);
    setError(null);
    setUploading(false);
  };

  return {
    files,
    validatedFiles,

    progress,
    uploading,
    uploaded, // ✅ EXPOSE SUCCESS FLAG
    error,

    selectFiles,
    upload,
    reset,
  };
}

