import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {

  return (

    <HashRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/product" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </HashRouter>

  );
}