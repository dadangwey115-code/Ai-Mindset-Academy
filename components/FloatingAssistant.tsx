
import React, { useState } from 'react';
import { BrainCircuit, Bot, X, ChevronUp, ExternalLink, Zap } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

export const FloatingAssistant: React.FC<{ language: Language }> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = UI_STRINGS[language].assistants;
  const isMy = language === 'my';

  const academyGem = "https://gemini.google.com/gem/11GtO7CaDsb0qXH1elfJk2t8a01qM3rsN?usp=sharing";
  const promptGem = "https://gemini.google.com/gem/1360JWmfTEycWjPbMO-lSfRAMVdui3Sec?usp=sharing";

  return (
    <div className="fixed bottom-28 left-6 md:left-auto md:right-6 md:bottom-6 z-[100] flex flex-col items-start md:items-end gap-4">
      {/* Menu Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2 animate-in slide-in-from-bottom-4 duration-300">
          <a 
            href={promptGem}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-900 border border-white/10 p-3 md:p-4 rounded-[24px] shadow-2xl hover:bg-zinc-800 hover:border-purple-500/50 transition-all group"
          >
            <div className="text-left md:text-right">
              <p className="text-white font-bold text-xs md:text-sm">{t.promptName}</p>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest">{t.promptDesc}</p>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform order-first md:order-last">
              <Zap size={16} className="md:w-5 md:h-5" />
            </div>
          </a>

          <a 
            href={academyGem}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-900 border border-white/10 p-3 md:p-4 rounded-[24px] shadow-2xl hover:bg-zinc-800 hover:border-blue-500/50 transition-all group"
          >
            <div className="text-left md:text-right">
              <p className="text-white font-bold text-xs md:text-sm">{t.academyName}</p>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest">{t.academyDesc}</p>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform order-first md:order-last">
              <Bot size={16} className="md:w-5 md:h-5" />
            </div>
          </a>
        </div>
      )}

      {/* Main Pulse Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Assistant Menu" : "Open AI Assistant Menu"}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-zinc-800 rotate-90 scale-90' : 'bg-blue-600 hover:scale-110 hover:bg-blue-700'
        } relative group`}
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 pointer-events-none" />
        )}
        {isOpen ? (
          <X className="text-white w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <BrainCircuit className="text-white w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
};
