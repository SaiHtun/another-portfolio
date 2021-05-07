import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import { useFooter } from "../../contexts/footerContext";
import { AiFillAppstore } from "react-icons/ai";
import { GoScreenNormal } from "react-icons/go";
import  { throttle } from '../../utility/throttle';

export default function Hero({ theme }) {
  const [up, setUp] = useState("");
  const { scrollCount, setScrollCount } = useFooter();
  const [zoomOut, setZoomOut] = useState(false);

  const handleWheel = (e) => {
    if (e.deltaY > 4 ) {
      setUp("up");
      if (scrollCount < 2) {
        setScrollCount(scrollCount + 1);
      }
    } else if (e.deltaY < -4  && up !== "") {
      setUp("down");
      if (scrollCount > 1) setScrollCount(scrollCount - 1);
    }
  };

  const icon = zoomOut? <GoScreenNormal className="grid"/> : <AiFillAppstore className="grid"/>
  

  return (
    <Container zoom={zoomOut} onWheel={zoomOut ? undefined : (e) => throttle(e, handleWheel, 200)}>
      <CardOne up={up} zoom={zoomOut} />
      <CardTwo up={up} zoom={zoomOut} />
      <ZoomBtn
        zoom={zoomOut}
        theme={theme}
        onClick={() => setZoomOut(!zoomOut)}
      >
        <p>Zoom</p>
        {icon}
      </ZoomBtn>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: max-content;
  position: relative;
  padding: 0px 8%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(350px, 1fr));

  :hover {
    cursor: url("/scroll50.png"), auto;
  }
  ${(props) =>
    props.zoom &&
    css`
      :hover {
        cursor: auto;
      }
    `};

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;

    :hover {
      cursor: auto;
    }
  }
`;

const ZoomBtn = styled.div`
  width: 150px;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  color: whitesmoke;
  border: ${(props) =>
    props.theme === "light" && props.zoom
      ? `1px solid #181818`
      : `1px solid white`};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    color: ${props => props.zoom && "black"}
  }

  ${(props) =>
    props.zoom &&
    props.theme === "light" &&
    css`
      color: #181818;
    `};

  .grid {
    font-size: 30px;
    border: none;
    position: absolute;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  p {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  :hover {
    p {
      opacity: 0;
    }
    .grid {
      opacity: 1;
    }
  }
`;
