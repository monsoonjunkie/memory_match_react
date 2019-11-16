import React from 'react';
import './modal_styling.css';
import { connect } from 'react-redux';
import Critical from './critical/critical';

const MODAL_COMPONENTS = {
  'CRITICAL': Critical,
  'FINISHER': null,
}
class Modal_Base extends React.Component {
  constructor(props){
    super(props)
  }
 modalRoot({ modalType, modalProps }){
   if(!modalType) {
     return <div className = "modal">Fun</div>
   }
  
   const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} players = {this.props.modal.players}/>
 }
  render() {
    let modal = this.modalRoot(this.props.modal.modal);
    return modal;
  }
}



const mapStateToProps = state => {
  const modal = {modal: state.modal, players: state.players }
  return {
      modal
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