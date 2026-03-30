import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronUp, Sparkles, GraduationCap, Home, Briefcase } from 'lucide-react';
import { UI_STRINGS } from '../translations';
import { Language } from '../types';

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left hover:text-blue-400 transition-colors group"
      >
        <span className="text-sm md:text-base font-medium pr-4 leading-snug">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="shrink-0 text-blue-500" />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-gray-500 group-hover:text-blue-400" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2">
              <div className="text-sm md:text-base text-gray-300 leading-relaxed bg-blue-500/10 p-5 rounded-2xl border border-blue-500/20 shadow-inner">
                <div className="flex gap-3">
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  <p>{answer}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ConceptModal: React.FC<ConceptModalProps> = ({ isOpen, onClose, language }) => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'parents' | 'business'>('teachers');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = UI_STRINGS[language].concept;

  if (!isOpen) return null;

  const tabs = [
    { id: 'teachers', label: t.tabs.teachers, icon: <GraduationCap size={18} /> },
    { id: 'parents', label: t.tabs.parents, icon: <Home size={18} /> },
    { id: 'business', label: t.tabs.business, icon: <Briefcase size={18} /> },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-zinc-900 border border-white/10 rounded-[40px] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-8 md:p-10 border-b border-white/10 flex items-center justify-between bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Sparkles size={24} className="text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">{t.title}</h2>
                </div>
                <p className="text-gray-400 text-sm md:text-lg font-medium">{t.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-white/5 rounded-full transition-all text-gray-500 hover:text-white border border-transparent hover:border-white/10"
              >
                <X size={28} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-black/40 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setOpenIndex(0);
                  }}
                  className={`flex-1 min-w-[160px] py-5 px-6 flex items-center justify-center gap-3 transition-all relative group ${
                    activeTab === tab.id ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span className={`${activeTab === tab.id ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {tab.icon}
                  </span>
                  <span className="font-black text-xs uppercase tracking-[0.2em] whitespace-nowrap">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-[#0a0a0a]">
              <div className="max-w-3xl mx-auto space-y-2">
                {t.sections[activeTab].map((item: any, idx: number) => (
                  <AccordionItem
                    key={idx}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === idx}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/10 bg-black/60 flex justify-center">
              <button
                onClick={onClose}
                className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-sm rounded-2xl transition-all shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95"
              >
                {language === 'my' ? 'နားလည်ပါပြီ' : 'Got it, thanks!'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
