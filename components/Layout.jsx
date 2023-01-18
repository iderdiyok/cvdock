import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, children }) {
  return (
    <div className="site-wrapper">
      <Head>
        <title>{title ? `cvdock/${title}` : "cvdock"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="site-main inner-width">{children}</main>
      <Footer />
    </div>
  );
}
