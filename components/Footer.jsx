import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFooter } from "../contexts/footerContext";
import { useTheme } from '../contexts/themeContext';
import  {  useRouter } from 'next/router';

export default function Footer() {
  const { scrollCount, page, setScrollCount } = useFooter();
  const { theme } = useTheme();
  const [show, setShow] = useState(false);
  const { route } = useRouter();

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [scrollCount]);

  useEffect(() => {
    setScrollCount(1)
    
  }, [])

  const loaderUrl = theme === "light" ? "./loading.svg" : "./darkLoading.svg";

  const noCount = scrollCount === 0? true: false;

  return (
    <Container>
      <Left></Left>
      <Center noCount={noCount} >
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
  display: ${props => props.noCount && "none"};

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
