import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./welcome.css";
import { dummyCategoryProducts } from "../services/productData";

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  
  const images = [
    "https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg",
    "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg",
    "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_items_boosted&w=740",
    "https://marketplace.canva.com/EAGYmbXgp2Q/1/0/1600w/canva-blue-and-white-modern-fashion-store-banner-E8NwvwOxigg.jpg"
  ];

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, 4000);
  return () => clearInterval(interval);
}, [images.length]);

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
      },
    });
  };

  const categories = [
    { name: "Mobiles", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsVyKiHRsRddFbMcW4Lr67odMgAqmppsWjw&s", description: "Latest smartphones and accessories." },
    { name: "Electronics", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J-assgDuuEwMWqxl_KH_ON3IkOyJJCYk6Q&s", description: "TVs, gadgets, and smart devices." },
    { name: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72ntlVCSm3U5tYml-4a37E1KMqQa3BaupdQ&s", description: "Trending clothes and accessories." },
    { name: "Home Appliances", img: "https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg", description: "Appliances for every home need." },
    { name: "Books", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaJgwmIZea1z7dthmh0dbbUD7vzFYuiPjHA&s", description: "Books across all genres and interests." },
    { name: "Beauty products", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHH-Fbq-q1S4XJ-xYKEmCr_BPJKJSj0s-gFw&s", description: "Skincare, makeup, and wellness." },
    { name: "Dry fruits", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNA2LdUCP9dwGFKaca-DiB6jUr3rKD_NAesg&s", description: "Dry fruits, well and healthy." },
    { name: "Home Furnitures", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqTqO7gxYZKAYygDCkt8xlHiHid83NHc7ZTvw2I_ELKO-6k4zS8caN4uW75yxRrifWSU&usqp=CAU", description: "Furnishings for every corner of your home." },
    { name: "Kilos", img: "https://media.istockphoto.com/id/1941874849/photo/groceries-and-goods-falling-in-a-shopping-cart.jpg?s=612x612&w=0&k=20&c=cuKsrx8lLOdg38bD8_3IzeIICaaKGcXHkYgFoM-LlkI=", description: "Bulk deals on quality products." },
    { name: "Toys and More", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTne3pUwgHf1sq9jWIFAZ9_f8eAmmzYLwmlbA&s", description: "Fun toys and gifts for kids." }
  ];

  const products = [
    ...dummyCategoryProducts.Mobiles.slice(0, 4),
    ...dummyCategoryProducts.Electronics.slice(0, 4),
    ...dummyCategoryProducts.Fashion.slice(0, 3),
  ];


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="welcome-container">
      {/* Hero Banner */}
      <section className="hero-banner">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`hero-image ${i === currentIndex ? "active" : ""}`}
          />
          
        ))}
        
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Top Categories</h2>
        <div className="category-grid">
          {filteredCategories.length ? (
            filteredCategories.map((cat, idx) => (
              <Link
                to={`/category/${cat.name}`}
                key={idx}
                className="category-item"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={cat.img} alt={cat.name} className="category-image" />
                <p>{cat.name}</p>
              </Link>
            ))
          ) : (
            <p>No categories match your search.</p>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="product-grid1">
        <h2>Featured Products</h2>
        <div className="products">
          {filteredProducts.length ? (
            filteredProducts.map((product, idx) => (
              <div
                key={idx}
                className="product-card"
                onClick={() => openProductModal(product)}
              >
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
              </div>
            ))
          ) : (
            <p style={{ padding: "10px" }}>No products found.</p>
          )}
        </div>
      </section>


      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-overlay1" onClick={closeProductModal}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-button1" onClick={closeProductModal}>
              &times;
            </span>
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <div className="info">
              <h2>{selectedProduct.name}</h2>
              <p>
                <strong>Price:</strong> ₹{selectedProduct.price}
              </p>
              <p>{selectedProduct.description}</p>
              <div className="modal-buttons1">
                <button className="btn buy-btn" onClick={() => handleBuyNow(selectedProduct)}>Buy Now</button>
                <button className="btn cart-btn" onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </div>
    
  );
};

export default Welcome;
