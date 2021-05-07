import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFooter } from "../contexts/footerContext";

export default function Footer({ theme }) {
  const { scrollCount, page } = useFooter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [scrollCount]);

  const loaderUrl = theme === "light" ? "./loading.svg" : "./darkLoading.svg";

  return (
    <Container>
      <Left></Left>
      <Center>
        <span>
          {" "}
          {scrollCount} / {page}
        </span>{" "}
        {show && <Loader url={loaderUrl} />}
      </Center>
      <Right>
        Designed and Developed by <span>Sai</span>{" "}
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  position: relative;
  left: 0;
  bottom: 0;
  padding: 0px 8%;
  line-height: 10vh;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`;

const Left = styled.p`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Center = styled.div`
  position: absolute;
  bottom: -33px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Loader = styled.div`
  width: 25px;
  height: 25px;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: cover;
  position: absolute;
  right: -40px;
`;

const Right = styled.p`
  font-size: 16px;
  span {
    font-family: "Sacramento", cursive;
  }

  @media only screen and (max-width: 800px) {
  }
`;
