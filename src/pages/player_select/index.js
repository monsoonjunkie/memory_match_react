import React from 'react';
import PlayerSelectionHeader from '../../components/player_select_header/player_select_header';
import PlayerSelection from '../../components/player_selection/player_selection';
export default () => {
    return (
            <div className="container-fluid">
                <PlayerSelectionHeader/>
                <div className="container-fluid pt-1">
                    <PlayerSelection/>
                </div>

            </div>
            
    )
}
