import React, { useState } from 'react';
import Login from './Login'; 
import Register from './Register'; 
import './App.css'; 

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null); // state to keep track of logged-in user

  const handleLogin = (userData) => {
    
    setLoggedInUser(userData);
  };

  const handleRegister = (userData) => {
  
    setLoggedInUser(userData);
  };

  return (
    <div className="app-container">
      {loggedInUser ? (
        // Render user information after successful login
        <div>
          <h2>Welcome, {loggedInUser.username}!</h2>
          <p>First Name: {loggedInUser.firstName}</p>
          <p>Last Name: {loggedInUser.lastName}</p>
          <p>DOB: {loggedInUser.dob}</p>
          <p>Address: {loggedInUser.address}</p>
          <p>Phone Number: {loggedInUser.phoneNumber}</p>
        </div>
      ) : (
        // Render login and register components if user is not logged in
        <div>
          <div className="login-container">
            <Login handleLogin={handleLogin} />
          </div>
          <div className="register-container">
            <Register handleRegister={handleRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;