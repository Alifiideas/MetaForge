import { useState } from "react";
import PlatformSelector from "../components/PlatformSelector";
import SliderGroup from "../components/SliderGroup";

const PLATFORM_RULES = {
  shutterstock: { description: false, keywords: 50 },
  adobe: { description: true, keywords: 49 },
  youtube: { description: true, keywords: 15 },
  tiktok: { description: false, keywords: 10 },
};

function Metadata() {
  const [platform, setPlatform] = useState(null);
  const [enableDescription, setEnableDescription] = useState(false);

  const [titleMin, setTitleMin] = useState(5);
  const [titleMax, setTitleMax] = useState(20);
  const [keywordMin, setKeywordMin] = useState(30);
  const [keywordMax, setKeywordMax] = useState(50);
  const [descMin, setDescMin] = useState(20);
  const [descMax, setDescMax] = useState(60);

  const selectPlatform = (p) => {
    setPlatform(p);
    setEnableDescription(PLATFORM_RULES[p].description);
    setKeywordMax(PLATFORM_RULES[p].keywords);
  };

  return (
    <section>
      <h1>Metadata Generator</h1>

      <PlatformSelector onSelect={selectPlatform} />

      <label>
        <input
          type="checkbox"
          checked={enableDescription}
          onChange={() => setEnableDescription(!enableDescription)}
        />
        Enable Description
      </label>

      <SliderGroup
        titleMin={titleMin}
        setTitleMin={setTitleMin}
        titleMax={titleMax}
        setTitleMax={setTitleMax}
        keywordMin={keywordMin}
        setKeywordMin={setKeywordMin}
        keywordMax={keywordMax}
        setKeywordMax={setKeywordMax}
        descMin={descMin}
        setDescMin={setDescMin}
        descMax={descMax}
        setDescMax={setDescMax}
        enableDescription={enableDescription}
      />
    </section>
  );
}

export default Metadata;
