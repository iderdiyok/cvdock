import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { useToggle } from "@/hooks/useToggle";

import FormSectionSkills from "@/components/Forms/FormSectionSkills";
import FormSectionLanguages from "@/components/Forms/FormSectionLanguages";
import FormSectionHobbys from "@/components/Forms/FormSectionHobbys";

export default function FormSkills(){
    const title = "Skills, Sprachen und Hobbys";

    const [skillsVisible, toggleSkillsVisible] = useToggle(false);
    const [languagesVisible, toggleLanguagesVisible] = useToggle(false);
    const [hobbysVisible, toggleHobbysVisible] = useToggle(false);

    const [skillList, setSkillList] = useState([{ skill: "" }]);
    const [languageList, setLanguageList] = useState([{ language: "" }]);

    const handleSkillRemove = (index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
    };

    const handleSkillAdd = () => {
    setSkillList([...skillList, { skill: "" }]);
    };

    const handleLanguageRemove = (index) => {
    const list = [...languageList];
    list.splice(index, 1);
    setLanguageList(list);
    };

    const handleLanguageAdd = () => {
    setLanguageList([...languageList, { language: "" }]);
    };

    const angleUpIcon = <Icon icon="fa6-solid:angle-up" />;
    const angleDownIcon = <Icon icon="fa6-solid:angle-down" />;

    return(
    <>
    <div className="form-editor">
        <section className="form-editor__header">
          <h2>{title}</h2>
          <hr />
        </section>
        <div className="skills">
          <h3 onClick={toggleSkillsVisible}>
            Skills {skillsVisible ? angleUpIcon : angleDownIcon}
          </h3>
          {skillsVisible && (
            <div className="languages-list">
              {skillList.map((singleSkill, index) => (
                <div className="skill" key={index}>
                  <FormSectionSkills />
                  {skillList.length !== 1 && (
                    <>
                      <div className="form-editor__content__function-buttons--flex-end">
                        <button
                          onClick={handleSkillRemove}
                          id="remove-button"
                          className="remove-button"
                        >
                          <Icon icon="fa6-solid:trash" />
                          <span>Löschen</span>
                        </button>
                      </div>
                      <hr />
                    </>
                  )}
                  {skillList.length - 1 === index && (
                    <div className="form-editor__content__function-buttons--w-100">
                      <button
                        className="add-new-item-button"
                        onClick={handleSkillAdd}
                      >
                        <Icon icon="fa6-solid:square-plus" />
                        <span>Weitere Skills hinzufügen</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="languages">
          <h3 onClick={toggleLanguagesVisible}>
            Sprachen {languagesVisible ? angleUpIcon : angleDownIcon}
          </h3>
          {languagesVisible && (
            <div className="languages-list">
              {languageList.map((singleLanguage, index) => (
                <div className="language" key={index}>
                  <FormSectionLanguages />
                  {languageList.length !== 1 && (
                    <>
                      <div className="form-editor__content__function-buttons--flex-end">
                        <button
                          onClick={handleLanguageRemove}
                          id="remove-button"
                          className="remove-button"
                        >
                          <Icon icon="fa6-solid:trash" />
                          <span>Löschen</span>
                        </button>
                      </div>
                      <hr />
                    </>
                  )}
                  {languageList.length - 1 === index &&
                    languageList.length < 4 && (
                      <div className="form-editor__content__function-buttons--w-100">
                        <button
                          className="add-new-item-button"
                          onClick={handleLanguageAdd}
                        >
                          <Icon icon="fa6-solid:square-plus" />
                          <span>Weitere Sprache hinzufügen</span>
                        </button>
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hobbys">
          <h3 onClick={toggleHobbysVisible}>
            Hobbys {hobbysVisible ? angleUpIcon : angleDownIcon}
          </h3>
          {hobbysVisible && <FormSectionHobbys />}
        </div>
      </div>
      <div className="next-step">
        <div className="button-box">
          <Link className="button-box__link" href="/builder/preview">
            Vorschau
            <Icon icon="fa6-solid:eye" />
          </Link>
        </div>
      </div>
    </>
  )
}