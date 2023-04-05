import { useState } from "react";
import { useToggle } from "@/hooks/useToggle";
import { Icon } from "@iconify/react";
import LanguageList from "./LanguageList";
import { motion } from "framer-motion";
const angleUpIcon = <Icon icon="fa6-solid:angle-up" />;
const angleDownIcon = <Icon icon="fa6-solid:angle-down" />;

export default function FormSectionLanguages({
  languageList,
  setLanguageList,
}) {
  const [languagesVisible, toggleLanguagesVisible] = useToggle(false);

  const handleLanguageRemove = (index) => {
    const list = [...languageList];
    list.splice(index, 1);
    setLanguageList(list);
  };

  const handleLanguageAdd = () => {
    setLanguageList([...languageList, {}]);
  };

  return (
    <div className="languages">
      <h3 onClick={toggleLanguagesVisible}>
        Sprachen{" "}
        <span className="angleIcon">
          {languagesVisible ? angleUpIcon : angleDownIcon}
        </span>
      </h3>
      {languagesVisible && (
        <motion.div 
          className="languages-list"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition = {{ duration: .3 }}
        >
          {languageList.map((singleLanguage, index) => (
            <div className="language" key={index}>
              <LanguageList
                index={index}
                languageList={languageList}
                setLanguageList={setLanguageList}
                singleLanguageData={singleLanguage}
              />
              {languageList.length !== 1 && (
                <>
                  <div className="form-editor__content__function-buttons--end">
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
              {languageList.length - 1 === index && languageList.length < 4 && (
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
        </motion.div>
      )}
    </div>
  );
}
