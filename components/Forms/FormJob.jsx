import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

import FormSectionDetails from "@/components/Forms/FormSectionDetails";

const title = "Berufserfahrungen";

export default function FormJob() {
  const router = useRouter();

  const [jobList, setJobList] = useState(getInitialJobData());

  const handleJobRemove = (index) => {
    const list = [...jobList];
    list.splice(index, 1);
    setJobList(list);
  };

  const handleJobAdd = () => {
    setJobList([...jobList, { job: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("jobDataList", JSON.stringify(jobList));
    router.push("/builder/skills");
  };
  return (
    <>
      <div className="form-editor">
        <section className="form-editor__header">
          <h2>{title}</h2>
          <hr />
        </section>
        <div className="jobs">
          {jobList.map((singleJob, index) => (
            <div className="job" key={index}>
              <FormSectionDetails
                field1="Position"
                field2="Unternehmen"
                index={index}
                currentDataList={jobList}
                updateCurrentDataList={setJobList}
                singleData={singleJob}
              />
              {jobList.length !== 1 && (
                <>
                  <div className="form-editor__content__function-buttons--flex-end">
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
      </div>
      <div className="next-step">
        <div
          className="button-box"
          onClick={handleSubmit}
          style={{ color: "white" }}
        >
          {/* <Link className="button-box__link" href="/builder/skills"> */}
          Weiter
          <Icon icon="fa6-solid:angle-right" />
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

function getInitialJobData() {
  if (typeof window === "undefined") {
    return [{ job: [] }];
  }

  const initalJobData = JSON.parse(window.localStorage.getItem("jobDataList"));

  return initalJobData ?? [{ job: [] }];
}
