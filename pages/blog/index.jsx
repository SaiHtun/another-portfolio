import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../components/layouts/MainLayout';
import Blogs from '../../components/blog/Blogs';
import fetchAPI from '../../utility/fetchAPI';
import Line from '../../components/Line';

const GET_TITLES = `
  query {
    blogs {
      id
      title
      description
      image {
          url
      }
      createdAt
    }
  }
`;

export async function getServerSideProps() {
    const data = await fetchAPI(GET_TITLES);

    return {
      props: { data },
    }
  }

export default function blog({data}) {
    return (
        <MainLayout
            title="Sai | Blog" 
            description="i’m an ex-IT System Administrator ( VMware Certified ) and currently a modern JavaScript Stack developer, so i’ll be focus on writing Virtualization, Containerization, Cloud and of course JS stuffs. "
            currentURL="https://saihtun.xyz/blog"
            siteName="https://saihtun.xyz/blog"
            previewImage={data.blogs[0].image.url}
            twitterHandle="@SaiHtun19428970"
        >
            <Container>
                <Caption>
                Thanks for being here, this is my very first time trying to write blog from my entire life, i have quite a few purposes for doing that, so usually i love taking notes on a random paper and having a hard time finding them when it’s needed, thus i just thought of writing notes as a blog so i can always come back to refresh my memories and simply just want to share the technology related information to the beginner or who ever needed in a naive way, on the other hand English is my 4th language and i found myself grammatically horrible sometimes, so i just want to improve my english through writing blogs, i’m an ex-IT System Administrator ( VMware Certified ) and currently a modern JavaScript Stack developer, so i’ll be focus on writing Virtualization, Containerization, Cloud and of course JS stuffs. Please don't mind if you are having trouble reading my blog post and correct me if i was wrong, anyway i’m here to get started from one blog and many more to go yo !
                </Caption>
                <Line />
                <Blogs data={data}/>
                <Push />
            </Container>  
        </MainLayout>
    )
}

const Push = styled.div`
    height: 10vh;
`;

const Container = styled.div`
    min-height: 100%;
    padding: 0px 8%;
    margin-bottom: -10vh;

    @media only screen and (max-width: 800px) {
        margin-top: 10vh;
        padding: 0px 5%;
    }
    @media only screen and (max-width: 500px) {
        margin-top: 15vh;
    }
`;

const Caption = styled.p`
    text-align: center;
    margin: 30px 0px;
    line-height: 25px;
    text-indent: 50px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media only screen and (max-width: 500px) {
        text-align: justify;
    }
   
`;
