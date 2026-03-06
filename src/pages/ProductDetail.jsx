import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../services/api";
import { useCart } from "../context/CartContext";
import "../index.css";

export default function ProductDetail() {

  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(location.state?.product);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);

    if (!product) {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");

      if (id) {
        API.get(`/products/${id}`).then((res) => setProduct(res.data));
      }
    }

  }, []);

  if (!product)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading product...</p>;

  return (
    <div className={`detail-container ${fadeIn ? "" : "fade-out"}`}>

      <div style={{ marginBottom: "20px" }}>
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="detail-img-container">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-info">

        <h2>{product.title}</h2>

        <p className="price">${product.price}</p>

        <p>{product.description}</p>

        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>

      </div>
    </div>
  );
}