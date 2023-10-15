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
  console.log(resumeData);
  const educationCount = resumeData.educations.length * 3;
  const jobCount = resumeData.jobs.some((job) =>
    job.hasOwnProperty("description")
  )
    ? resumeData.jobs.length * 6
    : resumeData.jobs.length * 3;
  const skillCount = resumeData.skills.length * 2;
  const totalEntries = educationCount + jobCount + skillCount;
  console.log({ educationCount });
  console.log({ jobCount });
  console.log({ skillCount });

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
  const entriesPerPage = 4;

  //#TODO: Das Slicen soll in Abhängikeit der Zeilen von maximal 32 erfolgen.
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

  console.log({ totalEntries });

  console.log({ pageNum });
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
            {totalEntries > 29 ? (
              <>
                <Education educations={educationEntries} />
                <Experience jobs={jobEntries} />

                {pageNum === 2 && <Skills skills={resumeData.skills} />}
              </>
            ) : (
              <>
                <Education educations={educationEntries} />
                <Experience jobs={jobEntries} />

                {pageNum === 1 && <Skills skills={resumeData.skills} />}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
