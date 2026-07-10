import React, { useState } from "react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleTrackOrder = (e) => {
    e.preventDefault();
    alert(
      `Tracking Order: you order is packed and ready to go \nOrder ID: ${orderId}\nEmail: ${email}`
    );
  };

  return (
    <div className="form-page">
      <form className="form-card animate-fade-in" onSubmit={handleTrackOrder}>
        <h2>Track Order</h2>

        <div className="field">
          <label htmlFor="track-order-id">Order ID</label>
          <input
            id="track-order-id"
            type="text"
            placeholder="Enter your order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="track-email">Email ID</label>
          <input
            id="track-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
          Track Order
        </button>
      </form>
    </div>
  );
};

export default TrackOrder;
