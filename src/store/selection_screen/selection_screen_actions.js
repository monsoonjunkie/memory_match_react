export const selectToggle = (id) => ({
    type: '[SELECTION_SCREEN] TOGGLE_SELECTION', 
    payload: id
})

export const loadChar = (char) => ({
    type: '[SELECTION_SCREEN] LOAD_CHAR_SELECT', 
    payload: char
})

export const confirmChar = () => ({
    type: '[SELECTION_SCREEN] CONFIRM_CHAR_SELECT', 
    payload: char
})

