import "../styles/globals.css";
import FooterContextProvider from "../contexts/footerContext";
import ThemeContextProvider from '../contexts/themeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <FooterContextProvider>
        <Component {...pageProps} />
      </FooterContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
