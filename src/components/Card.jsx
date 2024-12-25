import React from "react";
import PropTypes from "prop-types";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="more-btn">Learn More</button>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
