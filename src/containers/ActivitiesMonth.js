import React, { useEffect }  from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {headerMd, SevenColLayout, sectionLayoutMedium} from '../mixins'

import ActivitiesMonthDayNames from '../components/ActivitiesMonthDayNames'
import ActivitiesMonthDay from '../components/ActivitiesMonthDay'
import { fetchActivitiesMonth } from '../actions/activityMonthActions'

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

        ${ sectionLayoutMedium }
    `

    const CalendarDayContainer = styled.div`
        ${ SevenColLayout }
    `

const ActivitiesMonth = ({dispatch, loading, activities, hasErrors}, props) => {
    console.log(props)
    useEffect(() => {
        // call function to see what the current month is
        determineMonth()
        // call funtion to see what day of week the month started on
        determineFirstOfTheMonth()

        dispatch(fetchActivitiesMonth())
    }, [dispatch])

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
        // console.log(activities)
        const numDays = determineMonth()
        const firstDayOfMonth = determineFirstOfTheMonth()
        const daysArray = []
        
        // populate a standard calendar for the month
        for (let i= 0; i < 42; i++) {
            daysArray.push(<ActivitiesMonthDay
                key={i}
                num={null}
                activity={false}
                index={i}
            />)
        }

        // format date to something usable from activitiesMonth data in redux store and store it in an array. This will be used to check to see if an activity indicator should be added to a day (ActivitiesMonthDay component)
        const recordOfActivityDays = []

        if (typeof activities !== "undefined") {
            for (let i = 0; i < activities.length; i++) {
                const dateObj = new Date(activities[i].date)
                const day = dateObj.getDate()

                if (!recordOfActivityDays.includes(day)) {
                    recordOfActivityDays.push(day)
                }
            }
        }

        // insert days for this month into array using splice
        for (let i = 0; i < numDays; i++) {
            daysArray.splice(firstDayOfMonth + i, 1, <ActivitiesMonthDay
                key={firstDayOfMonth + i}
                num={i + 1}
                // dynamically check to see if an activity has been logged for a specific day based on recordOfActivityDays
                activity={recordOfActivityDays.includes(i + 1) ? true : false}
                toggleModal={props.toggleModal}
            /> )
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

const mapStateToProps = (state, ownProps) => ({
    loading: state.activities.loading,
    activities: state.activitiesMonth.activitiesMonth,
    hasErrors: state.activities.hasErrors
})

export default connect(mapStateToProps)(ActivitiesMonth)
