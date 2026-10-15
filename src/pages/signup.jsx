import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./signup.css";
import { signup } from "@netlify/identity";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!agreedToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");
    try {
      const user = await signup(email.trim(), password, { full_name: username.trim() });
      if (user.emailVerified) navigate("/welcome", { replace: true });
      else setMessage("Check your email to confirm your account, then return to log in.");
    } catch (err) {
      setError(err.message || "Unable to create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2 className="signup-title">Create Account</h2>
          {error && <p role="alert">{error}</p>}
          {message && <p role="status">{message}</p>}

          <p className="demo-note">
            🎓 This is a student portfolio <strong>demo project</strong> — not a
            real store. Please do not enter real passwords or personal details.
          </p>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <a href="/#/terms" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button type="submit" disabled={loading} className="signup-button">
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
