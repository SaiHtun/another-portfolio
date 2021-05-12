import "../styles/globals.css";
import FooterContextProvider from "../contexts/footerContext";
import ThemeContextProvider from "../contexts/themeContext";
import MenuOverlayContextProvider from "../contexts/menuOverlayContext";

function MyApp({ Component, pageProps }) {
  return (
    <MenuOverlayContextProvider>
      <ThemeContextProvider>
        <FooterContextProvider>
          <Component {...pageProps} />
        </FooterContextProvider>
      </ThemeContextProvider>
    </MenuOverlayContextProvider>
  );
}

export default MyApp;
