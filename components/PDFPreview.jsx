// PDFPreview.js
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ElegantPDF from "./CV_Templates/Elegant/Elegant.jsx";

const PDFPreview = ({ resumeData }) => {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <ElegantPDF resumeData={resumeData} />
    </PDFViewer>
  );
};

export default PDFPreview;
