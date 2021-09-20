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

const GoalsContainer = () => {
    return (
        <div>
            <Heading>Your Completed Goals</Heading>
            <Paragraph>Coming Soon...</Paragraph>
        </div>
    )
}

export default GoalsContainer
