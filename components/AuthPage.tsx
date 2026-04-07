import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, AlertCircle, Info, Loader2, BrainCircuit, GraduationCap, Home, Briefcase, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import pb from '../services/pb';
import { UI_STRINGS } from '../translations';
import { Language } from '../types';
import { InstallPWAButton } from './InstallPWAButton';

interface AuthPageProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const CAROUSEL_ITEMS = [
  // Teachers (0-4)
  ...Array(5).fill({
    icon: <GraduationCap className="w-12 h-12 text-blue-400" />,
    label: "👨‍🏫"
  }),
  // Parents (5-9)
  ...Array(5).fill({
    icon: <Home className="w-12 h-12 text-purple-400" />,
    label: "🏠"
  }),
  // Business (10-14)
  ...Array(5).fill({
    icon: <Briefcase className="w-12 h-12 text-indigo-400" />,
    label: "💼"
  })
];

export const AuthPage: React.FC<AuthPageProps> = ({ language, onLanguageChange }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    reason: '',
  });

  const t = UI_STRINGS[language];

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 30000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]); // Reset timer when slide changes or pause state changes

  const getCategoryIndex = (slideIdx: number) => {
    if (slideIdx < 5) return 0;
    if (slideIdx < 10) return 1;
    return 2;
  };

  const currentCategory = getCategoryIndex(currentSlide);

  const CATEGORIES = [
    { id: 'teachers', label: t.auth.categories.teachers, startIdx: 0, icon: <GraduationCap size={16} /> },
    { id: 'parents', label: t.auth.categories.parents, startIdx: 5, icon: <Home size={16} /> },
    { id: 'business', label: t.auth.categories.business, startIdx: 10, icon: <Briefcase size={16} /> }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        await pb.collection('ai_users').authWithPassword(
          formData.email,
          formData.password
        );
      } else {
        const { requestAcademyAccess } = await import('../services/pb');
        await requestAcademyAccess({
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
        });
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      setError(err.message || t.auth.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className={`min-h-screen bg-white dark:bg-black flex flex-col md:flex-row relative overflow-hidden transition-colors duration-300 ${language === 'my' ? 'myanmar-text' : ''}`}>
      {/* Language Switcher - Floating */}
      <div className="absolute top-6 right-6 z-50">
        <div className="flex items-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-0.5 backdrop-blur-md" role="group" aria-label="Language selector">
          <button 
            onClick={() => onLanguageChange('en')}
            aria-label="Switch to English"
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
          >
            EN
          </button>
          <button 
            onClick={() => onLanguageChange('my')}
            aria-label="Switch to Myanmar"
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${language === 'my' ? 'bg-blue-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
          >
            MM
          </button>
        </div>
      </div>

      {/* Left Side: Presentation Area */}
      <div className="hidden md:flex md:w-1/2 relative flex-col justify-center px-12 lg:px-20 overflow-y-auto bg-gray-50 dark:bg-[#050505] transition-colors duration-300">
        {/* Deep Tech Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: Math.random() * 0.5,
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{ 
                  y: [null, "-20%"],
                  opacity: [null, 0]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              />
            ))}
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-600/20">
                <BrainCircuit className="text-white w-8 h-8" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
                AI Mindset Academy
              </h1>
            </div>
            <div className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-8">
              {t.auth.authHeadline.split(/[.။]/).filter(Boolean).map((part: string, i: number) => {
                const punctuation = (language === 'my' && /[\u1000-\u109F]/.test(t.auth.authHeadline)) ? '။' : '.';
                return (
                  <div key={i} className="mb-2">
                    <span 
                      className={i === 1 ? "inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent px-2 py-1" : "block"}
                      style={{ 
                        WebkitBackgroundClip: i === 1 ? 'text' : 'initial',
                        WebkitTextFillColor: i === 1 ? 'transparent' : 'initial'
                      }}
                    >
                      {part.trim()}{punctuation}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Category Selector */}
          <div className="flex flex-wrap gap-3 mb-8">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setCurrentSlide(cat.startIdx)}
                aria-label={`Show ${cat.label} category`}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  currentCategory === idx 
                    ? 'bg-blue-600/20 border-blue-500/50 text-blue-400' 
                    : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {cat.icon}
                <span className="text-xs font-bold uppercase tracking-wider">{cat.label}</span>
                
                {/* Category-wide Progress Bar (Optional, but let's do slide-level inside the active tab) */}
                {currentCategory === idx && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: isPaused ? undefined : '0%' }}
                    transition={{ duration: 30, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500/50 w-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div 
            className="relative h-64 lg:h-72 cursor-pointer group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl backdrop-blur-sm group-hover/carousel:border-blue-500/50 transition-colors">
                      {CAROUSEL_ITEMS[currentSlide].icon}
                    </div>
                    <div>
                      <span className="text-2xl">{CAROUSEL_ITEMS[currentSlide].label}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.auth.carousel[currentSlide].title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
                    "{t.auth.carousel[currentSlide].description}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Manual Navigation Arrows */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20">
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                aria-label="Previous slide"
                className="p-3 bg-gray-100 dark:bg-white/5 hover:bg-blue-600/20 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 rounded-full text-gray-400 dark:text-white/30 hover:text-blue-400 transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20">
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                aria-label="Next slide"
                className="p-3 bg-gray-100 dark:bg-white/5 hover:bg-blue-600/20 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 rounded-full text-gray-400 dark:text-white/30 hover:text-blue-400 transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-400 bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5">
              {currentSlide % 5 + 1} / 5
            </div>

            {/* Pause Indicator Overlay */}
            <AnimatePresence>
              {isPaused && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-0 right-0 bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm border border-blue-500/20 uppercase tracking-widest flex items-center gap-1.5"
                >
                  <Pause size={10} />
                  <span>Paused</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sub-indicators (Dots for slides within category) */}
          <div className="flex gap-2 mt-4">
            {CAROUSEL_ITEMS.map((_, idx) => {
              const slideCategory = getCategoryIndex(idx);
              if (slideCategory !== currentCategory) return null;
              
              return (
                <button
                  idx={idx}
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative h-1 bg-white/20 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ width: idx === currentSlide ? '32px' : '8px' }}
                >
                  {idx === currentSlide && (
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: isPaused ? undefined : '0%' }}
                      transition={{ duration: 30, ease: "linear" }}
                      className="absolute inset-0 bg-blue-500"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-white dark:bg-black transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Mobile Header */}
          <div className="md:hidden flex flex-col items-center mb-12">
            <div className="bg-blue-600 p-3 rounded-2xl mb-4 shadow-lg shadow-blue-600/20">
              <BrainCircuit className="text-white w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase text-center">
              AI Mindset Academy
            </h1>
            <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mt-2">
              {t.auth.authHeadline}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden ring-1 ring-gray-100 dark:ring-white/5 transition-colors duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                {isLogin ? t.auth.loginTitle : (language === 'my' ? 'ဝင်ခွင့်တောင်းဆိုရန်' : 'Request Access')}
              </h2>
              
              {/* Segmented Toggle Tabs */}
              <div className="flex p-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl mb-2" role="tablist">
                <button
                  type="button"
                  onClick={() => { setIsLogin(false); setSubmitted(false); }}
                  role="tab"
                  aria-selected={!isLogin}
                  aria-label="Switch to Request Access"
                  className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${!isLogin ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                >
                  {language === 'my' ? 'ဝင်ခွင့်တောင်းဆိုရန်' : 'Request Access'}
                </button>
                <button
                  type="button"
                  onClick={() => { setIsLogin(true); setSubmitted(false); }}
                  role="tab"
                  aria-selected={isLogin}
                  aria-label="Switch to Login"
                  className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isLogin ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                >
                  {t.auth.toggleLogin}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <BrainCircuit size={40} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {language === 'my' ? 'တောင်းဆိုမှု အောင်မြင်ပါသည်' : 'Request Submitted'}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {language === 'my' 
                        ? 'သင်၏ဝင်ခွင့်တောင်းဆိုမှုကို လက်ခံရရှိပါပြီ။ ကျွန်ုပ်တို့အဖွဲ့မှ စစ်ဆေးပြီးနောက် အီးမေးလ်မှတစ်ဆင့် မကြာမီ ဆက်သွယ်ပေးပါမည်။' 
                        : 'Your request has been submitted. Our team will review and contact you via email soon.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-blue-400 text-sm font-bold hover:underline"
                  >
                    {language === 'my' ? 'အကောင့်ဝင်ရန် ပြန်သွားပါ' : 'Back to Login'}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  {isLogin && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 text-blue-400 text-xs bg-blue-400/10 border border-blue-400/20 p-4 rounded-2xl mb-4"
                    >
                      <Info size={16} className="shrink-0" />
                      <span className="font-medium leading-relaxed">{t.auth.loginInfo}</span>
                    </motion.div>
                  )}
                  {!isLogin && (
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                        {t.auth.name}
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-all placeholder:text-gray-600"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                      {t.auth.email}
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-all placeholder:text-gray-600"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  {isLogin ? (
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                        {t.auth.password}
                      </label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input
                          type="password"
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-all placeholder:text-gray-600"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                        {language === 'my' ? 'ဘာကြောင့် တက်ရောက်ချင်တာလဲ' : 'Why do you want to join?'}
                      </label>
                      <div className="relative group">
                        <textarea
                          name="reason"
                          required
                          value={formData.reason}
                          onChange={handleChange}
                          rows={3}
                          className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-all placeholder:text-gray-600 resize-none"
                          placeholder={language === 'my' ? 'သင်၏ ရည်ရွယ်ချက်ကို ဖော်ပြပေးပါ...' : 'Tell us your goals...'}
                        />
                      </div>
                    </div>
                  )}

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 p-4 rounded-2xl"
                      >
                        <AlertCircle size={16} className="shrink-0" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 mt-8 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <span>{isLogin ? t.auth.loginBtn : (language === 'my' ? 'တောင်းဆိုမှု ပေးပို့ရန်' : 'Submit Request')}</span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* PWA Install Button */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col items-center gap-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                {language === 'my' ? 'အက်ပ်အဖြစ် အသုံးပြုရန်' : 'Experience as an App'}
              </p>
              <InstallPWAButton language={language} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
