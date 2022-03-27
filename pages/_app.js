
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { Main } from "../components/Main";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
