
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Sparkles, Briefcase, Shield, Map } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

interface HeroProps {
  onStart: () => void;
  onOpenConcept: () => void;
  onOpenPromptLibrary: () => void;
  onOpenStrategyBlueprint: () => void;
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onOpenConcept, onOpenPromptLibrary, onOpenStrategyBlueprint, language }) => {
  const t = UI_STRINGS[language].hero;
  const pt = UI_STRINGS[language].promptLibrary;
  const st = UI_STRINGS[language].sections;
  const isMy = language === 'my';
  
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-shadow mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-indigo-500" />
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] ai-gradient-text">{t.tag}</span>
        </div>
        <h1 className={`
          ${isMy ? 'text-4xl sm:text-5xl md:text-7xl leading-myanmar' : 'text-5xl sm:text-6xl md:text-8xl leading-[0.9]'} 
          font-black text-gray-900 dark:text-white mb-8
        `}>
          {t.title1}<br />
          <span className="ai-gradient-text">{t.title2}</span>
        </h1>
        <p className={`max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-slate-300 mb-12 ${isMy ? 'leading-relaxed' : 'leading-relaxed'}`}>
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 px-4 sm:px-0">
          <button 
            onClick={onStart}
            aria-label="Start Learning Now"
            className="w-full sm:w-auto px-12 py-5 ai-gradient-bg text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 glow-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
          >
            {t.btnStart} <ArrowRight className="w-6 h-6" />
          </button>
          <button 
            onClick={onOpenConcept}
            aria-label="Watch Concept Video"
            className="w-full sm:w-auto px-12 py-5 glass-card text-gray-900 dark:text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
          >
            <Sparkles className="w-6 h-6 ai-gradient-text" /> {t.btnWatch}
          </button>
        </div>
      </div>
    </section>
  );
};
