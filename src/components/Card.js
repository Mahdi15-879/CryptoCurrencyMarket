import React from "react";

// Icons

// Styles
import "./Card.css";

const Card = ({ image, title, symbol, price, change }) => {
  return (
    <div className="Card">
      <span>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <h2>{symbol}</h2>
        <h3>{title}</h3>
      </span>
      <h4>{price}</h4>
      <h5>{change.toFixed(2)}%</h5>
    </div>
  );
};

export default Card;
