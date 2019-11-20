import React from 'react';
export default class Modal_Presentation extends React.Component {
    render() {
      return (
        <div className="custom-modal" >
          <div>
            <div className="">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
  }
  