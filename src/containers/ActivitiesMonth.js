import React, { useEffect }  from 'react'
import styled from 'styled-components'

import {headerMd} from '../mixins'

import ActivitiesMonthDayNames from '../components/ActivitiesMonthDayNames'
import ActivitiesMonthWeekRow from './ActivitiesMonthWeekRow'

// styling
    const MonthContainer = styled.div`
        margin-top: 2.5rem;
    `

    const Header = styled.h2`
     ${ headerMd }

        i {
            font-size: 1rem;
        }
    `

    const CalendarContainer = styled.div`
        margin-top: 1.5rem;
        background: #2F3438;
        max-width: calc(((300px + 1.5rem) * 3) - 1.5rem);
        padding: 2rem;
        border-radius: 12px;
    `

const ActivitiesMonth = () => {

    return (
        <MonthContainer>
            <Header><i className="fal fa-check"></i> Activites This Month</Header>

            <CalendarContainer>
                <ActivitiesMonthDayNames />
                <ActivitiesMonthWeekRow />
                <ActivitiesMonthWeekRow />
                <ActivitiesMonthWeekRow />
                <ActivitiesMonthWeekRow />
            </CalendarContainer>
        </MonthContainer>
    )
}

export default ActivitiesMonth
