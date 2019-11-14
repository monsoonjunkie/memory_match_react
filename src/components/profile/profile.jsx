import React from 'react';
import './profile_styling.css';


class Profile extends React.Component {

    render() {
        
        return(
                    <div className="player_info">
                        <img className="portrait_size"src={this.props.profileImage} alt=""/>
                    </div>
        )
    }
}

export default Profile;




