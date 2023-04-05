import { useEffect } from "react";
import Avatar from "./Avatar";
import NameAndTitle from "./NameAndTitle";
import PersonalInfo from "./PersonalInfo";
import Languages from "./Languages";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

export default function Elegant() {
  const resumeData = getInitialData();
  
  useEffect(() => {
    // Schriftarten einbetten
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Style-Regeln setzen
    const style = document.createElement("style");
    style.innerHTML = `
      .elegant {
        font-family: 'Fira Sans Extra Condensed', sans-serif;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="elegant print-container">
      <div className="person-and-contact">
        <Avatar avatar={resumeData.personal.avatar} />
        <NameAndTitle personal={resumeData.personal} />
        <PersonalInfo personal={resumeData.personal} />

        <Languages languages={resumeData.languages} />
        <Contact personal={resumeData.personal} />
      </div>
      <div className="education-and-job">
        <Education educations={resumeData.educations} />
        <Experience jobs={resumeData.jobs} />
      </div>
    </div>
  );
}
function getInitialData() {
  if (typeof window === "undefined") {
    return {};
  }

  const initalData = JSON.parse(window.localStorage.getItem("resumeData"));

  return initalData ?? {};
}
