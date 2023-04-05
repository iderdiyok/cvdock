import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FaqContent from "@/components/homepage/FaqContent";
import FeatureContent from "@/components/homepage/FeatureContent";

import { useAnimation, motion } from "framer-motion";
import { Icon } from "@iconify/react";

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
    router.push({
      pathname: "/builder/personal-info",
      query: { past: true },
    });
  };

  const text = 
    `Erstelle im Handumdrehen einen professionellen Lebenslauf mit unserem Lebenslauf-Generator. 
    Wähle aus einer Vielzahl von Vorlagen und füge einfach deine Informationen hinzu. 
    Dein Lebenslauf wird automatisch formatiert und du kannst ihn als PDF speichern und überall verwenden.`;

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.01,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      {/* HEADER ABSCHNITT */}
      <header className="header">
        <section>
          <h1 className="title">
            Willkommen beim kostenlosen Online-Lebenslauf-Generator
          </h1>
          <p className="description">
            Erstellen Sie ganz einfach professionell aussehende Lebensläufe in
            wenigen und einfachen Schritten.
          </p>
          <div className="button-box">
            <div className="button-box__link" onClick={onBuild}>
              Lebenslauf erstellen
            </div>
          </div>
        </section>
        <section className="cvdock_3D">
          {/* <Image src={dock} alt="cvdock_3D" /> */}
        </section>
      </header>
      {/* EINFÜHRUNG ABSCHNITT */}

      <section className="introductionSection">
      <motion.h3
        className="introductionText"
        variants={container}
        initial="hidden"
        animate="show"
        aria-label={text}
        role="heading"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={item}>
            {char}
          </motion.span>
        ))}
      </motion.h3>
      {/* <motion.div 
        variants={
          {hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y:0,
            transition: {
              duration: 4,
              staggerChildren: .02,
              delayChildren: .08,
            },
          },}
        }
        initial="hidden"
        animate="show">
        <Icon icon="mdi:file-account-outline" className="icon"/>
      </motion.div> */}
      </section>

      <FeatureContent onBuild={onBuild} />
      {/* BUTTON ABSCHNITT */}
      <section className="buttonSection ">
        <div className="button">
          <h3 className="buttonText">
            Probiere es jetzt aus und erstelle deinen Lebenslauf!
          </h3>
          <div
            className="button-box"
          >
            <div className="button-box__link" onClick={onBuild}>
              Lebenslauf erstellen
            </div>
          </div>
        </div>
      </section>
      <FaqContent onBuild={onBuild}/>
      
      {/* <section className="instructionsSection">
          <div className="instructions">
            <h2 className="subtitle">So funktioniert es:</h2>
            <ol className="stepsList">
              <li className="stepsListItem">Gib deine Daten ein</li>
              <li className="stepsListItem">Wähle eine Vorlage aus</li>
              <li className="stepsListItem">Passe das Design an</li>
              <li className="stepsListItem">Klicke auf CV erstellen</li>
              <li className="stepsListItem">
                Speichere dein Lebenslauf-PDF auf deinem Computer
              </li>
            </ol>
          </div>
        </section> */}
      {/* BILDER ABSCHNITT */}
      {/* <section className="imagesSection ">
        <div className="images">
          <div className="image">
            <Image src={johnDoCv} alt="Vorlage 1" width={300} height={400} />
            <p className="imageText">Vorlage 1</p>
          </div>
          <div className="image">
            <Image src={johnDoCv} alt="Vorlage 2" width={300} height={400} />
            <p className="imageText">Vorlage 2</p>
          </div>
          <div className="image">
            <Image src={johnDoCv} alt="Vorlage 3" width={300} height={400} />
            <p className="imageText">Vorlage 3</p>
          </div>
        </div>
      </section> */}

      {/* <div className="d-grid home-page">
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

          <div style={{ display: "flex", gap: "2em" }">
            <div className="button-box" style={{ width: "50%" }">
              <div className="button-box__link" onClick={onBuild">
                Lebenslauf erstellen
              </div>
            </div>
            <div className="button-box" style={{ width: "50%" }">
              <div className="button-box__link" onClick={importJsonClick">
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
      </div> */}
    </Layout>
  );
}
