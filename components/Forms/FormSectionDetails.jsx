import { useEffect, useState } from "react";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { theme, modules, formats } from "quillOptions";

export default function FormSection({
  field1,
  field2,
  currentDataList,
  updateCurrentDataList,
  index,
  singleData,
}) {

  const [currentData, updateData] = useState({});
  useEffect(() => updateData(singleData), []);

  const field1_id = field1.toLowerCase();
  const field2_id = field2.toLowerCase();

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
  });
  
  
  useEffect(() => {
    const newList = [...currentDataList];
    newList[index] = currentData;
    updateCurrentDataList(newList);
  }, [currentData, index]);

  
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        updateData({
          ...currentData,
          description: quill.root.innerHTML,
        });
      });
    }
  }, [quill, currentData]);

  useEffect(() => {
    if (quill && currentData.description) {
      try {
        const content = quill.clipboard.convert(currentData.description);
        quill.setContents(content);
      } catch (e) {
        console.error("Invalid format for description:", e);
      }
    }
  }, [quill, currentData.description]);


  const handleChange = (e) => {
    updateData({
      ...currentData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };


  return (
    <section className="form-editor__content">
      <div className="form-editor__content__grid--col-2">
        <div className="form-editor__content__input-label-flex">
          <label htmlFor="start_date">Startdatum</label>
          <input
            type="text"
            id="start_date"
            value={currentData?.start_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-editor__content__input-label-flex">
          <label htmlFor="end_date">Enddatum</label>
          <input
            type="text"
            id="end_date"
            value={currentData?.end_date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-editor__content__grid--col-2">
        <div className="form-editor__content__input-label-flex">
          <label htmlFor={field1_id}>{field1}</label>
          <input
            type="text"
            id={field1_id}
            value={currentData[field1_id]}
            onChange={handleChange}
          />
        </div>
        <div className="form-editor__content__input-label-flex">
          <label htmlFor="city">Stadt</label>
          <input
            type="text"
            id="city"
            value={currentData?.city}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-editor__content__input-label-flex">
        <label htmlFor={field2_id}>{field2}</label>
        <input
          type="text"
          id={field2_id}
          value={currentData[field2_id]}
          onChange={handleChange}
        />
      </div>
      <div className="form-editor__content__text-area">
        <div className="form-editor__content__input-label-flex">
          <label htmlFor="description">Beschreibung</label>
          <div style={{ width: "100%", height: 200 }} id="description">
            <div ref={quillRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
