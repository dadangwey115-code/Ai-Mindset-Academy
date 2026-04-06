
import React, { useEffect, useState } from 'react';
import { Zap, BookOpen, Target, FileText, ExternalLink, ChevronRight, BrainCircuit, Heart, Eye, Brain, UserRound } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

export const BusinessStrategy: React.FC<{ language: Language, onOpenBlueprint: () => void }> = ({ language, onOpenBlueprint }) => {
  const t = UI_STRINGS[language].sections;
  const s = UI_STRINGS[language].strategy;
  const isMy = language === 'my';
  const [activeStep, setActiveStep] = useState(0);

  // Roadmap steps based on PDF content
  const roadmapSteps = [
    { icon: Brain, label: isMy ? "AI as Trainer" : "AI as Trainer", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Target, label: isMy ? "Taste Mastery" : "Taste Mastery", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: Eye, label: isMy ? "Vision Muscle" : "Vision Muscle", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: Heart, label: isMy ? "Care Factor" : "Care Factor", color: "text-orange-500", bg: "bg-orange-500/10" },
    { icon: UserRound, label: isMy ? "Director Mindset" : "Director Mindset", color: "text-pink-500", bg: "bg-pink-500/10" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % roadmapSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pdfUrl = "https://drive.google.com/file/d/1Aye19ILqAp5tdI50ON0ZmaiMSe2P2-WX/view?usp=sharing";

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 border-y border-gray-200/50 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <span className="ai-gradient-text font-black tracking-[0.3em] uppercase text-xs mb-4 block">Strategic Roadmap</span>
            <h2 className={`
              ${isMy ? 'text-4xl md:text-5xl leading-myanmar' : 'text-5xl md:text-6xl leading-tight font-black tracking-tighter'} 
              text-gray-900 dark:text-white mb-8
            `}>
              {t.strategyTitle}<br />
              <span className="ai-gradient-text">{t.strategyHighlight}</span>
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mb-12 text-lg leading-relaxed">
              {t.strategySub}
            </p>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-500/20 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 glow-shadow">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{s.s1Title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">{s.s1Desc}</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-purple-500/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 glow-shadow">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{s.s2Title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">{s.s2Desc}</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-pink-500/20 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 glow-shadow">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{s.s3Title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">{s.s3Desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Background Glows */}
            <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Dynamic Roadmap Card */}
            <div className="relative glass-card p-8 md:p-10 rounded-[48px] backdrop-blur-2xl shadow-2xl overflow-hidden transition-colors duration-300 glow-shadow">
               <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="text-indigo-500 w-5 h-5 animate-spin-slow" />
                    <span className="text-xs font-black ai-gradient-text tracking-[0.3em] uppercase">Roadmap v2.0</span>
                  </div>
                  <div className="flex gap-2">
                    {roadmapSteps.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${activeStep === i ? 'ai-gradient-bg w-6' : 'bg-gray-200 dark:bg-white/10'}`} />
                    ))}
                  </div>
               </div>

               <div className="space-y-6 relative z-10">
                  {roadmapSteps.map((step, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-700 ${
                        activeStep === i 
                        ? 'bg-white dark:bg-white/10 border-indigo-500/30 translate-x-2 scale-[1.02] glow-shadow' 
                        : 'bg-transparent border-transparent opacity-20 grayscale blur-[1px]'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${step.bg} ${step.color} border border-gray-100 dark:border-white/5 shadow-inner`}>
                        <step.icon size={26} className={activeStep === i ? 'animate-bounce-subtle' : ''} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-sm font-black uppercase tracking-widest ${activeStep === i ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-slate-500'}`}>
                            {step.label}
                          </span>
                          {activeStep === i && <div className="text-[10px] text-white ai-gradient-bg px-3 py-1 rounded-full animate-pulse font-black">ACTIVE</div>}
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ai-gradient-bg transition-all duration-[3000ms] ease-linear ${activeStep === i ? 'w-full' : 'w-0'}`} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
               </div>

               <div className="mt-12 space-y-4">
                  <button 
                    onClick={onOpenBlueprint}
                    className="w-full py-6 ai-gradient-bg text-white rounded-2xl font-black text-lg transition-all glow-shadow hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <BrainCircuit size={24} />
                    {t.blueprintBtn}
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <a 
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 glass-card text-gray-700 dark:text-slate-300 rounded-2xl font-black transition-all flex items-center justify-center gap-3 group hover:bg-gray-100 dark:hover:bg-white/10"
                  >
                    <FileText size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
                    <span>{isMy ? "PDF ဗျူဟာ လမ်းညွှန်ကို ရယူရန်" : "Download PDF Strategy Guide"}</span>
                    <ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />
                  </a>
               </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
