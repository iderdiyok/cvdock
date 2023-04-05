/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
import BuilderProgressBar from "@/components/BuilderProgressBar";
import BackButton from "@/components/Backbutton";
import useDisplaySize from "@/hooks/useDisplaySize";
import { useRouter } from "next/router";

const FormJob = dynamic(() => import("@/components/Forms/FormJob"), {
  ssr: false,
});

const title = "Berufserfahrungen";

export default function job() {
  const router = useRouter();
  const { past } = router.query;

  const isTabletSize = useDisplaySize();
  return (
    <Layout title={title}>
      {isTabletSize ? (
        <BackButton />
      ) : (
        <BuilderProgressBar width="60%" education="true" job="true" />
      )}

      <FormJob past={past} />
    </Layout>
  );
}
