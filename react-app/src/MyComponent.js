import React from 'react';
import Radium from 'radium';
 
const MyComponent = () => {
    const styles = {
        container: {
            padding: '10px',
            backgroundColor: 'red',
            ':hover': {
                backgroundColor: 'blue'
            },
            '@media (max-width: 768px)': {
                backgroundColor: 'lightgreen',
            }
        }
    };
 
    return (
        <div style={styles.container}>
            <h1>Hello, Radium!</h1>
        </div>
    );
}
 
export default Radium(MyComponent);