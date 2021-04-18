import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { CardBaseStyling } from '../mixins'
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
            border-bottom: 2px solid #464e54;
            padding-top: .25rem;
            
            h3 {
                font-size: 1.5rem;
                width: 100%;
                text-align: center;
                color: #17A4F6;
            }
        }

        .modal-footer {
            border-top: 2px solid #464e54;
            padding-bottom: 0;

            button {
                border: none;
                background: rgba(0,0,0,0);
                font-size: 1.2rem;
                padding: 0;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        * {
            color: #f7f7f7;
        }
    `

const ReusableModal = (props) => {

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

    // determine what content needs to be displayed based on the type of card the user clicked on
    // const contentType = () => {
    //     if (state.modalType === "monthView") {
    //         fetch(`http://localhost:3001/activities/date/${state.modalProps}`)
    //             .then(resp => resp.json())
    //             // .then(json => console.log(json))
    //             .then(json => setActivities(json))
            
    //         // return state.modalProps
    //     } else if (state.modalType === 'yearView') {
    //         return state.modalProps
    //     }
    // }

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
                <h3>Content Header</h3>
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