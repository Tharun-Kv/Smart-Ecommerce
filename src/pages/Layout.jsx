import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import ProductComparisonBot from "../components/ProductComparisonBot";
import { CATEGORIES } from "../config/constants";
import { dummyCategoryProducts } from "../services/productData";

const HEADER_HEIGHT = 70;

const Layout = () => {
  // Real catalog data powers the header search suggestions.
  const allProducts = useMemo(
    () => Object.values(dummyCategoryProducts).flat(),
    []
  );

  return (
    <div style={{ paddingTop: `${HEADER_HEIGHT}px` }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: `${HEADER_HEIGHT}px`,
        }}
      >
        <Header
          filteredProducts={allProducts}
          filteredCategories={CATEGORIES}
        />
      </div>

      <main>
        <Outlet />
        <Footer />
      </main>

      <ProductComparisonBot />
    </div>
  );
};

export default Layout;
