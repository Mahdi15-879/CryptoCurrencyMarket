import React, { useState, useEffect } from "react";

// Components
import Table from "./Table";

const Home = () => {
  return (
    <div className="Home">
      <h1>CryptoCurrencies</h1>
      <Table />
    </div>
  );
};

export default Home;
