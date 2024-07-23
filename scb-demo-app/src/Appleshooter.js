import React, { useState } from 'react';
import appleImage from './apple.jpeg'; 
import gunCursor from './pistol.png'; 

const AppleShooter = () => {
  const [count, setCount] = useState(0);
  const [applePosition, setApplePosition] = useState({ top: '50%', left: '50%' });

  const handleShoot = () => {
    setCount(count + 1);
    moveApple();
  };

  const moveApple = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10 + '%'; 
    const randomLeft = Math.floor(Math.random() * 80) + 10 + '%';
    setApplePosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Apple Shooter Game</h1>
      <p>Apples shot: {count}</p>
      <div 
        style={{ 
          cursor: `url(${gunCursor}), auto`, 
          position: 'relative', 
          width: '40vw', 
          height: '40vh',
          border: '1px solid black',
          margin: '0 auto'
        }} 
        onClick={handleShoot}
      >
        <img 
          src={appleImage} 
          alt="apple" 
          style={{ 
            position: 'absolute', 
            width: '100px', 
            height: '100px', 
            top: applePosition.top, 
            left: applePosition.left 
          }} 
        />
      </div>
    </div>
  );
}

export default AppleShooter;