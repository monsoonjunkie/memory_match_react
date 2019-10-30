const initState = {deck:[]};


const gameBoardReducers = (state = initState, action) => {
    switch (action.type) {
      case '[GAMEBOARD] LOAD_DECK':
        return {...state, deck: action.payload}
      case '[GAMEBOARD] TOGGLE_CARD':
        let newDeck = [...state.deck];
        for(var i=0; i < newDeck.length; i++){
          if(newDeck[i].id === action.payload){
            newDeck[i].revealed = true;
            break;
          }
        }
        return {...state, deck: newDeck}
      default:
        return state
    }
  }
  
  export default gameBoardReducers