import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { CardBaseStyling } from '../mixins'
// import { closeModal } from '../actions/modalActions'

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

    const state = useSelector(s => ({
        ...s.modal
    }))

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        console.log(state.modalType)
        if (state.modalType !== null) {
            setModalIsOpen(true)
        } else {
            setModalIsOpen(false)
        }
    }, [state.modalType])

    // const dispatch = useDispatch()

    // determine what content needs to be displayed based on the type of card the user clicked on
    const contentType = () => {
        if (state.modalType === "monthView") {
            return state.modalProps
        } else if (state.modalType === 'yearView') {
            return state.modalProps
        }
    }

    const closeModalEventHandler = () => {
        setModalIsOpen(false)
        // dispatch(closeModal())
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
                {contentType()}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={closeModalEventHandler}>Close</button>
            </Modal.Footer>
        </GeneralModal>
    )
}

export default ReusableModal