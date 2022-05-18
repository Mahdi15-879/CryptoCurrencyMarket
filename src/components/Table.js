import React, { useState, useEffect } from "react";

// API
import { getProducts } from "../services/api";

// Components
import Card from "./Card";

// Styles
import "./Table.css";

const Table = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(20);

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await getProducts());
      setLoad(false);
    };

    fetchAPI();
  }, []);

  return (
    <div className="Table">
      <div className="Table-header">
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>24h Change</h3>
      </div>
      {load ? (
        <h1 className="Loading">Loading...</h1>
      ) : (
        data.results.map((crypto, index) => {
          if (index <= page) {
            return (
              <Card
                key={crypto.id}
                image={crypto.currency1.image}
                title={crypto.currency1.title}
                symbol={crypto.currency1.code}
                price={crypto.price_info.price}
                change={crypto.price_info.change}
              />
            );
          } else {
            return false;
          }
        })
      )}
      <div className="next-btn">
        <button
          onClick={() => {
            setPage(page + 20);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
