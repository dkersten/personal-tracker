import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { defaultFont } from '../mixins'

// styling
    const MenuNav = styled.ul`
        margin-top: 2rem;

        @media only screen and (max-width: 1199px) {
            display: flex;
            margin: 1rem;
        }
    `

    const NavItem = styled.li`
        color: #f7f7f7;
        font-size: 1.5rem;
        ${ defaultFont }
        font-weight: 600;
        margin-bottom: 1rem;
        text-decoration: none;

        @media only screen and (max-width: 1199px) {
            margin: 0 1rem;
        }

        @media only screen and (max-width: 799px) {
            font-size: 1.25rem;
        }
    `
    const IconContainer = styled.span`
        display: inline-block;
        margin-right: .75rem;

        @media only screen and (max-width: 1199px) {
            margin-right: .25rem;
        }

        @media only screen and (max-width: 679px) {
            margin-right: 0;
            font-size: 1.5rem;
        }
    `

    const StyledLink = styled(NavLink)`
        text-decoration: none;
        color: #f7f7f7;
        position: relative;
        z-index: 1;
        color: #f7f7f7;
        overflow: hidden;
        background: linear-gradient(to right, #17A4F6, #17A4F6 49.8%, #f7f7f7 49.8%, #f7f7f7 105%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position .15s linear;

        &:hover {
            background-position: 0 100%;
        }

        span.link-text {
            @media only screen and (max-width: 679px) {
                display: none;
            }
        }
    `

const MainMenu = () => {
    
    return (
        <MenuNav>

            <NavItem>
                <StyledLink to="activities"><IconContainer><i className="fal fa-plus"></i></IconContainer> <span className="link-text">Add Activities</span></StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to="tracker"><IconContainer><i className="fal fa-calendar-alt"></i></IconContainer> <span className="link-text">Tracker</span></StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to="goals"><IconContainer><i className="fal fa-trophy"></i></IconContainer> <span className="link-text">Goals</span></StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to="stats"><IconContainer><i className="fal fa-book"></i></IconContainer> <span className="link-text">Planning</span></StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to="stats"><IconContainer><i className="fal fa-analytics"></i></IconContainer> <span className="link-text">Stats</span></StyledLink>
            </NavItem>

        </MenuNav>
    )
}

export default MainMenu
