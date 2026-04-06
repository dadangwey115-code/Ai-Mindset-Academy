
import React, { useState, useRef, useEffect } from 'react';
import { BrainCircuit, Sparkles, ChevronDown, LogIn, LogOut, User, Home, BookOpen, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, Language } from '../types';
import { UI_STRINGS } from '../translations';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  user: any | null;
  onLogout: () => void;
  onLoginClick: () => void;
  completedLessons: string[];
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activePage, 
  setActivePage, 
  language, 
  setLanguage,
  user,
  onLogout,
  onLoginClick,
  completedLessons
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = UI_STRINGS[language].nav;

  const totalLessons = 5;
  const progress = Math.min((completedLessons.length / totalLessons) * 100, 100);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveSubMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const NAV_LINKS = [
    { id: 'home', label: t.home },
    { id: 'curriculum', label: t.curriculum },
    { id: 'ailevels', label: t.ailevels },
    { id: 'prompting', label: t.prompting },
    { id: 'notebooklm', label: t.notebooklm },
    { id: 'aistudio', label: t.aistudio },
    { id: 'deployment', label: t.deployment },
  ];

  const BOTTOM_NAV_ITEMS = [
    { id: 'home', label: t.home, icon: Home },
    { id: 'curriculum', label: t.curriculum, icon: BookOpen },
    { id: 'quiz', label: t.quiz, icon: Sparkles },
    { id: 'profile', label: t.profile, icon: User },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-card backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-gray-200/50 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button 
              className="flex items-center gap-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl p-1" 
              onClick={() => setActivePage('home')} 
              aria-label="Go to Home Page"
            >
              <div className="ai-gradient-bg p-2 rounded-xl glow-shadow group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit className="text-white w-6 h-6" />
              </div>
              <span className="inline-block text-xl md:text-2xl font-black ai-gradient-text">
                AI Mindset Academy
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-baseline space-x-4">
                {NAV_LINKS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id as PageId);
                      setActiveSubMenu(null);
                    }}
                    aria-label={`Go to ${item.label}`}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                      activePage === item.id 
                      ? 'text-white ai-gradient-bg glow-shadow' 
                      : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <ThemeToggle />
                <div className="flex items-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-0.5" role="group" aria-label="Language selector">
                <button 
                  onClick={() => setLanguage('en')}
                  aria-label="Switch to English"
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('my')}
                  aria-label="Switch to Myanmar"
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'my' ? 'bg-blue-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  MM
                </button>
              </div>
            </div>

              {activePage !== 'home' && (
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('trigger-quiz'))}
                  aria-label="Open Quiz"
                  className="flex items-center gap-2 px-5 py-2.5 ai-gradient-bg text-white rounded-xl text-xs font-black transition-all glow-shadow hover:scale-105 active:scale-95"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  {t.quiz}
                </button>
              )}

              {user ? (
                <div className="flex items-center gap-4 pl-4 border-l border-white/10 relative group" ref={dropdownRef}>
                  <button 
                    onClick={() => setActiveSubMenu(activeSubMenu === 'user' ? null : 'user')}
                    aria-label={`User menu for ${user.name || user.email.split('@')[0]}`}
                    className="flex flex-col items-end cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 transition-all duration-1000" 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-blue-400">{Math.round(progress)}%</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs font-bold text-white leading-none">{user.name || user.email.split('@')[0]}</span>
                      <ChevronDown size={12} className={`text-gray-500 transition-transform ${activeSubMenu === 'user' ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {activeSubMenu === 'user' && (
                    <div className="absolute right-0 top-full mt-3 w-56 rounded-2xl glass-card py-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <button
                        onClick={() => {
                          setActivePage('profile');
                          setActiveSubMenu(null);
                        }}
                        aria-label="View Profile"
                        className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-gray-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                      >
                        <User size={18} />
                        {t.profile}
                      </button>
                      <div className="mx-3 my-1 border-t border-gray-200 dark:border-white/5" />
                      <button
                        onClick={() => {
                          onLogout();
                          setActiveSubMenu(null);
                        }}
                        aria-label="Logout"
                        className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-red-500 hover:text-red-600 hover:bg-red-500/5 transition-colors"
                      >
                        <LogOut size={18} />
                        {t.logout}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-bold border border-white/10 transition-all"
                >
                  <LogIn size={14} />
                  {t.login} / {t.signup}
                </button>
              )}
            </div>

            {/* Mobile Top Navbar */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 right-0 glass-card backdrop-blur-2xl bg-white/90 dark:bg-slate-950/90 border-b border-gray-200 dark:border-white/10 py-6 px-4 shadow-2xl z-40 overflow-y-auto max-h-[calc(100vh-160px)]"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-slate-500">Navigation</span>
                  <div className="flex items-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-0.5">
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => setLanguage('my')}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${language === 'my' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}
                    >
                      MM
                    </button>
                  </div>
                </div>
                
                {NAV_LINKS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id as PageId);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                      activePage === item.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {activePage === item.id && <Sparkles size={16} className="text-white/80" />}
                  </button>
                ))}

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                  {user ? (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setActivePage('profile');
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/5"
                      >
                        <User size={20} />
                        {t.profile}
                      </button>
                      <button
                        onClick={() => {
                          onLogout();
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold text-red-500 hover:bg-red-500/5"
                      >
                        <LogOut size={20} />
                        {t.logout}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        onLoginClick();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-4 ai-gradient-bg text-white rounded-2xl text-base font-bold shadow-lg"
                    >
                      <LogIn size={20} />
                      {t.login} / {t.signup}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-card backdrop-blur-2xl bg-white/80 dark:bg-slate-950/80 border-t border-gray-200/50 dark:border-white/10 pb-[env(safe-area-inset-bottom)] transition-colors duration-300">
        <div className="flex items-center justify-around h-20 relative px-2">
          {BOTTOM_NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'quiz') {
                  window.dispatchEvent(new CustomEvent('trigger-quiz'));
                } else {
                  setActivePage(item.id as PageId);
                }
              }}
              aria-label={`Go to ${item.label}`}
              className={`flex flex-col items-center justify-center gap-1.5 w-full h-full min-h-[48px] transition-all relative ${
                activePage === item.id 
                ? 'text-indigo-500' 
                : 'text-gray-400 dark:text-slate-500 hover:text-indigo-400'
              }`}
            >
              <div className="relative">
                <item.icon size={22} className={activePage === item.id ? 'animate-in zoom-in duration-300 text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]' : ''} />
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"
                  />
                )}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-tighter transition-colors ${activePage === item.id ? 'text-indigo-500' : ''}`}>
                {item.label}
              </span>
              {activePage === item.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-1 w-1.5 h-1.5 ai-gradient-bg rounded-full glow-shadow" 
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
