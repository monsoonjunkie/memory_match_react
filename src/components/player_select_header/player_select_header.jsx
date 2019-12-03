import React from 'react';
import {connect} from 'react-redux';
import './player_select_header_styling.css';
import {playerTurn, selectOff} from '../../store/players/players_actions';
class PlayerSelectHeader_Base extends React.Component {

    render() {
        console.log('props', this.props)
        console.log('select', this.props.selectActive)
        return (
            <div className="row justify-content-around align-items-center header_main">
                <div className="">
                    <h2 className="fontP">{`Player 1 : ${this.props.player1.name}`} </h2>
                    <h2 className="fontP">{`Player 2 : ${this.props.player2.name}`}</h2>
                </div>
                <div className="fontP"> 
                    <h4>{ this.props.playerTurn === 'player1' ? "Player 1 Select a Character" : "Player 2 Select a Character"}</h4>
                    <div className = {` justify-content-around ${!this.props.selectActive ? 'selectOff' : 'selectActive'}`}>
                        <button className="btn btn-dark" onClick={()=>{this.props.cancelSelect(); this.props.playerTurnChange()}}>Yes</button>
                        <button className="btn btn-dark" onClick={this.props.cancelSelect}>No</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    let charSelect = state.players
    return charSelect
}

const mapDispatchToProps = dispatch => {
    return{
        cancelSelect: () => {dispatch(selectOff())},
        playerTurnChange: () => { dispatch(playerTurn())},
    }
}

const PlayerSelectHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerSelectHeader_Base);

export default PlayerSelectHeader;
