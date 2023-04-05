import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export default function addJsonFile() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    
    const addJsonData = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = JSON.parse(e.target.result);
          const updatedResumeData = {
            ...data,
            personal: { ...data.personal, avatar: "" },
          };
    
          localStorage.setItem("resumeData", JSON.stringify(updatedResumeData));
          router.reload(window.location.pathname)
        };
        reader.readAsText(file);
      };
    
      const importJsonClick = () => {
        document.getElementById("fileInput").click();
      };
  return (
    <div className="button-box" style={{ margin: "0 auto" }}>
      <div className="button-box__link" onClick={importJsonClick}>
      <Icon icon="mdi:code-json" style={{ width: "20%", height: "20%" }}/>
        JSON-Data importieren
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
