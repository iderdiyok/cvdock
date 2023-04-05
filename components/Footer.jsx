import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">
          CV-Generator ist ein kostenloses Web-Tool zur Erstellung von
          Lebensläufen. Alle Daten werden nur lokal auf Ihrem Gerät gespeichert
          und nicht an Server gesendet.
        </p>
        <div className="links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
        <div className="social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ion:social-linkedin" className="icon" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ion:social-twitter" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="typcn:social-instagram"
              className="icon"
            />
          </a>
        </div>
      </div>
      <p className="copy">
        &copy; {new Date().getFullYear()} cvdock | Alle Rechte vorbehalten
      </p>
    </footer>
  );
}
