import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import Card from '../../Components/landing2/ProductDetail/Product_Card'
// C:\Users\Adnan\Desktop\learning\work\src\Components\landing2\ProductDetail\Product_Card.jsx

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', remember);
  };

  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <p>Please enter your e-mail and password
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <p className='login_para1'>Forgot Password</p>
        <button className='Login' type="submit">Login</button>
        <p className='login_para2'>New Customer?</p>
        <button className='Create' type="submit">Create An Account</button>
      </form>
    </div>
  );
};

export default Login;
