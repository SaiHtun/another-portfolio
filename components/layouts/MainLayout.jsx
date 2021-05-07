import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles";
import { useDarkMode } from "../../Hooks/useDarkMode";
import Head from "next/head";

const lightTheme = {
  body: "#fff",
  text: "#181818",
  background: "#363537",
};
const darkTheme = {
  body: "#181818",
  text: "#FAFAFA",
  background: "#181818",
};


export default function Home(props) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  // passing child's props with React.cloneElement
  const children = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      theme: theme,
    });
  });

  if (!mountedComponent) return <div></div>;

  return (
    <>
      <Head>
        <script type="text/javascript" src="/static/index.js" />
      </Head>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Container>
          <Nav toggler={themeToggler} theme={theme}></Nav>
          {children}
          <Footer theme={theme}></Footer>
        </Container>
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
