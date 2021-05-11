import React from "react";
import styled from "styled-components";

export default function Line() {
  return <Container></Container>;
}

const Container = styled.div`
  margin: 50px 0px;
  width: 100%;
  height: 1px;
  background-color: #505050;
  display: none;
  opacity: 0.8;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`;
