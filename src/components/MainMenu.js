import React from 'react'
import styled from 'styled-components'

const MainMenu = () => {
        
        const MenuNav = styled.ul`
            margin-top: 2rem;
        `

        const NavItem = styled.li`
            color: #f7f7f7;
            font-size: 1.5rem;
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 600;
            margin-bottom: 1rem;
        `
        const IconContainer = styled.span`
            display: inline-block;
            margin-right: .75rem;
        `
    
    return (
        <MenuNav>
            <NavItem><IconContainer><i class="fal fa-plus"></i></IconContainer> Add Activities</NavItem>
            <NavItem><IconContainer><i class="fal fa-calendar-alt"></i></IconContainer> Tracker</NavItem>
            <NavItem><IconContainer><i class="fal fa-trophy"></i></IconContainer> Goals</NavItem>
            <NavItem><IconContainer><i class="fal fa-analytics"></i></IconContainer> Stats</NavItem>
        </MenuNav>
    )
}

export default MainMenu
