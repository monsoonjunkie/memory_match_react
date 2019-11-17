

export const showCritical = modalPropsObj => ({
    type: 'SHOW_MODAL',
    modalType: 'CRITICAL',
    modalProps: modalPropsObj
});

export const showFinisher = modalPropsObj => ({
    type: 'SHOW_MODAL',
    modalType: 'FINISHER',
    modalProps: modalPropsObj
});

export const closeModal = () => ({
    type: 'HIDE_MODAL'
});