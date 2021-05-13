import Hero from "../components/home/Hero";
import MainLayout from "../components/layouts/MainLayout";
import styled from 'styled-components';

export default function Home(props) {

  return (
    <MainLayout 
      title="Sai | Home" 
      description="A designer who can code, ex-IT system administrator, JavaScript, TypeScript, React and GraphQL enthusiast."
      currentURL="https://saihtun.xyz"
      siteName="https://saihtun.xyz"
      previewImage="./la.jpg"
      twitterHandle="@SaiHtun19428970"
    >
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