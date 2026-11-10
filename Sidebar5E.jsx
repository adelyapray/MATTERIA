import React from 'react';

export default function Sidebar5E({ activeStep, onSelectStep, onBackToHome, isOpen, onToggleMobile }) {
  const menuItems = [
    { key: 'engage', label: 'Halaman Engage', icon: '🎬', step: 'Tahap 1' },
    { key: 'explore', label: 'Halaman Explore', icon: '🔬', step: 'Tahap 2' },
    { key: 'explain', label: 'Halaman Explain', icon: '💡', step: 'Tahap 3' },
    { key: 'elaborate', label: 'Halaman Elaborate', icon: '📋', step: 'Tahap 4' },
    { key: 'evaluate', label: 'Halaman Evaluate', icon: '📝', step: 'Tahap 5' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onToggleMobile}
          aria-hidden="true"
        />
      )}

      <aside className={`matteria-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand-box">
            <span className="sidebar-logo">⚗️</span>
            <div className="sidebar-brand-text">
              <h2 className="sidebar-app-name">MATTERIA</h2>
              <span className="sidebar-app-sub">Learning Cycle 5E</span>
            </div>
          </div>
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={onToggleMobile}
            aria-label="Tutup Menu"
          >
            ✕
          </button>
        </div>

        <div className="sidebar-module-info">
          <span className="modul-badge">MODUL 1</span>
          <p className="modul-title">Klasifikasi & Perubahan Materi</p>
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-menu-list">
            {menuItems.map((item) => {
              const isActive = activeStep === item.key;
              return (
                <li key={item.key} className="sidebar-menu-item">
                  <button
                    type="button"
                    className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      onSelectStep(item.key);
                      if (onToggleMobile) onToggleMobile(false);
                    }}
                  >
                    <span className="nav-btn-icon">{item.icon}</span>
                    <div className="nav-btn-label-group">
                      <span className="nav-btn-step">{item.step}</span>
                      <span className="nav-btn-title">{item.label}</span>
                    </div>
                    {isActive && <span className="active-dot">●</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer-actions">
          <button
            type="button"
            className="btn-back-home"
            onClick={onBackToHome}
          >
            <span className="back-icon">🏠</span>
            <span>Kembali ke Beranda</span>
          </button>
          <div className="sidebar-version-badge">
            Kimia SMA Fase E • Kurikulum Merdeka
          </div>
        </div>
      </aside>
    </>
  );
}

