import "./PlatformSelector.css";

function formatLabel(platform) {
  return platform.replace(/_/g, " ").toUpperCase();
}

function PlatformSelector({ platforms = [], value, onChange }) {
  return (
    <div
      className="platform-selector"
      role="tablist"
      aria-label="Select platform"
    >
      {platforms.map((platform) => {
        const isActive = value === platform;

        return (
          <button
            key={platform}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`platform-btn ${isActive ? "active" : ""}`}
            onClick={() => onChange(platform)}
          >
            <span className="platform-label">
              {formatLabel(platform)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PlatformSelector;
