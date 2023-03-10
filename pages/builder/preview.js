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
    documentTitle: "cvdock"
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout title={title}>
      <BackButton />
      <div id="print-content" ref={componentRef}>
        <Elegant />
      </div>
      <div className="next-step">
      <div className="button-box" style={{"margin": "0 auto", "width": "50%"}}>
        <span className="button-box__link" onClick={handlePrint}>
          <Icon icon="fa6-solid:downdload" />
          ausdrucken / herunterladen
        </span>
      </div>
      </div>
    </Layout>
  );
}
