const initState = {
    player1: {
        name: null,
        matches: null,
        turn: null

    },
    player2: {
        name: null,
        matches: null,
        turn: null

    }  

};


const playersReducers = (state = initState, action) => {
    switch (action.type) {
      case '[PLAYER] LOAD_NAME':
        return 
      default:
        return state
    }
  }
  
  export default playersReducers