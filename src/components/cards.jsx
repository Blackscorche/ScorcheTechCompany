import React from 'react';
import './cards.css'; // Optional for card-specific styles

function cards({ imgSrc, title, description }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="more-btn">More</button>
    </div>
  );
}

export default Card;
