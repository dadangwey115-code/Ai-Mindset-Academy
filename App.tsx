
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { PageId, Language, User } from './types';
import pb from './services/pb';

// Lazy loaded components
const ConceptModal = lazy(() => import('./components/ConceptModal').then(m => ({ default: m.ConceptModal })));
const PromptLibraryModal = lazy(() => import('./components/PromptLibraryModal').then(m => ({ default: m.PromptLibraryModal })));
const StrategyBlueprintModal = lazy(() => import('./components/StrategyBlueprintModal').then(m => ({ default: m.StrategyBlueprintModal })));
const Curriculum = lazy(() => import('./components/Curriculum').then(m => ({ default: m.Curriculum })));
const PromptLecture = lazy(() => import('./components/PromptLecture').then(m => ({ default: m.PromptLecture })));
const NotebookLecture = lazy(() => import('./components/NotebookLecture').then(m => ({ default: m.NotebookLecture })));
const AIStudioLecture = lazy(() => import('./components/AIStudioLecture').then(m => ({ default: m.AIStudioLecture })));
const AILevelsLecture = lazy(() => import('./components/AILevelsLecture').then(m => ({ default: m.AILevelsLecture })));
const DeploymentLecture = lazy(() => import('./components/DeploymentLecture').then(m => ({ default: m.DeploymentLecture })));
const BusinessStrategy = lazy(() => import('./components/BusinessStrategy').then(m => ({ default: m.BusinessStrategy })));
const StrategicFramework = lazy(() => import('./components/StrategicFramework').then(m => ({ default: m.StrategicFramework })));
const FloatingAssistant = lazy(() => import('./components/FloatingAssistant').then(m => ({ default: m.FloatingAssistant })));
const AuthPage = lazy(() => import('./components/AuthPage').then(m => ({ default: m.AuthPage })));
const Profile = lazy(() => import('./components/Profile').then(m => ({ default: m.Profile })));
const AchievementToast = lazy(() => import('./components/AchievementToast').then(m => ({ default: m.AchievementToast })));
const PwaInstallBanner = lazy(() => import('./components/PwaInstallBanner').then(m => ({ default: m.PwaInstallBanner })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px] w-full">
    <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('academy-lang');
    return (saved as Language) || 'en';
  });
  const [user, setUser] = useState<User | null>(pb.authStore.model as any);
  const [isAuthenticated, setIsAuthenticated] = useState(pb.authStore.isValid);
  const [isConceptModalOpen, setIsConceptModalOpen] = useState(false);
  const [isPromptLibraryModalOpen, setIsPromptLibraryModalOpen] = useState(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
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
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AuthPage language={language} onLanguageChange={setLanguage} />
      </Suspense>
    );
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
      
      <main className="transition-all duration-500 ease-in-out pb-24 md:pb-0 px-4 sm:px-6 lg:px-8">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-700">
            <Hero 
              onStart={() => setActivePage('curriculum')} 
              onOpenConcept={() => setIsConceptModalOpen(true)}
              onOpenPromptLibrary={() => setIsPromptLibraryModalOpen(true)}
              onOpenStrategyBlueprint={() => setIsBlueprintOpen(true)}
              language={language} 
            />
            <Suspense fallback={<LoadingSpinner />}>
              <StrategicFramework 
                language={language} 
                onStart={() => setActivePage('curriculum')} 
                onOpenStrategyBlueprint={() => setIsBlueprintOpen(true)}
              />
              <BusinessStrategy 
                language={language} 
                onOpenBlueprint={() => setIsBlueprintOpen(true)}
              />
            </Suspense>
          </div>
        )}
        
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </main>

      <Footer />
      <Suspense fallback={null}>
        <FloatingAssistant language={language} />
        <AchievementToast 
          isVisible={isToastVisible} 
          onClose={() => setIsToastVisible(false)} 
          language={language}
        />
        <PwaInstallBanner />
        <ConceptModal 
          isOpen={isConceptModalOpen} 
          onClose={() => setIsConceptModalOpen(false)} 
          language={language} 
        />
        <PromptLibraryModal 
          isOpen={isPromptLibraryModalOpen} 
          onClose={() => setIsPromptLibraryModalOpen(false)} 
          language={language} 
        />
        <StrategyBlueprintModal 
          isOpen={isBlueprintOpen} 
          onClose={() => setIsBlueprintOpen(false)} 
          language={language} 
        />
      </Suspense>
    </div>
  );
};

export default App;
