import Layout from "@/components/Layout";
import Image from "next/image";

import previewImage from "@/img/john-do-cv.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
export default function preview() {
  const title = "Vorschau";
  return (
    <Layout title={title}>
      <Image
        src={previewImage}
        alt="Cv preview"
        sizes="(max-width: 52rem) 90vw, 48rem"
      />
      <div className="button-box">
        <Link className="button-box__link" href="/builder/preview">
          <Icon icon="fa6-solid:downdload" />
          Herunterladen
        </Link>
      </div>

      <div>
        <Link
          className="button-box__link"
          href="/builder/skills"
          style={{ color: "black", margin: "2em 0" }}
        >
          <Icon icon="fa6-solid:angle-left" />
          Zurück zu Bearbeiten
        </Link>
      </div>
    </Layout>
  );
}
