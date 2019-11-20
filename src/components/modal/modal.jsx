import React from 'react';
import './modal_styling.css';
import { connect } from 'react-redux';
import Critical from './critical/critical';

const MODAL_COMPONENTS = {
  'CRITICAL': Critical,
  'FINISHER': null,
}
class Modal_Base extends React.Component {

 modalRoot({ modalType, modalProps }){

   if(!modalType) {

     return <div className="modalsuff"></div>
   }
  
   const SpecificModal = MODAL_COMPONENTS[modalType]
   console.log('modal props', modalProps)
  return <SpecificModal {...modalProps} />
 }
  render() {
    console.log('props', this.props.modal)

    let modal = this.modalRoot({modalType: this.props.modal.modalType, modalProps: this.props.modal});
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