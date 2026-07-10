import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./welcome.css";
import { dummyCategoryProducts } from "../services/productData";
import {
  BRAND,
  CATEGORIES,
  HERO_SLIDES,
  HERO_ROTATION_MS,
} from "../config/constants";

const FEATURED_PRODUCTS = [
  ...dummyCategoryProducts.Mobiles.slice(0, 4),
  ...dummyCategoryProducts.Electronics.slice(0, 4),
  ...dummyCategoryProducts.Fashion.slice(0, 3),
];

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === HERO_SLIDES.length - 1 ? 0 : prevIndex + 1
      );
    }, HERO_ROTATION_MS);
    return () => clearInterval(interval);
  }, []);

  const openProductModal = (product) => setSelectedProduct(product);
  const closeProductModal = () => setSelectedProduct(null);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Added to cart!");
  };

  const handleBuyNow = (product) => {
    navigate("/payment", {
      state: {
        name: product.name,
        price: product.price,
        img: product.img,
        description: product.description,
      },
    });
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="welcome-container animate-fade-in">
      {/* Hero Banner */}
      <section className="hero-banner" aria-label="Featured promotions">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.img}
            src={slide.img}
            alt={slide.alt}
            className={`hero-image ${i === currentIndex ? "active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="hero-overlay">
          <h1 className="hero-title">{BRAND.name}</h1>
          <p className="hero-subtitle">{BRAND.tagline}</p>
        </div>
        <div className="hero-dots" role="tablist" aria-label="Slide selector">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.img}
              type="button"
              className={`hero-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-selected={i === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories" aria-labelledby="categories-heading">
        <span className="section-eyebrow">Browse</span>
        <h2 id="categories-heading" className="section-title">
          Top Categories
        </h2>
        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <Link to={`/category/${cat.name}`} key={cat.name} className="category-item">
              <img
                src={cat.img}
                alt={cat.name}
                className="category-image"
                loading="lazy"
              />
              <p>{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="product-grid1" aria-labelledby="featured-heading">
        <span className="section-eyebrow">Handpicked</span>
        <h2 id="featured-heading" className="section-title">
          Featured Products
        </h2>
        <div className="products">
          {FEATURED_PRODUCTS.map((product) => (
            <button
              key={product.name}
              type="button"
              className="product-card"
              onClick={() => openProductModal(product)}
            >
              <div className="product-card-media">
                <img src={product.img} alt={product.name} loading="lazy" />
              </div>
              <h4>{product.name}</h4>
              <p>₹{product.price.toLocaleString("en-IN")}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="modal-overlay1"
          onClick={closeProductModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name}
        >
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-button1"
              onClick={closeProductModal}
              aria-label="Close product details"
            >
              &times;
            </button>
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <div className="info">
              <h2>{selectedProduct.name}</h2>
              <p className="modal-price1">
                ₹{selectedProduct.price.toLocaleString("en-IN")}
              </p>
              <p className="modal-description1">{selectedProduct.description}</p>
              <div className="modal-buttons1">
                <button
                  className="btn btn-primary"
                  onClick={() => handleBuyNow(selectedProduct)}
                >
                  Buy Now
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
