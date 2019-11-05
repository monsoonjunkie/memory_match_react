import React from 'react';
import Gameboard from '../../components/game_board.jsx';
import Header from '../../components/header.jsx';
import {joker, panther} from '../../assets/portraits/';
import Profile from '../../components/profile';
import PlayerStats from '../../components/play_stats';
import Footer from '../../components/footer';

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
            <Footer/>
            
        </div>
    
    )
}