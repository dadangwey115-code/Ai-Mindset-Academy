
import React, { useState, useEffect } from 'react';
import { Rocket, Box, Image as ImageIcon, Zap, Activity, ShieldCheck, Info, Award, MessageSquare, Mic, Play, Terminal, ExternalLink, Table, CheckCircle2, ChevronRight, Share2, FileSpreadsheet, Eye, Github, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';
import { LessonQuiz } from './LessonQuiz';
import { AISTUDIO_MASTER_QUIZ } from '../constants';

export const AIStudioLecture: React.FC<{ language: Language }> = ({ language }) => {
  const t = UI_STRINGS[language].aistudio;
  const navT = UI_STRINGS[language].nav;
  const isMy = language === 'my';
  const [showQuiz, setShowQuiz] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showQuiz ? (
          <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-20 text-center relative max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Rocket className="w-4 h-4" />
                <span>Product Master Class</span>
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
              {/* Why use it section */}
              <section className="mb-24">
                <div className="bg-zinc-900 border border-white/10 p-8 rounded-[40px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Info size={120} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Zap className="text-blue-500" /> {t.whyTitle}
                  </h2>
                  <div className="grid gap-6">
                    {[t.why1, t.why2, t.why3].map((text, i) => (
                      <div key={i} className="flex gap-4 items-start bg-white/5 p-5 rounded-2xl border border-white/5">
                        <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                        <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 1. Chat Tab */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                    <MessageSquare size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.chat.title}</h2>
                </div>
                <div className="space-y-6 text-gray-400 mb-10 leading-relaxed">
                  <p>{t.chat.desc}</p>
                  <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-2xl">
                     <p className="text-blue-200 text-sm italic font-mono">"{t.chat.instruction}"</p>
                  </div>
                  <p className="text-sm">{t.chat.advanced}</p>
                </div>

                {/* Comparison Table */}
                <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">
                  <div className="p-4 bg-zinc-800 flex items-center gap-2 border-b border-white/5">
                    <Table size={16} className="text-blue-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Model Comparison</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-4 font-bold text-blue-500 uppercase text-[10px] tracking-widest">{t.chat.table.feature}</th>
                          <th className="px-6 py-4 font-bold text-white uppercase text-[10px] tracking-widest">{t.chat.table.flash}</th>
                          <th className="px-6 py-4 font-bold text-white uppercase text-[10px] tracking-widest">{t.chat.table.pro}</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="px-6 py-4 font-medium">{t.chat.table.speed}</td>
                          <td className="px-6 py-4">{t.chat.table.speedFlash}</td>
                          <td className="px-6 py-4">{t.chat.table.speedPro}</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="px-6 py-4 font-medium">{t.chat.table.intel}</td>
                          <td className="px-6 py-4">{t.chat.table.intelFlash}</td>
                          <td className="px-6 py-4">{t.chat.table.intelPro}</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="px-6 py-4 font-medium">{t.chat.table.cost}</td>
                          <td className="px-6 py-4">10 cents / 1M tokens</td>
                          <td className="px-6 py-4">$1.25 / 1M tokens</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02]">
                          <td className="px-6 py-4 font-medium">{t.chat.table.bestFor}</td>
                          <td className="px-6 py-4">{t.chat.table.bestForFlash}</td>
                          <td className="px-6 py-4">{t.chat.table.bestForPro}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 2. Stream Tab */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500">
                    <Mic size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.stream.title}</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed">{t.stream.desc}</p>
                <div className="grid sm:grid-cols-3 gap-4">
                   {[t.stream.step1, t.stream.step2, t.stream.step3].map((step, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center group hover:border-purple-500/30 transition-all">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mx-auto mb-4 font-bold text-xs">
                          {i+1}
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">{step}</p>
                     </div>
                   ))}
                </div>
              </section>

              {/* 3. Media Tab */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-500">
                    <ImageIcon size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.media.title}</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed">{t.media.desc}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <ImageIcon className="text-emerald-500" size={18} /> {t.media.imageTitle}
                      </h4>
                      <ul className="space-y-4 text-xs text-gray-400">
                        <li className="bg-white/5 p-3 rounded-xl border border-white/5">{t.media.image1}</li>
                        <li className="bg-white/5 p-3 rounded-xl border border-white/5">{t.media.image2}</li>
                      </ul>
                   </div>
                   <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Play className="text-red-500" size={18} /> {t.media.videoTitle}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-6">{t.media.videoDesc}</p>
                      <div className="p-3 bg-red-600/10 border border-red-500/20 rounded-xl text-red-200 text-[10px] font-bold text-center">
                         POWERED BY VEO 3.1
                      </div>
                   </div>
                   <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 md:col-span-2">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Mic className="text-blue-500" size={18} /> {t.media.audioTitle}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{t.media.audioDesc}</p>
                   </div>
                </div>
              </section>

              {/* 4. Build Tab */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-500">
                    <Box size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.build.title}</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed">{t.build.desc}</p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                   {[
                     { icon: Activity, label: "Real-time Preview", d: t.build.preview },
                     /* Added Github icon to imports from lucide-react */
                     { icon: Github, label: "GitHub Sync", d: t.build.github },
                     { icon: Rocket, label: "Public Deploy", d: t.build.deploy }
                   ].map((item, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 group hover:bg-orange-600/5 transition-all">
                        <item.icon className="text-orange-500" size={24} />
                        <h5 className="text-white font-bold text-sm">{item.label}</h5>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.d}</p>
                     </div>
                   ))}
                </div>

                <div className="bg-orange-600/10 border border-orange-500/30 p-8 rounded-[40px] relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Award size={100} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                     <Terminal className="text-orange-500" /> {t.build.secretTitle}
                   </h3>
                   <p className="text-sm text-gray-300 leading-relaxed max-w-2xl italic">
                     {t.build.secretDesc}
                   </p>
                </div>
              </section>

              {/* 5. Advanced Applications */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                    <Activity size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.advanced.title}</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { icon: Share2, t: t.advanced.s1Title, d: t.advanced.s1Desc, color: "text-blue-500" },
                     { icon: FileSpreadsheet, t: t.advanced.s2Title, d: t.advanced.s2Desc, color: "text-emerald-500" },
                     { icon: Terminal, t: t.advanced.s3Title, d: t.advanced.s3Desc, color: "text-purple-500" },
                     { icon: Eye, t: t.advanced.s4Title, d: t.advanced.s4Desc, color: "text-orange-500" }
                   ].map((item, i) => (
                     <div key={i} className="bg-zinc-900 border border-white/10 p-8 rounded-3xl flex gap-6 items-start hover:border-white/20 transition-all">
                        <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${item.color}`}>
                           <item.icon size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold mb-2">{item.t}</h4>
                           <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </section>

              {/* Final Summary Tips */}
              <section className="mb-24">
                 <div className="bg-blue-600 rounded-[48px] p-12 text-center shadow-2xl shadow-blue-600/20">
                    <h2 className="text-3xl font-bold text-white mb-10">{t.tips.title}</h2>
                    <div className="grid sm:grid-cols-3 gap-8">
                       {[t.tips.t1, t.tips.t2, t.tips.t3].map((tip, i) => (
                         <div key={i} className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                               <CheckCircle2 className="text-white" size={24} />
                            </div>
                            <p className="text-blue-100 text-sm font-medium leading-relaxed">{tip}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <button 
                onClick={() => setShowQuiz(false)}
                className="text-gray-500 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
              >
                <Rocket className="w-5 h-5 rotate-180" />
                {isMy ? 'သင်ခန်းစာသို့ ပြန်သွားရန်' : 'Back to Master Class'}
              </button>
            </div>
            <LessonQuiz 
              quizSet={AISTUDIO_MASTER_QUIZ} 
              language={language} 
              onClose={() => setShowQuiz(false)} 
            />
          </div>
        )}
      </div>
    </div>
  );
};
