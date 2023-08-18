import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import CVTemplatesTicker from "./CVTemplatesTicker";
import select_template from "@/img/select_template.gif";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function FeatureContent({ onBuild }) {
  const items = [
    {
      title: "Vorlage auswählen",
      description:
        "Wählen Sie aus mehreren professionellen Vorlagen für Ihren Lebenslauf.",
      image: select_template,
    },
    {
      title: "Daten eingeben",
      description:
        "Geben Sie Ihre persönlichen Daten ein, um Ihren Lebenslauf zu erstellen.",
      image: select_template,
    },
    {
      title: "PDF drucken",
      description:
        "Speichern Sie Ihren Lebenslauf als PDF-Datei oder drucken Sie ihn direkt aus.",
      image: select_template,
    },
    {
      title: "Daten speichern",
      description:
        "Speichern Sie Ihre Daten als JSON-Datei, um sie später wiederzuverwenden.",
      image: select_template,
    },
  ];

  const itemAnimation = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="feature">
      <div className="subtitle">
        <h1>Erstellen Sie Ihren Lebenslauf in wenigen Minuten.</h1>
      </div>

      {items.map((item, index) => (
        <ScrollAnimation
          key={index}
          variants={itemAnimation}
          className="grid container"
          style={{ position: "relative" }}
        >
          {index % 2 !== 0 ? (
            <>
              <Parallax speed={10}>
                <Image src={item.image} alt="Parallax" />
              </Parallax>
              <Parallax speed={-10}>
                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </motion.div>
              </Parallax>
            </>
          ) : (
            <>
              <Parallax speed={-10}>
                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </motion.div>
              </Parallax>
              <Parallax speed={10}>
                <Image src={item.image} alt="Parallax" />
              </Parallax>
            </>
          )}
        </ScrollAnimation>
      ))}

      <CVTemplatesTicker />

      <section className="buttonSection ">
        <div className="button">
          <h2 className="buttonText">
            Probiere es jetzt aus und erstelle deinen Lebenslauf!
          </h2>
          <div className="button-box">
            <div className="button-box__link" onClick={onBuild}>
              Lebenslauf erstellen
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function ScrollAnimation({ children, variants, ...rest }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
