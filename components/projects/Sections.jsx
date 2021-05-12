import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Project from './Project';
import { useFooter } from '../../contexts/footerContext';

const data = [
    {
        name: "Outstagramm ",
        githubURL: "https://github.com/SaiHtun/outstagramm",
        websiteURL: "https://outstagramm-2bbb5.web.app/timeline",
        imageURL: "/outstagramm.png",
        msg: `This is my very first React and Firebase web app, a clone version of "Instagram" and I named it "Outstagramm" 😅, a very simple basic crud app, I made it with no security or performance concerns, probably require tons of refactoring too but let me just keep it that way for now 😬, and it might contain only 0.01% of the actual "Instagram" features but kindly have a look and feel free to test.`
    },
    {
        name: "Telemartmyanmar ",
        githubURL: "https://github.com/SaiHtun/telemartmyanmar",
        websiteURL: "https://www.telemartmyanmar.com/",
        imageURL: "/telemart.png",
        msg: `The initial version of this website will only serve as a look book ( displaying available items from the store ) and soon to be added payment and many more features in the future when the company is ready for the delivery infrastructure and online payment. The tech stack I've used are - React, ApolloGraphql, GraphCMS, and Vercel.`
    },
    {
        name: "SPS ",
        githubURL: "https://github.com/SaiHtun/sps-business-group",
        websiteURL: "https://www.spsbusinessgroup.com/",
        imageURL: "/sps.png",
        msg: `A Company portfolio website for SPS business group. built with Typescript, Next.js, and Vercel, i know it is overkilled to use Typescript for this basic landing page, but yeah i used it just for the learning purposes.`
    },

]


export default function sections({up }) {
  const [push, setPush] = useState(0);
  const { scrollCount } = useFooter();

  useEffect(() => {
    if (up === "") {
      return;
    } else if (up === "up") {
      setPush(push - 80);
    } else if ( up === "down") {
      setPush(push + 80)
    }

  }, [scrollCount]);

  return (
    <Container push={push}>
        {data.map((p, i) => (
            <Project key={i} data={p}/>
        ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0px 8%;
  transition: all .5s ease-in-out;
  transform: translateY(-80vh);
  transform: ${props => `translateY(${props.push}vh)`}; 

  @media only screen and (max-width: 800px) {
    transform: translateY(0px);
    height: max-content;
    padding: 0px 5%;
  } 
`;

