import { useRef } from "react";
import "./UploadBox.css";

function UploadBox({
  onFilesSelected,
  onUpload,
  progress = 0,
  uploading = false,
  formats,
}) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    onFilesSelected(files); // ✅ STORE FILES
  };

  return (
    <div className="upload-box">
      <h2>Upload Files</h2>
      <div className="formats">{formats}</div>

      <label className="upload-area">
        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          onChange={handleChange}
        />

        <div className="upload-inner">
          <span className="upload-icon">📤</span>
          <span className="upload-text">
            Click to select files
          </span>
        </div>
      </label>

      {/* UPLOAD BUTTON */}
      <button
        className="btn primary"
        disabled={uploading}
        onClick={onUpload}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading..." : "Upload Files"}
      </button>

      {/* PROGRESS */}
      {progress > 0 && (
        <div className="upload-progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
          <span>{progress}%</span>
        </div>
      )}

      <small className="upload-note">
        Drag & drop or click to select files
      </small>
    </div>
  );
}

export default UploadBox;

