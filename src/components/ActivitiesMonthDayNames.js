import React from 'react'
import styled from 'styled-components'

import { defaultFont } from '../mixins'

// styling
    const DayNames = styled.div`
        ${ defaultFont }
        display: flex;
        justify-content: space-around;

        span {
            text-align: center;
            font-weight: 600;
            font-size: 1.25rem;
            flex-basis: calc((100% / 7) - 2rem);
            margin-left: 1rem;
            margin-right: 1rem;
        }
    `

const ActivitiesMonthDayNames = () => {

    return (
        <DayNames>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
        </DayNames>
    )
}

export default ActivitiesMonthDayNames
