import React from 'react';
import {connect} from 'react-redux';
import './player_selection_styling.css';
import CharacterPortrait from '../character_portrait/character_portrait';

import {crow,fox,joker,mona,noir,panther,queen,skull} from '../../assets/portraits'

class PlayerSelection_Base extends React.Component {

    makeCharacters(){
        let characterArr = [crow,fox,joker,mona,noir,panther,queen,skull];
        let counter = 0;
        let list = characterArr.map( image => {
            counter++;
            return (
                <CharacterPortrait key = {counter} image = {image}/>
            )
        })
        return list;
    }

    render(){
        let characterImages = this.makeCharacters();
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
    return{}
}

const PlayerSelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerSelection_Base);

export default PlayerSelection;