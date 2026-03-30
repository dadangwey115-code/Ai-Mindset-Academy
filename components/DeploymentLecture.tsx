
import React, { useState, useEffect } from 'react';
import { Rocket, Github, Globe, ShieldAlert, CheckCircle2, ChevronRight, Info, Award, Terminal, Zap, ShieldCheck, ExternalLink, HardDrive, Server, Globe2, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';
import { LessonQuiz } from './LessonQuiz';
import { DEPLOYMENT_MASTER_QUIZ } from '../constants';
import { CompleteButton } from './CompleteButton';

import confetti from 'canvas-confetti';

export const DeploymentLecture: React.FC<{ language: Language; onComplete: () => Promise<void> }> = ({ language, onComplete }) => {
  const t = UI_STRINGS[language].deployment;
  const navT = UI_STRINGS[language].nav;
  const isMy = language === 'my';
  const [showQuiz, setShowQuiz] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const handleTriggerQuiz = () => setShowQuiz(true);
    window.addEventListener('trigger-quiz', handleTriggerQuiz);
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('trigger-quiz', handleTriggerQuiz);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleQuizComplete = (score: number) => {
    const maxScore = DEPLOYMENT_MASTER_QUIZ.questions.length * 10;
    if (score === maxScore) {
      setIsUnlocked(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#ffffff']
      });
    }
  };

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showQuiz ? (
          <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-20 text-center relative max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Rocket className="w-4 h-4" />
                <span>Production SOP</span>
              </div>
              <h1 className={`text-4xl md:text-5xl font-extrabold text-white mb-6 ${isMy ? 'leading-myanmar' : 'leading-tight'}`}>
                {t.title}
              </h1>
              <p className="text-xl text-blue-500 font-medium mb-8">
                {t.subtitle}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                {t.intro}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Phase 1: Creative Studio */}
              <section className="mb-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                    <Zap size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.phase1.title}</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed italic border-l-2 border-blue-500 pl-6">{t.phase1.sub}</p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <Terminal className="text-blue-500" size={20} />
                      <h4 className="text-white font-bold">{t.phase1.point1Title}</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {t.phase1.point1Body}
                    </p>
                  </div>
                  <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="text-blue-500" size={20} />
                      <h4 className="text-white font-bold">{t.phase1.point2Title}</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t.phase1.point2Body}
                    </p>
                  </div>
                </div>
              </section>

              {/* Phase 2: Cloud Storage */}
              <section className="mb-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500">
                    <Github size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.phase2.title}</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed">{t.phase2.sub}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {Object.entries(t.phase2.concepts).map(([key, val]: [string, any], i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                        <HardDrive size={16} />
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">{val}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-600/10 border border-purple-500/20 p-8 rounded-[32px] relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                     <ShieldCheck size={100} />
                   </div>
                   <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
                     <ShieldAlert className="text-purple-500" /> {isMy ? "အရေးကြီးဆုံးအချက်" : "CRITICAL STEP"}
                   </h3>
                   <p className="text-gray-300 relative z-10 leading-relaxed">
                     {t.phase2.save}
                   </p>
                </div>
              </section>

              {/* Phase 3: Production */}
              <section className="mb-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-500">
                    <Server size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.phase3.title}</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed">{t.phase3.sub}</p>

                <div className="space-y-6">
                   <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl flex gap-6 items-center">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                        <Globe className="text-emerald-500" size={32} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-2">{isMy ? "Deployment Bridge" : "The Deployment Bridge"}</h4>
                        <p className="text-gray-400 text-sm">{t.phase3.bridge}</p>
                      </div>
                   </div>
                   <div className="bg-emerald-600/5 border border-emerald-500/20 p-8 rounded-3xl flex gap-6 items-center">
                      <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <Zap className="text-emerald-400" size={32} />
                      </div>
                      <div>
                        <h4 className="text-emerald-400 font-bold mb-2">{isMy ? "Continuous Deployment (The Magic)" : "Continuous Deployment (The Magic)"}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{t.phase3.magic}</p>
                      </div>
                   </div>
                </div>
              </section>

              {/* Phase 4: Professional SOP */}
              <section className="mb-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-500">
                    <Globe2 size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.phase4.title}</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed">{t.phase4.sub}</p>

                <div className="bg-zinc-900 p-10 rounded-[48px] border border-white/10 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                     <ExternalLink size={120} />
                   </div>
                   <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-6">DNS Delegation Workflow</h3>
                      <p className="text-gray-400 mb-10 leading-relaxed">
                        {t.phase4.dns}
                      </p>
                      <div className="p-6 bg-red-600/10 border border-red-500/20 rounded-3xl flex gap-4">
                        <ShieldAlert className="text-red-500 shrink-0" size={24} />
                        <p className="text-xs text-red-200/80 italic leading-relaxed">
                          {t.phase4.warning}
                        </p>
                      </div>
                   </div>
                </div>
              </section>

              {/* Summary Takeaways */}
              <section className="mb-24">
                <div className="bg-blue-600 rounded-[48px] p-12 text-center shadow-2xl shadow-blue-600/20">
                  <h2 className="text-3xl font-bold text-white mb-10">{isMy ? "အောင်မြင်မှုအတွက် အဓိက အချက်များ" : "Key Takeaways for Success"}</h2>
                  <div className="grid sm:grid-cols-3 gap-8">
                    {[
                      { t: "Security", d: isMy ? "Public Repo များတွင် API Keys များ မထားပါနှင့်။" : "Never share API Keys in Public Repositories." },
                      { t: "Iteration", d: isMy ? "Playground တွင် စတင်စမ်းသပ်ပြီးမှ Build အဆင့်သို့ ကူးပြောင်းပါ။" : "Start small in Playground, build complexity in the Build tab." },
                      { t: "Sharing", d: isMy ? "သင့်အလုပ်များကို Vercel Public URL ဖြင့် ကမ္ဘာကို ပြသပါ။" : "Use Vercel Public URL to share your work with the world." }
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                          <CheckCircle2 size={24} className="text-white" />
                        </div>
                        <h4 className="text-white font-bold mb-2">{item.t}</h4>
                        <p className="text-blue-100/70 text-xs leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <CompleteButton onComplete={onComplete} language={language} isUnlocked={isUnlocked} />
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <button 
                onClick={() => setShowQuiz(false)}
                className="text-gray-500 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
              >
                <Terminal className="w-5 h-5 rotate-180" />
                {isMy ? 'သင်ခန်းစာသို့ ပြန်သွားရန်' : 'Back to SOP Manual'}
              </button>
            </div>
            <LessonQuiz 
              quizSet={DEPLOYMENT_MASTER_QUIZ} 
              language={language} 
              onClose={() => setShowQuiz(false)} 
              onComplete={handleQuizComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
};
