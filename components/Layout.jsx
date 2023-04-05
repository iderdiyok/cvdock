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
          content="Erstellen Sie schnell und einfach Ihren Lebenslauf mit unserem kostenlosen CV-Generator. Wählen Sie aus mehreren Vorlagen und speichern Sie Ihre CV als PDF-Datei."
        />
        <meta
          name="keywords"
          content="Lebenslauf, CV, Generator, Vorlagen, PDF, kostenlos, online"
        />
        <meta name="author" content="Ilhan Derdiyok" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className="site-main inner-width">{children}</main>
      <Footer />
      <div class="gtranslate_wrapper"></div>
    </div>
  );
}
