const initState = {
    player1: {
        name: 'Joker',
        matches: 0,
        critical: 'joker critical',
        finisher: null

        

    },
    player2: {
        name: 'Panther',
        matches: 0,
        critical: 'panther critical',
        finisher: null
        

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
        console.log('playerturn', player)
        console.log('1')
        if(action.payload){
          updatePoints = updatePoints + 1;
          currentMatches = currentMatches + 1;
        }
        let updateScore = {...state[player], matches: updatePoints }
        return {...state, [player]: updateScore, totalMatches: currentMatches}

      case '[PLAYER] UPDATE_PLAYERTURN':
          console.log('2')
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