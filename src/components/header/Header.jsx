import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>Consctruction LOGO</div>
      <div className="header__menu">
        <ul className="header__navbar">
          <li>
            <Link className="navbar-btn" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-btn" to="/maintenance">
              Maintenance
            </Link>
          </li>
          <li>
            <Link className="navbar-btn" to="/construction">
              Construction
            </Link>
          </li>
          <li>
            <Link className="navbar-btn" to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
