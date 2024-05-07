// Elegant.js
import React from "react";
import { Page, View, Text } from "@react-pdf/renderer";
import Avatar from "./Avatar";
import NameAndTitle from "./NameAndTitle";
import PersonalInfo from "./PersonalInfo";
import Languages from "./Languages";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const ElegantPDF = ({ resumeData }) => {
    console.log({resumeData});
  const educationEntries = resumeData?.educations || [];
  const jobEntries = resumeData?.jobs || [];
  const skillEntries = resumeData?.skills || [];

  return (
    <Page size="A4">
      <View style={styles.page}>
        <View style={styles.section}>
          <Avatar avatar={resumeData.personal?.avatar} />
          <NameAndTitle personal={resumeData.personal} />
          <PersonalInfo personal={resumeData.personal} />
          <Languages languages={resumeData.languages} />
          <Contact personal={resumeData.personal} />
        </View>
        <View style={styles.section}>
          <Education educations={educationEntries} />
          <Experience jobs={jobEntries} />
          <Skills skills={skillEntries} />
        </View>
      </View>
    </Page>
  );
};

const styles = {
  page: {
    padding: 20,
    flexDirection: "row",
  },
  section: {
    margin: 10,
    flexGrow: 1,
  },
};

export default ElegantPDF;