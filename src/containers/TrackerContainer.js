// imports
import React from 'react'
import styled from 'styled-components'

import { headerLG } from '../mixins'

import ActivitiesWeek from './ActivitiesWeek'

// component
const TrackerContainer = () => {
    
    const Header = styled.h2`
        ${ headerLG }
    `

    return (
        <div>
            <Header>Tracker Container</Header>
            <ActivitiesWeek />
        </div>
    )
}

export default TrackerContainer
