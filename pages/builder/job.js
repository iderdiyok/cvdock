import dynamic from "next/dynamic";

import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";

const FormJob = dynamic(() => import("@/components/FormJob"), {
  ssr: false,
});

const title = "Berufserfahrungen";

export default function job() {
  return (
    <Layout title={title}>
      <BuilderProgressBar width="60%" education="true" job="true" />
      <FormJob />
    </Layout>
  );
}
