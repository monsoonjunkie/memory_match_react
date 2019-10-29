const initState = {deck:[]};


const gameBoardReducers = (state = initState, action) => {
    switch (action.type) {
      case '[GAMEBOARD] LOAD_DECK':
        return {...state, deck: action.payload}
      default:
        return state
    }
  }
  
  export default gameBoardReducers