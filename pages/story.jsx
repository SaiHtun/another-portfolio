import React, { useState } from "react";
import styled from "styled-components";
import MainLayout from "../components/layouts/MainLayout";
import Sections from "../components/story/Sections";
import { useFooter } from "../contexts/footerContext";
import  { throttle } from "../utility/throttle"


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
    <MainLayout>
      <Container onWheel={(e) => throttle(e, handleWheel, 200)}>
        <Sections up={up}></Sections>
      </Container>
    </MainLayout>
  );
}

const Container = styled.div`
  overflow: hidden;
`;