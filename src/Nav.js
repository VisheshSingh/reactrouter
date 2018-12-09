import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <h1 className="brand">PokeTimes</h1>
      <p className="navLinks">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
      </p>
    </div>
  );
};

export default Nav;
