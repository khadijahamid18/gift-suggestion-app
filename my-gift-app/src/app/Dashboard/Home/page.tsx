"use client";

import React from "react";
import Link from "next/link";
import "../Home/Home.css";
import {categories} from "@/Components/Card"; // Import categories from Card component
import Navbar from "@/Components/Navbar"; 
import Card from "@/Components/Card"; // Import Card component
// import {
//   FaLaptop,
//   FaGem,
//   FaBook,
//   FaHome,
//   FaTshirt,
//   FaRegSmile,
// } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// Featured categories
// const featuredCategories = [
//   {
//     icon: <FaLaptop />,
//     title: "Electronics",
//     description: "Gadgets and tech gifts",
//   },
//   {
//     icon: <FaGem />,
//     title: "Jewelry",
//     description: "Beautiful accessories",
//   },
//   {
//     icon: <FaBook />,
//     title: "Books",
//     description: "Knowledge and stories",
//   },
//   {
//     icon: <FaHome />,
//     title: "Home Decor",
//     description: "Beautiful living spaces",
//   },
//   {
//     icon: <FaTshirt />,
//     title: "Fashion",
//     description: "Stylish apparel",
//   },
//   {
//     icon: <FaRegSmile />,
//     title: "Experiences",
//     description: "Memorable moments",
//   },
// ];
export default function MainPage() {
  // const router = useRouter(); // Removed unused variable
  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        {/* Header Section */}
        <div className="home-header">
          <div className="floating-gift">🎁</div>
          <h1 className="app-title">Gift Finder</h1>
          <p className="app-description">
            Discover the perfect gift for every occasion.
          </p>

          <div className="button-group">
            {/* ✅ Wrap with Link */}
            <Link href="/auth/Login">
              <button className="home-btn login">Login</button>
            </Link>
            <Link href="/auth/Signup">
              <button className="home-btn signup">Sign Up</button>
            </Link>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="home-featured">
          <h2 className="section-heading">Featured Categories</h2>
          <div className="home-card-grid">
            {categories.map((cat, index) => (
              <Card
                key={index}
                mode="category"
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
              />
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}
