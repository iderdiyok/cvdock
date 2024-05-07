/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from "next/dynamic";
import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import BackButton from "@/components/Backbutton";
import AddJsonFile from "@/components/AddJsonFile";
import useDisplaySize from "@/hooks/useDisplaySize";
import { useRouter } from "next/router";

// Dynamic import of the "FormPersonalInfo" form for the Builder module
// SSR is disabled to ensure the form is only rendered client-side
const FormPersonalInfo = dynamic(
  () => import("@/components/Forms/FormPersonalInfo"),
  {
    ssr: false,
  }
);

export default function personalInfo() {
  const router = useRouter();
  const { past } = router.query;

  const title = "Personaldaten";
  const isTabletSize = useDisplaySize();

  return (
    <Layout title={title}>
      {isTabletSize ? <BackButton /> : <BuilderProgressBar width="0%" />}
      <AddJsonFile />
      <FormPersonalInfo past={past} />
    </Layout>
  );
}
