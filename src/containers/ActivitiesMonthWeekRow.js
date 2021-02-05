import React from 'react'
import styled from 'styled-components'

import { SevenColLayout } from '../mixins'

import ActivitiesMonthDay from '../components/ActivitiesMonthDay'

// styling
const WeekRow = styled.div`
        ${ SevenColLayout }
    `

const ActivitiesMonthWeekRow = () => {

    return (
        <WeekRow>
            <ActivitiesMonthDay num={1} activity={true} />
            <ActivitiesMonthDay num={2} activity={true} />
            <ActivitiesMonthDay num={3} activity={false} />
            <ActivitiesMonthDay num={4} activity={true} />
            <ActivitiesMonthDay num={5} activity={true} />
            <ActivitiesMonthDay num={6} activity={true} />
            <ActivitiesMonthDay num={7} activity={false} />
        </WeekRow>
    )
}

export default ActivitiesMonthWeekRow
