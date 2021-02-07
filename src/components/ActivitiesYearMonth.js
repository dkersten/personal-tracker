import React from 'react'
import styled from 'styled-components'

import MonthCard from './MonthCard'

// styling
    const MonthsContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    `

const ActivitiesYearMonth = () => {
    return (
        <MonthsContainer>
            <MonthCard />
            <MonthCard />
            <MonthCard />
            <MonthCard />
            <MonthCard />
            <MonthCard />
        </MonthsContainer>
    )
}

export default ActivitiesYearMonth
