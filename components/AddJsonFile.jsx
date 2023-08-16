import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import {
  updatePersonal,
  updateEducations,
  updateJobs,
  updateSkills,
  updateLanguages,
  updateHobbys,
} from "../store";

export default function AddJsonFile() {
  const dispatch = useDispatch();

  const importJsonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleDataUpdate = (action, data, storageKey) => {
    dispatch(action(data));
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  const addJsonData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);

      handleDataUpdate(updatePersonal, { ...data.personal, avatar: "" }, "personalData");
      handleDataUpdate(updateEducations, data.educations, "educationData");
      handleDataUpdate(updateJobs, data.jobs, "jobData");
      handleDataUpdate(updateSkills, data.skills, "skillsData");
      handleDataUpdate(updateLanguages, data.languages, "languageData");
      handleDataUpdate(updateHobbys, data.hobbys, "hobbysData");
    };
    reader.readAsText(file);
  };

  return (
    <div
      className="button-box container"
      style={{ width: "30%", margin: "0 auto" }}
      onClick={importJsonClick}
    >
      <div
        className="button-box__link"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Icon icon="mdi:code-json" style={{ width: "32px", height: "32px" }} />
        <span>JSON-Data importieren</span>
        <input
          id="fileInput"
          type="file"
          accept=".json"
          onChange={addJsonData}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
