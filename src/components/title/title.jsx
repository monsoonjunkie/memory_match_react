import React from 'react';
import './title_styling.css';
import {Link} from 'react-router-dom';
import {title_screen} from '../../assets';

class Title extends React.Component {
    render() {
        return(
            <div className="title_container">
                <div className ="col">
                    <img src={title_screen} alt=""/>
                </div>
                
                <div>Memory Match Game</div>
                <Link to="/help">
                    <button>Begin</button>
                </Link>
            </div>
        )
    }
}

export default Title;