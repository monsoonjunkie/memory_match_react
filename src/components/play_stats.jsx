import React from 'react';
import './player_stats_styling.css';

class PlayerStats extends React.Component {
    render(){
        return(
            <div className="player_stats_info match">
                
                    <div className="div_block">Matches</div>
                    <div className="div_block">0</div>
                    <div className="div_block earwig">PLAYER NAME</div>
                
                
            </div>
        )
    }
}

export default PlayerStats;