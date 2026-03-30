
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, BrainCircuit, Sparkles, Languages, ChevronDown, ExternalLink, LogIn, LogOut, User } from 'lucide-react';
import { PageId, Language } from '../types';
import { UI_STRINGS } from '../translations';

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
    { 
      id: 'prompting', 
      label: t.prompting,
      subMenu: [
        { label: 'Intent Architect', href: 'https://intent-architect.mindset-it.online/' }
      ]
    },
    { id: 'notebooklm', label: t.notebooklm },
    { id: 'aistudio', label: t.aistudio },
    { id: 'deployment', label: t.deployment },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <BrainCircuit className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              AI Mindset Academy
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-4">
              {NAV_LINKS.map((item) => (
                <div key={item.id} className="relative group" ref={item.subMenu ? dropdownRef : null}>
                  <button
                    onClick={() => {
                      if (item.subMenu) {
                        setActiveSubMenu(activeSubMenu === item.id ? null : item.id);
                      } else {
                        setActivePage(item.id as PageId);
                        setActiveSubMenu(null);
                      }
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      activePage === item.id 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {item.subMenu && <ChevronDown size={14} className={`transition-transform duration-200 ${activeSubMenu === item.id ? 'rotate-180' : ''}`} />}
                  </button>

                  {item.subMenu && activeSubMenu === item.id && (
                    <div className="absolute left-0 mt-2 w-48 rounded-xl bg-zinc-900 border border-white/10 shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.subMenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.label}
                          <ExternalLink size={12} className="opacity-50" />
                        </a>
                      ))}
                      <div className="mx-2 my-1 border-t border-white/5" />
                      <button
                        onClick={() => {
                          setActivePage(item.id as PageId);
                          setActiveSubMenu(null);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-blue-400 hover:text-blue-300 hover:bg-white/5 transition-colors"
                      >
                        Go to {item.label}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('my')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'my' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
              >
                MM
              </button>
            </div>

            {activePage !== 'home' && (
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('trigger-quiz'))}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-black transition-all shadow-lg shadow-emerald-600/20 animate-in zoom-in-95 duration-300"
              >
                <Sparkles size={14} className="animate-pulse" />
                {t.quiz}
              </button>
            )}

            {user ? (
              <div className="flex items-center gap-4 pl-4 border-l border-white/10 relative group" ref={dropdownRef}>
                <button 
                  onClick={() => setActiveSubMenu(activeSubMenu === 'user' ? null : 'user')}
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
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-zinc-900 border border-white/10 shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={() => {
                        setActivePage('profile');
                        setActiveSubMenu(null);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <User size={16} />
                      {t.profile}
                    </button>
                    <div className="mx-2 my-1 border-t border-white/5" />
                    <button
                      onClick={() => {
                        onLogout();
                        setActiveSubMenu(null);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-colors"
                    >
                      <LogOut size={16} />
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

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'my' : 'en')}
              className="text-gray-400 hover:text-white p-2"
            >
              <Languages size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => { 
                    if (item.subMenu) {
                      setActiveSubMenu(activeSubMenu === item.id ? null : item.id);
                    } else {
                      setActivePage(item.id as PageId); 
                      setIsOpen(false); 
                    }
                  }}
                  className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all ${
                    activePage === item.id 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.subMenu && <ChevronDown size={18} className={`transition-transform duration-200 ${activeSubMenu === item.id ? 'rotate-180' : ''}`} />}
                </button>
                
                {item.subMenu && activeSubMenu === item.id && (
                  <div className="pl-4 space-y-1 mt-1 mb-2">
                    {item.subMenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-white transition-all"
                      >
                        {sub.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                    <button
                      onClick={() => {
                        setActivePage(item.id as PageId);
                        setIsOpen(false);
                        setActiveSubMenu(null);
                      }}
                      className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-blue-500 hover:text-blue-400"
                    >
                      Go to {item.label}
                    </button>
                  </div>
                )}
              </div>
            ))}
            {activePage !== 'home' && (
              <div className="pt-4 pb-2 px-3">
                <button 
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('trigger-quiz'));
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-black transition-all shadow-lg shadow-emerald-600/20"
                >
                  <Sparkles size={16} className="animate-pulse" />
                  {t.quiz}
                </button>
              </div>
            )}

            <div className="pt-4 pb-2 px-3 border-t border-white/5 mt-2">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{user.name || user.email.split('@')[0]}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActivePage('profile');
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl text-sm font-bold transition-all"
                  >
                    <User size={16} />
                    {t.profile}
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl text-sm font-bold transition-all"
                  >
                    <LogOut size={16} />
                    {t.logout}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-bold border border-white/10 transition-all"
                >
                  <LogIn size={16} />
                  {t.login} / {t.signup}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
