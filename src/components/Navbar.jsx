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
          <img src="src/assets/menu.png" alt="Menu" />
        </div>
      )}

      {/* Dropdown links */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><a href="#heritage">OUR HERITAGE</a></li>
        <li><a href="#collections">COLLECTIONS</a></li>
        <li><a href="#bespoke">BESPOKE</a></li>
        <li><a href="#inquiry">INQUIRY</a></li>
        {isOpen && (
          <li className="close-btn" onClick={() => setIsOpen(false)}>
            ✖ Close
          </li>
        )}
      </ul>

      {/* Shop Now button (hidden in mobile view) */}
      <div className="navbar-btn">
        <button>SHOP NOW</button>
      </div>
    </nav>
  );
};

export default Navbar;
