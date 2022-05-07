import React from "react";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import burgerMenu from "./burger-menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-links">
        <Link to="/">
          <img id="logo" src={logo} alt="snap" />
        </Link>

        <nav id="nav">
          <Link className="nav-links" to="/features">
            Features
          </Link>
          <Link className="nav-links" to="/company">
            Company
          </Link>
          <Link className="nav-links" to="/careers">
            Careers
          </Link>
          <Link className="nav-links" to="/about">
            About
          </Link>
        </nav>
      </div>
      <div id="hamburger-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
