import Layout from "@/components/Layout";
import Image from "next/image";
import johnDoCv from "@/img/john-do-cv.png";
import dock from "@/img/dock.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const resumeData = {
    personal: {},
    educations: [{}],
    jobs: [{}],
    skills: [{}],
    languages: [{}],
    hobbys: "",
  };

  const onBuild = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    router.push("/builder/personal-info");
  };

  const addJsonData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      const updatedResumeData = {
        ...data,
        personal: { ...data.personal, avatar: "" },
      };

      localStorage.setItem("resumeData", JSON.stringify(updatedResumeData));
      router.push("/builder/personal-info");
    };
    reader.readAsText(file);
  };

  const importJsonClick = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <Layout>
      <div className="d-grid home-page">
        <section className="home-page__content">
          <h1>
            Erstellen Sie ganz einfach professionell aussehende Lebensläufe in
            wenigen und einfachen Schritten.
          </h1>
          <p className="text">
            Mit einem benutzerfreundlichen Layout und einem einfachen Design
            können Sie Ihren Lebenslauf in weniger als 10 Minuten erstellen, aus
            einer unserer professionell gestalteten Vorlagen auswählen und Ihren
            Lebenslauf als PDF exportieren, damit Sie ihn ausdrucken und einem
            potenziellen Arbeitgeber vorlegen können.
          </p>

          <div style={{ display: "flex", gap: "2em" }}>
            <div className="button-box" style={{ width: "50%" }}>
              <div className="button-box__link" onClick={onBuild}>
                Lebenslauf erstellen
              </div>
            </div>
            <div className="button-box" style={{ width: "50%" }}>
              <div className="button-box__link" onClick={importJsonClick}>
                JSON-Data importieren
                <input
                  id="fileInput"
                  type="file"
                  accept=".json"
                  onChange={addJsonData}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-page__image">
          <Image
            src={johnDoCv}
            alt="John DO CV"
            className="home-page__image__img-cv"
          />
          <Image
            src={dock}
            alt="dock"
            className="home-page__image__img-background"
          />
        </section>
      </div>
    </Layout>
  );
}
