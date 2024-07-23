import React, { Component } from 'react';
import ApplecountChild from './ApplecountChild';

class Applecount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: { apples: 10, bakers: 5 },
      right: { apples: 0, bakers: 0 },
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick() {
    this.setState((prevState) => ({
      left: {
        apples: prevState.left.apples + 1,
        bakers: prevState.left.bakers + 1,
      },
      right: {
        apples: prevState.right.apples - 1,
        bakers: prevState.right.bakers - 1,
      },
    }));
  }

  handleRightClick() {
    this.setState((prevState) => ({
      left: {
        apples: prevState.left.apples - 1,
        bakers: prevState.left.bakers - 1,
      },
      right: {
        apples: prevState.right.apples + 1,
        bakers: prevState.right.bakers + 1,
      },
    }));
  }

  render() {
    return (
      <div>
        <div>
          <h2>Left Side</h2>
          <p>Apples: {this.state.left.apples}</p>
          <p>Bakers: {this.state.left.bakers}</p>
        </div>
        <ApplecountChild
          handleLeftClick={this.handleLeftClick}
          handleRightClick={this.handleRightClick}
        />
        <div>
          <h2>Right Side</h2>
          <p>Apples: {this.state.right.apples}</p>
          <p>Bakers: {this.state.right.bakers}</p>
        </div>
      </div>
    );
  }
}

export default Applecount;