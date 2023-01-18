import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

const FormPersonalInfo = dynamic(() => import("@/components/Forms/FormPersonalInfo"), {
  ssr: false,
});

export default function personalInfo() {
  const title = "Personaldaten";
  

  return (
    <Layout title={title}>
      <BuilderProgressBar width="0%" />
      { FormPersonalInfo 
        ?<FormPersonalInfo />
        :<Loading /> 
      }
    </Layout>
  );
}

