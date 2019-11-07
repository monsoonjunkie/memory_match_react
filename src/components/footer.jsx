import React from 'react';
import './footer_styling.css';
import { connect } from 'react-redux';
import battleMusic from '../assets/music/Persona_5_Last_Surprise.mp3';
import {toggleMusic} from '../store/music/music_actions';
import {resetGame, loadDeck} from '../store/gameboard/gameboard_actions';


class Footer_Base extends React.Component {
    constructor(props){
        super(props);
        this.playMusic = this.playMusic.bind(this);
    }
    audio = new Audio(battleMusic);
    playerTurn(){
        let playerProps = this.props.playerStats.players;
        let playerTurn = this.props.playerStats.players.playerTurn
        if(playerProps.totalMatches < 9){
            return this.props.playerStats.players[playerTurn].name
        } else {
            return this.checkWinner();
        }
    }
    checkWinner(){
        let playerProps = this.props.playerStats.players;
        return (playerProps.player1.matches > playerProps.player2.matches ? `${playerProps.player1.name} Wins!` : `${playerProps.player2.name} Wins!`)
    }
    playMusic(){
        if(!this.props.playerStats.music.play){
            this.audio.play();
            this.props.toggleMusic();
        }else{
            this.audio.pause();
            this.props.toggleMusic();
        }
        

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
                    <button onClick = {this.playMusic}>{!this.props.playerStats.music.play ? 'Play Music' : 'Pause Music'}</button>
                    <button onClick = {this.props.resetGame}>Game Reset</button>
                </div>             
            </div>
        )
    }
}
const mapStateToProps = state => {
    const playerStats = state;

    return {
        playerStats
  }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleMusic: () => { dispatch(toggleMusic())},
        resetGame: () => dispatch(resetGame()),
        loadDeck: () => dispatch(loadDeck())
    }
}

const Footer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Footer_Base)
export default Footer;