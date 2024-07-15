import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css'; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signup successful with Email: ${email}, Password: ${password}`);
    navigate("/login"); // Navigate to the login page after signup
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img className="auth-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4TfFsmR4xkeKqujD70gLUoxww-B9lyCIWA&s" alt="Signup" />
      </div>
      <div className="auth-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;