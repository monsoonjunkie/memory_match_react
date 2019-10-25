import React from 'react';
import './card_styling.css';
import Tarotback from '../assets/tarot_back.png';

class Card extends React.Component {
    render() {
        return (
            <div className="card_boundary">
                <div className="card">
                    <img src={this.props.cardImage} alt="" className="card_front"/>
                    <img src={Tarotback} alt="" className="card_back"/>
                </div>
            </div>
         )
    }
}

export default Card;






