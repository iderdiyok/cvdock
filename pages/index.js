import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import FaqContent from "@/components/homepage/FaqContent";
import FeatureContent from "@/components/homepage/FeatureContent";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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

  const text = `Erstelle im Handumdrehen einen professionellen Lebenslauf mit unserem Lebenslauf-Generator. 
    Wähle aus einer Vielzahl von Vorlagen und füge einfach deine Informationen hinzu. 
    Dein Lebenslauf wird automatisch formatiert und du kannst ihn als PDF speichern und überall verwenden.`;

  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

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
      <header className="header container">
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
        {/* <iframe
          src="https://my.spline.design/untitled-b96f5ac1cb989d3d21e606cef20347a3/"
          frameBorder="0"
        ></iframe> */}

        <section className="cvdock_3D"></section>
      </header>
      <section className="introductionSection container">
        <motion.h3
          className="introductionText"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          aria-label={text}
          role="heading"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={item}>
              {char}
            </motion.span>
          ))}
        </motion.h3>
      </section>
      <FeatureContent onBuild={onBuild} />
      <FaqContent onBuild={onBuild} />
      <div
        className="button-box"
        style={{ margin: "1em auto", width: "30%" }}
        onClick={onBuild}
      >
        <div className="button-box__link">Jetzt testen</div>
      </div>
      {/* <section className="instructionsSection">
          <div className="instructions">
            <h2 className="subtitle">So funktioniert es:</h2>
            <ol className="stepsList">
            <li className="stepsListItem">Wähle eine Vorlage aus</li>
              <li className="stepsListItem">Gib deine Daten ein</li>
              <li className="stepsListItem">Passe das Design an</li>
              <li className="stepsListItem">Klicke auf CV erstellen</li>
              <li className="stepsListItem">
                Speichere dein Lebenslauf-PDF auf deinem Computer
              </li>
            </ol>
          </div>
        </section> */}
    </Layout>
  );
}
