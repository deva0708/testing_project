import React, { useState } from 'react';
import Login from './Login';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div style={{ backgroundColor: 'green', height: '100vh' }}>
          <h1>Welcome, Admin!</h1>
        </div>
      ) : (
        <div style={{ backgroundColor: 'red', height: '100vh' }}>
          <Login onLogin={setIsLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default Main;