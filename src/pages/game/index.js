import React from 'react';
import Gameboard from '../../components/game_board.jsx';
import Header from '../../components/header.jsx';

export default  () => {
    return (
    <div>
        <div className="">
            <Header/>
            <div className = "row">
                <Gameboard/>
            </div>
            
        </div>
    </div>
    )
}
