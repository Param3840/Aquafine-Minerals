import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-left">
        <h1>Aquafine Minerals</h1>
        <p className="ByShiva">By Shiva Industries</p>
        <p>
          Customised Packaged Drinking Water for Brands, Events & Businesses.
          Elevate your identity with every sip.
        </p>
        <div className="hero-buttons">
          <a 
            href="https://wa.me/918271748494" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="order-btn">🛒 Order Now</button>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img 
          className="firstBottle" 
          src="/firstBottlethree.png" 
          alt="Aquafine Bottle" 
        />
      </div>
    </div>
  );
};

export default Hero;
