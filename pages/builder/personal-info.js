/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Loading from "@/components/Loading";
import BuilderProgressBar from "@/components/BuilderProgressBar";
import Layout from "@/components/Layout";
import BackButton from "@/components/Backbutton";
import useDisplaySize from "@/hooks/useDisplaySize";

const FormPersonalInfo = dynamic(
  () => import("@/components/Forms/FormPersonalInfo"),
  {
    ssr: false,
  }
);

export default function personalInfo() {
  const title = "Personaldaten";
  const isTabletSize = useDisplaySize();

  return (
    <Layout title={title}>
      {isTabletSize ? <BackButton /> : <BuilderProgressBar width="0%" />}
      <FormPersonalInfo />
    </Layout>
  );
}
