import React, { Component } from 'react';

class PropsChild1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'Arial',
      fontSize: '16px'
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.props.onChange(this.state);
    });
  };

  render() {
    return (
      <div>
        <label>
          Background Color:
          <select name="backgroundColor" onChange={this.handleChange}>
            <option value="white">White</option>
            <option value="yellow">Yellow</option>
            <option value="lightblue">Light Blue</option>
            <option value="lightgreen">Light Green</option>
          </select>
        </label>
        <br />
        <label>
          Text Color:
          <select name="color" onChange={this.handleChange}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
        <br />
        <label>
          Font Family:
          <select name="fontFamily" onChange={this.handleChange}>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </label>
        <br />
        <label>
          Font Size:
          <select name="fontSize" onChange={this.handleChange}>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="28px">28px</option>
          </select>
        </label>
      </div>
    );
  }
}

export default PropsChild1;