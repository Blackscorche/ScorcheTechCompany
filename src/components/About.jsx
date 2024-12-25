// AboutUs.js
import React from "react";
import "./About.css"; // Import the custom styles

const About = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-text">
          <h2 className="about-us-title">About ScorcheTech</h2>
          <p className="about-us-description">
            At ScorcheTech, we are driven by the passion to innovate and create
            cutting-edge solutions that transform the way businesses operate.
            Our team of experts works tirelessly to deliver top-notch web and
            mobile applications, UI/UX designs, and cloud-based solutions to
            clients across various industries.
          </p>
          <p className="about-us-description">
            With years of experience, we believe in delivering not just products,
            but impactful solutions that make a real difference. Our mission is
            to empower businesses with technology that drives growth, efficiency,
            and innovation.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://via.placeholder.com/500" // Placeholder for now, replace with your image
            alt="ScorcheTech Team"
            className="about-us-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
