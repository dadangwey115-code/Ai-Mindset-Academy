
import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Filter, ShieldCheck, BarChart, CheckCircle2, Info, Youtube, FileText, Layout, Layers, Award, ExternalLink, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';
import { LessonQuiz } from './LessonQuiz';
import { NOTEBOOK_MASTER_QUIZ } from '../constants';
import { CompleteButton } from './CompleteButton';

import confetti from 'canvas-confetti';

export const NotebookLecture: React.FC<{ language: Language; onComplete: () => Promise<void> }> = ({ language, onComplete }) => {
  const t = UI_STRINGS[language].notebooklm;
  const navT = UI_STRINGS[language].nav;
  const res = UI_STRINGS[language].resources;
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
    const maxScore = NOTEBOOK_MASTER_QUIZ.questions.length * 10;
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

  const driveLink = "https://drive.google.com/drive/folders/1a0vAqN6TzpkTX4V1MDKAvi3YGN-uXmTE?usp=sharing";

  const ProTip = ({ content }: { content: string }) => (
    <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl my-8 flex gap-4">
      <Info className="text-blue-500 shrink-0" size={24} />
      <p className="text-blue-200 text-sm leading-relaxed">
        <span className="font-bold uppercase tracking-widest text-xs block mb-1">Pro Tip</span>
        {content}
      </p>
    </div>
  );

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showQuiz ? (
          <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-20 text-center relative max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Digital Researcher</span>
              </div>
              <h1 className={`text-4xl md:text-5xl font-extrabold text-white mb-6 ${isMy ? 'leading-myanmar' : 'leading-tight'}`}>
                {t.title}
              </h1>
              <p className="text-xl text-blue-500 font-medium mb-8">
                {t.subtitle}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                {t.intro}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Section 1: Topic Mapping */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                    <Search size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.topicTitle}</h2>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed">{t.topicSub}</p>
                
                <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-800 text-gray-400 uppercase text-[10px] tracking-[0.2em]">
                      <tr>
                        <th className="px-6 py-4 border-b border-white/5">Weak Scope (General)</th>
                        <th className="px-6 py-4 border-b border-white/5">Strong Scope (Focused)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4">General Research</td>
                        <td className="px-6 py-4 text-blue-400">AI Video Generation Research</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4">Notes</td>
                        <td className="px-6 py-4 text-blue-400">Competitive Analysis Q1 2025</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Science Project</td>
                        <td className="px-6 py-4 text-blue-400">AI Alignment and Safety Challenges</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: Multi-Format */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500">
                    <Layers size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.formatTitle}</h2>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed">{t.formatSub}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: FileText, label: 'Academic Papers', color: 'text-blue-500' },
                    { icon: Youtube, label: 'YouTube Lectures', color: 'text-red-500' },
                    { icon: BarChart, label: 'Industry Blogs', color: 'text-emerald-500' },
                    { icon: Search, label: 'Podcasts', color: 'text-orange-500' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center flex flex-col items-center">
                      <item.icon className={`mb-4 ${item.color}`} size={32} />
                      <span className="text-xs font-bold text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>

                <ProTip content={isMy ? "သုတေသနပြုရာတွင် 'Deep Research' agent ကို အသုံးပြု၍ အရင်းအမြစ်ပေါင်း ၅၀ ကျော်ကို အလိုအလျောက် ရှာဖွေခိုင်းပါ။ ၎င်းသည် ရှာဖွေမှုရလဒ်များကို အနှစ်ချုပ်ပေးရုံသာမက သင့် Notebook ထဲသို့ တိုက်ရိုက် ထည့်သွင်းပေးပါသည်။" : "Utilize the Deep Research agent to autonomously analyze your topic and find 50+ relevant sources. It evaluates quality and automatically imports high-quality citations into your notebook."} />
              </section>

              {/* Section 3: Validation Framework */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-500">
                    <ShieldCheck size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.auditTitle}</h2>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed">{t.auditSub}</p>

                <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                   <div className="p-4 bg-zinc-800 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-white/5">The Source Validation Audit</div>
                   <table className="w-full text-left text-xs">
                    <thead className="text-gray-500 border-b border-white/5">
                      <tr>
                        <th className="px-6 py-4">Source Name</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Author Credentials</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4">Neural Alignment 2024</td>
                        <td className="px-6 py-4">2024-05-12</td>
                        <td className="px-6 py-4">Dr. Jane Smith (PhD, AI Safety)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Safety Standards PDF</td>
                        <td className="px-6 py-4">2021-08-15</td>
                        <td className="px-6 py-4">Intl. Standards Org</td>
                      </tr>
                    </tbody>
                   </table>
                </div>
              </section>

              {/* Section 4: Surgical Control */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-500">
                    <Filter size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.filterTitle}</h2>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">{t.filterSub}</p>
                
                <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Filter size={80} />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-4">The Logic of Isolation</h3>
                   <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                     {isMy ? "Notebook ထဲရှိ sources အားလုံးကို တပြိုင်တည်း မေးမြန်းခြင်းသည် 'noisy' results များကို ရရှိစေပါသည်။ သင့်မေးခွန်းနှင့် သက်ဆိုင်သော source ၂ ခု သို့မဟုတ် ၃ ခုကိုသာ check လုပ်၍ မေးမြန်းခြင်း (Surgical Control) က ပိုမိုတိကျသော အဖြေများကို ရရှိစေပါသည်။" : "Asking questions while all sources are active forces the system to synthesize from everything, creating vague results. Uncheck all sources and select only 2-3 relevant documents to turn your broad research into a high-precision sub-query."}
                   </p>
                </div>
              </section>

              {/* Section 5: Synthesis */}
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                    <Layout size={24} />
                  </div>
                  <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.synthesisTitle}</h2>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed">{t.synthesisSub}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Youtube className="text-red-500" size={18} /> Audio Overviews
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Use "Debate" mode to illuminate conflicting perspectives rather than simple summaries.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Layout className="text-blue-500" size={18} /> Professional Decks
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Generate infographics and structured slide decks using Nano Banana Pro technology.
                    </p>
                  </div>
                </div>

                <div className="mt-12 bg-zinc-900 p-8 rounded-[32px] border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Final Synthesis Checklist</h3>
                  <ul className="space-y-4">
                    {[
                      { t: 'Briefing Doc', d: 'Executive summary with direct quotes.' },
                      { t: 'Technical White Paper', d: 'Report on methodology and analysis.' },
                      { t: 'Citations with Anchor Numbers', d: 'Instant verification back to original sources.' }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                        <div>
                          <span className="text-white font-bold text-sm block">{item.t}</span>
                          <span className="text-gray-400 text-xs">{item.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* PDF DOWNLOAD SECTION AT END OF LECTURE */}
              <section className="mb-24">
                <div className="bg-blue-600/10 border border-blue-500/30 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                   <div className="w-20 h-20 bg-blue-600/20 rounded-[28px] flex items-center justify-center shrink-0 border border-blue-500/20">
                      <FileText size={40} className="text-blue-500" />
                   </div>
                   <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{res.cta}</h3>
                      <p className="text-gray-400 text-sm">{isMy ? "NotebookLM သင်ခန်းစာ၏ အသေးစိတ် မှတ်စုများကို ရယူပါ။" : "Get the complete PDF summary for this NotebookLM masterclass."}</p>
                   </div>
                   <a 
                    href={driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                   >
                     {isMy ? 'မှတ်စုများ ရယူရန်' : 'Download PDFs'}
                     <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                   </a>
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
                className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
              >
                <Search className="w-5 h-5 rotate-180" />
                {isMy ? 'သင်ခန်းစာသို့ ပြန်သွားရန်' : 'Back to Master Class'}
              </button>
            </div>
            <LessonQuiz 
              quizSet={NOTEBOOK_MASTER_QUIZ} 
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
