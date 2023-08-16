import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "@/components/Layout";
import HeroContent from "@/components/homepage/HeroContent";
import IntroductionContent from "@/components/homepage/IntroductionContent";
import FeatureContent from "@/components/homepage/FeatureContent";
import FaqContent from "@/components/homepage/FaqContent";

export default function Home() {
  const router = useRouter();

  const onBuild = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/builder/personal-info",
      query: { past: true },
    });
  };

  return (
    <Layout>
      <ParallaxProvider>
        <HeroContent onBuild={onBuild} />
        <IntroductionContent />
        <FeatureContent onBuild={onBuild} />
        <FaqContent onBuild={onBuild} />
        <div className="buttonSection">
          <div className="button-box" onClick={onBuild}>
            <div className="button-box__link">Jetzt testen</div>
          </div>
        </div>
      </ParallaxProvider>
    </Layout>
  );
}
