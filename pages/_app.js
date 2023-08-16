import { Provider } from "react-redux";
import store from "../store";
import "../sass/style.scss";
import { Outfit } from "@next/font/google";
const outfitBold = Outfit({ weight: "700", subsets: ["latin"] });
const outfitRegular = Outfit({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
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
  `}</style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
