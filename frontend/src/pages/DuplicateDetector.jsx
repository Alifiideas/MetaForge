import { useState } from "react";

const API_BASE = "http://localhost:5000"; // change later for VPS/domain

export default function DuplicateDetector() {
  const [files, setFiles] = useState([]);
  const [duplicates, setDuplicates] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle file select
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  // Upload images
  const uploadImages = async () => {
    if (!files.length) return alert("Select images first");

    const formData = new FormData();
    for (let f of files) {
      formData.append("images", f);
    }

    setLoading(true);
    await fetch(`${API_BASE}/upload-images`, {
      method: "POST",
      body: formData,
    });
    setLoading(false);
    alert("Images uploaded");
  };

  // Detect duplicates
  const detectDuplicates = async () => {
    setLoading(true);
    const res = await fetch(`${API_BASE}/detect-duplicates`);
    const data = await res.json();
    setDuplicates(data);
    setSelected([]);
    setLoading(false);
  };

  // Toggle select
  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((f) => f !== name)
        : [...prev, name]
    );
  };

  // Delete selected
  const deleteSelected = async () => {
    if (!selected.length) return;

    await fetch(`${API_BASE}/delete-images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ files: selected }),
    });

    setDuplicates(duplicates.filter(d => !selected.includes(d.duplicate)));
    setSelected([]);
  };

  // Delete all duplicates
  const deleteAll = async () => {
    const all = duplicates.map(d => d.duplicate);
    if (!all.length) return;

    await fetch(`${API_BASE}/delete-images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ files: all }),
    });

    setDuplicates([]);
    setSelected([]);
  };

  return (
    <div className="page projects">
      <h1>Duplicate Image Detector</h1>
      <p className="subtitle">
        Upload your images and automatically detect duplicate JPG/PNG files.
      </p>

      {/* Upload */}
      <div className="project-card" style={{ marginBottom: 30 }}>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
        <br /><br />
        <button onClick={uploadImages}>Upload Images</button>
        <button
          onClick={detectDuplicates}
          style={{ marginLeft: 12 }}
        >
          Detect Duplicates
        </button>
      </div>

      {/* Results */}
      {loading && <p>Processing...</p>}

      {duplicates.length > 0 && (
        <div className="project-card">
          <h2 style={{ color: "#ff4d4f" }}>Duplicates Found</h2>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {duplicates.map((d, i) => (
              <li
                key={i}
                style={{
                  color: "#ff4d4f",
                  marginBottom: 10,
                  cursor: "pointer",
                }}
                onClick={() => toggleSelect(d.duplicate)}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(d.duplicate)}
                  readOnly
                />{" "}
                {d.duplicate} (duplicate of {d.original})
              </li>
            ))}
          </ul>

          <button onClick={deleteSelected}>
            Delete Selected
          </button>
          <button
            onClick={deleteAll}
            style={{ marginLeft: 12, background: "#ff4d4f" }}
          >
            Delete All Duplicates
          </button>
        </div>
      )}

      {duplicates.length === 0 && !loading && (
        <p>No duplicates detected yet.</p>
      )}
    </div>
  );
}
