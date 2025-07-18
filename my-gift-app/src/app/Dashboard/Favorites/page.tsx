"use client";

import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import "../Favorites/Favorites.css";
import Footer from "@/Components/Footer";
import {
  FaHeart,
  FaTrashAlt,
  FaStar,
  FaGift
} from "react-icons/fa";

// Hardcoded initial favorites (replace later with real data)
const initialFavorites = [
  {
    id: 1,
    image: "/images/necklace.jpeg",
    category: "Jewelry",
    rating: 4.6,
    reviews: 120,
    name: "Crystal Heart Necklace",
    price: "$59.99"
  },
  {
    id: 2,
    image: "/images/book.jpeg",
    category: "Books",
    rating: 4.9,
    reviews: 310,
    name: "The Great Adventure Novel",
    price: "$18.99"
  },
  {
    id: 3,
    image: "/images/watch.jpeg",
    category: "Fashion",
    rating: 4.7,
    reviews: 85,
    name: "Classic Leather Watch",
    price: "$109.00"
  },
  {
    id: 4,
    image: "/images/chocolate.jpeg",
    category: "Cooking",
    rating: 4.7,
    reviews: 85,
    name: "Chocolate Fondue Set",
    price: "$129.00"
  },
  {
    id: 5,
    image: "/images/flower.jpeg",
    category: "Flowers",
    rating: 4.7,
    reviews: 85,
    name: "Flowers Bouquet",
    price: "$129.00"
  }
];


export default function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <>
      <div className="favorites-page">

        <Navbar />
        
        {/* Header */}
        <header className="favorites-header">
          <FaHeart className="nav-icon" style={{ fontSize: "70px", color: "#b3006f" }} />
          <h2>Your Favorite Gifts</h2>
          <p>All your saved gifts in one place — perfect for wishlist sharing or quick decisions.</p>
          <div className="favorite-count">
            <FaHeart className="heart-icon" /> {favorites.length} item{favorites.length !== 1 && "s"} saved
          </div>
        </header>

        {/* Favorites Grid */}
        <section className="favorites-grid">
          {favorites.length ? favorites.map(item => (
            <div key={item.id} className="favorite-card">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} className="card-img" />
                <button className="delete-btn" onClick={() => removeFavorite(item.id)}>
                  <FaTrashAlt />
                </button>
                <span className="card-category">{item.category}</span>
              </div>
              <h3 className="card-name">{item.name}</h3>
              <div className="card-rating">
                <FaStar className="star-icon" /> {item.rating} ({item.reviews} reviews)
              </div>
              <div className="card-footer">
                <span className="card-price">{item.price}</span>
                <button className="card-add-btn">
                  <FaGift className="btn-icon" /> Add to Cart
                </button>
              </div>
            </div>
          )) : (
            <p className="no-favorites">You haven&#39;t saved any favorites yet.</p>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
