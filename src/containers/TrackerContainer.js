// imports
import React from 'react'
import styled from 'styled-components'

import { headerLG } from '../mixins'

import ActivityTrackerCard from '../components/ActivityTrackerCard'

// component
const TrackerContainer = () => {
    
    const Header = styled.h2`
        ${ headerLG }
    `

    const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    `

    return (
        <div>
            <Header>Tracker Container</Header>
            <CardContainer className="card-container">
                <ActivityTrackerCard />
                <ActivityTrackerCard />
                <ActivityTrackerCard />
                <ActivityTrackerCard />
                <ActivityTrackerCard />
                <ActivityTrackerCard />
            </CardContainer>
        </div>
    )
}

export default TrackerContainer
