import React from 'react'
import styled from 'styled-components'

const MenuContainer = () => {

    const Menu = styled.nav`
        background: red;
        height: 100vh;
        flex-basis: 15vw;
        min-width: 350px;
        max-width: 800px;
    `

    return (
        <Menu>
            <ul>
                <li>Add Activities</li>
                <li>Goals</li>
                <li>Stats</li>
            </ul>
        </Menu>
    )
}

export default MenuContainer
