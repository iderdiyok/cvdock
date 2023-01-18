import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

const FormSkills = dynamic(() => import("@/components/Forms/FormSkills"), {
  ssr: false,
});

export default function skills() {
  const title = "Skills, Sprachen und Hobbys";
  return (
    <Layout title={title}>
      <BuilderProgressBar
        width="100%"
        education="true"
        job="true"
        skills="true"
      />
      { FormSkills 
        ? <FormSkills />
        : <Loading />
      }
    </Layout>
  );
}
