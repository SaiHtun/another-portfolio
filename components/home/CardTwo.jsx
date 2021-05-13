import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Image from 'next/image';

const data = [
  {
    to: "/contact",
    url: "https://media.giphy.com/media/chfTWsqxm3BC63wgAy/giphy.gif",
    title: "Contact",
    text: "Available to convert the idea to the reality.",
    cta: "More",
  },
  {
    to: "/projects",
    url: "/project.jpg",
    title: "Projects",
    text: "Design & Web app Development ",
    cta: "More",
  },
];

const Card = ({ up, zoom }) => {
  const [push, setPush] = useState(-80);

  useEffect(() => {
    if (up === "") {
      return;
    } else if (up === "down") {
      setPush(push - 80);
    } else if (up === "up") {
      setPush(push + 80);
    }
  }, [up]);

  return (
    <Wrapper>
      <Container push={push} zoom={zoom}>
        {data.map((item, i) => (
          <Item key={i} img={item.url} zoom={zoom}>
            <Image src={item.url} 
              alt={item.title}
              layout="fill"
              objectFit="cover"
              quality="100"
              priority
            ></Image>
            <Content className="content" zoom={zoom}>
              <Title>{item.title}</Title>
              <Link href={item.to}>
                <CTA className="cta">{item.cta}</CTA>
              </Link>
              <Text> {item.text}</Text>
            </Content>
            <FollowContent zoom={zoom}>
              <FollowTitle>{item.title}</FollowTitle>
              <Link href={item.to}>
                <FollowCTA>{item.cta}</FollowCTA>
              </Link>
            </FollowContent>
            <Overlay></Overlay>
          </Item>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Card;

const FollowContent = styled.div`
  text-align: center;
  z-index: 2;
  display: none;

  ${(props) =>
    props.zoom &&
    css`
      display: block;
    `};

  @media only screen and (max-width: 800px) {
    display: block;
  }
`;

const FollowTitle = styled.h1`
  font-size: 1.5em;
  font-family: "Ribeye Marrow", cursive;
  margin: 10px 0;
`;

const FollowCTA = styled.p`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid whitesmoke;
  padding: 10px 0px;
  font-size: 18px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: black;
  transition: all 0.5s ease-in-out;

  :hover {
    opacity: 0.3;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;

  :hover {
    .content {
      opacity: 1;
    }
    .cta {
      margin: 25px 0;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  transform: ${(props) => `translateY(${props.push}vh)`};
  transition: transform 0.6s ease-in-out;

  ${(props) =>
    props.zoom &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translateY(0);
    `};

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateY(0) !important;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  position: relative;
  overflow: hidden;

  :hover {
    transform: scale(1.05);
  }

  ${(props) =>
    props.zoom &&
    css`
      width: 500px;
      height: 230px;
    `};

  @media only screen and (max-width: 800px) {
    width: 500px;
    height: 100%;
    margin: 10px 0px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0;
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.zoom &&
    css`
      display: none;
    `};

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "Ribeye Marrow", cursive;
  font-size: 3em;
`;

const Text = styled.p``;

const CTA = styled.p`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  font-size: 1.2em;
  border: 1px solid whitesmoke;

  :hover {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
`;
