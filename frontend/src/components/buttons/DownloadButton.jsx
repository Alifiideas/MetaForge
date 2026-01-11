import "./DownloadButton.css";

function DownloadButton({
  onClick,
  disabled = false,
  label = "Download CSV",
  format = "CSV",
}) {
  return (
    <button
      type="button"
      className={`download-btn ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      title={
        disabled
          ? "Generate metadata to enable download"
          : `Download ${format} file`
      }
    >
      <span className="download-icon">⬇️</span>
      <span className="download-label">{label}</span>
    </button>
  );
}

export default DownloadButton;
