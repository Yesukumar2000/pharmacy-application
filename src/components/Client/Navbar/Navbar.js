import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <img src="https://www.ts4training.com/uploads/1/6/9/2/16928036/published/caduceus-blue-medical-health-symbol-500-clr-5757_1.gif?1582982786" alt="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/tablets">Tablets</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/" >Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
