import React from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { CardBaseStyling } from '../mixins'

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
    console.log(props)
    // determine what content needs to be displayed based on the type of card the user clicked on
    const contentType = () => {
        if (props.modalContentType === "general") {
            return 'General content'
        } else if (props.modalContentType === "month overview") {
            return 'Month Overview'
        } else if (props.modalContentType === 'year overview') {
            return 'Year Overview'
        }
    }

    const closeModal = () => {
        props.toggleModal()
    }

    return(
        <GeneralModal
            show={props.show}
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
                <button onClick={closeModal}>Close</button>
            </Modal.Footer>
        </GeneralModal>
    )
}

export default ReusableModal