import styled from "styled-components";
import { useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
// utilities
import fetchAPI from "../../utility/fetchAPI";
import { dashToSpace } from '../../utility/stringParser';
import { spaceToDash } from '../../utility/stringParser';



const GET_BLOG = `
  query($title: String!) {
    blogs(where: { title: $title }) {
      title
      caption
      description
      createdAt
      image {
        url
      }
      body {
        html
      }
    }
  }
`;



export async function getServerSideProps(context) {
  const data = await fetchAPI(GET_BLOG, {
    variables: { title: dashToSpace(context.params.title) },
  });

  return {
    props: { data },
  };
}

export default function Blog({ data }) {
  const blog = data.blogs[0];
  const slug = spaceToDash(blog.title);
    
  return (
    <MainLayout 
      title={blog.title} 
      description={blog.description}
      currentURL={`https://saihtun.xyz/blog/${slug}`}
      siteName="https://saihtun.xyz"
      previewImage={blog.image.url}
      twitterHandle="@SaiHtun19428970"
    >
      <Container>
          <TitleWrapper>
            <Title>{blog.title}</Title>
            <Caption>{blog.caption}</Caption>
            <Time>{new Date(`${blog.createdAt}`).toString()}</Time>
          </TitleWrapper>
          <Body
            dangerouslySetInnerHTML={{ __html: blog.body.html }}
          ></Body>
      </Container>
    </MainLayout>
  );
}

const Container = styled.div`
  overflow: hidden;
  padding: 0px 8%;
  font-weight: 400;
  margin-top: 50px;
  @media only screen and (max-width: 800px) {
    padding: 0px 5%;
    margin-top: 10vh;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 15vh;
    font-size: 16px !important;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 50px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const Time = styled.p`
  font-size: 15px;
  color: #9e9e9e;
`;

const Title = styled.h2`
  font-size: 3em;
  @media only screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const Caption = styled.small`
  font-size: 1.2em;
  font-style: italic;
  @media only screen and (max-width: 500px) {
    font-size: 1em;
  }
`;


const Body = styled.div`
  font-size: 16px;
  line-height: 28px;
  word-spacing: 2px;
  letter-spacing: -0, 003em;
 
  h2 {
    font-size: 2em;
    @media only screen and (max-width: 500px) {
      font-size: 1.3em;
    }
  }

  h3 {
    display: inline-block;
    position: relative;
    ::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 15px;
      background-color: skyblue;
      bottom: 0;
      left: 5px;
      z-index: -1;
    }
  }

  p {
    margin: 20px 0px;
    text-indent: 20px;
  }
  ul {
    padding: 0px 8%;
    @media only screen and (max-width: 800px) {
      padding: 0px 5%;
    }
    /* @media only screen and (max-width: 500px) {
      padding: 0px 0px 10px 30px;
    } */
    li {
      margin-bottom: 5px;
    }
  }
  img {
    min-width: 370px;
    width: 100%;
    min-height: 300px;
    height: 400px;
    margin: 20px 0px;
    object-fit: contain;
    @media only screen and (max-width: 500px) {
      min-height: 200px;
      height: 0px;
      min-width: 100%;
      object-fit: contain;
    }
  }
  blockquote {
    text-align: center;
    font-size: 16px;
    font-style: italic;
    color: #9e9e9e;
    line-height: 18px;
    margin: 10px 0px;
    
    ::before {
        content: open-quote;
    }
    ::after {
        content: close-quote;
    }

    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;