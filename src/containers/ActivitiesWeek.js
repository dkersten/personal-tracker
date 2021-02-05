import React from 'react'
import styled from 'styled-components'

import {headerMd} from '../mixins'

import ActivityTrackerCard from '../components/ActivityTrackerCard'

// styling
    const Header = styled.h2`
     ${ headerMd }

        i {
            font-size: 1rem;
        }
    `

    const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    `

const ActivitiesWeek = () => {

    return (
        <div>
            <Header><i className="fal fa-check"></i> Activites This Week</Header>
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
