import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

import CVTemplatesTicker from "./CVTemplatesTicker";
import select_template from "@/img/icons/template.png";
import input from "@/img/icons/input.png";
import pdf_save from "@/img/icons/pdf_save.png";
import file_save from "@/img/icons/file_save.png";

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
      image: input,
    },
    {
      title: "PDF drucken",
      description:
        "Speichern Sie Ihren Lebenslauf als PDF-Datei oder drucken Sie ihn direkt aus.",
      image: pdf_save,
    },
    {
      title: "Daten speichern",
      description:
        "Speichern Sie Ihre Daten als JSON-Datei, um sie später wiederzuverwenden.",
      image: file_save,
    },
  ];

  const cardItem = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 10, transition: { ease: "easeOut", duration: 0.5 } },
  };
  const imageItem = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 1 } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <section className="feature">
      <div className="subtitle">
        <h1>Erstellen Sie Ihren Lebenslauf in wenigen Minuten.</h1>
      </div>

      <motion.div
        variants={cardItem}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="grid container"
        style={{ position: "relative" }}
      >
        {items.map((item, index) => (
          <div key={index}>
            <Parallax speed={index * 10}>
              <motion.div
                className="card"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={imageItem}
                  ref={ref}
                >
                  <Image src={item.image} alt="Parallax" />
                </motion.div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </motion.div>
            </Parallax>
          </div>
        ))}
      </motion.div>

      <CVTemplatesTicker />

      <section className="buttonSection ">
        <div className="button">
          <h2 className="buttonText">
          Probieren Sie es jetzt aus und erstellen Sie Ihren Lebenslauf!
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
