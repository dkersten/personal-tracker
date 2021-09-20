import React from 'react'
import styled from 'styled-components'

import { headerLG, defaultFont } from '../mixins'

// styling
const Heading = styled.h2`
    ${ headerLG }
`

const Paragraph = styled.p`
    ${ defaultFont }
`

const PlanningContainer = () => {
    return (
        <div>
            <Heading>Plan Ahead to Accomplish Your Goals</Heading>
            <Paragraph>Coming Soon...</Paragraph>
        </div>
    )
}

export default PlanningContainer
