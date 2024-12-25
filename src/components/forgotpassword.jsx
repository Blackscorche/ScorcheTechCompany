import React from "react";
import './forgotpassword.css'
const ForgotPassword = () => {
  return (
    <div className="loginContainer">
      <div className="container">
        <h2>Forgot Password</h2>
        <div className="input">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="button-container">
          <input type="submit" value="Reset Password" />
        </div>
        <div className="footer-links">
          <a href="/login">Back to Login</a>
          <a href="/signup">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
