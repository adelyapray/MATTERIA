import React from 'react';
import { chemData } from '../data/chemData';

export default function TopicCards({ onSelectTopic, onSelectStep }) {
  const { topics, learningCycleSteps, tujuanPembelajaran } = chemData;

  return (
    <section id="topik-unggulan" className="topics-section">
      <div className="section-header">
        <span className="section-eyebrow">MODUL 1</span>
        <h2 className="section-title">Sub-Topik Pembelajaran Materi</h2>
        <p className="section-subtitle">
          Tiga pilar utama dalam memahami sifat zat dan perubahannya di alam semesta.
        </p>
      </div>

      <div className="topic-grid">
        {topics.map((t) => (
          <div key={t.id} className="topic-card" style={{ borderTop: `4px solid ${t.color}` }}>
            <div className="topic-badge" style={{ backgroundColor: `${t.color}15`, color: t.color }}>
              {t.badge}
            </div>
            <h3 className="topic-card-title">{t.title}</h3>
            <p className="topic-card-desc">{t.description}</p>
            <button
              type="button"
              className="btn-topic-action"
              onClick={() => onSelectTopic(t.id)}
            >
              Mulai Eksplorasi Topik &rarr;
            </button>
          </div>
        ))}
      </div>

      {/* Sintaks 5E Learning Cycle Showcase */}
      <div className="cycle-container">
        <div className="cycle-header">
          <span className="section-eyebrow">PEDAGOGI KIMIA</span>
          <h2 className="section-title">Alur Belajar Berbasis Learning Cycle 5E</h2>
          <p className="section-subtitle">
            Pembelajaran konstruktivistik yang membimbingmu dari apersepsi fenomena hingga evaluasi mandiri.
          </p>
        </div>

        <div className="cycle-steps-grid">
          {learningCycleSteps.map((step, idx) => (
            <div
              key={step.key}
              className="cycle-step-card"
              onClick={() => onSelectStep(step.key)}
              role="button"
              tabIndex={0}
            >
              <div className="step-number-bubble">{idx + 1}</div>
              <h4 className="step-name">{step.name}</h4>
              <p className="step-label">{step.label}</p>
              <p className="step-desc">{step.desc}</p>
              <span className="step-link-cue">Buka Tahap &rarr;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tujuan Pembelajaran Preview */}
      <div className="tujuan-box">
        <h3 className="tujuan-title">🎯 Capaian & Tujuan Pembelajaran</h3>
        <ul className="tujuan-list">
          {tujuanPembelajaran.map((tujuan, index) => (
            <li key={index} className="tujuan-item">
              <span className="tujuan-check">✓</span>
              <span>{tujuan}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

