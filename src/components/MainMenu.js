import React from 'react'
import styled from 'styled-components'

const MainMenu = () => {
        
        const MenuNav = styled.ul`
            margin-top: 2rem;
        `

        const NavItem = styled.li`
            color: #f7f7f7;
            font-size: 1.2rem;
        `
    
    return (
            <MenuNav>
                <NavItem>Add Activities</NavItem>
                <NavItem>Tracker</NavItem>
                <NavItem>Goals</NavItem>
                <NavItem>Stats</NavItem>
            </MenuNav>
    )
}

export default MainMenu
