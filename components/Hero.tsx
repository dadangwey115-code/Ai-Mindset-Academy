
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

interface HeroProps {
  onStart: () => void;
  onOpenConcept: () => void;
  onOpenPromptLibrary: () => void;
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onOpenConcept, onOpenPromptLibrary, language }) => {
  const t = UI_STRINGS[language].hero;
  const pt = UI_STRINGS[language].promptLibrary;
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
          font-black text-white mb-6
        `}>
          {t.title1}<br />
          <span className="text-blue-500">{t.title2}</span>
        </h1>
        <p className={`max-w-2xl mx-auto text-base md:text-xl text-gray-300 mb-10 ${isMy ? 'leading-relaxed' : 'leading-relaxed'}`}>
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-4 min-h-[56px] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30"
          >
            {t.btnStart} <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenConcept}
            className="w-full sm:w-auto px-10 py-4 min-h-[56px] bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-blue-400" /> {t.btnWatch}
          </button>
        </div>

        {/* Prompt Library Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-xl mx-auto"
        >
          <button
            onClick={onOpenPromptLibrary}
            className="group relative w-full p-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-left overflow-hidden active:scale-[0.98]"
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
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  {pt.title}
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {pt.subtitle}
                </p>
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
