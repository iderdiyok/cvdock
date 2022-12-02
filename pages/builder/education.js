import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";

const FormEducation = dynamic(() => import("@/components/FormEducation"), {
  ssr: false,
});

const title = "Bildung und Qualifikationen";

export default function education() {
  return (
    <Layout title={title}>
      <BuilderProgressBar width="30%" education={true} />
      <FormEducation />
    </Layout>
  );
}
