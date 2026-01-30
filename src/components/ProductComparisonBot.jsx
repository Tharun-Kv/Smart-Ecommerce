import React, { useState } from 'react';
import './ProductComparisonBot.css';

const ProductComparisonBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [budget, setBudget] = useState('');
  const [preference, setPreference] = useState('');
  const [comparison, setComparison] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Rule-based comparison logic
  const compareProducts = (userBudget, userPreference) => {
    const budget = parseInt(userBudget);
    
    // Product database (simplified for demo)
    const products = {
      samsung: {
        name: 'Samsung Galaxy Series',
        priceRanges: {
          budget: { min: 15000, max: 25000, model: 'Galaxy A series' },
          mid: { min: 25000, max: 45000, model: 'Galaxy A54/A74' },
          premium: { min: 45000, max: 80000, model: 'Galaxy S series' },
          ultra: { min: 80000, max: 150000, model: 'Galaxy S Ultra' }
        },
        strengths: ['Camera quality', 'AMOLED display', 'Battery life', 'Value for money'],
        weaknesses: ['Software updates slower', 'Resale value lower'],
        ecosystem: 'Android with Samsung features'
      },
      apple: {
        name: 'iPhone Series',
        priceRanges: {
          budget: { min: 30000, max: 45000, model: 'iPhone SE/older models' },
          mid: { min: 45000, max: 70000, model: 'iPhone 13/14' },
          premium: { min: 70000, max: 100000, model: 'iPhone 14/15 Pro' },
          ultra: { min: 100000, max: 180000, model: 'iPhone Pro Max' }
        },
        strengths: ['iOS ecosystem', 'Software support', 'Resale value', 'Security'],
        weaknesses: ['Higher price', 'Less customization', 'Closed ecosystem'],
        ecosystem: 'iOS with tight integration'
      }
    };

    // Determine budget category
    let budgetCategory = 'budget';
    if (budget >= 30000 && budget < 45000) budgetCategory = 'mid';
    else if (budget >= 45000 && budget < 70000) budgetCategory = 'premium';
    else if (budget >= 70000) budgetCategory = 'ultra';

    // Get recommendations
    const samsungRec = products.samsung.priceRanges[budgetCategory];
    const appleRec = products.apple.priceRanges[budgetCategory];

    // Generate comparison based on preference
    let recommendation = '';
    let reasoning = [];
    let winner = '';

    if (userPreference === 'camera') {
      reasoning.push('Camera Performance: Both Samsung and Apple offer excellent cameras');
      reasoning.push(`Samsung: ${products.samsung.strengths[0]} with advanced features`);
      reasoning.push(`Apple: ${products.apple.strengths[0]} with natural color processing`);
      if (budget >= 45000) {
        winner = budget < 60000 ? 'Samsung' : 'Tie - Both excellent';
        recommendation = budget < 60000 ? 
          'Samsung offers better camera features at this price point' :
          'Both offer exceptional cameras - choose based on ecosystem preference';
      } else {
        winner = 'Samsung';
        recommendation = 'Samsung provides better camera value in budget range';
      }
    } else if (userPreference === 'performance') {
      reasoning.push('Performance: Both offer powerful processors');
      reasoning.push('Samsung: Exynos/Snapdragon chips with good optimization');
      reasoning.push('Apple: A-series chips with excellent efficiency');
      winner = budget >= 70000 ? 'Apple' : 'Tie';
      recommendation = budget >= 70000 ? 
        'Apple\'s chip optimization gives slight edge in premium range' :
        'Both perform well - consider other factors';
    } else if (userPreference === 'battery') {
      reasoning.push('Battery Life: Generally better in Android phones');
      reasoning.push('Samsung: Larger batteries with power management');
      reasoning.push('Apple: Optimized but smaller batteries');
      winner = 'Samsung';
      recommendation = 'Samsung typically offers better battery life across all ranges';
    } else if (userPreference === 'ecosystem') {
      reasoning.push('Ecosystem: Major difference in approach');
      reasoning.push(`Samsung: ${products.samsung.ecosystem}`);
      reasoning.push(`Apple: ${products.apple.ecosystem}`);
      winner = 'Apple';
      recommendation = 'Apple ecosystem offers seamless integration if you use other Apple products';
    } else {
      reasoning.push('Value for Money: Overall consideration');
      winner = budget < 50000 ? 'Samsung' : budget > 100000 ? 'Apple' : 'Tie';
      recommendation = budget < 50000 ? 
        'Samsung offers better value in budget-mid range' :
        budget > 100000 ? 'Apple justifies premium with ecosystem' :
        'Both offer good value - choose based on specific needs';
    }

    // Price-to-value analysis
    const samsungValue = budget >= samsungRec.min && budget <= samsungRec.max;
    const appleValue = budget >= appleRec.min && budget <= appleRec.max;

    return {
      budget,
      preference: userPreference,
      budgetCategory,
      samsung: {
        ...samsungRec,
        inBudget: samsungValue,
        strengths: products.samsung.strengths,
        ecosystem: products.samsung.ecosystem
      },
      apple: {
        ...appleRec,
        inBudget: appleValue,
        strengths: products.apple.strengths,
        ecosystem: products.apple.ecosystem
      },
      reasoning,
      winner,
      recommendation,
      tradeoffs: {
        samsung: 'Better value, more features, but slower updates',
        apple: 'Premium experience, better support, but higher cost'
      }
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget || !preference) return;

    setIsLoading(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      const result = compareProducts(budget, preference);
      setComparison(result);
      setIsLoading(false);
    }, 800);
  };

  const resetComparison = () => {
    setComparison(null);
    setBudget('');
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
                  What's your budget range? (₹)
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g., 35000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  min="10000"
                  max="200000"
                  required
                />
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
                  <option value="camera">📸 Camera Quality</option>
                  <option value="performance">⚡ Performance</option>
                  <option value="battery">🔋 Battery Life</option>
                  <option value="ecosystem">🌐 Ecosystem Integration</option>
                  <option value="value">💰 Overall Value</option>
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
              <h4>📊 Comparison Results</h4>
              
              <p><strong>Budget:</strong> ₹{comparison.budget.toLocaleString()} ({comparison.budgetCategory} range)</p>
              <p><strong>Priority:</strong> {comparison.preference}</p>
              
              <div style={{ marginTop: '16px' }}>
                <p><strong>📱 Samsung Recommendation:</strong></p>
                <p>{comparison.samsung.model} - ₹{comparison.samsung.min.toLocaleString()} to ₹{comparison.samsung.max.toLocaleString()}</p>
                <p className="text-secondary">{comparison.samsung.inBudget ? '✅ Within budget' : '❌ Exceeds budget'}</p>
              </div>

              <div style={{ marginTop: '16px' }}>
                <p><strong>🍎 Apple Recommendation:</strong></p>
                <p>{comparison.apple.model} - ₹{comparison.apple.min.toLocaleString()} to ₹{comparison.apple.max.toLocaleString()}</p>
                <p className="text-secondary">{comparison.apple.inBudget ? '✅ Within budget' : '❌ Exceeds budget'}</p>
              </div>

              <div className="comparison-recommendation">
                <strong>🎯 Our Recommendation:</strong>
                <p>{comparison.recommendation}</p>
                <p><strong>Winner:</strong> {comparison.winner}</p>
              </div>

              <div style={{ marginTop: '16px' }}>
                <p><strong>🤔 Key Trade-offs:</strong></p>
                <p><strong>Samsung:</strong> {comparison.tradeoffs.samsung}</p>
                <p><strong>Apple:</strong> {comparison.tradeoffs.apple}</p>
              </div>

              <div className="comparison-disclaimer">
                <p><strong>⚠️ Important Notice:</strong></p>
                <p>This is a comparison assistant for educational purposes only. This is not a purchasing guarantee. Always research thoroughly and consider your specific needs before making any purchase decisions.</p>
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
