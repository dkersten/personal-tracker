import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { CardBaseStyling, defaultFont } from '../mixins'
import { closeModal } from '../actions/modalActions'
import { modalState } from '../stateSelectors'

import { MonthModalActivity } from '../components/MonthModalActivity'

// styling
    const GeneralModal = styled(Modal)`
        
        .modal-content {
            ${CardBaseStyling}
            padding: 1rem;
        }

        .modal-header {
            border-bottom: none;
            padding-top: .25rem;
            padding-bottom: .5rem;
            
            h3, h3 span {
                font-size: 1.75rem;
                font-weight: 700;
                width: 100%;
                text-align: center;
                ${defaultFont}
                color: #FD3E58;
            }
        }

        .modal-footer {
            border-top: none;
            padding-bottom: 0;
            padding-top: 0;

            button {
                border: none;
                background: #FD3E58;
                font-size: 1.2rem;
                padding: .25rem 1rem;
                border-radius: 5px;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        * {
            color: #f7f7f7;
        }
    `

const ReusableModal = () => {

    const state = useSelector(modalState)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [dayActivities, setDayActivities] = useState(null)

    useEffect(() => {
        if (state.modalType !== null) {
            setModalIsOpen(true)

            if (state.modalType === 'monthView') {
                fetch(`http://localhost:3001/activities/date/${state.modalProps}`)
                    .then(resp => resp.json())
                    .then(activities => setDayActivities(activities))
            }

        } else if (state.modalType === null) {
            setModalIsOpen(false)
        }
    }, [state.modalType])

    const dispatch = useDispatch()

    const renderHeader = () => {
        if (state.modalType === 'monthView') {

            return (<span>Activities for: {state.modalProps}</span>)
        } else if (state.modalType === 'yearView') {
            return ('Year View')
        } else {
            return null
        }
    }

    const renderMonthView = () => {
        const activitiesArr = []

        if (dayActivities !== null ) {
            for (let i = 0; i < dayActivities.length; i++) {
                activitiesArr.push(<MonthModalActivity 
                        key={i}
                        category={dayActivities[i].category}
                        name={dayActivities[i].name}
                        description={dayActivities[i].description}
                    /> )
            }

            return activitiesArr
        } else {
            return "please wait"
        }
        
    }

    const closeModalEventHandler = () => {
        dispatch(closeModal())
    }

    return(
        <GeneralModal
            show={modalIsOpen}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <h3>{renderHeader()}</h3>
            </Modal.Header>
            <Modal.Body>
                { state.modalType === "monthView" ? renderMonthView() : "no activities"}
                { state.modalType === "yearView" ? 'year view' : null}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={closeModalEventHandler}>Close</button>
            </Modal.Footer>
        </GeneralModal>
    )
}

export default ReusableModal