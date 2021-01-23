import React from 'react'
import styled from 'styled-components'

const Welcome = () => {

    const Container = styled.div`
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
        font-size: 1.5rem;
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 800px;
        margin: auto;
        line-height: 1.4;
        color: #f7f7f7;
    `

    return (
        <Container>
            <p>Welcome to the Personal Tracker! Focus on personal improvement by gamifying the process.</p>
        </Container>
    )
}

export default Welcome
