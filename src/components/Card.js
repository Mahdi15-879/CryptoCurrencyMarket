import React, { useState } from "react";

// Icons

// Styles
import "./Card.css";

const Card = ({ image, title, symbol, price, change, addCookiesHandler }) => {
  return (
    <div className="Card">
      <span>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <h2>{symbol}</h2>
        <h3>{title}</h3>
      </span>
      <span>${Number(price).toLocaleString()}</span>
      <span className={change > 0 ? "greenPriceChange" : "redPriceChange"}>
        {change.toFixed(2)}%
      </span>
      <button onClick={() => addCookiesHandler(title)}>Add to fav</button>
    </div>
  );
};

export default Card;
