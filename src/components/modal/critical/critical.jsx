import React from 'react';
import './critical_styling.css';

class Critical extends React.Component {
    render(){
        console.log('this props', this.props.players)
        return(
            <div className="custom-modal" >
     <div className="">
         <img src="" alt=""/>
         <div>Critical</div>
       </div>
     </div>
        )
    }
}

export default Critical;