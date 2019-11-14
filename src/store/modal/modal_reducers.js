const initialState = {
    modalType: null,
    modalProps: {},
    show: false
  }
  
  
const modalReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_MODAL':

        return {
          modalType: action.modalType,
          modalProps: action.modalProps,
          show: true
        }
      case 'HIDE_MODAL':

        return initialState
      default:
        return state
    }
  }
  
export default modalReducers;