export const loadDeck = deck => ({
    type: '[GAMEBOARD] LOAD_DECK', 
    payload: deck
  })

export const cardToggle = (id) => ({
  type: '[GAMEBOARD] TOGGLE_CARD', 
  payload: id
})

