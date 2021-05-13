import React, { useState } from "react";
import styled from "styled-components";
import MainLayout from "../components/layouts/MainLayout";
import Sections from "../components/story/Sections";
import { useFooter } from "../contexts/footerContext";
import  { throttle } from "../utility/throttle";


export default function story() {
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
      title="Sai | Story" 
      description="Sai is expertised in modern
      Javascript Development Stacks, experienced in network and system
      administration, critical thinker, music and 🐶 lover,"
      currentURL="https://saihtun.xyz/story"
      siteName="https://saihtun.xyz/story"
      previewImage="./samurai.jpg"
      twitterHandle="@SaiHtun19428970"
    >
      <Container onWheel={(e) => throttle(e, handleWheel, 1000)}>
        <Sections up={up}></Sections>
      </Container>
    </MainLayout>
  );
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
