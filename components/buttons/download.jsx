import React from "react";
import styled, { css } from "styled-components";
import { FiDownload } from "react-icons/fi";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function download({ drop, setDrop }) {
 

  const arrow = drop ? (
    <FaAngleRight className="arrow" />
  ) : (
    <FaAngleLeft className="arrow" />
  );

  return (
    <Container className="download" >
      <SlideContainer className="slideContainer" drop={drop} onClick={() => setDrop(!drop)}>
        <p className="downloadText">Download Resume</p>
      { arrow }
      </SlideContainer>
      <a href="/sai.pdf" download className="btn">
        <FiDownload></FiDownload>
        </a>
    </Container>
  );
}

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color:  #00acee;;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
  font-weight: 600;
  position: relative;
  z-index: 2;

  .downloadText {
    pointer-events: none;
  }


  .arrow {
    position: absolute;
    right: 5px;
    bottom: 15px;
    font-size: 18px;
  }

  

  ${props => props.drop && css`
    transform: translateX(-50px)
  `};
`;

const Container = styled.div`
  width: 180px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 30px;

  .btn {
    position: absolute;
    right: 20px;
    bottom: 15px;
  }

`;
