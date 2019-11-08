import { combineReducers } from 'redux'
import gameBoardReducers from './gameboard/gameboard_reducers';
import playersReducers from './players/players_reducers';
import musicReducers from './music/music_reducers';
import modalReducers from './modal/modal_reducers';

export default combineReducers({
    gameboard: gameBoardReducers,
    players: playersReducers,
    music: musicReducers,
    modal: modalReducers
})