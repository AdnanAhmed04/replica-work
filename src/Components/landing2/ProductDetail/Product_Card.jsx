// Card.js
import React from "react";

const Card = ({ title, price, image, colors }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{colors}</p>
    </div>
  );
};

export default Card;
