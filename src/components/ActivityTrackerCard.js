// imports
import React from 'react'
import styled from 'styled-components'

import { CardBaseStyling } from '../mixins'

const ActivityTrackerCard = () => {

    const Card = styled.div`
        ${CardBaseStyling}
        max-width: 275px;
        padding-top: calc(1rem + 5px);

        .top {
            display: flex;
            justify-content: space-between;
            margin-bottom: .5rem;

            h3 {
                font-size: 1.5rem;
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

    return (
        <Card>
            <div className="activity-type-indicator"></div>
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
