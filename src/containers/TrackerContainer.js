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
    const [modalContentType, setModalContentType] = useState("general")

    const toggleModal = (type) => {
        setIsModalOpen(!isModalOpen)
        setModalContentType(type)
    }

    return (
        <div>
            <button onClick={toggleModal}>Open Toggle</button>
            <Header>Tracker Container</Header>
            <ActivitiesWeek />
            <ActivitiesMonth 
                toggleModal={toggleModal}
                test={"fuck"}
            />
            <ActivitiesYear />
            
            <ReusableModal
                show={isModalOpen}
                toggleModal={toggleModal}
                modalContentType={modalContentType}
            />
        </div>
    )
}

export default TrackerContainer
