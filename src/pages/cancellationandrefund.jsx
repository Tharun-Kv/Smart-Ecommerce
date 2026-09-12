import React from "react";
import { useNavigate } from "react-router-dom";

const Cancellationandrefund = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: "900px",
    margin: "var(--space-6) auto",
    padding: "var(--space-6)",
    fontFamily: "var(--font-family)",
    color: "var(--color-text-secondary)",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
  };

  const headingStyle = {
    fontSize: "var(--text-subheading)",
    marginBottom: "var(--space-5)",
    color: "var(--color-text)",
  };

  const sectionHeadingStyle = {
    marginTop: "var(--space-6)",
    color: "var(--color-text)",
    fontSize: "var(--text-body)",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    margin: "10px 0",
    lineHeight: "1.6",
  };

  const listStyle = {
    paddingLeft: "20px",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    marginTop: "30px",
    backgroundColor: "#00b4d8",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Cancellation & Refund</h1>
      <p style={paragraphStyle}>
        Welcome to Smart E-Commerce! We are committed to delivering quality products at your doorstep with secure and fast delivery.
        Our platform is built with customer satisfaction as the top priority. Whether you're shopping for electronics, fashion, or groceries, we aim to give you the best online shopping experience.
      </p>

      <p style={paragraphStyle}>
        We are passionate about convenience, affordability, and trust. Our support team is here to assist you 24/7. Thank you for choosing us!
      </p>

      <h1 style={headingStyle}>Our Policy</h1>

      <h2 style={sectionHeadingStyle}>Order Cancellation</h2>
      <p style={paragraphStyle}>
        You can cancel your order within <strong>2 hours</strong> of placing it. Once it's processed or shipped, cancellations are not possible.
      </p>

      <h2 style={sectionHeadingStyle}>Refund Policy</h2>
      <ul style={listStyle}>
        <li>Refunds are initiated within <strong>5–7 business days</strong> after product return approval.</li>
        <li>Amount is credited to the original payment method only.</li>
        <li>For COD orders, a bank account will be required for refund processing.</li>
      </ul>

      <h2 style={sectionHeadingStyle}>Return Policy</h2>
      <ul style={listStyle}>
        <li>Returns accepted within <strong>7 days</strong> of delivery.</li>
        <li>Items must be unused and in original condition.</li>
        <li>Returns not valid on perishable/personal items.</li>
      </ul>

      <h2 style={sectionHeadingStyle}>Customer Support</h2>
      <p style={paragraphStyle}>
        Need help? Reach out to us anytime:
        <br />
        <strong>Email:</strong> support@yourecom.com <br />
        <strong>Phone:</strong> +91-9876543210
      </p>

      <button style={buttonStyle} onClick={() => navigate("/welcome")}>
        Back to Home
      </button>
    </div>
  );
};

export default Cancellationandrefund;
