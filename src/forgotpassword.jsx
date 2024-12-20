import React from "react";
import "./../styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="container">
      <h1>Forgot Password</h1>
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
  );
};

export default ForgotPassword;
