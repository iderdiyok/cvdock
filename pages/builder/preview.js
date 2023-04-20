/* eslint-disable react-hooks/rules-of-hooks */
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Loading from "@/components/Loading";
import Layout from "@/components/Layout";
import Elegant from "@/components/CV_Templates/Elegant/Elegant";
import BackButton from "@/components/Backbutton";

export default function preview() {
  const title = "Vorschau";
  const componentRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [initialData, setInitialData] = useState(getInitialData);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "cvdock",
  });

  const exportJson = () => {
    const data = getInitialData();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'cvdock.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout title={title}>
      <BackButton />
      <div id="print-content container" ref={componentRef}>
        <Elegant />
      </div>
      <div className="next-step container" style={{display: "flex", justifyItems: "center", gap: "1em"}}>
        <div className="button-box" style={{ width: "25%" }}>
          <span className="button-box__link" onClick={handlePrint}>
            <Icon icon="carbon:generate-pdf" style={{ width: "20%", height: "20%" }}/>
            ausdrucken / herunterladen
          </span>
        </div>
        <div className="button-box" style={{ width: "25%" }}>
          <span className="button-box__link" onClick={exportJson}>
            <Icon icon="mdi:code-json" style={{ width: "20%", height: "20%" }}/>
            json herunterladen
          </span>
        </div>
      </div>
    </Layout>
  );
}
function getInitialData() {
  if (typeof window === "undefined") {
    return {};
  }

  const initalData = JSON.parse(window.localStorage.getItem("resumeData"));

  return initalData ?? {};
}