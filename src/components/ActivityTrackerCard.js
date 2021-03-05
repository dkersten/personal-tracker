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
        width: calc(100% + 2rem);
        margin-left: -1rem;
        margin-top: calc(-1rem - 5px);
        margin-bottom: 2rem;

        &.exercise {
            background: #cb2d3e;
            background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);
            background: linear-gradient(to right, #ef473a, #cb2d3e);

        }

        &.career {
            background: #6a3093;
            background: -webkit-linear-gradient(to right, #a044ff, #6a3093);
            background: linear-gradient(to right, #a044ff, #6a3093);

        }

        &.finance {
            background-color: #4ede4d;
            background: -webkit-linear-gradient(to right, #4ede4d 0%, #21e277 100%);
            background-image: linear-gradient(to right, #4ede4d 0%, #21e277 100%);
        }

        &.personal {
            background: #0575E6;
            background: -webkit-linear-gradient(to right, #0575E6, #032abc);
            background: linear-gradient(to right, #0575E6, #032abc);

        }
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

    // function that dynamically styles the gradient bar on top of the card based on activity category
    const renderActivityGradientIndicator = () => {

        if (props.category === 'Exercise') {
            return(
                <div className="activity-type-indicator exercise"></div>
            )
        } else if (props.category === 'Career Growth') {
            return(
                <div className="activity-type-indicator career"></div>
            )
        } else if (props.category === 'Personal Finance') {
            return(
                <div className="activity-type-indicator finance"></div>
            )
        } else if (props.category === 'Personal Growth') {
            return(
                <div className="activity-type-indicator personal"></div>
            )
        }
    }

    return (
        <Card>
            { renderActivityGradientIndicator() }
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
