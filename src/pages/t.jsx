// src/pages/Settings.jsx
import React, { useState, useEffect } from "react";
import "./t.css";
import { getUser, updateUser } from "@netlify/identity";

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    getUser().then(user => {
      setName(user?.userMetadata?.full_name || "");
      setEmail(user?.email || "");
      setMobile(user?.userMetadata?.mobile || "");
      setAddress(user?.userMetadata?.address || "");
      setLoading(false);
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ data: { full_name: name, mobile, address } });
      setStatus("Profile updated successfully!");
    } catch (err) {
      setStatus("Update failed. Try again.");
    }
  };
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleUpdate} className="settings-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email (Read-only)</label>
          <input type="email" value={email} readOnly />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Shipping Address</label>
          <textarea
            rows="3"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Update Profile</button>

        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};

export default Settings;
