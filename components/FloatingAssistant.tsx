
import React, { useState } from 'react';
import { Sparkles, Bot, X, ChevronUp, ExternalLink, Zap } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

export const FloatingAssistant: React.FC<{ language: Language }> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = UI_STRINGS[language].assistants;
  const isMy = language === 'my';

  const academyGem = "https://gemini.google.com/gem/11GtO7CaDsb0qXH1elfJk2t8a01qM3rsN?usp=sharing";
  const promptGem = "https://gemini.google.com/gem/1360JWmfTEycWjPbMO-lSfRAMVdui3Sec?usp=sharing";

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Menu Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2 animate-in slide-in-from-bottom-4 duration-300">
          <a 
            href={promptGem}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-900 border border-white/10 p-4 rounded-[24px] shadow-2xl hover:bg-zinc-800 hover:border-purple-500/50 transition-all group"
          >
            <div className="text-right">
              <p className="text-white font-bold text-sm">{t.promptName}</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">{t.promptDesc}</p>
            </div>
            <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
              <Zap size={20} />
            </div>
          </a>

          <a 
            href={academyGem}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-900 border border-white/10 p-4 rounded-[24px] shadow-2xl hover:bg-zinc-800 hover:border-blue-500/50 transition-all group"
          >
            <div className="text-right">
              <p className="text-white font-bold text-sm">{t.academyName}</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">{t.academyDesc}</p>
            </div>
            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <Bot size={20} />
            </div>
          </a>
        </div>
      )}

      {/* Main Pulse Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-zinc-800 rotate-90 scale-90' : 'bg-blue-600 hover:scale-110 hover:bg-blue-700'
        } relative group`}
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 pointer-events-none" />
        )}
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <Sparkles className="text-white w-8 h-8 group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
};
