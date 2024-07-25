import React from "react";
import "../styles/ExperienceCard.css";

const ExperienceCard = ({
  image,
  title,
  price,
  rating,
  reviews,
  status,
  location,
}) => (
  <div className="experience-card">
    {status && <div className={`status ${status.toLowerCase()}`}>{status}</div>}
    <img src={image} alt={title} className="experience-image" />
    <div className="experience-details">
      <div className="rating-location">
        <span className="rating">
          {rating} ({reviews})
        </span>
        <span className="location">{location}</span>
      </div>
      <h3>{title}</h3>
      <p>From ${price} / person</p>
    </div>
  </div>
);

export default ExperienceCard;
