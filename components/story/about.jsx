import React from "react";
import styled from "styled-components";
import Download from "../buttons/download";

export default function sectionOne() {
  return (
      <SectionOne>
        <Left></Left>
        <Right>
          <ContentWrapper>
            <Title>Ohaiyo ~</Title>
            <Message>
              My name is Sai, a designer who can code, expertised in modern
              Javascript Development Stacks, experienced in network and system
              administration, critical thinker, music and 🐶 lover, you only
              need to tell me about your business objective, the context of
              product use and goals, then i can turn your wishes into reality in
              the most creative ways!
            </Message>
            <Download />
          </ContentWrapper>
        </Right>
      </SectionOne>
  );
}



const SectionOne = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr)
  }
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./kitty.jpg");
  background-position: center;
  background-size: cover;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;

  @media only screen and (max-width: 800px) {
    margin: 20px 0px;
  }
`;

const Message = styled.p`
  line-height: 30px;
`;

const ContentWrapper = styled.div`
  padding: 0px 30px;

  @media only screen and (max-width: 800px) {
    padding: 0px 0px;

  }
`;
