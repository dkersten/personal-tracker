// imports
import React from 'react'
import styled from 'styled-components'

import { CardBaseStyling } from '../mixins'

const ActivityTrackerCard = () => {

    const Card = styled.div`
        ${CardBaseStyling}
        max-width: 275px;
    `

    return (
        <Card>
            <div className="top">
                <h3>Activity Name</h3>
                <span className="activity">
                    <i class="far fa-running"></i>
                </span>
            </div>
            <span className="date">
                Jan. 23, 2021
            </span>
            <div className="description">
            No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza.
            </div>
        </Card>
    )
}

export default ActivityTrackerCard
