"use client";

import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "@/Components/Footer";
import "../Profile/profile.css"; // Ensure you have the CSS file for styling
import {
  FaUserCircle,
  FaCamera,
  FaHeart,
  FaShoppingCart,
  FaGift,

  FaPalette,
  FaClock,
  FaBell,
  FaEnvelope,
  FaUnlockAlt,
  FaLock
} from "react-icons/fa";

export default function Profile() {
  // User data
  const [user, setUser] = useState({
    name: "Khadija Hamid",
    email: "khadijaaahamid.2003@gmail.com",
    dob: "27-08-2003",
    age: 22,
    location: "Lahore, Pakistan",
    about: "Gift-lover, book fan, tech enthusiast."
  });

  const [favoritesCount] = useState(8);
  const [purchasedCount] = useState(15);
  const [wishlistCount] = useState(4);

  // Tabs
  const tabs = ["Personal", "Preferences", "Activity", "Settings"] as const;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Personal");

  // Helpers for Preferences
  const allCategories = ["Electronics","Books","Fashion","Home Decor","Sports","Beauty","Travel","Food & Drinks"];
  const [favCats] = useState(["Electronics","Books","Beauty"]);
  const [budgetRange, setBudgetRange] = useState<[number, number]>([50, 300]);
  const [occasions, setOccasions] = useState(["Birthday","Wedding"]);
  const [settings, setSettings] = useState({ notifications: true, newsletter: false, theme: "Light" });

  // Activity feed
  const [activities] = useState([
    { id:1, action:"Saved Crystal Heart Necklace to Favorites", time:"2 days ago" },
    { id:2, action:"Purchased Luxury Spa Package", time:"1 week ago" },
    { id:3, action:"Added Modern Lamp to Wishlist", time:"3 weeks ago" }
  ]);

  // Edit handling
  const [isEditing, setIsEditing] = useState(false);
  const handleSave = () => { setIsEditing(false); alert("Profile Updated!"); };

  const [profileImage, setProfileImage] = useState<string | null>(null);

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  }
};


  return (
  <>
    <div className="profile-page">
      <Navbar />

      <section className="profile-intro">
        <h1>My Profile</h1>
        <p>Manage your account and gift preferences</p>
      </section>

      <section className="profile-header">
        <div className="avatar-wrapper">
  <img
    src={profileImage || "/images/flower.jpeg"}
    alt="Avatar"
  />
  <button className="camera-btn" onClick={() => document.getElementById("profile-img-input")?.click()}>
    <FaCamera />
  </button>
  <input
    type="file"
    accept="image/*"
    capture="environment"  // allows camera on mobile
    id="profile-img-input"
    style={{ display: "none" }}
    onChange={handleImageChange}
  />
</div>

        <div className="user-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.dob} • {user.age} years • {user.location}</p>
        </div>
        <div className="stats">
          <div><FaHeart /> {favoritesCount}<span>Favorites</span></div>
          <div><FaShoppingCart /> {purchasedCount}<span>Purchased</span></div>
          <div><FaGift /> {wishlistCount}<span>Wishlists</span></div>
        </div>
      </section>

      <nav className="profile-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => { setActiveTab(tab); setIsEditing(false); }}
          >
            {{
              "Personal": <><FaUserCircle /> Personal</>,
              "Preferences": <><FaPalette /> Preferences</>,
              "Activity": <><FaClock /> Activity</>,
              "Settings": <><FaBell /> Settings</>
            }[tab]}
          </button>
        ))}
      </nav>

      <section className="profile-content">
        {activeTab === "Personal" && (
          <div className="personal-section">
            <div className="header-row">
              <h3><FaUserCircle /> Personal Information</h3>
              <button onClick={()=>setIsEditing(!isEditing)}><FaUnlockAlt /> {isEditing ? "Cancel" : "Edit Profile"}</button>
            </div>
            <form>
              {["name","email","dob","location"].map(field => (
                <input
                  key={field}
                  name={field}
                  type={field==="email"?"email":field==="dob"?"date":"text"}
                  disabled={!isEditing}
                  value={(user as any)[field]}
                  onChange={e => setUser({...user, [field]: e.target.value})}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                />
              ))}
              <h4>About you</h4>
              <textarea disabled={!isEditing} value={user.about} onChange={e=>setUser({...user, about:e.target.value})} placeholder="About me"></textarea>
              {isEditing && <button type="button" className="save-btn" onClick={handleSave}>Save Changes</button>}
            </form>
          </div>
        )}

        {activeTab === "Preferences" && (
          <div className="preferences-section">
            <h3><FaPalette /> Gift Preferences</h3>
            <p>Select your favorite categories:</p>
            <div className="category-grid">
              {allCategories.map(cat => (
                <button key={cat}
                  className={favCats.includes(cat) ? "selected" : ""}
                >{cat}</button>
              ))}
            </div>
            <p>Budget Range: ${budgetRange[0]} - ${budgetRange[1]}</p>
            <input
              type="range"
              min="0" max="1000"
              value={budgetRange[0]}
              onChange={e=>setBudgetRange([+e.target.value, budgetRange[1]])}
            />
            <input
              type="range"
              min="0" max="10000"
              value={budgetRange[1]}
              onChange={e=>setBudgetRange([budgetRange[0], +e.target.value])}
            />
            <p>Occasions:</p>
            <div className="occasion-grid">
              {["Birthday","Wedding","Anniversary","Christmas","Valentine","Graduation"].map(o => (
                <button key={o} className={occasions.includes(o) ? "selected" : ""}>{o}</button>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Activity" && (
          <div className="activity-section">
            <h3><FaClock /> Recent Activity</h3>
            {activities.map(a => (
              <div key={a.id} className="activity-item">
                <p>{a.action}</p>
                <span>{a.time}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Settings" && (
          <div className="settings-section">
            <h3><FaBell /> Settings</h3>
            {[
              ["Push Notifications", "notifications"],
              ["Gift Newsletter", "newsletter"]
            ].map(([label,key])=>(
              <div className="setting-row" key={key}>
                <span><FaEnvelope /> {label}</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={(settings as any)[key]}
                    onChange={()=>setSettings({...settings,[key]: !(settings as any)[key]})}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            ))}
            <div className="setting-row">
              <span><FaPalette /> Theme: {settings.theme}</span>
              <button onClick={()=>setSettings({...settings, theme: settings.theme==="Light"?"Dark":"Light"})}>Toggle Theme</button>
            </div>
            <div className="setting-row">
              <span><FaLock /> Change Password</span>
              <button onClick={()=>alert("Change password clicked!")}>Go</button>
            </div>
          </div>
        )}
      </section>
    </div>
    <Footer />
  </>
  );
}
