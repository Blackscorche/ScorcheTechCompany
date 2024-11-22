import React from 'react';
import './hero.css'; // Ensure the CSS file exists and matches
import rocket from '../assets/rocket.webm'; // Use the correct path to your video

function hero() {
  return (
    <section className="hero-section"> 
      <div className="text">
        <h2>Empowering Your Vision with Cutting-Edge Software Solutions</h2>
        <p>
                At ScorcheTech, we specialize in delivering innovative, fast, and reliable software 
                solutions tailored to your business needs. Let us help you transform your ideas 
                into scalable success.
        </p>

        <div className="home-links">
            <a href="#services" className="services-btn gradient-button">Services</a>
            <a href="#projects" className="project-btn gradient-button">Projects</a>
        </div>

      </div>

      <div className="image">
        <video src={rocket} autoPlay muted loop className="rocket-video"></video>
      </div>
    </section>
  );
}

export default hero;
