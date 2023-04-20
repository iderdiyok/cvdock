import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import CVTemplatesTicker from "./CVTemplatesTicker";

export default function FeatureContent({ onBuild }) {
  const item = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
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
        variants={item}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="grid container"
        style={{ position: "relative" }}
      >
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h2>Vorlagen</h2>
          <p>
            Wählen Sie aus mehreren professionellen Vorlagen für Ihren
            Lebenslauf.
          </p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h2>Daten eingeben</h2>
          <p>
            Geben Sie Ihre persönlichen Daten ein, um Ihren Lebenslauf zu
            erstellen.
          </p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h2>PDF drucken</h2>
          <p>
            Speichern Sie Ihren Lebenslauf als PDF-Datei oder drucken Sie ihn
            direkt aus.
          </p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h2>Daten speichern</h2>
          <p>
            Speichern Sie Ihre Daten als JSON-Datei, um sie später
            wiederzuverwenden.
          </p>
        </motion.div>
      </motion.div>

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
