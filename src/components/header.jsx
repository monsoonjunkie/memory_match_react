import React from 'react';
import Title from '../assets/Title_Screen.png';
import Hat from '../assets/hat.png';
import './header_styling.css';

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <div className="header_container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col hat_container">
                                <img className="hat img-fluid" src={Hat} alt=""/>
                            </div>
                            <div className="col header_title_container">
                                <img className="header_title_imaged img-fluid"src={Title} alt=""/>
                                <div className="header_font text-nowrap">Memory Match</div>
                            </div>
                            
                            <div className="col hat_container">
                                <img className="hat img-fluid" src={Hat} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Header;