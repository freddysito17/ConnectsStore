import React from 'react';
import './PromotedSpaces.css';
import bakeryImg from '../../../assets/bakery.png';

const PromotedSpaces = () => {
  return (
    <section className="promoted-section">
      <div className="section-header">
        <h2 className="section-title">Espacios Promocionados</h2>
        <a href="/all" className="view-all">VER TODOS &gt;</a>
      </div>
      
      <div className="promoted-layout">
        <div className="large-feature-card" style={{ backgroundImage: `url(${bakeryImg})` }}>
          <div className="card-overlay">
            <div className="card-content">
              <h3>La Molienda Central</h3>
              <p>Panadería de especialidad con café artesanal y granos importados. Ven a conocer nuestro nuevo local histórico.</p>
              <button className="btn-accent">Reservar Sesión</button>
            </div>
          </div>
        </div>
        
        <div className="side-cards">
          <div className="info-card dark">
            <div className="card-icon">⭐</div>
            <h4>Gimnasio Élite</h4>
            <p>Entrenamiento personal adaptado a las mejores rutinas de la ciudad.</p>
            <a href="#info">Más Info ↗</a>
          </div>
          <div className="info-card light">
            <h4>Taller de Cerámica</h4>
            <p>Cursos intensivos en fines de semana. Inscríbete por adelantado!</p>
            <a href="#explore">Explorar ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotedSpaces;
