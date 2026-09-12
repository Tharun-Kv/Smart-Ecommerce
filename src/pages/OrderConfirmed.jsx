import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  useEffect(() => {
    if (!product) navigate("/welcome");
  }, [product, navigate]);

  return (
    <div className="order-confirmed-page">
      <style>{`
        .order-confirmed-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-7) var(--space-4);
          background: var(--color-background);
        }
        .order-confirmed-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: var(--space-8) var(--space-6);
          text-align: center;
          max-width: 480px;
          width: 100%;
          animation: fadeIn var(--duration-slow) var(--ease-out);
        }
        .checkmark {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-full);
          display: inline-block;
          border: 4px solid var(--color-success);
          position: relative;
        }
        .checkmark::after {
          content: '';
          position: absolute;
          left: 24px;
          top: 12px;
          width: 20px;
          height: 40px;
          border-right: 4px solid var(--color-success);
          border-bottom: 4px solid var(--color-success);
          transform: rotate(45deg);
          animation: draw 0.5s var(--ease-out);
        }
        @keyframes draw {
          from { height: 0; width: 0; }
          to { height: 40px; width: 20px; }
        }
        .order-confirmed-card h2 {
          color: var(--color-success);
          margin: var(--space-5) 0 var(--space-2);
          font-size: var(--text-subheading);
        }
        .order-confirmed-card p {
          margin: var(--space-2) 0;
          color: var(--color-text-secondary);
        }
        .order-confirmed-card strong {
          color: var(--color-text);
        }
        .order-confirmed-note {
          font-size: var(--text-caption);
          margin-top: var(--space-4);
        }
      `}</style>

      <div className="order-confirmed-card">
        <div className="checkmark" aria-hidden="true"></div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        {product && (
          <>
            <p>
              <strong>Product:</strong> {product.name}
            </p>
            <p>
              <strong>Amount:</strong> ₹{product.price}
            </p>
          </>
        )}
        <p className="order-confirmed-note">
          📧 A confirmation email has been sent to your registered email.
        </p>

        <button
          type="button"
          className="btn btn-primary"
          style={{ marginTop: "var(--space-5)" }}
          onClick={() => navigate("/welcome")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
