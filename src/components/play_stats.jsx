import React from 'react';
import './player_stats_styling.css';
import { connect } from 'react-redux';
// import {} from '../../src/store/players/players_actions';

class PlayerStats_Base extends React.Component {
    render(){
        let player = this.props.player;
        let playerStats = this.props.playerStats[player];
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
    const playerStats = state.players
    return {
        playerStats
  }
}

const mapDispatchToProps = dispatch => {
    return {
        stats: points => {
            console.log('i got here')
        }
    }
}

const PlayerStats = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayerStats_Base)





export default PlayerStats;