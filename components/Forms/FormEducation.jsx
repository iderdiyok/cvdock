/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEducations } from "../../store";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import EducationAndJobList from "@/components/Forms/EducationAndJobList";
import NextStepButton from "../NextStepButton";

export default function EducationForm({ past }) {
  const title = "Bildung und Qualifikationen";
  const router = useRouter();
  const dispatch = useDispatch();

  // localStorage-Zustand für Bildungsdaten
  const storedEducationData = JSON.parse(localStorage.getItem("educationData"));
  // Redux-Zustand für Bildungsdaten
  const educationData = useSelector((state) => state.data.educations);

  // Wenn Local Storage-Daten vorhanden sind, setzen Sie den Redux-Zustand
  useEffect(() => {
    if (storedEducationData) {
      dispatch(updateEducations(storedEducationData));
    }
  }, []);

  const handleEducationRemove = (index) => {
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    dispatch(updateEducations(updatedEducationData));
  };

  const handleEducationAdd = () => {
    const updatedEducationData = [...educationData, {}];
    dispatch(updateEducations(updatedEducationData));
  };

  const handleSubmit = (e, past = false) => {
    e.preventDefault();
    localStorage.setItem("educationData", JSON.stringify(educationData));
    router.push({
      pathname: "/builder/job",
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
        <div className="educations">
          {educationData.map((singleEducation, index) => (
            <div className="education" key={index}>
              <EducationAndJobList
                field1="Qualifikation"
                field2="Institut"
                currentDataList={educationData}
                updateCurrentDataList={(newList) => dispatch(updateEducations(newList))}
                index={index}
              />
              {educationData.length !== 1 && (
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

              {educationData.length - 1 === index &&
                educationData.length < 4 && (
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
      <NextStepButton handleSubmit={handleSubmit} text="Weiter" icon="fa6-solid:arrow-right"/>
    </div>
  );
}
