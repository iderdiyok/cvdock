import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

const FormJob = dynamic(() => import("@/components/Forms/FormJob"), {
  ssr: false,
});

const title = "Berufserfahrungen";

export default function job() {
  return (
    <Layout title={title}>
      <BuilderProgressBar width="60%" education="true" job="true" />
      { FormJob 
        ? <FormJob />
        : <Loading />
      }
    </Layout>
  );
}
