import React from "react";
import "./services.css";
import serviceImg from "../assets/services.png";

import ServicesCarousel from "./ServicesCarousel";

function Services() {
  return (
    <section className="services-page">
      {/* Main Content Section */}
      <div className="service-content">
        <div className="service-text">
          <h2>We offer sleek, fast, and highly secure software solutions</h2>
          <p>
            Explore our services, and if you have any doubts, take a look at our projects for proof of our expertise.
          </p>
          <a href="#" className="gradient-button">Services</a>
        </div>

        <div className="service-img">
          <img src={serviceImg} alt="Service" className="services-image" />
        </div>
      </div>

      {/* Services Carousel Section */}
      <ServicesCarousel />
    </section>
  );
}

export default Services;
