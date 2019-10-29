import { combineReducers } from 'redux'
import gameBoardReducers from './gameboard/gameboard_reducers';
import playersReducers from './players/players_reducers';

export default combineReducers({
    gameboard: gameBoardReducers,
    players: playersReducers
})