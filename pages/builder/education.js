import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

const FormEducation = dynamic(() => import("@/components/Forms/FormEducation"), {
  ssr: false,
});

const title = "Bildung und Qualifikationen";

export default function education() {
  return (
    <Layout title={title}>
      <BuilderProgressBar width="30%" education={true} />
      { FormEducation 
        ? <FormEducation />
        : <Loading />
      }
    </Layout>
  );
}
