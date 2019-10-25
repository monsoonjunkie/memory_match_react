import React from 'react';
import Cardrow from './card_row.jsx';
import {one,two,three,four,five,six,seven,eight,nine} from '../assets/';
import './game_board_styling.css';



class Gameboard extends React.Component {
    randomList(){
        const cardArray = [one,two,three,four,five,six,seven,eight,nine];
        let doubleArray = cardArray.concat(cardArray);
        let currentIndex = doubleArray.length, temporaryValue, randomIndex;
        
        while (0 !== currentIndex) {
        
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = doubleArray[currentIndex];
            doubleArray[currentIndex] = doubleArray[randomIndex];
            doubleArray[randomIndex] = temporaryValue;
        }
        
        return doubleArray;
    }
    spliceList(array){
        let newArray = array.splice(0,6);
        return newArray;
    }
    render(){
        let shuffleArray = this.randomList();
        let cardList1 = this.spliceList(shuffleArray);
        let cardList2 = this.spliceList(shuffleArray);
        let cardList3 = this.spliceList(shuffleArray);

        return(
            <div className = "card_space">
                <Cardrow cardArray={cardList1}/>
                <Cardrow cardArray={cardList2}/>
                <Cardrow cardArray={cardList3}/>
            </div>
        )
    }
}

export default Gameboard;