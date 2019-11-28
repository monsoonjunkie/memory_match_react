import React from 'react';
import './modal_styling.css';
import { connect } from 'react-redux';
import Critical from './critical/critical';
import Finisher from './finisher/finisher';

const MODAL_COMPONENTS = {
  'CRITICAL': Critical,
  'FINISHER': Finisher,
}
class Modal_Base extends React.Component {

 modalRoot({ modalType, modalProps }){

   if(!modalType) {

     return <div className="modalsuff"></div>
   }
  
   const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal {...modalProps} />
 }
  render() {
    let modal = this.modalRoot({modalType: this.props.modal.modalType, modalProps: {modal: this.props.modal, players: this.props.players}});
    return modal;
  }
}



const mapStateToProps = state => {
  return {
    modal: state.modal, 
    players: state.players 
  }
}

const mapDispatchToProps = dispatch => {
  return {
 
  }
}

const Modal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal_Base)


export default Modal;