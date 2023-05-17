import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
import * as duckAuth from '../duckAuth.js';
import './styles/App.css';
import { ProtectedRoute } from './ProtectedRoute.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ username: '', email: '' });

  const handleLogin = ({ username, email }) => {
    setLoggedIn(true);
    setUserData({ username, email });
  }

  return (
    <Routes>
      <Route path="/ducks" element={<ProtectedRoute element={Ducks} loggedIn={loggedIn} />} />
      <Route path="/my-profile" element={<ProtectedRoute element={MyProfile} userData={userData} loggedIn={loggedIn} />} />

      <Route path="/login" element={
        <div className="loginContainer">
          <Login handleLogin={handleLogin}  />
        </div>} />

      <Route path="/register" element={
        <div className="registerContainer">
          <Register />
        </div>} />

      <Route path="/" element={loggedIn ? <Navigate to='/ducks' /> : <Navigate to='/login' replace />} />
    </Routes>
  );
}

export default App;
