import React from "react";
import "./Billboard.css";
import { FaRegBuilding, FaImage, FaQrcode, FaBookOpen, FaHashtag, FaTags, FaBullhorn, FaMapMarkerAlt } from "react-icons/fa";

const Billboard = () => {
  return (
    <section className="billboard">
      <div className="billboard-header">
        <h2>WHAT WE DO ?</h2>
        <h3>Every Bottle is Your Canvas</h3>
        <p>
          “We transform essential hydration into a high-impact marketing tool.
          Every element of the label is intentionally configurable to echo your brand’s excellence.”
        </p>
      </div>

      <div className="billboard-box">
        <div className="billboard-grid">
          <div className="billboard-item">
            <FaRegBuilding className="icon" />
            <h4>Logo Branding</h4>
            <p>High-definition corporate identity placement with precision label application.</p>
          </div>
          <div className="billboard-item">
            <FaImage className="icon" />
            <h4>Visual Imagery</h4>
            <p>Full-color photographic printing for marketing or campaign impact.</p>
          </div>
          <div className="billboard-item">
            <FaQrcode className="icon" />
            <h4>Smart Tech</h4>
            <p>Bridge the physical and digital worlds with QR codes to your landing page.</p>
          </div>
          <div className="billboard-item">
            <FaBookOpen className="icon" />
            <h4>Catalog/Menu</h4>
            <p>Room for hospitality, education, or lifestyle offerings directly on the bottle.</p>
          </div>
          <div className="billboard-item">
            <FaHashtag className="icon" />
            <h4>Social Handles</h4>
            <p>High-visibility display of your company’s social media presence.</p>
          </div>
          <div className="billboard-item">
            <FaTags className="icon" />
            <h4>Custom Pricing</h4>
            <p>Legally compliant custom MSRP display for your retail strategy.</p>
          </div>
          <div className="billboard-item">
            <FaBullhorn className="icon" />
            <h4>Brand Slogan</h4>
            <p>Integrate your brand message with high-impact typographic label designs.</p>
          </div>
          <div className="billboard-item">
            <FaMapMarkerAlt className="icon" />
            <h4>Location Info</h4>
            <p>Guide customers to your flagship store, event, or regional locations with address details.</p>
          </div>
        </div>
        <p className="slide">Slide to know more</p>
      </div>
    </section>
  );
};

export default Billboard;
