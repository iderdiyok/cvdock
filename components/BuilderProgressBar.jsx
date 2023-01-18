import { Icon } from "@iconify/react";
import Link from "next/link";

export default function BuilderProgressBar({
  width,
  education = false,
  job = false,
  skills = false,
}) {
  const cssClassesEducation = `progress-bar__icon ${
    education ? "progress-bar__icon--active" : ""
  }`;
  const cssClassesJob = `progress-bar__icon ${
    job ? "progress-bar__icon--active" : ""
  }`;
  const cssClassesSkills = `progress-bar__icon ${
    skills ? "progress-bar__icon--active" : ""
  }`;

  return (
    <div className="progress-bar">
      <div className="progress-bar__inner">
        <div className="progress-bar__bar">
          <div className="progress-bar__filler" style={{ width }}></div>
        </div>
        <div className="progress-bar__buttons">
          <Link
            href="/builder/personal-info"
            className="progress-bar__button progress-bar__button--personal "
            disabled=""
          >
            <div className="progress-bar__icon">
              <Icon
                icon="fa6-solid:user-pen"
                className="progress-bar__icon progress-bar__icon--active"
              />
            </div>
            <div className="progress-bar__label">Personal</div>
          </Link>
          <Link
            href={education ? "/builder/education" : "#"}
            className="progress-bar__button progress-bar__button--education"
            disabled={!education}
          >
            <div className="progress-bar__icon ">
              <Icon
                icon="fa6-solid:graduation-cap"
                className={cssClassesEducation}
              />
            </div>
            <div className="progress-bar__label">Bildung</div>
          </Link>
          <Link
            href={job ? "/builder/job" : "#"}
            className="progress-bar__button progress-bar__button--job"
            disabled={!job}
          >
            <div className="progress-bar__icon">
              <Icon icon="fa6-solid:user-tie" className={cssClassesJob} />
            </div>
            <div className="progress-bar__label">Beruf</div>
          </Link>
          <Link
            href={skills ? "/builder/skills" : "#"}
            className="progress-bar__button progress-bar__button--skills"
            disabled={!skills}
          >
            <div className="progress-bar__icon">
              <Icon icon="fa6-solid:list" className={cssClassesSkills} />
            </div>
            <div className="progress-bar__label">Skills</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
