import React from 'react';
import { connect } from 'react-redux';
import Cardrow from './card_row.jsx';
import {one,two,three,four,five,six,seven,eight,nine} from '../assets/';
import './game_board_styling.css';
import {loadDeck, cardToggle} from '../../src/store/gameboard/gameboard_actions';



class Gameboard_Base extends React.Component {
    constructor(props){
        super(props);
        this.cardClick = this.cardClick.bind(this);
    }

    componentDidMount() {
      this.props.loadDeck(this.randomList());
    }
    cardClick(id){
      this.props.cardClick(id);
    }
    createCardObj(path,index){
      return {
        id: index,
        path: path,
        revealed: false
      }
    }
    randomList(){
        const cardArray = [one,two,three,four,five,six,seven,eight,nine];
        const bigArray = cardArray.concat(cardArray);
        const cardObjArr = bigArray.map(this.createCardObj);
        let currentIndex = cardObjArr.length, temporaryValue, randomIndex;
        
        while (0 !== currentIndex) {
        
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = cardObjArr[currentIndex];
            cardObjArr[currentIndex] = cardObjArr[randomIndex];
            cardObjArr[randomIndex] = temporaryValue;
        }
        
        return cardObjArr;
    }
    spliceList(array){
        let newArray = array.splice(0,6);
        return newArray;
    }
    newDeck() {
      let storeDeck = this.props.gameboard.deck;
      if(storeDeck.length > 0){

      }

    }

    render(){
        
        let deck = [...this.props.gameboard.deck];
        let cardList1 = this.spliceList(deck);
        let cardList2 = this.spliceList(deck);
        let cardList3 = this.spliceList(deck);

        return(
            <div className = "card_space">
                <Cardrow cardClicked={this.cardClick} cardArray={cardList1}/>
                <Cardrow cardClicked={this.cardClick} cardArray={cardList2}/>
                <Cardrow cardClicked={this.cardClick} cardArray={cardList3}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const gameboard = state.gameboard
    return {
        gameboard
  }
}
  
  const mapDispatchToProps = dispatch => {
    return {
      loadDeck: deck => {
        dispatch(loadDeck(deck));
      },
      cardClick: index => {
        dispatch(cardToggle(index));
      }
    }
  }
  
  const Gameboard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gameboard_Base)
  

export default Gameboard;