import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { defaultFont } from '../mixins'

const MainMenu = () => {
        
        const MenuNav = styled.ul`
            margin-top: 2rem;
        `

        const NavItem = styled.li`
            color: #f7f7f7;
            font-size: 1.5rem;
            ${ defaultFont }
            font-weight: 600;
            margin-bottom: 1rem;
            text-decoration: none;
        `
        const IconContainer = styled.span`
            display: inline-block;
            margin-right: .75rem;
        `

        const StyledLink = styled(NavLink)`
            text-decoration: none;
            color: #f7f7f7;
        `
    
    return (
        <MenuNav>

            <NavItem>
                <StyledLink to="activities"><IconContainer><i className="fal fa-plus"></i></IconContainer> Add Activities</StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to="tracker"><IconContainer><i className="fal fa-calendar-alt"></i></IconContainer> Tracker</StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to="goals"><IconContainer><i className="fal fa-trophy"></i></IconContainer> Goals</StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to="stats"><IconContainer><i className="fal fa-analytics"></i></IconContainer> Stats</StyledLink>
            </NavItem>

        </MenuNav>
    )
}

export default MainMenu
