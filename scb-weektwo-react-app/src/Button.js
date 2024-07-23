import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';

const Button = () => {
  const { handleLogin } = useContext(LoginContext);

  return (
    <button onClick={handleLogin}>Login</button>
  );
};

export default Button;