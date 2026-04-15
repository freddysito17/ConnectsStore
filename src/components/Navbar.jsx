import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-glass">
      <div className="nav-logo">LocalLink</div>
      <div className="nav-links-container">
        <a href="#marketplace" className="nav-link active">Marketplace</a>
        <a href="#map" className="nav-link">Explora Map</a>
        <a href="#directory" className="nav-link">Directory</a>
        <a href="#about" className="nav-link">About</a>
      </div>
      <div className="nav-profile">
        <div className="profile-icon">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;
