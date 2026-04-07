
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageId, Language, User } from './types';
import pb from './services/pb';

// Lazy loaded components
const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
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
const AdminDashboard = lazy(() => import('./components/AdminDashboard').then(m => ({ default: m.AdminDashboard })));

import { ThemeProvider } from './components/ThemeProvider';

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-8">
    <div className="relative w-28 h-28">
      {/* Outer spinning ring with gradient */}
      <motion.div 
        className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-purple-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner counter-rotating ring */}
      <motion.div 
        className="absolute inset-2 rounded-full border-4 border-transparent border-b-pink-500 border-l-blue-500 opacity-60"
        animate={{ rotate: -360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
      {/* Pulsing AI Core */}
      <motion.div 
        className="absolute inset-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.4)]"
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 20px rgba(99,102,241,0.3)",
            "0 0 50px rgba(168,85,247,0.6)",
            "0 0 20px rgba(99,102,241,0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="text-white w-8 h-8" />
      </motion.div>
      
      {/* Orbiting particles */}
      {[0, 120, 240].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400 rounded-full"
          animate={{
            rotate: [angle, angle + 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            originX: "50%",
            originY: "50%",
            top: "calc(50% - 4px)",
            left: "calc(50% - 4px)",
            transform: `rotate(${angle}deg) translateX(56px)`
          }}
        />
      ))}
    </div>
    
    <div className="flex flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center"
      >
        <h3 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 py-1"
          style={{ 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Neural Syncing
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-[0.2em] uppercase">
          Optimizing Experience
        </p>
      </motion.div>
      
      <div className="w-56 h-1.5 bg-white/5 dark:bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
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

  const completedLessons = user?.completed_lessons || [];

  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/admin" element={
            <Suspense fallback={<LoadingSpinner />}>
              <AdminDashboard />
            </Suspense>
          } />
          <Route path="*" element={
            !isAuthenticated ? (
              <Suspense fallback={<LoadingSpinner />}>
                <AuthPage language={language} onLanguageChange={setLanguage} />
              </Suspense>
            ) : (
              <div className={`min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-slate-100 selection:bg-purple-500/30 selection:text-white scroll-smooth transition-colors duration-300 ${language === 'my' ? 'myanmar-text antialiased' : 'font-sans'}`}>
                {/* Global AI Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-600/5 blur-[120px] rounded-full animate-pulse" />
                  <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 dark:bg-purple-600/5 blur-[120px] rounded-full animate-pulse delay-1000" />
                </div>

                <div className="relative z-10">
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
                      <Suspense fallback={<LoadingSpinner />}>
                        <div className="animate-in fade-in duration-700">
                          <Hero 
                            onStart={() => setActivePage('curriculum')} 
                            onOpenConcept={() => setIsConceptModalOpen(true)}
                            onOpenPromptLibrary={() => setIsPromptLibraryModalOpen(true)}
                            onOpenStrategyBlueprint={() => setIsBlueprintOpen(true)}
                            language={language} 
                          />
                          <StrategicFramework 
                            language={language} 
                            onStart={() => setActivePage('curriculum')} 
                            onOpenStrategyBlueprint={() => setIsBlueprintOpen(true)}
                          />
                          <BusinessStrategy 
                            language={language} 
                            onOpenBlueprint={() => setIsBlueprintOpen(true)}
                          />
                        </div>
                      </Suspense>
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
                          <PromptLecture 
                            language={language} 
                            onComplete={() => completeLesson('prompting')}
                            onOpenPromptLibrary={() => setIsPromptLibraryModalOpen(true)}
                            onOpenStrategyBlueprint={() => setIsBlueprintOpen(true)}
                          />
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
              </div>
            )
          } />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
