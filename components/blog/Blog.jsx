import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { spaceToDash } from '../../utility/stringParser';
import Image from 'next/image';

export default function blog({data}) {
    return (
        <Link href={`/blog/${spaceToDash(data.title)}`}>
            <Container >
                <ImageWrapper>
                    <Image src={data.image.url}
                        priority="100"
                        width={340}
                        height={180}
                        objectFit="cover"
                    ></Image>
                </ImageWrapper>
                <Content>
                    <Title>{data.title}</Title>
                    <Message>{data.description}</Message>
                    <Date>{data.createdAt}</Date>
                </Content>
            </Container>
        </Link>
    )
}

const ImageWrapper = styled.div`
    width: 340px;
`;

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