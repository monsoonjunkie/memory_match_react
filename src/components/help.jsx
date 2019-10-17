import React from 'react';
import './help_styling.css';

class Help extends React.Component {
    render() {
        return(
            <div>
                <div>How to Play</div>
                <div>
                    <img src="../assets/how_to.gif" alt=""/>
                </div>

                <div class="">Welcome to the Persona 5 Memory Match Game! </div>
            <div class="">
                <div class="col"> Persona 5 Memory Match is a 2 player game where each player takes turns flipping cards to match a pair.</div>
                <div class="col">Pick which player you want to be and just start flipping cards. Once all the cards have been matched, the player with the most matched pairs wins!</div>
                <div class="col">I hope you enjoy playing this as much as I enjoy making it. Thank you!</div>
            </div>
            </div>
        )
    }
}

export default Help;