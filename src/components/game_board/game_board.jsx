import React from 'react';
import { connect } from 'react-redux';
import Cardrow from '../card_row/card_row';
import './game_board_styling.css';
import {loadDeck, cardToggle, checkMatch} from '../../store/gameboard/gameboard_actions';
import {updatePoints, playerTurn} from '../../store/players/players_actions';
import {showCritical, showFinisher, openModal, closeModal, resetModal } from '../../store/modal/modal_actions';



class Gameboard_Base extends React.Component {
    constructor(props){
        super(props);
        this.cardClick = this.cardClick.bind(this);
    }
    componentDidMount() {
      this.props.loadDeck();
    }
    cardClick(id){
      this.props.cardClick(id);
    }
    checkCard(){      
      let propsCardArr = this.props.gameboard.current
      if(propsCardArr.length === 2){
        let modal = this.props.modal;
        
        if(propsCardArr[0].path === propsCardArr[1].path){
          
          this.props.checkMatch(true);
          if(!modal.show){
            this.matchAnimation();
          }
          setTimeout(this.props.playerTurn, 2400);
        } else {

          setTimeout(()=>{this.props.checkMatch(false); this.props.playerTurn() }, 1000);
        }
        
        
      }
    }
    matchAnimation() {
      let matches = this.props.players.totalMatches;
      matches = matches + 1
      if(matches === 9){
        this.props.showFinisher();
        setTimeout(this.props.openModal,250);
        setTimeout(this.props.closeModal, 2000);
      }else {
        this.props.showCritical();
        setTimeout(this.props.openModal);
        setTimeout(this.props.closeModal, 1500);
      }
      
    }
    createCardObj(path,index){
      return {
        id: index,
        path: path,
        revealed: false
      }
    }
    spliceList(array){
        let newArray = array.splice(0,6);
        return newArray;
    }
    render(){
        console.log('store players', this.props.players)
        this.checkCard();
        let deck = [...this.props.gameboard.deck];
        let currentCard = [...this.props.gameboard.current];
        let cardList1 = this.spliceList(deck);
        let cardList2 = this.spliceList(deck);
        let cardList3 = this.spliceList(deck);
        return(
            <div className = "card_space">
                <Cardrow cardClicked={this.cardClick} cardArray={cardList1} currentCard ={currentCard}/>
                <Cardrow cardClicked={this.cardClick} cardArray={cardList2} currentCard ={currentCard}/>
                <Cardrow cardClicked={this.cardClick} cardArray={cardList3} currentCard ={currentCard}/>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return state
}
  const mapDispatchToProps = dispatch => {
    return {
      loadDeck: () => {
        dispatch(loadDeck());
      },
      cardClick: index => {
        dispatch(cardToggle(index));
      },
      checkMatch: match => {
        dispatch(checkMatch());
        dispatch(updatePoints(match));
      },
      playerTurn: () => {
        dispatch(playerTurn());
        dispatch(resetModal());
      },
      updatePoints: match => {
        dispatch(updatePoints(match));
      },
      showCritical: () =>{
        dispatch(showCritical());
      },
      showFinisher: () => {
        dispatch(showFinisher());
      },
      openModal: () => {
        dispatch(openModal());
      },
      closeModal: () => {
        dispatch(closeModal());
      },
      resetModal: () => {
        dispatch(resetModal());
      }
    }
  }
  
  const Gameboard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gameboard_Base)
  

export default Gameboard;