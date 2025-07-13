"use client";

import "./styles.css";
import { FaGift, FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { useState } from "react";

export default function Layout() {
  const [giftType, setGiftType] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <div className="header">
        <FaGift className="gift-icons" />
        <h1>Gift Suggestion App</h1>
      </div>

      <p style={{ color: "black", fontSize: "18px", marginTop: "10px" }}>
        Find the perfect gift for your loved ones with our intelligent
        recommendation system
      </p>

      {/* Selection Section */}
      <div className="selection-container">
        {/* Title with Search Icon */}
        <div className="selection-header">
          <FaSearch className="search-header-icon" />
          <div>
            <h2 className="selection-title">Find the Perfect Gift</h2>
            <p className="selection-subtitle">
              Tell us more about who you're shopping for and we'll suggest the
              best gift.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="selection-form">
          {/* Occasion */}
          <div className="form-group">
            <label>Occasion</label>
            <select>
              <option>Select Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Wedding</option>
              <option>Christmas</option>
              <option>Valentine's Day</option>
              <option>Mother's Day</option>
              <option>Father's Day</option>
              <option>Graduation</option>
            </select>
          </div>

          {/* Gift Type */}
          <div className="form-group">
            <label>Gift Type</label>
            <select onChange={(e) => setGiftType(e.target.value)}>
              <option>Select Gift Type</option>
              <option>Electronics</option>
              <option>Jewelry</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>Home Decor</option>
              <option>Experiences</option>
              <option>Sports</option>
              <option>Drinks</option>
              <option>Toys & Games</option>
            </select>
          </div>

          {/* Age Group */}
          <div className="form-group">
            <label>Age Group</label>
            <select onChange={(e) => setAgeGroup(e.target.value)}>
              <option>Select Age Group</option>
              <option>0–5 years</option>
              <option>6–12 years</option>
              <option>13–17 years</option>
              <option>18–25 years</option>
              <option>26–40 years</option>
              <option>41–50 years</option>
              <option>50+ years</option>
            </select>
          </div>

          {/* Budget */}
          <div className="form-group">
            <label>Budget</label>
            <input type="number" placeholder="Enter your budget in $" />
          </div>

          {/* Relationship */}
          <div className="form-group">
            <label>Relationship</label>
            <select>
              <option>Select Relationship</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Spouse/Partner</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Friend</option>
              <option>Colleague</option>
              <option>Child</option>
              <option>Grandparent</option>
            </select>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Unisex</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="submit-button-container">
            <button className="submit-button">
              <FaGift className="gift-btn-icon" />
              Find Perfect Gift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
