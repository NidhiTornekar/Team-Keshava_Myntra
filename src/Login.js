import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './App.css'; 

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img className="auth-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4TfFsmR4xkeKqujD70gLUoxww-B9lyCIWA&s" alt="Login Background" />
      </div>
      <div className="auth-right">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;