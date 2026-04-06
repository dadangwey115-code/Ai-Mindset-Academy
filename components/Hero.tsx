
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
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-bold mb-8 animate-fade-in uppercase tracking-widest">
          <Zap className="w-4 h-4" />
          <span>{t.tag}</span>
        </div>
        <h1 className={`
          ${isMy ? 'text-3xl sm:text-4xl md:text-6xl leading-myanmar' : 'text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight'} 
          font-black text-gray-900 dark:text-white mb-6
        `}>
          {t.title1}<br />
          <span className="text-blue-500">{t.title2}</span>
        </h1>
        <p className={`max-w-2xl mx-auto text-base md:text-xl text-gray-600 dark:text-gray-300 mb-10 ${isMy ? 'leading-relaxed' : 'leading-relaxed'}`}>
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 px-4 sm:px-0">
          <button 
            onClick={onStart}
            aria-label="Start Learning Now"
            className="w-full sm:w-auto px-10 py-4 min-h-[56px] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30"
          >
            {t.btnStart} <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenStrategyBlueprint}
            aria-label="Get Full Strategy Blueprint"
            className="w-full sm:w-auto px-10 py-4 min-h-[56px] bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-500/20 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <Map className="w-5 h-5" /> {st.blueprintBtn}
          </button>
          <button 
            onClick={onOpenConcept}
            aria-label="Watch Concept Video"
            className="w-full sm:w-auto px-10 py-4 min-h-[56px] bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-blue-400" /> {t.btnWatch}
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
              className="group relative w-full p-6 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300 text-left overflow-hidden active:scale-[0.98] h-full shadow-sm dark:shadow-none"
              id="hero-prompt-library-btn"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-16 h-16 text-blue-500" />
              </div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                    {pt.title}
                    <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
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
              className="group relative w-full p-6 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 text-left overflow-hidden active:scale-[0.98] h-full shadow-sm dark:shadow-none"
              id="hero-strategy-blueprint-btn"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase className="w-16 h-16 text-purple-500" />
              </div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                    {st.strategyHighlight}
                    <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {st.blueprintBtn}
                  </p>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
