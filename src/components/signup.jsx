import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <section className='signUpContainer'>
          <div className="container">
            <h2>Signup</h2>
            <form className="form" action="#" method="POST">
                <div className="input">
                    <input type="text" id="username" placeholder="Username" required />
                </div>
                <div className="input">
                    <input type="email" id="email" placeholder="Email" required />
                </div>
                <div className="input">
                    <input type="password" id="password" placeholder="Password" required />
                </div>
                <div className="input">
                    <input type="password" id="confirm-password" placeholder="Confirm Password" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Sign up" />
                </div>
            </form>
            <div className="footer-links">
                <a href="#">Already have an account? Login</a>
            </div>
        </div>
        </section>

    );
};

export default Signup;
