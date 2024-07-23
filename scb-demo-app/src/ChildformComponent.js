import React, { Component } from 'react';

class ChildformComponent extends Component {
  state = {
    color: 'white'
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ color: this.getRandomColor() });
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color, padding: '20px', marginTop: '20px' }}>
        <p>Username: {this.props.data.username}</p>
        <p>Password: {this.props.data.password}</p>
      </div>
    );
  }
}

export default ChildformComponent;