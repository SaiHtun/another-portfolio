import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '../../utility/photos';



export default function sectionOne() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
      <Title>My Hobbies 😂</Title>
      <Caption>Iphonegraphing 📸, playing guitar 🎸 and often going to the pet walking area and say Hi to them. 🐕 ❤️ 😅 </Caption>
      <MyPhotos>
        <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </MyPhotos>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-top: 50px;
  font-weight: 600;
  position: relative;
  display: inline-block;

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


  @media only screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

const Caption = styled.p`
  font-size: 15px;
  margin: 10px 0px;
`;

const MyPhotos = styled.div`
    img {
        object-fit: cover;
    }
`;
