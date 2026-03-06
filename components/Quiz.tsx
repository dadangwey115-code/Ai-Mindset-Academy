
import React, { useState, useEffect } from 'react';
import { Target, Copy, Check } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../constants';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

export const Quiz: React.FC<{ language: Language }> = ({ language }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [copied, setCopied] = useState(false);
  
  const isMy = language === 'my';
  const t = UI_STRINGS[language].quiz;
  const maxScore = QUIZ_QUESTIONS.length * 10;

  useEffect(() => {
    if (showResult) return;
    
    if (timeLeft <= 0) {
      handleAnswer(0);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showResult]);

  useEffect(() => {
    setTimeLeft(30);
    setCopied(false);
  }, [step]);

  const handleAnswer = (val: number) => {
    const newScore = score + val;
    setScore(newScore);
    if (step + 1 < QUIZ_QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
  };

  const getResultText = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return isMy ? "ထူးချွန်ပါသည်။ သင်သည် AI Director စိတ်ဓာတ်ကို အပြည့်အဝ နားလည်နေပါပြီ။" : "Excellent! You have a strong grasp of the AI Director mindset.";
    if (percentage >= 50) return isMy ? "ကောင်းမွန်ပါသည်။ သို့သော် အချို့အချက်များကို ထပ်မံလေ့လာရန် လိုအပ်ပါသေးသည်။" : "Good job! But there's still room to refine your strategic thinking.";
    return isMy ? "သင်ခန်းစာများကို ပြန်လည်လေ့လာပြီး AI Director တစ်ဦးကဲ့သို့ စဉ်းစားရန် ကြိုးစားကြည့်ပါ။" : "Keep learning! Try to think more like an AI Director and less like a Doer.";
  };

  const copyToClipboard = () => {
    const q = QUIZ_QUESTIONS[step];
    const questionText = isMy ? q.qMy : q.q;
    
    const textToCopy = `Question: ${questionText}\n\nHelp me understand this question and the correct mindset for an AI Director.`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="py-20 bg-black flex items-center justify-center min-h-[700px]">
      <div className="max-w-xl w-full bg-white/5 border border-white/10 p-8 rounded-3xl mx-4 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
          <div 
            className="h-full bg-blue-600 transition-all duration-500" 
            style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }} 
          />
        </div>

        {!showResult ? (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">{t.question} {step + 1} {t.of} {QUIZ_QUESTIONS.length}</span>
                  <div className={`px-3 py-1 rounded-full text-xs font-mono border ${timeLeft <= 5 ? 'bg-red-500/10 border-red-500/50 text-red-500 animate-pulse' : 'bg-white/5 border-white/10 text-gray-400'}`}>
                    {timeLeft}s
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-blue-400 transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/10"
                    title="Copy for AI Assistant"
                  >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <span className="text-gray-500 text-xs font-mono">Score: {score}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mt-2 leading-snug">{isMy ? QUIZ_QUESTIONS[step].qMy : QUIZ_QUESTIONS[step].q}</h2>
            </div>
            <div className="space-y-4">
              {QUIZ_QUESTIONS[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600/10 hover:border-blue-500/50 text-gray-300 transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors shrink-0">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="text-lg">{isMy ? opt.textMy : opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500 border border-blue-500/20 shadow-inner">
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{t.score}: {score} / {maxScore}</h2>
            <p className="text-gray-400 mb-10 text-xl leading-relaxed">
              {getResultText()}
            </p>
            <button 
              onClick={resetQuiz}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
            >
              {t.retry}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
