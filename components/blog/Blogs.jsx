import React, { useEffect } from 'react';
import styled from 'styled-components';
import Blog from './Blog';


export default function blog({data}) {
    return (
        <Container>
            {data.blogs.map((blog) => {
                blog.createdAt = new Date(blog.createdAt).toLocaleDateString()
                return (
                <Blog key={blog.id} data={blog}/>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    margin: 100px 0px;    
`;