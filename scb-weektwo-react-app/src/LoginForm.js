import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';
import Button from './Button';

const LoginForm = () => {
  const { username, setUsername, password, setPassword, alertMessage } = useContext(LoginContext);

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button />
      {alertMessage && <div>{alertMessage}</div>}
    </div>
  );
};

export default LoginForm;