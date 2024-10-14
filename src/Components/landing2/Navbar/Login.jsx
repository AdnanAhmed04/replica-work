import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Please enter your e-mail and password</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder='Enter Email'
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" >Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder='Enter Email Password'

          />
        </div>
        <a href="#" className="forgot-password">FORGOT PASSWORD</a>
        <button type="submit" className="login-btn">LOG IN</button>
      </form>
      <div className="signup-container">
        <p>New Customer?</p>
        <button className="signup-btn">CREATE AN ACCOUNT</button>
      </div>
    </div>
  );
};

export default Login;
