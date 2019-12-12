import React from 'react';
import {connect} from 'react-redux';
import './player_selection_styling.css';
import CharacterPortrait from '../character_portrait/character_portrait';
import {loadPlayer, selectON} from '../../store/players/players_actions';
import {selectToggle, loadChar} from '../../store/selection_screen/selection_screen_actions';
import {crow,fox,joker,mona,noir,panther,queen,skull} from '../../assets/portraits';
import {crow_gif,fox_gif,joker_gif,mona_gif,noir_gif,panther_gif,queen_gif,skull_gif} from '../../assets/victory';
import {crow_crit,fox_crit,joker_crit,mona_crit,noir_crit,panther_crit,queen_crit,skull_crit} from '../../assets/criticals';

class PlayerSelection_Base extends React.Component {
    constructor(props){
        super(props);
        this.characterSelect = this.characterSelect.bind(this);
    }
    componentDidMount(){
        let charArr = this.characterObj();
        this.props.loadChar(charArr);
    }
    characterSelect(character){
        console.log('character', character.name);
        let currentPlayer = this.props.players.playerTurn;
        console.log('character2', this.props.players[currentPlayer].name);
        
        if(this.props.players[currentPlayer].name === character.name){
            console.log('i got same')
            return
        }else{
            this.props.loadPlayer(character); 
            this.props.selectChar();
            this.props.highlightChar(character.id) 
        }
        
    }
    makeCharacters(charArr){
        let counter = 0;
        let list = charArr.map( obj => {
            counter++;
            return (
                <CharacterPortrait key = {counter} character = {obj} selectCharacter ={this.characterSelect} />
            )
        })
        return list;
    }
    characterObj(){
        let newCharacterArr = [];
        let characterName =["Crow","Fox","Joker","Mona","Noir","Panther","Queen","Skull"]
        let characterImage = [crow,fox,joker,mona,noir,panther,queen,skull];
        let characterCrit = [crow_crit,fox_crit,joker_crit,mona_crit,noir_crit,panther_crit,queen_crit,skull_crit];
        let characterFinisher = [crow_gif,fox_gif,joker_gif,mona_gif,noir_gif,panther_gif,queen_gif,skull_gif];
        for(let i = 0; i < characterName.length; i++){
            let characterObj = {
                id: i,
                name: characterName[i],
                matches: 0,
                portrait: characterImage[i],
                critical: characterCrit[i],
                finisher: characterFinisher[i],
                playerSelect: false
                }
                newCharacterArr.push(characterObj);
        }
        return newCharacterArr;
    } 
    render(){
        console.log('select', this.props)
        let characterImages = this.makeCharacters(this.props.selection.characters);
        return(

                <div className="row content_align">
                    {characterImages}
                </div>
                

        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return{
        loadChar: char => {dispatch(loadChar(char))},
        highlightChar: id => {dispatch(selectToggle(id))},
        selectChar: () => { dispatch(selectON())},
        loadPlayer: character => { dispatch(loadPlayer(character))}
    }
}

const PlayerSelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerSelection_Base);

export default PlayerSelection;