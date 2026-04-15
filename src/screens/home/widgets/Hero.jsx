import React from 'react';
import './Hero.css';
import heroImg from '../../../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-modern">
      <div className="hero-content">
        <h1 className="hero-title">Conectando tu comunidad</h1>
        <p className="hero-subtitle">
          Descubre la esencia de tu barrio. Una plataforma curada donde el talento local y los clientes apasionados se encuentran para crear impacto real.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Explorar Negocios</button>
          <button className="btn-secondary">Ver el Mapa</button>
        </div>
      </div>
      <div className="hero-image-overlay">
        <img src={heroImg} alt="Community" />
      </div>
    </section>
  );
};

export default Hero;
