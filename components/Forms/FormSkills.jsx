import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

import FormSectionSkills from "@/components/Forms/FormSectionSkills";
import FormSectionLanguages from "@/components/Forms/FormSectionLanguages";
import FormSectionHobbys from "@/components/Forms/FormSectionHobbys";
const title = "Skills, Sprachen und Hobbys";

export default function FormSkills(){
  const router = useRouter();
  const [skillList, setSkillList] = useState(getInitialSkillData());
  const [languageList, setLanguageList] = useState(getInitialLanguageData());
  const [hobbys, setHobbys] = useState(getInitialHobbyData());

  // console.log(languageList);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("skillDataList", JSON.stringify([...skillList]));
    localStorage.setItem("languageDataList", JSON.stringify([...languageList]));
    localStorage.setItem("hobbyData", JSON.stringify(hobbys));
    router.push("/builder/preview");
  };
  return(
    <>
      <div className="form-editor">
        <section className="form-editor__header">
          <h2>{title}</h2>
          <hr />
        </section>
        <FormSectionSkills skillList={skillList} setSkillList={setSkillList}/>
        <FormSectionLanguages languageList={languageList} setLanguageList={setLanguageList}/>
        <FormSectionHobbys hobbys={hobbys} setHobbys={setHobbys}/>
      </div>
      <div className="next-step">
        <div className="button-box"
          style={{ color: "white" }}
          onClick={handleSubmit}
        >
          Vorschau
          <Icon icon="fa6-solid:eye" />
        </div>
      </div>
    </>
  )
}

function getInitialSkillData() {
  if (typeof window === "undefined") {
    return [{ skill: [] }];
  }

  const initalSkillData = JSON.parse(
    window.localStorage.getItem("skillDataList")
  );

  return initalSkillData ?? [{ skill: [] }];
}

function getInitialLanguageData() {
  if (typeof window === "undefined") {
    return [{ language: [] }];
  }

  const initalLanguageData = JSON.parse(
    window.localStorage.getItem("languageDataList")
  );

  return initalLanguageData ?? [{ language: [] }];
}
function getInitialHobbyData() {
  if (typeof window === "undefined") {
    return "";
  }

  const initalHoobyData = JSON.parse(
    window.localStorage.getItem("hobbyData")
  );

  return initalHoobyData ?? "";
}