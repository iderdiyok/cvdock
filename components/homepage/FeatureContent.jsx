import Image from "next/image";
import imgCreate from "@/img/create.png";
import imgData from "@/img/data.png";
import imgExport from "@/img/export.png";
import imgUpload from "@/img/upload.png";
import { motion } from "framer-motion";

export default function FeatureContent({ onBuild }) {
  return (
    <section className="feature container">
      <div className="subtitle">
      <h2>
        Erstellen Sie Ihren Lebenslauf in wenigen Minuten.
      </h2>
      </div>
      

      <div className="grid">
        <motion.div className="card" 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", restSpeed: 2  }}
        >
          <div className="image-container">
            <Image
              src={imgCreate}
              alt="Template Preview"
              width={300}
              height={200}
            />
          </div>
          <h3>Vorlagen</h3>
          <p>
            Wählen Sie aus mehreren professionellen Vorlagen für Ihren
            Lebenslauf.
          </p>

          {/* <button onClick={onBuild}>CV erstellen</button> */}
        </motion.div>

        <motion.div className="card" 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", restSpeed: 2  }}
        >
          <div className="image-container">
            <Image src={imgData} alt="Form Preview" width={300} height={200} />
          </div>
          <h3>Daten eingeben</h3>
          <p>
            Geben Sie Ihre persönlichen Daten ein, um Ihren Lebenslauf zu
            erstellen.
          </p>

          {/* <button onClick={onBuild}>CV erstellen</button> */}
        </motion.div>

        <motion.div className="card" 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", restSpeed: 2  }}
        >
          <div className="image-container">
            <Image src={imgExport} alt="PDF Preview" width={300} height={200} />
          </div>
          <h3>PDF speichern oder drucken</h3>
          <p>
            Speichern Sie Ihren Lebenslauf als PDF-Datei oder drucken Sie ihn
            direkt aus.
          </p>

          {/* <button onClick={onBuild}>CV erstellen</button> */}
        </motion.div>

        <motion.div className="card" 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", restSpeed: 2  }}
        >
          <div className="image-container">
            <Image
              src={imgUpload}
              alt="JSON Preview"
              width={300}
              height={200}
            />
          </div>
          <h3>Daten speichern</h3>
          <p>
            Speichern Sie Ihre Daten als JSON-Datei, um sie später
            wiederzuverwenden.
          </p>

          {/* <button onClick={onBuild}>CV erstellen</button> */}
        </motion.div>
      </div>
    </section>
  );
}
