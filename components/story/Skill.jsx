import React from "react";
import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiNetlify,
  SiAmazonaws,
  SiGithub,
  SiMicrosoftazure,
} from "react-icons/si";

const data = [
  "Comfortable building a Static Site with pure HTML, CSS & Vanila Javascript or a combination of React and a SSR/SSG framework like Next.js, i love working with styled-components for styling, but able to adopt any styling libraries.",
  "Love building a Single Page Application and working with a virtual DOM framework like React and Vue, able to adopt any framework which is based on reactivity system, basically love declarative framework.",
  "Architecting JSON REST API or GraphQL API with Node.js, Express.js, ApolloGrahQL. Currently adopting TypeScript, Nexus & prisma for building GraphQL API, able to work with SQL, NoSQL in a declarative way with ORM.",
  "I used to be a IT system administrator and VMware Certified Data Center Virtualization Professional, thus i know thoroughly about how the Compute, Network & Storage fit into together, comfortable working with Virtualization, Containerization and Cloud, and able to adopt any CDN or Public Cloud provider.",
];

export default function sections() {
  return (
    <Container>
      <Title>
        Expertise in the following Tech Stack{" "}
        <span> ,but never limited to.</span>
      </Title>
      <Content>
        <Logos>
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <SiNextDotJs />
          <SiNodeDotJs />
          <SiGraphql />
          <SiPostgresql />
          <SiMongodb />
          <SiDocker />
          <SiNetlify />
          <SiMicrosoftazure />
          <SiAmazonaws />
          <SiGithub />
        </Logos>
        <Messages>
          {data.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </Messages>
      </Content>
      <SiReact className="react" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .react {
    position: absolute;
    bottom: -260px;
    right: -100px;
    font-size: 60vw;
    opacity: 0.3;
    color: #61dbfb;

    @media only screen and (max-width: 600px) {
        bottom: -50px;
  }
  }
`;

const Content = styled.div`
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-top: 50px;
  font-weight: 600;
  position: relative;
  display: inline-block;

  @media only screen and (max-width: 800px) {
    font-size: 18px;
    span {
      display: none;
    }
  }

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 10px;
    left: 2px;
    bottom: -3px;
    z-index: -1;
    background-color: #61dbfb !important;
    opacity: 0.3;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const Messages = styled.ul`
  margin-top: 20px;
  padding-left: 50px;
  font-size: 16px;

  li {
    margin-bottom: 20px;
    line-height: 30px;
  }

  @media only screen and (max-width: 800px) {
    padding-left: 20px;
  }
`;
