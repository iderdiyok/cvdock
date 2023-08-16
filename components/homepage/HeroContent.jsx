export default function HeroContent({ onBuild }) {
  return (
    <header className="header container">
      <section>
        <h1 className="title">
          Willkommen beim kostenlosen Online-Lebenslauf-Generator
        </h1>
        <p className="description">
          Erstellen Sie ganz einfach professionell aussehende Lebensläufe in
          wenigen und einfachen Schritten.
        </p>
        <div className="button-box">
          <div className="button-box__link" onClick={onBuild}>
            Lebenslauf erstellen
          </div>
        </div>
      </section>
      <section className="cvdock_3D"></section>
    </header>
  );
}
