import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="AnimatedBorder">
            <h1>Login</h1>
            <form className="form" action="#" method="POST">
                <div className="input">
                    <input type="text" id="username" placeholder="Username" required />
                </div>
                <div className="input">
                    <input type="password" id="password" placeholder="Password" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Sign in" />
                </div>
            </form>
            <div className="footer-links">
                <a href="#">Forget Password</a>
                <a href="#">Signup</a>
            </div>
        </div>
    );
};

export default Login;
