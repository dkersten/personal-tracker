// imports
import React, { useState } from 'react'
import styled from 'styled-components'

// import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

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

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div>
            <button onClick={toggleModal}>Open Toggle</button>
            <Header>Tracker Container</Header>
            <ActivitiesWeek />
            <ActivitiesMonth />
            <ActivitiesYear />
            
            <ReusableModal
                show={isModalOpen}
                toggleModal={toggleModal}
            />
        </div>
    )
}

export default TrackerContainer
