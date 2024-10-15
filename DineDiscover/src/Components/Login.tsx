import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';  // Assuming you're using the provided CSS

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', { email, password });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="toggle-auth-mode">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
        <p className="back-button">
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
