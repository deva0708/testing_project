import React, { Component } from 'react';

class ApplecountChild extends Component {
  shouldComponentUpdate(nextProps) {
    // Add any custom logic if necessary
    return true;
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleLeftClick}>⬅️</button>
        <button onClick={this.props.handleRightClick}>➡️</button>
      </div>
    );
  }
}

export default ApplecountChild;