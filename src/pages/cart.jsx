import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const handleRemoveItem = (index) => {
    updateCart(cartItems.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleBuyNow = (item) => {
    navigate("/payment", { state: { product: item } });
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0),
    0
  );

  return (
    <div className="cart-container animate-fade-in">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <FiShoppingBag aria-hidden="true" />
          <p>Your cart is empty.</p>
          <Link to="/welcome" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="cart-card">
                <img src={item.img} alt={item.name} loading="lazy" />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>₹{Number(item.price).toLocaleString("en-IN")}</p>
                </div>
                <div className="cart-actions">
                  <button
                    type="button"
                    className="btn btn-primary cart-buy-btn"
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    className="cart-remove-btn"
                    onClick={() => handleRemoveItem(idx)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <FiTrash2 aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary" aria-label="Order summary">
            <h3>Order Summary</h3>
            <div className="cart-summary-row">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <button
              type="button"
              className="btn btn-danger clear-cart-btn"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
