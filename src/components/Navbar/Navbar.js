import React, { Component } from "react";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "../../img/icon-menu.svg";

export default class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="navbar">
        <div className="left-links">
          <Link to="/">
            <img id="logo" src={logo} alt="snap" />
          </Link>

          <nav className={this.state.clicked ? "nav active" : "nav"}>
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
        <div className="hamburger-menu" onClick={this.handleClick}>
          <img src={menu} alt="" />
        </div>
      </div>
    );
  }
}
