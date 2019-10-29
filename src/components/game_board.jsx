import React from 'react';
import { connect } from 'react-redux';
import Cardrow from './card_row.jsx';
import {one,two,three,four,five,six,seven,eight,nine} from '../assets/';
import './game_board_styling.css';
import {loadDeck} from '../../src/store/gameboard/gameboard_actions';



class Gameboard_Base extends React.Component {
    constructor(props){
        super(props);
        console.log('unmounted');
    }

    componentDidMount() {
      console.log('mounted');
      this.props.loadDeck(this.randomList());
    }


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
    newDeck() {
      let storeDeck = this.props.gameboard.deck;
      if(storeDeck.length === 0){

      }

    }

    render(){
        console.log('props', this.props);
        console.log('deck',this.props.gameboard.deck)
        

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
function randomList(){
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

const mapStateToProps = state => {
    console.log('state', state)
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
      updateDeck: id => {
          console.log('updated', id);
      }
    }
  }
  
  const Gameboard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gameboard_Base)
  

export default Gameboard;