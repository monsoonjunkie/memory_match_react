import React from 'react';
import './footer_styling.css';
import { connect } from 'react-redux';


class Footer_Base extends React.Component {
    playerTurn(){
        let playerTurn = this.props.playerStats.playerTurn
        return this.props.playerStats[playerTurn].name

    }
    render(){
        let playerName = this.playerTurn();
        return(
            <div className="app_footer">
                <div className ="player_turn_container">
                    <div className="current_turn">Current Turn</div>
                    <div className="current_turn_name">{playerName}</div>   
                </div>
                <div className="button_container">
                    <button>Play Music</button>
                    <button>Game Reset</button>
                </div>             
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
    return {}
}

const Footer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Footer_Base)
export default Footer;