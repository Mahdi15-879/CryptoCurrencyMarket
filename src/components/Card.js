import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./Card.css";

// Dummy Data
let history = [
  {
    date: "03/08/2022",
    price: "$97",
    volume: "6.0708",
  },
  {
    date: "05/15/2022",
    price: "$86",
    volume: "111.089",
  },
  {
    date: "10/21/2022",
    price: "$112",
    volume: "80.063",
  },
];

const Card = ({ image, title, symbol, price, change, addCookiesHandler }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="Card">
      <div className="Card__row-1">
        <span>
          <figure>
            <img src={image} alt={title} />
          </figure>
          <h2>{symbol}</h2>
          <h3>{title}</h3>
        </span>
        <span>${Number(price).toLocaleString()}</span>
        <span>
          <button className="History" onClick={() => setExpand(!expand)}>
            {expand ? "Close" : "History"}
          </button>
          <button onClick={() => addCookiesHandler(title, image)}>
            Add to fav
          </button>
          <span className={change > 0 ? "greenPriceChange" : "redPriceChange"}>
            {change.toFixed(2)}%
          </span>
        </span>
      </div>
      <div className={expand ? "HistoryExpand" : "HistoryCompact"}>
        <div className="History__row-1">
          <div className="History__col-1">
            <span>
              <figure>
                <img src={image} alt={title} />
              </figure>
              <h2>{title}</h2>
            </span>
          </div>
          <div className="History__col-2">
            <h1>Sales History</h1>
          </div>
        </div>
        <div className="History__row-2">
          <div className="History-header">
            <h3>Date</h3>
            <h3>Price</h3>
            <h3>Volume</h3>
          </div>
          {history.map((data) => {
            return (
              <div key={uuidv4()} className="History-body">
                <h3>{data.date}</h3>
                <h3>{data.price}</h3>
                <h3>{data.volume}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
