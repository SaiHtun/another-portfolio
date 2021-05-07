import Hero from "../components/home/Hero";
import MainLayout from "../components/layouts/MainLayout";
import styled from 'styled-components';

export default function Home() {
  return (
    <MainLayout>
      <Container>

      <Hero></Hero>
      </Container>
    </MainLayout>
  );
}

const Container = styled.div`
  @media only screen and (max-width: 800px) {
    margin-top: 10vh;
  } 
`;