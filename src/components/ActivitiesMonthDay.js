import React from 'react'
import styled from 'styled-components'

import { defaultFont } from '../mixins'

// styling
    const DayCard = styled.div`
        background: #252A2E;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.25rem;
        border-radius: 10px;
        min-height: 79px;

        &.hidden {
            display: none;
        }

        &.has-activity {
            cursor: pointer;
        }
    `

    const ActivityDot = styled.span`
        background: #FD3E58;
        height: 8px;
        width: 8px;
        border-radius: 4px;
        display: block;
        margin-bottom: .5rem;
    `

    const DayNum = styled.span`
        ${ defaultFont }
        font-weight: 600;
        font-size: 1.75rem;
        margin-top: .75rem;
        margin-bottom: .5rem;
    `

const ActivitiesMonthDay = (props) => {
    console.log(props.num)

    const activityIndicator = () => {
        if (props.activity) {
            return(
                <ActivityDot className="activity-dot"></ActivityDot>
            )
        }
    }

    // add classes to hide last week row of calendar if its not needed and change cursor to pointer if day has activities (to open modal)
    const determineElementClassNames = () => {
        const elementClassNames = []
        
        if (props.num === null && props.index >= 35) {
            elementClassNames.push('hidden')
        } else if (props.activity) {
            elementClassNames.push('has-activity')
        }

        return elementClassNames.join(' ')
    }

    const openModal = () => {
        if (props.activity) {
            props.toggleModal("month overview")
        }
    }

    return (
        <DayCard
            className={determineElementClassNames()}
            onClick={openModal}
        >
            <DayNum className="day-num">{props.num}</DayNum>
            <span className="activity-indicator">
                { activityIndicator() }
            </span>
        </DayCard>
    )
}

export default ActivitiesMonthDay
