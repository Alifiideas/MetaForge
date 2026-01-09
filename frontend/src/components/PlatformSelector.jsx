function PlatformSelector({ onSelect }) {
  return (
    <div>
      <button onClick={() => onSelect("shutterstock")}>Shutterstock</button>
      <button onClick={() => onSelect("adobe")}>Adobe Stock</button>
      <button onClick={() => onSelect("youtube")}>YouTube</button>
      <button onClick={() => onSelect("tiktok")}>TikTok</button>
    </div>
  );
}

export default PlatformSelector;
