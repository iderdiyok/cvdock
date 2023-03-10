/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import useDisplaySize from "@/hooks/useDisplaySize";
import BackButton from "@/components/Backbutton";

const FormEducation = dynamic(
  () => import("@/components/Forms/FormEducation"),
  {
    ssr: false,
  }
);

const title = "Bildung und Qualifikationen";

export default function education() {
  const isTabletSize = useDisplaySize();
  return (
    <Layout title={title}>
      {isTabletSize ? (
        <BackButton />
      ) : (
        <BuilderProgressBar width="30%" education={true} />
      )}

      <FormEducation />
    </Layout>
  );
}
