import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { login, getSettings, oauthLogin, requestPasswordRecovery, updateUser } from "@netlify/identity";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState(localStorage.getItem("savedUsername") || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(Boolean(localStorage.getItem("savedUsername")));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [providers, setProviders] = useState({});
  const recovery = new URLSearchParams(window.location.hash.split("?")[1]).has("recovery");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("savedPassword");
    getSettings().then(settings => setProviders(settings.providers || {})).catch(() => {});
    const callbackError = sessionStorage.getItem("authCallbackError");
    if (callbackError) {
      setError(callbackError);
      sessionStorage.removeItem("authCallbackError");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    setMessage("");
    try {
      if (recovery) {
        await updateUser({ password });
      } else {
        await login(username.trim(), password);
      }
      if (rememberMe) localStorage.setItem("savedUsername", username.trim());
      else localStorage.removeItem("savedUsername");
      navigate("/welcome", { replace: true });
    } catch (err) {
      setError(err.status === 401 || err.status === 400
        ? "Unable to sign in. Check your email and password, and confirm your email if you just signed up."
        : "Unable to complete sign-in. Please try again. " + (err.message || ""));
    } finally {
      setLoading(false);
    }
  };

  const handleRecovery = async () => {
    if (!username.trim()) {
      setError("Enter your account email above to request a password reset.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await requestPasswordRecovery(username.trim());
      setMessage("If an account exists for that email, a password reset link has been sent.");
    } catch {
      setError("Unable to send a reset link. Check your email address and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setError("");
    try {
      await oauthLogin(provider);
    } catch {
      setError("Unable to start social sign-in. Please sign in with your email instead.");
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">{recovery ? "Set a new password" : "Welcome Back"}</h2>

          <p className="demo-note">
            🎓 This is a student portfolio <strong>demo project</strong> — not a
            real store. Please do not enter real passwords or personal details.
          </p>

          {error && <p role="alert">{error}</p>}
          {message && <p role="status">{message}</p>}
          {!recovery && <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              aria-label="Email"
              autoComplete="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>}

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              aria-label="Password"
              autoComplete={recovery ? "new-password" : "current-password"}
              minLength={recovery ? 8 : undefined}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="password-toggle" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {!recovery && <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember email
            </label>
            <button type="button" disabled={loading} onClick={handleRecovery} className="forgot-password-link">
              Forgot Password?
            </button>
          </div>}

          <button type="submit" disabled={loading} className="login-button">
            {loading ? "Please wait..." : recovery ? "Update password" : "Login"}
          </button>

          {!recovery && providers.google && <div className="social-login-buttons">
            <button type="button" className="icon-button" aria-label="Sign in with Google" onClick={() => handleSocialLogin("google")}>
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
            </button>
          </div>}

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;