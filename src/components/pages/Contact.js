import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>We are here to help you with your travel needs. Get in touch!</p>
            </section>

            <section className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
