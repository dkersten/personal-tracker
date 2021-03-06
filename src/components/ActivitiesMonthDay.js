import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { openModal } from '../actions/modalActions'

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

        @media only screen and (max-width: 675px) {
            background: rgba(0,0,0,0);
            min-height: 65px;
        }

        @media only screen and (max-width: 525px) {
            margin-top: .75rem;
        }

        @media only screen and (max-width: 499px) {
            margin-left: .5rem;
            margin-right: .5rem;
            flex-basis: calc((100% / 7) - 1rem);
        }

        @media only screen and (max-width: 345px) {
            flex-basis: calc((100% / 7) - 1rem);
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

        @media only screen and (max-width: 675px) {
            font-weight: 400;
            font-size: 1.25rem;
        }

        @media only screen and (max-width: 525px) {
            font-size: 1rem;
        }
    `

const ActivitiesMonthDay = (props) => {

    const dispatch = useDispatch()

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

    const openModalEventHandler = () => {
        dispatch(openModal(
            'monthView',
            getActivityDate()
        ))
    }

    const getActivityDate = () => {
        const year = new Date().getFullYear()
        let month = new Date().getMonth()
        month = month + 1
        const day = parseInt(props.num)

        // format date to send in API request
        const yearStr = year.toString()
        let monthStr = month.toString()
        let dayStr = day.toString()

        // add starting 0 if month/day is only 1 digit long
        if (monthStr.length === 1) {
            monthStr = '0' + monthStr
        }
        if (dayStr.length === 1) {
            dayStr = '0' + dayStr
        }

        const date = (yearStr + '-' + monthStr + '-' + dayStr )
        // console.log(date)
        return date
    }

    return (
        <DayCard
            className={determineElementClassNames()}
            onClick={openModalEventHandler}
        >
            <DayNum className="day-num">{props.num}</DayNum>
            <span className="activity-indicator">
                { activityIndicator() }
            </span>
        </DayCard>
    )
}

export default ActivitiesMonthDay
