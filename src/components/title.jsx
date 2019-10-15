import React from 'react';
import './title_styling.css';
import Title_logo from '../assets/Title_Screen.png'

class Title extends React.Component {
    render() {
        return(
            <div className="title_container">
                <div className ="col">
                    <img src={Title_logo} alt=""/>
                </div>
                
                <div>Memory Match Game</div>
                <button>Click to Begin</button>
            </div>
        )
    }
}

export default Title;