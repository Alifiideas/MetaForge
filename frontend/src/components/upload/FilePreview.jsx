import { useEffect, useState } from "react";
import "./FilePreview.css";

function FilePreview({ files = [] }) {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    if (!files.length) {
      setPreviews([]);
      return;
    }

    const mapped = files.map((file, index) => {
      const type = getFileType(file);

      let src = null;

      if (file instanceof File) {
        src = URL.createObjectURL(file);
      } else if (file.path || file.url) {
        src = file.path || file.url;
      }

      return {
        id: file.filename || file.name || index,
        name: file.name || file.originalName || file.filename,
        size: file.size,
        type,
        src,
      };
    });

    setPreviews(mapped);

    return () => {
      mapped.forEach((p) => {
        if (p.src?.startsWith("blob:")) {
          URL.revokeObjectURL(p.src);
        }
      });
    };
  }, [files]);

  if (!previews.length) return null;

  return (
    <div className="file-preview">
      <h4>Uploaded Files</h4>

      <div className="file-grid">
        {previews.map((file) => (
          <div key={file.id} className="file-card">
            <div className="file-thumb">
              {file.type === "image" && file.src && (
                <img src={file.src} alt={file.name} />
              )}

              {file.type === "video" && file.src && (
                <video src={file.src} controls />
              )}

              {file.type === "file" && (
                <div className="file-icon">FILE</div>
              )}
            </div>

            <div className="file-info">
              <span className="file-name" title={file.name}>
                {file.name}
              </span>
              <span className="file-size">
                {formatSize(file.size)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* HELPERS */

const getFileType = (file) => {
  if (file?.type?.startsWith("image/")) return "image";
  if (file?.type?.startsWith("video/")) return "video";
  return "file";
};

const formatSize = (bytes) => {
  if (!bytes) return "";
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
};

export default FilePreview;

