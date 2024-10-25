import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
  const [username, setUsername] = useState('');
 
  const [password, setPassword] = useState('');
 
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await axios.post('http://localhost:3003/login/admin', { username, password});
      console.log('Login successful:', response);
      alert("Login Success");
      setUsername('');
      setPassword('');
      
    } catch (error) {
      console.error('Login error:', error);
      
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
          <div className="bg-white p-3 rounded w-25">
      <h2><center>Admin Login</center></h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control rounded-0"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
         
        </div>
       
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control rounded-0"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        
        <button type="submit"className="btn btn-success w-100 rounded-0">Login</button>
      </form>
    </div>
    </div>
  );
}

export default AdminLogin;
    