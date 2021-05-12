import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Thankyou() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 2000);
    }, [])

    return (
        <Container>
            <h2>Thanks for your message, i'll be right back to you shortly!</h2>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;