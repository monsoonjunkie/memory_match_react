import React from 'react';
import { connect } from 'react-redux';
import './profile_styling.css';


class Profile_Base extends React.Component {
    
    render() {
        let player = this.props.player;
        let playerStats = this.props.playerStats.players[player];
        return(
                    <div className="player_info">
                        <img className="portrait_size"src={playerStats.portrait} alt=""/>
                    </div>
        )
    }
}

const mapStateToProps = state => {
    const playerStats = state

    return {
        playerStats
  }
}
const mapDispatchToProps = dispatch => {
    return {}
    
}
const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile_Base)

export default Profile;