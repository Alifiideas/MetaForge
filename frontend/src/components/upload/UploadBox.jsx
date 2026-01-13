import { useState } from "react";
import "./UploadBox.css";

function UploadBox({ onUpload, progress = 0, formats }) {
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const files = [...e.target.files];
    if (!files.length) return;

    setSuccess(false);          // reset message
    onUpload(files);            // send files up
    setSuccess(true);           // mark uploaded
  };

  return (
    <div className="upload-box">
      <h2>Upload Files</h2>
      <div className="formats">{formats}</div>

      <label className="upload-area">
        <input
          type="file"
          multiple
          hidden
          onChange={handleChange}
        />

        <div className="upload-inner">
          <span className="upload-icon">📤</span>
          <span className="upload-text">
            Click to upload files
          </span>
        </div>
      </label>

      {/* ✅ PROGRESS */}
      {progress > 0 && progress < 100 && (
        <div className="upload-progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
          <span>{progress}%</span>
        </div>
      )}

      {/* ✅ SUCCESS MESSAGE */}
      {success && progress === 100 && (
        <p
          style={{
            marginTop: 14,
            color: "#4cc9f0",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          ✅ Files uploaded successfully
        </p>
      )}

      <small className="upload-note">
        Drag & drop or click to select files
      </small>
    </div>
  );
}

export default UploadBox;

