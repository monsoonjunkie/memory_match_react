import React from 'react';
import { connect } from 'react-redux';
import Cardrow from '../card_row/card_row';
import './game_board_styling.css';
import {loadDeck, cardToggle, checkMatch} from '../../store/gameboard/gameboard_actions';
import {updatePoints, playerTurn} from '../../store/players/players_actions';
import {showCritical, showFinisher, openModal, closeModal} from '../../store/modal/modal_actions';



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

      
      let propsCardArr = this.props.gameboardProps.gameboard.current
      if(propsCardArr.length === 2){
        let match = this.props.gameboardProps.gameboard.match;
        let modal = this.props.gameboardProps.modal;

        if(propsCardArr[0].path === propsCardArr[1].path){

          if(!modal.show){
            this.props.showCritical();
            this.props.openModal();
            // setTimeout(this.props.closeModal, 2000);

          }

          this.props.checkMatch(true);
          setTimeout(this.props.playerTurn, 2000);



        } else {
          console.log('i got here2')
          setTimeout(()=>{this.props.checkMatch(false); this.props.playerTurn() }, 1000);
        }
        
        
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

        this.checkCard();
        let deck = [...this.props.gameboardProps.gameboard.deck];
        let currentCard = [...this.props.gameboardProps.gameboard.current];
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
    const gameboardProps = {gameboard: state.gameboard, players: state.players, modal: state.modal};
    return {
      gameboardProps
  }
}
  const mapDispatchToProps = dispatch => {
    return {
      loadDeck: deck => {
        dispatch(loadDeck(deck));
      },
      cardClick: index => {
        dispatch(cardToggle(index));
      },
      checkMatch: match => {
        dispatch(checkMatch());
        dispatch(updatePoints(match));
        // dispatch(playerTurn());
      },
      playerTurn: () => {
        dispatch(playerTurn());
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
      }
    }
  }
  
  const Gameboard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gameboard_Base)
  

export default Gameboard;