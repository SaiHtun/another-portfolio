import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from './about';
import Skill from './Skill';
import Hobby from './Hobby';
import { useFooter } from '../../contexts/footerContext';

export default function sections({up }) {
  const [push, setPush] = useState(0);
  const { scrollCount } = useFooter();

  useEffect(() => {
    if (up === "") {
      return;
    } else if (up === "up") {
      setPush(push - 81);
    } else if ( up === "down") {
      setPush(push + 81)
    }

  }, [scrollCount]);

  return (
    <Container push={push}>
      <About />
      <Skill />
      <Hobby />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0px 8%;
  transition: all .5s ease-in-out;
  transform: translateY(-81vh);
  transform: ${props => `translateY(${props.push}vh)`}; 

  @media only screen and (max-width: 800px) {
    transform: translateY(0px);
    height: max-content;
    padding: 0px 5%;
  } 
`;

