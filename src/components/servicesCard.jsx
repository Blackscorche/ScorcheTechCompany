import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      {/* Wave Animation */}
      <div className="wave-container">
      <div className="wave-container">
      <svg
        className="wave-svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#D7263D" />
            <stop offset="100%" stopColor="#FF5733" />
          </linearGradient>
        </defs>
        <path
          d="M0.00,49.98 C150.00,150.00 349.92,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          fill="url(#gradient)"
        />
      </svg>
    </div>
      </div>

      {/* Icon */}
      <div className="icon-container">
        <img src={icon} alt={`${title} Icon`} />
      </div>

      {/* Title and Description */}
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
