
import React from 'react';
import { ArrowRight, Zap, Play } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

interface HeroProps {
  onStart: () => void;
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ onStart, language }) => {
  const t = UI_STRINGS[language].hero;
  const isMy = language === 'my';
  
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <Zap className="w-4 h-4" />
          <span>{t.tag}</span>
        </div>
        <h1 className={`
          ${isMy ? 'text-4xl md:text-6xl leading-myanmar' : 'text-5xl md:text-7xl leading-tight tracking-tight'} 
          font-extrabold text-white mb-6
        `}>
          {t.title1}<br />
          <span className="text-blue-500">{t.title2}</span>
        </h1>
        <p className={`max-w-2xl mx-auto text-xl text-gray-400 mb-10 ${isMy ? 'leading-relaxed' : 'leading-relaxed'}`}>
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
          >
            {t.btnStart} <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
            <Play className="w-5 h-5 fill-white" /> {t.btnWatch}
          </button>
        </div>
      </div>
    </div>
  );
};
