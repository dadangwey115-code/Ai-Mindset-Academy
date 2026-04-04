
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { Target, CheckCircle2, XCircle, RotateCcw, Lightbulb, Info, Copy, Check, Clock, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizSet, Language } from '../types';

interface LessonQuizProps {
  // Original props
  quizSet?: QuizSet;
  language?: Language;
  onClose?: () => void;
  onComplete?: (score: number) => void;
  
  // New requested props (for single card mode)
  question?: string;
  answer?: string;
  options?: { text: string; textMy?: string; value: number }[];
  category?: string;
}

export const LessonQuiz: React.FC<LessonQuizProps> = ({ 
  quizSet, 
  language = 'en', 
  onClose, 
  onComplete,
  question: propQuestion,
  answer: propAnswer,
  options: propOptions,
  category: propCategory
}) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const isMy = language === 'my';
  
  // Determine if we are in single card mode or quiz set mode
  const isSingleMode = !!propQuestion;
  const questions = isSingleMode 
    ? [{ q: propQuestion!, qMy: propQuestion!, options: propOptions || [], explanation: propAnswer || '', category: propCategory }]
    : (quizSet?.questions || []);
  
  const currentQuestion = questions[step];
  const totalQuestions = questions.length;

  const handleQuizComplete = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#10b981', '#ffffff']
    });
    if (onComplete) onComplete(score);
    setShowResult(true);
  }, [score, onComplete]);

  useEffect(() => {
    if (showResult && !isSingleMode) {
      // Already handled by manual trigger or auto-advance
    }
  }, [showResult, isSingleMode]);

  const handleFlip = () => {
    if (!isAnswered && !isSingleMode) return; // Optional: only flip after answering in quiz mode
    setIsFlipped(!isFlipped);
  };

  const handleSelect = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent flipping when clicking an option
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);
    const value = currentQuestion.options[idx].value;
    setScore(prev => prev + value);
    
    // Auto-flip after a short delay to show explanation/answer
    setTimeout(() => setIsFlipped(true), 600);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    
    // In quiz mode, we advance to next question
    setTimeout(() => {
      if (step + 1 < totalQuestions) {
        setStep(prev => prev + 1);
        setIsFlipped(false);
        setIsAnswered(false);
        setSelectedIdx(null);
        setSwipeDirection(null);
      } else {
        handleQuizComplete();
      }
    }, 300);
  };

  const reset = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
    setIsFlipped(false);
    setIsAnswered(false);
    setSelectedIdx(null);
    setSwipeDirection(null);
  };

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    const questionText = isMy ? currentQuestion.qMy : currentQuestion.q;
    const textToCopy = `Question: ${questionText}\n\nHelp me understand this question and the correct mindset for an AI Director.`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (showResult && !isSingleMode) {
    return (
      <div className="text-center py-12 px-6 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl animate-in zoom-in-95">
        <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-500 border border-blue-500/20">
          <Target size={48} />
        </div>
        <h2 className="text-4xl font-black text-white mb-4">
          {isMy ? 'သင်၏ရမှတ်' : 'Assessment Result'}
        </h2>
        <p className="text-6xl font-black text-blue-500 mb-8">
          {score} / {totalQuestions * 10}
        </p>
        <p className="text-gray-400 mb-12 max-w-md mx-auto leading-relaxed text-lg">
          {score === totalQuestions * 10
            ? (isMy ? "ဂုဏ်ယူပါတယ်! သင်ခန်းစာကို ၁၀၀% နားလည်သွားပါပြီ။" : "Perfect Score! You've mastered this module. The next lesson is now unlocked.")
            : score >= totalQuestions * 8 
            ? (isMy ? "ဂုဏ်ယူပါတယ်! သင်ခန်းစာကို ကောင်းစွာ နားလည်သဘောပေါက်သွားပါပြီ။" : "Excellent! You have a deep understanding of this topic.")
            : (isMy ? "သင်ခန်းစာကို ပြန်လည် လေ့လာပြီး ထပ်မံ ကြိုးစားကြည့်ပါ။" : "Good effort! You need 100% to unlock the next lesson. Consider reviewing the material.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <button
            onClick={reset}
            className="flex-1 py-5 bg-white/5 hover:bg-white/10 text-white rounded-3xl font-bold flex items-center justify-center gap-3 transition-all border border-white/10"
          >
            <RotateCcw size={22} />
            {isMy ? 'ထပ်မံဖြေဆိုရန်' : 'Try Again'}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-bold transition-all shadow-2xl shadow-blue-600/30"
            >
              {isMy ? 'ပိတ်ရန်' : 'Finish Master Class'}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto perspective-1000">
      {/* Progress Counter (Teacher Audience) */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">
            {currentQuestion.category || (isMy ? quizSet?.titleMy : quizSet?.title) || 'Assessment'}
          </div>
        </div>
        <div className="text-sm font-mono text-gray-500 font-medium">
          {step + 1} <span className="opacity-30">/</span> {totalQuestions}
        </div>
      </div>

      {/* 3D Flash Card */}
      <div className="relative h-[500px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 100, rotateY: 0 }}
            animate={{ 
              opacity: 1, 
              x: swipeDirection === 'left' ? -500 : swipeDirection === 'right' ? 500 : 0,
              rotateY: isFlipped ? 180 : 0,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            exit={{ opacity: 0, x: -100 }}
            onClick={handleFlip}
            className="relative w-full h-full transform-style-3d cursor-pointer"
          >
            {/* Front Side */}
            <div className="absolute inset-0 w-full h-full backface-hidden bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 flex flex-col shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles size={120} />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <Target size={20} />
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>

                <h3 className={`text-2xl md:text-3xl font-bold text-white mb-8 leading-tight ${isMy ? 'leading-myanmar' : ''}`}>
                  {isMy ? currentQuestion.qMy : currentQuestion.q}
                </h3>

                <div className="space-y-3 mt-auto">
                  {currentQuestion.options.map((opt, i) => {
                    const isSelected = selectedIdx === i;
                    const isCorrect = opt.value > 0;
                    
                    let btnStyle = "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20";
                    if (isAnswered) {
                      if (isSelected) {
                        btnStyle = isCorrect 
                          ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" 
                          : "bg-red-500/20 border-red-500/50 text-red-400";
                      } else if (isCorrect) {
                        btnStyle = "bg-emerald-500/10 border-emerald-500/20 text-emerald-500/70";
                      }
                    }

                    return (
                      <button
                        key={i}
                        onClick={(e) => handleSelect(i, e)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-4 text-sm ${btnStyle}`}
                      >
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                          isAnswered && isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : 
                          isAnswered && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' : 
                          'border-white/20'
                        }`}>
                          {isAnswered && isCorrect ? <CheckCircle2 size={16} /> : 
                           isAnswered && isSelected && !isCorrect ? <XCircle size={16} /> : 
                           String.fromCharCode(65 + i)}
                        </div>
                        <span>{isMy ? opt.textMy : opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] animate-pulse">
                  Click to Flip
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-zinc-900 to-blue-900/20 backdrop-blur-2xl border border-blue-500/20 rounded-[40px] p-10 flex flex-col shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Info size={120} className="text-blue-500" />
              </div>

              <div className="flex-1 flex flex-col justify-center text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20 mx-auto mb-8">
                  <Lightbulb size={32} />
                </div>
                
                <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Explanation</h4>
                
                <p className={`text-xl md:text-2xl text-white font-medium leading-relaxed ${isMy ? 'leading-myanmar' : ''}`}>
                  {isMy ? currentQuestion.explanationMy : currentQuestion.explanation}
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="text-[10px] font-bold text-blue-500/50 uppercase tracking-[0.2em]">
                  Click to Flip Back
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Swipe Controls (Mobile-First Bottom Buttons) */}
      <div className="mt-10 flex justify-center items-center gap-8">
        <button
          onClick={() => handleSwipe('left')}
          className="group flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all shadow-lg group-active:scale-90">
            <ChevronLeft size={28} />
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-red-400 transition-colors">Still Learning</span>
        </button>

        <div className="w-px h-12 bg-white/10"></div>

        <button
          onClick={() => handleSwipe('right')}
          className="group flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-lg group-active:scale-90">
            <ChevronRight size={28} />
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Mastered</span>
        </button>
      </div>
    </div>
  );
};

