import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles";
import { useTheme } from "../../contexts/themeContext";
import { useMenuOverlay } from "../../contexts/menuOverlayContext";
import Head from "next/head";
import { VscChromeClose } from "react-icons/vsc";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

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
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export default function Home({ children, title, description, ...props }) {
  let currentURL, previewImage, siteName, twitterHandle;
  const { theme, mountedComponent } = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const { openOverlay, setOpenOverlay } = useMenuOverlay();
  const router = useRouter();
  // passing child's props with React.cloneElement

  if (!mountedComponent) return <div></div>;

  const handlePush = (e) => {
    router.push(e.to);
    setOpenOverlay(!openOverlay);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        {/* twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        {/* Open Graph */}
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
                <div key={i} onClick={() => handlePush(e)}>
                  {e.name}
                </div>
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
          <Nav></Nav>
          {children}
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

const Menu = styled.div`
  list-style: none;
  color: whitesmoke;
  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;

  div {
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
