import React from 'react'
import styled from 'styled-components'

import MainMenu from '../components/MainMenu'

// styling
    const Menu = styled.nav`
        background: #2F3438;
        height: 100vh;
        flex-basis: 15vw;
        min-width: 350px;
        max-width: 800px;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        @media only screen and (max-width: 1199px) {
            /* flex-basis: 100%; */
            max-width: 100%;
            border-bottom: 2px solid #1c1c1c;
            max-height: 65px;
        }
    `

const MenuContainer = () => {

    return (
        <Menu>
            <MainMenu />
        </Menu>
    )
}

export default MenuContainer
