import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaGithubAlt, FaSun, FaRegMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from '../contexts/themeContext';
import { useRouter } from "next/router";
import { useMenuOverlay } from '../contexts/menuOverlayContext';

export default function Nav() {
  const {theme, themeToggler } = useTheme();
  const router = useRouter();
  const { openOverlay, setOpenOverlay } = useMenuOverlay()

  const handleToggle = () => {
    themeToggler();
  };

  const sunMoon = theme === "light" ? <FaRegMoon /> : <FaSun className="sun" />;

  return (
    <Wrapper className="nav">
      <Container>
        <Link href="/">
          <Brand>Sai</Brand>
        </Link>
        <Menu>
          <MenuItem onClick={handleToggle}>{sunMoon}</MenuItem>
          <MenuItem>
            {" "}
            <IconWrapper onClick={() => router.push("https://github.com/SaiHtun")}>
              <FaGithubAlt />
              </IconWrapper>
          </MenuItem>
          <MenuItem onClick={() => setOpenOverlay(!openOverlay)}>
            {" "}
            <GiHamburgerMenu />
          </MenuItem>
          
        </Menu>
      </Container>
    </Wrapper>
  );
}

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  line-height: 10vh;
  z-index: 2;
  transition: all 0.50s linear;

  @media only screen and (max-width: 800px) {
    position: fixed;
    top: 0;
  } 
`;
const Container = styled.div`
  padding-left: 8%;
  padding-right: 7%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    padding-left: 5%;
    padding-right: 4%;
  } 
  @media only screen and (max-width: 500px) {
    padding-right: 2%;
  } 
`;

const Brand = styled.div`
  font-family: "Sacramento", cursive;
  font-size: 1.5em;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  font-size: 1.2em;

  .sun {
    color: #ecec70;
  }

  .twitter {
    color: #00acee;
  }
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  cursor: pointer;
`;
