import { useCart } from "../context/CartContext";
import "../index.css";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="home-container">
      <h1>Your Cart</h1>

      <div className="products-grid">

        {cart.length === 0 && <p>No products in cart</p>}

        {cart.map((p, i) => (
          <div key={i} className="product-card">

            <img src={p.image} className="product-img" />

            <div className="product-info">
              <h3>{p.title}</h3>
              <p>${p.price}</p>
            </div>

            <button
              className="btn"
              onClick={() => removeFromCart(i)}
            >
              Remove
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}