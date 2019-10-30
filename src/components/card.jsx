import React from 'react';
import './card_styling.css';
import Tarotback from '../assets/tarot_back.png';
class Card_Base extends React.Component {
  constructor(props){
    super(props)
    this.checkCard = this.checkCard.bind(this)
  }
    checkCard(){
      let card = this.props.cardObj
      if(!card.revealed){
        this.props.cardClicked(this.props.cardObj.id)
      }
      
    }
    render() {
        return (
            <div className="card_boundary" onClick={this.checkCard}>
                <div className={`card ${this.props.cardObj.revealed ? 'card_back_flip': ''}`}>
                    <img src={this.props.cardObj.path} alt="" className="card_front"/>
                    <img src={Tarotback} alt="" className="card_back"/>
                </div>
            </div>
         )
    }
}

export default Card_Base;






