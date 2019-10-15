import React from 'react';
import 'music_button_styling';

class MusicButton extends React.Component {
    render() {
        return (
            <div className="button_container">
                <button className="button_styling">this props name</button>
            </div>
        )
    }
}

export default MusicButton;