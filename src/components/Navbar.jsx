import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import burger icon
import "./Navbar.css";
import Logo from "../assets/ScorcheTechLogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="ScorcheTech Logo" />
          <h4>
            <span className="txtGrad">Scorche</span>Tech
          </h4>
        </div>

        {/* Main Navbar Links */}
        <div className={`navlinks ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {/* Signup button inside the list */}
            <li className="signup-item">
              <Link to="/signup">
                <button className="gradient-button">Signup</button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Burger Icon */}
        <div className="burger-icon" onClick={toggleMenu}>
          <FaBars size={24} color="#d7263d" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
