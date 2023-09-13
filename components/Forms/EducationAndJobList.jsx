/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useFieldInput from "../../hooks/useFieldInput";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { theme, modules } from "quillOptions";

export default function EducationAndJobList({
  field1,
  field2,
  currentDataList,
  updateCurrentDataList,
  index,
}) {
  const [currentData, setCurrentData] = useState(currentDataList[index]);

  const field1_id = field1.toLowerCase();
  const field2_id = field2.toLowerCase();

  useEffect(() => {
    const newList = [...currentDataList];
    newList[index] = currentData;
    updateCurrentDataList(newList);
  }, [currentData, index]);

  const handleChange = (e) => {
    setCurrentData({
      ...currentData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <section className="form-editor__content">
      <div className="form-editor__content__grid--col-2">
        {useFieldInput({
          id: "start_date",
          label: "Startdatum",
          value: currentData?.start_date,
          onChange: handleChange,
        })}
        {useFieldInput({
          id: "end_date",
          label: "Enddatum",
          value: currentData?.end_date,
          onChange: handleChange,
        })}
      </div>
      <div className="form-editor__content__grid--col-2">
        {useFieldInput({
          id: field1_id,
          label: field1,
          value: currentData[field1_id],
          onChange: handleChange,
        })}
        {useFieldInput({
          id: "city",
          label: "Stadt",
          value: currentData?.city,
          onChange: handleChange,
        })}
      </div>
      {useFieldInput({
        id: field2_id,
        label: field2,
        value: currentData[field2_id],
        onChange: handleChange,
      })}
      <div className="form-editor__content__text-area">
        <div className="form-editor__content__input-label-flex">
          <label htmlFor="description">Beschreibung</label>
          <div id="description">
            <ReactQuill
              theme={theme}
              modules={modules}
              value={currentData.description}
              placeholder="Bitte fügen Sie hier Ihre Beschreibung des Eintrags hinzu..."
              onChange={(e) => {
                setCurrentData({ ...currentData, description: e });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
