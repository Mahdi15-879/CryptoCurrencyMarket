import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./FavoriteList.css";

const FavoriteList = () => {
  const [namesFromCookie, setNamesFromCookie] = useState([]);
  const [imagesFromCookie, setImagesFromCookie] = useState([]);
  const [load, setLoad] = useState(true);

  const [cookies, setCookie] = useCookies([]);

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
            {imagesFromCookie.map((image) => {
              return (
                <figure key={uuidv4()}>
                  <img src={image} />
                </figure>
              );
            })}
          </span>
          <span className="FavoriteList__row-2">
            {namesFromCookie.map((name) => {
              return <h2 key={uuidv4()}>{name}</h2>;
            })}
          </span>
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
