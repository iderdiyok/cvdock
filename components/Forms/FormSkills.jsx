import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills } from "../../store";
import { updateLanguages } from "../../store";
import { updateHobbys } from "../../store";

import FormSkills_SectionSkills from "@/components/Forms/FormSkills_SectionSkills";
import FormSkills_SectionLanguages from "@/components/Forms/FormSkills_SectionLanguages";
import FormSkills_SectionHobbys from "@/components/Forms/FormSkills_SectionHobbys";
import NextStepButton from "../NextStepButton";

export default function FormSkills({ past }) {
  const title = "Skills, Sprachen und Hobbys";
  const router = useRouter();
  const dispatch = useDispatch();

  // localStorage-Zustand für Skills-, Languages-, Hobbysdaten
  const storedSkillsData = JSON.parse(localStorage.getItem("skillsData"));
  const storedLanguageData = JSON.parse(localStorage.getItem("languageData"));
  const storedHobbysData = JSON.parse(localStorage.getItem("hobbysData"));
  
  // Redux-Zustand für Skills-, Languages-, Hobbysdaten
  const skillsData = useSelector((state) => state.data.skills);
  const languageData = useSelector((state) => state.data.languages);
  const hobbysData = useSelector((state) => state.data.hobbys);

  // Wenn Local Storage-Daten vorhanden sind, setzen Sie den Redux-Zustand
  useEffect(() => {
    if (storedSkillsData) {
      dispatch(updateSkills(storedSkillsData));
    }
    if (storedLanguageData) {
      dispatch(updateLanguages(storedLanguageData));
    }
    if (storedHobbysData) {
      dispatch(updateHobbys(storedHobbysData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("skillsData", JSON.stringify(skillsData));
    localStorage.setItem("languageData", JSON.stringify(languageData));
    localStorage.setItem("hobbysData", JSON.stringify(hobbysData));
    router.push("/builder/preview");
  };
  return (
    <div className="container">
      <motion.div
        className="form-editor"
        initial={{ x: past ? "100vw" : "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.4 }}
      >
        <section className="form-editor__header">
          <h2>{title}</h2>
          <hr />
        </section>
        <FormSkills_SectionSkills
          skillList={skillsData}
          setSkillList={(newSkills) => dispatch(updateSkills(newSkills))}
        />
        <FormSkills_SectionLanguages
          languageList={languageData}
          setLanguageList={(newLanguages) => dispatch(updateLanguages(newLanguages))}
        />
        <FormSkills_SectionHobbys
          hobbys={hobbysData}
          setHobbys={(newHobbys) => dispatch(updateHobbys(newHobbys))}
        />
      </motion.div>
      <NextStepButton
        handleSubmit={handleSubmit}
        text="Vorschau"
        icon="mdi:print-preview"
      />
    </div>
  );
}
