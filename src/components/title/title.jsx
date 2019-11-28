import React from 'react';
import './title_styling.css';
import {title_screen} from '../../assets'

class Title extends React.Component {
    render() {
        return(
            <div className="title_container">
                <div className ="col">
                    <img src={title_screen} alt=""/>
                </div>
                
                <div>Memory Match Game</div>
                <button>Click to Begin</button>
            </div>
        )
    }
}

export default Title;