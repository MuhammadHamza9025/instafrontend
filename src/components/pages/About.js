import React from 'react';
import './AboutUs.css';

const About = () => {
    return (
        <div className="about-us">
            <section className="hero">
                <h1>Welcome to Our Travel Website</h1>
                <p>We help you discover the world’s most beautiful destinations!</p>
            </section>

            <section className="about-content">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide you with the best travel experiences,
                    ensuring you enjoy your trips to the fullest by offering personalized
                    recommendations and affordable packages.
                </p>

                <h2>Our Team</h2>
                <p>
                    We are a group of passionate travelers who want to make your
                    adventures unforgettable. Whether you are looking for a quick getaway
                    or a long-term journey, our team has you covered!
                </p>

                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Customized travel plans</li>
                    <li>Affordable packages</li>
                    <li>24/7 customer support</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
