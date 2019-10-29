const initState = {
    player1: {
        name: null,
        matches: null,
        current: null

    },
    player2: {
        name: null,
        matches: null,
        current: null

    }  

};


const playersReducers = (state = initState, action) => {
    switch (action.type) {
      case '[PLAYER] LOAD_NAME':
        return {...state, deck: action.payload}
      default:
        return state
    }
  }
  
  export default playersReducers