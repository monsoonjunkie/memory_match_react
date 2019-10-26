import React from 'react';
import Card from './card.jsx';
import './card_row_styling.css';


class CardRow extends React.Component {

    cardList(){
        const cardArray = this.props.cardArray;
        let counter = 0;
        let list = cardArray.map(cardObj => {
            counter++;
            return <Card key = {counter} cardImage = {cardObj}/>
        });
        return list;
    }
    render() {
        let cardItems = this.cardList();
        return (
            <div className="card_row">
                {cardItems}
            </div>
        )
    }
}

export default CardRow;