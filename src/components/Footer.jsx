import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Aquafine Minerals</h3>
        <p className="cust">Customised Packaged Drinking Water for Brands, Events & Businesses.</p>

        <div className="footer-icons">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/aquafine_minerals_?igsh=MTE5M2Fia243dzV0ag%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" className="footer-icon" />
          </a>

          <a href="mailto:aquafineminerals2026@gmail.com">
            <img src="/gmail.png" alt="Gmail" className="footer-icon" />
          </a>
          <a href="https://www.facebook.com/share/17YQ279Ztr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" className="footer-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aquafine Minerals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
