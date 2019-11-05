export const loadPlayerName = name => ({
    type: '[PLAYER] LOAD_NAME', 
    payload: name
  })

export const updatePoints = match => ({
  type: '[PLAYER] UPDATE_POINTS',
  payload: match
})

export const playerTurn = () => ({
  type: '[PLAYER] UPDATE_PLAYERTURN'
})