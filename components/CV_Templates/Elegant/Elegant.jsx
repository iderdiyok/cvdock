import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Avatar from "./Avatar";
import NameAndTitle from "./NameAndTitle";
import PersonalInfo from "./PersonalInfo";
import Languages from "./Languages";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function Elegant({ pageNum }) {
  console.log({ pageNum });
  // Redux store data
  const resumeData = useSelector((state) => state.data);

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

  // Anzahl der Einträge pro Seite
  const entriesPerPage = 2;

  // Bildungseinträge auf dieser Seite
  const educationEntries = resumeData?.educations?.slice(
    (pageNum - 1) * entriesPerPage,
    pageNum * entriesPerPage
  );

  // Berufseinträge auf dieser Seite
  const jobEntries = resumeData?.jobs?.slice(
    (pageNum - 1) * entriesPerPage,
    pageNum * entriesPerPage
  );

  return (
    <>
      {resumeData && (
        <div className="elegant print-container">
          <div className="person-and-contact">
            <Avatar avatar={resumeData.personal?.avatar} />
            <NameAndTitle personal={resumeData.personal} />
            <PersonalInfo personal={resumeData.personal} />

            <Languages languages={resumeData.languages} />
            <Contact personal={resumeData.personal} />
          </div>
          <div className="education-and-job">
            <Education educations={educationEntries} />
            <Experience jobs={jobEntries} />
            {pageNum === 2 && <Skills skills={resumeData.skills} />}
          </div>
        </div>
      )}
    </>
  );
}
