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
        // call function to see what the current month is
        determineMonth()
        // call funtion to see what day of week the month started on
        determineFirstOfTheMonth()
    })

    // get current month and number of days in month
    const determineMonth = () => {
        const date = new Date()
        const currentMonth = date.getMonth()
        const currentYear = date.getFullYear()
        
        // number of days in the current month
        const getDaysInMonth = (month, year) => {
            let Currentmonth = month + 1
            return new Date(year, Currentmonth, 0).getDate()
        }

        return getDaysInMonth(currentMonth, currentYear)
    }

    // determine what day is the first of the month
    const determineFirstOfTheMonth = () => {
        // get the date of the first day of the month
        var date = new Date()
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toString()

        // split date string into array to get day of week below
        const dateArr = firstDay.split(" ")

        // get day of the week (i.e. Sun, Mon) to use in if/else below
        const startingDay = dateArr[0]

        // index of day of the week (i.e.: Sun = 0, Tue = 2)
        if (startingDay === 'Sun') {
            return 0
        } else if (startingDay === 'Mon') {
            return 1
        } else if (startingDay === 'Tue') {
            return 2
        } else if (startingDay === 'Wed') {
            return 3
        } else if (startingDay === 'Thu') {
            return 4
        } else if (startingDay === 'Fri') {
            return 5
        } else if (startingDay === 'Sat') {
            return 6
        }
    }

    // dynamically render the days in the month calendar
    const displayDays = () => {
        const numDays = determineMonth()
        const firstDayOfMonth = determineFirstOfTheMonth()
        const daysArray = []
        
        // populate a standard calendar for the month
        for (let i= 0; i < 42; i++) {
            daysArray.push(<ActivitiesMonthDay key={i} num={null} activity={false} />)
        }

        // insert days for this month into array using splice
        for (let i = 0; i < numDays; i++) {
            daysArray.splice(firstDayOfMonth + i, 1, <ActivitiesMonthDay key={firstDayOfMonth + i} num={i + 1} activity={true} /> )
        }

        return daysArray
    }

    return (
        <MonthContainer>
            <Header><i className="fal fa-check"></i> Activites This Month</Header>

            <CalendarContainer>
                <ActivitiesMonthDayNames />
                <CalendarDayContainer>
                    { displayDays() }
                </CalendarDayContainer>
            </CalendarContainer>
        </MonthContainer>
    )
}

export default ActivitiesMonth
