export const loadPlayer = obj => ({
    type: '[PLAYER] LOAD_PLAYER', 
    payload: obj
  })

export const updatePoints = match => ({
  type: '[PLAYER] UPDATE_POINTS',
  payload: match
})

export const playerTurn = () => ({
  type: '[PLAYER] UPDATE_PLAYERTURN'
})

export const resetPoints = () => ({
  type:  '[PLAYER] RESET_POINTS'
})

export const selectON = () => ({
  type: '[PLAYER] SELECT_ON'
})

export const selectOff = () => ({
  type: '[PLAYER] SELECT_OFF'
})