import React from 'react';

export default function HeroSection({ onStartLearning }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">🎓 Media Pembelajaran Kimia Fase E / SMP</div>
        <h1 className="hero-title">Jelajahi Rahasia Materi di Sekitarmu</h1>
        <p className="hero-description">
          Pahami konsep <strong>Wujud Materi</strong>, klasifikasi <strong>Unsur, Senyawa, dan Campuran</strong>, serta bedakan <strong>Perubahan Fisika dan Kimia</strong> melalui pendekatan saintifik <em>Learning Cycle 5E</em> dengan simulasi virtual interaktif PhET.
        </p>

        <div className="hero-action-group">
          <button
            type="button"
            className="btn-primary-hero"
            onClick={onStartLearning}
          >
            🚀 Mulai Belajar Sekarang
          </button>
          <a
            href="#topik-unggulan"
            className="btn-secondary-hero"
          >
            📖 Pelajari Alur 5E
          </a>
        </div>

        <div className="hero-features-strip">
          <div className="feature-pill">
            <span className="pill-icon">🧊</span>
            <span>Representasi Submikroskopik</span>
          </div>
          <div className="feature-pill">
            <span className="pill-icon">🔬</span>
            <span>Simulasi Interaktif PhET</span>
          </div>
          <div className="feature-pill">
            <span className="pill-icon">📝</span>
            <span>LKPD & Studi Kasus Nyata</span>
          </div>
          <div className="feature-pill">
            <span className="pill-icon">✨</span>
            <span>Kuis & Umpan Balik Langsung</span>
          </div>
        </div>
      </div>
    </section>
  );
}

