import React from 'react'
import styled from 'styled-components'

import { headerMd } from '../mixins'

import ActivitiesYearMonth from '../components/ActivitiesYearMonth'

// styling 
    const YearContainer = styled.div`
        margin-top: 2.5rem;
    `

    const Header = styled.h2`
        ${ headerMd }
        
        i {
            font-size: 1rem;
        }
    `

    const CalendarMonthContainer = styled.div`
        margin-top: 1.5rem;
        background: #2F3438;
        max-width: calc(((300px + 1.5rem) * 3) - 1.5rem);
        padding: 2rem;
        border-radius: 12px;
    `

const ActivitiesYear = () => {
    return (
        <YearContainer>
            <Header><i className="fal fa-check"></i> Activities This Year</Header>
            <CalendarMonthContainer>
                <ActivitiesYearMonth />
            </CalendarMonthContainer>
        </YearContainer>
    )
}

export default ActivitiesYear
