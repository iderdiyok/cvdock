/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import Image from "next/image";
import BarChart from "../BarChart";
import TimeNameCity from "./TimeNameCity";

export default function Elegant() {
  const resumeData = getInitialData();
  return (
    <div className="print-container">
      <div className="person-and-contact">
        <Image
          src={
            resumeData.personal.avatar.croppedImageUrl
              ? resumeData.personal.avatar.croppedImageUrl
              : "/img/no_image.jpg"
          }
          alt="avatar"
          width="250"
          height="250"
        />
        <div className="name-and-title">
          <h3>
            {resumeData.personal.first_name
              ? `${resumeData.personal.first_name} ${resumeData.personal.last_name}`
              : "John Doe"}
          </h3>
          <span>
            {resumeData
              ? resumeData.personal.qualification
              : "Informatiker, M.Sc"}
          </span>
        </div>
        <div className="person">
          <h4>PERSÖNLICHES</h4>
          <hr />
          <p>
            Geburtstag:{" "}
            {resumeData ? resumeData.personal.birthday : "xx.xx.xxxx"}
          </p>
          <p>
            Geburtsort:{" "}
            {resumeData ? resumeData.personal.place_of_birth : "Xandar"}
          </p>
          <p>
            Adresse:{" "}
            {resumeData
              ? `${resumeData.personal.street}, ${resumeData.personal.zip_code} ${resumeData.personal.city}/${resumeData.personal.country}`
              : "Woody Str. xx 40xxx Woods, Galaxy"}
          </p>
        </div>
        <div className="language">
          <h4>SPRACHEN</h4>
          <hr />
          {resumeData?.languages.map((language, index) => (
            <BarChart
              key={index}
              name={language.language_name}
              level={language.level}
            />
          ))}
        </div>
        <div className="contact">
          <h4>KONTAKT</h4>
          <hr />
          <div className="label">
            <Icon icon="fa6-solid:square-phone" style={{ fontSize: "24px" }} />
            <span>{resumeData.personal.phone}</span>
          </div>
          <div className="label">
            <Icon
              icon="fa6-solid:square-envelope"
              style={{ fontSize: "24px" }}
            />
            <span>{resumeData.personal.email}</span>
          </div>
          <div className="label">
            <Icon icon="fa-brands:github-square" style={{ fontSize: "24px" }} />
            <span>{resumeData.personal.website}</span>
          </div>
          <div className="label">
            <Icon icon="fa-brands:linkedin" style={{ fontSize: "24px" }} />
            <span>{resumeData.personal.linkedin}</span>
          </div>
        </div>
      </div>
      <div className="education-and-job">
        <h4>STUDIUM</h4>
        <hr />
        {resumeData.educations.map((e, i) => (
          <TimeNameCity key={i} data={e} />
        ))}
        <h4>ARBEITSERFAHRUNG</h4>
        <hr />
        {resumeData.jobs.map((j, i) => (
          <TimeNameCity key={i} data={j} />
        ))}
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
