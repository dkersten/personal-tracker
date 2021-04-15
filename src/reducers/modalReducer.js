import * as actions from '../actions/modalActions'

const initialState = {
    modalType: null,
    modalProps: {}
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SHOW_MODAL:
            return {
                ...state,
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case actions.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}