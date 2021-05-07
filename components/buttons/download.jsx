import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FiDownload } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function download() {
  const [drop, setDrop] = useState(false);

  const arrow = drop ? (
    <FaAngleUp className="arrow" />
  ) : (
    <FaAngleDown className="arrow" />
  );

  return (
    <Container className="download" onClick={() => setDrop(!drop)}>
      <p>
        <span> Download Resume</span> {arrow}
      </p>
      <File drop={drop} className="downloadText">
        <a href="/images/myw3schoolsimage.jpg" download>
          <span>Sai's resume</span>
          <FiDownload />
        </a>
      </File>
    </Container>
  );
}

const Container = styled.div`
  width: 180px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  padding: 3px 10px;
  cursor: pointer;
  margin-top: 30px;

  .arrow {
    font-size: 20px;
    margin-left: 5px;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

const File = styled.div`
  position: absolute;
  color: #181818;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;
  z-index: -1;

  a {
    display: flex;
    justify-content: center;

    span {
      margin-right: 5px;
    }
  }

  ${(props) =>
    props.drop &&
    css`
      transform: translateY(40px);
      z-index: 2;
    `};
`;
