import "./Loader.css";

function Loader({
  size = "md",          // sm | md | lg
  text = "Processing...",
  overlay = false,      // full screen overlay
  glow = false,         // glowing spinner
  state = "loading",    // loading | success | error
}) {
  const sizeClass =
    size === "sm"
      ? "loader-sm"
      : size === "lg"
      ? "loader-lg"
      : "";

  const stateClass =
    state === "success"
      ? "loader-success"
      : state === "error"
      ? "loader-error"
      : "";

  const content = (
    <div className={`loader-wrapper ${sizeClass} ${stateClass}`}>
      <div
        className={`loader-spinner ${glow ? "glow" : ""}`}
      />
      {text && (
        <span className="loader-text loader-dots">
          {text}
        </span>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="loader-overlay">
        <div className="loader-card">{content}</div>
      </div>
    );
  }

  return content;
}

export default Loader;

