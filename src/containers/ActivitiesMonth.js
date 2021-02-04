import React from 'react'
import styled from 'styled-components'

import {headerMd} from '../mixins'

const ActivitiesMonth = () => {

    const MonthContainer = styled.div`
        margin-top: 2.5rem;
    `

    const Header = styled.h2`
     ${ headerMd }

        i {
            font-size: 1rem;
        }
    `

    return (
        <MonthContainer>
            <Header><i class="fal fa-check"></i> Activites This Last Month</Header>
        </MonthContainer>
    )
}

export default ActivitiesMonth
