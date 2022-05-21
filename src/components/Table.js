import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

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
  const [favoriteCurrenciesName, setFavoriteCurrenciesName] = useState([]);
  const [favoriteCurrenciesImage, setFavoriteCurrenciesImage] = useState([]);

  const [cookies, setCookie] = useCookies([{}]);

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await getProducts());
      setLoad(false);
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    setCookie("Names", `${favoriteCurrenciesName}`, { path: "/" });
    setCookie("Images", `${favoriteCurrenciesImage}`, { path: "/" });
  }, [favoriteCurrenciesName, favoriteCurrenciesImage]);

  const addCookiesHandler = (title, image) => {
    setFavoriteCurrenciesName([...favoriteCurrenciesName, title]);
    setFavoriteCurrenciesImage([...favoriteCurrenciesImage, image]);
  };

  return (
    <div className="Table">
      <div
        className={
          favoriteCurrenciesName.length > 0 ? "favorites" : "empty-favorites"
        }
      >
        <div className="favorites-row">
          <div className="favorites-header">
            <h1>Favorites List</h1>
          </div>
          <div className="Favorites-body">
            <span className="Favorite__row-1">
              {favoriteCurrenciesImage.map((image) => {
                return (
                  <figure key={uuidv4()}>
                    <img src={image} />
                  </figure>
                );
              })}
            </span>
            <span className="Favorite__row-2">
              {favoriteCurrenciesName.map((name) => {
                return <h2 key={uuidv4()}>{name}</h2>;
              })}
            </span>
          </div>
        </div>
      </div>
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
                key={uuidv4()}
                image={crypto.currency1.image}
                title={crypto.currency1.title}
                symbol={crypto.currency1.code}
                price={crypto.price_info.price}
                change={crypto.price_info.change}
                addCookiesHandler={addCookiesHandler}
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
