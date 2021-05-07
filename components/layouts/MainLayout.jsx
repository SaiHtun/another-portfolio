import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles";
import { useDarkMode } from "../../Hooks/useDarkMode";
import Head from "next/head";
import { VscChromeClose } from 'react-icons/vsc';

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

const data = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Project",
    to: "/project",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export default function Home(props) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [ openOverlay, setOpenOverlay ] = useState(false);
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
          <Overlay open={openOverlay}>
            <Close onClick={() => setOpenOverlay(!openOverlay)}>
              <VscChromeClose />
            </Close>
            <Menu>
              {data.map((e, i) => (
                <Link href={e.to} key={i}>
                  <li>{e.name}</li>
                </Link>
              ))}
            </Menu>
          </Overlay>
          <Nav toggler={themeToggler} theme={theme} openOverlay={openOverlay} setOpenOverlay={setOpenOverlay}></Nav>
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
  /* position: relative; */
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-out;

  ${props => props.open && css`
    opacity: 1;
    pointer-events: all;
  ` };
`;

const Close = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 50px;
  top: 50px;
  z-index: 1;
  cursor: pointer;

  svg {
    font-size: 2em;
    color: whitesmoke !important;
  }
`;

const Menu = styled.ul`
  list-style: none;
  color: whitesmoke;
  text-align: center;
  text-transform: uppercase;

  li {
    margin: 30px 0px;
    cursor: pointer;

    :hover {
      color: #00acee;
    }
  }
`;
