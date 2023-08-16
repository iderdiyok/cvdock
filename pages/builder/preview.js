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
  console.log({resumeData});

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "cvdock",
  });

  const MAX_COMPONENTS = 1000; // maximale Anzahl von Komponenten

  // Anzahl der Komponenten, die benötigt werden, um den Inhalt anzuzeigen
  const numComponents =
    Math.ceil((resumeData.educations?.length ?? 0) / 2) +
    Math.ceil((resumeData.jobs?.length ?? 0) / 2);

  // Stellen Sie sicher, dass die Anzahl der Komponenten die maximale Größe nicht überschreitet
  if (numComponents > MAX_COMPONENTS) {
    throw new Error(
      `Zu viele Komponenten im Resume (maximal ${MAX_COMPONENTS} erlaubt)`
    );
  }
  console.log({ numComponents });
  // Array mit null-Werten, um die Komponenten zu erstellen
  const componentArray = new Array(numComponents).fill(null);
  console.log({ componentArray });

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
          <span className="button-box__link" onClick={exportJson}>
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

function exportJson() {
  const data = useSelector((state) => state.data);
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
