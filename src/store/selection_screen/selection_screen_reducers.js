const initState = {
    characters: [],
    selectedPlayers: []
};


const selectionScreenReducers = (state = initState, action) => {
    switch (action.type) {
        case '[SELECTION_SCREEN] LOAD_CHAR_SELECT':
            return {...state, characters: action.payload}
        case '[SELECTION_SCREEN] TOGGLE_SELECTION':
            let newChar = [...state.characters];
            let newSelectedChar = [...state.selectedPlayers];
            for(let i=0; i < newChar.length; i++){
                
                if(newChar[i].id === action.payload){
                    newChar[i].playerSelect = !newChar[i].playerSelect;
                    // newSelectedChar.push(newChar[i]);
                break;
                }
            }
            return {...state, characters: newChar, selectedPlayers: newSelectedChar}

        default:
            return state
    }
}
export default selectionScreenReducers;