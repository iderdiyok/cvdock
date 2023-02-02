import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

import EducationAndJobList from "@/components/Forms/EducationAndJobList";

export default function EducationForm() {
  const title = "Bildung und Qualifikationen";

  const router = useRouter();

  const [educationList, setEducationList] = useState(getInitialEducationData());

  const handleEducationRemove = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  const handleEducationAdd = () => {
    setEducationList([...educationList, { education: [] }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("educationData", JSON.stringify([...educationList]));
    router.push("/builder/job");
  };
  return (
    <>
      <div className="form-editor">
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
                  <div className="form-editor__content__function-buttons--flex-end">
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
      </div>
      <div className="next-step">
        <div
          className="button-box"
          style={{ color: "white" }}
          onClick={handleSubmit}
        >
          Weiter
          <Icon icon="fa6-solid:angle-right" />
        </div>
      </div>
    </>
  );
}

function getInitialEducationData() {
  if (typeof window === "undefined") {
    return [{ education: [] }];
  }

  const initalEducationData = JSON.parse(
    window.localStorage.getItem("educationData")
  );

  return initalEducationData ?? [{ education: [] }];
}
