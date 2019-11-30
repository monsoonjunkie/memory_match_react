import React from 'react';
import {connect} from 'react-redux';
import './player_selection_styling.css';

import {crow,fox,joker,mona,noir,panther,queen,skull} from '../../assets/portraits'

class PlayerSelection_Base extends React.Component {

    makeCharacters(){
        let characterArr = [crow,fox,joker,mona,noir,panther,queen,skull];
        let counter = 0;
        let list = characterArr.map( image => {
            counter++;
            return (
            <div key = {counter} className="col">
                <img className = "portrait image-fluid" src={image} alt=""/>
            </div>)
        })
        return list;
    }

    render(){
        let characterImages = this.makeCharacters();
        return(

                <div className="row justify-content-center">
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