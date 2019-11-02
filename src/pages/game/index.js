import React from 'react';
import Gameboard from '../../components/game_board.jsx';
import Header from '../../components/header.jsx';
import {joker, panther} from '../../assets/portraits/';
import Profile from '../../components/profile';
import PlayerStats from '../../components/play_stats';

export default  () => {
    return (
        <div className="game_container">
            <Header/>
            <div className ="mid_section">
                <div className="row no-gutters">
                    <div className="col-3 status_screen">
                        <Profile profileImage = {joker} player = {1}/>
                        <PlayerStats player = {'player1'}/>
                    </div>
                    <div className="col">
                        <Gameboard/>
                    </div>
                    <div className="col-3 status_screen">
                        <PlayerStats player = {'player2'}/>
                        <Profile profileImage ={panther} player = {2}/>
                    </div>
                </div>
            </div>
            <div className="app_footer">
                <div className ="player_turn_container">
                    <div className="current_turn">Current Turn</div>
                    <div className="current_turn_name">Player Name</div>   
                </div>
                <div className="button_container">
                    <button>Play Music</button>
                    <button>Game Reset</button>
                </div>             
            </div>
            
        </div>
    
    )
}