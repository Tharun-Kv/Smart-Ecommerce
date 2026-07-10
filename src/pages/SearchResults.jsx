import React, { useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "./search";
import { dummyCategoryProducts } from "../services/productData";
import { CATEGORIES } from "../config/constants";
import "./category.css";

const SearchResults = () => {
  const { searchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const allProducts = useMemo(
    () => Object.values(dummyCategoryProducts).flat(),
    []
  );

  const lowerSearch = searchTerm.toLowerCase();

  const matchingProducts = allProducts.filter((product) =>
    product?.name?.toLowerCase().includes(lowerSearch)
  );

  const matchingCategories = CATEGORIES.filter((category) =>
    category?.name?.toLowerCase().includes(lowerSearch)
  );

  const hasResults =
    matchingProducts.length > 0 || matchingCategories.length > 0;

  return (
    <div className="category-page animate-fade-in">
      <h2>
        Search results for “{searchTerm}”
      </h2>

      {!hasResults && (
        <p className="text-secondary">
          No products or categories found matching your search.
        </p>
      )}

      {matchingCategories.length > 0 && (
        <section aria-labelledby="matching-categories">
          <h3 id="matching-categories">Categories</h3>
          <div className="product-grid" style={{ marginBottom: "var(--space-6)" }}>
            {matchingCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.link}
                className="product-card"
                style={{ textDecoration: "none" }}
              >
                <img src={cat.img} alt={cat.name} loading="lazy" />
                <h4>{cat.name}</h4>
                <p className="text-secondary" style={{ fontWeight: 400, fontSize: "var(--text-caption)" }}>
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {matchingProducts.length > 0 && (
        <section aria-labelledby="matching-products">
          <h3 id="matching-products">Products</h3>
          <div className="product-grid">
            {matchingProducts.map((product) => (
              <div
                key={product.name}
                className="product-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/category/${product.category}`)}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate(`/category/${product.category}`)
                }
              >
                <img src={product.img} alt={product.name} loading="lazy" />
                <h4>{product.name}</h4>
                <p>₹{product.price.toLocaleString("en-IN")}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchResults;
