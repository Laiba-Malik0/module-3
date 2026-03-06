import React from "react";
import "../index.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
      </div>

      <div className="btn-container">
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;