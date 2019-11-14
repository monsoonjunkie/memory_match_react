import React from 'react';
import Card from '../card/card.jsx';
import './card_row_styling.css';


class CardRow extends React.Component {

    cardList(){
        const cardArray = this.props.cardArray;
        let counter = 0;
        let list = cardArray.map(cardObj => {
            counter++;
            return <Card key = {counter} cardObj = {cardObj} cardClicked={this.props.cardClicked} currentCard ={this.props.currentCard}/>
        });
        return list;
    }
    render() {
        return (
            <div className="card_row">
                {this.cardList()}
            </div>
        )
    }
}

export default CardRow;