import {one,two,three,four,five,six,seven,eight,nine} from '../../assets';
const initState = {deck:[], current: [], match: false};
const shuffleDeck = randomList();

const gameBoardReducers = (state = initState, action) => {

    switch (action.type) {
      case '[GAMEBOARD] LOAD_DECK':
        return {...state, deck: shuffleDeck}
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
        let matchStatus = false;
        if(!(state.current[0].path === state.current[1].path)){

            for( let i = 0; i < resetDeck.length; i++){
            if(resetDeck[i].id === state.current[0].id || resetDeck[i].id === state.current[1].id){
              resetDeck[i].revealed = false;
            }
          }
        }
        return {...state, deck: resetDeck, current: [], match: matchStatus}
      case '[GAMEBOARD] RESET_GAMEBOARD':
        let diffDeck = randomList();
        return {...state, deck: diffDeck, current: [], match: false}
      default:
        return state
    }
  }
  
  export default gameBoardReducers

  function createCardObj(path,index){
    return {
      id: index,
      path: path,
      revealed: false
    }
  }
  function randomList(){
      const cardArray = [one,two,three,four,five,six,seven,eight,nine];
      const bigArray = cardArray.concat(cardArray);
      const cardObjArr = bigArray.map(createCardObj);
      let currentIndex = cardObjArr.length, temporaryValue, randomIndex;
      
      while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = cardObjArr[currentIndex];
          cardObjArr[currentIndex] = cardObjArr[randomIndex];
          cardObjArr[randomIndex] = temporaryValue;
      }
      return cardObjArr;
  }