import React from 'react'
import styled from 'styled-components'
import { headerLG } from '../mixins'
import AddActivityForm from '../components/AddActivityForm'

const ActivitiesContainer = () => {

    const Header = styled.h2`
        ${ headerLG }
    `

    return (
        <div>
            <Header>Add an Activity</Header>
            <AddActivityForm />
        </div>
    )
}

export default ActivitiesContainer
