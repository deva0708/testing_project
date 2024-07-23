import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAlertMessage('Login Successful!');
    } else {
      setAlertMessage('Invalid username or password!');
    }
  };

  return (
    <LoginContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        alertMessage,
        handleLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};