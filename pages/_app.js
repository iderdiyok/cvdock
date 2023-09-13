/* eslint-disable @next/next/inline-script-id */
import { Provider } from "react-redux";
import Script from "next/script";
import store from "../store";
import "../sass/style.scss";
import { Outfit } from "@next/font/google";
const outfitBold = Outfit({ weight: "700", subsets: ["latin"] });
const outfitRegular = Outfit({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <style jsx global>
        {`
          html {
            font-family: ${outfitRegular.style.fontFamily};
          }
          h1 {
            font-family: ${outfitBold.style.fontFamily};
          }
          h2,
          h3,
          h4,
          h5,
          h6,
        `}
      </style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
