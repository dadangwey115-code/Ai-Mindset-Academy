
import React, { useState, useEffect } from 'react';
import { Terminal, Layers, Lightbulb, Code, ShieldAlert, CheckCircle2, Copy, Award, X, ChevronRight, Info, Layers3, GitBranch, Brain, UserCheck, Search, List, RefreshCcw, ShieldCheck, ExternalLink, FileText, Zap, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';
import { LessonQuiz } from './LessonQuiz';
import { PROMPT_FIVE_PILLARS_QUIZ } from '../constants';
import { CompleteButton } from './CompleteButton';

import confetti from 'canvas-confetti';

export const PromptLecture: React.FC<{ language: Language; onComplete: () => Promise<void> }> = ({ language, onComplete }) => {
  const t = UI_STRINGS[language].prompting;
  const navT = UI_STRINGS[language].nav;
  const res = UI_STRINGS[language].resources;
  const ast = UI_STRINGS[language].assistants;
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
    const maxScore = PROMPT_FIVE_PILLARS_QUIZ.questions.length * 10;
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
  const [showTcreiModal, setShowTcreiModal] = useState(false);
  const [showChainingModal, setShowChainingModal] = useState(false);
  const [showLogicModal, setShowLogicModal] = useState(false);
  const [showAgentsModal, setShowAgentsModal] = useState(false);
  const [showIterativeModal, setShowIterativeModal] = useState(false);

  const driveLink = "https://drive.google.com/drive/folders/1a0vAqN6TzpkTX4V1MDKAvi3YGN-uXmTE?usp=sharing";
  const promptGem = "https://gemini.google.com/gem/1360JWmfTEycWjPbMO-lSfRAMVdui3Sec?usp=sharing";

  const AgentBlueprint = ({ title, code }: { title: string, code: string }) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code);
      alert(isMy ? "Blueprint ကို ကူးယူပြီးပါပြီ!" : "Blueprint copied to clipboard!");
    };

    return (
      <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden my-8 group">
        <div className="bg-zinc-800 px-6 py-3 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-2">
            <Terminal size={16} className="text-blue-500" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{title}</span>
          </div>
          <button onClick={copyToClipboard} className="text-gray-400 hover:text-white transition-colors">
            <Copy size={16} />
          </button>
        </div>
        <pre className="p-6 text-sm text-blue-400 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {code}
        </pre>
      </div>
    );
  };

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showQuiz ? (
          <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-20 text-center relative max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Code className="w-4 h-4" />
                <span>Master Class</span>
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
              
              {/* NEW GEM ASSISTANT PROMO CARD */}
              <section className="mb-24">
                <div className="bg-purple-600/10 border border-purple-500/30 rounded-[40px] p-8 md:p-10 relative overflow-hidden group/gem shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/gem:opacity-20 transition-opacity">
                    <Zap size={140} className="text-purple-500" />
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 bg-purple-600/20 rounded-[28px] flex items-center justify-center shrink-0 border border-purple-500/20 shadow-inner">
                      <Zap size={40} className="text-purple-400 animate-pulse" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{ast.promptName}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                        {isMy 
                          ? "ဤ Gem ကို အသုံးပြု၍ Google ၏ အခြေခံကျောက်တိုင် ၅ ခုအတိုင်း ပိုမိုတိကျသော Prompt များကို ဖန်တီးပါ။" 
                          : "Launch this specialized Gemini Gem to help you architect perfect prompts using the T-C-R-E-I framework."}
                      </p>
                    </div>
                    <a 
                      href={promptGem}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn active:scale-95 shadow-lg shadow-purple-600/30"
                    >
                      {isMy ? 'Gem ကို ဖွင့်ရန်' : 'Launch Gem'}
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </section>

              {/* T-C-R-E-I Section */}
              <section className="mb-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                      <Layers size={24} />
                    </div>
                    <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.pillarTitle}</h2>
                  </div>
                  <button 
                    onClick={() => setShowTcreiModal(true)}
                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-xl font-bold transition-all group shrink-0"
                  >
                    <Info size={18} />
                    {isMy ? 'အသေးစိတ်လေ့လာရန်' : 'Learn More'}
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed">{t.pillarSub}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{k:'Task',v:isMy?'AI အား မည်သည့်အရာကို တိကျစွာ လုပ်ဆောင်ပေးရန် ညွှန်ကြားချက် ပေးခြင်း။':'The foundational logic gate for neural path selection.'},{k:'Context',v:isMy?'အခြေအနေနှင့် နောက်ခံအချက်အလက်များကို ပြည့်စုံစွာ ပေးခြင်း။':'Background data that eliminates hallucinated guessing.'},{k:'Reference',v:isMy?'စံနမူနာများ သို့မဟုတ် ဖိုင်များကို ပြသ၍ AI ၏ အရည်အသွေးကို ထိန်းညှိခြင်း။':'Concrete examples or files establishing the target standard.'},{k:'Evaluate',v:isMy?'ရလဒ်သည် သတ်မှတ်ချက်နှင့် ကိုက်ညီမှုရှိမရှိ စစ်ဆေးခြင်း။':'Verification that output aligns with project requirements.'},{k:'Iterate',v:isMy?'အဖြေပိုကောင်းရန် ပြန်လည်ပြုပြင် တည်ဆောက်ခြင်း။':'Optimization loop to refine initial performance.'}].map((pillar, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h4 className="text-blue-500 font-bold mb-2 uppercase tracking-widest text-sm">{pillar.k}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{pillar.v}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500">
                      <Layers3 size={24} />
                    </div>
                    <h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.chainingTitle}</h2>
                  </div>
                  <button onClick={() => setShowChainingModal(true)} className="flex items-center gap-2 px-6 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-purple-500 hover:text-white border border-blue-500/20 rounded-xl font-bold transition-all group shrink-0">
                    <Info size={18} /> {isMy ? 'အသေးစိတ်လေ့လာရန်' : 'Learn More'} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed">{t.chainingSub}</p>
                <div className="space-y-4">
                   <div className="bg-zinc-900 p-6 rounded-2xl border-l-4 border-purple-500"><span className="text-xs font-bold text-purple-500 uppercase tracking-widest">Step 1: Discovery</span><p className="text-gray-300 mt-2 text-sm">Command AI to generate 10 potential names targeting your specific niche.</p></div>
                   <div className="bg-zinc-900 p-6 rounded-2xl border-l-4 border-purple-500"><span className="text-xs font-bold text-purple-500 uppercase tracking-widest">Step 2: Refinement</span><p className="text-gray-300 mt-2 text-sm">Select top concepts and generate taglines/value propositions for each.</p></div>
                   <div className="bg-zinc-900 p-6 rounded-2xl border-l-4 border-purple-500"><span className="text-xs font-bold text-purple-500 uppercase tracking-widest">Step 3: Execution</span><p className="text-gray-300 mt-2 text-sm">Build the comprehensive plan using refined context from previous steps.</p></div>
                </div>
              </section>

              <section className="mb-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4"><div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center text-cyan-500"><GitBranch size={24} /></div><h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.logicTitle}</h2></div>
                  <button onClick={() => setShowLogicModal(true)} className="flex items-center gap-2 px-6 py-2.5 bg-cyan-600/10 hover:bg-cyan-600 text-cyan-500 hover:text-white border border-cyan-500/20 rounded-xl font-bold transition-all group shrink-0"><Info size={18} /> {isMy ? 'အသေးစိတ်လေ့လာရန်' : 'Learn More'} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></button>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed">{t.logicSub}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 group">
                     <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform"><Terminal size={18} /></div><h4 className="text-white font-bold">{isMy ? "Chain of Thought (CoT)" : "Chain of Thought (CoT)"}</h4></div>
                     <p className="text-gray-400 text-sm leading-relaxed mb-6">{isMy ? "AI ကို စဉ်းစားပုံ 'show its work' လုပ်ခိုင်းခြင်း ဖြစ်သည်။ ပြဿနာတစ်ခုကို တစ်ဆင့်ချင်း ဖြေရှင်းစေခြင်းဖြင့် အမှားများကို လျှော့ချပေးပါသည်။" : "Commands the LLM to 'show its work.' Step-by-step breakdowns reduce errors and reveal the logic behind complex decisions."}</p>
                  </div>
                  <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 group">
                     <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform"><Brain size={18} /></div><h4 className="text-white font-bold">{isMy ? "Tree of Thought (ToT)" : "Tree of Thought (ToT)"}</h4></div>
                     <p className="text-gray-400 text-sm leading-relaxed mb-6">{isMy ? "ဗျူဟာမြောက် လမ်းကြောင်းမျိုးစုံကို တစ်ပြိုင်တည်း စူးစမ်းရန် ဖြစ်သည်။ အိုင်ဒီယာများကို ဘေးချင်းယှဉ်၍ နှိုင်းယှဉ်နိုင်စေပါသည်။" : "Explores multiple strategic paths simultaneously. Ideal for creative scenarios where side-by-side comparison is required."}</p>
                  </div>
                </div>
              </section>

              <section className="mb-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"><div className="flex items-center gap-4"><div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-500"><Terminal size={24} /></div><h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.agentTitle}</h2></div>
                  <button onClick={() => setShowAgentsModal(true)} className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-500/20 rounded-xl font-bold transition-all group shrink-0"><Info size={18} /> {isMy ? 'အသေးစိတ်လေ့လာရန်' : 'Learn More'} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></button>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">{t.agentSub}</p>
                <AgentBlueprint title="Agent Blueprint: Interview Simulator" code={`[SYSTEM ROLE]: Senior Hiring Manager\n[CONTEXT]: I am applying for a Lead Project Manager role at a FinTech firm.\n[INSTRUCTION]: Interview me using behavioral questions one at a time. Do not provide feedback until the end.\n[STOP PHRASE]: Continue until I say "End Session."\n[POST-SESSION]: Once ended, provide a brutally honest critique of my answers and suggest 3 areas for improvement.`} />
              </section>

              <section className="mb-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"><div className="flex items-center gap-4"><div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-500"><ShieldAlert size={24} /></div><h2 className={`text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{t.iterativeTitle}</h2></div>
                  <button onClick={() => setShowIterativeModal(true)} className="flex items-center gap-2 px-6 py-2.5 bg-orange-600/10 hover:bg-orange-600 text-orange-500 hover:text-white border border-orange-500/20 rounded-xl font-bold transition-all group shrink-0"><Info size={18} /> {isMy ? 'အသေးစိတ်လေ့လာရန်' : 'Learn More'} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></button>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-[32px]"><h3 className="text-xl font-bold text-white mb-6">Metaprompting: The Architect’s Cheat Code</h3><div className="bg-zinc-950 p-6 rounded-2xl border border-white/5 font-mono text-sm text-orange-400 italic">"I am trying to achieve [Outcome]. Analyze my current prompt and identify what context or specificity I am missing to get a Tier-1 result. Suggest a revised version."</div></div>
              </section>

              {/* PDF DOWNLOAD SECTION */}
              <section className="mb-24">
                <div className="bg-blue-600/10 border border-blue-500/30 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                   <div className="w-20 h-20 bg-blue-600/20 rounded-[28px] flex items-center justify-center shrink-0 border border-blue-500/20">
                      <FileText size={40} className="text-blue-500" />
                   </div>
                   <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{res.cta}</h3>
                      <p className="text-gray-400 text-sm">{isMy ? "Prompt Engineering သင်ခန်းစာ၏ အသေးစိတ် မှတ်စုများကို ရယူပါ။" : "Get the complete PDF summary for this Prompt Engineering masterclass."}</p>
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
                <Terminal className="w-5 h-5 rotate-180" />
                {isMy ? 'သင်ခန်းစာသို့ ပြန်သွားရန်' : 'Back to Master Class'}
              </button>
            </div>
            <LessonQuiz 
              quizSet={PROMPT_FIVE_PILLARS_QUIZ} 
              language={language} 
              onClose={() => setShowQuiz(false)} 
              onComplete={handleQuizComplete}
            />
          </div>
        )}
      </div>
      
      {/* ... (Existing modals remain the same) ... */}
      {showTcreiModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowTcreiModal(false)} />
          <div className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4 text-blue-500"><div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center"><Layers size={24} /></div><h2 className="text-2xl font-bold text-white">{t.tcreiDetails.title}</h2></div>
              <button onClick={() => setShowTcreiModal(false)} className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className={`space-y-8 text-gray-300 leading-relaxed ${isMy ? 'myanmar-text text-lg' : 'text-base'}`}>
                <div className="space-y-4"><h3 className="text-white font-bold text-xl flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 text-sm">1</div>{t.tcreiDetails.task.title}</h3><p>{t.tcreiDetails.task.body}</p></div>
                <div className="space-y-4"><h3 className="text-white font-bold text-xl flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 text-sm">2</div>{t.tcreiDetails.context.title}</h3><p>{t.tcreiDetails.context.body}</p></div>
                <div className="space-y-4"><h3 className="text-white font-bold text-xl flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 text-sm">3</div>{t.tcreiDetails.reference.title}</h3><p>{t.tcreiDetails.reference.body}</p></div>
                <div className="space-y-4"><h3 className="text-white font-bold text-xl flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 text-sm">4</div>{t.tcreiDetails.evaluate.title}</h3><p>{t.tcreiDetails.evaluate.body}</p></div>
                <div className="space-y-4"><h3 className="text-white font-bold text-xl flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 text-sm">5</div>{t.tcreiDetails.iterate.title}</h3><p>{t.tcreiDetails.iterate.body}</p></div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 text-center"><button onClick={() => setShowTcreiModal(false)} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">{isMy ? 'နားလည်ပါပြီ' : 'Got it!'}</button></div>
            </div>
          </div>
        </div>
      )}
      {showChainingModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowChainingModal(false)} />
          <div className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4 text-purple-500"><div className="w-12 h-12 bg-purple-600/20 rounded-2xl flex items-center justify-center"><Layers3 size={24} /></div><h2 className="text-2xl font-bold text-white">{t.chainingDetails.title}</h2></div>
              <button onClick={() => setShowChainingModal(false)} className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className={`space-y-8 text-gray-300 leading-relaxed ${isMy ? 'myanmar-text text-lg' : 'text-base'}`}>
                <p className="text-xl text-white/90 font-medium italic">"{t.chainingDetails.intro}"</p>
                <div className="space-y-6"><h3 className="text-purple-400 font-bold text-xl uppercase tracking-widest border-b border-white/5 pb-2">{t.chainingDetails.example.title}</h3><div className="grid gap-4"><div className="p-5 bg-white/5 border border-white/10 rounded-2xl"><p className="font-bold text-white mb-1">1. Discovery</p><p className="text-sm">{t.chainingDetails.example.step1}</p></div><div className="p-5 bg-white/5 border border-white/10 rounded-2xl translate-x-2 sm:translate-x-4"><p className="font-bold text-white mb-1">2. Refinement</p><p className="text-sm">{t.chainingDetails.example.step2}</p></div><div className="p-5 bg-white/5 border border-white/10 rounded-2xl translate-x-4 sm:translate-x-8"><p className="font-bold text-white mb-1">3. Execution</p><p className="text-sm">{t.chainingDetails.example.step3}</p></div></div></div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 text-center"><button onClick={() => setShowChainingModal(false)} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20">{isMy ? 'နားလည်ပါပြီ' : 'Got it!'}</button></div>
            </div>
          </div>
        </div>
      )}
      {showLogicModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowLogicModal(false)} />
          <div className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4 text-cyan-500"><div className="w-12 h-12 bg-cyan-600/20 rounded-2xl flex items-center justify-center"><GitBranch size={24} /></div><h2 className="text-2xl font-bold text-white">{t.logicDetails.title}</h2></div>
              <button onClick={() => setShowLogicModal(false)} className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className={`space-y-8 text-gray-300 leading-relaxed ${isMy ? 'myanmar-text text-lg' : 'text-base'}`}>
                <p className="text-xl text-white/90 font-medium italic">"{t.logicDetails.intro}"</p>
                <div className="space-y-12"><div className="space-y-6"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center text-cyan-500 border border-cyan-500/20"><Terminal size={20} /></div><h3 className="text-cyan-400 font-bold text-2xl">{t.logicDetails.cot.title}</h3></div><div className="grid gap-4 bg-white/5 p-6 rounded-2xl border border-white/10"><p className="font-bold text-white">{t.logicDetails.cot.goal}</p><p className="text-sm">{t.logicDetails.cot.how}</p></div></div><div className="space-y-6"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center text-cyan-500 border border-cyan-500/20"><Brain size={20} /></div><h3 className="text-cyan-400 font-bold text-2xl">{t.logicDetails.tot.title}</h3></div><div className="grid gap-4 bg-white/5 p-6 rounded-2xl border border-white/10"><p className="font-bold text-white">{t.logicDetails.tot.goal}</p><p className="text-sm">{t.logicDetails.tot.how}</p></div></div></div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 text-center"><button onClick={() => setShowLogicModal(false)} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-cyan-600/20">{isMy ? 'နားလည်ပါပြီ' : 'Got it!'}</button></div>
            </div>
          </div>
        </div>
      )}
      {showAgentsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowAgentsModal(false)} />
          <div className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4 text-emerald-500"><div className="w-12 h-12 bg-emerald-600/20 rounded-2xl flex items-center justify-center"><Terminal size={24} /></div><h2 className="text-2xl font-bold text-white">{t.agentDetails.title}</h2></div>
              <button onClick={() => setShowAgentsModal(false)} className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className={`space-y-8 text-gray-300 leading-relaxed ${isMy ? 'myanmar-text text-lg' : 'text-base'}`}>
                <p className="text-xl text-white/90 font-medium italic">"{t.agentDetails.intro}"</p>
                <div className="space-y-10"><div className="space-y-4"><h3 className="text-emerald-400 font-bold text-xl flex items-center gap-3"><UserCheck size={24} /> {t.agentDetails.types.simulation.title}</h3><div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3"><p className="text-white font-medium">{t.agentDetails.types.simulation.desc}</p></div></div><div className="space-y-4"><h3 className="text-emerald-400 font-bold text-xl flex items-center gap-3"><Search size={24} /> {t.agentDetails.types.feedback.title}</h3><div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3"><p className="text-white font-medium">{t.agentDetails.types.feedback.desc}</p></div></div></div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 text-center"><button onClick={() => setShowAgentsModal(false)} className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20">{isMy ? 'နားလည်ပါပြီ' : 'Got it!'}</button></div>
            </div>
          </div>
        </div>
      )}
      {showIterativeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowIterativeModal(false)} />
          <div className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4 text-orange-500"><div className="w-12 h-12 bg-orange-600/20 rounded-2xl flex items-center justify-center"><RefreshCcw size={24} /></div><h2 className="text-2xl font-bold text-white">{t.iterativeDetails.title}</h2></div>
              <button onClick={() => setShowIterativeModal(false)} className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className={`space-y-8 text-gray-300 leading-relaxed ${isMy ? 'myanmar-text text-lg' : 'text-base'}`}>
                <p className="text-xl text-white/90 font-medium italic">"{t.iterativeDetails.intro}"</p>
                <div className="space-y-6"><h3 className="text-orange-400 font-bold text-xl uppercase tracking-widest border-b border-white/5 pb-2">{t.iterativeDetails.tacticsTitle}</h3><div className="grid gap-4">{t.iterativeDetails.tactics.map((tactic: any, i: number) => (<div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex gap-4 items-start"><div className="w-8 h-8 rounded-lg bg-orange-600/20 flex items-center justify-center text-orange-500 shrink-0 text-xs font-bold">{i + 1}</div><div><p className="font-bold text-white mb-1">{tactic.t}</p><p className="text-sm text-gray-400">{tactic.d}</p></div></div>))}</div></div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 text-center"><button onClick={() => setShowIterativeModal(false)} className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-orange-600/20">{isMy ? 'နားလည်ပါပြီ' : 'Got it!'}</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
