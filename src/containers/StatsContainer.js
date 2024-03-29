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

const StatsContainer = () => {
    return (
        <div>
            <Heading>Track Your Stats</Heading>
            <Paragraph>Coming Soon...</Paragraph>
        </div>
    )
}

export default StatsContainer
