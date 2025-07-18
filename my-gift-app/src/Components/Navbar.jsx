"use client"; // Required for client-side navigation

import React from "react";
import Link from "next/link"; // Import Next.js Link for routing
import "../Styles/Components/Navbar.css"; // Custom CSS file for styling
import { FaGift, FaSearch, FaHeart, FaUser } from "react-icons/fa"; // Icons

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo with Gift Icon */}
      <div className="navbar-logo">
        <FaGift className="gift-icon" />
        <span>GIFT FINDER</span>
      </div>

      {/* Right: Navigation options with links and icons */}
      <div className="navbar-options">
        {/* Gift Search */}
        <Link href="/Dashboard/Gift-Search" className="nav-item">
          <FaSearch className="nav-icon" />
          <span>Gift Search</span>
        </Link>

        {/* Favorites */}
        <Link href="/Dashboard/Favorites" className="nav-item">
          <FaHeart className="nav-icon" />
          <span>Favorites</span>
        </Link>

        {/* Profile */}
        <Link href="/Dashboard/Profile" className="nav-item">
          <FaUser className="nav-icon" />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
