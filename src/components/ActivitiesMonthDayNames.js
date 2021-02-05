import React from 'react'
import styled from 'styled-components'

import { defaultFont, SevenColLayout } from '../mixins'

// styling
    const DayNames = styled.div`
        ${ defaultFont }
        ${ SevenColLayout }

        span {
            text-align: center;
            font-weight: 600;
            font-size: 1.25rem;
        }
    `

const ActivitiesMonthDayNames = () => {

    return (
        <DayNames>
            <span>Sunday</span>
            <span>Monday</span>
            <span>Tuesday</span>
            <span>Wednesday</span>
            <span>Thursday</span>
            <span>Friday</span>
            <span>Saturday</span>
        </DayNames>
    )
}

export default ActivitiesMonthDayNames
