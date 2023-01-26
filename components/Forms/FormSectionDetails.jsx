import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { theme, modules } from "quillOptions";

export default function FormSection({
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
          <div id="description">
            <ReactQuill 
              theme={theme}
              modules={modules}
              value={currentData.description}
              onChange={(e) => {setCurrentData({...currentData, description: e} )}} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
