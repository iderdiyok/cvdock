import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import EducationAndJobList from "@/components/Forms/EducationAndJobList";

export default function EducationForm({ past }) {
  const title = "Bildung und Qualifikationen";

  const router = useRouter();

  const resumeData = getInitialData();
  const [educationList, setEducationList] = useState(resumeData.educations);

  const handleEducationRemove = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  const handleEducationAdd = () => {
    setEducationList([...educationList, {}]);
  };

  const handleSubmit = (e, past = false) => {
    e.preventDefault();
    resumeData.educations = [...educationList];
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    router.push({
      pathname: "/builder/job",
      query: { past },
    });
  };
  return (
    <>
      <motion.div
        className="form-editor"
        initial={{ x: past ? "100vw" : "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <section className="form-editor__header">
          <h2>{title}</h2>
          <hr />
        </section>
        <div className="educations">
          {educationList.map((singleEducation, index) => (
            <div className="education" key={index}>
              <EducationAndJobList
                field1="Qualifikation"
                field2="Institut"
                currentDataList={educationList}
                updateCurrentDataList={setEducationList}
                index={index}
              />
              {educationList.length !== 1 && (
                <>
                  <div className="form-editor__content__function-buttons--end">
                    <button
                      onClick={() => handleEducationRemove(index)}
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

              {educationList.length - 1 === index &&
                educationList.length < 4 && (
                  <div className="form-editor__content__function-buttons--w-100">
                    <button
                      className="add-new-item-button"
                      onClick={() => handleEducationAdd()}
                    >
                      <Icon icon="fa6-solid:square-plus" />
                      <span>Weitere {title} hinzufügen</span>
                    </button>
                  </div>
                )}
            </div>
          ))}
        </div>
      </motion.div>
      <div className="next-step">
        <div
          className="button-box"
          style={{ color: "white" }}
          onClick={(e) => handleSubmit(e, true)}
        >
          Weiter
          <Icon icon="fa6-solid:arrow-right" style={{marginLeft: ".5em"}} />
        </div>
      </div>
    </>
  );
}

function getInitialData() {
  if (typeof window === "undefined") {
    return {};
  }

  const initalData = JSON.parse(window.localStorage.getItem("resumeData"));

  return initalData ?? {};
}
