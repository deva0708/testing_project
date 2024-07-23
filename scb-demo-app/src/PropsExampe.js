import React, { Component } from 'react';
import './App.css';
import PropsChild1 from './PropsChild1';
import PropsChild2 from './PropsChild2';

class PropsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'Arial',
        fontSize: '16px'
      }
    };
  }

  handleStyleChange = (newStyles) => {
    this.setState({ styles: newStyles });
  };

  render() {
    return (
      <div className="App">
        <PropsChild1 onChange={this.handleStyleChange} />
        <PropsChild2 styles={this.state.styles} />
      </div>
    );
  }
}

export default PropsExample;