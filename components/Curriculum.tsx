
import React, { useState, useEffect } from 'react';
import { CheckCircle2, PlayCircle, Award, X, ChevronRight, Info, FileText, ExternalLink, Library, Sparkles, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { CURRICULUM_MODULES, PILLAR_QUIZ } from '../constants';
import { CurriculumModule, Language } from '../types';
import { UI_STRINGS } from '../translations';
import { LessonQuiz } from './LessonQuiz';

interface CurriculumCardProps extends CurriculumModule {
  language: Language;
  onLearnMore: (module: CurriculumModule) => void;
  isCompleted: boolean;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ 
  icon: Icon, title, titleMy, description, descriptionMy, points, pointsMy, language, onLearnMore, isCompleted, ...rest 
}) => {
  const isMy = language === 'my';
  const module = { icon: Icon, title, titleMy, description, descriptionMy, points, pointsMy, ...rest };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`relative overflow-hidden bg-gray-50 dark:bg-white/[0.03] backdrop-blur-xl border p-8 rounded-[40px] transition-all duration-500 group h-full flex flex-col ${
        isCompleted 
        ? 'border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]' 
        : 'border-gray-200 dark:border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]'
      }`}
    >
      {/* Glassmorphism highlight */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
      
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
          isCompleted 
          ? 'bg-emerald-500/20 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
          : 'bg-blue-600/20 text-blue-500 group-hover:bg-blue-600/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
        }`}>
          <Icon className="w-8 h-8" />
        </div>
        
        {/* Progress Ring */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              className="text-white/5"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: isCompleted ? 0 : 251.2 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              strokeLinecap="round"
              className={isCompleted ? "text-emerald-500" : "text-blue-500/20"}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            {isCompleted ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-500 animate-in zoom-in duration-500" />
            ) : (
              <Circle className="w-6 h-6 text-white/10" />
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <h3 className={`text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight ${isMy ? 'leading-myanmar' : ''}`}>
          {isMy ? titleMy : title}
        </h3>
        <div className="flex items-center gap-2 mb-6">
           <div className="h-px w-6 bg-blue-500/50" />
           <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
             {isMy ? title : titleMy}
           </p>
        </div>
        
        <p className={`text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow text-sm ${isMy ? 'leading-myanmar' : ''}`}>
          {isMy ? descriptionMy : description}
        </p>

        <div className="space-y-4 mb-10">
          {(isMy ? pointsMy : points).slice(0, 3).map((point, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 group/item">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover/item:scale-150 group-hover/item:bg-blue-500 transition-all duration-300" />
              <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-gray-300 transition-colors">{point}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onLearnMore(module)}
          aria-label={`Explore ${isMy ? titleMy : title} module`}
          className="relative overflow-hidden flex items-center justify-center gap-2 w-full py-4 bg-gray-100 dark:bg-white/5 hover:bg-blue-600 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-blue-500 rounded-2xl font-black transition-all duration-500 text-xs uppercase tracking-widest group/btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-2">
            {isMy ? 'အသေးစိတ်လေ့လာရန်' : 'Explore Module'}
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

const CurriculumSkeleton: React.FC = () => (
  <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[40px] h-full flex flex-col animate-pulse">
    <div className="flex justify-between items-start mb-8">
      <div className="w-16 h-16 rounded-2xl bg-white/5" />
      <div className="w-14 h-14 rounded-full border-4 border-white/5" />
    </div>
    <div className="h-8 bg-white/10 rounded-lg w-3/4 mb-4" />
    <div className="flex items-center gap-2 mb-6">
      <div className="h-px w-6 bg-white/10" />
      <div className="h-3 bg-white/5 rounded w-24" />
    </div>
    <div className="space-y-2 mb-8 flex-grow">
      <div className="h-4 bg-white/5 rounded w-full" />
      <div className="h-4 bg-white/5 rounded w-5/6" />
      <div className="h-4 bg-white/5 rounded w-4/6" />
    </div>
    <div className="space-y-4 mb-10">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        <div className="h-3 bg-white/5 rounded w-32" />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        <div className="h-3 bg-white/5 rounded w-40" />
      </div>
    </div>
    <div className="h-14 bg-white/5 rounded-2xl w-full" />
  </div>
);

export const Curriculum: React.FC<{ language: Language; completedLessons: string[] }> = ({ language, completedLessons }) => {
  const t = UI_STRINGS[language].sections;
  const navT = UI_STRINGS[language].nav;
  const res = UI_STRINGS[language].resources;
  const isMy = language === 'my';
  const [showPillarQuiz, setShowPillarQuiz] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedModule, setSelectedModule] = useState<CurriculumModule | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state for perceived performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    const handleTriggerQuiz = () => setShowPillarQuiz(true);
    window.addEventListener('trigger-quiz', handleTriggerQuiz);
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('trigger-quiz', handleTriggerQuiz);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const driveLink = "https://drive.google.com/drive/folders/1a0vAqN6TzpkTX4V1MDKAvi3YGN-uXmTE?usp=sharing";

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showPillarQuiz ? (
          <div className="animate-in fade-in duration-500">
            <div className="text-center mb-16 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-shadow mb-6"
              >
                <Sparkles className="text-indigo-500 w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-[0.3em] ai-gradient-text">{t.learningPath}</span>
              </motion.div>
              <h2 className={`text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter ${isMy ? 'leading-myanmar' : ''}`}>
                {t.learningPath}
              </h2>
              <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
                {t.learningPathSub}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {isLoading ? (
                [...Array(3)].map((_, i) => (
                  <CurriculumSkeleton key={i} />
                ))
              ) : (
                CURRICULUM_MODULES.map((mod, i) => (
                  <CurriculumCard 
                    key={i} 
                    {...mod} 
                    language={language} 
                    onLearnMore={setSelectedModule}
                    isCompleted={completedLessons.includes(mod.id)}
                  />
                ))
              )}
            </div>

            {/* NEW PDF Resource Hub Section */}
            <div className="glass-card rounded-[48px] p-10 md:p-16 relative overflow-hidden shadow-2xl group/hub transition-colors duration-300 glow-shadow">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover/hub:scale-110 group-hover/hub:rotate-6 transition-transform duration-700">
                <Library size={200} className="text-indigo-500" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/20 ai-gradient-text text-[10px] font-black uppercase tracking-widest mb-6">
                  <FileText className="w-4 h-4" />
                  <span>Student Portal</span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight ${isMy ? 'leading-myanmar' : ''}`}>
                  {res.title}
                </h2>
                <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-10">
                  {res.sub}
                </p>
                <a 
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Student Portal in Google Drive"
                  className="inline-flex items-center gap-3 px-10 py-5 ai-gradient-bg text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-indigo-600/30 hover:scale-[1.03] active:scale-95 glow-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
                >
                  {res.btn}
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex justify-between items-center">
              <button 
                onClick={() => setShowPillarQuiz(false)}
                aria-label="Back to Lessons"
                className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
              >
                <PlayCircle className="w-5 h-5 rotate-180" />
                {isMy ? 'သင်ခန်းစာများသို့ ပြန်သွားရန်' : 'Back to Lessons'}
              </button>
            </div>
            <LessonQuiz 
              quizSet={PILLAR_QUIZ} 
              language={language} 
              onClose={() => setShowPillarQuiz(false)} 
            />
          </div>
        )}

      </div>

      {/* Deep-Dive Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedModule(null)}
          />
          <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-4 text-blue-500">
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                  <selectedModule.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isMy ? selectedModule.extendedContent?.titleMy : selectedModule.extendedContent?.title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedModule(null)}
                aria-label="Close modal"
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white bg-gray-100 dark:bg-white/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className={`space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed ${isMy ? 'myanmar-text text-lg' : 'text-base'}`}>
                <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-2xl flex gap-4">
                  <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                  <p>
                    {isMy ? selectedModule.extendedContent?.bodyMy : selectedModule.extendedContent?.body}
                  </p>
                </div>
                
                <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest text-xs border-b border-gray-100 dark:border-white/5 pb-2">
                  {isMy ? 'အဓိက အချက်များ' : 'Key Pillars of Mastery'}
                </h4>
                
                <ul className="grid sm:grid-cols-2 gap-4">
                  {(isMy ? selectedModule.pointsMy : selectedModule.points).map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <button 
                  onClick={() => setSelectedModule(null)}
                  aria-label="Close module details"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
                >
                  {isMy ? 'နားလည်ပါပြီ' : 'Got it!'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
