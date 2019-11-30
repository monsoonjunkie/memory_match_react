import React from 'react';
import './player_select_header_styling.css';

class PlayerSelectHeader extends React.Component {

    render() {
        return (
            <div className="row justify-content-around align-items-center">
                <div className="">
                    <h2>Player 1 : Joker</h2>
                    <h2>Player 2 : Panther</h2>
                </div>
                <div className=""> 
                <h4>Player 1 Select a Character</h4>
                </div>
            </div>
        )
    }
}

export default PlayerSelectHeader;