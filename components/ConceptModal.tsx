import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Sparkles, GraduationCap, Home, Briefcase } from 'lucide-react';
import { UI_STRINGS } from '../translations';
import { Language } from '../types';

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

interface QuestionCardProps {
  question: string;
  answer: string;
  index: number;
  category: 'teachers' | 'parents' | 'business';
  language: Language;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer, index, category, language }) => {
  const colors = {
    teachers: {
      bg: 'bg-blue-500/5',
      border: 'border-blue-500/20',
      accent: 'bg-blue-500',
      text: 'text-blue-400',
      light: 'bg-blue-500/10'
    },
    parents: {
      bg: 'bg-emerald-500/5',
      border: 'border-emerald-500/20',
      accent: 'bg-emerald-500',
      text: 'text-emerald-400',
      light: 'bg-emerald-500/10'
    },
    business: {
      bg: 'bg-purple-500/5',
      border: 'border-purple-500/20',
      accent: 'bg-purple-500',
      text: 'text-purple-400',
      light: 'bg-purple-500/10'
    }
  };

  const c = colors[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative group rounded-[24px] md:rounded-[32px] border ${c.border} ${c.bg} p-5 md:p-8 overflow-hidden hover:shadow-2xl hover:shadow-black/50 transition-all duration-500`}
    >
      {/* Decorative background element */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${c.light} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`} />
      
      <div className="relative z-10 space-y-4 md:space-y-6">
        {/* Question Header */}
        <div className="flex gap-3 md:gap-4 items-start">
          <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl ${c.light} flex items-center justify-center ${c.text} font-black text-lg md:text-xl border ${c.border} shadow-inner`}>
            Q
          </div>
          <h3 className="text-base md:text-xl font-bold text-white leading-tight pt-1 group-hover:text-white transition-colors">
            {question}
          </h3>
        </div>

        {/* Answer Section */}
        <div className="flex gap-3 md:gap-4 items-start">
          <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 font-black text-lg md:text-xl border border-white/10">
            A
          </div>
          <div className="flex-1 bg-black/40 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 backdrop-blur-sm">
            <p className={`text-gray-300 leading-relaxed text-xs md:text-base font-medium ${language === 'my' ? '' : 'italic'}`}>
              {answer}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ConceptModal: React.FC<ConceptModalProps> = ({ isOpen, onClose, language }) => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'parents' | 'business'>('teachers');

  const t = UI_STRINGS[language].concept;

  if (!isOpen) return null;

  const tabs = [
    { id: 'teachers', label: t.tabs.teachers, icon: <GraduationCap size={20} />, color: 'blue' },
    { id: 'parents', label: t.tabs.parents, icon: <Home size={20} />, color: 'emerald' },
    { id: 'business', label: t.tabs.business, icon: <Briefcase size={20} />, color: 'purple' },
  ] as const;

  const activeColorClass = {
    teachers: 'text-blue-400',
    parents: 'text-emerald-400',
    business: 'text-purple-400'
  }[activeTab];

  const activeBgClass = {
    teachers: 'bg-blue-600',
    parents: 'bg-emerald-600',
    business: 'bg-purple-600'
  }[activeTab];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="p-6 md:p-12 border-b border-white/5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5 opacity-50" />
              
              <div className="relative z-10 pr-12 md:pr-0">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <div className="p-2 md:p-3 bg-white/5 rounded-xl md:rounded-2xl border border-white/10">
                    <Sparkles size={20} className="text-blue-400 md:w-7 md:h-7" />
                  </div>
                  <h2 className={`text-xl md:text-5xl font-black text-white tracking-tighter ${language === 'my' ? '' : 'uppercase italic'}`}>{t.title}</h2>
                </div>
                <p className="text-gray-400 text-xs md:text-xl font-medium max-w-2xl">{t.subtitle}</p>
              </div>
              
              <button
                onClick={onClose}
                className="absolute top-6 right-6 md:relative md:top-0 md:right-0 z-10 p-2 md:p-4 hover:bg-white/5 rounded-full transition-all text-gray-500 hover:text-white border border-transparent hover:border-white/10 group"
              >
                <X size={24} className="md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Tabs Container */}
            <div className="px-4 md:px-12 pt-4 md:pt-6">
              <div className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[90px] md:min-w-[140px] py-3 md:py-4 px-2 md:px-6 flex items-center justify-center gap-1.5 md:gap-3 transition-all rounded-xl md:rounded-[18px] relative group ${
                      activeTab === tab.id 
                        ? 'bg-white/10 text-white shadow-lg border border-white/10' 
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <span className={`transition-colors ${activeTab === tab.id ? activeColorClass : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {React.cloneElement(tab.icon as React.ReactElement, { size: 16, className: 'md:w-5 md:h-5' })}
                    </span>
                    <span className="font-black text-[10px] md:text-sm uppercase tracking-widest whitespace-nowrap">{tab.label}</span>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className={`absolute inset-0 rounded-xl md:rounded-[18px] ring-2 ring-inset ring-white/10 pointer-events-none`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-12 custom-scrollbar bg-gradient-to-b from-black/40 to-transparent">
              <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 md:space-y-6"
                  >
                    {t.sections[activeTab].map((item: any, idx: number) => (
                      <QuestionCard
                        key={`${activeTab}-${idx}`}
                        index={idx}
                        question={item.q}
                        answer={item.a}
                        category={activeTab}
                        language={language}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-4 md:p-10 border-t border-white/5 bg-black/40 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <div className="text-gray-500 text-[10px] md:text-sm font-medium text-center">
                {language === 'my' ? 'AI Mindset Academy ဖြင့် အနာဂတ်ကို ဦးဆောင်ပါ' : 'Lead the future with AI Mindset Academy'}
              </div>
              <button
                onClick={onClose}
                className={`w-full md:w-auto px-8 md:px-12 py-4 md:py-5 ${activeBgClass} hover:opacity-90 text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-xl md:rounded-2xl transition-all shadow-2xl shadow-blue-600/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-3`}
              >
                {language === 'my' ? 'နားလည်ပါပြီ' : 'Got it, thanks!'}
                <ChevronRight size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

