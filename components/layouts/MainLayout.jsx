import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles";
import { useTheme } from "../../contexts/themeContext";
import Head from "next/head";
import { VscChromeClose } from "react-icons/vsc";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

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
    name: "Story",
    to: "/story",
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
  const { theme, mountedComponent } = useTheme();
  const [openOverlay, setOpenOverlay] = useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  // passing child's props with React.cloneElement

  if (!mountedComponent) return <div></div>;

  return (
    <>
      <Head>
        <script type="text/javascript" src="/static/index.js" />
      </Head>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Container open={openOverlay}>
          <Overlay open={openOverlay}>
            <Close onClick={() => setOpenOverlay(!openOverlay)}>
              <VscChromeClose />
            </Close>
            <Menu>
              {data.map((e, i) => (
                <Link
                  href={e.to}
                  key={i}
                  onClick={() => setOpenOverlay(!openOverlay)}
                >
                  <li>{e.name}</li>
                </Link>
              ))}
            </Menu>
            <Socials>
              <Link href="https://github.com/SaiHtun">
                <>
                  <FaGithub className="github" />
                </>
              </Link>
              <Link href="https://www.linkedin.com/in/sai-htun-b20a0611a/">
                <>
                  <FaLinkedin className="linkedIn" />
                </>
              </Link>
              <Link href="https://twitter.com/SaiHtun19428970">
                <>
                  <FaTwitter className="twitter" />
                </>
              </Link>
            </Socials>
          </Overlay>
          <Nav openOverlay={openOverlay} setOpenOverlay={setOpenOverlay}></Nav>
          {props.children}
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  ${(props) =>
    props.open &&
    css`
      overflow: hidden;
    `};
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.3s ease-out;

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      pointer-events: all;
    `};
`;

const Close = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 100px;
  top: 50px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s ease-out;

  @media only screen and (max-width: 800px) {
    top: 20px;
    right: 20px;
  }

  :hover {
    background-color: #f0798d;
  }

  svg {
    font-size: 1.5em;
    color: whitesmoke !important;
  }
`;

const Menu = styled.ul`
  list-style: none;
  color: whitesmoke;
  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;

  li {
    margin: 30px 0px;
    cursor: pointer;
    transition: color 0.3s ease-out;

    :hover {
      color: #00acee;
    }
  }
`;

const Socials = styled.div`
  color: whitesmoke;
  position: relative;
  position: absolute;
  bottom: 200px;

  svg {
    margin: 0px 10px;
    font-size: 1.5em;
    cursor: pointer;
  }

  .twitter {
    color: #00acee;
  }

  .linkedIn {
    color: #0e76a8;
  }
`;
