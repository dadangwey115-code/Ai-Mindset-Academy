
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Curriculum } from './components/Curriculum';
import { PromptLecture } from './components/PromptLecture';
import { NotebookLecture } from './components/NotebookLecture';
import { AIStudioLecture } from './components/AIStudioLecture';
import { AILevelsLecture } from './components/AILevelsLecture';
import { DeploymentLecture } from './components/DeploymentLecture';
import { BusinessStrategy } from './components/BusinessStrategy';
import { StrategicFramework } from './components/StrategicFramework';
import { Footer } from './components/Footer';
import { FloatingAssistant } from './components/FloatingAssistant';
import { AuthModal } from './components/AuthModal';
import { PageId, Language } from './types';
import pb from './services/pb';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('academy-lang');
    return (saved as Language) || 'en';
  });
  const [user, setUser] = useState<any | null>(pb.authStore.model);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('academy-lang', language);
  }, [language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    // Sync auth state
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setUser(model);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    pb.authStore.clear();
    setUser(null);
  };

  return (
    <div className={`min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 selection:text-blue-200 scroll-smooth ${language === 'my' ? 'myanmar-text' : ''}`}>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        language={language} 
        setLanguage={setLanguage}
        user={user}
        onLogout={handleLogout}
        onLoginClick={() => setIsAuthModalOpen(true)}
      />
      
      <main className="transition-all duration-500 ease-in-out">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-700">
            <Hero onStart={() => setActivePage('curriculum')} language={language} />
            <StrategicFramework language={language} onStart={() => setActivePage('curriculum')} />
            <BusinessStrategy language={language} />
          </div>
        )}
        
        {activePage === 'curriculum' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Curriculum language={language} />
          </div>
        )}

        {activePage === 'ailevels' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <AILevelsLecture language={language} />
          </div>
        )}

        {activePage === 'prompting' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PromptLecture language={language} />
          </div>
        )}

        {activePage === 'notebooklm' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <NotebookLecture language={language} />
          </div>
        )}

        {activePage === 'aistudio' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <AIStudioLecture language={language} />
          </div>
        )}

        {activePage === 'deployment' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DeploymentLecture language={language} />
          </div>
        )}
      </main>

      <Footer />
      <FloatingAssistant language={language} />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        language={language}
        onAuthSuccess={(user) => setUser(user)}
      />
    </div>
  );
};

export default App;
