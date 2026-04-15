import React from 'react';
import './JoinUs.css';
import ownerImg from '../../../assets/owner.png';

const JoinUs = () => {
  return (
    <section className="join-section">
      <div className="join-card">
        <div className="join-text">
          <h2>¿Eres dueño de un negocio? Únete a nosotros</h2>
          <p>Potencia tu marca local con herramientas de marketing digital, logística compartida y una comunidad de clientes fieles esperándote.</p>
          <button className="btn-join">Empezar Ahora</button>
        </div>
        <div className="join-image">
          <img src={ownerImg} alt="Business Owner" />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
