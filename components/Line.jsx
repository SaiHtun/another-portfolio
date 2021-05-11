import React from "react";
import styled from "styled-components";

export default function Line() {
  return <Container></Container>;
}

const Container = styled.div`
  margin: 50px 0px;
  width: 100%;
  height: 2px;
  background-color: #afafaf;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`;
