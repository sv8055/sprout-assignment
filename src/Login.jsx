import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation and call handleLogin with userData
    const userData = {
      username,
      password
    };
    handleLogin(userData);
  };

  return (
    <div className="login-container"> 
      <h2 className="login-heading">Login</h2> 
      <form className="login-form" onSubmit={handleSubmit}> 
        <input
          type="text"
          className="login-input" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-input" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
