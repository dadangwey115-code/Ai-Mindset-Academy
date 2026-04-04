
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptModal } from './components/ConceptModal';
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
import { AuthPage } from './components/AuthPage';
import { Profile } from './components/Profile';
import { AchievementToast } from './components/AchievementToast';
import { PageId, Language, User } from './types';
import pb from './services/pb';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('academy-lang');
    return (saved as Language) || 'en';
  });
  const [user, setUser] = useState<User | null>(pb.authStore.model as any);
  const [isAuthenticated, setIsAuthenticated] = useState(pb.authStore.isValid);
  const [isConceptModalOpen, setIsConceptModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const lessonSequence: PageId[] = ['ailevels', 'prompting', 'notebooklm', 'aistudio', 'deployment'];

  useEffect(() => {
    localStorage.setItem('academy-lang', language);
  }, [language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    // Sync auth state
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setUser(model as any);
      setIsAuthenticated(pb.authStore.isValid);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    pb.authStore.clear();
    setUser(null);
    setIsAuthenticated(false);
  };

  const completeLesson = async (pageId: string) => {
    if (!user) return;
    
    const completed = user.completed_lessons || [];
    if (!completed.includes(pageId)) {
      const updatedCompleted = [...completed, pageId];
      try {
        const updatedUser = await pb.collection('ai_users').update(user.id, {
          completed_lessons: updatedCompleted
        });
        setUser(updatedUser as any);
        setIsToastVisible(true);
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    }

    // Navigate to next lesson
    const currentIndex = lessonSequence.indexOf(pageId as PageId);
    if (currentIndex !== -1 && currentIndex < lessonSequence.length - 1) {
      setActivePage(lessonSequence[currentIndex + 1]);
    } else {
      setActivePage('curriculum');
    }
  };

  if (!isAuthenticated) {
    return <AuthPage language={language} onLanguageChange={setLanguage} />;
  }

  const completedLessons = user?.completed_lessons || [];

  return (
    <div className={`min-h-screen bg-black text-gray-100 selection:bg-blue-500/30 selection:text-blue-200 scroll-smooth ${language === 'my' ? 'myanmar-text antialiased' : 'font-sans'}`}>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        language={language} 
        setLanguage={setLanguage}
        user={user}
        onLogout={handleLogout}
        onLoginClick={() => {}} // Not needed in protected mode but kept for prop compatibility
        completedLessons={completedLessons}
      />
      
      <main className="transition-all duration-500 ease-in-out pb-20 md:pb-0">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-700">
            <Hero 
              onStart={() => setActivePage('curriculum')} 
              onOpenConcept={() => setIsConceptModalOpen(true)}
              language={language} 
            />
            <StrategicFramework language={language} onStart={() => setActivePage('curriculum')} />
            <BusinessStrategy language={language} />
          </div>
        )}
        
        {activePage === 'curriculum' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Curriculum language={language} completedLessons={completedLessons} />
          </div>
        )}

        {activePage === 'ailevels' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <AILevelsLecture language={language} onComplete={() => completeLesson('ailevels')} />
          </div>
        )}

        {activePage === 'prompting' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PromptLecture language={language} onComplete={() => completeLesson('prompting')} />
          </div>
        )}

        {activePage === 'notebooklm' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <NotebookLecture language={language} onComplete={() => completeLesson('notebooklm')} />
          </div>
        )}

        {activePage === 'aistudio' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <AIStudioLecture language={language} onComplete={() => completeLesson('aistudio')} />
          </div>
        )}

        {activePage === 'deployment' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DeploymentLecture language={language} onComplete={() => completeLesson('deployment')} />
          </div>
        )}

        {activePage === 'profile' && user && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Profile user={user} language={language} onLogout={handleLogout} />
          </div>
        )}
      </main>

      <Footer />
      <FloatingAssistant language={language} />
      <AchievementToast 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
        language={language}
      />
      <ConceptModal 
        isOpen={isConceptModalOpen} 
        onClose={() => setIsConceptModalOpen(false)} 
        language={language} 
      />
    </div>
  );
};

export default App;
