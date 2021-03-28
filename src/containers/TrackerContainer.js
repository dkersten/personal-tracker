// imports
import React, { useState } from 'react'
import styled from 'styled-components'

import { headerLG } from '../mixins'

import ActivitiesWeek from './ActivitiesWeek'
import ActivitiesMonth from './ActivitiesMonth'
import ActivitiesYear from './ActivitiesYear'
import ReusableModal from '../components/Modal'

// styling
    const Header = styled.h2`
        ${ headerLG }
        margin-bottom: 3rem;
    `

const TrackerContainer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContentType, setModalContentType] = useState("general")

    const toggleModal = (type) => {
        setIsModalOpen(!isModalOpen)
        setModalContentType(type)
    }

    return (
        <div>
            <Header>Tracker Your Activities</Header>
            <ActivitiesWeek />
            <ActivitiesMonth 
                toggleModal={toggleModal}
            />
            <ActivitiesYear 
                toggleModal={toggleModal}
            />
            
            <ReusableModal
                show={isModalOpen}
                toggleModal={toggleModal}
                modalContentType={modalContentType}
            />
        </div>
    )
}

export default TrackerContainer
