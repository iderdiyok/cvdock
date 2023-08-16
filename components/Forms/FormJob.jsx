import { useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updateJobs } from "../../store";

import EducationAndJobList from "@/components/Forms/EducationAndJobList";
import NextStepButton from "../NextStepButton";

export default function FormJob({ past }) {
  const title = "Berufserfahrungen";
  const router = useRouter();
  const dispatch = useDispatch();

  // localStorage-Zustand für Jobsdaten
  const storedJobData = JSON.parse(localStorage.getItem("jobData"));
  // Redux-Zustand für Jobsdaten
  const jobData = useSelector((state) => state.data.jobs);

  // Wenn Local Storage-Daten vorhanden sind, setzen Sie den Redux-Zustand
  useEffect(() => {
    if (storedJobData) {
      dispatch(updateJobs(storedJobData));
    }
  }, []);
  

  const handleJobRemove = (index) => {
    const list = [...jobData];
    list.splice(index, 1);
    dispatch(updateJobs(list));
  };

  const handleJobAdd = () => {
    const updatedJobData = [...jobData, {}];
    dispatch(updateJobs(updatedJobData));
  };

  const handleSubmit = (e, past = false) => {
    e.preventDefault();
    localStorage.setItem("jobData", JSON.stringify(jobData));
    router.push({
      pathname: "/builder/skills",
      query: { past },
    });
  };
  return (
    <div className="container">
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
          {jobData.map((singleJob, index) => (
            <div className="job" key={index}>
              <EducationAndJobList
                field1="Position"
                field2="Unternehmen"
                currentDataList={jobData}
                updateCurrentDataList={(newList) => dispatch(updateJobs(newList))}
                index={index}
              />
              {jobData.length !== 1 && (
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
              {jobData.length - 1 === index && jobData.length < 4 && (
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
      <NextStepButton handleSubmit={handleSubmit} text="Weiter" icon="fa6-solid:arrow-right"/>
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
