import React from "react";
import styled from "styled-components";
import { FaTwitter, FaGithubAlt, FaSun, FaRegMoon } from "react-icons/fa";

export default function Nav({ toggler, theme }) {
  const handleToggle = () => {
    toggler();
  };

  const sunMoon = theme === "light" ? <FaRegMoon /> : <FaSun className="sun" />;

  return (
    <Wrapper>
      <Container>
        <Brand>Sai</Brand>
        <Menu>
          <MenuItem onClick={handleToggle}>{sunMoon}</MenuItem>
          <MenuItem>
            {" "}
            <FaTwitter className="twitter" />
          </MenuItem>
          <MenuItem>
            {" "}
            <FaGithubAlt />
          </MenuItem>
        </Menu>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  line-height: 10vh;
`;
const Container = styled.div`
  padding-left: 8%;
  padding-right: 7%;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  font-family: "Sacramento", cursive;
  font-size: 1.5em;
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
