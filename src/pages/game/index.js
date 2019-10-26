import React from 'react';
import Gameboard from '../../components/game_board.jsx';
import Header from '../../components/header.jsx';
import {joker, panther} from '../../assets/portraits/';
import Profile from '../../components/profile';
import PlayerStats from '../../components/play_stats';

export default  () => {
    return (
    <div>
        <div className="builders">
            <Header/>
            <div className ="mid_section">
                <div className="row no-gutters">
                    <div className="col-3 status_screen">
                        
                            <Profile profileImage = {joker}/>
                            <PlayerStats/>
                        
                        
                    </div>
                    
                    <div className="col">
                        <Gameboard/>
                    </div>
                    <div className="col-3 status_screen">
                        <PlayerStats/>
                        <Profile profileImage ={panther}/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}