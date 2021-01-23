import React from 'react'
import styled from 'styled-components'
import ActivitiesContainer from './ActivitiesContainer'
import TrackerContainer from './TrackerContainer'
import GoalsContainer from './GoalsContainer'
import StatsContainer from './StatsContainer'

const MainContainer = () => {

    const Main = styled.main`
        background: #25292E;
        height: 100vh;
        flex-grow: 1;
        overflow-y: scroll;
        padding: 2rem 3rem;
    `

    return (
        <Main>
            <ActivitiesContainer />
            <TrackerContainer />
            <GoalsContainer />
            <StatsContainer />
        </Main>
    )
}

export default MainContainer
