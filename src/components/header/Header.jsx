import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../image/6871.png";

function Header() {
  return (
    <div className="header">
      <div>
        <Link className="header__logo" to="/">
          <img className="logo-img" src={logo} alt="#" />
          Building Company
        </Link>
      </div>
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
