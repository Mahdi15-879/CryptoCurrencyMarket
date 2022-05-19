import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// Components

// Styles
import "./FavoriteList.css";

const FavoriteList = () => {
  const [namesFromCookie, setNamesFromCookie] = useState([]);
  const [imagesFromCookie, setImagesFromCookie] = useState([]);
  const [load, setLoad] = useState(true);

  const [cookies, setCookie] = useCookies([]);

  useEffect(() => {
    console.log(namesFromCookie);
  }, [load]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNamesFromCookie(await cookies.Names.split(","));
      setImagesFromCookie(await cookies.Images.split(","));
      setLoad(false);
    };

    fetchAPI();
  }, []);

  return (
    <div className="FavoriteList">
      {load ? (
        <h1 className="Loading">Loading...</h1>
      ) : (
        <div>
          <span className="FavoriteList__row-1">
            {imagesFromCookie.map((image, index) => {
              return (
                <figure key={index}>
                  <img src={image} />
                </figure>
              );
            })}
          </span>
          <span className="FavoriteList__row-2">
            {namesFromCookie.map((name) => {
              return <h2 key={name}>{name}</h2>;
            })}
          </span>
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
