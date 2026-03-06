import React from "react";
import { useCart } from "../context/CartContext";
import "../index.css";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="app-header">
      <div className="logo">Laiba'sLuxe</div>

      <nav>
        <a href="#/">Home</a>
        <a href="#contact">Contact</a>

        <a href="#cart" className="icon-link">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-count">{cart.length}</span>
        </a>

        <a href="#user" className="icon-link">
          <i className="fa-solid fa-user"></i>
        </a>
      </nav>
    </header>
  );
}