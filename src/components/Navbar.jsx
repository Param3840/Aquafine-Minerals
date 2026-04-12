import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo left */}
      <div className="navbar-logo">Aquafine</div>

      {/* Right side menu icon (only visible when closed) */}
      {!isOpen && (
        <div className="menu-btn" onClick={() => setIsOpen(true)}>
          <img src="/menu.png" alt="Menu" />
        </div>
      )}

      {/* Dropdown links */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>OUR HERITAGE</a></li>
        <li><a href="#collection" onClick={() => setIsOpen(false)}>COLLECTIONS</a></li>
        <li><a href="#price" onClick={() => setIsOpen(false)}>PRICE</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>INQUIRY</a></li>
        {isOpen && (
          <li className="close-btn" onClick={() => setIsOpen(false)}>
            ✖ Close
          </li>
        )}
      </ul>

      {/* Shop Now button (hidden in mobile view) */}
      <div className="navbar-btn">
        <a 
          href="https://wa.me/918271748494?text=Hello%20Aquafine%20Minerals%2C%20I%20would%20like%20to%20inquire%20about%20your%20products." 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button>SHOP NOW</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
