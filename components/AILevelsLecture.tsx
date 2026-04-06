import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bot, Zap, Users, Brain, BrainCircuit, Sparkles, CheckCircle2, AlertTriangle, Briefcase, TrendingUp, Terminal, Cake, ExternalLink, Layers, Layout, Cloud, Cpu, Dna, Activity, Lightbulb, X, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { LessonQuiz } from './LessonQuiz';
import { AILEVELS_MASTER_QUIZ } from '../constants';
import { CompleteButton } from './CompleteButton';

const aiStages = [
  {
    id: 1,
    level: "Level 1",
    levelMy: "အဆင့် (၁)",
    title: "Large Language Models (LLMs)",
    titleMy: "Large Language Models (LLMs)",
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    color: "bg-blue-500/10 border-blue-500",
    textColor: "text-blue-400",
    description: "Tools like ChatGPT, Gemini, and Claude. They read and learn from internet data to predict and generate the most likely next word.",
    descriptionMy: "ChatGPT၊ Gemini နှင့် Claude ကဲ့သို့သော ကိရိယာများဖြစ်သည်။ အင်တာနက်ပေါ်ရှိ အချက်အလက်များကို ဖတ်ရှုလေ့လာပြီး ဖြစ်နိုင်ခြေအများဆုံး နောက်ထပ်စကားလုံးကို ခန့်မှန်းဖန်တီးပေးသည်။",
    examples: "Explaining quantum computing, writing code, checking contracts. (25% faster, 40% better quality).",
    examplesMy: "ကွမ်တမ်ကွန်ပျူတာအကြောင်း ရှင်းပြခြင်း၊ ကုဒ်ရေးခြင်း၊ စာချုပ်များစစ်ဆေးခြင်း။ (အလုပ်လုပ်ရာတွင် ၂၅% ပိုမြန်၊ ၄၀% အရည်အသွေးပိုကောင်း)။",
    limitation: "AI can only provide advice and cannot perform actions on your behalf.",
    limitationMy: "AI သည် အကြံဉာဏ်များသာ ပေးနိုင်ပြီး သင့်ကိုယ်စား လက်တွေ့လုပ်ဆောင်ပေးခြင်း မရှိပါ။",
    scenarioOutput: "I will write down the steps on how to buy a flight ticket.",
    scenarioOutputMy: "လေယာဉ်လက်မှတ် ဘယ်လိုဝယ်ရမလဲဆိုတဲ့ အဆင့်တွေကို စာနဲ့ ရေးပြပါမယ်။"
  },
  {
    id: 2,
    level: "Level 2",
    levelMy: "အဆင့် (၂)",
    title: "Agentic AI",
    titleMy: "Agentic AI",
    icon: <Zap className="w-8 h-8 text-green-400" />,
    color: "bg-green-500/10 border-green-500",
    textColor: "text-green-400",
    description: "AI that can not only answer questions but also perform tasks on your behalf. It can open apps and click buttons on your computer.",
    descriptionMy: "အမေးကို ဖြေဆိုရုံသာမက သင့်ကိုယ်စား အလုပ်တာဝန်များကိုပါ လက်တွေ့လုပ်ဆောင်ပေးလာသည်။ ကွန်ပျူတာပေါ်ရှိ အက်ပ်များကို ဖွင့်ခြင်း၊ ကလစ်နှိပ်ခြင်းများ ကိုယ်တိုင်လုပ်ဆောင်နိုင်သည်။",
    examples: "Booking flight tickets directly, autonomous software development with Devin or Cursor.",
    examplesMy: "သင်၏လေယာဉ်လက်မှတ်ကို တိုက်ရိုက်ဘွတ်ကင်လုပ်ပေးခြင်း၊ Devin နှင့် Cursor တို့ဖြင့် ဆော့ဖ်ဝဲလ်များကို အလိုအလျောက် ရေးဆွဲခြင်း။",
    limitation: "Still in experimental stages and may have unexpected errors.",
    limitationMy: "အစမ်းသဘောမျိုးသာ ရှိသေးပြီး မမျှော်လင့်ထားသော အမှားအယွင်းများ ရှိနေသေးသည်။",
    scenarioOutput: "I have logged into the website and booked the flight ticket for you.",
    scenarioOutputMy: "သင့်အတွက် လေယာဉ်လက်မှတ်ကို ဝက်ဘ်ဆိုက်မှာ ဝင်ရောက်ပြီး Booking လုပ်ပေးလိုက်ပါပြီ။"
  },
  {
    id: 3,
    level: "Level 3",
    levelMy: "အဆင့် (၃)",
    title: "AI Teams",
    titleMy: "AI Teams (AI အဖွဲ့အစည်းများ)",
    icon: <Users className="w-8 h-8 text-purple-400" />,
    color: "bg-purple-500/10 border-purple-500",
    textColor: "text-purple-400",
    description: "Instead of a single AI assistant, multiple AI agents with specialized roles work together to automate entire workflows.",
    descriptionMy: "AI လက်ထောက်တစ်ဦးတည်းမဟုတ်တော့ဘဲ သီးခြားအခန်းကဏ္ဍများရှိသော AI များ စုပေါင်း၍ လုပ်ငန်းတစ်ခုလုံးကို အလိုအလျောက် လည်ပတ်စေသည်။",
    examples: "Platforms like Crew AI. Using 12 AI agents for fraud detection saved $18 million in a year.",
    examplesMy: "Crew AI ကဲ့သို့ ပလက်ဖောင်းများ။ ငွေလိမ်လည်မှုရှာဖွေရေးအတွက် AI အေးဂျင့် ၁၂ ခု သုံးကာ တစ်နှစ် ဒေါ်လာ ၁၈ သန်း ကယ်တင်နိုင်ခဲ့ခြင်း။",
    limitation: "Difficult to build and cannot think beyond the base model. (Expected to become widespread around 2030).",
    limitationMy: "တည်ဆောက်ရန် ခက်ခဲပြီး အခြေခံမော်ဒယ်ထက် ကျော်လွန်၍ မတွေးတောနိုင်ပါ။ (၂၀၃၀ ဝန်းကျင်မှ ကျယ်ပြန့်လာနိုင်)",
    scenarioOutput: "[Travel AI] will buy the ticket, [Finance AI] will check the budget, and [Weather AI] will check the weather, working together as a team.",
    scenarioOutputMy: "[Travel AI] က လက်မှတ်ဝယ်မည်၊ [Finance AI] က ဘတ်ဂျက်စစ်မည်၊ [Weather AI] က ရာသီဥတုစစ်ဆေးပြီး အဖွဲ့လိုက် အလုပ်လုပ်ပေးပါမည်။"
  },
  {
    id: 4,
    level: "Level 4",
    levelMy: "အဆင့် (၄)",
    title: "Artificial General Intelligence (AGI)",
    titleMy: "Artificial General Intelligence (AGI)",
    icon: <Brain className="w-8 h-8 text-orange-400" />,
    color: "bg-orange-500/10 border-orange-500",
    textColor: "text-orange-400",
    description: "Capable of thinking and performing at a human level across multiple fields and skills. Can think like a scientist, artist, or CEO.",
    descriptionMy: "နယ်ပယ်ပေါင်းစုံ၊ ကျွမ်းကျင်မှုပေါင်းစုံကို လူသားများကဲ့သို့ပင် စဉ်းစားတွေးခေါ်နိုင်ပြီး အမြင့်မားဆုံးအဆင့်တွင် လုပ်ဆောင်နိုင်သည်။ သိပ္ပံပညာရှင်၊ အနုပညာရှင်၊ CEO ကဲ့သို့ စဉ်းစားနိုင်သည်။",
    examples: "All top AI labs are competing to achieve this. (Estimated to appear between 2025 and 2047).",
    examplesMy: "ကမ္ဘာ့ထိပ်တန်း AI ဓာတ်ခွဲခန်းများအားလုံး အပြိုင်အဆိုင် ကြိုးပမ်းနေကြသည်။ (၂၀၂၅ မှ ၂၀၄၇ အတွင်း ပေါ်လာနိုင်သည်ဟု ခန့်မှန်း)",
    limitation: "May still require human management and will significantly change the job market.",
    limitationMy: "လူသားတို့၏ စီမံခန့်ခွဲမှု လိုအပ်နေဆဲဖြစ်နိုင်ပြီး အလုပ်အကိုင်များကို ကြီးမားစွာ ပြောင်းလဲပစ်မည်ဖြစ်သည်။",
    scenarioOutput: "I will think and decide independently like a human to manage all your life's needs.",
    scenarioOutputMy: "လူသားတစ်ယောက်လိုပဲ လွတ်လပ်စွာ စဉ်းစားဆုံးဖြတ်ပြီး သင့်ဘဝရဲ့ လိုအပ်ချက်အားလုံးကို စီမံခန့်ခွဲပေးပါမည်။"
  },
  {
    id: 5,
    level: "Level 5",
    levelMy: "အဆင့် (၅)",
    title: "Superintelligence",
    titleMy: "Superintelligence",
    icon: <Sparkles className="w-8 h-8 text-pink-400" />,
    color: "bg-pink-500/10 border-pink-500",
    textColor: "text-pink-400",
    description: "AI that surpasses the combined intelligence of all humans on Earth. The gap between human and AI will be like the gap between human and monkey.",
    descriptionMy: "ကမ္ဘာပေါ်ရှိ လူသားအားလုံး၏ ဉာဏ်ရည်ပေါင်းစပ်မှုထက် သာလွန်သော AI မျိုးဖြစ်သည်။ လူသားနှင့် မျောက် ကွာခြားသကဲ့သို့ ဉာဏ်ရည်ကွာဟသွားမည်။",
    examples: "Curing diseases, doubling human lifespan. However, risks like pandemics or nuclear wars also exist.",
    examplesMy: "ရောဂါဘယများကို ကုသနိုင်ခြင်း၊ လူ့သက်တမ်းကို နှစ်ဆတိုးစေခြင်း။ သို့သော် ကပ်ရောဂါ/နျူကလီးယားစစ်ပွဲများကဲ့သို့ အန္တရာယ်လည်းရှိသည်။",
    limitation: "Ilya Sutskever founded Safe Super Intelligence to focus on safety research at this level.",
    limitationMy: "Ilya Sutskever မှ Safe Super Intelligence ကုမ္ပဏီတည်ထောင်ကာ ဘေးကင်းရေးကို အဓိကထား သုတေသနပြုနေရသည့်အဆင့်။",
    scenarioOutput: "I will have solved all problems using new methods that humans cannot even imagine.",
    scenarioOutputMy: "လူသားတွေ မစဉ်းစားနိုင်တဲ့ နည်းလမ်းသစ်တွေနဲ့ ပြဿနာပေါင်းစုံကို ဖြေရှင်းပြီးသား ဖြစ်နေပါလိမ့်မယ်။"
  }
];

