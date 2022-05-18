import React from "react";

// Components
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
