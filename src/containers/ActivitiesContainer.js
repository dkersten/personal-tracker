import React from 'react'
import styled from 'styled-components'
import { headerLG } from '../mixins'

const ActivitiesContainer = () => {

    const Header = styled.h2`
        ${ headerLG }
    `

    return (
        <div>
            <Header>See Your Activity</Header>
        </div>
    )
}

export default ActivitiesContainer
