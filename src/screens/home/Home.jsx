import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar';
import Hero from './widgets/Hero';
import FeaturedBusinesses from './widgets/FeaturedBusinesses';
import PromotedSpaces from './widgets/PromotedSpaces';
import MarketplaceTendencias from './widgets/MarketplaceTendencias';
import JoinUs from './widgets/JoinUs';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      
      <main>
        <FeaturedBusinesses />
        
        <section className="map-preview section-bg">
          <div className="container">
            <h2 className="section-title">Explora tu Barrio</h2>
            <div className="filter-chips">
              <span className="chip active">📍 Comida</span>
              <span className="chip">☕ Servicios</span>
              <span className="chip">🎨 Artes</span>
              <span className="chip">🏺 Arte</span>
            </div>
            <div className="map-placeholder surface-card">
              <div className="floating-location">
                <strong>Ubicación Actual</strong>
                <span>Barrio de las Letras, Madrid</span>
              </div>
              {/* Illustration or Map Map integration */}
              <div className="map-city-vector"></div>
            </div>
          </div>
        </section>

        <PromotedSpaces />
        
        <MarketplaceTendencias />
        
        <JoinUs />

        <Hero />

        <section className="faq-section">
          <div className="container">
            <h2 className="text-center">Preguntas Frecuentes</h2>
            <div className="accordion-list">
              <div className="accordion-item">
                <div className="accordion-header">¿Cómo me registro como negocio? <span>▾</span></div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">¿Es gratuito para clientes? <span>▾</span></div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">¿Cómo funciona el marketplace? <span>▾</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h4 className="nav-logo">LocalLink</h4>
            <p>Impulsando el comercio local con tecnología de vanguardia.</p>
          </div>
          <div className="footer-links">
            <h5>Explora</h5>
            <a href="#marketplace">Marketplace</a>
            <a href="#map">Mapa</a>
          </div>
          <div className="footer-links">
            <h5>Compañía</h5>
            <a href="#about">Acerca de</a>
            <a href="#careers">Carreras</a>
          </div>
          <div className="footer-links">
            <h5>Legal</h5>
            <a href="#terms">Términos</a>
            <a href="#privacy">Privacidad</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 THE CURATED EXCHANGE | CRAFTED FOR LOCAL AUTHORITY</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
