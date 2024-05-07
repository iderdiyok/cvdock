import { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default function FaqContent() {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };

  return (
    <section className="faq container">
      <ParallaxBanner
        layers={[
          { image: '/img/pattern.svg', speed: -10 },
          {
            speed: -15,
            children: (
            <div className="subtitle">
              <h1>Frequently Asked Questions</h1>
              <h3>Antworten auf Ihre Fragen</h3>
            </div>
            ),
          }
        ]}
        className="bg-container"
      ></ParallaxBanner>

      <div className="content">
        <article className="info">
          <section
            className={`text-area ${activeSection === 0 ? "active" : ""}`}
            onClick={() => handleSectionClick(0)}
          >
            <h2>Warum sollten Sie unseren CV-Generator verwenden?</h2>
            <p>
              Unser CV-Generator ist einfach zu bedienen und spart Ihnen Zeit
              und Mühe bei der Erstellung Ihres Lebenslaufs. Sie können aus
              mehreren Vorlagen auswählen und Ihren Lebenslauf in wenigen
              Minuten erstellen. Sie müssen nur Ihre Daten eingeben und unser
              Tool erledigt den Rest für Sie.
            </p>
          </section>
          <section
            className={`text-area ${activeSection === 1 ? "active" : ""}`}
            onClick={() => handleSectionClick(1)}
          >
            <h2>Welche Daten werden benötigt?</h2>
            <p>
              Unser CV-Generator benötigt einige grundlegende Informationen wie
              Ihren Namen, Ihre Kontaktdaten, Ihre Berufserfahrung und Ihre
              Ausbildung. Sie können auch weitere Details hinzufügen, wie z.B.
              Ihre Fähigkeiten, Auszeichnungen und Zertifikate.
            </p>
          </section>
          <section
            className={`text-area ${activeSection === 2 ? "active" : ""}`}
            onClick={() => handleSectionClick(2)}
          >
            <h2>Wie kann ich meinen Lebenslauf exportieren?</h2>
            <p>
              Sie können Ihren Lebenslauf ganz einfach als PDF exportieren.
              Klicken Sie einfach auf die Schaltfläche Exportieren, und das Tool
              generiert automatisch eine PDF-Datei mit Ihrem Lebenslauf. Sie
              können die PDF-Datei dann speichern oder ausdrucken. Sie können
              auch eine JSON-Datei exportieren, indem Sie auf die Schaltfläche
              Exportieren klicken. Die exportierte Datei enthält alle von Ihnen
              eingegebenen Daten und kann später wieder in das Tool importiert
              werden, wenn Sie Ihren Lebenslauf bearbeiten oder aktualisieren
              möchten.
            </p>
          </section>

          <section
            className={`text-area ${activeSection === 3 ? "active" : ""}`}
            onClick={() => handleSectionClick(3)}
          >
            <h2>Wie kann ich meinen Lebenslauf importieren?</h2>
            <p>
              Sie können Ihre zuvor exportierte JSON-Datei ganz einfach wieder
              in das Tool importieren. Klicken Sie einfach auf die Schaltfläche
              Importieren, wählen Sie die JSON-Datei aus, die Sie zuvor
              exportiert haben, und das Tool lädt automatisch alle Daten in das
              Formular. Sie können dann Ihre Arbeit fortsetzen oder den
              Lebenslauf bearbeiten oder aktualisieren. Bitte beachten Sie, dass
              Sie die Datei nur auf einem Computer speichern und importieren
              können, auf dem Sie das Tool verwenden.
            </p>
          </section>
          <section
            className={`text-area ${activeSection === 4 ? "active" : ""}`}
            onClick={() => handleSectionClick(4)}
          >
            <h2>Wo werden meine Daten gespeichert?</h2>
            <p>
              Sicherheit und Datenschutz sind uns sehr wichtig. Aus diesem Grund
              werden Ihre eingegebenen Daten nicht auf unserem Server oder in
              einer Datenbank gespeichert. Alle Daten, die Sie in das Formular
              eingeben, bleiben lokal auf Ihrem Computer gespeichert, bis Sie
              die Seite verlassen oder den Tab schließen. Hier bei cvdock sind
              wir uns bewusst, wie wichtig Ihre Privatsphäre ist. Wir sorgen
              dafür, dass alle von Ihnen eingegebenen Daten sicher und geschützt
              sind.
            </p>
          </section>
        </article>
      </div>
      <div className="subTitle" style={{textAlign: "center", marginBottom: "5em"}}>
        <h2 className="txt-bold">Haben Sie noch weitere Fragen? <a href="#">Kontaktiere uns.</a> </h2>
      </div>
    </section>
  );
}
