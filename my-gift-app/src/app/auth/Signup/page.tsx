"use client";

import React, { useState } from "react";
import "../Signup/signup.css";
import { FaGift } from "react-icons/fa";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    interests: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm your password.";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ No validation errors, proceed
    console.log("Form Submitted:", formData);
    alert("Signed up successfully!");
    // Reset form if needed
    // setFormData({ name: "", email: "", ... });
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <FaGift className="signup-icon" />
        <h2 className="signup-title">Create Your Gift Finder Account</h2>
        <p className="signup-subtitle">Get personalized gift suggestions</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

          <input
            type="number"
            name="age"
            placeholder="Your Age (optional)"
            value={formData.age}
            onChange={handleChange}
          />

          <textarea
            name="interests"
            placeholder="What kind of gifts do you like? (optional)"
            rows={3}
            value={formData.interests}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p className="signup-footer">
            Already have an account? <a href="/auth/Login">Login here</a>   
          </p>

        </form>
      </div>
    </div>
  );
}
