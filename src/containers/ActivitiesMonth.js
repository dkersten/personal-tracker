import React, { useEffect }  from 'react'
import styled from 'styled-components'

import {headerMd, SevenColLayout} from '../mixins'

import ActivitiesMonthDayNames from '../components/ActivitiesMonthDayNames'
import ActivitiesMonthDay from '../components/ActivitiesMonthDay'

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

    const CalendarDayContainer = styled.div`
        ${ SevenColLayout }
    `

const ActivitiesMonth = () => {

    useEffect(() => {
        determineMonth()
    })

    // get current month and number of days in month
    const determineMonth = () => {
        const date = new Date()
        const currentMonth = date.getMonth()
        const currentYear = date.getFullYear()
        
        const getDaysInMonth = (month, year) => {
            let Currentmonth = month + 1
            return new Date(year, Currentmonth, 0).getDate()
        }
        
        return getDaysInMonth(currentMonth, currentYear)
    }

    // dynamically render the days in the month calendar
    const displayDays = () => {
        const numDays = determineMonth()
        const daysArray = []

        for (let i = 1; i <= numDays; i++) {
            daysArray.push(<ActivitiesMonthDay key={i} num={i} activity={true} />)
        }

        return daysArray
    }

    return (
        <MonthContainer>
            <Header><i className="fal fa-check"></i> Activites This Month</Header>

            <CalendarContainer>
                <ActivitiesMonthDayNames />
                {/* <ActivitiesMonthWeekRow />
                <ActivitiesMonthWeekRow />
                <ActivitiesMonthWeekRow />
                <ActivitiesMonthWeekRow /> */}
                <CalendarDayContainer>
                    { displayDays() }
                </CalendarDayContainer>
            </CalendarContainer>
        </MonthContainer>
    )
}

export default ActivitiesMonth
