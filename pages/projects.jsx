import React, { useState } from 'react'
import styled, { css } from "styled-components";
import MainLayout from '../components/layouts/MainLayout';
import { useFooter } from "../contexts/footerContext";
import Sections from '../components/projects/Sections';
import  { throttle } from "../utility/throttle";

export default function projects() {
    const [up, setUp] = useState("");
  const { scrollCount, setScrollCount } = useFooter();

  const handleWheel = (e) => {
    if (e.deltaY > 4 ) {
      setUp("up");
      if (scrollCount < 3) {
        setScrollCount(scrollCount + 1);
      }
    } else if (e.deltaY < -4  && up !== "") {
      setUp("down");
      if (scrollCount > 1) setScrollCount(scrollCount - 1);
    }
  };


    return (
        <MainLayout
        title="Sai | Projects" 
        description="Outstagramm is an Instagram clone build with React & Firebase, Telemartmyanmar is a LookBook webapp build with React & GraphCMS."
        currentURL="https://https://outstagramm-2bbb5.web.app/timeline"
        siteName="https://telemartmyanmar.com"
        previewImage="./outstagramm.png"
        twitterHandle="@SaiHtun19428970"
        >
            <Container onWheel={(e) => throttle(e, handleWheel, 1000)}>
                <Sections up={up}></Sections>
            </Container>
        </MainLayout>
    )
}

const Container = styled.div`
   overflow: hidden;
  :hover {
    cursor: url("/scroll50.png"), auto;
  }

  @media only screen and (max-width: 800px) {
    margin-top: 10vh;

    :hover {
      cursor: auto;
    }
  } 
`;


