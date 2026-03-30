
import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, XCircle, ArrowRight, RotateCcw, Lightbulb, Info, Copy, Check, Clock } from 'lucide-react';
import { QuizSet, Language } from '../types';

interface LessonQuizProps {
  quizSet: QuizSet;
  language: Language;
  onClose?: () => void;
  onComplete?: (score: number) => void;
}

export const LessonQuiz: React.FC<LessonQuizProps> = ({ quizSet, language, onClose, onComplete }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [copied, setCopied] = useState(false);

  const isMy = language === 'my';
  const currentQuestion = quizSet.questions[step];

  useEffect(() => {
    if (showResult && onComplete) {
      onComplete(score);
    }
  }, [showResult, score, onComplete]);

  useEffect(() => {
    if (showResult || isAnswered) return;

    if (timeLeft <= 0) {
      setIsAnswered(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showResult, isAnswered]);

  useEffect(() => {
    setTimeLeft(30);
    setCopied(false);
  }, [step]);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);
    setScore(prev => prev + currentQuestion.options[idx].value);
  };

  const nextStep = () => {
    if (step + 1 < quizSet.questions.length) {
      setStep(step + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedIdx(null);
    setIsAnswered(false);
    setShowHint(false);
    setTimeLeft(30);
  };

  const copyToClipboard = () => {
    const q = currentQuestion;
    const questionText = isMy ? q.qMy : q.q;
    
    const textToCopy = `Question: ${questionText}\n\nHelp me understand this question and the correct mindset for an AI Director.`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-300">
      <div className="bg-zinc-800/50 px-8 py-4 border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Target className="text-blue-500" size={20} />
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            {isMy ? quizSet.titleMy : quizSet.title}
          </span>
        </div>
        {!showResult && (
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${timeLeft <= 5 && !isAnswered ? 'bg-red-500/10 border-red-500/50 text-red-500 animate-pulse' : 'bg-white/5 border-white/10 text-gray-400'}`}>
              <Clock size={12} />
              {timeLeft}s
            </div>
            <span className="text-xs font-mono text-gray-500">
              {step + 1} / {quizSet.questions.length}
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        {!showResult ? (
          <div className="animate-in fade-in duration-300">
            <div className="flex justify-between items-start gap-4 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-blue-400 transition-colors bg-white/5 px-2 py-1 rounded border border-white/10"
                  >
                    {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                    {copied ? 'Copied' : 'Copy Question'}
                  </button>
                </div>
                <h3 className={`text-xl font-bold text-white ${isMy ? 'leading-myanmar' : 'leading-tight'}`}>
                  {isMy ? currentQuestion.qMy : currentQuestion.q}
                </h3>
              </div>
              {(currentQuestion.hint || currentQuestion.hintMy) && !isAnswered && (
                <button 
                  onClick={() => setShowHint(!showHint)}
                  className="p-2 text-yellow-500/50 hover:text-yellow-500 bg-yellow-500/10 rounded-lg transition-colors"
                >
                  <Lightbulb size={20} />
                </button>
              )}
            </div>

            {showHint && !isAnswered && (
              <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-3 animate-in slide-in-from-top-2">
                <Lightbulb size={18} className="text-yellow-500 shrink-0" />
                <p className="text-sm text-yellow-500/80">
                  <span className="font-bold uppercase text-[10px] block mb-1">Hint</span>
                  {isMy ? currentQuestion.hintMy : currentQuestion.hint}
                </p>
              </div>
            )}

            <div className="space-y-3">
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
                    onClick={() => handleSelect(i)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 ${btnStyle}`}
                  >
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 font-bold transition-colors ${
                      isAnswered && isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : 
                      isAnswered && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' : 
                      'border-white/20'
                    }`}>
                      {isAnswered && isCorrect ? <CheckCircle2 size={20} /> : 
                       isAnswered && isSelected && !isCorrect ? <XCircle size={20} /> : 
                       String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-base">{isMy ? opt.textMy : opt.text}</span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-8 animate-in slide-in-from-top-4 duration-500">
                {(currentQuestion.explanation || currentQuestion.explanationMy) && (
                  <div className="mb-8 p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex gap-4">
                    <Info className="text-blue-500 shrink-0" size={24} />
                    <div className="text-sm text-blue-200 leading-relaxed">
                      <span className="font-bold uppercase tracking-widest text-[10px] block mb-1">Explanation</span>
                      {isMy ? currentQuestion.explanationMy : currentQuestion.explanation}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={nextStep}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                >
                  {step + 1 === quizSet.questions.length ? (isMy ? 'ရလဒ်ကြည့်ရန်' : 'Show Results') : (isMy ? 'နောက်တစ်ခု' : 'Next Question')}
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 animate-in zoom-in-95">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500 border border-blue-500/20">
              <Target size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {isMy ? 'သင်၏ရမှတ်' : 'Assessment Result'}
            </h2>
            <p className="text-5xl font-black text-blue-500 mb-8">
              {score} / {quizSet.questions.length * 10}
            </p>
            <p className="text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
              {score === quizSet.questions.length * 10
                ? (isMy ? "ဂုဏ်ယူပါတယ်! သင်ခန်းစာကို ၁၀၀% နားလည်သွားပါပြီ။ နောက်သင်ခန်းစာကို ဖွင့်လိုက်ပါပြီ။" : "Perfect Score! You've unlocked the next lesson. You can now mark this as complete.")
                : score >= quizSet.questions.length * 8 
                ? (isMy ? "ဂုဏ်ယူပါတယ်! သင်ခန်းစာကို ကောင်းစွာ နားလည်သဘောပေါက်သွားပါပြီ။" : "Excellent! You have a deep understanding of this topic.")
                : (isMy ? "သင်ခန်းစာကို ပြန်လည် လေ့လာပြီး ထပ်မံ ကြိုးစားကြည့်ပါ။ ၁၀၀% ရမှသာ နောက်သင်ခန်းစာကို ဖွင့်နိုင်ပါမည်။" : "Good effort! You need 100% to unlock the next lesson. Consider reviewing the material again.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={reset}
                className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                <RotateCcw size={20} />
                {isMy ? 'ထပ်မံဖြေဆိုရန်' : 'Try Again'}
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20"
                >
                  {isMy ? 'ပိတ်ရန်' : 'Finish Master Class'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
