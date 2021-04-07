export const SHOW_MODAL = 'SHOW_MODAL'
export const MODAL_TYPE = 'MODAL_TYPE'
export const MODAL_PROPS = {}
export const HIDE_MODAL = 'HIDE_MODAL'

export const openModal = () => ({
    type: SHOW_MODAL,
    modalType: MODAL_TYPE,
    modalProps: MODAL_PROPS
})

export const closeModal = () => ({
    type: HIDE_MODAL
})

export function toggleModal() {
    
}