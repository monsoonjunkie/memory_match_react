import React from 'react';
import './help_styling.css';
import {how_to} from '../../assets';

class Help extends React.Component {
    render() {
        return(
            <div className="help_container">
                <div className="how_to_heading">How to Play</div>
                <div className="help_bg">
                    <img className="help_tip"src={how_to} alt=""/>
                </div>

                <div className="how_to_heading help_heading2">Welcome to the Persona 5 Memory Match Game! </div>
            <div className="help_heading3">
               
                    <div className="">Persona 5 Memory Match is a 2 player game where each player takes turns flipping cards to match a pair.</div>
                    <div className="">Pick which player you want to be and just start flipping cards. Once all the cards have been matched, the player with the most matched pairs wins!</div>
                    <div className="">I hope you enjoy playing this as much as I enjoy making it. Thank you!</div>
            
                
            </div>
                <div className="help_close">Close</div>
            </div>
        )
    }
}

export default Help;