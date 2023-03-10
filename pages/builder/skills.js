/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import BackButton from "@/components/Backbutton";
import useDisplaySize from "@/hooks/useDisplaySize";

const FormSkills = dynamic(() => import("@/components/Forms/FormSkills"), {
  ssr: false,
});

export default function skills() {
  const title = "Skills, Sprachen und Hobbys";
  const isTabletSize = useDisplaySize();

  return (
    <Layout title={title}>
      {isTabletSize ? (
        <BackButton />
      ) : (
        <BuilderProgressBar
          width="100%"
          education="true"
          job="true"
          skills="true"
        />
      )}
      <FormSkills />
    </Layout>
  );
}
