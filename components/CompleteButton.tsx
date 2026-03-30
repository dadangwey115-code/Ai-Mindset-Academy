
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';

interface CompleteButtonProps {
  onComplete: () => Promise<void>;
  language: Language;
  isUnlocked?: boolean;
}

export const CompleteButton: React.FC<CompleteButtonProps> = ({ onComplete, language, isUnlocked = true }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMy = language === 'my';

  const handleComplete = async () => {
    if (!isUnlocked) return;
    setIsSubmitting(true);
    try {
      // Trigger confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#ffffff']
      });

      await onComplete();
    } catch (error) {
      console.error('Completion failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-20 pt-10 border-t border-white/10 flex justify-center">
      <button
        onClick={handleComplete}
        disabled={isSubmitting || !isUnlocked}
        className={`group relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed overflow-hidden ${!isUnlocked ? 'opacity-50' : ''}`}
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <div className="relative flex items-center gap-3">
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <CheckCircle2 className="w-6 h-6" />
          )}
          <span>
            {isMy ? 'သင်ခန်းစာပြီးစီးကြောင်းမှတ်သားပြီး ရှေ့ဆက်မည်' : 'Mark as Complete & Continue'}
          </span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  );
};
