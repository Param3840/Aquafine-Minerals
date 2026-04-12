import React, { useState } from "react";
import "./Price.css";

const Price = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { img: "/1000mlcircle.png", volume: "1000 ML", price: "₹210", pcs: "12 pcs", note: "PREMIUM SHAPE" },
    { img: "/500mlcircle.png", volume: "500 ML", price: "₹240", pcs: "24 pcs", note: "PREMIUM SHAPE" },
    { img: "/1000mlsqr.png", volume: "1000 ML", price: "₹150", pcs: "12 pcs", note: "SQUARE SHAPE" },
    { img: "/500mlsqr.png", volume: "500 ML", price: "₹200", pcs: "24 pcs", note: "SQUARE SHAPE" },
    { img: "/200mlsqr.png", volume: "200 ML", price: "₹150", pcs: "24 pcs", note: "SQUARE SHAPE" },
  ];

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <section className="price-section" id="price">
      <h2>CUSTOMISED WATER BOTTLE PRICE LIST</h2>
       <p className="price-subtext">
    Transparent wholesale pricing for premium and square bottle designs. 
    Branding and custom labels available for bulk orders.
  </p>
      <div className="price-grid">
        {products.map((item, i) => (
          <div
            key={i}
            className="price-card"
            onClick={() => openImage(item.img)}  // ✅ pura card clickable
          >
            <img src={item.img} alt={item.volume} className="price-img" />
            <h3>{item.volume}</h3>
            <p className="price">{item.price}</p>
            <p className="pcs">{item.pcs}</p>
            {item.note && <p className="note">{item.note}</p>}
          </div>
        ))}
      </div>
      <p className="notes">FOR NORMAL BOTTLES PLEASE CONTACT US ON WHATSAPPP</p>

      {/* ✅ Modal Pop‑up */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="close2-btn">&times;</span>
          <img src={selectedImage} alt="Selected Bottle" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default Price;
