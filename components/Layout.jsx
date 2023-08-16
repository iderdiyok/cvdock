import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

export default function Layout({ title, children }) {
  return (
    <div className="site-wrapper">
      <Head>
        <title>
          {title
            ? `cvdock/${title}`
            : "cvdock | Erstellen Sie Ihren Lebenslauf in wenigen Minuten"}
        </title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Nutzen Sie den kostenlosen CV-Generator von cvdock, um mühelos einen professionellen Lebenslauf zu erstellen. Wählen Sie aus verschiedenen Vorlagen und speichern Sie Ihren CV als PDF-Datei."
        />
        <meta
          name="keywords"
          content="Lebenslauf, CV, Generator, Vorlagen, PDF, kostenlos, online, cvdock"
        />
        <meta name="author" content="Ilhan Derdiyok" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
      <div className="gtranslate_wrapper"></div>
    </div>
  );
}