import confetti from 'canvas-confetti';

export const AILevelsLecture: React.FC<{ language: Language; onComplete: () => Promise<void> }> = ({ language, onComplete }) => {
  const [activeStageId, setActiveStageId] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isIntelligenceModalOpen, setIsIntelligenceModalOpen] = useState(false);
  const activeStage = aiStages.find(s => s.id === activeStageId) || aiStages[0];
  const isMy = language === 'my';

  useEffect(() => {
    const handleTriggerQuiz = () => setShowQuiz(true);
    window.addEventListener('trigger-quiz', handleTriggerQuiz);
    return () => window.removeEventListener('trigger-quiz', handleTriggerQuiz);
  }, []);

  const handleQuizComplete = (score: number) => {
    const maxScore = AILEVELS_MASTER_QUIZ.questions.length * 10;
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

  const content = {
    en: {
      tag: "The Future is Here",
      title: <>The <span 
        className="inline-block"
        style={{ 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          padding: '0 4px',
          backgroundImage: 'linear-gradient(to right, #60a5fa, #c084fc)'
        }}
      >Five Levels</span> of AI & Future Roadmap</>,
      intro: "In June 2024, Ilya Sutskever left OpenAI and founded a new company with $3 billion to safely build 'Level 5 AI'. Currently, we are only at Level 2. Let's explore what lies ahead.",
      stagesTitle: "AI Progression Levels",
      howItWorks: "How it Works",
      exampleLabel: "Practical Example",
      limitationLabel: "Limitation",
      scenarioLabel: "Scenario Example",
      scenarioPrompt: '"Buy me a flight ticket"',
      impactTitle: "Impact on the Job Market",
      impact1: "Number of jobs that could be automated (Goldman Sachs estimate)",
      impact2: "New jobs expected to emerge by 2030 (World Economic Forum)",
      impact3: "Salary increase potential for those who master AI",
      conclusionTitle: "Conclusion & Advice",
      conclusionBody: "The most certain fact is that those who prepare and learn early will have a significant advantage. It is crucial to build a system for continuous learning rather than just learning a single tool.",
      quizBtn: "Start AI Levels Quiz",
      backBtn: "Back to AI Levels",
      cakeTitle: "The AI Five-Layer Cake",
      cakeSubtitle: "AI is not Magic. It's Infrastructure.",
      cakeDescription: "Thinking of AI like a cake makes it easy to see how it works! Understanding these 5 infrastructure layers is essential to mastering the 5 progression levels of AI. Remember: AI is not magic, it's infrastructure.",
      cakeLinkBtn: "Explore the 5 Layers",
      intelligenceTitle: "The Highest Form of Intelligence",
      intelligenceSubtitle: "Learning from Neuroscientists",
      intelligenceDescription: "AI is evolving from a 'math machine' to a 'biological mimic'. By studying the human brain, researchers are moving AI from simple calculation toward Artificial Wisdom.",
      intelligencePoint1: "Reverse-Engineering the Brain: Mimicking the Prefrontal Cortex for planning.",
      intelligencePoint2: "Dopamine Loop: Using Reinforcement Learning to learn from rewards and mistakes.",
      intelligencePoint3: "Metacognition: Teaching AI to monitor its own thoughts to avoid bias.",
      intelligenceLearnMore: "External Resource",
      intelligenceDetailBtn: "Detailed Explanation",
      intelligenceModalTitle: "The Great Convergence: Neuroscience & AI",
      intelligenceModalIntro: "We are witnessing a 'Great Convergence' where the boundaries between computer science and biology are blurring. AI is becoming a biological mimic.",
      intelligenceSection1Title: "1. Reverse-Engineering the Brain's 'CEO'",
      intelligenceSection1Body: "Early AI was 'symbolic,' following rigid rules. Modern AI (Neural Networks) mimics biological neurons. The newest frontier is the Prefrontal Cortex, which handles executive function—planning and decision-making.",
      intelligenceSection2Title: "2. Reinforcement Learning: The Dopamine Loop",
      intelligenceSection2Body: "Reinforcement Learning (RL) was directly inspired by how dopamine signals rewards and mistakes. Neuroscientists discovered that neurons calculate 'Reward Prediction Errors' mathematically similar to RL algorithms.",
      intelligenceSection3Title: "3. The 'Highest Form' of Intelligence",
      intelligenceSection3Body: "The peak of cognitive development is Neuroplasticity (rewiring based on experience) and Metacognition (monitoring thoughts to avoid bias). AI is now developing 'layers' to evaluate its own output.",
      intelligenceSection4Title: "4. The Bidirectional Relationship",
      intelligenceSection4Body: "While AI learns from the brain, neuroscience uses AI to understand the brain better, transforming messy fMRI data into 'trajectories' of thought.",
      intelligenceModalSummary: "We are teaching machines to think by looking in the mirror. We are building digital reflections of our own cognitive architecture."
    },
    my: {
      tag: "The Future is Here",
      title: <>ဉာဏ်ရည်တု၏ <span 
        className="inline-block"
        style={{ 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          padding: '0 4px',
          backgroundImage: 'linear-gradient(to right, #60a5fa, #c084fc)'
        }}
      >အဆင့်ငါးဆင့်</span> နှင့်<br />အနာဂတ် ခရီးစဉ်</>,
      intro: "၂၀၂၄ ဇွန်လတွင် Ilya Sutskever သည် OpenAI မှထွက်ခွာပြီး \"အဆင့် (၅) ဉာဏ်ရည်တု\" ကို ဘေးကင်းစွာတည်ဆောက်ရန် $3 ဘီလီယံဖြင့် ကုမ္ပဏီသစ်ထောင်ခဲ့သည်။ လက်ရှိတွင် ကျွန်ုပ်တို့သည် အဆင့် (၂) ၌သာ ရှိနေသေးသည်။ ရှေ့ဆက်ဘာတွေဖြစ်လာမလဲ စူးစမ်းကြည့်ရအောင်။",
      stagesTitle: "AI တိုးတက်မှု အဆင့်များ",
      howItWorks: "အလုပ်လုပ်ပုံ",
      exampleLabel: "လက်တွေ့ဥပမာ",
      limitationLabel: "ကန့်သတ်ချက်",
      scenarioLabel: "စမ်းသပ်မှု ဥပမာ (Scenario)",
      scenarioPrompt: '"လေယာဉ်လက်မှတ် ဝယ်ပေးပါ"',
      impactTitle: "အလုပ်အကိုင်ဈေးကွက်အပေါ် သက်ရောက်မှု",
      impact1: "Goldman Sachs ၏ ခန့်မှန်းချက်အရ အလိုအလျောက် အစားထိုးခံရနိုင်သော အလုပ်အကိုင်အရေအတွက်",
      impact2: "World Economic Forum အရ ၂၀၃၀ တွင် အသစ်ထပ်မံပေါ်ပေါက်လာမည့် အလုပ်အကိုင်များ",
      impact3: "AI ကို အသုံးပြုတတ်သူများ ပိုမိုမြန်ဆန်စွာ အလုပ်လုပ်နိုင်ပြီး ရရှိလာနိုင်မည့် လစာတိုးနှုန်း",
      conclusionTitle: "နိဂုံးချုပ်အကြံပြုချက်",
      conclusionBody: "အသေချာဆုံးအချက်မှာ အစောပိုင်းကတည်းက ကြိုတင်လေ့လာပြင်ဆင်ထားသူများက ပိုမိုအသာစီးရရှိမည်ဖြစ်သည်။ ကိရိယာတစ်ခုတည်းကို လေ့လာခြင်းထက် ခေတ်နှင့်အညီ အမြဲမပြတ် လေ့လာသင်ယူနိုင်မည့် စနစ်တစ်ခုကို တည်ဆောက်ထားရန် အလွန်အရေးကြီးပါသည်။",
      quizBtn: "AI အဆင့်များ Quiz စတင်ရန်",
      backBtn: "သင်ခန်းစာသို့ ပြန်သွားရန်",
      cakeTitle: "AI အလွှာ ၅ ဆင့် ကိတ်မုန့်",
      cakeSubtitle: "AI ဆိုတာ မှော်ပညာမဟုတ်ပါ၊ အခြေခံအဆောက်အအုံဖြစ်ပါတယ်။",
      cakeDescription: "AI ကို ကိတ်မုန့်တစ်ခုလို စဉ်းစားကြည့်ရင် နားလည်ရတာ ပိုလွယ်ကူပါတယ်။ ဒီအခြေခံအလွှာ ၅ ဆင့်ကို နားလည်ခြင်းက AI တိုးတက်မှုအဆင့် ၅ ဆင့်ကို ကျွမ်းကျင်ပိုင်နိုင်ဖို့အတွက် မရှိမဖြစ်လိုအပ်ပါတယ်။ မှတ်ထားရမှာက AI ဆိုတာ မှော်ပညာမဟုတ်ပါ၊ အခြေခံအဆောက်အအုံဖြစ်ပါတယ်။",
      cakeLinkBtn: "အလွှာ ၅ ဆင့်ကို လေ့လာရန်",
      intelligenceTitle: "အမြင့်ဆုံးသော ဉာဏ်ရည်အဆင့်",
      intelligenceSubtitle: "အာရုံကြောသိပ္ပံပညာရှင်များထံမှ သင်ယူခြင်း",
      intelligenceDescription: "AI သည် 'သင်္ချာစက်' အဆင့်မှ 'ဇီဝဗေဒဆိုင်ရာ အတုယူမှု' အဆင့်သို့ ကူးပြောင်းနေပြီဖြစ်သည်။ လူသားဦးနှောက်ကို လေ့လာခြင်းဖြင့် AI ကို ရိုးရှင်းသော တွက်ချက်မှုမှသည် 'ဉာဏ်ပညာရှိသော AI' (Artificial Wisdom) အဖြစ်သို့ ပြောင်းလဲပေးနေသည်။",
      intelligencePoint1: "ဦးနှောက်ကို အတုယူခြင်း: စီမံကိန်းချမှတ်ရန် Prefrontal Cortex ကို ပုံတူကူးခြင်း။",
      intelligencePoint2: "Dopamine Loop: ဆုလာဘ်နှင့် အမှားများမှတစ်ဆင့် သင်ယူရန် RL စနစ်ကို သုံးခြင်း။",
      intelligencePoint3: "Metacognition: အမှားနှင့် ဘက်လိုက်မှုကင်းရန် AI ကိုယ်တိုင် ပြန်လည်စစ်ဆေးတတ်စေခြင်း။",
      intelligenceLearnMore: "ပြင်ပရင်းမြစ်",
      intelligenceDetailBtn: "အသေးစိတ်ရှင်းလင်းချက်",
      intelligenceModalTitle: "အာရုံကြောသိပ္ပံ နှင့် AI ၏ ပေါင်းဆုံမှု",
      intelligenceModalIntro: "ကွန်ပျူတာသိပ္ပံနှင့် ဇီဝဗေဒအကြား နယ်နိမိတ်များ ဝေဝါးလာသည့် 'ကြီးမားသော ပေါင်းဆုံမှု' ကို ကျွန်ုပ်တို့ မြင်တွေ့နေရသည်။ AI သည် ဇီဝဗေဒဆိုင်ရာ အတုယူမှုတစ်ခု ဖြစ်လာနေသည်။",
      intelligenceSection1Title: "၁။ ဦးနှောက်၏ 'CEO' ကို ပုံတူကူးခြင်း",
      intelligenceSection1Body: "အစောပိုင်း AI များသည် တင်းကျပ်သော စည်းမျဉ်းများကို လိုက်နာခဲ့သည်။ ခေတ်သစ် AI (Neural Networks) များသည် ဇီဝဗေဒဆိုင်ရာ နျူရွန်များကို အတုယူထားသည်။ အသစ်ဆုံး နယ်ပယ်မှာ စီမံကိန်းချမှတ်ခြင်းနှင့် ဆုံးဖြတ်ချက်ချခြင်းတို့ကို လုပ်ဆောင်သော Prefrontal Cortex ဖြစ်သည်။",
      intelligenceSection2Title: "၂။ Dopamine Loop နှင့် သင်ယူမှု",
      intelligenceSection2Body: "Reinforcement Learning (RL) သည် ဦးနှောက်အတွင်းရှိ dopamine က ဆုလာဘ်နှင့် အမှားများကို မည်သို့ အချက်ပြသည်ဆိုသည့်အပေါ် အခြေခံထားသည်။ နျူရွန်များသည် RL algorithms များကဲ့သို့ပင် 'Reward Prediction Errors' ကို တွက်ချက်ကြောင်း သိပ္ပံပညာရှင်များ ရှာဖွေတွေ့ရှိခဲ့သည်။",
      intelligenceSection3Title: "၃။ အမြင့်ဆုံးသော ဉာဏ်ရည်အဆင့်",
      intelligenceSection3Body: "သိမြင်မှုဆိုင်ရာ ဖွံ့ဖြိုးတိုးတက်မှု၏ အထွတ်အထိပ်မှာ အတွေ့အကြုံပေါ်မူတည်၍ ဦးနှောက်ကို ပြန်လည်ဖွဲ့စည်းခြင်း (Neuroplasticity) နှင့် မိမိ၏ အတွေးများကို ပြန်လည်စစ်ဆေးခြင်း (Metacognition) တို့ ဖြစ်သည်။ AI သည် ယခုအခါ မိမိ၏ ရလဒ်များကို ကိုယ်တိုင် ပြန်လည်အကဲဖြတ်သည့် 'layers' များကို တည်ဆောက်နေပြီဖြစ်သည်။",
      intelligenceSection4Title: "၄။ နှစ်ဦးနှစ်ဖက် အကျိုးပြုမှု",
      intelligenceSection4Body: "AI က ဦးနှောက်ထံမှ သင်ယူနေသကဲ့သို့ အာရုံကြောသိပ္ပံသည်လည်း ဦးနှောက်ကို ပိုမိုနားလည်ရန် AI ကို အသုံးပြုနေသည်။ fMRI အချက်အလက်များကို အတွေးများ၏ 'လမ်းကြောင်း' များအဖြစ် ပြောင်းလဲကြည့်ရှုနိုင်လာသည်။",
      intelligenceModalSummary: "ကျွန်ုပ်တို့သည် မှန်ထဲတွင် ကိုယ့်ကိုယ်ကိုယ် ပြန်ကြည့်ခြင်းဖြင့် စက်များကို တွေးခေါ်တတ်ရန် သင်ကြားပေးနေခြင်း ဖြစ်သည်။ ကျွန်ုပ်တို့၏ ကိုယ်ပိုင် သိမြင်မှုဆိုင်ရာ တည်ဆောက်ပုံများကို ဒစ်ဂျစ်တယ်ပုံရိပ်များအဖြစ် တည်ဆောက်နေခြင်း ဖြစ်သည်။"
    }
  };

  const t = content[language];

  if (showQuiz) {
    return (
      <div className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-8">
            <button 
              onClick={() => setShowQuiz(false)}
              className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-black rounded-lg px-2 py-1"
              aria-label={t.backBtn}
            >
              <Terminal className="w-5 h-5 rotate-180" />
              {t.backBtn}
            </button>
          </div>
          <LessonQuiz 
            quizSet={AILEVELS_MASTER_QUIZ} 
            language={language} 
            onClose={() => setShowQuiz(false)} 
            onComplete={handleQuizComplete}
          />
        </div>
      </div>
    );
  }

  return (
    <section className={`py-24 bg-black ${isMy ? 'myanmar-text' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-20 text-center relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <BrainCircuit className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h1 className={`text-4xl md:text-5xl font-black text-white mb-6 ${isMy ? 'leading-myanmar' : 'leading-tight'}`}>
            {t.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            {t.intro}
          </p>
        </div>

        {/* Main Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Navigation (Stepping Stones) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              {t.stagesTitle}
            </h2>
            <div className="relative border-l-2 border-white/10 ml-4 pl-8 space-y-8">
              {aiStages.map((stage) => (
                <div 
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${isMy ? stage.titleMy : stage.title}`}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveStageId(stage.id)}
                  className={`relative cursor-pointer group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-black rounded-2xl ${
                    activeStageId === stage.id ? "opacity-100 scale-105" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[41px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-black flex items-center justify-center transition-colors
                    ${activeStageId >= stage.id ? stage.color.split(' ')[0] : 'bg-zinc-800'}
                  `}>
                    {activeStageId >= stage.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>

                  <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                    activeStageId === stage.id 
                      ? `${stage.color} bg-zinc-900/80` 
                      : 'bg-zinc-900 border-white/10'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeStageId === stage.id ? 'bg-black' : 'bg-white/5 text-gray-400'}`}>
                        {activeStageId === stage.id ? stage.icon : React.cloneElement(stage.icon as React.ReactElement, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${activeStageId === stage.id ? stage.textColor : 'text-gray-400'}`}>
                          {isMy ? stage.levelMy : stage.level}
                        </p>
                        <h3 className="text-base font-bold text-white mt-1">{isMy ? stage.titleMy : stage.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area (Detailed View) */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <div className={`rounded-[32px] border p-8 md:p-10 transition-all duration-500 min-h-[500px] flex flex-col bg-zinc-900 shadow-2xl ${activeStage.color}`}>
                
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-black rounded-2xl shadow-inner flex items-center justify-center border border-white/5">
                    {activeStage.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${activeStage.textColor} mb-1`}>{isMy ? activeStage.levelMy : activeStage.level}</div>
                    <h2 className={`text-2xl md:text-3xl font-bold text-white ${isMy ? 'leading-myanmar' : ''}`}>{isMy ? activeStage.titleMy : activeStage.title}</h2>
                  </div>
                </div>

                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">{t.howItWorks}</h4>
                    <p className="text-gray-200 text-lg leading-relaxed">{isMy ? activeStage.descriptionMy : activeStage.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="flex items-center gap-2 text-emerald-400 font-bold mb-3">
                        <CheckCircle2 className="w-4 h-4" /> {t.exampleLabel}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{isMy ? activeStage.examplesMy : activeStage.examples}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="flex items-center gap-2 text-yellow-400 font-bold mb-3">
                        <AlertTriangle className="w-4 h-4" /> {t.limitationLabel}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{isMy ? activeStage.limitationMy : activeStage.limitation}</p>
                    </div>
                  </div>

                  {/* Scenario Tester Box */}
                  <div className="mt-8 bg-black rounded-2xl p-6 border border-white/10 shadow-inner">
                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.scenarioLabel}</span>
                      <span className="text-xs px-3 py-1 bg-white/10 rounded-lg text-gray-300 font-medium">{t.scenarioPrompt}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/5 ${activeStage.textColor}`}>
                         <Bot className="w-5 h-5" />
                      </div>
                      <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-gray-200 border border-white/10 leading-relaxed">
                        {isMy ? activeStage.scenarioOutputMy : activeStage.scenarioOutput}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* AI Five-Layer Cake Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-[40px] p-8 md:p-12 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Cake className="w-4 h-4" />
                  <span>{isMy ? "AI အလွှာ ၅ ဆင့်" : "AI Five-Layer Cake"}</span>
                </div>
                <h2 className={`text-3xl md:text-4xl font-black text-white mb-6 ${isMy ? 'leading-myanmar' : ''}`}>
                  {t.cakeTitle}
                </h2>
                <p className="text-indigo-200/80 text-lg leading-relaxed mb-8">
                  {t.cakeDescription}
                </p>
                <a 
                  href="https://ai-5-layers.pages.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-black"
                >
                  {t.cakeLinkBtn}
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
              
              <div className="lg:w-1/2 w-full">
                {/* Visual representation of layers */}
                <div className="space-y-3 w-full">
                  {[
                    { id: 5, name: "Applications", nameMy: "အက်ပ်များ", summary: "The final product we use", summaryMy: "ကျွန်ုပ်တို့ လက်တွေ့အသုံးပြုနေသည့် အက်ပ်များ", color: "bg-pink-500/20 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.1)]", icon: <Layout className="w-4 h-4 text-pink-400" /> },
                    { id: 4, name: "AI Models", nameMy: "AI မော်ဒယ်များ", summary: "The core intelligence", summaryMy: "အဓိက ဉာဏ်ရည်နှင့် စဉ်းစားတွေးခေါ်မှု", color: "bg-purple-500/20 border-purple-500/40", icon: <BrainCircuit className="w-4 h-4 text-purple-400" /> },
                    { id: 3, name: "Cloud", nameMy: "Cloud စနစ်", summary: "Where models live and learn", summaryMy: "မော်ဒယ်များကို သိမ်းဆည်းပြီး လေ့ကျင့်ပေးသည့် စနစ်", color: "bg-indigo-500/20 border-indigo-500/40", icon: <Cloud className="w-4 h-4 text-indigo-400" /> },
                    { id: 2, name: "Chips", nameMy: "ချစ်ပ်ပြားများ", summary: "GPUs for processing data", summaryMy: "အချက်အလက်များကို တွက်ချက်ပေးသည့် GPU များ", color: "bg-blue-500/20 border-blue-500/40", icon: <Cpu className="w-4 h-4 text-blue-400" /> },
                    { id: 1, name: "Energy", nameMy: "စွမ်းအင်", summary: "Powering the data centers", summaryMy: "ဒေတာစင်တာများအတွက် လိုအပ်သော စွမ်းအင်", color: "bg-cyan-500/20 border-cyan-500/40", icon: <Zap className="w-4 h-4 text-cyan-400" /> }
                  ].map((layer) => (
                    <div 
                      key={layer.id}
                      className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.02] ${layer.color}`}
                    >
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-black/60 flex items-center justify-center border border-white/10 shrink-0 shadow-inner">
                          {layer.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-white/40 bg-white/5 px-1.5 rounded border border-white/5 uppercase tracking-tighter">Layer {layer.id}</span>
                              <span className="text-sm font-bold text-white">{isMy ? layer.nameMy : layer.name}</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-gray-300 leading-tight">
                            {isMy ? layer.summaryMy : layer.summary}
                          </p>
                        </div>
                      </div>
                      {/* Progress bar background animation */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-white/10"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: (6 - layer.id) * 0.1 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highest Form of Intelligence Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-[40px] p-8 md:p-12 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Brain className="w-4 h-4" />
                  <span>{isMy ? "အာရုံကြောသိပ္ပံနှင့် AI" : "Neuroscience & AI"}</span>
                </div>
                <h2 className={`text-3xl md:text-4xl font-black text-white mb-6 ${isMy ? 'leading-myanmar' : ''}`}>
                  {t.intelligenceTitle}
                </h2>
                <p className="text-emerald-200/80 text-lg leading-relaxed mb-8">
                  {t.intelligenceDescription}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-500/20 rounded-md">
                      <Activity className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-sm text-gray-300">{t.intelligencePoint1}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-500/20 rounded-md">
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-sm text-gray-300">{t.intelligencePoint2}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-500/20 rounded-md">
                      <Lightbulb className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-sm text-gray-300">{t.intelligencePoint3}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://highest-form-of-intelligence.pages.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-600/20 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-black"
                  >
                    {t.intelligenceLearnMore}
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <button 
                    onClick={() => setIsIntelligenceModalOpen(true)}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold border border-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-black"
                  >
                    <BookOpen className="w-5 h-5" />
                    {t.intelligenceDetailBtn}
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <BrainCircuit className="w-32 h-32 text-emerald-500/40" />
                  </motion.div>
                  
                  {/* Floating DNA/Activity icons for visual flair */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/4 left-1/4 p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/40"
                  >
                    <Dna className="w-6 h-6 text-emerald-400" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 p-3 bg-teal-500/20 rounded-2xl border border-teal-500/40"
                  >
                    <Activity className="w-6 h-6 text-teal-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <section className="bg-blue-600/10 border border-blue-500/20 rounded-[40px] p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3 text-white">
            <Briefcase className="w-6 h-6 text-blue-500" />
            {t.impactTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center hover:border-red-500/30 transition-colors group">
              <div className="text-4xl font-black text-red-500 mb-3 group-hover:scale-110 transition-transform">{isMy ? 'သန်း ၃၀၀' : '300M'}</div>
              <p className="text-sm text-gray-300 leading-relaxed">{t.impact1}</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center hover:border-emerald-500/30 transition-colors group">
              <div className="text-4xl font-black text-emerald-500 mb-3 group-hover:scale-110 transition-transform">{isMy ? '+ ၇၈ သန်း' : '+78M'}</div>
              <p className="text-sm text-gray-300 leading-relaxed">{t.impact2}</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500/30 transition-colors group">
              <div className="text-4xl font-black text-blue-500 mb-3 group-hover:scale-110 transition-transform">{isMy ? '+ ၂၅%' : '+25%'}</div>
              <p className="text-sm text-gray-300 leading-relaxed">{t.impact3}</p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 text-center shadow-xl shadow-blue-600/20">
            <h3 className="text-xl font-bold text-white mb-3">{t.conclusionTitle}</h3>
            <p className="text-blue-100/90 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
              {t.conclusionBody}
            </p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="mt-8 px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-blue-600"
            >
              {t.quizBtn}
            </button>
          </div>
        </section>

        <CompleteButton onComplete={onComplete} language={language} isUnlocked={isUnlocked} />
      </div>

      {/* Detailed Explanation Modal */}
      {isIntelligenceModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zinc-900 border border-emerald-500/30 rounded-[32px] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-emerald-900/10">
              <div className="flex items-center gap-3">
                <Brain className="w-6 h-6 text-emerald-400" />
                <h2 className="text-xl font-bold text-white">{t.intelligenceModalTitle}</h2>
              </div>
              <button 
                onClick={() => setIsIntelligenceModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-8 space-y-10 custom-scrollbar">
              <p className="text-lg text-emerald-100/90 leading-relaxed font-medium italic">
                "{t.intelligenceModalIntro}"
              </p>

              <div className="space-y-8">
                <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.intelligenceSection1Title}</h3>
                  <p className="text-gray-300 leading-relaxed">{t.intelligenceSection1Body}</p>
                </section>

                <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.intelligenceSection2Title}</h3>
                  <p className="text-gray-300 leading-relaxed">{t.intelligenceSection2Body}</p>
                </section>

                <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.intelligenceSection3Title}</h3>
                  <p className="text-gray-300 leading-relaxed">{t.intelligenceSection3Body}</p>
                </section>

                <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.intelligenceSection4Title}</h3>
                  <p className="text-gray-300 leading-relaxed">{t.intelligenceSection4Body}</p>
                </section>
              </div>

              <div className="bg-emerald-600/20 border border-emerald-500/30 p-6 rounded-2xl text-center">
                <p className="text-emerald-100 font-bold">{t.intelligenceModalSummary}</p>
              </div>
            </div>

            <div className="p-6 border-t border-white/10 flex justify-end bg-zinc-900">
              <button 
                onClick={() => setIsIntelligenceModalOpen(false)}
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
