import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <h1>PokeTimes</h1>
      <p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default Nav;
