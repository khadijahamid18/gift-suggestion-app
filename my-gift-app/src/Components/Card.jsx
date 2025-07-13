"use client";

import React from "react";
import { useState } from "react";
import "../Styles/Components/Card.css";
import {
  FaLaptop,
  FaGem,
  FaBook,
  FaHome,
  FaTshirt,
  FaRegSmile,
  FaStar,
  FaGift,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaLaptop />,
    title: "Electronics",
    description: "Gadgets and tech gifts",
  },
  {
    icon: <FaGem />,
    title: "Jewelry",
    description: "Beautiful accessories",
  },
  {
    icon: <FaRegSmile />,
    title: "Experiences",
    description: "Memorable moments",
  },
  {
    icon: <FaBook />,
    title: "Books",
    description: "Knowledge and stories",
  },
  {
    icon: <FaHome />,
    title: "Home Decor",
    description: "Beautiful living spaces",
  },
  {
    icon: <FaTshirt />,
    title: "Fashion",
    description: "Stylish apparel",
  },
];

const popularGifts = [
  {
    id: 1,
    image: "/images/headphones.png",
    category: "Electronics",
    rating: 4.8,
    sold: "2,300 sold",
    name: "Wireless Bluetooth Headphones",
    description: "Premium sound quality with noise cancellation",
    price: "$129.99",
  },
  {
    id: 2,
    image: "/images/lamp.png",
    category: "Home Decor",
    rating: 4.5,
    sold: "1,100 sold",
    name: "Modern Touch Table Lamp",
    description: "Elegant lighting for your space",
    price: "$79.99",
  },
  {
    id: 3,
    image: "/images/book.png",
    category: "Books",
    rating: 4.9,
    sold: "3,500 sold",
    name: "The Great Adventure Novel",
    description: "A story that keeps you hooked",
    price: "$18.99",
  },
  {
    id: 4,
    image: "/images/necklace.png",
    category: "Jewelry",
    rating: 4.6,
    sold: "900 sold",
    name: "Crystal Heart Necklace",
    description: "Sparkling elegance for loved ones",
    price: "$59.99",
  },
  {
    id: 5,
    image: "/images/watch.png",
    category: "Fashion",
    rating: 4.7,
    sold: "1,400 sold",
    name: "Classic Leather Watch",
    description: "Timeless style with premium build",
    price: "$109.00",
  },
  {
    id: 6,
    image: "/images/spa.png",
    category: "Experiences",
    rating: 5.0,
    sold: "600 sold",
    name: "Luxury Spa Package",
    description: "Relax and unwind with full treatment",
    price: "$199.00",
  },
];

const Card = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };
  return (
    <>
      {/* Browse by Category */}
      <div className="browse-section">
        <h2 className="browse-heading">Browse by Category</h2>

        <div className="card-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <div className="card-icon">{cat.icon}</div>
              <h3 className="card-title">{cat.title}</h3>
              <p className="card-desc">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Most Popular Gifts */}
      <div className="popular-section">
        <div className="popular-header">
          <div>
            <h2 className="popular-title">Most Popular Gifts</h2>
            <p className="popular-subtitle">
              Trending gifts loved by our community
            </p>
          </div>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="popular-cards">
          {popularGifts.map((item) => (
            <div key={item.id} className="gift-card">
              {/* Favorite Button */}
              <button
                className={`fav-btn ${
                  favorites.includes(item.id) ? "favorited" : ""
                }`}
                onClick={() => toggleFavorite(item.id)}
              >
                {favorites.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
              </button>

              {/* Image & Category */}
              <div className="card-image-section">
                <img src={item.image} alt={item.name} className="card-img" />
                <span className="card-category">{item.category}</span>
              </div>

              {/* Rating */}
              <div className="card-rating">
                <FaStar className="star-icon" />
                <span>{item.rating}</span>
                <span className="sold-count">• {item.sold}</span>
              </div>

              <h3 className="card-title">{item.name}</h3>
              <p className="card-desc">{item.description}</p>

              {/* Footer */}
              <div className="card-footer">
                <span className="card-price">{item.price}</span>
                <button className="add-btn">
                  <FaGift className="btn-icon" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
