import React from 'react';
import './critical_styling.css';
import {joker_crit, panther_crit} from '../../../assets/criticals';

class Critical extends React.Component {
    player(){
        let player = this.props.players.playerTurn;
        if(player === 'player1'){
            return joker_crit
        }else{
            return panther_crit
        }
    }
    render(){
        let show = this.props.modal.show
        let playerCrit = this.player()
        return(
            <div  className ={`custom_modal`}>
                <div className={`modal_content ${ show ? 'visibility': 'hiddened'}`}>
                    <img className="" src={playerCrit} alt=""/>
                </div>
            </div>

        )
    }
}

export default Critical;


