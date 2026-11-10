import React from 'react';

export default function Footer({ onNavigateHome, onNavigateStep }) {
  return (
    <footer className="matteria-footer">
      <div className="footer-container">
        {/* Kolom 1: Tentang MATTERIA */}
        <div className="footer-col">
          <div className="footer-brand">
            <span className="footer-logo">⚗️</span>
            <span className="footer-brand-name">MATTERIA</span>
          </div>
          <p className="footer-about-text">
            MATTERIA adalah platform pembelajaran interaktif untuk menjelajahi rahasia klasifikasi dan perubahan materi di kehidupan sehari-hari.
          </p>
          <div className="footer-copyright">
            © 2026 Tim Pengembang Web Kimia.
          </div>
        </div>

        {/* Kolom 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={onNavigateHome}
              >
                🏠 Beranda
              </button>
            </li>
            <li>
              <a
                href="https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_all.html"
                target="_blank"
                rel="noreferrer"
                className="footer-link-anchor"
              >
                🔬 Simulasi Interaktif PhET
              </a>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => onNavigateStep && onNavigateStep('engage')}
              >
                🧪 Modul 5E: Klasifikasi Materi
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => alert("Panduan Penggunaan:\n1. Jelajahi tahap 5E secara berurutan mulai dari Engage.\n2. Coba simulasi PhET pada Explore.\n3. Perdalam konsep pada Explain.\n4. Kerjakan analisis pada Elaborate.\n5. Uji pemahaman pada Evaluate.\nSemua progres tersimpan otomatis di perangkatmu.")}
              >
                ❓ Bantuan & Panduan (FAQ)
              </button>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak & Sosial Media */}
        <div className="footer-col">
          <h4 className="footer-col-title">Kontak & Sosial Media</h4>
          <ul className="footer-contact-list">
            <li className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:matteria.edu@gmail.com" className="contact-link">
                matteria.edu@gmail.com
              </a>
            </li>
            <li className="contact-item">
              <span className="contact-icon">📸</span>
              <span className="contact-text">Instagram: @matteria.edu</span>
            </li>
            <li className="contact-item">
              <span className="contact-icon">🏛️</span>
              <span className="contact-text">
                Pendidikan Kimia, Universitas Negeri Malang
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

