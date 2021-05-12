import React, { useState } from "react";
import styled from "styled-components";
import Line from "../../components/Line";
import Link from "next/link";
import { FaGlobeAmericas, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

export default function sectionOne({ data }) {
  const router = useRouter();

  const handlePush = (e) => {
    router.push(e);
  };

  return (
    <SectionOne>
      <Left url={data.imageURL}></Left>
      <Right>
        <ContentWrapper>
          <Title>
            <span> {data.name}</span>
            <Links>
              <IconWrapper onClick={() => handlePush(data.websiteURL)}>
                <FaGlobeAmericas />
              </IconWrapper>
              <IconWrapper onClick={() => handlePush(data.githubURL)}>
                <FaGithub />
              </IconWrapper>
            </Links>
          </Title>
          <Message>{data.msg}</Message>
        </ContentWrapper>
      </Right>
      <Line></Line>
    </SectionOne>
  );
}

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionOne = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding-top: 20px;

  @media only screen and (max-width: 800px) {
    grid-template-rows: 180px 1fr;
  }
`;

const Links = styled.div`
  margin-left: 20px;
  display: flex;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-width: 800px) {
    background-position: top;
    background-size: contain;
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
    font-size: 1.2em;
    z-index: 10;
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    margin: 20px 0px;
  }
`;

const Message = styled.p`
  line-height: 30px;
  width: 100%;
  font-size: 16px;
`;

const ContentWrapper = styled.div`
  padding: 0px 30px;
  z-index: 10;

  @media only screen and (max-width: 800px) {
    padding: 0px 0px;
  }
`;
