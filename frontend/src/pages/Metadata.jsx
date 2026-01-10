import { useState } from "react";
import "./Metadata.css";

const PLATFORMS = [
  "Shutterstock",
  "Adobe Stock",
  "Vecteezy",
  "Depositphotos",
  "123RF",
  "YouTube",
  "TikTok",
  "VectorStock",
  "Freepik",
];

function Metadata() {
  // ====== STATES ======
  const [platform, setPlatform] = useState("");
  const [tokens] = useState(50); // FREE PLAN LOCKED
  const [descEnabled, setDescEnabled] = useState(false);

  const [titleRange, setTitleRange] = useState([7, 20]);
  const [keywordRange, setKeywordRange] = useState([45, 48]);
  const [descRange, setDescRange] = useState([10, 20]);

  const [files, setFiles] = useState([]);
  const [csvType, setCsvType] = useState("jpg");
  const [apiKey, setApiKey] = useState("");

  // ====== HANDLERS ======
  const handleFileUpload = (e) => {
    setFiles([...e.target.files]);
  };

  const handlePlatformSelect = (p) => {
    setPlatform(p);

    // Auto description ON only for platforms that use it
    const descPlatforms = ["YouTube"];
    setDescEnabled(descPlatforms.includes(p));
  };

  return (
    <div className="metadata-page">
      {/* ========== SIDEBAR ========== */}
      <aside className="sidebar">
        <h3>Metadata Customization</h3>

        <Slider
          label="Min Title Words"
          min={3}
          max={20}
          value={titleRange[0]}
          disabled
        />

        <Slider
          label="Max Title Words"
          min={5}
          max={30}
          value={titleRange[1]}
          disabled
        />

        <Slider
          label="Min Keywords"
          min={10}
          max={50}
          value={keywordRange[0]}
          disabled
        />

        <Slider
          label="Max Keywords"
          min={20}
          max={60}
          value={keywordRange[1]}
          disabled
        />

        <div className="toggle-row">
          <span>Description</span>
          <input
            type="checkbox"
            checked={descEnabled}
            disabled
            readOnly
          />
        </div>

        <div className="api-key">
          <label>API Key</label>
          <input
            type="password"
            placeholder="Connect your API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
      </aside>

      {/* ========== MAIN ========== */}
      <main className="main">
        {/* TOP BAR */}
        <div className="top-bar">
          <div className="platforms">
            <span>PLATFORMS:</span>
            {PLATFORMS.map((p) => (
              <button
                key={p}
                className={platform === p ? "active" : ""}
                onClick={() => handlePlatformSelect(p)}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="tokens">
            🔋 Tokens: <strong>{tokens}</strong> (Free Plan)
          </div>
        </div>

        {/* UPLOAD CARD */}
        <div className="upload-card">
          <h2>Choose Files</h2>
          <p>JPG / JPEG · PNG · SVG · Videos</p>

          <input
            type="file"
            multiple
            onChange={handleFileUpload}
          />

          <small>
            Unlimited metadata • CSV export • Secure processing
          </small>
        </div>

        {/* FILE PREVIEW */}
        {files.length > 0 && (
          <div className="file-list">
            {files.map((file, i) => (
              <div key={i} className="file-item">
                {file.name}
              </div>
            ))}
          </div>
        )}

        {/* ACTIONS */}
        <div className="actions">
          <button className="btn process">Process</button>

          <div className="export">
            <select
              value={csvType}
              onChange={(e) => setCsvType(e.target.value)}
            >
              <option value="jpg">JPG CSV</option>
              <option value="eps">EPS CSV</option>
            </select>

            <button className="btn download">
              Download CSV
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// ====== REUSABLE SLIDER ======
const Slider = ({ label, min, max, value, disabled }) => (
  <div className="slider">
    <label>{label}</label>
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      disabled={disabled}
    />
    <span>{value}</span>
  </div>
);

export default Metadata;

