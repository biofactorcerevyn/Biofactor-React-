import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app, fetch from API
  const product = {
    id: 1,
    name: 'Vitamin C Tablets',
    category: 'Nutraceuticals',
    description: 'High potency Vitamin C supplement with 1000mg per tablet',
    price: '$25.00',
    specifications: [
      { label: 'Form', value: 'Tablets' },
      { label: 'Strength', value: '1000mg' },
      { label: 'Pack Size', value: '60 Tablets' },
      { label: 'Shelf Life', value: '24 Months' },
      { label: 'Storage', value: 'Store in cool, dry place' },
    ],
    benefits: [
      'Boosts immune system',
      'Powerful antioxidant',
      'Promotes skin health',
      'Enhances iron absorption',
    ],
    usage: 'Take one tablet daily with water, preferably with meals',
    relatedProducts: [
      { id: 2, name: 'Vitamin D Drops', category: 'Nutraceuticals' },
      { id: 3, name: 'Multivitamin Capsules', category: 'Nutraceuticals' },
      { id: 4, name: 'Zinc Supplements', category: 'Nutraceuticals' },
    ]
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'usage', label: 'Usage' },
    { id: 'benefits', label: 'Benefits' },
  ];

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> &gt; 
          <Link to="/products">Products</Link> &gt; 
          <span>{product.name}</span>
        </div>
      </section>

      {/* Product Details */}
      <section className="section product-main">
        <div className="container">
          <div className="product-layout">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img src={`/api/placeholder/500/400?text=${product.name}`} alt={product.name} />
              </div>
              <div className="image-thumbnails">
                <img src={`/api/placeholder/100/100?text=Image+1`} alt="Thumbnail 1" />
                <img src={`/api/placeholder/100/100?text=Image+2`} alt="Thumbnail 2" />
                <img src={`/api/placeholder/100/100?text=Image+3`} alt="Thumbnail 3" />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <h1>{product.name}</h1>
              <div className="product-price">{product.price}</div>
              
              <div className="product-description">
                <p>{product.description}</p>
              </div>

              <div className="product-actions">
                <button className="btn btn-primary btn-large">
                  Request Quote
                </button>
                <button className="btn btn-outline">
                  Download Brochure
                </button>
              </div>

              <div className="product-meta">
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <span className="meta-value">{product.category}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">MOQ:</span>
                  <span className="meta-value">1000 Units</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Delivery:</span>
                  <span className="meta-value">15-20 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="section product-tabs">
        <div className="container">
          <div className="tabs-header">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="tab-pane">
                <h3>Product Description</h3>
                <p>{product.description}</p>
                <p>
                  Our Vitamin C tablets are formulated using the highest quality ingredients 
                  and manufactured under strict quality control standards. Each tablet 
                  delivers 1000mg of pure Vitamin C to support your immune system and 
                  overall health.
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="tab-pane">
                <h3>Specifications</h3>
                <table className="specs-table">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index}>
                        <td>{spec.label}</td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="tab-pane">
                <h3>Usage Instructions</h3>
                <p>{product.usage}</p>
                <ul className="usage-list">
                  <li>Do not exceed recommended dosage</li>
                  <li>Consult healthcare professional if pregnant or nursing</li>
                  <li>Keep out of reach of children</li>
                </ul>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="tab-pane">
                <h3>Key Benefits</h3>
                <ul className="benefits-list">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section related-products">
        <div className="container">
          <h2 className="section-title">Related Products</h2>
          <div className="related-grid">
            {product.relatedProducts.map(related => (
              <div key={related.id} className="related-item">
                <img src={`/api/placeholder/200/150?text=${related.name}`} alt={related.name} />
                <h4>{related.name}</h4>
                <p>{related.category}</p>
                <Link to={`/products/${related.id}`} className="btn btn-small">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section inquiry-section">
        <div className="container">
          <div className="inquiry-form">
            <h2>Product Inquiry</h2>
            <form>
              <div className="form-grid">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="form-group full-width">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;