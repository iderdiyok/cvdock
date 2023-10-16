/* eslint-disable react-hooks/rules-of-hooks */
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import Loading from "@/components/Loading";
import Layout from "@/components/Layout";
import Elegant from "@/components/CV_Templates/Elegant/Elegant";
import BackButton from "@/components/Backbutton";

export default function preview() {
  const title = "Vorschau";
  const componentRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  // Redux store data
  const resumeData = useSelector((state) => state.data);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "cvdock",
  });

  const MAX_COMPONENTS = 1000; // maximale Anzahl von Komponenten

  const educationCount = resumeData.educations.length * 3;
  const jobCount = resumeData.jobs.some((job) =>
    job.hasOwnProperty("description")
  )
    ? resumeData.jobs.length * 6
    : resumeData.jobs.length * 3;
  const skillCount = resumeData.skills.length * 2;
  const sum = educationCount + jobCount + skillCount;

  // Anzahl der Komponenten, die benötigt werden, um den Inhalt anzuzeigen
  const numComponents = sum >= 34 ? 2 : 1;

  console.log({ numComponents });
  // Stellen Sie sicher, dass die Anzahl der Komponenten die maximale Größe nicht überschreitet
  if (numComponents > MAX_COMPONENTS) {
    throw new Error(
      `Zu viele Komponenten im Resume (maximal ${MAX_COMPONENTS} erlaubt)`
    );
  }
  // Array mit null-Werten, um die Komponenten zu erstellen
  const componentArray = new Array(numComponents).fill(null);

  function exportJson(data) {
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "cvdock.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout title={title}>
      <BackButton />
      <div id="print-content container" ref={componentRef}>
        {componentArray.map((_, i) => (
          <Elegant pageNum={i + 1} key={i} />
        ))}
      </div>
      <div
        className="next-step container"
        style={{ display: "flex", justifyItems: "center", gap: "1em" }}
      >
        <div className="button-box" style={{ width: "25%" }}>
          <span className="button-box__link" onClick={handlePrint}>
            <Icon
              icon="carbon:generate-pdf"
              style={{ width: "20%", height: "20%" }}
            />
            ausdrucken / herunterladen
          </span>
        </div>
        <div className="button-box" style={{ width: "25%" }}>
          <span
            className="button-box__link"
            onClick={() => exportJson(resumeData)}
          >
            <Icon
              icon="mdi:code-json"
              style={{ width: "20%", height: "20%" }}
            />
            json herunterladen
          </span>
        </div>
      </div>
    </Layout>
  );
}
