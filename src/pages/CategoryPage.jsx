// /pages/CategoryPage.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./category.css";
import { dummyCategoryProducts } from "../services/productData";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const products = useMemo(() => {
    return dummyCategoryProducts[categoryName] || [];
  }, [categoryName]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sliderPrice, setSliderPrice] = useState(100000);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = products.filter(
      (p) =>
        (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
        p.price <= sliderPrice
    );
    setFilteredProducts(result);
  }, [selectedBrands, sliderPrice, products]);

  const brands = [...new Set(products.map((p) => p.brand))];

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Added to cart!");
  };

  const handleBuyNow = (product) => {
    closeModal();
    navigate("/payment", { state: { product } });
  };

  return (
    <div className="category-page">
      <h2>{categoryName} Products</h2>

      <div className="category-layout">
        <div className="filters">
          <h4>Filter by Brand</h4>
          {brands.map((brand, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
          <div>
            <label>Price (up to ₹{sliderPrice}): </label>
            <input
              type="range"
              min="100"
              max="100000"
              value={sliderPrice}
              onChange={(e) => setSliderPrice(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product, index) => (
              <div key={index} className="product-card" onClick={() => openModal(product)}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {modalVisible && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Image on the left */}
            <div className="modal-image">
              <img src={selectedProduct.img} alt={selectedProduct.name} />
            </div>

            {/* Info on the right */}
            <div className="modal-info">
              <h3>{selectedProduct.name}</h3>
              <p className="description">{selectedProduct.description}</p>
              <p><strong>Brand:</strong> {selectedProduct.brand}</p>
              <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
              {selectedProduct.features && (
                <p><strong>Features:</strong> {selectedProduct.features.join(", ")}</p>
              )}
              <div className="button-group">
                <button className="btn buy-btn" onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
                <button className="btn cart-btn" onClick={() => handleBuyNow(selectedProduct)}>Buy Now</button>
              </div>
            </div>

            <button className="close-btn" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
