import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link to="/" className="decktopMenuListItem">
          Home
        </Link>
        <Link to="/about" className="decktopMenuListItem">
          About
        </Link>
        <Link to="/portfolio" className="decktopMenuListItem">
          Portfolio
        </Link>
        <Link to="/clients" className="decktopMenuListItem">
          Clients
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
