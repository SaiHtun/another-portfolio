import "../styles/globals.css";
import FooterContextProvider from "../contexts/footerContext";

function MyApp({ Component, pageProps }) {
  return (
    <FooterContextProvider>
      <Component {...pageProps} />
    </FooterContextProvider>
  );
}

export default MyApp;
