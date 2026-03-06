import { useState, useEffect } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  const goToDetail = (product) => {
    setFadeOut(true);
    setTimeout(() => {
      navigate(`/product?id=${product.id}`, { state: { product } });
    }, 300); // matches CSS transition
  };

  return (
    <div className={`home-container ${fadeOut ? "fade-out" : ""}`}>
      <h1>Products</h1>
      <div className="products-grid">
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card"></div>
          ))}
        {!loading &&
          products.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => goToDetail(p)} />
          ))}
      </div>
    </div>
  );
}