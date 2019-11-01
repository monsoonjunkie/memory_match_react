const initState = {deck:[], current: []};


const gameBoardReducers = (state = initState, action) => {
    switch (action.type) {
      case '[GAMEBOARD] LOAD_DECK':
        return {...state, deck: action.payload}
      case '[GAMEBOARD] TOGGLE_CARD':
        
        let newDeck = [...state.deck];
        let currentCard = [...state.current];
        for(let i=0; i < newDeck.length; i++){
          if(newDeck[i].id === action.payload){
            newDeck[i].revealed = !newDeck[i].revealed;
            if(currentCard.length < 2){
              currentCard.push(newDeck[i]);
            }
            
            break;
          }
        }
          return {...state, deck: newDeck, current: currentCard }
      case '[GAMEBOARD] RESET_CARD':
        let resetDeck = [...state.deck];
        if(!(state.current[0].path === state.current[1].path)){
            for( let i = 0; i < resetDeck.length; i++){
            if(resetDeck[i].id === state.current[0].id || resetDeck[i].id === state.current[1].id){
              resetDeck[i].revealed = !resetDeck[i].revealed;
            }
          }
        }
        
        return {...state, deck: resetDeck, current: []}
      default:
        return state
    }
  }
  
  export default gameBoardReducers