const initState = {
    player1: {
        name: 'Joker',
        matches: 0,
        turn: null

    },
    player2: {
        name: 'Panther',
        matches: 0,
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