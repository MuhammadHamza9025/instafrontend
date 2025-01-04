import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup">
            <section className="signup-hero">
                <h1>Join Us Today!</h1>
                <p>Sign up to access exclusive travel deals and offers.</p>
            </section>

            <section className="signup-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Choose a username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            </section>
        </div>
    );
};

export default Signup;
