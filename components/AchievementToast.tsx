
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

interface AchievementToastProps {
  isVisible: boolean;
  onClose: () => void;
  language: Language;
}

export const AchievementToast: React.FC<AchievementToastProps> = ({ isVisible, onClose, language }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const t_en = UI_STRINGS.en.toast;
  const t_my = UI_STRINGS.my.toast;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0, x: '-50%' }}
          animate={{ y: 20, opacity: 1, x: '-50%' }}
          exit={{ y: -100, opacity: 0, x: '-50%' }}
          className="fixed top-0 left-1/2 z-[100] w-[90%] max-w-md"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4 overflow-hidden relative">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 animate-pulse" />
            
            <div className="relative bg-yellow-500/20 p-3 rounded-xl border border-yellow-500/30">
              <Trophy className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            </div>
            
            <div className="flex-1 relative">
              <h3 className="text-yellow-500 font-black text-lg leading-tight">
                {t_en.congrats} / {t_my.congrats}
              </h3>
              <p className="text-white font-bold text-sm">
                {t_en.lessonCompleted}
              </p>
              <p className="text-gray-300 text-xs mt-0.5 myanmar-text">
                {t_my.lessonCompleted}
              </p>
            </div>

            <button 
              onClick={onClose}
              className="relative p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
