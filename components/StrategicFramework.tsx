
import React from 'react';
import { 
  TrendingUp, 
  Target, 
  Cpu, 
  Heart, 
  Zap, 
  Workflow, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Eye,
  UserCheck
} from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

export const StrategicFramework: React.FC<{ language: Language, onStart: () => void, onOpenStrategyBlueprint: () => void }> = ({ language, onStart, onOpenStrategyBlueprint }) => {
  const isMy = language === 'my';
  const t = UI_STRINGS[language].sections;

  const sections = [
    {
      icon: Cpu,
      title: isMy ? "၁။ ခေါင်းဆောင်မှုပုံစံသစ်၏ မဟာဗျူဟာမြောက် အရေးပါမှု" : "1. The Strategic Shift in Leadership",
      highlight: isMy ? "Operator မှ Director သို့" : "From Operator to Director",
      desc: isMy 
        ? "AI ကို အားကိုးတုတ်အဖြစ် မဟုတ်ဘဲ မိမိကိုယ်ကို ပိုမိုထက်မြက်အောင် လေ့ကျင့်ပေးသည့် 'Trainer' အဖြစ် အသုံးချခြင်းဖြစ်သည်။" 
        : "AI is not a crutch; it's an Executive Force Multiplier that strengthens your decision-making and strategic thinking.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Target,
      title: isMy ? "၂။ အရသာ (Taste) ကို ပျိုးထောင်ခြင်း" : "2. Cultivating Taste",
      highlight: isMy ? "ထူးချွန်မှုကို ခွဲခြားသိမြင်နိုင်စွမ်း" : "Standard of Excellence",
      desc: isMy 
        ? "နည်းပညာပိုင်းဆိုင်ရာ ကျွမ်းကျင်မှုထက် 'အရသာ (Taste)' သည် အရေးပါဆုံးသော ကျွမ်းကျင်မှုဖြစ်လာသည်။" 
        : "In the AI era, recognizing excellence is more valuable than manual execution. Proximity to greatness is power.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Eye,
      title: isMy ? "၃။ AI အား သုတေသနတွဲဖက်အဖြစ် အသုံးပြုခြင်း" : "3. AI as a Research Co-pilot",
      highlight: isMy ? "အနာဂတ်ကို ကြိုတင်မြင်နိုင်စွမ်း" : "Looking Around Corners",
      desc: isMy 
        ? "AI သည် ဒေတာများကို ခွဲခြမ်းစိတ်ဖြာပေးခြင်းဖြင့် ခေါင်းဆောင်အား 'Vision Muscle' တည်ဆောက်ရန် နေရာလွတ်ပေးသည်။" 
        : "Use AI to analyze massive datasets and conduct 'Scenario Projections' to see 18 months into the future.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: Heart,
      title: isMy ? "၄။ လူသားဆန်မှု၏ အားသာချက်" : "4. The Humanity Edge",
      highlight: isMy ? "ဂရုစိုက်မှုဖြင့် ဦးဆောင်ခြင်း" : "Leading with Care",
      desc: isMy 
        ? "AI သည် ဉာဏ်ရည်ကို တုပနိုင်သော်လည်း စစ်မှန်သော ဂရုစိုက်မှုကို မတုပနိုင်ပါ။ ၎င်းမှာ အရှားပါးဆုံး အရင်းအမြစ်ဖြစ်သည်။" 
        : "Care is the ultimate input in a world of infinite outputs. Align your team's dreams with company goals.",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white py-24 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <span className="ai-gradient-text font-black tracking-[0.3em] uppercase text-xs mb-4 block">Executive Framework</span>
              <h2 className={`text-5xl md:text-6xl font-black mb-8 tracking-tighter ${isMy ? 'leading-myanmar' : 'leading-tight'}`}>
                {isMy ? "လုပ်ငန်းဆောင်ရွက်သူမှ AI ညွှန်ကြားသူအဖြစ်သို့ ကူးပြောင်းခြင်း" : "From Operator to AI Director"}
              </h2>
              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                {isMy 
                  ? "AI ကို မိမိ၏ လုပ်ဆောင်နိုင်စွမ်းကို လျော့ကျစေသည့် အရာဟု မရှုမြင်ဘဲ၊ မိမိ၏ ဆုံးဖြတ်ချက်ချမှတ်နိုင်စွမ်းကို အဆပေါင်းများစွာ မြှင့်တင်ပေးမည့် 'Executive Force Multiplier' အဖြစ် အသုံးချတတ်ရန် လိုအပ်ပါသည်။"
                  : "Leadership today requires shifting from manual operations to strategic orchestration. AI is the lever that amplifies your potential."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={onStart} aria-label="Explore the Curriculum" className="px-8 py-4 ai-gradient-bg text-white rounded-2xl font-black hover:scale-105 transition-all flex items-center justify-center gap-2 group glow-shadow">
                  {isMy ? "သင်ရိုးညွှန်းတမ်းကို စတင်ရန်" : "Explore the Curriculum"}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={onOpenStrategyBlueprint}
                  aria-label="Open Strategy Blueprint"
                  className="px-8 py-4 glass-card rounded-2xl font-black hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 group text-gray-900 dark:text-white"
                >
                  <ShieldCheck className="text-indigo-500" />
                  {t.blueprintBtn}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full" />
              <div className="relative border border-gray-200 dark:border-white/10 p-1 bg-gray-100 dark:bg-white/5 rounded-[40px] overflow-hidden">
                <div className="bg-white dark:bg-zinc-900 rounded-[39px] p-10">
                  <div className="flex justify-between mb-8">
                    <div className="space-y-2">
                       <div className="h-2 w-24 bg-blue-600/50 rounded-full" />
                       <div className="h-2 w-40 bg-gray-200 dark:bg-white/10 rounded-full" />
                    </div>
                    <ShieldCheck className="text-blue-500" />
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">01</div>
                         <span className="text-sm font-medium text-gray-900 dark:text-white">Strategic Ideation</span>
                       </div>
                       <div className="text-blue-500 text-xs font-bold">10%</div>
                    </div>
                    <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 flex items-center justify-between scale-105 shadow-xl shadow-blue-600/5">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">02</div>
                         <span className="text-sm font-bold text-gray-900 dark:text-white">AI Execution</span>
                       </div>
                       <div className="text-blue-400 text-xs font-bold">80%</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">03</div>
                         <span className="text-sm font-medium text-gray-900 dark:text-white">Human Integration</span>
                       </div>
                       <div className="text-blue-500 text-xs font-bold">10%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Framework Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {sections.map((s, i) => (
            <div key={i} className="group glass-card p-8 rounded-[32px] hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-all duration-500 glow-shadow">
              <div className={`w-16 h-16 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <s.icon size={32} />
              </div>
              <p className="text-xs font-black tracking-widest text-gray-400 dark:text-slate-500 uppercase mb-2">{s.title}</p>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{s.highlight}</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 10/80/10 Rule Section */}
        <div className="glass-card rounded-[48px] p-12 lg:p-20 relative overflow-hidden mb-32 transition-colors duration-300 glow-shadow">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <h2 className={`text-5xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter ${isMy ? 'leading-myanmar' : ''}`}>
              {isMy ? "၁၀/၈၀/၁၀ စည်းမျဉ်း- AI ကို လက်တွေ့အသုံးချ၍ စီမံခန့်ခွဲမှုပုံစံ" : "The 10/80/10 Rule for AI Orchestration"}
            </h2>
            <div className="space-y-12">
               <div className="flex gap-8 group">
                 <div className="text-4xl font-black text-gray-200 dark:text-white/10 group-hover:text-indigo-500 transition-colors">10%</div>
                 <div>
                   <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{isMy ? "ပထမ ၁၀% (Ideation)" : "First 10%: Ideation"}</h3>
                   <p className="text-gray-600 dark:text-slate-400 text-lg">{isMy ? "ခေါင်းဆောင်က စိတ်ကူးဖော်ထုတ်ခြင်းနှင့် လမ်းညွှန်မှုပေးခြင်း။" : "The leader defines the vision, sets the constraints, and provides the strategic spark."}</p>
                 </div>
               </div>
               <div className="flex gap-8 group">
                 <div className="text-4xl font-black text-gray-200 dark:text-white/10 group-hover:text-purple-500 transition-colors">80%</div>
                 <div>
                   <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{isMy ? "အလယ် ၈၀% (AI Execution)" : "Middle 80%: AI Execution"}</h3>
                   <p className="text-gray-600 dark:text-slate-400 text-lg">{isMy ? "AI ကို အသုံးပြု၍ အလုပ်များကို လက်တွေ့လုပ်ဆောင်စေခြင်း။" : "The AI agents handle the high-volume heavy lifting, research, and technical construction."}</p>
                 </div>
               </div>
               <div className="flex gap-8 group">
                 <div className="text-4xl font-black text-gray-200 dark:text-white/10 group-hover:text-pink-500 transition-colors">10%</div>
                 <div>
                   <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{isMy ? "နောက်ဆုံး ၁၀% (Integration & Taste)" : "Last 10%: Taste & Polish"}</h3>
                   <p className="text-gray-600 dark:text-slate-400 text-lg">{isMy ? "လူသား၏ 'Taste' ကို အသုံးပြု၍ အချောသတ်ခြင်းနှင့် ပေါင်းစပ်ခြင်း။" : "The leader applies human curation, quality control, and the final 10% of excellence."}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Conclusion / CTA */}
        <div className="text-center ai-gradient-bg rounded-[48px] py-24 px-8 relative overflow-hidden glow-shadow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          <h2 className={`text-5xl font-black text-white mb-10 tracking-tighter ${isMy ? 'leading-myanmar' : ''}`}>
            {isMy ? "AI ခေတ်တွင် အစားထိုးမခံရမည့် ခေါင်းဆောင်တစ်ဦး ဖြစ်လာပါ" : "Become an Irreplaceable AI-First Leader"}
          </h2>
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="flex items-center gap-3">
              <Zap className="text-indigo-200" />
              <span className="font-black text-white uppercase tracking-widest">{isMy ? "ရှင်းလင်းစွာ စဉ်းစားခြင်း" : "Think Clearly"}</span>
            </div>
            <div className="flex items-center gap-3">
              <UserCheck className="text-purple-200" />
              <span className="font-black text-white uppercase tracking-widest">{isMy ? "ရဲဝံ့စွာ ဦးဆောင်ခြင်း" : "Lead Boldly"}</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-pink-200" />
              <span className="font-black text-white uppercase tracking-widest">{isMy ? "နက်ရှိုင်းစွာ ဂရုစိုက်ခြင်း" : "Care Deeply"}</span>
            </div>
          </div>
          <button onClick={onStart} aria-label="Start the Full Curriculum" className="px-16 py-6 bg-white text-indigo-600 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl">
            {isMy ? "သင်ရိုးညွှန်းတမ်းကို စတင်လေ့လာရန်" : "Start the Full Curriculum"}
          </button>
        </div>

      </div>
    </section>
  );
};
