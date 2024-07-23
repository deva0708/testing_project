import React, { Component } from 'react';

class Snapchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Click'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ text: 'Clicked' });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`Previous state was: ${prevState.text}`);
    return prevState.text;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`Current state is: ${this.state.text}`);
    // console.log(`Snapshot before update: ${snapshot}`);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text}
      </button>
    );
  }
}

export default Snapchat;