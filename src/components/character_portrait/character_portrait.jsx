import React from 'react';
import './character_portrait_styling.css';

class CharacterPortrait extends React.Component {
    render(){
        return(
            <div className="col">
                <img className = "portrait image-fluid" src={this.props.image} alt=""/>
            </div>
            )
        
    }
}

export default CharacterPortrait;