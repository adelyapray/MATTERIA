import React, { useState, useEffect } from 'react';
import { chemData } from '../data/chemData';

export default function ModulDetail({ activeStep, onNavigateStep, onBackToHome }) {
  // ----------------------------------------------------
  // LocalStorage State Handlers
  // ----------------------------------------------------

  // Engage State
  const [hypothesis, setHypothesis] = useState(() => {
    return localStorage.getItem('matteria_hypothesis') || '';
  });
  const [saveStatusEngage, setSaveStatusEngage] = useState('');

  // Explore State
  const [exploreName, setExploreName] = useState(() => {
    return localStorage.getItem('matteria_explore_name') || '';
  });
  const [exploreSolid, setExploreSolid] = useState(() => {
    return localStorage.getItem('matteria_explore_solid') || '';
  });
  const [explorePhase, setExplorePhase] = useState(() => {
    return localStorage.getItem('matteria_explore_phase') || '';
  });
  const [saveStatusExplore, setSaveStatusExplore] = useState('');

  // Explain State (Rumusan Masalah & Hasil Eksplorasi Siswa PALING ATAS)
  const [explainRumusan, setExplainRumusan] = useState(() => {
    return localStorage.getItem('matteria_explain_rumusan') || '';
  });
  const [explainPenjabaran, setExplainPenjabaran] = useState(() => {
    return localStorage.getItem('matteria_explain_penjabaran') || '';
  });
  const [saveStatusExplain, setSaveStatusExplain] = useState('');

  // Elaborate State (Studi Kasus 1 & 2)
  const [answersSK1, setAnswersSK1] = useState(() => {
    try {
      const saved = localStorage.getItem('matteria_sk1_answers');
      return saved ? JSON.parse(saved) : { q1: '', q2: '', q3: '', q4: '' };
    } catch {
      return { q1: '', q2: '', q3: '', q4: '' };
    }
  });

  const defaultPadletCards = [
    {
      id: 'padlet-1',
      peristiwa: 'Es batu mencair di gelas',
      jenis: 'Perubahan Fisika',
      alasan: 'Molekul H₂O hanya berubah wujud dari padat ke cair karena menyerap kalor, tanpa menghasilkan zat kimia baru.',
      color: '#e3f2fd'
    },
    {
      id: 'padlet-2',
      peristiwa: 'Besi atau rantai sepeda berkarat',
      jenis: 'Perubahan Kimia',
      alasan: 'Besi (Fe) bereaksi dengan oksigen (O₂) dan uap air membentuk karat (Fe₂O₃·xH₂O) berwarna cokelat kemerahan.',
      color: '#fbe9e7'
    }
  ];

  const [padletCards, setPadletCards] = useState(() => {
    try {
      const saved = localStorage.getItem('matteria_padlet_cards');
      return saved ? JSON.parse(saved) : defaultPadletCards;
    } catch {
      return defaultPadletCards;
    }
  });

  const [newCardPeristiwa, setNewCardPeristiwa] = useState('Telur digoreng di atas wajan');
  const [newCardJenis, setNewCardJenis] = useState('Perubahan Kimia');
  const [newCardAlasan, setNewCardAlasan] = useState('');

  const [answersSK2, setAnswersSK2] = useState(() => {
    try {
      const saved = localStorage.getItem('matteria_sk2_answers');
      return saved ? JSON.parse(saved) : { cq1: '', cq2: '', cq3: '' };
    } catch {
      return { cq1: '', cq2: '', cq3: '' };
    }
  });

  const [lkpdName, setLkpdName] = useState(() => {
    return localStorage.getItem('matteria_lkpd_name') || '';
  });
  const [lkpdKelas, setLkpdKelas] = useState(() => {
    return localStorage.getItem('matteria_lkpd_kelas') || '';
  });
  const [lkpdLink, setLkpdLink] = useState(() => {
    return localStorage.getItem('matteria_lkpd_link') || '';
  });
  const [lkpdSubmitted, setLkpdSubmitted] = useState(() => {
    return localStorage.getItem('matteria_lkpd_submitted') === 'true';
  });
  const [saveStatusElaborate, setSaveStatusElaborate] = useState('');

  // Evaluate State (Quiz)
  const [quizName, setQuizName] = useState(() => {
    return localStorage.getItem('matteria_quiz_name') || '';
  });
  const [quizAnswers, setQuizAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('matteria_quiz_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [quizScore, setQuizScore] = useState(() => {
    const saved = localStorage.getItem('matteria_quiz_score');
    return saved !== null ? parseInt(saved, 10) : null;
  });
  const [quizSubmitted, setQuizSubmitted] = useState(() => {
    return localStorage.getItem('matteria_quiz_submitted') === 'true';
  });

  // ----------------------------------------------------
  // Storage Handlers
  // ----------------------------------------------------

  const saveEngage = () => {
    localStorage.setItem('matteria_hypothesis', hypothesis);
    setSaveStatusEngage('✓ Hipotesis berhasil disimpan di perangkatmu!');
    setTimeout(() => setSaveStatusEngage(''), 3000);
  };

  const saveExplore = () => {
    localStorage.setItem('matteria_explore_name', exploreName);
    localStorage.setItem('matteria_explore_solid', exploreSolid);
    localStorage.setItem('matteria_explore_phase', explorePhase);
    setSaveStatusExplore('✓ Data Pengamatan Lab Virtual berhasil disimpan!');
    setTimeout(() => setSaveStatusExplore(''), 3000);
  };

  const saveExplain = () => {
    localStorage.setItem('matteria_explain_rumusan', explainRumusan);
    localStorage.setItem('matteria_explain_penjabaran', explainPenjabaran);
    setSaveStatusExplain('✓ Rumusan masalah & penjabaran eksplorasi berhasil disimpan!');
    setTimeout(() => setSaveStatusExplain(''), 3000);
  };

  const handleSK1Change = (id, val) => {
    const updated = { ...answersSK1, [id]: val };
    setAnswersSK1(updated);
    localStorage.setItem('matteria_sk1_answers', JSON.stringify(updated));
  };

  const handleSK2Change = (id, val) => {
    const updated = { ...answersSK2, [id]: val };
    setAnswersSK2(updated);
    localStorage.setItem('matteria_sk2_answers', JSON.stringify(updated));
  };

  const addPadletCard = (e) => {
    e.preventDefault();
    if (!newCardAlasan.trim()) return;

    const colors = ['#e8f5e9', '#fff3e0', '#f3e5f5', '#e0f7fa', '#ede7f6', '#fffde7'];
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];

    const newCard = {
      id: 'card-' + Date.now(),
      peristiwa: newCardPeristiwa,
      jenis: newCardJenis,
      alasan: newCardAlasan.trim(),
      color: chosenColor
    };

    const updated = [newCard, ...padletCards];
    setPadletCards(updated);
    localStorage.setItem('matteria_padlet_cards', JSON.stringify(updated));
    setNewCardAlasan('');
  };

  const deletePadletCard = (id) => {
    const updated = padletCards.filter((c) => c.id !== id);
    setPadletCards(updated);
    localStorage.setItem('matteria_padlet_cards', JSON.stringify(updated));
  };

  const handleLkpdSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('matteria_lkpd_name', lkpdName);
    localStorage.setItem('matteria_lkpd_kelas', lkpdKelas);
    localStorage.setItem('matteria_lkpd_link', lkpdLink);
    localStorage.setItem('matteria_lkpd_submitted', 'true');
    setLkpdSubmitted(true);
    setSaveStatusElaborate('✓ Laporan LKPD berhasil disubmit dan disimpan!');
    setTimeout(() => setSaveStatusElaborate(''), 3500);
  };

  const handleQuizSelect = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    const updated = { ...quizAnswers, [questionId]: optionIndex };
    setQuizAnswers(updated);
    localStorage.setItem('matteria_quiz_answers', JSON.stringify(updated));
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const questions = chemData.evaluate.quizQuestions;
    let correctCount = 0;

    questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const calculatedScore = Math.round((correctCount / questions.length) * 100);
    setQuizScore(calculatedScore);
    setQuizSubmitted(true);

    localStorage.setItem('matteria_quiz_name', quizName);
    localStorage.setItem('matteria_quiz_score', calculatedScore.toString());
    localStorage.setItem('matteria_quiz_submitted', 'true');
  };

  const handleResetQuiz = () => {
    if (window.confirm('Apakah kamu yakin ingin mengulang kuis dari awal?')) {
      setQuizAnswers({});
      setQuizScore(null);
      setQuizSubmitted(false);
      localStorage.removeItem('matteria_quiz_answers');
      localStorage.removeItem('matteria_quiz_score');
      localStorage.removeItem('matteria_quiz_submitted');
    }
  };

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeStep]);

  // Current step metadata
  const currentStepInfo = chemData.learningCycleSteps.find((s) => s.key === activeStep) || chemData.learningCycleSteps[0];

  return (
    <div className="modul-detail-wrapper">
      {/* Banner per Halaman Bertema Gelap / Alam Dingin / Es */}
      <section className="modul-stage-banner">
        <div className="stage-banner-inner">
          <div className="stage-pill-row">
            <span className="stage-badge-highlight">{currentStepInfo.name}</span>
            <span className="stage-badge-sub">{currentStepInfo.label}</span>
          </div>
          <h1 className="stage-banner-title">
            {activeStep === 'engage' && chemData.engage.bannerTitle}
            {activeStep === 'explore' && chemData.explore.bannerTitle}
            {activeStep === 'explain' && chemData.explain.bannerTitle}
            {activeStep === 'elaborate' && chemData.elaborate.bannerTitle}
            {activeStep === 'evaluate' && chemData.evaluate.bannerTitle}
          </h1>
          <p className="stage-banner-subtitle">
            {activeStep === 'engage' && chemData.engage.subtitle}
            {activeStep === 'explore' && chemData.explore.subtitle}
            {activeStep === 'explain' && chemData.explain.subtitle}
            {activeStep === 'elaborate' && chemData.elaborate.subtitle}
            {activeStep === 'evaluate' && chemData.evaluate.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="stage-content-container">

        {/* ========================================================
            TAHAP 1: ENGAGE
           ======================================================== */}
        {activeStep === 'engage' && (
          <div className="engage-view">
            <div className="engage-two-col">
              {/* Kolom Kiri: Video Embed Es Mencair */}
              <div className="engage-col-left">
                <div className="video-card">
                  <div className="video-header">
                    <span className="video-icon">🎥</span>
                    <span className="video-title-label">Video Pengamatan Makroskopis: Es Mencair</span>
                  </div>
                  <div className="video-responsive-wrap">
                    <iframe
                      src={chemData.engage.videoUrl}
                      title="Timelapse Es Mencair"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="engage-iframe"
                    />
                  </div>
                  <p className="video-caption">
                    Perhatikan bagaimana wujud padat es batu perlahan bertransformasi menjadi cairan air murni (H₂O) di suhu ruangan.
                  </p>
                </div>
              </div>

              {/* Kolom Kanan: Narasi Stimulus & Form Hipotesis */}
              <div className="engage-col-right">
                <div className="narrative-box">
                  <div className="narrative-header-pill">🔍 Stimulus Apersepsi</div>
                  <h3 className="narrative-heading">{chemData.engage.phenomenonTitle}</h3>
                  <div className="narrative-text">
                    {chemData.engage.phenomenonNarrative.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="narrative-p">{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="hypothesis-box">
                  <div className="hypothesis-label-row">
                    <span className="hypo-icon">💡</span>
                    <label htmlFor="hypothesis-input" className="hypo-title">
                      Rumuskan Hipotesis Awalmu:
                    </label>
                  </div>
                  <p className="hypo-instruction">{chemData.engage.promptHypothesis}</p>
                  
                  <textarea
                    id="hypothesis-input"
                    className="matteria-textarea"
                    rows={4}
                    placeholder="Contoh: Menurut dugaan saya, es batu mencair karena molekul H₂O menyerap kalor dari udara sehingga partikelnya bergetar semakin cepat dan ikatannya merenggang..."
                    value={hypothesis}
                    onChange={(e) => setHypothesis(e.target.value)}
                  />

                  <div className="box-action-row">
                    <button
                      type="button"
                      className="btn-save-action"
                      onClick={saveEngage}
                    >
                      💾 Simpan Hipotesis
                    </button>
                    {saveStatusEngage && (
                      <span className="status-saved-pill">{saveStatusEngage}</span>
                    )}
                  </div>
                </div>

                <div className="next-step-box">
                  <p className="next-step-prompt">
                    Siap membuktikan hipotesismu pada level molekuler submikroskopik?
                  </p>
                  <button
                    type="button"
                    className="btn-primary-stage"
                    onClick={() => onNavigateStep('explore')}
                  >
                    🚀 Lanjut ke Lab Virtual (Explore) &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAHAP 2: EXPLORE
           ======================================================== */}
        {activeStep === 'explore' && (
          <div className="explore-view">
            {/* 2 Kolom Panduan Eksplorasi di Atas */}
            <div className="explore-guidelines-grid">
              {chemData.explore.guidelines.map((guide, idx) => (
                <div key={idx} className="guide-card">
                  <div className="guide-badge-row">
                    <span className="guide-badge">{guide.badge}</span>
                  </div>
                  <h3 className="guide-title">{guide.title}</h3>
                  <ol className="guide-step-list">
                    {guide.steps.map((st, sIdx) => (
                      <li key={sIdx} className="guide-step-item">
                        <span className="step-num">{sIdx + 1}</span>
                        <span className="step-text">{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            {/* Simulasi Interaktif PhET States of Matter Basics */}
            <div className="phet-simulation-container">
              <div className="phet-bar">
                <div className="phet-bar-left">
                  <span className="phet-logo-badge">PhET Interactive Simulations</span>
                  <span className="phet-sim-name">States of Matter: Basics</span>
                </div>
                <a
                  href={chemData.explore.phetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="phet-external-btn"
                >
                  ↗ Buka Layar Penuh
                </a>
              </div>
              <div className="phet-iframe-wrapper">
                <iframe
                  src={chemData.explore.phetUrl}
                  title="PhET States of Matter Basics"
                  width="100%"
                  height="520px"
                  style={{ border: 'none', display: 'block', overflow: 'hidden' }}
                  allowFullScreen
                />
              </div>
            </div>

            {/* Form "Data Pengamatan" di Bawah */}
            <div className="observation-form-card">
              <div className="form-card-header">
                <span className="form-header-icon">📋</span>
                <div>
                  <h3 className="form-header-title">Data Pengamatan Laboratorium Virtual</h3>
                  <p className="form-header-desc">
                    Catat temuanmu mengenai gerakan dan jarak antarpartikel atom/molekul (tersimpan di browser).
                  </p>
                </div>
              </div>

              <div className="form-group-item">
                <label className="form-label" htmlFor="obs-name">
                  {chemData.explore.observationPrompts.nameLabel}
                </label>
                <input
                  id="obs-name"
                  type="text"
                  className="matteria-input"
                  placeholder="Masukkan nama lengkap siswa..."
                  value={exploreName}
                  onChange={(e) => setExploreName(e.target.value)}
                />
              </div>

              <div className="form-group-item">
                <label className="form-label" htmlFor="obs-solid">
                  {chemData.explore.observationPrompts.solidObservationLabel}
                </label>
                <textarea
                  id="obs-solid"
                  className="matteria-textarea"
                  rows={4}
                  placeholder="Deskripsikan jarak dan gerak partikel saat wujud Padat (Solid), Cair (Liquid), dan Gas (Gas)..."
                  value={exploreSolid}
                  onChange={(e) => setExploreSolid(e.target.value)}
                />
              </div>

              <div className="form-group-item">
                <label className="form-label" htmlFor="obs-phase">
                  {chemData.explore.observationPrompts.phaseChangeObservationLabel}
                </label>
                <textarea
                  id="obs-phase"
                  className="matteria-textarea"
                  rows={4}
                  placeholder="Deskripsikan apa yang terjadi pada molekul air (H₂O) saat suhu dinaikkan (Heat) dan diturunkan (Cool)..."
                  value={explorePhase}
                  onChange={(e) => setExplorePhase(e.target.value)}
                />
              </div>

              <div className="form-footer-action">
                <button
                  type="button"
                  className="btn-save-action"
                  onClick={saveExplore}
                >
                  💾 Simpan Data Pengamatan
                </button>
                {saveStatusExplore && (
                  <span className="status-saved-pill">{saveStatusExplore}</span>
                )}
                <button
                  type="button"
                  className="btn-primary-stage"
                  onClick={() => onNavigateStep('explain')}
                >
                  Lanjut ke Penjelasan Konsep (Explain) &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAHAP 3: EXPLAIN
           ======================================================== */}
        {activeStep === 'explain' && (
          <div className="explain-view">
            {/* 1. PALING ATAS: Input Interaktif Rumusan Masalah Siswa Hasil Eksplorasi */}
            <div className="explain-student-findings-card">
              <div className="findings-header">
                <span className="findings-icon">✍️</span>
                <div>
                  <h3 className="findings-title">Rumusan Masalah & Penjabaran Hasil Eksplorasi Siswa</h3>
                  <p className="findings-subtitle">
                    Sesuai sintaks 5E, tuliskan rumusan pertanyaan kritis dan simpulan sementara hasil observasi PhET sebelum membaca pendalaman teori kimia di bawah.
                  </p>
                </div>
              </div>

              <div className="form-group-item">
                <label className="form-label" htmlFor="exp-rumusan">
                  1. Rumusan Masalah Utama (Pertanyaan yang muncul dari pengamatanmu):
                </label>
                <textarea
                  id="exp-rumusan"
                  className="matteria-textarea"
                  rows={3}
                  placeholder="Contoh: Mengapa pada saat es dipanaskan suhunya sempat konstan sebelum seluruhnya mencair? Mengapa partikel gas bergerak acak ke segala arah?"
                  value={explainRumusan}
                  onChange={(e) => setExplainRumusan(e.target.value)}
                />
              </div>

              <div className="form-group-item">
                <label className="form-label" htmlFor="exp-penjabaran">
                  2. Penjabaran Hasil Eksplorasi (Temuanmu tentang kerapatan dan energi kinetik partikel):
                </label>
                <textarea
                  id="exp-penjabaran"
                  className="matteria-textarea"
                  rows={3}
                  placeholder="Tuliskan penjelasan versi kelompok/pribadimu di sini..."
                  value={explainPenjabaran}
                  onChange={(e) => setExplainPenjabaran(e.target.value)}
                />
              </div>

              <div className="box-action-row">
                <button
                  type="button"
                  className="btn-save-action"
                  onClick={saveExplain}
                >
                  💾 Simpan Hasil Diskusi Siswa
                </button>
                {saveStatusExplain && (
                  <span className="status-saved-pill">{saveStatusExplain}</span>
                )}
              </div>
            </div>

            {/* 2. Tujuan Pembelajaran */}
            <div className="content-theory-block">
              <h3 className="block-title">🎯 Capaian Pembelajaran Tahap Explain</h3>
              <ul className="tujuan-explain-list">
                {chemData.tujuanPembelajaran.slice(0, 4).map((tujuan, idx) => (
                  <li key={idx} className="tujuan-explain-item">
                    <span className="badge-bullet">0{idx + 1}</span>
                    <span>{tujuan}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Pengertian Materi */}
            <div className="content-theory-block">
              <h3 className="block-title">🔬 Hakikat dan Pengertian Materi</h3>
              <p className="theory-paragraph">{chemData.explain.pengertianMateri}</p>
            </div>

            {/* 4. Tabel Wujud Materi dan Susunan Partikelnya (Header Hijau #2e7d32) */}
            <div className="content-theory-block">
              <h3 className="block-title">📊 {chemData.explain.tabelPartikel.title}</h3>
              <div className="table-responsive-container">
                <table className="chem-table particle-table">
                  <thead style={{ backgroundColor: '#2e7d32', color: '#ffffff' }}>
                    <tr>
                      {chemData.explain.tabelPartikel.headers.map((h, i) => (
                        <th key={i} style={{ backgroundColor: '#2e7d32', color: '#ffffff', padding: '12px 16px' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {chemData.explain.tabelPartikel.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'row-even' : 'row-odd'}>
                        <td className="font-semibold">{row.wujud}</td>
                        <td>{row.susunan}</td>
                        <td>{row.sifat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Klasifikasi Materi: Unsur, Senyawa, Campuran */}
            <div className="content-theory-block">
              <h3 className="block-title">⚛️ {chemData.explain.klasifikasiMateri.title}</h3>
              <div className="classification-cards-stack">
                {chemData.explain.klasifikasiMateri.sections.map((sec, idx) => (
                  <div key={idx} className="class-section-box">
                    <h4 className="class-section-title">{sec.name}</h4>
                    <p className="class-section-desc">{sec.desc}</p>
                    {sec.contoh && (
                      <div className="class-example-box">
                        <strong>Contoh Nyata:</strong> {sec.contoh}
                      </div>
                    )}
                    {sec.catatanKritis && (
                      <div className="alert-kritis-box">
                        <span className="kritis-icon">⚠️</span>
                        <span>{sec.catatanKritis}</span>
                      </div>
                    )}
                    {sec.subtypes && (
                      <div className="subtypes-grid">
                        {sec.subtypes.map((sub, sIdx) => (
                          <div key={sIdx} className="subtype-card">
                            <h5 className="subtype-name">{sub.type}</h5>
                            <p className="subtype-detail">{sub.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Perubahan Fisika vs Perubahan Kimia */}
            <div className="content-theory-block">
              <h3 className="block-title">⚡ {chemData.explain.perubahanMateri.title}</h3>
              <div className="perubahan-grid">
                <div className="perubahan-card fisika-card">
                  <div className="card-top-tag fisika-tag">Tanpa Zat Baru</div>
                  <h4 className="perubahan-title">1. Perubahan Fisika</h4>
                  <p className="perubahan-desc">{chemData.explain.perubahanMateri.perubahanFisika.definisi}</p>
                  <div className="indikator-box">
                    <strong>Indikator Utama:</strong>
                    <ul>
                      {chemData.explain.perubahanMateri.perubahanFisika.indikator.map((ind, i) => (
                        <li key={i}>{ind}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="contoh-pill-row">
                    <strong>Contoh:</strong> {chemData.explain.perubahanMateri.perubahanFisika.contoh}
                  </div>
                </div>

                <div className="perubahan-card kimia-card">
                  <div className="card-top-tag kimia-tag">Terbentuk Zat Baru</div>
                  <h4 className="perubahan-title">2. Perubahan Kimia</h4>
                  <p className="perubahan-desc">{chemData.explain.perubahanMateri.perubahanKimia.definisi}</p>
                  <div className="indikator-box">
                    <strong>Indikator Utama:</strong>
                    <ul>
                      {chemData.explain.perubahanMateri.perubahanKimia.indikator.map((ind, i) => (
                        <li key={i}>{ind}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="contoh-pill-row">
                    <strong>Contoh:</strong> {chemData.explain.perubahanMateri.perubahanKimia.contoh}
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Representasi Perhitungan Sederhana (Hukum Kekekalan Massa) */}
            <div className="content-theory-block">
              <h3 className="block-title">📐 {chemData.explain.representasiPerhitungan.title}</h3>
              <p className="theory-paragraph">{chemData.explain.representasiPerhitungan.desc}</p>
              <div className="law-example-callout">
                <span className="law-icon">⚖️</span>
                <p>{chemData.explain.representasiPerhitungan.contohKasus}</p>
              </div>
            </div>

            {/* 8. Sumber Pustaka Primer */}
            <div className="content-theory-block bibliography-block">
              <h3 className="block-title">📚 Sumber Pustaka Primer</h3>
              <ul className="biblio-list">
                {chemData.explain.sumberPustaka.map((pustaka, pIdx) => (
                  <li key={pIdx} className="biblio-item">
                    <p className="biblio-citation">{pustaka.citation}</p>
                    <p className="biblio-note"><em>Catatan Didaktis: {pustaka.note}</em></p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigasi ke Elaborate */}
            <div className="step-navigation-footer">
              <button
                type="button"
                className="btn-secondary-stage"
                onClick={() => onNavigateStep('explore')}
              >
                &larr; Kembali ke Explore
              </button>
              <button
                type="button"
                className="btn-primary-stage"
                onClick={() => onNavigateStep('elaborate')}
              >
                Lanjut ke Studi Kasus (Elaborate) &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            TAHAP 4: ELABORATE
           ======================================================== */}
        {activeStep === 'elaborate' && (
          <div className="elaborate-view">
            {/* Studi Kasus 1: Tabel Benda & 4 Pertanyaan Pemandu */}
            <div className="studi-kasus-section">
              <div className="case-header">
                <span className="case-badge">BAGIAN A</span>
                <h3 className="case-title">{chemData.elaborate.studiKasus1.title}</h3>
                <p className="case-desc">{chemData.elaborate.studiKasus1.deskripsi}</p>
              </div>

              {/* Tabel Benda di Rumah */}
              <div className="table-responsive-container">
                <table className="chem-table">
                  <thead style={{ backgroundColor: '#546e7a', color: '#ffffff' }}>
                    <tr>
                      <th style={{ width: '35%' }}>Kategori Benda di Rumah</th>
                      <th>Contoh Nyata & Komposisi Kimia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemData.elaborate.studiKasus1.tabelBenda.map((benda, bIdx) => (
                      <tr key={bIdx} className={bIdx % 2 === 0 ? 'row-even' : 'row-odd'}>
                        <td className="font-semibold">{benda.kategori}</td>
                        <td>{benda.contoh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 4 Pertanyaan Pemandu Studi Kasus 1 */}
              <div className="case-questions-box">
                <h4 className="questions-title">📝 Pertanyaan Pemandu Studi Kasus 1:</h4>
                {chemData.elaborate.studiKasus1.pertanyaanPemandu.map((q) => (
                  <div key={q.id} className="case-question-item">
                    <label className="question-text" htmlFor={`sk1-${q.id}`}>
                      {q.soal}
                    </label>
                    <textarea
                      id={`sk1-${q.id}`}
                      className="matteria-textarea"
                      rows={3}
                      placeholder="Ketikkan analisismu di sini..."
                      value={answersSK1[q.id] || ''}
                      onChange={(e) => handleSK1Change(q.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Studi Kasus 2: "Mengapa Bisa Terjadi?" (7 Peristiwa + Tabel Analisis Padlet) */}
            <div className="studi-kasus-section">
              <div className="case-header">
                <span className="case-badge">BAGIAN B</span>
                <h3 className="case-title">{chemData.elaborate.studiKasus2.title}</h3>
                <p className="case-desc">{chemData.elaborate.studiKasus2.deskripsi}</p>
              </div>

              {/* 7 Kartu Peristiwa */}
              <div className="peristiwa-grid">
                {chemData.elaborate.studiKasus2.daftarPeristiwa.map((per) => (
                  <div key={per.id} className="peristiwa-item-card">
                    <span className="per-icon">{per.icon}</span>
                    <span className="per-text">{per.text}</span>
                  </div>
                ))}
              </div>

              {/* Tabel Analisis Interaktif Bergaya Padlet */}
              <div className="padlet-interactive-section">
                <div className="padlet-header">
                  <div className="padlet-title-row">
                    <span className="padlet-brand-tag">Papan Analisis Interaktif Siswa</span>
                    <h4 className="padlet-main-title">📌 Dinding Analisis Perubahan Materi</h4>
                  </div>
                  <p className="padlet-subtitle">
                    Tambahkan kartu analisismu untuk mengklasifikasikan peristiwa fisika/kimia di atas beserta alasan ilmiahnya. Tersimpan otomatis di browser!
                  </p>
                </div>

                {/* Form Tambah Kartu Padlet */}
                <form onSubmit={addPadletCard} className="padlet-input-form">
                  <div className="padlet-form-row">
                    <div className="padlet-field">
                      <label className="field-label">Pilih Peristiwa:</label>
                      <select
                        className="matteria-select"
                        value={newCardPeristiwa}
                        onChange={(e) => setNewCardPeristiwa(e.target.value)}
                      >
                        {chemData.elaborate.studiKasus2.daftarPeristiwa.map((p) => (
                          <option key={p.id} value={p.text}>
                            {p.icon} {p.text}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="padlet-field">
                      <label className="field-label">Jenis Perubahan:</label>
                      <select
                        className="matteria-select"
                        value={newCardJenis}
                        onChange={(e) => setNewCardJenis(e.target.value)}
                      >
                        <option value="Perubahan Fisika">Perubahan Fisika</option>
                        <option value="Perubahan Kimia">Perubahan Kimia</option>
                      </select>
                    </div>
                  </div>

                  <div className="padlet-field">
                    <label className="field-label">Alasan Ilmiah & Pembuktian Zat:</label>
                    <input
                      type="text"
                      className="matteria-input"
                      placeholder="Contoh: Karena protein dalam telur mengalami denaturasi permanen dan terbentuk zat padat baru yang tak bisa kembali..."
                      value={newCardAlasan}
                      onChange={(e) => setNewCardAlasan(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-add-padlet">
                    ➕ Tempelkan Kartu Analisis
                  </button>
                </form>

                {/* Grid Kartu Padlet Siswa */}
                <div className="padlet-cards-grid">
                  {padletCards.map((card) => (
                    <div
                      key={card.id}
                      className="padlet-card"
                      style={{ backgroundColor: card.color || '#f5f5f5' }}
                    >
                      <div className="padlet-card-top">
                        <span className={`padlet-type-badge ${card.jenis === 'Perubahan Kimia' ? 'badge-kimia' : 'badge-fisika'}`}>
                          {card.jenis}
                        </span>
                        <button
                          type="button"
                          className="padlet-delete-btn"
                          onClick={() => deletePadletCard(card.id)}
                          title="Hapus kartu ini"
                        >
                          ✕
                        </button>
                      </div>
                      <h5 className="padlet-card-peristiwa">{card.peristiwa}</h5>
                      <p className="padlet-card-alasan">{card.alasan}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Pertanyaan Pemandu Studi Kasus 2 */}
              <div className="case-questions-box">
                <h4 className="questions-title">📝 Pertanyaan Pemandu Studi Kasus 2:</h4>
                {chemData.elaborate.studiKasus2.pertanyaanPemandu.map((cq) => (
                  <div key={cq.id} className="case-question-item">
                    <label className="question-text" htmlFor={`sk2-${cq.id}`}>
                      {cq.soal}
                    </label>
                    <textarea
                      id={`sk2-${cq.id}`}
                      className="matteria-textarea"
                      rows={3}
                      placeholder="Tuliskan jawaban analisismu..."
                      value={answersSK2[cq.id] || ''}
                      onChange={(e) => handleSK2Change(cq.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bagian LKPD & Ruang Unggah Tugas/Laporan */}
            <div className="lkpd-upload-section">
              <div className="upload-header">
                <span className="upload-icon">📤</span>
                <div>
                  <h3 className="upload-title">{chemData.elaborate.lkpdInfo.title}</h3>
                  <p className="upload-desc">
                    Unggah tautan Google Drive / file dokumen laporan praktikum mandiri dan LKPD kelompokmu.
                  </p>
                </div>
              </div>

              <div className="lkpd-rules-card">
                <strong>Ketentuan Format Laporan:</strong>
                <ul className="rules-list">
                  {chemData.elaborate.lkpdInfo.formatRequirements.map((req, rIdx) => (
                    <li key={rIdx}>{req}</li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleLkpdSubmit} className="upload-form">
                <div className="upload-grid-2">
                  <div className="form-group-item">
                    <label className="form-label" htmlFor="lkpd-name">Nama Siswa / Kelompok:</label>
                    <input
                      id="lkpd-name"
                      type="text"
                      className="matteria-input"
                      placeholder="Contoh: Kelompok 2 (Andi, Budi, Citra)"
                      value={lkpdName}
                      onChange={(e) => setLkpdName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group-item">
                    <label className="form-label" htmlFor="lkpd-kelas">Kelas / Fase:</label>
                    <input
                      id="lkpd-kelas"
                      type="text"
                      className="matteria-input"
                      placeholder="Contoh: X MIPA 1 (Fase E)"
                      value={lkpdKelas}
                      onChange={(e) => setLkpdKelas(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group-item">
                  <label className="form-label" htmlFor="lkpd-link">
                    Tautan Laporan (Google Drive / One Drive / Tautan Berkas):
                  </label>
                  <input
                    id="lkpd-link"
                    type="url"
                    className="matteria-input"
                    placeholder="https://drive.google.com/..."
                    value={lkpdLink}
                    onChange={(e) => setLkpdLink(e.target.value)}
                    required
                  />
                </div>

                <div className="upload-action-row">
                  <button type="submit" className="btn-primary-stage">
                    🚀 Kirim Laporan Tugas
                  </button>
                  {saveStatusElaborate && (
                    <span className="status-saved-pill">{saveStatusElaborate}</span>
                  )}
                  {lkpdSubmitted && !saveStatusElaborate && (
                    <span className="status-submitted-badge">✓ Laporan telah tercatat di sistem</span>
                  )}
                </div>
              </form>
            </div>

            {/* Navigasi ke Evaluate */}
            <div className="step-navigation-footer">
              <button
                type="button"
                className="btn-secondary-stage"
                onClick={() => onNavigateStep('explain')}
              >
                &larr; Kembali ke Explain
              </button>
              <button
                type="button"
                className="btn-primary-stage"
                onClick={() => onNavigateStep('evaluate')}
              >
                Lanjut ke Uji Pemahaman (Evaluate) &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            TAHAP 5: EVALUATE (QUIZ MANDIRI LANGSUNG DI HALAMAN WEB)
           ======================================================== */}
        {activeStep === 'evaluate' && (
          <div className="evaluate-view">
            <div className="quiz-instruction-card">
              <span className="instruction-badge">Kuis Formatif Mandiri</span>
              <h3 className="quiz-banner-headline">Uji Pemahaman Konsep Modul 1</h3>
              <p className="quiz-instruction-text">{chemData.evaluate.instruction}</p>
            </div>

            <form onSubmit={handleQuizSubmit} className="quiz-form">
              {/* Identitas Siswa */}
              <div className="quiz-student-bar">
                <label className="quiz-name-label" htmlFor="quiz-student-name">
                  Nama Lengkap Siswa:
                </label>
                <input
                  id="quiz-student-name"
                  type="text"
                  className="matteria-input quiz-name-input"
                  placeholder="Ketikkan namamu sebelum mengerjakan..."
                  value={quizName}
                  onChange={(e) => setQuizName(e.target.value)}
                  required
                />
              </div>

              {/* Daftar Soal 1-5 */}
              <div className="quiz-questions-stack">
                {chemData.evaluate.quizQuestions.map((q, qIndex) => {
                  const studentAnswer = quizAnswers[q.id];
                  const isAnswered = studentAnswer !== undefined;
                  const isCorrect = isAnswered && studentAnswer === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`quiz-item-card ${quizSubmitted ? (isCorrect ? 'quiz-card-correct' : 'quiz-card-wrong') : ''}`}
                    >
                      <div className="question-top-bar">
                        <span className="question-number-badge">Soal {qIndex + 1} dari 5</span>
                        {quizSubmitted && (
                          <span className={`result-tag ${isCorrect ? 'result-tag-correct' : 'result-tag-wrong'}`}>
                            {isCorrect ? '✓ Jawabanmu Benar' : '✗ Belum Tepat'}
                          </span>
                        )}
                      </div>

                      <p className="question-stem">{q.question}</p>

                      <div className="options-group">
                        {q.options.map((opt, optIndex) => {
                          const isSelected = studentAnswer === optIndex;
                          const isActualCorrect = optIndex === q.correctIndex;
                          
                          let optionClass = 'option-choice-label';
                          if (isSelected) optionClass += ' selected';
                          if (quizSubmitted) {
                            if (isActualCorrect) optionClass += ' correct-answer';
                            else if (isSelected && !isCorrect) optionClass += ' wrong-answer';
                          }

                          return (
                            <label key={optIndex} className={optionClass}>
                              <input
                                type="radio"
                                name={`quiz-opt-${q.id}`}
                                value={optIndex}
                                checked={isSelected}
                                disabled={quizSubmitted}
                                onChange={() => handleQuizSelect(q.id, optIndex)}
                              />
                              <span className="option-letter">{String.fromCharCode(65 + optIndex)}.</span>
                              <span className="option-text">{opt}</span>
                            </label>
                          );
                        })}
                      </div>

                      {/* Umpan Balik Didaktis / Pembahasan */}
                      {quizSubmitted && (
                        <div className="didactic-feedback-box">
                          <div className="feedback-header">
                            <span className="feedback-icon">💡</span>
                            <strong>Pembahasan Didaktis:</strong>
                          </div>
                          <p className="feedback-text">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons & Skor */}
              <div className="quiz-submission-bar">
                {!quizSubmitted ? (
                  <button type="submit" className="btn-submit-quiz">
                    🏁 Kirim & Cek Hasil Kuis
                  </button>
                ) : (
                  <div className="quiz-result-summary">
                    <div className="score-display-card">
                      <div className="score-ring">
                        <span className="score-number">{quizScore}</span>
                        <span className="score-total">/ 100</span>
                      </div>
                      <div className="score-text-details">
                        <h4>{quizScore >= 80 ? '🎉 Luar Biasa! Pemahamanmu Sangat Baik!' : quizScore >= 60 ? '👍 Bagus! Terus Tingkatkan Pemahamanmu!' : '📚 Jangan Berkecil Hati, Pelajari Kembali Modul 5E!'}</h4>
                        <p>Peserta: <strong>{quizName || 'Siswa Anonim'}</strong></p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn-retake-quiz"
                      onClick={handleResetQuiz}
                    >
                      🔄 Ulangi Pengerjaan Kuis
                    </button>
                  </div>
                )}
              </div>
            </form>

            {/* Navigasi Selesai / Kembali ke Beranda */}
            <div className="step-navigation-footer">
              <button
                type="button"
                className="btn-secondary-stage"
                onClick={() => onNavigateStep('elaborate')}
              >
                &larr; Kembali ke Elaborate
              </button>
              <button
                type="button"
                className="btn-primary-stage"
                onClick={onBackToHome}
              >
                🏠 Selesai & Kembali ke Beranda
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

