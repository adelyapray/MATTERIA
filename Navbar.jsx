import React from 'react';

export default function Navbar({ activeView, onNavigate }) {
  return (
    <header className="matteria-navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => onNavigate('beranda')}>
          <div className="brand-logo-icon">⚗️</div>
          <div className="brand-text">
            <span className="brand-name">MATTERIA</span>
            <span className="brand-tagline">Kimia SMA Fase E</span>
          </div>
        </div>

        <nav className="navbar-links">
          <button
            type="button"
            className={`nav-btn ${activeView === 'beranda' ? 'active' : ''}`}
            onClick={() => onNavigate('beranda')}
          >
            🏠 Beranda
          </button>
          <button
            type="button"
            className={`nav-btn ${activeView !== 'beranda' ? 'active' : ''}`}
            onClick={() => onNavigate('engage')}
          >
            🧪 Modul 5E (MATTERIA)
          </button>
          <a
            href="https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_all.html"
            target="_blank"
            rel="noreferrer"
            className="nav-btn phet-link-nav"
            title="Buka PhET Colorado di Tab Baru"
          >
            🔬 Lab PhET
          </a>
        </nav>
      </div>
    </header>
  );
}

