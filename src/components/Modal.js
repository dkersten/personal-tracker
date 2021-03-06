import React from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'


const ReusableModal = (props) => {

    const contentType = () => {
        if (props.modalContentType === "general") {
            return 'General content'
        } else if (props.modalContentType === "month overview") {
            return 'Month Overview'
        }
    }

    const closeModal = () => {
        props.toggleModal()
    }

    return(
        <Modal
            show={props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>Hi</Modal.Header>
            <Modal.Body>
                {contentType()}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={closeModal}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReusableModal