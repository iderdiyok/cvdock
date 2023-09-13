/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useFieldInput from "../../hooks/useFieldInput";

const languagesLevels = [
  { value: "0", option: "Nicht anzeigen" },
  { value: "20", option: "Grundstufe" },
  { value: "40", option: "Mittleres Niveau" },
  { value: "60", option: "Fortgeschrittenes Niveau" },
  { value: "80", option: "Professionelles Niveau" },
  { value: "100", option: "Muttersprache" },
];

export default function LanguageList({
  index,
  languageList,
  setLanguageList,
  singleLanguageData,
}) {
  const [currentData, updateData] = useState({});

  useEffect(() => updateData(singleLanguageData), []);
  useEffect(() => {
    const newList = [...languageList];
    newList[index] = currentData;
    setLanguageList(newList);
  }, [currentData, index]);

  const handleChange = (e) => {
    updateData({
      ...currentData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <section className="form-editor__content">
      <div className="form-editor__content__languages">
        <div className="form-editor__content__grid--col-2">
          {useFieldInput({
            id: "language_name",
            label: "Sprache",
            value: currentData?.language_name,
            onChange: handleChange,
          })}
          <div className="form-editor__content__input-label-flex">
            <label htmlFor="level">Level</label>
            <select
              className="form-select-custom"
              id="level"
              value={currentData?.level}
              onChange={handleChange}
            >
              {languagesLevels.map(({ value, option }) => (
                <option value={value} key={value}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
