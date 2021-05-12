import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { spaceToDash } from '../../utility/stringParser';

export default function blog({data}) {
    return (
        <Link href={`/blog/${spaceToDash(data.title)}`}>
            <Container >
                <Image url={data.image.url}></Image>
                <Content>
                <Title>{data.title}</Title>
                <Message>{data.description}</Message>
                <Date>{data.createdAt}</Date>
                </Content>
            </Container>
        </Link>
    )
}

const Container = styled.div`
    width: 340px;
    height: 400px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`;

const Image = styled.div`
    width: 100%;
    background-image: ${props => `url(${props.url})`};
    background-position: center;
    background-size: cover;
`;

const Content = styled.div`
    padding: 20px;
    font-size: 15px;
    position: relative;
`;

const Title = styled.h3`
    font-weight: 400;
`;

const Message = styled.div`
    margin-top: 15px;
    color: grey;
`;

const Date = styled.p`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;