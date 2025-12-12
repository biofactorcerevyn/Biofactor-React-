import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Products',
    'Pharmaceuticals',
    'Nutraceuticals',
    'Cosmetics',
    'Herbal Extracts',
    'Animal Health',
  ];

  const products = [
    { id: 1, name: 'Vitamin C Tablets', category: 'Nutraceuticals', description: 'High potency Vitamin C' },
    { id: 2, name: 'Antibiotic Capsules', category: 'Pharmaceuticals', description: 'Broad spectrum antibiotic' },
    { id: 3, name: 'Herbal Shampoo', category: 'Cosmetics', description: 'Natural hair care solution' },
    { id: 4, name: 'Turmeric Extract', category: 'Herbal Extracts', description: 'Pure turmeric extract' },
    { id: 5, name: 'Vitamin D Drops', category: 'Nutraceuticals', description: 'Vitamin D3 supplement' },
    { id: 6, name: 'Pain Relief Gel', category: 'Pharmaceuticals', description: 'Topical pain relief' },
    { id: 7, name: 'Face Cream', category: 'Cosmetics', description: 'Moisturizing face cream' },
    { id: 8, name: 'Ashwagandha Powder', category: 'Herbal Extracts', description: 'Stress relief supplement' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>High-quality pharmaceutical and nutraceutical solutions</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section filters-section">
        <div className="container">
          <div className="filters">
            {/* Search */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${category === (cat === 'All Products' ? 'all' : cat) ? 'active' : ''}`}
                  onClick={() => setCategory(cat === 'All Products' ? 'all' : cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image">
                  <img src={`/api/placeholder/300/200?text=${product.name}`} alt={product.name} />
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-actions">
                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                    <button className="btn btn-outline">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try a different search term or category</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Features */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Products</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Quality Assured</h3>
              <p>GMP certified manufacturing with stringent quality control</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Innovative Formulations</h3>
              <p>Research-backed formulations for maximum efficacy</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌿</div>
              <h3>Natural Ingredients</h3>
              <p>Pure, natural ingredients sourced responsibly</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏭</div>
              <h3>Modern Facility</h3>
              <p>State-of-the-art manufacturing infrastructure</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;