import React from 'react';
import './character_portrait_styling.css';
import { throwStatement } from '@babel/types';

class CharacterPortrait extends React.Component {
    // characterSelect(){
    //     if(this.props.character.name === )
    //     this.props.selectCharacter(this.props.character); 
    //     this.props.highlight()
    // }
    render(){
        return(
            <div className="col p-1">
                <img className = {`portrait image-fluid ${this.props.character.playerSelect ? "portrait_highlight":""}`} onClick= {()=>this.props.selectCharacter(this.props.character)} src={this.props.character.portrait} alt=""/>
            </div>
            )
        
    }
}

export default CharacterPortrait;