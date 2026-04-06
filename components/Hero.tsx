
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
            onClick={onOpenStrategyBlueprint}
            aria-label="Get Full Strategy Blueprint"
            className="w-full sm:w-auto px-12 py-5 glass-card text-gray-900 dark:text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
          >
            <Map className="w-6 h-6 text-indigo-500" /> {st.blueprintBtn}
          </button>
          <button 
            onClick={onOpenConcept}
            aria-label="Watch Concept Video"
            className="w-full sm:w-auto px-12 py-5 glass-card text-gray-900 dark:text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
          >
            <Sparkles className="w-6 h-6 ai-gradient-text" /> {t.btnWatch}
          </button>
        </div>

        {/* Action Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Prompt Library Link */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={onOpenPromptLibrary}
              aria-label="Open Prompt Library"
              className="group relative w-full p-8 rounded-[32px] glass-card hover:border-indigo-500/50 transition-all duration-500 text-left overflow-hidden active:scale-[0.98] h-full glow-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
              id="hero-prompt-library-btn"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles className="w-24 h-24 text-indigo-500" />
              </div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    {pt.title}
                    <ArrowRight className="w-6 h-6 text-indigo-500 group-hover:translate-x-2 transition-transform" />
                  </h2>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                    {pt.subtitle}
                  </p>
                </div>
              </div>
            </button>
          </motion.div>

          {/* Strategy Blueprint Link */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={onOpenStrategyBlueprint}
              aria-label="Open Strategy Blueprint"
              className="group relative w-full p-8 rounded-[32px] glass-card hover:border-purple-500/50 transition-all duration-500 text-left overflow-hidden active:scale-[0.98] h-full glow-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
              id="hero-strategy-blueprint-btn"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase className="w-24 h-24 text-purple-500" />
              </div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-500 group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    {st.strategyHighlight}
                    <ArrowRight className="w-6 h-6 text-purple-500 group-hover:translate-x-2 transition-transform" />
                  </h2>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                    {st.blueprintBtn}
                  </p>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
