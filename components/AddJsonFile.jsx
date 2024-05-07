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

// Function for importing JSON data for the Builder
export default function AddJsonFile() {
  const dispatch = useDispatch();

  // Function to open the file selection dialog when clicked
  const importJsonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleDataUpdate = (action, data, storageKey) => {
    dispatch(action(data));
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  // Read selected file and parse JSON data
  // Then store the data in Redux store and localStorage
  const addJsonData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        handleDataUpdate(updatePersonal, { ...data.personal, avatar: "" }, "personalData");
        handleDataUpdate(updateEducations, data.educations, "educationData");
        handleDataUpdate(updateJobs, data.jobs, "jobData");
        handleDataUpdate(updateSkills, data.skills, "skillsData");
        handleDataUpdate(updateLanguages, data.languages, "languageData");
        handleDataUpdate(updateHobbys, data.hobbys, "hobbysData");
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
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
