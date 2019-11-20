

export const showCritical = modalPropsObj => ({
    type: 'CHANGE_MODAL',
    modalType: 'CRITICAL',
    modalProps: modalPropsObj
});

export const showFinisher = modalPropsObj => ({
    type: 'CHANGE_MODAL',
    modalType: 'FINISHER',
    modalProps: modalPropsObj
});

export const openModal = () => ({
    type: 'OPEN_MODAL'
})

export const closeModal = () => ({
    type: 'HIDE_MODAL'
});
export const resetModal = () => ({
    type: 'RESET_MODAL'
})