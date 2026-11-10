import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopicCards from './components/TopicCards';
import Sidebar5E from './components/Sidebar5E';
import ModulDetail from './components/ModulDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem('matteria_current_view') || 'beranda';
  });

  const [activeStep, setActiveStep] = useState(() => {
    return localStorage.getItem('matteria_active_step') || 'engage';
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('matteria_current_view', currentView);
  }, [currentView]);

  useEffect(() => {
    localStorage.setItem('matteria_active_step', activeStep);
  }, [activeStep]);

  const handleNavigate = (target) => {
    if (target === 'beranda') {
      setCurrentView('beranda');
    } else {
      setCurrentView('modul');
      setActiveStep(target);
    }
    setSidebarOpen(false);
  };

  const handleStartLearning = () => {
    setCurrentView('modul');
    setActiveStep('engage');
  };

  const handleSelectTopic = (_topicId) => {
    // When a student selects any topic, guide them into the 5E sequence starting at engage or relevant stage
    setCurrentView('modul');
    setActiveStep('engage');
  };

  const handleSelectStep = (stepKey) => {
    setCurrentView('modul');
    setActiveStep(stepKey);
  };

  const handleBackToHome = () => {
    setCurrentView('beranda');
    setSidebarOpen(false);
  };

  return (
    <div className="matteria-app-root">
      {/* Top Navbar */}
      <Navbar
        activeView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main View Condition */}
      {currentView === 'beranda' ? (
        <main className="beranda-main">
          <HeroSection onStartLearning={handleStartLearning} />
          <TopicCards
            onSelectTopic={handleSelectTopic}
            onSelectStep={handleSelectStep}
          />
        </main>
      ) : (
        <div className="modul-page-layout">
          {/* Mobile Sidebar Trigger */}
          <div className="mobile-sidebar-toggle-bar">
            <button
              type="button"
              className="btn-toggle-sidebar"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰ Menu Tahap 5E
            </button>
            <span className="current-step-indicator">
              Tahap Aktif: <strong>{activeStep.toUpperCase()}</strong>
            </span>
          </div>

          <div className="modul-body-container">
            {/* Sidebar 5E Kiri */}
            <Sidebar5E
              activeStep={activeStep}
              onSelectStep={handleSelectStep}
              onBackToHome={handleBackToHome}
              isOpen={sidebarOpen}
              onToggleMobile={(val) => setSidebarOpen(typeof val === 'boolean' ? val : !sidebarOpen)}
            />

            {/* Konten 5E Kanan */}
            <main className="modul-main-content">
              <ModulDetail
                activeStep={activeStep}
                onNavigateStep={handleSelectStep}
                onBackToHome={handleBackToHome}
              />
            </main>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer
        onNavigateHome={handleBackToHome}
        onNavigateStep={handleSelectStep}
      />
    </div>
  );
}

export default App;
