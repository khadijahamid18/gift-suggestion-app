"use client";

import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import "../Checkout/checkout.css";
import Footer from "@/Components/Footer";
import { FaGift, FaCreditCard, FaTruck, FaUser } from "react-icons/fa";

export default function Checkout() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Payment Successful! 🎉");
  };

  return (
    <>
      <div className="checkout-page">
        <Navbar />

        <section className="checkout-container">
          <h1 className="checkout-title"><FaGift /> Checkout</h1>
          <p className="checkout-desc">Confirm your details and complete your gift purchase</p>

          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Shipping Info */}
            <div className="form-section">
              <h2><FaTruck /> Delivery Information</h2>
              <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
              <input name="email" type="email" placeholder="Email Address" required onChange={handleChange} />
              <input name="address" placeholder="Street Address" required onChange={handleChange} />
              <div className="form-row">
                <input name="city" placeholder="City" required onChange={handleChange} />
                <input name="zip" placeholder="ZIP Code" required onChange={handleChange} />
              </div>
            </div>

            {/* Payment Info */}
            <div className="form-section">
              <h2><FaCreditCard /> Payment Details</h2>
              <input name="cardNumber" placeholder="Card Number" required onChange={handleChange} />
              <div className="form-row">
                <input name="expiry" placeholder="MM/YY" required onChange={handleChange} />
                <input name="cvv" placeholder="CVV" required onChange={handleChange} />
              </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h2><FaUser /> Order Summary</h2>
              <ul>
                <li>🎧 Headphones - $129.99</li>
                <li>📚 Book - $18.99</li>
                <li>💎 Necklace - $59.99</li>
              </ul>
              <div className="total">Total: <strong>$208.97</strong></div>
            </div>

            <button type="submit" className="pay-btn">
              <FaGift /> Pay & Confirm
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
