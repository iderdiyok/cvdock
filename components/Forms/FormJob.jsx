import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import EducationAndJobList from "@/components/Forms/EducationAndJobList";

const title = "Berufserfahrungen";

export default function FormJob({ past }) {
  const router = useRouter();

  const resumeData = getInitialData();
  const [jobList, setJobList] = useState(resumeData.jobs);

  const handleJobRemove = (index) => {
    const list = [...jobList];
    list.splice(index, 1);
    setJobList(list);
  };

  const handleJobAdd = () => {
    setJobList([...jobList, {}]);
  };

  const handleSubmit = (e, past = false) => {
    e.preventDefault();
    resumeData.jobs = [...jobList];
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    router.push({
      pathname: "/builder/skills",
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
        <div className="jobs">
          {jobList.map((singleJob, index) => (
            <div className="job" key={index}>
              <EducationAndJobList
                field1="Position"
                field2="Unternehmen"
                currentDataList={jobList}
                updateCurrentDataList={setJobList}
                index={index}
              />
              {jobList.length !== 1 && (
                <>
                  <div className="form-editor__content__function-buttons--end">
                    <button
                      onClick={handleJobRemove}
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
              {jobList.length - 1 === index && jobList.length < 4 && (
                <div className="form-editor__content__function-buttons--w-100">
                  <button
                    className="add-new-item-button"
                    onClick={handleJobAdd}
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
          onClick={(e) => handleSubmit(e, true)}
          style={{ color: "white" }}
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
