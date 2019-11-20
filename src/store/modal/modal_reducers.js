const initialState = {
    modalType: null,
    modalProps: {},
    show: false
  }
  
  
const modalReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_MODAL':
        return {
          modalType: action.modalType,
          modalProps: action.modalProps,
        }
      case 'OPEN_MODAL':
        console.log('it got here')
        return {...state, show: true}
      case 'HIDE_MODAL':
        let modalState = {...state, show: false}
        return modalState
      case 'RESET_MODAL': 
        return {
          modalType: null,
          modalProps: {},
          show: false
        }
      default:
        return state
    }
  }
  
export default modalReducers;