import { Icon } from "@iconify/react";
import Image from "next/image";
import logo_white from "@/img/logo-white.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <article className="about">
          <Image
            className="logo_white"
            src={logo_white}
            alt="cvdock-logo-white"
            priority
          />
          <p className="text">
            CV-Dock ist ein kostenloses Web-Tool zur Erstellung von
            Lebensläufen. Alle Daten werden nur lokal auf Ihrem Gerät
            gespeichert und nicht an Server gesendet.
          </p>
        </article>

        <div className="social">
          <h2>Folge uns</h2>
          <article className="accounts">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Folgen Sie uns auf Linkedin"
            >
              <Icon icon="ion:social-linkedin" className="icon" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Folgen Sie uns auf Twitter"
            >
              <Icon icon="ion:social-twitter" className="icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Folgen Sie uns auf Instagram"
            >
              <Icon icon="typcn:social-instagram" className="icon" />
            </a>
          </article>
        </div>
      </div>

      <div className="links">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
      <p className="copy">
        &copy; {new Date().getFullYear()} cvdock | Alle Rechte vorbehalten
      </p>
    </footer>
  );
}
