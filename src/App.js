import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import FavoriteList from "./components/FavoriteList";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
