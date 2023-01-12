import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../image/logo1.png";

function Header(props) {
  return (
    <div className="header">
      <div>
        <Link className="header__logo" to="/">
          <img className="logo-img" src={logo} alt="#" />
        </Link>
      </div>
      <div className="header__menu">
        <ul className="header__navbar">
          {props.links.map((el, i) => {
            return (
              <li key={i}>
                <Link className="navbar-btn" to={el.link}>
                  {el.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
