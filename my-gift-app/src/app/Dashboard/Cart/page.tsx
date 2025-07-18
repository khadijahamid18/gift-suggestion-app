"use client";

import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import "../Cart/Cart.css"; // Ensure you have a CSS file for styling
import { FaGift, FaTrashAlt } from "react-icons/fa";
import Footer from "@/Components/Footer";


// Sample cart items (hardcoded for now)
const initialCart = [
  {
    id: 1,
    image: "/images/watch.jpeg",
    name: "Stylish Men Watch",
    price: 129.99,
    quantity: 1,
  },
  {
    id: 2,
    image: "/images/necklace.jpeg",
    name: "Crystal Heart Necklace",
    price: 59.99,
    quantity: 2,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id: number, change: number) => {
    setCart(current =>
      current.map(item =>
        item.id !== id
          ? item
          : { ...item, quantity: Math.max(1, item.quantity + change) }
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <div className="cart-page">
        <Navbar />

        <header className="cart-header">
          <h1>🛍️ Your Cart</h1>
          <p>You have {cart.length} {cart.length === 1 ? "item" : "items"} in your cart</p>
        </header>

        {cart.length ? (
          <section className="cart-list">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="price-qty">
                    <span className="item-price">${item.price.toFixed(2)}</span>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </section>
        ) : (
          <p className="empty-cart">Your cart is empty. Start shopping!</p>
        )}

        {cart.length > 0 && (
          <section className="cart-summary">
            <div className="subtotal">Subtotal: <strong>${subtotal.toFixed(2)}</strong></div>
            <button className="checkout-btn">
              <FaGift /> Proceed to Checkout
            </button>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}
