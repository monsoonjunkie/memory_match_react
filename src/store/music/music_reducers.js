const initState = {play: false, pause: true}

const musicReducers = (state = initState, action) =>{
    switch(action.type){
        case '[MUSIC] TOGGLE_MUSIC':
            return {...state, play: !state.play, pause: !state.pause }
        default:
            return state
    }
}

export default musicReducers;