import React, { useState } from "react";
import styled from "styled-components";
import Line from '../../components/Line';
import Link from 'next/link';
import { FaGlobeAmericas, FaGithub } from "react-icons/fa";


export default function sectionOne({ data }) {
  
  return (
      <SectionOne >
        <Left url={data.imageURL}></Left>
        <Right>
          <ContentWrapper>
            <Title><span> {data.name}</span> 
                <Links>
                    <Link href={data.websiteURL}><FaGlobeAmericas /></Link>
                    <Link href={data.githubURL}><FaGithub /></Link>
                </Links>
            </Title>
            <Message>
             {data.msg}
            </Message>
          </ContentWrapper>
        </Right>
        <Line></Line>
      </SectionOne>
  );
}



const SectionOne = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding-top: 5px;

`;

const Links = styled.div`
    margin-left: 20px;
`;

const Left = styled.div`
  width: 100%;
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
  object-fit: contain;

  @media only screen and (max-width: 800px) {
      background-position: top;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
  span {
      font-size: 20px;
      font-weight: 600;

  }

  svg {
      margin: 0px 5px;
      font-size: 1.5em;
      z-index: 10;
      cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    margin: 20px 0px;
  }
`;

const Message = styled.p`
  line-height: 30px;
`;

const ContentWrapper = styled.div`
  padding: 0px 30px;
  z-index: 10;

  @media only screen and (max-width: 800px) {
    padding: 0px 0px;

  }
`;
