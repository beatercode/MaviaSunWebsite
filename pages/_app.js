
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { Main } from "../components/Main";
import { css } from "./_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
