import Layout from "@/components/Layout";
import Image from "next/image";
import johnDoCv from "@/img/john-do-cv.png";
import dock from "@/img/dock.svg";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  
  const resumeData = {
    personal: {},
    educations: [{}],
    jobs: [{}],
    skills: [{}],
    languages:[{}],
    hobbys:""
  };
  const onBuild = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    router.push("/builder/personal-info");
  };
  return (
    <Layout>
      <div className="d-grid home-page">
        <section className="home-page__content">
          <h1>
            Erstellen Sie ganz einfach professionell aussehende Lebensläufe in
            wenigen und einfachen Schritten.
          </h1>
          <p className="text">
            Mit einem benutzerfreundlichen Layout und einem einfachen Design
            können Sie Ihren Lebenslauf in weniger als 10 Minuten erstellen, aus
            einer unserer professionell gestalteten Vorlagen auswählen und Ihren
            Lebenslauf als PDF exportieren, damit Sie ihn ausdrucken und einem
            potenziellen Arbeitgeber vorlegen können.
          </p>
          <div className="button-box">
            <div className="button-box__link" onClick={onBuild}>
              Lebenslauf erstellen
            </div>
          </div>
        </section>
        <section className="home-page__image">
          <Image
            src={johnDoCv}
            alt="John DO CV"
            className="home-page__image__img-cv"
          />
          <Image
            src={dock}
            alt="dock"
            className="home-page__image__img-background"
          />
        </section>
      </div>
    </Layout>
  );
}
