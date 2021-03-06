import React from 'react'
import styled from 'styled-components'

import {headerMd} from '../mixins'
import activities from '../ActivitiesTestData.js'

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
        align-items: stretch;
    `

const ActivitiesWeek = () => {

    return (
        <div>
            <Header><i className="fal fa-check"></i> Activites This Week</Header>
            <CardContainer className="card-container">

                {
                    activities.map(activity => <ActivityTrackerCard 
                        key={activity.id}
                        category={activity.activityCategory}
                        name={activity.activityName}
                        date={activity.activityDate}
                        description={activity.activityDescription}
                    />)
                }
            </CardContainer>
        </div>
    )
}

export default ActivitiesWeek
