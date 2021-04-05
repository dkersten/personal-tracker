import * as actions from '../actions/modalActions'

const initialState = {
    showModal: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case actions.OPEN_MODAL:
            return {...state, showModal: true}
        case actions.CLOSE_MODAL:
            return {...state, showModal: false}
        default:
            return state
    }
}