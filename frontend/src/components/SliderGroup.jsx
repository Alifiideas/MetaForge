function SliderGroup({
  titleMin, setTitleMin,
  titleMax, setTitleMax,
  keywordMin, setKeywordMin,
  keywordMax, setKeywordMax,
  descMin, setDescMin,
  descMax, setDescMax,
  enableDescription
}) {
  return (
    <div>
      <h3>Title</h3>
      <input type="range" value={titleMin} onChange={e => setTitleMin(+e.target.value)} />
      <input type="range" value={titleMax} onChange={e => setTitleMax(+e.target.value)} />

      <h3>Keywords</h3>
      <input type="range" value={keywordMin} onChange={e => setKeywordMin(+e.target.value)} />
      <input type="range" value={keywordMax} onChange={e => setKeywordMax(+e.target.value)} />

      {enableDescription && (
        <>
          <h3>Description</h3>
          <input type="range" value={descMin} onChange={e => setDescMin(+e.target.value)} />
          <input type="range" value={descMax} onChange={e => setDescMax(+e.target.value)} />
        </>
      )}
    </div>
  );
}

export default SliderGroup;
