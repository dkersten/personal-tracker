// imports
import React from 'react'
import styled from 'styled-components'

import { CardBaseStyling } from '../mixins'

// styling
    const Card = styled.div`
    ${CardBaseStyling}
    max-width: 300px;
    padding-top: calc(1rem + 5px);
    flex-basis: calc(33.333% - 1.5rem);

    .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        h3 {
            font-size: 1.25rem;
            line-height: 1.3;
            flex-basis: 85%;
            margin-right: 1rem;
        }

        i {
            color: #FF3E58;
            font-size: 2rem;
            flex-basis: calc(15% - 1rem);
        }
    }

    span.date {
        color: #03A5F5;
        margin-bottom: 1rem;
        display: inline-block;
    }

    .description {
        line-height: 1.4;
        font-size: 1.1rem;
    }

    .activity-type-indicator {
        height: 5px;
        background-color: #4ede4d;
        background-image: linear-gradient(90deg, #4ede4d 0%, #21e277 100%);
        width: calc(100% + 2rem);
        margin-left: -1rem;
        margin-top: calc(-1rem - 5px);
        margin-bottom: 2rem;
        /* border-radius: */
    }
    `

const ActivityTrackerCard = (props) => {

    // function that dynamically returns an icon based on activity category
    const renderActivityIcon = () => {
        
        if (props.category === 'Exercise') {
            return(
                <i class="fad fa-running"></i>
            )
        } else if (props.category === 'Career Growth') {
            return(
                <i class="fad fa-code"></i>
            )
        } else if (props.category === 'Personal Finance') {
            return(
                <i class="fad fa-sack-dollar"></i>
            )
        } else if (props.category === 'Personal Growth') {
            return(
                <i class="fad fa-user-astronaut"></i>
            )
        }
    }

    return (
        <Card>
            <div className="activity-type-indicator"></div>
            <div className="top">
                <h3>{props.category}: {props.name}</h3>
                <span className="activity">
                    { renderActivityIcon() }
                </span>
            </div>
            <span className="date">
                {props.date}
            </span>
            <div className="description">
            {props.description}
            </div>
        </Card>
    )
}

export default ActivityTrackerCard
