/* eslint-disable react-hooks/rules-of-hooks */
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Loading from "@/components/Loading";
import Layout from "@/components/Layout";
import Elegant from "@/components/CV_Templates/Elegant/Elegant";
import BackButton from "@/components/Backbutton";

export default function preview() {
  const title = "Vorschau";
  const componentRef = useRef();

  const [isLoading, setIsLoading] = useState(true);

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
      <div id="print-content" ref={componentRef}>
        <Elegant />
      </div>
      <div className="next-step" style={{display: "flex", justifyItems: "center", gap: "1em"}}>
        <div className="button-box" style={{ width: "20%" }}>
          <span className="button-box__link" onClick={handlePrint}>
            <Icon icon="fa6-solid:file-arrow-down" />
            ausdrucken / herunterladen
          </span>
        </div>
        <div className="button-box" style={{ width: "20%" }}>
          <span className="button-box__link" onClick={exportJson}>
            <Icon icon="fa6-solid:bars-progress" />
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

  const initalPersonal = JSON.parse(window.localStorage.getItem("resumeData"));

  return initalPersonal ?? {};
}