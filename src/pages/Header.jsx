import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSettings,
  FiPackage,
  FiLogOut,
  FiChevronDown,
  FiArrowLeft,
} from "react-icons/fi";
import { SearchContext } from "../pages/search";
import { BRAND, CATEGORIES } from "../config/constants";
import "./Header.css";

const dropdownMotion = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.18, ease: "easeOut" },
};

const Header = ({ filteredProducts = [], filteredCategories = [] }) => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const userRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUserDropdown(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredSuggestions = [...filteredProducts, ...filteredCategories]
    .filter((item) =>
      item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5);

  const handleSuggestionClick = (value) => {
    setSearchTerm(value);
    navigate("/search-results");
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) navigate("/search-results");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const userMenuItems = [
    { label: "Profile", icon: <FiUser aria-hidden="true" />, action: () => navigate("/profile") },
    { label: "Settings", icon: <FiSettings aria-hidden="true" />, action: () => navigate("/t") },
    { label: "Order history", icon: <FiPackage aria-hidden="true" />, action: () => navigate("/orderhistory") },
    { label: "Logout", icon: <FiLogOut aria-hidden="true" />, action: handleLogout },
  ];

  return (
    <header className="header1">
      <button
        type="button"
        className="logo1"
        onClick={() => navigate("/welcome")}
        aria-label={`${BRAND.name} — go to home`}
      >
        {BRAND.name}
      </button>

      <div className="search-bar1" role="search">
        <button
          type="button"
          className="search-submit1"
          onClick={handleSearchSubmit}
          aria-label="Search"
        >
          <FiSearch aria-hidden="true" />
        </button>
        <input
          type="text"
          placeholder="Search for products, brands, and more"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
          aria-label="Search products"
        />
        {searchTerm && (
          <button
            type="button"
            className="clear-search1"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            <FiX aria-hidden="true" />
          </button>
        )}
        {searchTerm && filteredSuggestions.length > 0 && (
          <ul className="suggestion-dropdown1">
            {filteredSuggestions.map((item, idx) => (
              <li key={`${item.name}-${idx}`}>
                <button
                  type="button"
                  onClick={() => handleSuggestionClick(item.name)}
                >
                  <FiSearch aria-hidden="true" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav className="nav-links1" aria-label="Primary">
        <div className="category-wrapper1" ref={categoryRef}>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nav-button1"
            onClick={() => setShowDropdown((prev) => !prev)}
            aria-expanded={showDropdown}
            aria-haspopup="true"
          >
            Category <FiChevronDown aria-hidden="true" />
          </motion.button>
          <AnimatePresence>
            {showDropdown && (
              <motion.ul className="category-dropdown1" {...dropdownMotion}>
                {CATEGORIES.map((cat) => (
                  <li key={cat.name}>
                    <button
                      type="button"
                      onClick={() => {
                        setShowDropdown(false);
                        navigate(cat.link);
                      }}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-button1"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <FiArrowLeft aria-hidden="true" />
          <span className="nav-button-label1">Back</span>
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-button1"
          onClick={() => navigate("/cart")}
          aria-label="Open cart"
        >
          <FiShoppingCart aria-hidden="true" />
        </motion.button>

        <div className="user-dropdown-wrapper1" ref={userRef}>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nav-button1 user-icon1"
            onClick={() => setShowUserDropdown((prev) => !prev)}
            aria-expanded={showUserDropdown}
            aria-haspopup="true"
            aria-label="Account menu"
          >
            <FiUser aria-hidden="true" />
          </motion.button>

          <AnimatePresence>
            {showUserDropdown && (
              <motion.ul className="user-dropdown1" {...dropdownMotion}>
                {userMenuItems.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => {
                        setShowUserDropdown(false);
                        item.action();
                      }}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
