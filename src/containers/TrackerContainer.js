// imports
import React from 'react'
import styled from 'styled-components'

import { headerLG } from '../mixins'

import ActivitiesWeek from './ActivitiesWeek'
import ActivitiesMonth from './ActivitiesMonth'
import ActivitiesYear from './ActivitiesYear'

// styling
    const Header = styled.h2`
        ${ headerLG }
        margin-bottom: 3rem;
    `

const TrackerContainer = () => {

    return (
        <div>
            <Header>Tracker Container</Header>
            <ActivitiesWeek />
            <ActivitiesMonth />
            <ActivitiesYear />
        </div>
    )
}

export default TrackerContainer
