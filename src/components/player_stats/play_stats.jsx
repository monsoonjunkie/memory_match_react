import React from 'react';
import './player_stats_styling.css';
import { connect } from 'react-redux';
import {updatePoints} from '../../store/players/players_actions';

class PlayerStats_Base extends React.Component {
    
    checkMatch() {
        let storeGameboard = this.props.playerStats.gameboard
        if(storeGameboard.current.length === 2){
            if(storeGameboard.current[0].path === storeGameboard.current[1].path){
                this.props.updatePoints()
            }
        }
    }
    render(){
        
        let player = this.props.player;
        let playerStats = this.props.playerStats.players[player];
        return(
            <div className="player_stats_info match">
                
                    <div className="div_block">Matches</div>
                    <div className="div_block">{playerStats.matches}</div>
                    <div className="div_block earwig">{playerStats.name}</div>
                
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    const playerStats = state

    return {
        playerStats
  }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePoints: points => {
            dispatch(updatePoints());
        }
    }
}

const PlayerStats = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayerStats_Base)





export default PlayerStats;