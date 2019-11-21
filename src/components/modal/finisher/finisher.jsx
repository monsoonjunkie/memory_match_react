import React from 'react';
import './finisher_styling.css';
import {joker_gif, panther_gif} from '../../../assets/victory';

class Finisher extends React.Component {
    winner(){
        if(this.props.players.player1.matches > this.props.players.player2.matches){
            return joker_gif
        } else {
            return panther_gif
        }
    }
    render(){
        let winner = this.winner();
        let show = this.props.modal.show
        return(
            <div  className ={`custom_modal`}>
                <div className={`modal_content ${ show ? 'visibility': 'hiddened'}`}>
                    <img className="modal_finale" src={winner} alt=""/>
                </div>
            </div>

        )
    }
}

export default Finisher;