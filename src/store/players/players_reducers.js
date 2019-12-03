const initState = {
    player1: {
        name: 'Joker',
        matches: 0,
        critical: 'joker critical',
        finisher: null,
        
        

    },
    player2: {
        name: 'Panther',
        matches: 0,
        critical: 'panther critical',
        finisher: null,
        
        

    },
    playerTurn: 'player1',
    totalMatches: 0,
    selectActive: false,
    players: 0

};


const playersReducers = (state = initState, action) => {
    let player = state.playerTurn;
    switch (action.type) {
      case '[PLAYER] LOAD_PLAYER':

        return {...state, [player]: action.payload}
      case '[PLAYER] UPDATE_POINTS':
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
      case '[PLAYER] RESET_POINTS': 
        return initState
      case '[PLAYER] SELECT_ON': 
        return {...state, selectActive: true}
      case '[PLAYER] SELECT_OFF':
          return {...state, selectActive: false}
      default:
        return state
    }
  }
  
  export default playersReducers;