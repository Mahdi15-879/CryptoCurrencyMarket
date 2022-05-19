import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link className="title" to="/">
          BitPin
        </Link>
        <Link className="Favorite" to="/favorites">
          Wishlist
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
