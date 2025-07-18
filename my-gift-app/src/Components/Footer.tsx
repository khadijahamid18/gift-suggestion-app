"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import "../Styles/Components/Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <Link href="/Dashboard/Layout" className="footer-item">
        <FaHome className="footer-icon" />
        <span>Home</span>
      </Link>

      <Link href="/Dashboard/Cart" className="footer-item">
        <FaShoppingCart className="footer-icon" />
        <span>Cart</span>
      </Link>
    </footer>
  );
};

export default Footer;
