
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Zap, Briefcase, Cpu, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface StrategyBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const StrategyBlueprintModal: React.FC<StrategyBlueprintModalProps> = ({ isOpen, onClose, language }) => {
  const isMy = language === 'my';

  const phases = [
    {
      id: 1,
      title: isMy ? "အခြေခံအုတ်မြစ် (Foundation)" : "Phase 1: Foundation",
      subtitle: isMy ? "AI ကို အထောက်အကူပြုကိရိယာအဖြစ် နားလည်ခြင်း" : "Understanding AI as an Enabler",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      items: isMy 
        ? ["AI Mindset ပြောင်းလဲခြင်း", "Generative AI အခြေခံများ", "Director Mindset မွေးမြူခြင်း"]
        : ["AI Mindset Shift", "Generative AI Fundamentals", "Cultivating the Director Mindset"]
    },
    {
      id: 2,
      title: isMy ? "Prompt Engineering" : "Phase 2: Prompt Engineering",
      subtitle: isMy ? "P.R.O.M.P.T Framework ကို ကျွမ်းကျင်စွာ အသုံးပြုခြင်း" : "Mastering the P.R.O.M.P.T Framework",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "border-amber-500/30",
      items: isMy
        ? ["Contextual Prompting", "Iterative Refinement", "Intent Architecture"]
        : ["Contextual Prompting", "Iterative Refinement", "Intent Architecture"]
    },
    {
      id: 3,
      title: isMy ? "စီးပွားရေးလုပ်ငန်းတွင် အသုံးချခြင်း (Business Integration)" : "Phase 3: Business Integration",
      subtitle: isMy ? "နေ့စဉ်လုပ်ငန်းဆောင်တာများတွင် AI ကို ပေါင်းစပ်ခြင်း" : "Applying AI in Daily Workflows",
      icon: <Briefcase className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      items: isMy
        ? ["Workflow Automation", "Content Strategy", "Data-Driven Decisions"]
        : ["Workflow Automation", "Content Strategy", "Data-Driven Decisions"]
    },
    {
      id: 4,
      title: isMy ? "အဆင့်မြင့် ဖန်တီးမှု (Advanced Creation)" : "Phase 4: Advanced Creation",
      subtitle: isMy ? "ကိုယ်ပိုင် AI Assistants များ တည်ဆောက်ခြင်း" : "Building Custom AI Assistants",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "border-emerald-500/30",
      items: isMy
        ? ["Custom GPTs & Gems", "AI Agents Development", "Scalable AI Solutions"]
        : ["Custom GPTs & Gems", "AI Agents Development", "Scalable AI Solutions"]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            aria-hidden="true"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-zinc-900/30 backdrop-blur-xl">
              <div>
                <h2 className={`text-2xl md:text-3xl font-black text-white tracking-tight ${isMy ? 'myanmar-text' : ''}`}>
                  {isMy ? "AI Mindset Academy ၏ မဟာဗျူဟာ လမ်းပြမြေပုံ" : "Full Strategy Blueprint"}
                </h2>
                <p className="text-blue-400 font-bold text-xs md:text-sm mt-1 uppercase tracking-[0.2em]">
                  {isMy ? "အနာဂတ်သို့ လှမ်းကိုင်ရန် လမ်းစဉ်" : "Your Roadmap to AI Mastery"}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close blueprint modal"
                className="p-3 hover:bg-white/5 rounded-2xl transition-all border border-white/5 hover:border-white/10 group"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid md:grid-cols-2 gap-6">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-6 rounded-[32px] border ${phase.borderColor} bg-gradient-to-br ${phase.color} group hover:scale-[1.02] transition-all duration-500`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-black/40 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className={`text-lg font-black text-white mb-1 ${isMy ? 'myanmar-text' : ''}`}>
                          {phase.title}
                        </h3>
                        <p className={`text-xs font-bold text-gray-400 uppercase tracking-wider ${isMy ? 'myanmar-text' : ''}`}>
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-500/50 shrink-0" />
                          <span className={isMy ? 'myanmar-text' : ''}>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Phase Number Indicator */}
                    <div className="absolute top-6 right-6 text-4xl font-black text-white/5 pointer-events-none">
                      0{phase.id}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary Footer */}
              <div className="mt-10 p-8 rounded-[32px] bg-blue-600/10 border border-blue-500/20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <h4 className={`text-xl font-black text-white mb-3 ${isMy ? 'myanmar-text' : ''}`}>
                    {isMy ? "သင်၏ AI ခရီးစဉ်ကို ယနေ့စတင်လိုက်ပါ" : "Ready to Transform Your Workflow?"}
                  </h4>
                  <p className={`text-gray-400 text-sm max-w-xl mx-auto mb-6 ${isMy ? 'myanmar-text' : ''}`}>
                    {isMy 
                      ? "ကျွန်ုပ်တို့၏ စနစ်တကျ ရေးဆွဲထားသော သင်ရိုးညွှန်းတမ်းသည် သင့်အား AI ကို ကျွမ်းကျင်စွာ အသုံးပြုနိုင်သော ခေါင်းဆောင်တစ်ဦး ဖြစ်လာစေရန် ကူညီပေးပါမည်။"
                      : "Our structured curriculum is designed to take you from a curious observer to a confident AI Director."}
                  </p>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95"
                  >
                    {isMy ? "သင်ခန်းစာများသို့ သွားရန်" : "Explore Curriculum"}
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
