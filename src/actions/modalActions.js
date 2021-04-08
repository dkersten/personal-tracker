export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const openModal = (myType, myProps) => ({
    type: SHOW_MODAL,
    modalType: myType,
    modalProps: myProps
})

export const closeModal = () => ({
    type: HIDE_MODAL
})