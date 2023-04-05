import { useState, useEffect } from "react";
const skillsLevels = [
    { value: "0", option: "Nicht anzeigen" },
    { value: "25", option: "Anfänger" },
    { value: "50", option: "Qualifiziert" },
    { value: "75", option: "Erfahren" },
    { value: "100", option: "Experte" },
];
export default function SkillList({index, skillList, setSkillList, singleSkillData}){
    const [currentData, updateData] = useState({});

    useEffect(() => updateData(singleSkillData), [singleSkillData]);
    useEffect(() => {
        const newList = [...skillList];
        newList[index] = currentData;
        setSkillList(newList);
      }, [currentData, index, setSkillList, skillList]);

      const handleChange = (e) => {
        console.log(e.currentTarget.value);
        updateData({
          ...currentData,
          [e.currentTarget.id]:  e.currentTarget.value,
        });
      };
    return(
        <section className="form-editor__content">
            <div className="form-editor__content__skills">
                <div className="form-editor__content__grid--col-2">
                    <div className="form-editor__content__input-label-flex">
                        <label htmlFor="start-date">Skill</label>
                        <input 
                            type="text" 
                            id="skill_name"
                            value={currentData?.skill_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-editor__content__input-label-flex">
                        <label htmlFor="level">Level</label>
                        <select 
                            className="form-select-custom" 
                            id="level" 
                            value={currentData?.level}
                            onChange={handleChange} 
                        >
                        {skillsLevels.map(({ value, option }) => (
                            <option key={value} value={value}>
                                {option}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
            </div>
        </section> 
    )
}