import React from 'react';
import Card from './card.jsx';
import './card_row_styling.css';


class CardRow extends React.Component {

    cardList(){
        const cardArray = this.props.cardArray;
        let counter = 0;
        let list = cardArray.map(cardObj => {
            counter++;
            return <Card key = {counter} cardObj = {cardObj} cardClicked={this.props.cardClicked}/>
        });
        return list;
    }
    render() {
        console.log('this.props.cardArray', this.props.cardArray)
        return (
            <div className="card_row">
                {this.cardList()}
            </div>
        )
    }
}

export default CardRow;