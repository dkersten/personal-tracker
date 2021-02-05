import React from 'react'
import styled from 'styled-components'

import { defaultFont } from '../mixins'

const ActivitiesMonthDay = (props) => {

    const DayCard = styled.div`
        background: #252A2E;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.25rem;
        border-radius: 10px;
    `

    const ActivityDot = styled.span`
        background: #17A4F6;
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

    const activityIndicator = () => {
        if (props.activity) {
            return(
                <ActivityDot className="activity-dot"></ActivityDot>
            )
        }
    }

    return (
        <DayCard>
            <DayNum className="day-num">{props.num}</DayNum>
            <span className="activity-indicator">
                { activityIndicator() }
            </span>
        </DayCard>
    )
}

export default ActivitiesMonthDay
