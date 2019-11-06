export const loadDeck = () => ({
    type: '[GAMEBOARD] LOAD_DECK', 
    
  })

export const cardToggle = (id) => ({
  type: '[GAMEBOARD] TOGGLE_CARD', 
  payload: id
})

export const checkMatch = () => ({
  type: '[GAMEBOARD] RESET_CARD', 
})

export const resetGame = () => ({
  type: '[GAMEBOARD] RESET_GAMEBOARD', 
})
