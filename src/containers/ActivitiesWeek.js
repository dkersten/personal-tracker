import React from 'react'
import styled from 'styled-components'

import {headerMd} from '../mixins'

import ActivityTrackerCard from '../components/ActivityTrackerCard'

const ActivitiesWeek = () => {

    const Header = styled.h2`
     ${ headerMd }
    `

    const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    `

    return (
        <div>
            <Header>Activites This Last Week</Header>
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

export default ActivitiesWeek
