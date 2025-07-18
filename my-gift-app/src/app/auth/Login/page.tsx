"use client";

import React, { useState } from "react";
import "../Login/login.css"; // Adjust the path as needed
import { FaGift } from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on type
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.password.trim()) newErrors.password = "Password is required.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // All good: proceed
    console.log("Login Success:", formData);
    alert("Login successful!");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <FaGift className="login-icon" />
        <h2 className="login-title">Welcome Back to Gift Finder</h2>
        <p className="login-subtitle">Log in to explore the perfect gifts</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="login-footer">
            Don&#39;t have an account? <a href="/auth/Signup">Sign up here</a>
          </p>

        </form>
      </div>
    </div>
  );
}
