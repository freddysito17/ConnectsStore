import React from 'react';
import './MarketplaceTendencias.css';

const products = [
  { id: 1, name: 'Taza Cerámica Artisan', brand: 'Alquimia Studio', price: '24.00 €', tag: 'NUEVO' },
  { id: 2, name: 'Cold Brew Pack x6', brand: 'Café Alquimia', price: '18.50 €', tag: 'TRENDING' },
  { id: 3, name: 'Sneakers Urban', brand: 'Handcrafted Murcia', price: '85.00 €', tag: 'EDICIÓN' },
  { id: 4, name: 'Poke Bowl Salmon', brand: 'Healthy Bar', price: '14.00 €', tag: 'NUEVO' },
];

const MarketplaceTendencias = () => {
  return (
    <section className="marketplace-section container">
      <div className="section-header">
        <h2 className="section-title">Marketplace Tendencias</h2>
        <a href="/marketplace" className="view-all">Ver todo el mercado →</a>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <span className="product-tag">{product.tag}</span>
              <div className="product-img-placeholder"></div>
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.brand}</p>
              <div className="product-footer">
                <span className="price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketplaceTendencias;
