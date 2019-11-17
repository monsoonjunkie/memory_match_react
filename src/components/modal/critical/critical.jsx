import React from 'react';
import './critical_styling.css';
import {joker_crit} from '../../../assets/criticals';

class Critical extends React.Component {
    render(){
        console.log('crit props', this.props.content.modal.show)
        let show =  this.props.content.modal.show
        return(
            <div id="my_modal" className ="custom_modal">
                <div className={`modal_content ${ show ? 'visibility': 'hiddened'}`}>
                    <img className="" src={joker_crit} alt=""/>
                </div>
            </div>

        )
    }
}

export default Critical;

// {/* <div className="custom_modal" >
//         <div className="fade-in">
//          <img src={joker_crit} alt=""/>
//          <div>Critical</div>
//        </div>
//      </div>

//      <div id="my_modal" class="custom_modal">
//         <div class="modal_content">
//             <div>
//                 <img class="critical">
//             </div>
//         </div>
//         </div> */}

