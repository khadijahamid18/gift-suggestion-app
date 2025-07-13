// File: Navbar.jsx

import React from "react";
import "../Styles/Components/Navbar.css"; // Custom CSS file for styling
import { FaGift, FaSearch, FaHeart, FaUser } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo with Gift Icon */}
      <div className="navbar-logo">
        <FaGift className="gift-icon" />
        <span>GIFT FINDER</span>
      </div>

      {/* Right: Navigation options with icons */}
      <div className="navbar-options">
        <div className="nav-item">
          <FaSearch className="nav-icon" />
          <span>Gift Search</span>
        </div>
        <div className="nav-item">
          <FaHeart className="nav-icon" />
          <span>Favorites</span>
        </div>
        <div className="nav-item">
          <FaUser className="nav-icon" />
          <span>Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
