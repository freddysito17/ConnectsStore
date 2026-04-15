import React from 'react';
import './FeaturedBusinesses.css';

const businesses = [
  {
    id: 1,
    name: 'Café Alquimia',
    category: 'Gastronomía',
    desc: 'Tostado artesanal y granos de origen único en el corazón de la ciudad.',
    icon: '☕',
    color: '#E6D5C3'
  },
  {
    id: 2,
    name: 'Botánica Duale',
    category: 'Salud & Hogar',
    desc: 'Diseño floral contemporáneo y plantas exóticas para transformar tus espacios.',
    icon: '🌿',
    color: '#FFDEC7'
  },
  {
    id: 3,
    name: 'Dormita Spa',
    category: 'Bienestar',
    desc: 'Bienestar integral con terapias ancestrales y tecnología de vanguardia.',
    icon: '🧘',
    color: '#D4C1B0'
  },
  {
    id: 4,
    name: 'Hierro & Fuego',
    category: 'Artesanía',
    desc: 'Forja tradicional reinventada para el diseño de interiores moderno.',
    icon: '🔨',
    color: '#E0E0E0'
  },
  {
    id: 5,
    name: 'Luz de Luna',
    category: 'Iluminación',
    desc: 'Lámparas hechas a mano con materiales orgánicos y luz cálida.',
    icon: '💡',
    color: '#FFF9C4'
  },
  {
    id: 6,
    name: 'Sabor Local',
    category: 'Mercado',
    desc: 'Productos de temporada directamente del agricultor a tu mesa.',
    icon: '🍎',
    color: '#C8E6C9'
  }
];

const FeaturedBusinesses = () => {
  return (
    <section className="featured-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Negocios Destacados</h2>
          <p className="section-subtitle">La excelencia artesanal de nuestra región.</p>
        </div>
        <div className="scroll-controls">
          <button className="control-btn">‹</button>
          <button className="control-btn">›</button>
        </div>
      </div>
      
      <div className="business-grid">
        {businesses.map(biz => (
          <div key={biz.id} className="business-card surface-card">
            <div className="biz-header">
              <div className="biz-icon" style={{ backgroundColor: biz.color }}>{biz.icon}</div>
              <div className="biz-info">
                <h4>{biz.name}</h4>
                <span>{biz.category}</span>
              </div>
            </div>
            <p>{biz.desc}</p>
            <a href={`/profile/${biz.id}`} className="biz-link">Ver Perfil →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
