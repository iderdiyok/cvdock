import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function IntroductionContent() {
  const text = `Erleben Sie die Einfachheit unseres CVGenerator! Mit unserem Lebenslauf-Generator gestalten Sie mühelos einen hochprofessionellen Lebenslauf. 
                Wählen Sie aus unserer vielfältigen Auswahl an Vorlagen diejenige, die am besten zu Ihnen passt, und fügen Sie unkompliziert Ihre persönlichen Informationen hinzu. 
                Ihr Lebenslauf wird automatisch in ein ansprechendes Format gebracht  und kann bequem als PDF gespeichert werden. So haben Sie die Möglichkeit, ihn überall nach Bedarf einzusetzen.`;

  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.004,
        delayChildren: 0.01,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="introductionSection container">
      <motion.h3
        className="introductionText"
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        aria-label={text}
        role="heading"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={item}>
            {char}
          </motion.span>
        ))}
      </motion.h3>
    </section>
  );
}
