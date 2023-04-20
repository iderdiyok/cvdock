import Ticker from 'framer-motion-ticker';
import Image from "next/image";
import johnDoCv from "@/img/john-do-cv.png";
import { useState } from 'react';

export default function CVTemplatesTicker() {
    const [isPlaying, setIsPlaying] = useState(true)
  return (
    <section className="imagesSection">
        <div className="images">
          <Ticker duration={50} onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)} isPlaying={isPlaying}>
            <div className="image">
              <Image src={johnDoCv} alt="Vorlage 1" />
              <p className="imageText">Vorlage 1</p>
            </div>
            <div className="image">
              <Image src={johnDoCv} alt="Vorlage 2" />
              <p className="imageText">Vorlage 2</p>
            </div>
            <div className="image">
              <Image src={johnDoCv} alt="Vorlage 3" />
              <p className="imageText">Vorlage 3</p>
            </div>
            <div className="image">
              <Image src={johnDoCv} alt="Vorlage 4" />
              <p className="imageText">Vorlage 4</p>
            </div>
            <div className="image">
              <Image src={johnDoCv} alt="Vorlage 5" />
              <p className="imageText">Vorlage 5</p>
            </div>
            <div className="image">
              <Image src={johnDoCv} alt="Vorlage 6" />
              <p className="imageText">Vorlage 6</p>
            </div>
          </Ticker>
        </div>
      </section>
  )
}
