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

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await getProducts());
      setLoad(false);
    };

    fetchAPI();
  }, []);

  return (
    <div className="Table">
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <Card
          image={data.results[0].currency1.image}
          title={data.results[0].currency1.title}
          symbol={data.results[0].currency1.code}
          price={data.results[0].price_info.price}
          change={data.results[0].price_info.change}
        />
      )}
    </div>
  );
};

export default Table;
