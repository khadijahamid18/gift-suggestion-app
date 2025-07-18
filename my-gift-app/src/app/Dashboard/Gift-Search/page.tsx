"use client";

import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import "../Gift-Search/giftSearch.css"; // Ensure you have this CSS file for styling
import { FaSearch, FaHistory, FaGift } from "react-icons/fa";
import Footer from "@/Components/Footer";

// Sample gift data
const allGifts = [
  { id: 1, name: "Wireless Bluetooth Headphones", image: "/images/headphones.jpeg" },
  { id: 2, name: "Crystal Heart Necklace", image: "/images/necklace.jpeg" },
  { id: 3, name: "The Great Adventure Novel", image: "/images/book.jpeg" },
  { id: 4, name: "Luxury Flower Bouqet", image: "/images/flower.jpeg" },
  { id: 5, name: "Classic Leather Watch", image: "/images/watch.jpeg" },
  { id: 6, name: "Modern Touch Table Lamp", image: "/images/chocolate.jpeg" },
  { id: 7, name: "Luxury Flowers Pot", image: "/images/flower.jpeg" },
];

export default function GiftSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof allGifts>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleSearch = () => {
    if (!query.trim()) return;
    const results = allGifts.filter(gift =>
      gift.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setRecentSearches(prev => [query, ...prev.filter(q => q !== query)].slice(0, 5));
  };

  const handleRecentClick = (term: string) => {
    setQuery(term);
    const results = allGifts.filter(gift =>
      gift.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="gift-search-page">
        <Navbar />

        <div className="search-container">
          <h1 className="page-title">Find the Perfect Gift 🎁</h1>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for gifts..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}><FaSearch /></button>
          </div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="recent-searches">
              <h4><FaHistory /> Recent Searches:</h4>
              <div className="recent-tags">
                {recentSearches.map((term, idx) => (
                  <button key={idx} onClick={() => handleRecentClick(term)}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="results-grid">
            {searchResults.length > 0 ? (
              searchResults.map(gift => (
                <div className="result-card" key={gift.id}>
                  <img src={gift.image} alt={gift.name} />
                  <h3>{gift.name}</h3>
                  <button className="add-btn">
                    <FaGift className="btn-icon" /> Add to Cart
                  </button>
                </div>
              ))
            ) : (
              query && <p className="no-results">No results found for &quot;{query}&quot;.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
