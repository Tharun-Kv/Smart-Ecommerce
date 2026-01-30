import React, { useState } from 'react';
import './ProductComparisonBot.css';
import { 
  getCategories, 
  getProductsByCategory, 
  getProductsWithinPriceRange
} from '../services/productData';

const ProductComparisonBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [preference, setPreference] = useState('');
  const [comparison, setComparison] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = getCategories();

  // Rule-based comparison logic for website products only
  const compareWebsiteProducts = (category, minP, maxP, userPreference) => {
    const min = parseInt(minP) || 0;
    const max = parseInt(maxP) || 999999;
    
    // Get products from selected category within price range
    const categoryProducts = getProductsByCategory(category);
    const eligibleProducts = getProductsWithinPriceRange(categoryProducts, min, max);
    
    if (eligibleProducts.length === 0) {
      return {
        error: true,
        message: `Based on the available products on this website, there are no products in the ${category} category within the price range of ₹${min.toLocaleString()} - ₹${max.toLocaleString()}.`,
        suggestion: `Try adjusting your price range or explore other categories. The website has products ranging from ₹250 to ₹79,999.`,
        availableProducts: categoryProducts.slice(0, 3)
      };
    }

    if (eligibleProducts.length === 1) {
      const product = eligibleProducts[0];
      return {
        singleProduct: true,
        product,
        message: `Based on the available products on this website, there is only one product in the ${category} category within your price range.`,
        recommendation: `This ${product.name} by ${product.brand} at ₹${product.price.toLocaleString()} is your best option from the available selection.`
      };
    }

    // Multiple products available for comparison
    let comparisonResult = {
      category,
      priceRange: { min, max },
      eligibleProducts,
      preference: userPreference,
      analysis: {},
      recommendation: '',
      disclaimer: ''
    };

    // Analyze products based on preference
    switch (userPreference) {
      case 'price':
        comparisonResult = analyzeByPrice(comparisonResult);
        break;
      case 'brand':
        comparisonResult = analyzeByBrand(comparisonResult);
        break;
      case 'features':
        comparisonResult = analyzeByFeatures(comparisonResult);
        break;
      case 'value':
        comparisonResult = analyzeByValue(comparisonResult);
        break;
      default:
        comparisonResult = analyzeByPrice(comparisonResult);
    }

    return comparisonResult;
  };

  const analyzeByPrice = (result) => {
    const sorted = [...result.eligibleProducts].sort((a, b) => a.price - b.price);
    const cheapest = sorted[0];
    const mostExpensive = sorted[sorted.length - 1];
    
    result.analysis = {
      type: 'price',
      cheapest,
      mostExpensive,
      priceDifference: mostExpensive.price - cheapest.price,
      recommendation: cheapest.price <= (result.priceRange.min + result.priceRange.max) / 2 ? cheapest : sorted[Math.floor(sorted.length / 2)]
    };
    
    result.recommendation = `Based on price consideration, the ${cheapest.name} at ₹${cheapest.price.toLocaleString()} offers the best value within your budget from the available products.`;
    
    return result;
  };

  const analyzeByBrand = (result) => {
    const brandGroups = result.eligibleProducts.reduce((groups, product) => {
      if (!groups[product.brand]) groups[product.brand] = [];
      groups[product.brand].push(product);
      return groups;
    }, {});

    const brands = Object.keys(brandGroups);
    const topBrand = brands.reduce((top, brand) => 
      brandGroups[brand].length > brandGroups[top].length ? brand : top
    );

    result.analysis = {
      type: 'brand',
      brandGroups,
      topBrand,
      topBrandProducts: brandGroups[topBrand]
    };

    result.recommendation = `Based on brand availability, ${topBrand} has the most options (${brandGroups[topBrand].length} products) in this category and price range from the available selection.`;
    
    return result;
  };

  const analyzeByFeatures = (result) => {
    const scoredProducts = result.eligibleProducts.map(product => ({
      ...product,
      featureScore: (product.features || []).length
    }));

    const sorted = scoredProducts.sort((a, b) => b.featureScore - a.featureScore);
    const bestFeatures = sorted[0];

    result.analysis = {
      type: 'features',
      scoredProducts,
      bestFeatures,
      featureRange: {
        min: Math.min(...scoredProducts.map(p => p.featureScore)),
        max: Math.max(...scoredProducts.map(p => p.featureScore))
      }
    };

    result.recommendation = `Based on features, the ${bestFeatures.name} offers the most comprehensive feature set (${bestFeatures.featureScore} features) from the available products.`;
    
    return result;
  };

  const analyzeByValue = (result) => {
    const scoredProducts = result.eligibleProducts.map(product => ({
      ...product,
      valueScore: product.price > 0 ? (product.features?.length || 1) / product.price * 1000 : 0
    }));

    const sorted = scoredProducts.sort((a, b) => b.valueScore - a.valueScore);
    const bestValue = sorted[0];

    result.analysis = {
      type: 'value',
      scoredProducts,
      bestValue
    };

    result.recommendation = `Based on overall value (features vs price), the ${bestValue.name} at ₹${bestValue.price.toLocaleString()} offers the best balance from the available products on this website.`;
    
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory || !minPrice || !maxPrice || !preference) return;

    setIsLoading(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      const result = compareWebsiteProducts(selectedCategory, minPrice, maxPrice, preference);
      setComparison(result);
      setIsLoading(false);
    }, 800);
  };

  const resetComparison = () => {
    setComparison(null);
    setSelectedCategory('');
    setMinPrice('');
    setMaxPrice('');
    setPreference('');
  };

  return (
    <div className="comparison-bot">
      <button
        className="comparison-bot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Product Comparison Assistant"
      >
        ⚖️
      </button>

      <div className={`comparison-bot-modal ${isOpen ? 'active' : ''}`}>
        <div className="comparison-bot-header">
          <h3 className="comparison-bot-title">
            ⚖️ Product Comparison Assistant
          </h3>
          <button
            className="comparison-bot-close"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="comparison-bot-body">
          {!comparison ? (
            <form className="comparison-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  Select Category
                </label>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option value="">Choose a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Price Range (₹)
                </label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    min="0"
                    max="999999"
                    required
                  />
                  <span>-</span>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    min="0"
                    max="999999"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  What matters most to you?
                </label>
                <select
                  className="form-select"
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                  required
                >
                  <option value="">Select preference</option>
                  <option value="price">💰 Best Price</option>
                  <option value="brand">🏷️ Brand Preference</option>
                  <option value="features">⭐ Most Features</option>
                  <option value="value">💎 Best Value</option>
                </select>
              </div>

              <button
                type="submit"
                className="comparison-button"
                disabled={isLoading}
              >
                {isLoading ? 'Analyzing...' : 'Compare Products'}
              </button>
            </form>
          ) : (
            <div className="comparison-result">
              {comparison.error ? (
                <div>
                  <h4>❌ No Products Found</h4>
                  <p>{comparison.message}</p>
                  <p><strong>Suggestion:</strong> {comparison.suggestion}</p>
                  
                  {comparison.availableProducts && comparison.availableProducts.length > 0 && (
                    <div style={{ marginTop: '16px' }}>
                      <p><strong>Available products in this category:</strong></p>
                      {comparison.availableProducts.map(product => (
                        <div key={product.name} style={{ 
                          padding: '8px', 
                          margin: '4px 0', 
                          background: 'var(--surface)', 
                          borderRadius: 'var(--radius-sm)' 
                        }}>
                          <strong>{product.name}</strong> - ₹{product.price.toLocaleString()}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : comparison.singleProduct ? (
                <div>
                  <h4>📊 Single Product Available</h4>
                  <p>{comparison.message}</p>
                  <div style={{ 
                    padding: '12px', 
                    background: 'var(--primary-light)', 
                    borderRadius: 'var(--radius-md)', 
                    margin: '12px 0' 
                  }}>
                    <h5>{comparison.product.name}</h5>
                    <p><strong>Brand:</strong> {comparison.product.brand}</p>
                    <p><strong>Price:</strong> ₹{comparison.product.price.toLocaleString()}</p>
                    <p>{comparison.product.description}</p>
                  </div>
                  <p><strong>Recommendation:</strong> {comparison.recommendation}</p>
                </div>
              ) : (
                <div>
                  <h4>📊 Comparison Results</h4>
                  
                  <p><strong>Category:</strong> {comparison.category}</p>
                  <p><strong>Price Range:</strong> ₹{comparison.priceRange.min.toLocaleString()} - ₹{comparison.priceRange.max.toLocaleString()}</p>
                  <p><strong>Products Found:</strong> {comparison.eligibleProducts.length}</p>
                  <p><strong>Analysis Type:</strong> {comparison.preference}</p>
                  
                  <div style={{ marginTop: '16px' }}>
                    <p><strong>📱 Available Products:</strong></p>
                    {comparison.eligibleProducts.map(product => (
                      <div key={product.name} style={{ 
                        padding: '12px', 
                        margin: '8px 0', 
                        background: 'var(--surface)', 
                        borderRadius: 'var(--radius-md)',
                        border: comparison.analysis.recommendation?.name === product.name ? '2px solid var(--primary-color)' : '1px solid var(--border)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <strong>{product.name}</strong>
                            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}>
                              {product.brand} • ₹{product.price.toLocaleString()}
                            </p>
                          </div>
                          {comparison.analysis.recommendation?.name === product.name && (
                            <span style={{ 
                              background: 'var(--primary-color)', 
                              color: 'white', 
                              padding: '4px 8px', 
                              borderRadius: 'var(--radius-sm)', 
                              fontSize: '12px' 
                            }}>
                              RECOMMENDED
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: '14px', marginTop: '8px' }}>{product.description}</p>
                        {product.features && (
                          <div style={{ marginTop: '8px' }}>
                            <small><strong>Features:</strong> {product.features.join(', ')}</small>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="comparison-recommendation">
                    <strong>🎯 Our Recommendation:</strong>
                    <p>{comparison.recommendation}</p>
                  </div>

                  {comparison.analysis.type === 'price' && (
                    <div style={{ marginTop: '16px' }}>
                      <p><strong>💰 Price Analysis:</strong></p>
                      <p>Range: ₹{comparison.analysis.cheapest.price.toLocaleString()} - ₹{comparison.analysis.mostExpensive.price.toLocaleString()}</p>
                      <p>Difference: ₹{comparison.analysis.priceDifference.toLocaleString()}</p>
                    </div>
                  )}

                  {comparison.analysis.type === 'brand' && (
                    <div style={{ marginTop: '16px' }}>
                      <p><strong>🏷️ Brand Analysis:</strong></p>
                      <p>Top brand: {comparison.analysis.topBrand} ({comparison.analysis.topBrandProducts.length} products)</p>
                    </div>
                  )}

                  {comparison.analysis.type === 'features' && (
                    <div style={{ marginTop: '16px' }}>
                      <p><strong>⭐ Feature Analysis:</strong></p>
                      <p>Feature range: {comparison.analysis.featureRange.min} - {comparison.analysis.featureRange.max} features per product</p>
                    </div>
                  )}
                </div>
              )}

              <div className="comparison-disclaimer">
                <p><strong>📋 Important Notice:</strong></p>
                <p>Based on the available products and information on this website only. This comparison assistant analyzes products listed on this website and does not provide market-wide recommendations.</p>
              </div>

              <button
                className="comparison-button"
                onClick={resetComparison}
                style={{ marginTop: '16px' }}
              >
                New Comparison
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonBot;
