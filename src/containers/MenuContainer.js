import React from 'react'
import styled from 'styled-components'
import MainMenu from '../components/MainMenu'

const MenuContainer = () => {

    const Menu = styled.nav`
        background: #2F3438;
        height: 100vh;
        flex-basis: 15vw;
        min-width: 350px;
        max-width: 800px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    `

    return (
        <Menu>
            <MainMenu />
        </Menu>
    )
}

export default MenuContainer
