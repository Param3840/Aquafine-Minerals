import React, { useState } from "react";
import "./Collection.css";

const Collection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="collection">
      <div className="collection-header">
        <h2>OUR COLLECTION</h2>
        <p>Explore our range of premium bottle silhouettes with transparent wholesale pricing.</p>
      </div>

      {/* ✅ Premium Bottles */}
      <div className="collection-series premium-series">
        <h3>Premium Bottles</h3>
        <div className="premium-images">
          {["col1.png","col2.png","col3.png","col4.png","col5.png","col6.png"].map((img, i) => (
            <img
              key={i}
              className="premium-img"
              src={`src/assets/${img}`}
              alt={`Premium Bottle ${i+1}`}
              onClick={() => openImage(`src/assets/${img}`)}
            />
          ))}
        </div>
        <p className="slide">Slide to view more</p>
      </div>

      {/* ✅ Square Series */}
      <div className="collection-series square-series">
        <h3>Square Series</h3>
        <div className="square-images">
          {["sqr1.png","sqr2.png","sqr3.png","sqr4.png","sqr5.png","sqr6.png"].map((img, i) => (
            <img
              key={i}
              className="square-img"
              src={`src/assets/${img}`}
              alt={`Square Bottle ${i+1}`}
              onClick={() => openImage(`src/assets/${img}`)}
            />
          ))}
        </div>
        <p className="slide">Slide to view more</p>
      </div>

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

export default Collection;
