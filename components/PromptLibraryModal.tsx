
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Pause, Brain, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { UI_STRINGS } from '../translations';
import { Language } from '../types';

interface PromptLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PromptLibraryModal: React.FC<PromptLibraryModalProps> = ({ isOpen, onClose, language }) => {
  const t = UI_STRINGS[language].promptLibrary;

  const steps = [
    {
      icon: <Pause className="w-6 h-6 text-amber-400" />,
      title: t.pause.title,
      body: t.pause.body,
      color: "border-amber-500/30 bg-amber-500/5"
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: t.think.title,
      body: t.think.body,
      color: "border-blue-500/30 bg-blue-500/5"
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: t.act.title,
      body: t.act.body,
      color: "border-emerald-500/30 bg-emerald-500/5"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/50 backdrop-blur-md">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">{t.modalTitle}</h2>
                <p className="text-blue-400 font-medium text-sm mt-1">{t.modalSub}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close prompt library modal"
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                id="close-prompt-modal"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 rounded-2xl border ${step.color} flex gap-4 items-start`}
                >
                  <div className="mt-1 p-2 bg-black/20 rounded-xl border border-white/5">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 bg-zinc-950/50 border-t border-white/5 flex flex-col sm:flex-row gap-3">
              <a
                href="https://gemini.google.com/gem/1ngbQ6NJ-SgoNO9mworrj4VvBgRpmp-sV?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Gemini Gem Assistant"
                className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group border border-white/10 active:scale-[0.98]"
                id="gemini-gem-btn"
              >
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                {t.geminiGem}
              </a>
              <a
                href="https://promptadvance.club/gemini-prompts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to external Prompt Library"
                className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                id="go-to-library-btn"
              >
                {t.go}
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
