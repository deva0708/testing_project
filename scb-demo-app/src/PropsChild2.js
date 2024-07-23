import React, { Component } from 'react';

class PropsChild2 extends Component {
  render() {
    const { styles } = this.props;
    const contentStyle = {
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontFamily: styles.fontFamily,
      fontSize: styles.fontSize,
      padding: '20px',
      marginTop: '20px'
    };

    return (
      <div style={contentStyle}>
        This content is styled based on the selected options.
      </div>
    );
  }
}

export default PropsChild2;