
import React from "react";
import "./SignUp.css"; 
const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

