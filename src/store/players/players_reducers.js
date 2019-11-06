const initState = {
    player1: {
        name: 'Joker',
        matches: 0

        

    },
    player2: {
        name: 'Panther',
        matches: 0
        

    },
    playerTurn: 'player1',
    totalMatches: 0 

};


const playersReducers = (state = initState, action) => {
    switch (action.type) {
      case '[PLAYER] LOAD_NAME':
        return 
      case '[PLAYER] UPDATE_POINTS':
        let player = state.playerTurn;
        let updatePoints = state[player].matches;
        let currentMatches = state.totalMatches;
        if(action.payload){
          updatePoints = updatePoints + 1;
          currentMatches = currentMatches + 1;
        }
        let updateScore = {...state[player], matches: updatePoints }
        return {...state, [player]: updateScore, totalMatches: currentMatches}

      case '[PLAYER] UPDATE_PLAYERTURN':
        if(state.playerTurn === 'player1'){
          return {...state, playerTurn: 'player2' }
        }else {
          return {...state, playerTurn: 'player1' }
        }
        
      default:
        return state
    }
  }
  
  export default playersReducers