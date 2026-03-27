
import { Brain, Target, UserRound, Eye, Heart } from 'lucide-react';
import { CurriculumModule, QuizQuestion, Language, QuizSet } from './types';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'curriculum', label: 'Curriculum' },
] as const;

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    icon: Brain,
    title: "AI as a Trainer",
    titleMy: "AI ကို ကိုယ်ပိုင်နည်းပြ (Trainer) အဖြစ် အသုံးချခြင်း",
    description: "Stop treating AI as a crutch to get work done. Use it to strengthen your own mental muscles.",
    descriptionMy: "AI ကို အလုပ်ပြီးရုံသက်သက် 'တုတ်ကောက်' (Crutch) အဖြစ် မဟုတ်ဘဲ မိမိကိုယ်တိုင် ပိုမိုတော်လာစေမည့် 'ကိုယ်ပိုင်နည်းပြ' (Trainer) အဖြစ် အသုံးပြုပါ။",
    points: [
      "Personalized learning (The Ronaldo Method)",
      "Feedback loops for skill mastery",
      "Moving from 15% to 100% output"
    ],
    pointsMy: [
      "ကိုယ်ပိုင်သင်ယူမှုပုံစံ (The Ronaldo Method)",
      "ကျွမ်းကျင်မှုအတွက် တုံ့ပြန်ချက် (Feedback) ရယူခြင်း",
      "ရလဒ် ၁၀၀% ထွက်ရှိသည်အထိ လေ့ကျင့်ခြင်း"
    ],
    extendedContent: {
      title: "Strategic Shift: From Operator to Director",
      titleMy: "မဟာဗျူဟာမြောက် အပြောင်းအလဲ- Doer မှ Director သို့",
      body: "AI era leadership means using AI not as a dependency, but as a trainer to sharpen your mind. For example, teaching a child physics through the lens of Cristiano Ronaldo's kicks using AI makes learning more engaging and precise. As a leader, AI won't weaken your thinking; it will help you devise deeper strategies by acting as an 'Executive Force Multiplier'.",
      bodyMy: "AI ခေတ်တွင် ခေါင်းဆောင်မှုဆိုသည်မှာ AI ကို အမှီသဟဲပြုခြင်း (Crutch) မဟုတ်ဘဲ၊ မိမိကိုယ်ကို ပိုမိုထက်မြက်အောင် လေ့ကျင့်ပေးသည့် 'Trainer' အဖြစ် အသုံးချခြင်းဖြစ်သည်။ ဥပမာအားဖြင့်၊ ကလေးငယ်တစ်ဦးအား ရူပဗေဒ (Physics) ဘာသာရပ်ကို သင်ကြားရာတွင် ၎င်းစိတ်ဝင်စားသည့် ခရစ်စတီယာနို ရော်နယ်ဒို (Ronaldo) ၏ ဘောလုံးကန်ချက်များမှတစ်ဆင့် AI ကို \"Lens\" တစ်ခုသဖွယ် အသုံးပြု၍ သင်ကြားစေခြင်းက ၎င်း၏ သင်ယူလိုစိတ်နှင့် ဉာဏ်ရည်ကို ပိုမိုထက်မြက်စေသည်။ ခေါင်းဆောင်တစ်ဦးအနေဖြင့် AI သည် သင်၏ စဉ်းစားတွေးခေါ်မှုကို အားနည်းစေမည်မဟုတ်ဘဲ၊ ပိုမိုနက်ရှိုင်းသော မဟာဗျူဟာများကို ချမှတ်နိုင်ရန် ကူညီပေးမည့် 'Executive Force Multiplier' ဖြစ်ပါသည်။"
    }
  },
  {
    icon: Target,
    title: "The Power of Taste",
    titleMy: "ထူးချွန်မှုကို ခွဲခြားသိမြင်နိုင်စွမ်း (The Power of Taste)",
    description: "AI produces infinite output. Your job is to curate excellence through pattern recognition.",
    descriptionMy: "AI သည် အကန့်အသတ်မရှိ ထုတ်လုပ်ပေးနိုင်သော်လည်း သင်၏အလုပ်မှာ ပုံစံများ (Patterns) ကိုသုံး၍ အကောင်းဆုံးရလဒ်ကို ရွေးချယ်ရန်ဖြစ်သည်။",
    points: [
      "Proximity is Power: Get near excellence",
      "Study the Masters of your craft",
      "Analyze why something is 'Good'"
    ],
    pointsMy: [
      "Proximity is Power: ထူးချွန်သူများနှင့် နီးကပ်စွာနေခြင်း",
      "မိမိနယ်ပယ်ရှိ မာစတာ (Masters) များကို လေ့လာခြင်း",
      "မည်သည့်အရာက 'အဆင့်အတန်းမြင့်သည်' ကို ခွဲခြားခြင်း"
    ],
    extendedContent: {
      title: "Cultivating Taste: The Standard of Excellence",
      titleMy: "Taste ကို ပျိုးထောင်ခြင်း- ထူးချွန်မှုကို ခွဲခြားသိမြင်နိုင်သော အခြေခံအုတ်မြစ်",
      body: "In the AI era, 'Taste' is more critical than technical skill. Like producer Rick Rubin, who can't play instruments but knows what excellence sounds like, leaders must spot patterns of greatness. The higher your taste, the more precise your prompts. Immerse in excellence, study the masters' blueprints, and always analyze the 'Why' behind successful patterns.",
      bodyMy: "AI ခေတ်တွင် နည်းပညာပိုင်းဆိုင်ရာ ကျွမ်းကျင်မှုထက် 'အရသာ (Taste)' သည် အရေးပါဆုံးသော ကျွမ်းကျင်မှုဖြစ်လာသည်။ ကမ္ဘာကျော် ဂီတထုတ်လုပ်သူ Rick Rubin ကဲ့သို့ပင်၊ ၎င်းသည် တူရိယာတစ်ခုကိုမျှ တီးခတ်ခြင်း မပြုနိုင်သော်လည်း မည်သည့်အရာက 'ထူးချွန်သည်'၊ မည်သည့်အရာက 'လူကြိုက်များမည်' ဆိုသည်ကို ချက်ချင်း သိမြင်နိုင်သည်။ ထူးချွန်မှု (Excellence) ဆိုသည်မှာ ကျပန်းဖြစ်ပေါ်လာခြင်းမဟုတ်ဘဲ ခွဲခြားသိမြင်နိုင်သော ပုံစံ (Pattern) တစ်ခုဖြစ်သည်။ သင်၏ အရသာ ပိုမိုမြင့်မားလာလေ၊ AI ကို ပေးရမည့် လမ်းညွှန်ချက် (Prompt) များသည် ပိုမိုတိကျကာ ရလဒ်ကောင်းများ ထွက်ပေါ်လာလေဖြစ်သည်။"
    }
  },
  {
    icon: Eye,
    title: "Vision Muscle",
    titleMy: "အနာဂတ်ကို ကြိုတင်ပုံဖော်နိုင်စွမ်း (Vision Muscle)",
    description: "Use AI as your Research Copilot to see around corners and spot future opportunities.",
    descriptionMy: "AI ကို Research Copilot အဖြစ်သုံး၍ အနာဂတ်၏ အလားအလာများကို ဒေတာအချက်အလက်များဖြင့် ပုံဖော်ပါ။",
    points: [
      "Dedicated Thinking Time",
      "Cross-industry innovation patterns",
      "AI Pressure Testing of ideas"
    ],
    pointsMy: [
      "တွေးတောရန် သီးသန့်အချိန် (Thinking Time) ပေးခြင်း",
      "နယ်ပယ်ကျော်လွန်၍ ဆန်းသစ်မှုပုံစံများကို လေ့လာခြင်း",
      "AI ဖြင့် မိမိအယူအဆကို ဖိအားပေးစမ်းသပ်ခြင်း (Pressure Testing)"
    ],
    extendedContent: {
      title: "AI as a Research Co-pilot",
      titleMy: "AI အား သုတေသနတွဲဖက် (Research Co-pilot) အဖြစ် အသုံးပြုခြင်း",
      body: "A leader's job is to see 18 months ahead. AI frees up cognitive space by analyzing massive datasets. Tools like Grok can execute 100 research agents simultaneously. Use deep thinking time to discuss scenario projections with AI, study cross-industry breakouts (like Henry Ford studied meat packers to invent the assembly line), and pressure-test your assumptions.",
      bodyMy: "ခေါင်းဆောင်တစ်ဦး၏ တာဝန်မှာ အနည်းဆုံး (၁၈) လခန့် အနာဂတ်ကို ကြိုတင်မြင်နိုင်ရန် (Looking around corners) ဖြစ်သည်။ AI သည် ဒေတာများကို ခွဲခြမ်းစိတ်ဖြာပေးခြင်းဖြင့် ခေါင်းဆောင်အား \"Vision Muscle\" တည်ဆောက်ရန်အတွက် နေရာလွတ် (Space) ပေးသည်။ Grok ကဲ့သို့သော AI Tools များသည် တစ်ပြိုင်နက်တည်းတွင် AI ပေါင်း (၁၀၀) ခန့်ကို အသုံးပြု၍ သုတေသနလုပ်ပေးနိုင်သဖြင့် ခေါင်းဆောင်တစ်ဦးအနေဖြင့် ယုံကြည်မှုအပြည့်ဖြင့် ဆုံးဖြတ်ချက်များကို ချမှတ်နိုင်သည်။ အပတ်စဉ် Thinking Time သတ်မှတ်၍ AI နှင့် အနာဂတ်ဖြစ်ရပ်များကို တိုင်ပင်ပါ။"
    }
  },
  {
    icon: Heart,
    title: "The Care Factor",
    titleMy: "မတုပနိုင်သော လူသားချင်းစာနာမှု (The Care Factor)",
    description: "In an era of infinite AI speed, genuine human care is the ultimate scarce resource.",
    descriptionMy: "AI ခေတ်တွင် အရှိန်အဟုန်သည် အကန့်အသတ်မရှိသော်လည်း စစ်မှန်သော 'ဂရုစိုက်မှု' (Care) သည်သာ အရှားပါးဆုံး အရင်းအမြစ်ဖြစ်သည်။",
    points: [
      "Aligning company goals with human dreams",
      "Praise in public, coach in private",
      "Care as the ultimate business input"
    ],
    pointsMy: [
      "ကုမ္ပဏီရည်မှန်းချက်နှင့် လူသားအိပ်မက်ကို ချိတ်ဆက်ခြင်း",
      "လူသိရှင်ကြား ချီးကျူးဂုဏ်ပြုခြင်း (Praise in public)",
      "ဂရုစိုက်မှုကို အဓိက အရင်းအမြစ်အဖြစ် သတ်မှတ်ခြင်း"
    ],
    extendedContent: {
      title: "The Humanity Edge: Leading with Care",
      titleMy: "လူသားဆန်မှု၏ အားသာချက်- ဂရုစိုက်မှုဖြင့် ဦးဆောင်ခြင်း",
      body: "In a world of infinite outputs, care is the ultimate input. AI can mimic intelligence but not genuine care—treating others' needs as your own. Amazon became a giant by sharing 92% of profits to make others wealthy. Show care by aligning team dreams with company goals, asking for feedback (valuing their input), and praising excellence in public while coaching in private.",
      bodyMy: "\"Output များ အကန့်အသတ်မရှိ ထွက်ပေါ်နေသော ကမ္ဘာကြီးတွင်၊ ဂရုစိုက်မှု (Care) သည် တန်ဖိုးအရှိဆုံး Input ဖြစ်သည်\"။ AI သည် ဉာဏ်ရည်ကို တုပနိုင်သော်လည်း စစ်မှန်သော ဂရုစိုက်မှုကို မတုပနိုင်ပါ။ ဂရုစိုက်မှုဆိုသည်မှာ အခြားသူများ၏ လိုအပ်ချက်ကို မိမိလိုအပ်ချက်ကဲ့သို့ မှတ်ယူခြင်းဖြစ်သည်။ ခေါင်းဆောင်တစ်ဦးအနေဖြင့် အဖွဲ့ဝင်များ၏ ၅ နှစ်တာ အိပ်မက်နှင့် ကုမ္ပဏီရည်မှန်းချက်ကို ချိတ်ဆက်ပေးပါ။ အောင်မြင်မှုများကို အများပြည်သူရှေ့တွင် ဂုဏ်ပြုချီးကျူးပါ (Praise in public)။"
    }
  },
  {
    icon: UserRound,
    title: "The Director Mindset",
    titleMy: "Director Mindset (၁၀/၈၀/၁၀ စည်းမျဉ်း)",
    description: "Transition from Doer to Director. Manage AI agents like a world-class team.",
    descriptionMy: "အလုပ်ကို ကိုယ်တိုင်လုပ်သူ (Doer) အဖြစ်မှ AI အဖွဲ့သားများကို ဦးဆောင်သည့် 'Director' တစ်ဦးအဖြစ်သို့ ကူးပြောင်းပါ။",
    points: [
      "The 10/80/10 Rule of Execution",
      "Pull Prompting: Let AI ask the questions",
      "AI-First Workflows for every task"
    ],
    pointsMy: [
      "၁၀/၈၀/၁၀ (10/80/10 Rule) လုပ်ငန်းစဉ် နည်းလမ်း",
      "Pull Prompting: AI ကို ပြန်လည်မေးခွန်းထုတ်ခိုင်းခြင်း",
      "AI-First လုပ်ငန်းခွင် စီးဆင်းမှု (Workflows) များ"
    ],
    extendedContent: {
      title: "The 10/80/10 Rule for AI Orchestration",
      titleMy: "၁၀/၈၀/၁၀ စည်းမျဉ်း- AI ကို လက်တွေ့အသုံးချ၍ စီမံခန့်ခွဲမှုပုံစံ",
      body: "Goal: Automate 92% of work. 10% Ideation (You direct), 80% AI Execution (AI works tirelessly), 10% Integration & Taste (Human polish). Practice 'Pull Prompting'—tell AI the goal and ask 'What do you need from me to achieve this?' AI often has more context than you realize; let it pull information from you for superior results.",
      bodyMy: "ခေါင်းဆောင်တစ်ဦး၏ အန္တိမရည်မှန်းချက်မှာ မိမိ၏အလုပ် ၉၂% ကို AI ဖြင့် အစားထိုးနိုင်ရန် (Automate) နှင့် မိမိကိုယ်တိုင် \"Director\" အဖြစ် ရပ်တည်ရန် ဖြစ်သည်။ ပထမ ၁၀% (Ideation) ခေါင်းဆောင်က စိတ်ကူးပေးခြင်း၊ အလယ် ၈၀% (AI Execution) AI ကို အသုံးပြု၍ အလုပ်များကို လက်တွေ့လုပ်ဆောင်စေခြင်း၊ နောက်ဆုံး ၁၀% (Integration & Taste) လူသား၏ 'Taste' ကို အသုံးပြု၍ အချောသတ်ခြင်း။ \"Pull Prompting\" ဗျူဟာကို ကျင့်သုံးပါ။"
    }
  }
];

export const PILLAR_QUIZ: QuizSet = {
  id: "learning-path-mastery",
  title: "Mastering the 5 Pillars of AI-Augmented Leadership",
  titleMy: "AI ခေတ် ခေါင်းဆောင်မှု အခြေခံကျောက်တိုင် ၅ ခု ကျွမ်းကျင်မှု စစ်ဆေးချက်",
  questions: [
    {
      q: "According to the framework, what does 'Director Mindset' primarily mean?",
      qMy: "ဤ Framework အရ 'Director Mindset' ဆိုသည်မှာ အဓိကအားဖြင့် အဘယ်နည်း?",
      options: [
        { text: "Managing AI agents like a world-class team", textMy: "AI အဖွဲ့သားများကို ကမ္ဘာ့အဆင့်မီ အဖွဲ့တစ်ခုကဲ့သို့ စီမံခန့်ခွဲခြင်း။", value: 10 },
        { text: "Doing all the work yourself to ensure quality", textMy: "အရည်အသွေးစိတ်ချရရန် အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်ခြင်း။", value: 0 },
        { text: "Avoiding AI to maintain human control", textMy: "လူသား၏ ထိန်းချုပ်မှုကို ထိန်းသိမ်းရန် AI ကို ရှောင်ဖယ်ခြင်း။", value: 0 },
        { text: "Learning to code complex software", textMy: "ရှုပ်ထွေးသော ဆော့ဖ်ဝဲလ်များကို ကုဒ်ရေးတတ်အောင် သင်ယူခြင်း။", value: 0 }
      ],
      hint: "It involves orchestration, not manual execution.",
      hintMy: "၎င်းသည် ကိုယ်တိုင်လုပ်ခြင်းမဟုတ်ဘဲ စနစ်တကျ စီမံခန့်ခွဲခြင်း ဖြစ်သည်။",
      explanation: "A Director orchestrates the process rather than doing the manual labor, allowing AI to handle the bulk of execution.",
      explanationMy: "Director တစ်ဦးသည် အလုပ်များကို ကိုယ်တိုင်လုပ်မည့်အစား လုပ်ငန်းစဉ်များကို စီမံခန့်ခွဲပြီး AI ကို အလုပ်အများစု လုပ်ဆောင်စေသည်။"
    },
    {
      q: "What is the 10/80/10 rule of execution?",
      qMy: "၁၀/၈၀/၁၀ စည်းမျဉ်းဆိုသည်မှာ အဘယ်နည်း?",
      options: [
        { text: "10% Ideation, 80% AI Execution, 10% Taste & Integration", textMy: "၁၀% စိတ်ကူး၊ ၈၀% AI ဖြင့် လုပ်ဆောင်ခြင်း၊ ၁၀% အချောသတ်ခြင်း။", value: 10 },
        { text: "10% Coding, 80% Testing, 10% Launching", textMy: "၁၀% ကုဒ်ရေးခြင်း၊ ၈၀% စမ်းသပ်ခြင်း၊ ၁၀% ထုတ်လွှင့်ခြင်း။", value: 0 },
        { text: "10% Human, 80% Robot, 10% Machine", textMy: "၁၀% လူ၊ ၈၀% ရိုဘော့၊ ၁၀% စက်။", value: 0 },
        { text: "80% Work, 20% Profit", textMy: "၈၀% အလုပ်၊ ၂၀% အမြတ်။", value: 0 }
      ],
      hint: "The middle portion is where the 'Heavy Lifting' happens.",
      hintMy: "အလယ်ပိုင်းသည် အလုပ်အများဆုံး လုပ်ဆောင်သည့် နေရာဖြစ်သည်။",
      explanation: "Human starts with 10% ideation, AI handles 80% execution, and Human finishes with 10% quality filter and taste.",
      explanationMy: "လူက ၁၀% စိတ်ကူးပေးပြီး AI က ၈၀% လက်တွေ့လုပ်ဆောင်ကာ နောက်ဆုံး ၁၀% ကို လူ၏ Taste ဖြင့် အချောသတ်သည်။"
    },
    {
      q: "Who is mentioned as an example of having 'Taste' without technical skills?",
      qMy: "နည်းပညာပိုင်း မကျွမ်းကျင်သော်လည်း 'Taste' (အရသာခံနိုင်စွမ်း) ရှိသူအဖြစ် မည်သူ့ကို ဥပမာပေးခဲ့သနည်း?",
      options: [
        { text: "Rick Rubin (Music Producer)", textMy: "Rick Rubin (ဂီတထုတ်လုပ်သူ)", value: 10 },
        { text: "Bill Gates", textMy: "Bill Gates", value: 0 },
        { text: "Cristiano Ronaldo", textMy: "Cristiano Ronaldo", value: 0 },
        { text: "Henry Ford", textMy: "Henry Ford", value: 0 }
      ],
      hint: "A legendary producer who can't play an instrument but knows 'Good'.",
      hintMy: "တူရိယာမတီးတတ်သော်လည်း မည်သည်က 'ကောင်းသည်' ကို သိသော ဒဏ္ဍာရီလာ ထုတ်လုပ်သူ ဖြစ်သည်။",
      explanation: "Rick Rubin cannot play instruments but has elite 'Taste' to recognize a hit song, much like an AI Director recognizes elite output.",
      explanationMy: "Rick Rubin သည် တူရိယာမတီးတတ်သော်လည်း မည်သည့်အရာက 'ကောင်းသည်' ကို သိမြင်နိုင်စွမ်း (Taste) ရှိသူ ဖြစ်သည်။"
    },
    {
        q: "In the AI Era, 'Taste' is defined as the ability to:",
        qMy: "AI ခေတ်တွင် 'Taste' (အရသာခံနိုင်စွမ်း) ကို မည်သို့ အဓိပ္ပါယ်ဖွင့်ဆိုသနည်း?",
        options: [
          { text: "Recognize patterns of excellence instantly", textMy: "ထူးချွန်မှု (Excellence) ပုံစံများကို ချက်ချင်း ခွဲခြားသိမြင်နိုင်ခြင်း။", value: 10 },
          { text: "Type prompts as fast as possible", textMy: "Prompt များကို အမြန်ဆုံး ရိုက်နိုင်ခြင်း။", value: 0 },
          { text: "Design beautiful logos in Photoshop", textMy: "Photoshop တွင် လှပသော logo များ ဆွဲခြင်း။", value: 0 },
          { text: "Memorize thousands of AI models", textMy: "AI models ထောင်ပေါင်းများစွာကို အလွတ်ကျက်ခြင်း။", value: 0 }
        ],
        hint: "It's about curation and quality identification.",
        hintMy: "၎င်းမှာ အရည်အသွေးကို စစ်ဆေးရွေးချယ် (Curation) ခြင်း ဖြစ်သည်။",
        explanation: "Taste is the capacity to identify what is truly high-quality versus what is generic output.",
        explanationMy: "Taste ဆိုသည်မှာ သာမန်ရလဒ်နှင့် ထူးချွန်သော ရလဒ်ကို ခွဲခြားသိမြင်နိုင်စွမ်း ဖြစ်သည်။"
    },
    {
        q: "What is the 'Vision Muscle' used for?",
        qMy: "'Vision Muscle' ကို မည်သည့်နေရာတွင် အသုံးချသနည်း?",
        options: [
          { text: "Seeing around corners and predicting future opportunities", textMy: "အနာဂတ် အခွင့်အလမ်းများကို ကြိုတင်မြင်နိုင်ရန် (Looking around corners)။", value: 10 },
          { text: "Improving your eyesight for reading screens", textMy: "မျက်စိအားကောင်းစေရန်။", value: 0 },
          { text: "Building faster computer monitors", textMy: "ပိုမြန်သော monitor များ တည်ဆောက်ရန်။", value: 0 },
          { text: "Learning how to use VR glasses", textMy: "VR မျက်မှန် သုံးတတ်ရန်။", value: 0 }
        ],
        hint: "Leaders must look 18 months ahead.",
        hintMy: "ခေါင်းဆောင်များသည် အနည်းဆုံး ၁၈ လ ကြိုမြင်ရမည်။",
        explanation: "Vision muscle is the practice of looking ahead and using AI as a research co-pilot to test future scenarios.",
        explanationMy: "Vision muscle ဆိုသည်မှာ AI ကို သုတေသနလက်တွဲဖော် (Research Co-pilot) အဖြစ် သုံးပြီး အနာဂတ် ဖြစ်နိုင်ခြေများကို ကြိုတင်တွက်ချက်ခြင်း ဖြစ်သည်။"
    },
    {
        q: "How did Henry Ford demonstrate 'Vision Muscle' without AI?",
        qMy: "Henry Ford သည် AI မရှိခင်က 'Vision Muscle' ကို မည်သို့ ပြသခဲ့သနည်း?",
        options: [
          { text: "By studying meat packers to invent the assembly line", textMy: "အသားထုတ်လုပ်ရေး လုပ်ငန်းကို လေ့လာပြီး assembly line ကို တီထွင်ခြင်း။", value: 10 },
          { text: "By driving cars all day", textMy: "တစ်နေ့လုံး ကားမောင်းခြင်း။", value: 0 },
          { text: "By ignoring other industries", textMy: "အခြားလုပ်ငန်းများကို လျစ်လျူရှုခြင်း။", value: 0 },
          { text: "By working 20 hours a day", textMy: "တစ်နေ့ နာရီ ၂၀ အလုပ်လုပ်ခြင်း။", value: 0 }
        ],
        hint: "He looked at cross-industry innovation patterns.",
        hintMy: "သူသည် အခြားလုပ်ငန်းများမှ တီထွင်ဆန်းသစ်မှု ပုံစံများကို လေ့လာခဲ့သည်။",
        explanation: "Ford applied patterns from the meat processing industry to automotive manufacturing, showing true vision and pattern matching.",
        explanationMy: "Henry Ford သည် အသားထုတ်လုပ်ရေးလုပ်ငန်းမှ ပုံစံများကို ကားထုတ်လုပ်ရေးတွင် အသုံးချခဲ့ခြင်း ဖြစ်သည်။"
    },
    {
        q: "In an era of infinite AI speed, what is the 'ultimate scarce resource'?",
        qMy: "AI ခေတ်တွင် အရှားပါးဆုံး အရင်းအမြစ်မှာ အဘယ်နည်း?",
        options: [
          { text: "Genuine human care", textMy: "စစ်မှန်သော လူသားချင်း စာနာဂရုစိုက်မှု။", value: 10 },
          { text: "Processing power (GPUs)", textMy: "ကွန်ပျူတာ စွမ်းဆောင်ရည်။", value: 0 },
          { text: "Internet speed", textMy: "အင်တာနက် အမြန်နှုန်း။", value: 0 },
          { text: "Free email accounts", textMy: "အခမဲ့ အီးမေးလ် အကောင့်များ။", value: 0 }
        ],
        hint: "AI can mimic intelligence, but not empathy.",
        hintMy: "AI က ဉာဏ်ရည်ကို တုပနိုင်သော်လည်း စာနာမှုကို မတုပနိုင်ပါ။",
        explanation: "AI can provide infinite content, but sincere care and high-impact relationships remain irreplaceable human values.",
        explanationMy: "AI သည် ရလဒ်ပေါင်းများစွာ ပေးနိုင်သော်လည်း စစ်မှန်သော ဂရုစိုက်မှုမှာ လူသားတို့သာ လုပ်ဆောင်နိုင်သည်။"
    },
    {
        q: "What is the Amazon example mentioned regarding 'Care'?",
        qMy: "ဂရုစိုက်မှု (Care) နှင့် ပတ်သက်၍ Amazon ၏ မည်သည့် ဥပမာကို ဖော်ပြခဲ့သနည်း?",
        options: [
          { text: "Sharing profits to make others wealthy", textMy: "အခြားသူများကို ချမ်းသာစေရန် အမြတ်ငွေများကို မျှဝေခြင်း။", value: 10 },
          { text: "Building the world's fastest delivery network", textMy: "အမြန်ဆုံး ပို့ဆောင်ရေး ကွန်ရက် တည်ဆောက်ခြင်း။", value: 0 },
          { text: "Selling books online", textMy: "အွန်လိုင်းမှ စာအုပ်ရောင်းခြင်း။", value: 0 },
          { text: "Using AI for every single employee", textMy: "ဝန်ထမ်းတိုင်းအတွက် AI သုံးခြင်း။", value: 0 }
        ],
        hint: "It's about aligning goals with the prosperity of others.",
        hintMy: "၎င်းမှာ အခြားသူများ၏ အောင်မြင်မှုကို မိမိအောင်မြင်မှုအဖြစ် မှတ်ယူခြင်း ဖြစ်သည်။",
        explanation: "Amazon succeeded by caring about the financial success of its partners/sellers, sharing a massive chunk of profit to grow the ecosystem.",
        explanationMy: "Amazon သည် ၎င်း၏ မိတ်ဖက်များ အောင်မြင်ရန် ဂရုစိုက်ပေးခြင်းဖြင့် အောင်မြင်လာခြင်း ဖြစ်သည်။"
    },
    {
        q: "What is 'Pull Prompting'?",
        qMy: "'Pull Prompting' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Asking the AI what information it needs from you", textMy: "AI ကို သင့်ထံမှ မည်သည့်အချက်အလက် လိုသနည်းဟု ပြန်မေးခိုင်းခြင်း။", value: 10 },
          { text: "Pulling data from a spreadsheet into AI", textMy: "ဇယားကွက်များမှ ဒေတာများကို AI ထဲသို့ ဆွဲထည့်ခြင်း။", value: 0 },
          { text: "Deleting prompts you don't like", textMy: "မကြိုက်သော prompt များကို ဖျက်ပစ်ခြင်း။", value: 0 },
          { text: "Pushing as many keywords as possible into one prompt", textMy: "Keyword အမြောက်အမြားကို prompt တစ်ခုတည်းထဲ ထည့်ခြင်း။", value: 0 }
        ],
        hint: "Let the AI lead the discovery of missing context.",
        hintMy: "AI ကိုယ်တိုင် လိုအပ်ချက်များကို ရှာဖွေပါစေ။",
        explanation: "Instead of guessing what to provide, ask the AI 'What do you need from me to achieve this goal?' to pull superior context from you.",
        explanationMy: "ဘာပြောရမလဲဟု ခန့်မှန်းမည့်အစား AI အား 'ဒါကိုလုပ်ဖို့ ဘာတွေလိုသလဲ' ဟု ပြန်မေးခိုင်းခြင်း ဖြစ်သည်။"
    },
    {
        q: "How does the 'AI as Trainer' mindset help avoid becoming 'dumb'?",
        qMy: "'AI ကို လေ့ကျင့်ပေးသူ' အဖြစ် သုံးခြင်းက ဉာဏ်ထိုင်းမသွားအောင် မည်သို့ ကူညီပေးသနည်း?",
        options: [
          { text: "By using AI to critique and explain concepts to you", textMy: "AI အား သင့်ကို ပြန်လည် ဝေဖန်ခိုင်းခြင်းနှင့် ရှင်းပြခိုင်းခြင်း။", value: 10 },
          { text: "By letting AI do 100% of the work", textMy: "အလုပ် ၁၀၀% လုံးကို AI ကို လုပ်ခိုင်းခြင်း။", value: 0 },
          { text: "By using AI only once a week", textMy: "တစ်ပတ်လျှင် တစ်ကြိမ်သာ AI သုံးခြင်း။", value: 0 },
          { text: "By ignoring AI's suggestions", textMy: "AI ၏ အကြံပြုချက်များကို လျစ်လျူရှုခြင်း။", value: 0 }
        ],
        hint: "Use it to sharpen your mind, not replace it.",
        hintMy: "၎င်းကို ဦးနှောက် အစားထိုးရန်မဟုတ်ဘဲ ပိုထက်မြက်ရန် သုံးပါ။",
        explanation: "AI becomes a sparring partner that asks you difficult questions or roleplays scenarios, forcing you to think harder.",
        explanationMy: "AI ကို သင့်အား မေးခွန်းခက်ခက်များ ပြန်မေးခိုင်းခြင်းဖြင့် သင့်စဉ်းစားဉာဏ်ကို ပိုမို ထက်မြက်စေသည်။"
    },
    {
        q: "What is the Ronaldo Method in the context of this training?",
        qMy: "ဤသင်တန်းတွင် 'Ronaldo Method' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Personalizing subjects (like physics) through your interests", textMy: "သင်စိတ်ဝင်စားသောအရာများဖြင့် ဘာသာရပ်များကို လေ့လာခြင်း။", value: 10 },
          { text: "Exercising like a professional athlete", textMy: "အားကစားသမား တစ်ဦးလို လေ့ကျင့်ခန်းလုပ်ခြင်း။", value: 0 },
          { text: "Learning how to kick a football using AI", textMy: "AI သုံးပြီး ဘောလုံးကန်နည်း သင်ခြင်း။", value: 0 },
          { text: "Ignoring English and Math to focus on sports", textMy: "အားကစားကိုသာ အာရုံစိုက်ရန် စာများကို လျစ်လျူရှုခြင်း။", value: 0 }
        ],
        hint: "It makes high-stakes subjects relatable to the learner.",
        hintMy: "၎င်းသည် သင်ယူသူ စိတ်ဝင်စားသောအရာနှင့် ဘာသာရပ်ကို ချိတ်ဆက်ပေးသည်။",
        explanation: "Using AI to translate complex physics into soccer analogies (like Ronaldo's kicks) makes learning faster and more effective.",
        explanationMy: "ရူပဗေဒကဲ့သို့ ခက်ခဲသော ဘာသာရပ်များကို ရော်နယ်ဒို၏ ကန်ချက်များဖြင့် ချိတ်ဆက်သင်ကြားခြင်း ဖြစ်သည်။"
    },
    {
        q: "What is an 'Executive Force Multiplier'?",
        qMy: "'Executive Force Multiplier' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "A tool that amplifies your existing strategic power", textMy: "သင့်မဟာဗျူဟာမြောက် စွမ်းအားကို မြှင့်တင်ပေးသည့် ကိရိယာ။", value: 10 },
          { text: "A math function used in calculators", textMy: "ဂဏန်းပေါင်းစက်မှ သင်္ချာ function တစ်ခု။", value: 0 },
          { text: "A military rank", textMy: "စစ်တပ် အဆင့်အတန်းတစ်ခု။", value: 0 },
          { text: "A way to duplicate yourself physically", textMy: "သင့်ကိုယ်ပိုင် ပွားခြင်း။", value: 0 }
        ],
        hint: "It scales your impact without scaling your effort linearly.",
        hintMy: "၎င်းသည် သင့်အကျိုးသက်ရောက်မှုကို များပြားစေသည်။",
        explanation: "AI acts as a multiplier by handling the scale of research and execution, allowing the leader to focus on direction.",
        explanationMy: "AI သည် သုတေသနနှင့် အလုပ်များကို ကိုင်တွယ်ပေးခြင်းဖြင့် ခေါင်းဆောင်၏ အကျိုးသက်ရောက်မှုကို မြှင့်တင်ပေးသည်။"
    },
    {
        q: "Why is 'Proximity' mentioned as important for Taste?",
        qMy: "Taste အတွက် 'နီးကပ်မှု' (Proximity) သည် အဘယ်ကြောင့် အရေးကြီးသနည်း?",
        options: [
          { text: "Getting near excellence allows you to learn the patterns", textMy: "ထူးချွန်မှုများနှင့် နီးကပ်ခြင်းက ပုံစံများကို လေ့လာနိုင်စေသည်။", value: 10 },
          { text: "It saves time on travel", textMy: "ခရီးသွားရသက်သာသည်။", value: 0 },
          { text: "It makes the internet connection faster", textMy: "အင်တာနက် ပိုမြန်စေသည်။", value: 0 },
          { text: "It allows you to use a better camera", textMy: "ပိုကောင်းသော ကင်မရာ သုံးခွင့်ရစေသည်။", value: 0 }
        ],
        hint: "You must immerse yourself in high-quality standards.",
        hintMy: "သင်သည် အရည်အသွေးမြင့် စံနှုန်းများကြားတွင် နေထိုင်ရမည်။",
        explanation: "Surrounding yourself with high-quality work (masters, blueprints) trains your brain to recognize those patterns.",
        explanationMy: "အရည်အသွေးမြင့် အလုပ်များကြားတွင် နေထိုင်ခြင်းက သင့်ဦးနှောက်ကို ထူးချွန်မှုများကို သိမြင်တတ်အောင် လေ့ကျင့်ပေးသည်။"
    },
    {
        q: "Which pillar focuses on the 'Why' behind successful patterns?",
        qMy: "မည်သည့် အခြေခံကျောက်တိုင်က အောင်မြင်သော ပုံစံများနောက်ကွယ်မှ 'ဘာကြောင့်' (Why) ကို အလေးပေးသနည်း?",
        options: [
          { text: "Taste", textMy: "Taste", value: 10 },
          { text: "Trainer", textMy: "Trainer", value: 0 },
          { text: "Vision", textMy: "Vision", value: 0 },
          { text: "Care", textMy: "Care", value: 0 }
        ],
        hint: "It involves analyzing excellence.",
        hintMy: "၎င်းသည် ထူးချွန်မှုကို ခွဲခြမ်းစိတ်ဖြာခြင်း ဖြစ်သည်။",
        explanation: "Taste is about analyzing excellence to understand why something works, allowing you to replicate it via AI.",
        explanationMy: "Taste ဆိုသည်မှာ အရာတစ်ခု အဘယ်ကြောင့် ကောင်းသည်ကို ခွဲခြမ်းစိတ်ဖြာခြင်း ဖြစ်သည်။"
    },
    {
        q: "What is the goal of the '10% Ideation' phase?",
        qMy: "'၁၀% စိတ်ကူး' (Ideation) အဆင့်၏ ပန်းတိုင်မှာ အဘယ်နည်း?",
        options: [
          { text: "To provide the spark and unique direction", textMy: "ထူးခြားသော စိတ်ကူးနှင့် လမ်းညွှန်မှု ပေးရန်။", value: 10 },
          { text: "To write all the code for the app", textMy: "App အတွက် ကုဒ်အားလုံး ရေးရန်။", value: 0 },
          { text: "To fix the bugs in the AI's work", textMy: "AI အလုပ်မှ အမှားများကို ပြင်ရန်။", value: 0 },
          { text: "To buy the domain name", textMy: "Domain ဝယ်ရန်။", value: 0 }
        ],
        hint: "This is the 'Human Start'.",
        hintMy: "၎င်းမှာ လူသားတို့၏ ပထမဦးဆုံး အစပြုခြင်း ဖြစ်သည်။",
        explanation: "Ideation is where the leader defines the 'Taste' and direction before the AI scales the work.",
        explanationMy: "Ideation သည် AI အလုပ်မလုပ်မီ ခေါင်းဆောင်က လမ်းကြောင်း သတ်မှတ်ပေးသည့် နေရာဖြစ်သည်။"
    },
    {
        q: "What does the 'Last 10%' of the 10/80/10 rule represent?",
        qMy: "၁၀/၈၀/၁၀ စည်းမျဉ်းမှ 'နောက်ဆုံး ၁၀%' သည် မည်သည်ကို ကိုယ်စားပြုသနည်း?",
        options: [
          { text: "Taste filter and final polish", textMy: "Taste filter နှင့် အချောသတ်ခြင်း။", value: 10 },
          { text: "Marketing the product", textMy: "ထုတ်ကုန်ကို ဈေးကွက်တင်ခြင်း။", value: 0 },
          { text: "Charging the customer", textMy: "ပိုက်ဆံတောင်းခြင်း။", value: 0 },
          { text: "Asking AI to start over", textMy: "AI ကို အစမှ ပြန်လုပ်ခိုင်းခြင်း။", value: 0 }
        ],
        hint: "The human ensures the output is elite.",
        hintMy: "ရလဒ်သည် ထူးချွန်ရန် လူသားက သေချာစေခြင်း ဖြစ်သည်။",
        explanation: "After AI executes the bulk, the human Director applies their 'Taste' to integrate and polish the final result.",
        explanationMy: "AI အလုပ်လုပ်ပြီးနောက် ခေါင်းဆောင်က နောက်ဆုံး အချောသတ် စစ်ဆေးခြင်း ဖြစ်သည်။"
    },
    {
        q: "How can AI help with 'Scenario Projections' in the Vision pillar?",
        qMy: "Vision ကျောက်တိုင်တွင် AI က 'Scenario Projections' အတွက် မည်သို့ ကူညီနိုင်သနည်း?",
        options: [
          { text: "By testing ideas against different future conditions", textMy: "အနာဂတ် အခြေအနေအမျိုးမျိုးတွင် အိုင်ဒီယာများကို စမ်းသပ်ခြင်း။", value: 10 },
          { text: "By showing you pictures of the future", textMy: "အနာဂတ်ပုံများကို ပြခြင်း။", value: 0 },
          { text: "By making decisions for you", textMy: "သင့်ကိုယ်စား ဆုံးဖြတ်ချက်ချခြင်း။", value: 0 },
          { text: "By recording your dreams", textMy: "သင့်အိပ်မက်များကို မှတ်တမ်းတင်ခြင်း။", value: 0 }
        ],
        hint: "It acts as a pressure-test for your ideas.",
        hintMy: "၎င်းသည် သင့်အိုင်ဒီယာများကို ဖိအားပေး စမ်းသပ်ခြင်း ဖြစ်သည်။",
        explanation: "AI can simulate how a strategy might perform in various market shifts or crises, strengthening your vision.",
        explanationMy: "AI သည် ဈေးကွက်ပြောင်းလဲမှုများတွင် သင့်ဗျူဟာ မည်သို့ ဖြစ်လာနိုင်သည်ကို ကြိုတင်တွက်ချက်ပေးနိုင်သည်။"
    },
    {
        q: "Which leadership style does the framework move away from?",
        qMy: "ဤ framework သည် မည်သည့် ခေါင်းဆောင်မှုပုံစံမှ ခွဲထွက်ရန် ကြိုးစားသနည်း?",
        options: [
          { text: "The 'Doer' or Manual Operator", textMy: "ကိုယ်တိုင် အကုန်လုပ်သူ (Doer)။", value: 10 },
          { text: "The Visionary Leader", textMy: "အမြော်အမြင်ရှိသော ခေါင်းဆောင်။", value: 0 },
          { text: "The Empathetic Director", textMy: "စာနာတတ်သော ညွှန်ကြားသူ။", value: 0 },
          { text: "The Strategic Architect", textMy: "ဗျူဟာမြောက် တည်ဆောက်သူ။", value: 0 }
        ],
        hint: "Moving from manual labor to orchestration.",
        hintMy: "ကိုယ်တိုင်လုပ်ခြင်းမှ စီမံခန့်ခွဲခြင်းသို့ ကူးပြောင်းခြင်း ဖြစ်သည်။",
        explanation: "The goal is to move from being an 'Operator' (Doer) to a 'Director' (Architect) of AI-first systems.",
        explanationMy: "အဓိက ပန်းတိုင်မှာ 'Operator' မှ 'Director' သို့ ကူးပြောင်းရန် ဖြစ်သည်။"
    },
    {
        q: "Why is 'Aligning Company Goals with Human Dreams' part of Care?",
        qMy: "ကုမ္ပဏီရည်မှန်းချက်နှင့် လူသားအိပ်မက်များကို ချိတ်ဆက်ခြင်းသည် အဘယ်ကြောင့် Care (ဂရုစိုက်မှု) တွင် ပါဝင်သနည်း?",
        options: [
          { text: "It treats employees as unique individuals, not just gears", textMy: "ဝန်ထမ်းများကို စက်ရုပ်လိုမဟုတ်ဘဲ လူသားတစ်ဦးလို ဆက်ဆံခြင်း ဖြစ်သောကြောင့်။", value: 10 },
          { text: "It saves money on training", textMy: "လေ့ကျင့်ရေး စရိတ် သက်သာသည်။", value: 0 },
          { text: "It makes the office look better", textMy: "ရုံးခန်းကို ပိုလှစေသည်။", value: 0 },
          { text: "It allows you to use more AI", textMy: "AI ပိုသုံးခွင့်ရစေသည်။", value: 0 }
        ],
        hint: "People work harder when their own future matters too.",
        hintMy: "လူတို့သည် ၎င်းတို့၏ အနာဂတ်အတွက်ပါ အကျိုးရှိမှ ပိုကြိုးစားကြသည်။",
        explanation: "True leadership involves showing concern for the whole person, ensuring their growth aligns with the organization.",
        explanationMy: "စစ်မှန်သော ခေါင်းဆောင်မှုသည် ဝန်ထမ်းတစ်ဦးချင်းစီ၏ တိုးတက်မှုကိုပါ ထည့်သွင်းစဉ်းစားပေးခြင်း ဖြစ်သည်။"
    },
    {
        q: "The framework suggests that in the AI era, leaders should act as:",
        qMy: "AI ခေတ်တွင် ခေါင်းဆောင်များသည် မည်သို့ ဆောင်ရွက်သင့်သည်ဟု ဤ framework က အကြံပြုသနည်း?",
        options: [
          { text: "Strategic Orchestrators (Directors)", textMy: "ဗျူဟာမြောက် စီမံခန့်ခွဲသူများ (Directors)။", value: 10 },
          { text: "Manual Data Entry Operators", textMy: "ဒေတာသွင်းသူများ။", value: 0 },
          { text: "AI Software Developers", textMy: "AI ဆော့ဖ်ဝဲလ် ရေးသားသူများ။", value: 0 },
          { text: "Silent observers of automation", textMy: "စက်မှုလုပ်ငန်းများကို ငြိမ်ကြည့်နေသူများ။", value: 0 }
        ],
        hint: "Think about the conductor of an orchestra.",
        hintMy: "တူရိယာအဖွဲ့တစ်ခုကို ဦးဆောင်သူကဲ့သို့ စဉ်းစားပါ။",
        explanation: "Leaders must direct the AI tools and human 'taste' to produce elite results, rather than doing the manual tasks themselves.",
        explanationMy: "ခေါင်းဆောင်များသည် AI ကိရိယာများနှင့် လူသားတို့၏ taste ကို ပေါင်းစပ်ကာ ထူးချွန်သော ရလဒ်များရရန် ညွှန်ကြားရမည်။"
    }
  ]
};

export const PROMPT_FIVE_PILLARS_QUIZ: QuizSet = {
  id: "prompt-mastery",
  title: "Mastering Google's Five Pillars of Prompt Engineering",
  titleMy: "Google ၏ Prompt Engineering အခြေခံအုတ်မြစ် ၅ ခု ကျွမ်းကျင်မှု စစ်ဆေးချက်",
  questions: [
    {
      q: "What does the 'T' in Google's Five Pillars stand for?",
      qMy: "Google ၏ အခြေခံကျောက်တိုင် ၅ ခုမှ 'T' သည် မည်သည်ကို ဆိုလိုသနည်း?",
      options: [
        { text: "Task", textMy: "Task (လုပ်ငန်း)", value: 10 },
        { text: "Template", textMy: "Template", value: 0 },
        { text: "Temperature", textMy: "Temperature", value: 0 },
        { text: "Technology", textMy: "Technology", value: 0 }
      ],
      hint: "It is the primary objective of the prompt.",
      hintMy: "၎င်းမှာ prompt ၏ အဓိက ပန်းတိုင်ဖြစ်သည်။",
      explanation: "Task is the clear definition of what you want the AI to achieve.",
      explanationMy: "Task ဆိုသည်မှာ AI အား မည်သည့်အရာကို လုပ်ဆောင်ပေးရန် ညွှန်ကြားချက် ဖြစ်သည်။"
    },
    {
      q: "In 'Context', what should you provide to the AI?",
      qMy: "'Context' (အခြေအနေ) တွင် AI အား မည်သည်ကို ပေးသင့်သနည်း?",
      options: [
        { text: "Relevant background information and target audience", textMy: "နောက်ခံအချက်အလက်နှင့် ရည်ရွယ်သည့် ပရိသတ်။", value: 10 },
        { text: "Only one word", textMy: "စကားလုံးတစ်လုံးတည်းသာ။", value: 0 },
        { text: "Your personal password", textMy: "သင့်ရဲ့ password။", value: 0 },
        { text: "Generic instructions", textMy: "ယေဘုယျ ညွှန်ကြားချက်များ။", value: 0 }
      ],
      hint: "It eliminates guessing by the model.",
      hintMy: "၎င်းသည် AI ၏ မှန်းဆမှုများကို ပယ်ဖျက်ပေးသည်။",
      explanation: "Context sets the stage, preventing the AI from generating irrelevant or vague responses.",
      explanationMy: "Context သည် AI အား မသက်ဆိုင်သော အဖြေများ မပေးမိစေရန် အခြေအနေကို သတ်မှတ်ပေးသည်။"
    },
    {
        q: "What is the purpose of the 'Reference' pillar?",
        qMy: "'Reference' ကျောက်တိုင်၏ ရည်ရွယ်ချက်မှာ အဘယ်နည်း?",
        options: [
          { text: "Providing examples or standards of excellence", textMy: "စံနမူနာများ သို့မဟုတ် ထူးချွန်သော ရလဒ်များကို ပြသရန်။", value: 10 },
          { text: "Referencing your friend's name", textMy: "သင့်သူငယ်ချင်းအမည်ကို ဖော်ပြရန်။", value: 0 },
          { text: "Listing the AI model version", textMy: "AI model version ကို စာရင်းပြုစုရန်။", value: 0 },
          { text: "Asking for a bibliography", textMy: "ကျမ်းကိုးစာရင်း မေးရန်။", value: 0 }
        ],
        hint: "It sets the quality bar.",
        hintMy: "၎င်းသည် အရည်အသွေး စံနှုန်းကို သတ်မှတ်ပေးသည်။",
        explanation: "References give the AI a concrete target to aim for, like showing it a 'Tier-1' landing page design.",
        explanationMy: "Reference သည် AI အား မည်သို့သော ရလဒ်မျိုး လိုချင်သည်ကို နမူနာပြသခြင်း ဖြစ်သည်။"
    },
    {
        q: "What does 'Evaluate' mean in the T-C-R-E-I framework?",
        qMy: "T-C-R-E-I framework တွင် 'Evaluate' (စစ်ဆေးခြင်း) ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Auditing the output against requirements", textMy: "ရလဒ်သည် သတ်မှတ်ချက်နှင့် ကိုက်ညီမှု ရှိမရှိ စစ်ဆေးခြင်း။", value: 10 },
          { text: "Calculating the cost of tokens", textMy: "Token ကုန်ကျစရိတ် တွက်ခြင်း။", value: 0 },
          { text: "Asking the AI to rate itself", textMy: "AI ကို ၎င်းကိုယ်တိုင် အမှတ်ပေးခိုင်းခြင်း။", value: 0 },
          { text: "Deleting the first response immediately", textMy: "ပထမဆုံး အဖြေကို ချက်ချင်း ဖျက်ပစ်ခြင်း။", value: 0 }
        ],
        hint: "Checking for quality gaps.",
        hintMy: "အရည်အသွေး ဟာကွက်များကို ရှာဖွေခြင်း ဖြစ်သည်။",
        explanation: "Evaluation is the human 'Director' checking if the AI met the task based on the provided context.",
        explanationMy: "Evaluate ဆိုသည်မှာ AI ပေးသော အဖြေသည် လိုချင်သော စံနှုန်းနှင့် ကိုက်ညီမှု ရှိမရှိ စစ်ဆေးခြင်း ဖြစ်သည်။"
    },
    {
        q: "Why is 'Iterate' considered a loop rather than a linear step?",
        qMy: "'Iterate' (ပြုပြင်ခြင်း) ကို အဘယ်ကြောင့် loop တစ်ခုဟု သတ်မှတ်သနည်း?",
        options: [
          { text: "Optimization usually takes multiple rounds of refinement", textMy: "အကောင်းဆုံးဖြစ်ရန် အဆင့်ဆင့် ပြန်လည် ပြုပြင်ရသောကြောင့်။", value: 10 },
          { text: "The AI gets confused in loops", textMy: "AI သည် loop များတွင် ဇဝေဇဝါ ဖြစ်တတ်သောကြောင့်။", value: 0 },
          { text: "It saves computer battery", textMy: "ကွန်ပျူတာ ဘက်ထရီ သက်သာစေသောကြောင့်။", value: 0 },
          { text: "Loops are easier to write in prompts", textMy: "Loop များသည် prompt ရေးရ ပိုလွယ်သောကြောင့်။", value: 0 }
        ],
        hint: "First drafts are rarely perfect.",
        hintMy: "ပထမဆုံး မူကြမ်းများသည် ပြည့်စုံလေ့ မရှိပါ။",
        explanation: "Iteration is the process of feeding the 'Evaluation' feedback back into the prompt to fix quality gaps.",
        explanationMy: "Iterate ဆိုသည်မှာ စစ်ဆေးတွေ့ရှိချက်များကို အခြေခံ၍ ပိုကောင်းသော ရလဒ်ရရန် prompt ကို ပြန်လည် ပြုပြင်ခြင်း ဖြစ်သည်။"
    },
    {
        q: "What is 'Prompt Chaining'?",
        qMy: "'Prompt Chaining' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Breaking complex tasks into a sequence of smaller prompts", textMy: "ရှုပ်ထွေးသော အလုပ်များကို သေးငယ်သော prompt များအဖြစ် ခွဲထုတ်ခြင်း။", value: 10 },
          { text: "Connecting multiple AI models in a row", textMy: "AI model အမြောက်အမြားကို ဆက်တိုက် သုံးခြင်း။", value: 0 },
          { text: "Locking a prompt so it can't be changed", textMy: "Prompt ကို မပြင်နိုင်အောင် ပိတ်ထားခြင်း။", value: 0 },
          { text: "Using chains in a visual diagram", textMy: "ပုံကားချပ်တွင် ကွင်းဆက်များ သုံးခြင်း။", value: 0 }
        ],
        hint: "Complex prompts often overload the AI's logic window.",
        hintMy: "ရှုပ်ထွေးသော prompt များသည် AI ၏ စဉ်းစားပုံကို ဝန်ပိစေတတ်သည်။",
        explanation: "By chaining, you ensure high accuracy at every step of a large project (Discovery -> Refinement -> Execution).",
        explanationMy: "Prompt Chaining သည် အဆင့်တိုင်းတွင် တိကျမှုကို ထိန်းသိမ်းရန် အလုပ်များကို အဆင့်လိုက် ခွဲခိုင်းခြင်း ဖြစ်သည်။"
    },
    {
        q: "Which technique uses 'Think step-by-step' to reduce errors?",
        qMy: "အမှားများကို လျှော့ချရန် 'Think step-by-step' (တစ်ဆင့်ချင်း စဉ်းစားပါ) နည်းလမ်းကို မည်သို့ ခေါ်သနည်း?",
        options: [
          { text: "Chain of Thought (CoT)", textMy: "Chain of Thought (CoT)", value: 10 },
          { text: "Tree of Thought (ToT)", textMy: "Tree of Thought (ToT)", value: 0 },
          { text: "Chain of Command", textMy: "Chain of Command", value: 0 },
          { text: "Thinking Tank", textMy: "Thinking Tank", value: 0 }
        ],
        hint: "It reveals the internal reasoning path of the model.",
        hintMy: "၎င်းသည် AI ၏ စဉ်းစားပုံ လမ်းကြောင်းကို ဖော်ပြပေးသည်။",
        explanation: "CoT forces the LLM to process logic linearly, which significantly improves accuracy in math and analysis.",
        explanationMy: "CoT သည် AI ကို စဉ်းစားပုံ အဆင့်ဆင့် ဖော်ပြစေခြင်းဖြင့် ပိုမို တိကျသော အဖြေရစေသည်။"
    },
    {
        q: "When would you use 'Tree of Thought' (ToT)?",
        qMy: "'Tree of Thought' (ToT) ကို မည်သည့်အချိန်တွင် သုံးသင့်သနည်း?",
        options: [
          { text: "When you want the AI to explore multiple strategic paths", textMy: "ဗျူဟာမြောက် လမ်းကြောင်းမျိုးစုံကို စူးစမ်းလိုသောအခါ။", value: 10 },
          { text: "When you want the fastest answer possible", textMy: "အမြန်ဆုံး အဖြေ လိုချင်သောအခါ။", value: 0 },
          { text: "When drawing a family tree", textMy: "မျိုးရိုးစဉ်ဆက် ဇယားဆွဲသောအခါ။", value: 0 },
          { text: "When counting trees in a photo", textMy: "ပုံထဲရှိ သစ်ပင်များကို ရေတွက်သောအခါ။", value: 0 }
        ],
        hint: "Think about branching possibilities.",
        hintMy: "ခွဲထွက်နေသော ဖြစ်နိုင်ခြေများကို စဉ်းစားပါ။",
        explanation: "ToT generates distinct reasoning branches (e.g., Path A vs Path B) for side-by-side comparison.",
        explanationMy: "ToT သည် မတူညီသော ဗျူဟာလမ်းကြောင်းများကို ဘေးချင်းယှဉ် နှိုင်းယှဉ်နိုင်စေရန် ဖန်တီးပေးသည်။"
    },
    {
        q: "What is the primary role of a 'System Instruction'?",
        qMy: "'System Instruction' ၏ အဓိက တာဝန်မှာ အဘယ်နည်း?",
        options: [
          { text: "To define the persistent persona and rules for the AI", textMy: "AI ၏ အမြဲတမ်း စရိုက်နှင့် စည်းမျဉ်းများကို သတ်မှတ်ရန်။", value: 10 },
          { text: "To reboot the computer", textMy: "ကွန်ပျူတာကို restart ချရန်။", value: 0 },
          { text: "To change the font size of the response", textMy: "စာလုံး အရွယ်အစား ပြောင်းရန်။", value: 0 },
          { text: "To translate text into code only", textMy: "စာသားကို ကုဒ်အဖြစ်သာ ပြောင်းရန်။", value: 0 }
        ],
        hint: "It's the 'System Role' defined at the start.",
        hintMy: "၎င်းမှာ အစပိုင်းတွင် သတ်မှတ်ပေးသည့် 'System Role' ဖြစ်သည်။",
        explanation: "System instructions act as a permanent guardrail, telling the AI to 'Act as a Senior Auditor' throughout the session.",
        explanationMy: "System instructions သည် AI အား 'ကျွမ်းကျင်သူ တစ်ဦးအဖြစ် ဆောင်ရွက်ပါ' ဟု စရိုက်သွင်းပေးခြင်း ဖြစ်သည်။"
    },
    {
        q: "What is a 'Stop Phrase' in the context of an AI Agent?",
        qMy: "AI Agent တစ်ခုအတွက် 'Stop Phrase' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "A signal to end a specific automated loop or session", textMy: "လုပ်ငန်းစဉ် သို့မဟုတ် session ကို ရပ်တန့်ရန် အချက်ပြစကားလုံး။", value: 10 },
          { text: "A word that breaks the AI", textMy: "AI ကို ပျက်စီးစေသော စကားလုံး။", value: 0 },
          { text: "The last word in the English dictionary", textMy: "အဘိဓာန်မှ နောက်ဆုံး စကားလုံး။", value: 0 },
          { text: "A command to turn off the internet", textMy: "အင်တာနက် ပိတ်ရန် ညွှန်ကြားချက်။", value: 0 }
        ],
        hint: "It tells the agent when its job is finished.",
        hintMy: "၎င်းသည် agent အား အလုပ်ပြီးပြီဟု ပြောခြင်း ဖြစ်သည်။",
        explanation: "Stop phrases like 'End Session' allow the user to control continuous agents, like interview simulators.",
        explanationMy: "Stop phrases သည် လေ့ကျင့်ရေး agent များကို မည်သည့်အချိန်တွင် ရပ်ရမည်ဟု ထိန်းချုပ်ပေးသည်။"
    },
    {
        q: "What does 'Metaprompting' involve?",
        qMy: "'Metaprompting' တွင် မည်သည်တို့ ပါဝင်သနည်း?",
        options: [
          { text: "Asking the AI to help you design a better prompt", textMy: "ပိုကောင်းသော prompt တစ်ခု ရရှိရန် AI ကို ဝိုင်းဝန်း စဉ်းစားခိုင်းခြင်း။", value: 10 },
          { text: "Using Facebook Meta's AI only", textMy: "Facebook Meta ၏ AI ကိုသာ သုံးခြင်း။", value: 0 },
          { text: "Sending a prompt via social media", textMy: "Social media မှတစ်ဆင့် prompt ပို့ခြင်း။", value: 0 },
          { text: "Prompting about the weather", textMy: "ရာသီဥတုအကြောင်း မေးခြင်း။", value: 0 }
        ],
        hint: "Prompting about the prompt itself.",
        hintMy: "Prompt အကြောင်းကို ပြန်လည် prompt လုပ်ခြင်း ဖြစ်သည်။",
        explanation: "Metaprompting uses the LLM's own intelligence to audit your instructions and add missing context.",
        explanationMy: "Metaprompting သည် သင့်ညွှန်ကြားချက်များ ပိုကောင်းရန် AI ကိုယ်တိုင်က အကြံပေးခိုင်းခြင်း ဖြစ်သည်။"
    },
    {
        q: "Why should you use 'Constraints' in a prompt?",
        qMy: "Prompt တစ်ခုတွင် 'Constraints' (ကန့်သတ်ချက်များ) ကို အဘယ်ကြောင့် သုံးသင့်သနည်း?",
        options: [
          { text: "To narrow the output to specific requirements (e.g., 'No jargon')", textMy: "ရလဒ်ကို တိကျသော သတ်မှတ်ချက်အတွင်း ရှိနေစေရန် (ဥပမာ- 'ဘာသာစကား အခက်များ မသုံးရ')။", value: 10 },
          { text: "To make the AI work slower", textMy: "AI ကို ပိုနှေးအောင် လုပ်ရန်။", value: 0 },
          { text: "To limit the AI to 5 words only", textMy: "AI ကို ၅ လုံးပဲ ရေးခိုင်းရန်။", value: 0 },
          { text: "To increase the cost of the token", textMy: "ကုန်ကျစရိတ် ပိုများအောင် လုပ်ရန်။", value: 0 }
        ],
        hint: "Negative prompting is as powerful as positive.",
        hintMy: "မလုပ်ရမည့် အချက်များသည် လုပ်ရမည့် အချက်များကဲ့သို့ပင် အရေးကြီးသည်။",
        explanation: "Constraints like 'Do not provide feedback until asked' help guide the AI's flow and tone.",
        explanationMy: "Constraints များက AI အား ဘာကို မလုပ်ရဟု ကန့်သတ်ပေးခြင်းဖြင့် လိုချင်သော ပုံစံကို ရစေသည်။"
    },
    {
        q: "What is 'Analogous Task' prompting?",
        qMy: "'Analogous Task' prompting ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Reframing a problem using a similar concept or metaphor", textMy: "ပြဿနာတစ်ခုကို အလားတူ စိတ်ကူး သို့မဟုတ် တင်စားချက်ဖြင့် တင်ပြခြင်း။", value: 10 },
          { text: "Doing two tasks at the exact same time", textMy: "အလုပ်နှစ်ခုကို တစ်ပြိုင်တည်း လုပ်ခြင်း။", value: 0 },
          { text: "Prompting about science fiction", textMy: "သိပ္ပံစိတ်ကူးယဉ်များအကြောင်း မေးခြင်း။", value: 0 },
          { text: "Analyzing code from 1990", textMy: "၁၉၉၀ ခုနှစ်မှ ကုဒ်များကို စစ်ဆေးခြင်း။", value: 0 }
        ],
        hint: "It leverages patterns the model already knows well.",
        hintMy: "၎င်းသည် AI သိပြီးသား ပုံစံများကို အသုံးချခြင်း ဖြစ်သည်။",
        explanation: "If an AI struggles with a technical task, reframing it as a soccer analogy can sometimes trigger better reasoning.",
        explanationMy: "ခက်ခဲသောအရာများကို AI သိပြီးသား နမူနာပုံစံများဖြင့် ချိတ်ဆက် မေးမြန်းခြင်း ဖြစ်သည်။"
    },
    {
        q: "In the T-C-R-E-I cycle, what happens after 'Evaluate'?",
        qMy: "T-C-R-E-I cycle တွင် 'Evaluate' ပြီးနောက် ဘာဆက်ဖြစ်သနည်း?",
        options: [
          { text: "Iterate (Fix the gaps based on evaluation)", textMy: "Iterate (စစ်ဆေးချက်အရ ပြန်လည် ပြုပြင်ခြင်း)။", value: 10 },
          { text: "Start over from Task", textMy: "Task အဆင့်မှ ပြန်စခြင်း။", value: 0 },
          { text: "Delete the account", textMy: "အကောင့်ဖျက်ခြင်း။", value: 0 },
          { text: "Close the browser", textMy: "Browser ပိတ်ခြင်း။", value: 0 }
        ],
        hint: "The final step of the refinement loop.",
        hintMy: "၎င်းမှာ ပြန်လည် ပြုပြင်ခြင်း loop ၏ နောက်ဆုံးအဆင့် ဖြစ်သည်။",
        explanation: "Evaluation identifies gaps; Iteration closes them by updating the instructions.",
        explanationMy: "စစ်ဆေးတွေ့ရှိချက်များကို အခြေခံ၍ ရလဒ် ပိုကောင်းရန် ပြန်လည် ပြုပြင်ခြင်း ဖြစ်သည်။"
    },
    {
        q: "How many reasoning paths should you usually ask for in a 'Tree of Thought'?",
        qMy: "'Tree of Thought' တွင် များသောအားဖြင့် လမ်းကြောင်း မည်မျှ မေးသင့်သနည်း?",
        options: [
          { text: "3 distinct paths", textMy: "မတူညီသော လမ်းကြောင်း ၃ ခု။", value: 10 },
          { text: "100 paths", textMy: "လမ်းကြောင်း ၁၀၀။", value: 0 },
          { text: "None", textMy: "မမေးရပါ။", value: 0 },
          { text: "Only 1 path", textMy: "လမ်းကြောင်း ၁ ခုသာ။", value: 0 }
        ],
        hint: "Enough to compare, but not so many it loses depth.",
        hintMy: "နှိုင်းယှဉ်ရန် လုံလောက်သော်လည်း အလွန်အကျွံ မဖြစ်ရပါ။",
        explanation: "3 paths (e.g., Aggressive, Balanced, Conservative) provide enough breadth for strategic selection.",
        explanationMy: "လမ်းကြောင်း ၃ ခု (ဥပမာ- က၊ ခ၊ ဂ) သည် ဗျူဟာမြောက် ရွေးချယ်ရန် လုံလောက်သော ပမာဏ ဖြစ်သည်။"
    },
    {
        q: "What is the benefit of a 'Simulation Agent'?",
        qMy: "'Simulation Agent' တစ်ခု၏ အကျိုးကျေးဇူးမှာ အဘယ်နည်း?",
        options: [
          { text: "Practicing high-stakes scenarios without risk", textMy: "အန္တရာယ်မရှိဘဲ ခက်ခဲသော အခြေအနေများကို လက်တွေ့ လေ့ကျင့်နိုင်ခြင်း။", value: 10 },
          { text: "Letting the AI play video games for you", textMy: "AI ကို ဂိမ်းကစားခိုင်းခြင်း။", value: 0 },
          { text: "Generating random characters", textMy: "ဇာတ်ကောင်များ အလိုအလျောက် ထုတ်ပေးခြင်း။", value: 0 },
          { text: "Reducing the electricity cost", textMy: "လျှပ်စစ်ခ သက်သာစေခြင်း။", value: 0 }
        ],
        hint: "Roleplay is a powerful training tool.",
        hintMy: "ဇာတ်ကောင်သွင်း လေ့ကျင့်ခြင်းသည် အစွမ်းထက်သော နည်းလမ်းဖြစ်သည်။",
        explanation: "Simulation agents allow you to practice interviews or negotiations against a persistent persona.",
        explanationMy: "Simulation agent များက သင့်အား အင်တာဗျူး သို့မဟုတ် ဆွေးနွေးမှုများကို လက်တွေ့ လေ့ကျင့်ခွင့် ပေးသည်။"
    },
    {
        q: "In 'Context', what does 'Target Audience' help the AI do?",
        qMy: "'Context' တွင် 'Target Audience' (ရည်ရွယ်သည့် ပရိသတ်) က AI အား မည်သို့ ကူညီပေးသနည်း?",
        options: [
          { text: "Adjust the tone and complexity to match the reader", textMy: "ဖတ်မည့်သူနှင့် ကိုက်ညီအောင် လေသံနှင့် ခက်ခဲမှုကို ညှိယူပေးခြင်း။", value: 10 },
          { text: "Find the person's phone number", textMy: "လူတစ်ယောက်၏ ဖုန်းနံပါတ် ရှာပေးခြင်း။", value: 0 },
          { text: "Translate text to a dead language", textMy: "ရှေးဟောင်း ဘာသာစကားသို့ ပြောင်းပေးခြင်း။", value: 0 },
          { text: "Nothing at all", textMy: "ဘာမှ မကူညီပါ။", value: 0 }
        ],
        hint: "Writing for a CEO is different from writing for a 5-year-old.",
        hintMy: "CEO အတွက် ရေးခြင်းနှင့် ၅ နှစ်သားအတွက် ရေးခြင်းသည် ကွာခြားသည်။",
        explanation: "Defining the audience ensures the AI doesn't use too much jargon or talk down to the user.",
        explanationMy: "ပရိသတ်ကို သတ်မှတ်ပေးခြင်းက AI အား သင့်လျော်သော ဘာသာစကား သုံးနှုန်းတတ်စေရန် ကူညီပေးသည်။"
    },
    {
        q: "What is 'Reference' auditing?",
        qMy: "'Reference' auditing ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Comparing the AI's output against your provided examples", textMy: "AI ရလဒ်ကို သင်ပေးထားသော စံနမူနာများနှင့် နှိုင်းယှဉ် စစ်ဆေးခြင်း။", value: 10 },
          { text: "Reading the AI's biography", textMy: "AI ၏ ကိုယ်ရေးမှတ်တမ်း ဖတ်ခြင်း။", value: 0 },
          { text: "Checking if the AI model is old", textMy: "AI model ဟောင်းနေသလား စစ်ခြင်း။", value: 0 },
          { text: "Asking for more references", textMy: "နမူနာများ ပိုမေးခြင်း။", value: 0 }
        ],
        hint: "It's the gap-check against your standard.",
        hintMy: "၎င်းမှာ သင့်စံနှုန်းနှင့် ကိုက်၊ မကိုက် စစ်ဆေးခြင်း ဖြစ်သည်။",
        explanation: "If you give a reference file, you must check if the AI actually followed that style or logic in its output.",
        explanationMy: "Reference ပေးထားပါက AI သည် ထိုစံနှုန်းအတိုင်း လုပ်ဆောင်ခြင်း ရှိ၊ မရှိ စစ်ဆေးရမည် ဖြစ်သည်။"
    },
    {
        q: "How does Metaprompting treat the LLM?",
        qMy: "Metaprompting သည် LLM ကို မည်သို့ သတ်မှတ်သနည်း?",
        options: [
          { text: "As an Architect/Consultant for the prompt itself", textMy: "Prompt ကို ပြုပြင်တည်ဆောက်ပေးမည့် အကြံပေး တစ်ဦးအဖြစ်။", value: 10 },
          { text: "As a typing tool", textMy: "စာရိုက်သည့် ကိရိယာအဖြစ်။", value: 0 },
          { text: "As a dictionary", textMy: "အဘိဓာန်အဖြစ်။", value: 0 },
          { text: "As a calculator", textMy: "ဂဏန်းပေါင်းစက်အဖြစ်။", value: 0 }
        ],
        hint: "It uses the AI's intelligence to improve its own instructions.",
        hintMy: "၎င်းသည် AI ၏ ဉာဏ်ရည်ကို သုံး၍ ညွှန်ကြားချက်များကို ပိုကောင်းအောင် လုပ်ခြင်း ဖြစ်သည်။",
        explanation: "Metaprompting leverages the model's self-awareness of its own capabilities to design better task specs.",
        explanationMy: "Metaprompting သည် AI ၏ ဉာဏ်ရည်ကို အသုံးပြု၍ ပိုမိုကောင်းမွန်သော ညွှန်ကြားချက်များ ရေးဆွဲခြင်း ဖြစ်သည်။"
    },
    {
        q: "Why should you 'Evaluate' before you 'Iterate'?",
        qMy: "အဘယ်ကြောင့် 'Iterate' မလုပ်မီ 'Evaluate' အရင် လုပ်သင့်သနည်း?",
        options: [
          { text: "To identify exactly what needs fixing", textMy: "ဘာကို ပြင်ရမည်ဟု တိကျစွာ သိရှိစေရန်။", value: 10 },
          { text: "To wait for the AI to cool down", textMy: "AI ကို အေးသွားအောင် စောင့်ရန်။", value: 0 },
          { text: "To save on tokens", textMy: "Token သက်သာစေရန်။", value: 0 },
          { text: "Because it is the alphabetical order", textMy: "အက္ခရာစဉ်အရ ဖြစ်သောကြောင့်။", value: 0 }
        ],
        hint: "You can't fix what you haven't diagnosed.",
        hintMy: "မစစ်ဆေးရသေးသောအရာကို သင် မပြင်နိုင်ပါ။",
        explanation: "Evaluation provides the 'Director's notes' that drive the next iteration of the prompt.",
        explanationMy: "စစ်ဆေးခြင်း (Evaluate) က နောက်တစ်ဆင့်တွင် ဘာပြင်ရမည်ကို လမ်းညွှန်ချက် ပေးသည်။"
    }
  ]
};

export const NOTEBOOK_MASTER_QUIZ: QuizSet = {
  id: "notebook-mastery",
  title: "Mastering Source Verification and Literacy in NotebookLM",
  titleMy: "NotebookLM ရှိ အရင်းအမြစ် စစ်ဆေးခြင်းနှင့် အချက်အလက် ကျွမ်းကျင်မှု စစ်ဆေးချက်",
  questions: [
    {
      q: "What is 'Source-Grounded Intelligence'?",
      qMy: "'Source-Grounded Intelligence' ဆိုသည်မှာ အဘယ်နည်း?",
      options: [
        { text: "AI that only answers based on your uploaded documents", textMy: "သင်တင်ထားသော စာရွက်စာတမ်းများပေါ်တွင်သာ အခြေခံ ဖြေဆိုသည့် AI။", value: 10 },
        { text: "AI that searches the whole internet randomly", textMy: "အင်တာနက်အနှံ့ လျှောက်ရှာသည့် AI။", value: 0 },
        { text: "AI that guesses the answer", textMy: "အဖြေကို ခန့်မှန်းပြောသည့် AI။", value: 0 },
        { text: "A physical robot in a library", textMy: "စာကြည့်တိုက်ထဲရှိ ရုပ်ပိုင်းဆိုင်ရာ ရိုဘော့။", value: 0 }
      ],
      hint: "It avoids hallucinations by sticking to the facts provided.",
      hintMy: "၎င်းသည် ပေးထားသော အချက်အလက်များကိုသာ သုံးသဖြင့် မှားယွင်းမှု မရှိပါ။",
      explanation: "NotebookLM stays 'grounded' in your sources, meaning it won't hallucinate info outside of what you've uploaded.",
      explanationMy: "NotebookLM သည် သင်တင်ထားသော အချက်အလက်များကိုသာ အခြေခံသဖြင့် စိတ်ကူးယဉ် အမှားများ မပါရှိပါ။"
    },
    {
        q: "Why is topic mapping (naming notebooks correctly) important?",
        qMy: "Notebook များကို နာမည်မှန်ကန်စွာ ပေးခြင်း (Topic mapping) သည် အဘယ်ကြောင့် အရေးကြီးသနည်း?",
        options: [
          { text: "It ensures high-fidelity neural attention to a specific scope", textMy: "AI အား တိကျသော ခေါင်းစဉ်တစ်ခုအပေါ် ပိုမို အာရုံစိုက်စေသောကြောင့်။", value: 10 },
          { text: "It looks more professional on the dashboard", textMy: "Dashboard ပေါ်တွင် ကြည့်ကောင်းသောကြောင့်။", value: 0 },
          { text: "It makes the file sizes smaller", textMy: "ဖိုင်အရွယ်အစား သေးစေသောကြောင့်။", value: 0 },
          { text: "It is required by law", textMy: "ဥပဒေအရ လိုအပ်သောကြောင့်။", value: 0 }
        ],
        hint: "Broad scope leads to noisy and vague results.",
        hintMy: "ခေါင်းစဉ် ကျယ်ပြန့်လွန်းပါက အဖြေများ ဝေဝါးသွားနိုင်သည်။",
        explanation: "Focused notebooks like 'Q1 2025 Market Analysis' perform much better than general ones like 'My Notes'.",
        explanationMy: "တိကျသော ခေါင်းစဉ်များက AI ၏ စွမ်းဆောင်ရည်ကို ပိုမို မြင့်မားစေသည်။"
    },
    {
        q: "Which of these is NOT a supported source format in NotebookLM?",
        qMy: "အောက်ပါတို့အနက် NotebookLM တွင် မရနိုင်သော format မှာ အဘယ်နည်း?",
        options: [
          { text: "Live streaming video games", textMy: "ဂိမ်းများကို live ထုတ်လွှင့်ခြင်း။", value: 10 },
          { text: "PDF Documents", textMy: "PDF စာရွက်စာတမ်းများ။", value: 0 },
          { text: "YouTube Transcripts", textMy: "YouTube မှ စာသားများ။", value: 0 },
          { text: "Audio Files", textMy: "အသံဖိုင်များ။", value: 0 }
        ],
        hint: "NotebookLM focuses on researchable documents and media.",
        hintMy: "NotebookLM သည် သုတေသနပြုနိုင်သော စာသားနှင့် မီဒီယာများကိုသာ အာရုံစိုက်သည်။",
        explanation: "NotebookLM supports static sources like PDFs, Text, URLs, YouTube links, and Audio, but not live interaction like gaming streams.",
        explanationMy: "NotebookLM သည် PDF၊ စာသား၊ YouTube နှင့် အသံဖိုင်များကို လက်ခံသော်လည်း live video များကို မရနိုင်ပါ။"
    },
    {
        q: "What is 'Surgical Control' in NotebookLM?",
        qMy: "NotebookLM တွင် 'Surgical Control' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Isolating specific sources to eliminate noise", textMy: "မသက်ဆိုင်သော အချက်အလက်များကို ဖယ်ထုတ်ရန် source အချို့ကိုသာ ရွေးချယ်ခြင်း။", value: 10 },
          { text: "Using the AI to perform remote surgery", textMy: "AI ကို သုံးပြီး ခွဲစိတ်မှု လုပ်ခြင်း။", value: 0 },
          { text: "Editing images to remove people", textMy: "ပုံများထဲမှ လူများကို ဖယ်ထုတ်ခြင်း။", value: 0 },
          { text: "Deleting all sources at once", textMy: "Source အားလုံးကို တစ်ပြိုင်တည်း ဖျက်ပစ်ခြင်း။", value: 0 }
        ],
        hint: "Uncheck sources that are irrelevant to your current question.",
        hintMy: "မသက်ဆိုင်သော source များကို uncheck လုပ်ထားခြင်း ဖြစ်သည်။",
        explanation: "By unchecking unrelated sources, you force the AI to only look at 2-3 specific files, giving high-precision answers.",
        explanationMy: "မသက်ဆိုင်သော source များကို ဖယ်ထုတ်ထားခြင်းဖြင့် AI အား လိုအပ်သည့် ဖိုင်အချို့ကိုသာ အာရုံစိုက် ဖြေဆိုစေခြင်း ဖြစ်သည်။"
    },
    {
        q: "What does an 'Anchor Number' in a response link to?",
        qMy: "အဖြေထဲရှိ 'Anchor Number' သည် မည်သည်ကို ချိတ်ဆက်ပေးသနည်း?",
        options: [
          { text: "The exact location in the original source document", textMy: "မူရင်းစာရွက်စာတမ်းထဲရှိ အချက်အလက် တည်ရှိရာ နေရာ။", value: 10 },
          { text: "The AI's favorite number", textMy: "AI ကြိုက်တဲ့ နံပါတ်။", value: 0 },
          { text: "The total word count", textMy: "စုစုပေါင်း စကားလုံး အရေအတွက်။", value: 0 },
          { text: "The page number of the dictionary", textMy: "အဘိဓာန်မှ စာမျက်နှာ နံပါတ်။", value: 0 }
        ],
        hint: "It allows for instant source validation.",
        hintMy: "၎င်းသည် အချက်အလက်များကို ချက်ချင်း စစ်ဆေးနိုင်စေသည်။",
        explanation: "Anchor numbers act as citations, letting you jump to the source text to verify if the AI interpreted it correctly.",
        explanationMy: "Anchor numbers သည် AI ပေးသောအဖြေကို မူရင်းထဲတွင် ပြန်လည် စစ်ဆေးနိုင်စေရန် ကူညီပေးသည်။"
    },
    {
        q: "What is 'Actionable Synthesis'?",
        qMy: "'Actionable Synthesis' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Generating practical outputs like briefings, decks, or checklists based on sources", textMy: "အချက်အလက်များအပေါ် အခြေခံ၍ လက်တွေ့သုံးနိုင်သော အစီရင်ခံစာများ၊ slide များကို ထုတ်ယူခြင်း။", value: 10 },
          { text: "Synthesizing music using AI", textMy: "AI သုံးပြီး ဂီတ ဖန်တီးခြင်း။", value: 0 },
          { text: "Merging two different AI models together", textMy: "AI model နှစ်ခုကို ပေါင်းစပ်ခြင်း။", value: 0 },
          { text: "Creating generic stories", textMy: "ယေဘုယျ ပုံပြင်များ ရေးခြင်း။", value: 0 }
        ],
        hint: "Moving from research to implementation.",
        hintMy: "သုတေသနမှသည် လက်တွေ့ အကောင်အထည်ဖော်ခြင်းသို့ ကူးပြောင်းခြင်း ဖြစ်သည်။",
        explanation: "Synthesis in NotebookLM turns raw source data into professional assets like executive summaries grounded in fact.",
        explanationMy: "၎င်းသည် များပြားလှသော အချက်အလက်များကို အသုံးဝင်သော အနှစ်ချုပ်များအဖြစ် ပြောင်းလဲပေးခြင်း ဖြစ်သည်။"
    },
    {
        q: "What can the 'Audio Overview' feature do for leaders?",
        qMy: "'Audio Overview' feature က ခေါင်းဆောင်များအတွက် မည်သို့ ကူညီပေးသနည်း?",
        options: [
          { text: "Create a podcast-style discussion of your sources", textMy: "သင့်အချက်အလက်များကို podcast ကဲ့သို့ ဆွေးနွေး ရှင်းပြပေးခြင်း။", value: 10 },
          { text: "Listen to music from Spotify", textMy: "Spotify မှ သီချင်းနားထောင်ခြင်း။", value: 0 },
          { text: "Record your own voice messages", textMy: "သင့်အသံကို မှတ်တမ်းတင်ခြင်း။", value: 0 },
          { text: "Call people on the phone", textMy: "ဖုန်းခေါ်ပေးခြင်း။", value: 0 }
        ],
        hint: "It uses two AI voices to debate and discuss the material.",
        hintMy: "၎င်းသည် AI အသံနှစ်ခုဖြင့် အချက်အလက်များကို ဆွေးနွေးစေခြင်း ဖြစ်သည်။",
        explanation: "Audio Overview generates a deep-dive conversation between two AI hosts based entirely on your uploaded documents.",
        explanationMy: "Audio Overview သည် သင်တင်ထားသော အချက်အလက်များကို AI နှစ်ဦးက podcast ကဲ့သို့ အပြန်အလှန် ဆွေးနွေးပေးခြင်း ဖြစ်သည်။"
    },
    {
        q: "Why should you audit 'Author Credentials' in your sources?",
        qMy: "သင့် source များတွင် 'Author Credentials' (ရေးသားသူ၏ ကျွမ်းကျင်မှု) ကို အဘယ်ကြောင့် စစ်ဆေးသင့်သနည်း?",
        options: [
          { text: "To ensure the information comes from a verified expert", textMy: "အချက်အလက်များသည် ကျွမ်းကျင်သူထံမှ လာခြင်းဖြစ်ကြောင်း သေချာစေရန်။", value: 10 },
          { text: "To see what the author looks like", textMy: "ရေးသူ၏ ရုပ်ပုံကို ကြည့်ရန်။", value: 0 },
          { text: "To find their social media handles", textMy: "သူတို့၏ social media ကို ရှာရန်။", value: 0 },
          { text: "To check their spelling", textMy: "စာလုံးပေါင်း စစ်ရန်။", value: 0 }
        ],
        hint: "Quality in = Quality out.",
        hintMy: "အရည်အသွေးရှိသော အချက်အလက်မှသာ အရည်အသွေးရှိသော အဖြေ ထွက်မည်။",
        explanation: "Groundedness only matters if the original source is true; auditing authors ensures you are researching factual experts.",
        explanationMy: "မူရင်း အချက်အလက် ခိုင်လုံမှသာ AI ၏ အဖြေလည်း ခိုင်လုံမည် ဖြစ်သောကြောင့် ရေးသားသူကို စစ်ဆေးရခြင်း ဖြစ်သည်။"
    },
    {
        q: "What is 'Source Validation' in the NotebookLM context?",
        qMy: "NotebookLM တွင် 'Source Validation' (အရင်းအမြစ် စစ်ဆေးခြင်း) ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Checking publication dates and expert status of sources", textMy: "Source များ၏ ရက်စွဲနှင့် ရေးသူ၏ အခြေအနေကို စစ်ဆေးခြင်း။", value: 10 },
          { text: "Verifying if the internet is on", textMy: "အင်တာနက် ရှိ၊ မရှိ စစ်ခြင်း။", value: 0 },
          { text: "Checking if your laptop battery is full", textMy: "Laptop ဘက်ထရီ စစ်ခြင်း။", value: 0 },
          { text: "Validating your AI Studio API key", textMy: "API key ကို စစ်ဆေးခြင်း။", value: 0 }
        ],
        hint: "It focuses on the reliability of the documents.",
        hintMy: "၎င်းသည် စာရွက်စာတမ်းများ၏ ယုံကြည်စိတ်ချရမှုကို အလေးပေးသည်။",
        explanation: "Source validation prevents outdated or non-expert information from influencing your professional briefings.",
        explanationMy: "ဟောင်းနွမ်းနေသော သို့မဟုတ် မခိုင်လုံသော အချက်အလက်များ မပါဝင်စေရန် စစ်ဆေးခြင်း ဖြစ်သည်။"
    },
    {
        q: "In NotebookLM, how many sources can you typically upload per notebook?",
        qMy: "NotebookLM တွင် notebook တစ်ခုလျှင် source မည်မျှအထိ တင်နိုင်သနည်း?",
        options: [
          { text: "Up to 50 sources", textMy: "Source ၅၀ အထိ။", value: 10 },
          { text: "Only 1 source", textMy: "Source ၁ ခုသာ။", value: 0 },
          { text: "Infinite sources", textMy: "အကန့်အသတ်မရှိ။", value: 0 },
          { text: "Exactly 5 sources", textMy: "၅ ခု တိတိ။", value: 0 }
        ],
        hint: "It allows for a large but defined scope.",
        hintMy: "၎င်းသည် ကျယ်ပြန့်သော်လည်း တိကျသော ပမာဏကို ခွင့်ပြုသည်။",
        explanation: "NotebookLM currently allows up to 50 individual sources per notebook to maintain high attention density.",
        explanationMy: "NotebookLM သည် တိကျမှုရှိစေရန် notebook တစ်ခုလျှင် source ၅၀ အထိသာ ခွင့်ပြုထားသည်။"
    },
    {
        q: "What is the benefit of 'Deep Research' agents mentioned in the pro tip?",
        qMy: "Pro tip တွင် ဖော်ပြထားသော 'Deep Research' agent ၏ အကျိုးကျေးဇူးမှာ အဘယ်နည်း?",
        options: [
          { text: "It autonomously finds 50+ relevant high-quality sources", textMy: "သက်ဆိုင်ရာ အရည်အသွေးမြင့် source ၅၀ ကျော်ကို အလိုအလျောက် ရှာပေးခြင်း။", value: 10 },
          { text: "It writes your email for you", textMy: "သင့်အတွက် email ရေးပေးခြင်း။", value: 0 },
          { text: "It plays music while you research", textMy: "သုတေသန လုပ်စဉ် သီချင်းဖွင့်ပေးခြင်း။", value: 0 },
          { text: "It creates 3D models of the documents", textMy: "စာရွက်စာတမ်းများကို 3D ပုံဖော်ပေးခြင်း။", value: 0 }
        ],
        hint: "It automates the collection phase of research.",
        hintMy: "၎င်းသည် သုတေသနအတွက် အချက်အလက် စုဆောင်းခြင်းကို အလိုအလျောက် လုပ်ပေးသည်။",
        explanation: "Deep Research agents speed up the initial data gathering, populating your notebook with verified expert materials.",
        explanationMy: "Deep Research agent များသည် သုတေသနအတွက် လိုအပ်သော အချက်အလက်များကို အမြန်ဆုံး စုစည်းပေးသည်။"
    },
    {
        q: "How does 'Surgical Isolation' prevent vague answers?",
        qMy: "'Surgical Isolation' က အဖြေများ ဝေဝါးမသွားအောင် မည်သို့ ကာကွယ်ပေးသနည်း?",
        options: [
          { text: "By removing competing data from the AI's current context", textMy: "AI အာရုံစိုက်နေသော နေရာမှ မသက်ဆိုင်သော အချက်များကို ဖယ်ထုတ်ပေးခြင်း။", value: 10 },
          { text: "By making the AI work harder", textMy: "AI ကို ပိုကြိုးစားခိုင်းခြင်း။", value: 0 },
          { text: "By increasing the font size", textMy: "စာလုံး အရွယ်အစား ကြီးစေခြင်း။", value: 0 },
          { text: "By turning off the internet", textMy: "အင်တာနက် ပိတ်ခြင်း။", value: 0 }
        ],
        hint: "Selecting only the most relevant files.",
        hintMy: "အကိုက်ညီဆုံး ဖိုင်များကိုသာ ရွေးချယ်ခြင်း ဖြစ်သည်။",
        explanation: "When too many sources are active, the AI might blend unrelated facts. Isolation ensures direct evidence from chosen docs.",
        explanationMy: "Source များလွန်းပါက အချက်အလက်များ ရောထွေးသွားနိုင်သဖြင့် အချို့ကိုသာ ရွေးချယ်ခြင်းက ပိုတိကျစေသည်။"
    },
    {
        q: "What can you generate from a Notebook to share with your team?",
        qMy: "သင့်အဖွဲ့သားများနှင့် မျှဝေရန် Notebook မှ မည်သည်တို့ကို ထုတ်ယူနိုင်သနည်း?",
        options: [
          { text: "Briefing docs and FAQ lists", textMy: "အစီရင်ခံစာများနှင့် မေးလေ့ရှိသော မေးခွန်းများ။", value: 10 },
          { text: "A physical book", textMy: "စာအုပ်တစ်အုပ်။", value: 0 },
          { text: "A video game", textMy: "ဗီဒီယိုဂိမ်း တစ်ခု။", value: 0 },
          { text: "A new AI model", textMy: "AI model အသစ်တစ်ခု။", value: 0 }
        ],
        hint: "Think about professional documentation.",
        hintMy: "ပရော်ဖက်ရှင်နယ် စာရွက်စာတမ်းများကို စဉ်းစားပါ။",
        explanation: "NotebookLM can synthesize briefings, study guides, and FAQ sets grounded in your proprietary research.",
        explanationMy: "NotebookLM သည် သင့်သုတေသနများမှ အနှစ်ချုပ်များကို အဖွဲ့အတွင်း မျှဝေရန် အလွယ်တကူ ထုတ်ပေးနိုင်သည်။"
    },
    {
        q: "In 'Validation Framework', why is 'Date' important?",
        qMy: "'Validation Framework' တွင် 'Date' (ရက်စွဲ) သည် အဘယ်ကြောင့် အရေးကြီးသနည်း?",
        options: [
          { text: "To ensure the information is up-to-date and not obsolete", textMy: "အချက်အလက်များသည် ခေတ်မနောက်ကျဘဲ လက်ရှိ အခြေအနေနှင့် ကိုက်ညီစေရန်။", value: 10 },
          { text: "To celebrate the document's birthday", textMy: "စာရွက်စာတမ်း၏ မွေးနေ့ ကျင်းပရန်။", value: 0 },
          { text: "To check the time of day", textMy: "အချိန် စစ်ရန်။", value: 0 },
          { text: "Because the computer needs a calendar", textMy: "ကွန်ပျူတာအတွက် ပြက္ခဒိန် လိုအပ်သောကြောင့်။", value: 0 }
        ],
        hint: "AI fields move very fast; older info can be dangerous.",
        hintMy: "AI နယ်ပယ်သည် အလွန်မြန်သဖြင့် အချက်အလက်ဟောင်းများသည် အန္တရာယ်ရှိနိုင်သည်။",
        explanation: "Old research in fast-moving fields like AI might lead to implementing outdated standards or strategies.",
        explanationMy: "မြန်ဆန်လှသော နယ်ပယ်များတွင် ရက်စွဲကို စစ်ဆေးခြင်းက မှားယွင်းသော ဗျူဟာများ မသုံးမိစေရန် ကာကွယ်ပေးသည်။"
    },
    {
        q: "What is the 'Logic of Isolation'?",
        qMy: "'Logic of Isolation' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "Selecting only the sources that answer the specific sub-query", textMy: "မေးခွန်းအတွက် လိုအပ်သည့် source များကိုသာ ရွေးချယ်ခြင်း။", value: 10 },
          { text: "Isolating yourself while you research", textMy: "သုတေသန လုပ်စဉ် တစ်ယောက်တည်း နေခြင်း။", value: 0 },
          { text: "Disconnecting from all other AI tools", textMy: "အခြား AI tool များနှင့် အဆက်ဖြတ်ခြင်း။", value: 0 },
          { text: "Deleting 50% of your sources", textMy: "Source ၅၀% ကို ဖျက်ပစ်ခြင်း။", value: 0 }
        ],
        hint: "Focused data = Focused answers.",
        hintMy: "တိကျသော ဒေတာသည် တိကျသော အဖြေကို ပေးသည်။",
        explanation: "Isolation prevents the model from hallucinating by cross-pollinating unrelated documents in its working memory.",
        explanationMy: "မသက်ဆိုင်သော source များကို ဖယ်ထားခြင်းဖြင့် AI အား တိကျစွာ အာရုံစိုက် ဖြေဆိုစေခြင်း ဖြစ်သည်။"
    },
    {
        q: "What is an 'Audio Overview Debate' mode used for?",
        qMy: "'Audio Overview Debate' mode ကို မည်သည့်နေရာတွင် သုံးသနည်း?",
        options: [
          { text: "To illuminate conflicting perspectives in your sources", textMy: "အချက်အလက်များထဲမှ မတူညီသော ရှုထောင့်များကို သိမြင်နိုင်ရန်။", value: 10 },
          { text: "To win an argument with the AI", textMy: "AI ကို စကားနိုင်လုရန်။", value: 0 },
          { text: "To record a political debate", textMy: "နိုင်ငံရေး ဆွေးနွေးမှုများကို မှတ်တမ်းတင်ရန်။", value: 0 },
          { text: "To listen to news", textMy: "သတင်းနားထောင်ရန်။", value: 0 }
        ],
        hint: "It goes beyond simple summaries.",
        hintMy: "၎င်းသည် သာမန် အနှစ်ချုပ်ထက် ပိုမို နက်နဲသည်။",
        explanation: "Debate mode helps leaders see where their sources disagree, providing a more balanced view of a topic.",
        explanationMy: "Debate mode သည် အချက်အလက်များထဲမှ အားသာချက်၊ အားနည်းချက်နှင့် ကွဲလွဲချက်များကိုပါ သိမြင်စေသည်။"
    },
    {
        q: "Why is NotebookLM better than a regular chatbot for research?",
        qMy: "သုတေသနအတွက် NotebookLM သည် သာမန် chatbot များထက် အဘယ်ကြောင့် ပိုကောင်းသနည်း?",
        options: [
          { text: "It strictly adheres to your verified sources with zero hallucination risk", textMy: "သင့်အချက်အလက်များကိုသာ အခြေခံသဖြင့် အမှားဖြစ်နိုင်ခြေ လုံးဝ မရှိသောကြောင့်။", value: 10 },
          { text: "It has a cuter icon", textMy: "Icon လေးက ပိုချစ်စရာ ကောင်းလို့။", value: 0 },
          { text: "It can write poems faster", textMy: "ကဗျာကို ပိုမြန်အောင် ရေးနိုင်လို့။", value: 0 },
          { text: "It works without an account", textMy: "အကောင့်မလိုဘဲ သုံးလို့ရလို့။", value: 0 }
        ],
        hint: "Groundedness is the key factor.",
        hintMy: "ခိုင်လုံမှုသည် အဓိက အချက်ဖြစ်သည်။",
        explanation: "Standard chatbots use the internet or training data; NotebookLM uses only YOUR data, ensuring 100% accuracy relative to sources.",
        explanationMy: "သာမန် chatbot များက အင်တာနက်မှ ရှာသော်လည်း NotebookLM သည် သင့်အချက်အလက်များကိုသာ သုံးသဖြင့် အလွန်တိကျသည်။"
    },
    {
        q: "What is a 'Briefing Doc' in NotebookLM?",
        qMy: "NotebookLM တွင် 'Briefing Doc' ဆိုသည်မှာ အဘယ်နည်း?",
        options: [
          { text: "An executive summary with direct quotes from sources", textMy: "မူရင်းမှ စကားလုံးများကို ကိုးကားထားသော အမှုဆောင် အနှစ်ချုပ် အစီရင်ခံစာ။", value: 10 },
          { text: "A short text message", textMy: "စာတိုလေး တစ်စောင်။", value: 0 },
          { text: "A legal contract", textMy: "ဥပဒေ စာချုပ်တစ်ခု။", value: 0 },
          { text: "A picture book", textMy: "ရုပ်ပုံစာအုပ် တစ်အုပ်။", value: 0 }
        ],
        hint: "It helps leaders catch up on complex topics quickly.",
        hintMy: "၎င်းသည် ခက်ခဲသောအရာများကို အမြန်ဆုံး နားလည်စေရန် ကူညီပေးသည်။",
        explanation: "A briefing doc provides all the key takeaways and supporting evidence in a structured format.",
        explanationMy: "Briefing doc သည် အဓိက အချက်များနှင့် သက်သေအထောက်အထားများကို စနစ်တကျ ဖော်ပြပေးသော အစီရင်ခံစာ ဖြစ်သည်။"
    },
    {
        q: "How do you verify if the AI made a mistake in NotebookLM?",
        qMy: "NotebookLM တွင် AI အမှားလုပ်မိ၊ မမိကို မည်သို့ စစ်ဆေးနိုင်သနည်း?",
        options: [
          { text: "Click the anchor numbers to see the source text", textMy: "မူရင်းစာသားကို ကြည့်ရန် anchor numbers ကို နှိပ်ခြင်း။", value: 10 },
          { text: "Ask the AI if it is lying", textMy: "AI ကို လိမ်နေသလားဟု မေးခြင်း။", value: 0 },
          { text: "Search Google for the answer", textMy: "Google မှာ အဖြေရှာခြင်း။", value: 0 },
          { text: "Wait for 24 hours", textMy: "၂၄ နာရီ စောင့်ခြင်း။", value: 0 }
        ],
        hint: "The system is designed for instant human verification.",
        hintMy: "ဤစနစ်သည် လူကိုယ်တိုင် ချက်ချင်း စစ်ဆေးနိုင်အောင် ဒီဇိုင်းထုတ်ထားသည်။",
        explanation: "The integrated citation system (anchor numbers) is the Director's tool for manual quality control.",
        explanationMy: "Anchor numbers များသည် AI ၏ အဖြေကို လူကိုယ်တိုင် စစ်ဆေးရန်အတွက် အကောင်းဆုံး ကိရိယာ ဖြစ်သည်။"
    },
    {
        q: "Final thought: NotebookLM turns a Leader into a:",
        qMy: "နိဂုံးချုပ်အနေဖြင့် NotebookLM သည် ခေါင်းဆောင်တစ်ဦးအား မည်သို့ ဖြစ်လာစေသနည်း?",
        options: [
          { text: "Surgical researcher with verified intelligence", textMy: "ခိုင်လုံသော အချက်အလက်များဖြင့် တိကျစွာ သုတေသနပြုနိုင်သူ။", value: 10 },
          { text: "Speed typist", textMy: "စာရိုက် အမြန်သမား။", value: 0 },
          { text: "Graphic designer", textMy: "ဒီဇိုင်းနာ တစ်ဦး။", value: 0 },
          { text: "Software programmer", textMy: "ပရိုဂရမ်မာ တစ်ဦး။", value: 0 }
        ],
        hint: "It scales your literacy and research power.",
        hintMy: "၎င်းသည် သင့်သုတေသန စွမ်းအားကို မြှင့်တင်ပေးသည်။",
        explanation: "The ultimate goal is to process massive data with high fidelity, allowing for better strategic leadership.",
        explanationMy: "အဓိက ပန်းတိုင်မှာ များပြားလှသော ဒေတာများကို တိကျစွာ ကိုင်တွယ်နိုင်ပြီး ပိုမိုကောင်းမွန်သော ဗျူဟာများ ချမှတ်နိုင်ရန် ဖြစ်သည်။"
    }
  ]
};

export const AISTUDIO_MASTER_QUIZ: QuizSet = {
  id: "aistudio-mastery",
  title: "Google AI Studio: Full Creative Studio Mastery",
  titleMy: "Google AI Studio - အခြေခံမှစ၍ အသုံးပြုနည်း ကျွမ်းကျင်မှု စစ်ဆေးချက်",
  questions: [
    {
      q: "Why is Google AI Studio referred to as a 'Full Creative Studio'?",
      qMy: "Google AI Studio ကို 'Full Creative Studio' တစ်ခုဟု အဘယ်ကြောင့် တင်စားကြသနည်း?",
      options: [
        { text: "Because it only allows text chatting", textMy: "စာရိုက်ရုံသာ ပြုလုပ်နိုင်သောကြောင့်။", value: 0 },
        { text: "Because you can build apps, create content, and perform strategic analysis in one place", textMy: "App များ တည်ဆောက်ခြင်း၊ Content ဖန်တီးခြင်းနှင့် မဟာဗျူဟာမြောက် ခွဲခြမ်းစိတ်ဖြာခြင်းများကို တစ်နေရာတည်းတွင် လုပ်ဆောင်နိုင်သောကြောင့်။", value: 10 },
        { text: "Because it costs thousands of dollars", textMy: "အလွန်ဈေးကြီးသောကြောင့်။", value: 0 },
        { text: "Because it is for professional coders only", textMy: "ကျွမ်းကျင်သော ပရိုဂရမ်မာများအတွက်သာ ဖြစ်သောကြောင့်။", value: 0 }
      ],
      hint: "Think about the variety of features beyond simple chatting.",
      hintMy: "Chat သက်သက်မဟုတ်ဘဲ အခြားလုပ်ဆောင်နိုင်စွမ်းများကို စဉ်းစားပါ။",
      explanation: "AI Studio is a versatile tool for Chat, Image, Video, Audio creation, and Strategic Analysis, allowing users to build full apps without complex coding.",
      explanationMy: "AI Studio သည် Chat သာမက Image, Video, Audio နှင့် Strategic Analysis များကို တစ်နေရာတည်းတွင် လုပ်ဆောင်နိုင်သည့် စွယ်စုံသုံး ကိရိယာဖြစ်သောကြောင့် ဖြစ်သည်။"
    },
    {
      q: "What is the benefit of 'Vibe Coding' in the Build Tab?",
      qMy: "Build Tab ရှိ 'Vibe Coding' ၏ အကျိုးကျေးဇူးမှာ အဘယ်နည်း?",
      options: [
        { text: "It allows you to build apps by describing your intent in Plain English", textMy: "မိမိအလိုရှိသည်ကို လူသုံးစကားဖြင့် ပြောရုံဖြင့် App တည်ဆောက်နိုင်ခြင်း။", value: 10 },
        { text: "It teaches you how to write C++ code", textMy: "C++ ကုဒ်ရေးနည်း သင်ပေးခြင်း။", value: 0 },
        { text: "It plays background music while you work", textMy: "အလုပ်လုပ်နေစဉ် နောက်ခံတေးဂီတ ဖွင့်ပေးခြင်း။", value: 0 },
        { text: "It limits the app to 10 lines of code", textMy: "ကုဒ် ၁၀ ကြောင်းသာ ရေးခွင့်ပေးခြင်း။", value: 0 }
      ],
      hint: "Intent to execution instantly.",
      hintMy: "စိတ်ကူးကို ချက်ချင်း လက်တွေ့အကောင်အထည်ဖော်ခြင်း။",
      explanation: "Vibe Coding lets users describe an app's behavior in natural language, and the AI handles the complex code and preview instantly.",
      explanationMy: "Vibe Coding ဆိုသည်မှာ မိမိအလိုရှိသော App ပုံစံကို လူသုံးစကားဖြင့် ဖော်ပြရုံဖြင့် AI က ကုဒ်များ ရေးပေးပြီး လက်တွေ့စမ်းသပ်နိုင်စေခြင်း ဖြစ်သည်။"
    },
    {
      q: "Which element is considered the MOST important for shaping AI behavior in the Chat Tab?",
      qMy: "Chat Tab တွင် AI ၏ စရိုက်လက္ခဏာကို ပုံသွင်းရန် အရေးကြီးဆုံးအချက်မှာ အဘယ်နည်း?",
      options: [
        { text: "Model Name", textMy: "Model အမည်", value: 0 },
        { text: "System Instructions", textMy: "System Instructions (စနစ်ညွှန်ကြားချက်များ)", value: 10 },
        { text: "Temperature Settings", textMy: "Temperature သတ်မှတ်ချက်", value: 0 },
        { text: "Background Color", textMy: "နောက်ခံအရောင်", value: 0 }
      ],
      hint: "It defines the persona, like 'Act as a UX Designer'.",
      hintMy: "၎င်းသည် AI အား 'UX Designer အဖြစ် ဆောင်ရွက်ပါ' ဟု စရိုက်သွင်းပေးသောအရာ ဖြစ်သည်။",
      explanation: "System Instructions define the persona and context Gemini uses for every interaction, ensuring expert-level output.",
      explanationMy: "System Instructions သည် AI ကို စရိုက်တစ်ခု (Persona) သတ်မှတ်ပေးခြင်းဖြစ်ပြီး ရလဒ်များကို လိုချင်သောအတိုင်း ဖြစ်လာစေရန် ထိန်းချုပ်ပေးသည်။"
    },
    {
      q: "What is the primary function of 'Thinking Mode'?",
      qMy: "'Thinking Mode' ၏ အဓိက လုပ်ဆောင်ချက်မှာ အဘယ်နည်း?",
      options: [
        { text: "To make the AI answer faster", textMy: "AI ကို ပိုမြန်အောင် လုပ်ပေးခြင်း။", value: 0 },
        { text: "To see the step-by-step reasoning path of the AI", textMy: "AI ၏ စဉ်းစားပုံ အဆင့်ဆင့်ကို ကြည့်နိုင်ခြင်း။", value: 10 },
        { text: "To turn off the AI", textMy: "AI ကို ပိတ်ထားခြင်း။", value: 0 },
        { text: "To translate text into Myanmar", textMy: "မြန်မာလို ဘာသာပြန်ခြင်း။", value: 0 }
      ],
      hint: "Showing the 'work' behind the answer.",
      hintMy: "အဖြေနောက်ကွယ်ရှိ လုပ်ငန်းစဉ်ကို ပြသခြင်း။",
      explanation: "Thinking Mode allows users to audit the logic and thought process Gemini uses before arriving at a final conclusion.",
      explanationMy: "Thinking Mode သည် AI တစ်ခုခုကို မဖြေဆိုမီ မည်သို့ စဉ်းစားတွေးခေါ်ခဲ့သည်ကို အသုံးပြုသူက အဆင့်ဆင့် စစ်ဆေးနိုင်စေရန် ဖြစ်သည်။"
    },
    {
      q: "Which model is ultra-fast and 10x cheaper than its Pro counterpart?",
      qMy: "မည်သည့် Model သည် အလွန်မြန်ဆန်ပြီး Pro model ထက် ၁၀ ဆခန့် ပိုမိုသက်သာသနည်း?",
      options: [
        { text: "Gemini 2.5 Pro", textMy: "Gemini 2.5 Pro", value: 0 },
        { text: "Gemini 2.5 Flash", textMy: "Gemini 2.5 Flash", value: 10 },
        { text: "Nano Banana 1.0", textMy: "Nano Banana 1.0", value: 0 },
        { text: "Imagen 4", textMy: "Imagen 4", value: 0 }
      ],
      hint: "The model best for daily chatbots and fast apps.",
      hintMy: "နေ့စဉ်သုံး Chatbot နှင့် မြန်ဆန်သော App များအတွက် အသင့်တော်ဆုံး model ဖြစ်သည်။",
      explanation: "Gemini 2.5 Flash is designed for speed and cost-efficiency (10 cents per 1M tokens), ideal for high-volume tasks.",
      explanationMy: "Gemini 2.5 Flash သည် ကုန်ကျစရိတ် သက်သာပြီး အလွန်မြန်ဆန်သောကြောင့် နေ့စဉ်သုံး လုပ်ငန်းစဉ်များအတွက် အကောင်းဆုံး ဖြစ်သည်။"
    },
    {
      q: "For complex coding and deep data analysis, which model is recommended?",
      qMy: "ရှုပ်ထွေးသော ကုဒ်ရေးသားခြင်းနှင့် နက်နဲသော ဒေတာခွဲခြမ်းစိတ်ဖြာမှုများအတွက် မည်သည့် model ကို အကြံပြုသနည်း?",
      options: [
        { text: "Gemini 2.5 Flash", textMy: "Gemini 2.5 Flash", value: 0 },
        { text: "Gemini 2.5 Pro", textMy: "Gemini 2.5 Pro", value: 10 },
        { text: "VEO 3.1", textMy: "VEO 3.1", value: 0 },
        { text: "Stream Bot", textMy: "Stream Bot", value: 0 }
      ],
      hint: "This model features elite reasoning similar to GPT-5 class.",
      hintMy: "ဤ model သည် အလွန်ရှုပ်ထွေးသော Reasoning များ လုပ်ဆောင်နိုင်သည်။",
      explanation: "Gemini 2.5 Pro is the power-user model optimized for deep logic, complex coding, and strategic analysis.",
      explanationMy: "Gemini 2.5 Pro သည် Flash ထက် နှေးသော်လည်း ပိုမိုနက်နဲသော စဉ်းစားတွေးခေါ်မှုများ (Reasoning) လုပ်ဆောင်နိုင်သဖြင့် Coding နှင့် Data Analysis များအတွက် သင့်တော်သည်။"
    },
    {
      q: "What is the specialized use case for the 'Stream Tab'?",
      qMy: "'Stream Tab' ကို မည်သည့်နေရာတွင် အဓိက အသုံးချနိုင်သနည်း?",
      options: [
        { text: "Generating static images", textMy: "ပုံများ ထုတ်လုပ်ရန်။", value: 0 },
        { text: "Real-time voice or text interaction (e.g., language learning)", textMy: "အချိန်နှင့်တစ်ပြေးညီ Voice/Text ဖြင့် ဆက်သွယ်ရန် (ဥပမာ- ဘာသာစကား လေ့ကျင့်ရန်)။", value: 10 },
        { text: "Editing Excel sheets", textMy: "Excel ပြင်ဆင်ရန်။", value: 0 },
        { text: "Checking emails", textMy: "Email စစ်ဆေးရန်။", value: 0 }
      ],
      hint: "It feels like talking to a human in real-time.",
      hintMy: "လူတစ်ဦးနှင့် တိုက်ရိုက် စကားပြောနေသကဲ့သို့ ခံစားရမည် ဖြစ်သည်။",
      explanation: "Stream Tab uses the Live API to provide ultra-low latency interaction, perfect for practicing conversation in real-time.",
      explanationMy: "Stream Tab သည် AI နှင့် အချိန်နှင့်တစ်ပြေးညီ (Real-time) အပြန်အလှန် စကားပြောနိုင်သောကြောင့် ဘာသာစကား လေ့ကျင့်လိုသူများအတွက် အလွန်အသုံးဝင်သည်။"
    },
    {
      q: "Which image model is best for 4K quality and precise text rendering?",
      qMy: "4K အရည်အသွေးနှင့် ပုံထဲရှိ စာသားများကို တိကျစွာ ဖော်ပြရန် မည်သည့် image model က အကောင်းဆုံးနည်း?",
      options: [
        { text: "Imagen 4", textMy: "Imagen 4", value: 0 },
        { text: "Nano Banana Pro", textMy: "Nano Banana Pro", value: 10 },
        { text: "Flash Image", textMy: "Flash Image", value: 0 },
        { text: "VEO Image", textMy: "VEO Image", value: 0 }
      ],
      hint: "Higher resolution and text accuracy than basic models.",
      hintMy: "အခြား model များထက် ရုပ်ထွက်နှင့် စာသား တိကျမှု ပိုကောင်းသည်။",
      explanation: "Nano Banana Pro is optimized for high resolution (4K) and handles textual details within images much better than previous iterations.",
      explanationMy: "Nano Banana Pro သည် 4K အရည်အသွေး ထွက်ရှိပြီး ပုံထဲရှိ စာသားများကို အခြား model များထက် ပိုမိုတိကျစွာ ဖော်ပြနိုင်သည်။"
    },
    {
      q: "What happens to images generated by Free Tier users?",
      qMy: "Free Tier အသုံးပြုသူများ ထုတ်လုပ်လိုက်သော ပုံများတွင် မည်သည့်အရာ ပါဝင်မည်နည်း?",
      options: [
        { text: "They are deleted automatically", textMy: "အလိုအလျောက် ဖျက်ပစ်မည်။", value: 0 },
        { text: "They contain a Gemini Watermark", textMy: "Gemini Watermark (ရေစာ) ပါဝင်မည်။", value: 10 },
        { text: "They are shared on Facebook", textMy: "Facebook ပေါ်တွင် တင်ပေးမည်။", value: 0 },
        { text: "They are limited to black and white", textMy: "အမည်းရောင်ပုံများသာ ရမည်။", value: 0 }
      ],
      hint: "A common limitation for unpaid accounts in AI tools.",
      hintMy: "AI tools အခမဲ့သုံးစွဲသူများအတွက် သတ်မှတ်ချက်တစ်ခု ဖြစ်သည်။",
      explanation: "Google applies a visible watermark to distinguish AI-generated imagery created within the free usage tier.",
      explanationMy: "Free Tier အသုံးပြုသူများအတွက် ထွက်ရှိလာသော ပုံများတွင် AI ဖြင့် ဖန်တီးထားကြောင်း သိသာစေရန် Gemini Watermark ပါဝင်မည် ဖြစ်သည်။"
    },
    {
      q: "How does VEO 3.1 improve video generation?",
      qMy: "VEO 3.1 model က ဗီဒီယိုဖန်တီးမှုတွင် မည်သို့ အဆင့်မြှင့်တင်ထားသနည်း?",
      options: [
        { text: "It only creates silent videos", textMy: "အသံမပါသော ဗီဒီယိုသာ လုပ်ပေးသည်။", value: 0 },
        { text: "It generates 4-8 second cinematic video with matching ambient sound", textMy: "Matching ambient sound နှင့်အတူ ၄-၈ စက္ကန့်စာ Cinematic ဗီဒီယိုများ ဖန်တီးပေးသည်။", value: 10 },
        { text: "It translates videos", textMy: "ဗီဒီယိုများကို ဘာသာပြန်ပေးသည်။", value: 0 },
        { text: "It allows 1-hour long videos", textMy: "၁ နာရီစာ ဗီဒီယိုများ လုပ်ပေးသည်။", value: 0 }
      ],
      hint: "Think about the background audio sync.",
      hintMy: "ဗီဒီယိုနှင့် လိုက်ဖက်သော နောက်ခံအသံအကြောင်းကို စဉ်းစားပါ။",
      explanation: "VEO 3.1 creates cinematic clips and automatically synthesizes matching audio to fit the video's mood.",
      explanationMy: "VEO 3.1 သည် Cinematic ဗီဒီယိုတိုများ ဖန်တီးပေးရုံသာမက ဗီဒီယိုနှင့် လိုက်ဖက်မည့် Matching Ambient Sound ကိုပါ တစ်ပါတည်း ဖန်တီးပေးခြင်း ဖြစ်သည်။"
    },
    {
      q: "What is the 'Master Class Secret' for writing high-quality App Build Prompts?",
      qMy: "အရည်အသွေးမြင့် App တည်ဆောက်ရန် Prompt ရေးသားနည်း 'လျှို့ဝှက်ချက်' မှာ အဘယ်နည်း?",
      options: [
        { text: "Writing the prompt manually by hand", textMy: "လက်ဖြင့် ကိုယ်တိုင် အစမှ ရေးခြင်း။", value: 0 },
        { text: "Asking Gemini in the Chat Tab to write a detailed App Building Prompt first", textMy: "Chat Tab တွင် Gemini ကို အသေးစိတ်ကျသော App Building Prompt အရင်ရေးခိုင်းခြင်း။", value: 10 },
        { text: "Copying code from Wikipedia", textMy: "Wikipedia မှ ကုဒ်များကို ကူးယူခြင်း။", value: 0 },
        { text: "Using only one word prompts", textMy: "စကားလုံးတစ်လုံးတည်းသာ သုံးခြင်း။", value: 0 }
      ],
      hint: "Let the AI architect the instructions for the builder.",
      hintMy: "AI ကိုယ်တိုင်က ညွှန်ကြားချက်များကို အရင်ရေးဆွဲပါစေ။",
      explanation: "Using the Chat tab to 'meta-prompt' (prompting about prompting) yields a more structured and comprehensive set of instructions for the Build tab.",
      explanationMy: "အကောင်းဆုံးနည်းလမ်းမှာ Chat tab တွင် Gemini ကို အသေးစိတ်ကျသော ညွှန်ကြားချက် (Prompt) တစ်ခု အရင်ရေးခိုင်းပြီး ရလာသော Prompt ကိုမှ Build tab တွင် ပြန်သုံးခြင်း ဖြစ်သည်။"
    },
    {
      q: "How can you share your Vibe-Coded app with others publicly?",
      qMy: "Vibe Coding ဖြင့် ဖန်တီးထားသော App ကို အခြားသူများ သုံးနိုင်ရန် မည်သို့ မျှဝေနိုင်သနည်း?",
      options: [
        { text: "Taking a photo of the screen", textMy: "Screen ကို ဓာတ်ပုံရိုက်ပို့ခြင်း။", value: 0 },
        { text: "Clicking the Rocket Icon to deploy and get a Public URL", textMy: "Rocket Icon ကိုနှိပ်၍ Deploy လုပ်ပြီး Public URL ရယူခြင်း။", value: 10 },
        { text: "Emailing the text file", textMy: "စာသားဖိုင်ကို Email ပို့ခြင်း။", value: 0 },
        { text: "It is not possible to share", textMy: "မျှဝေ၍ မရပါ။", value: 0 }
      ],
      hint: "Look for the icon associated with launching.",
      hintMy: "လွှတ်တင်ခြင်း (Launch) နှင့် သက်ဆိုင်သော icon ကို ရှာပါ။",
      explanation: "The Rocket Icon triggers deployment to Google Cloud, generating a shareable link that anyone can access.",
      explanationMy: "Rocket Icon ကို နှိပ်ခြင်းဖြင့် Google Cloud ပေါ်သို့ တိုက်ရိုက်တင် (Deploy) ပေးပြီး မည်သူမဆို ဝင်ကြည့်နိုင်သည့် Public URL တစ်ခုကို ရရှိမည် ဖြစ်သည်။"
    },
    {
      q: "Which integration allows moving your AI Studio code to professional IDEs like Cursor?",
      qMy: "AI Studio ရှိ ကုဒ်များကို Cursor ကဲ့သို့ Professional IDE များသို့ ပြောင်းရွှေ့ရန် မည်သည့် feature ကို သုံးရမည်နည်း?",
      options: [
        { text: "Facebook Login", textMy: "Facebook Login", value: 0 },
        { text: "GitHub Integration", textMy: "GitHub Integration (ချိတ်ဆက်မှု)", value: 10 },
        { text: "Bluetooth Transfer", textMy: "Bluetooth ဖြင့် ပို့ခြင်း", value: 0 },
        { text: "Screen Recording", textMy: "Screen Recording", value: 0 }
      ],
      hint: "The world's standard for hosting and syncing code.",
      hintMy: "ကုဒ်များကို သိမ်းဆည်းရန်နှင့် Sync လုပ်ရန် ကမ္ဘာ့စံနှုန်း ဖြစ်သည်။",
      explanation: "AI Studio can sync directly with GitHub, enabling professional version control and further development in external editors.",
      explanationMy: "AI Studio သည် GitHub နှင့် တိုက်ရိုက် Sync လုပ်နိုင်သဖြင့် ကုဒ်များကို Professional နယ်ပယ်သို့ အလွယ်တကူ ပြောင်းရွှေ့ သိမ်းဆည်းနိုင်သည်။"
    },
    {
      q: "How can AI Studio help with 'Strategic Analysis' of competitors?",
      qMy: "ပြိုင်ဘက်များ၏ 'မဟာဗျူဟာမြောက် ခွဲခြမ်းစိတ်ဖြာမှု' အတွက် AI Studio ကို မည်သို့ သုံးနိုင်သနည်း?",
      options: [
        { text: "By inputting a competitor's Landing Page URL via Tools", textMy: "Tools မှတစ်ဆင့် ပြိုင်ဘက်၏ Landing Page URL ကို ထည့်သွင်းခိုင်းခြင်း။", value: 10 },
        { text: "By calling the competitor's office", textMy: "ပြိုင်ဘက်ရုံးသို့ ဖုန်းခေါ်ခြင်း။", value: 0 },
        { text: "By deleting their website", textMy: "သူတို့ ဝဘ်ဆိုဒ်ကို ဖျက်ပစ်ခြင်း။", value: 0 },
        { text: "By guessing their strategy", textMy: "သူတို့ ဗျူဟာကို မှန်းဆခြင်း။", value: 0 }
      ],
      hint: "Using the Search Grounding and URL tools.",
      hintMy: "Search Grounding နှင့် URL tools များကို အသုံးပြုခြင်း။",
      explanation: "You can ask Gemini to analyze a specific URL to identify market gaps, weaknesses, and potential opportunities.",
      explanationMy: "Tools button ကို အသုံးပြု၍ ပြိုင်ဘက်၏ ဝဘ်ဆိုဒ်ကို AI အား ကြည့်ခိုင်းပြီး အားနည်းချက်နှင့် အခွင့်အလမ်း Gap များကို ရှာခိုင်းနိုင်သည်။"
    },
    {
      q: "What is the result of uploading a handwritten Whiteboard photo to AI Studio?",
      qMy: "လက်ရေးဖြင့် ရေးထားသော Whiteboard ပုံကို AI Studio သို့ တင်လိုက်ပါက မည်သည့်ရလဒ် ရနိုင်သနည်း?",
      options: [
        { text: "The AI will delete the photo", textMy: "AI က ပုံကို ဖျက်ပစ်မည်။", value: 0 },
        { text: "It can extract the data into a structured Excel table", textMy: "အချက်အလက်များကို စနစ်ကျသော Excel ဇယားအဖြစ် ပြောင်းလဲပေးနိုင်သည်။", value: 10 },
        { text: "It will redraw the photo", textMy: "ပုံကို ပြန်ဆွဲပေးမည်။", value: 0 },
        { text: "It will turn the photo into a video", textMy: "ပုံကို ဗီဒီယိုအဖြစ် ပြောင်းမည်။", value: 0 }
      ],
      hint: "Data extraction from vision inputs.",
      hintMy: "ပုံရိပ်များမှ အချက်အလက်များ ထုတ်ယူခြင်း။",
      explanation: "Gemini's multimodal capability allows it to transcribe text from images and format it into professional spreadsheets.",
      explanationMy: "Multimodal feature ကြောင့် လက်ရေး whiteboard ပုံများကို တင်လိုက်ရုံဖြင့် စနစ်ကျသော Excel ဇယားအဖြစ် AI က ပြောင်းလဲထုတ်ယူပေးနိုင်သည်။"
    },
    {
      q: "How long of a document can AI Studio analyze (e.g., contracts)?",
      qMy: "AI Studio သည် (စာချုပ်များကဲ့သို့) မည်မျှ ရှည်လျားသော စာရွက်စာတမ်းကို ခွဲခြမ်းစိတ်ဖြာနိုင်သနည်း?",
      options: [
        { text: "Only 1 paragraph", textMy: "စာပိုဒ် ၁ ပိုဒ်သာ။", value: 0 },
        { text: "Up to 40+ pages (long-context windows)", textMy: "စာမျက်နှာ ၄၀ ကျော်အထိ (Long-context context)။", value: 10 },
        { text: "It cannot read documents", textMy: "စာမဖတ်နိုင်ပါ။", value: 0 },
        { text: "Only 1 page", textMy: "၁ မျက်နှာသာ။", value: 0 }
      ],
      hint: "Think about the 'Gemini 1M+ token' advantage.",
      hintMy: "Gemini ၏ Token အများအပြား လက်ခံနိုင်သော အားသာချက်ကို စဉ်းစားပါ။",
      explanation: "Gemini Pro features a massive context window, capable of processing hundreds of pages and thousands of lines of code at once.",
      explanationMy: "AI Studio ရှိ model များသည် context window ကြီးမားသောကြောင့် စာမျက်နှာ ၄၀ ကျော်ရှိသော စာချုပ်များကိုပါ တစ်ခါတည်း တင်ပြီး မေးမြန်းနိုင်သည်။"
    },
    {
      q: "What is the purpose of 'Live Screen Sharing' with AI?",
      qMy: "AI ကို 'Live Screen Sharing' ပြုလုပ်ခြင်း၏ ရည်ရွယ်ချက်မှာ အဘယ်နည်း?",
      options: [
        { text: "To play video games", textMy: "ဂိမ်းကစားရန်။", value: 0 },
        { text: "To get live audio feedback on UX design or app flows", textMy: "UX ဒီဇိုင်း သို့မဟုတ် App အလုပ်လုပ်ပုံအပေါ် Live အသံဖြင့် အကြံဉာဏ် တောင်းရန်။", value: 10 },
        { text: "To hide your work", textMy: "အလုပ်များကို ဝှက်ထားရန်။", value: 0 },
        { text: "To record your desktop", textMy: "Desktop ကို record ဖမ်းရန်။", value: 0 }
      ],
      hint: "Real-time visual feedback.",
      hintMy: "မျက်မြင်အချက်အလက်များအပေါ် ချက်ချင်း တုံ့ပြန်ချက် ရယူခြင်း။",
      explanation: "By sharing your screen, the AI can 'see' your work in real-time and provide immediate expert suggestions via voice.",
      explanationMy: "AI ကို မိမိ Screen ကြည့်ခိုင်းပြီး UX ဒီဇိုင်း အဆင်ပြေရဲ့လားဟု Live အသံဖြင့် တိုက်ရိုက် ဆွေးနွေးနိုင်သည်။"
    },
    {
      q: "Which take-away emphasizes the difference between Flash and Pro models?",
      qMy: "Flash နှင့် Pro model များ၏ ကွာခြားချက်အပေါ် မည်သည့် မှတ်သားစရာက အလေးပေးသနည်း?",
      options: [
        { text: "Flash for depth, Pro for speed", textMy: "နက်နဲရန် Flash၊ မြန်ရန် Pro။", value: 0 },
        { text: "Flash for speed, Pro for depth", textMy: "မြန်ဆန်ရန် Flash၊ နက်နဲသော Reasoning အတွက် Pro။", value: 10 },
        { text: "They are the same", textMy: "၎င်းတို့သည် အတူတူပင်ဖြစ်သည်။", value: 0 },
        { text: "Do not use Pro", textMy: "Pro ကို မသုံးပါနှင့်။", value: 0 }
      ],
      hint: "Speed vs Intelligence trade-off.",
      hintMy: "မြန်နှုန်းနှင့် ဉာဏ်ရည် ချိန်ညှိမှု။",
      explanation: "Flash is optimized for low-latency output; Pro is optimized for maximum reasoning capability.",
      explanationMy: "မြန်ဆန်သော တုံ့ပြန်မှုအတွက် Flash၊ နက်နဲသော စဉ်းစားတွေးခေါ်မှုနှင့် ခွဲခြမ်းစိတ်ဖြာမှုများအတွက် Pro ကို ခွဲခြားသုံးရန် အကြံပြုသည်။"
    },
    {
      q: "What model would you use to generate multi-speaker podcasts?",
      qMy: "လူနှစ်ဦး အပြန်အလှန် ဆွေးနွေးနေသည့် Podcast များ ဖန်တီးရန် မည်သည့် feature ကို သုံးရမည်နည်း?",
      options: [
        { text: "Multi-speaker podcast script generator", textMy: "Multi-speaker podcast စနစ်", value: 10 },
        { text: "Single Voice MP3", textMy: "Single Voice MP3", value: 0 },
        { text: "Text-to-Speech only", textMy: "စာကို အသံပြောင်းခြင်း သက်သက်", value: 0 },
        { text: "Google Maps", textMy: "Google Maps", value: 0 }
      ],
      hint: "Creating content with more than one persona talking.",
      hintMy: "လူတစ်ဦးထက်ပိုသော စရိုက်များ စကားပြောသည့် content ဖန်တီးခြင်း။",
      explanation: "AI Studio can synthesize a multi-person conversation based on a provided script, creating ready-to-use audio assets.",
      explanationMy: "Multi-speaker podcast စနစ်ဖြင့် လူနှစ်ဦး အပြန်အလှန် ဆွေးနွေးနေသည့် Podcast များကို Script ပေးရုံဖြင့် ဖန်တီးနိုင်သည်။"
    },
    {
      q: "What is the final goal of learning Google AI Studio according to the guide?",
      qMy: "ဤလမ်းညွှန်အရ AI Studio ကို လေ့လာခြင်း၏ အန္တိမပန်းတိုင်မှာ အဘယ်နည်း?",
      options: [
        { text: "To replace all human jobs", textMy: "လူသားအားလုံး၏ အလုပ်ကို အစားထိုးရန်။", value: 0 },
        { text: "To unlock the full creative power of AI for non-technical users", textMy: "နည်းပညာရှင် မဟုတ်သူများအတွက် AI ၏ အစွမ်းကို အပြည့်အဝ အသုံးချနိုင်ရန်။", value: 10 },
        { text: "To learn how to fix computers", textMy: "ကွန်ပျူတာ ပြင်တတ်ရန်။", value: 0 },
        { text: "To spend more time coding", textMy: "ကုဒ်ရေးရန် အချိန်ပိုပေးရန်။", value: 0 }
      ],
      hint: "Empowering creativity regardless of technical background.",
      hintMy: "နည်းပညာ နောက်ခံမရှိသော်လည်း ဖန်တီးနိုင်စွမ်းကို မြှင့်တင်ပေးခြင်း။",
      explanation: "AI Studio democratizes technology, allowing anyone with a clear idea to build and deploy tools once reserved for elite developers.",
      explanationMy: "AI Studio သည် နည်းပညာရှင် မဟုတ်သူများအတွက် မိမိတို့၏ စိတ်ကူးများကို အလုပ်လုပ်သော software များအဖြစ် ပြောင်းလဲနိုင်စေရန် တံခါးဖွင့်ပေးခြင်း ဖြစ်သည်။"
    }
  ]
};

export const DEPLOYMENT_MASTER_QUIZ: QuizSet = {
  id: "deployment-mastery",
  title: "Mastering AI App Deployment and Production SOP",
  titleMy: "AI App တည်ဆောက်ခြင်းနှင့် ထုတ်လွှင့်ခြင်းဆိုင်ရာ ကျွမ်းကျင်မှု စစ်ဆေးချက်",
  questions: [
    {
      q: "What is the primary goal of Phase 1 in the Deployment SOP?",
      qMy: "Deployment SOP ၏ Phase 1 ၏ အဓိက ပန်းတိုင်မှာ အဘယ်နည်း?",
      options: [
        { text: "To use 'Meta-Prompting' to design the best application spec", textMy: "အကောင်းဆုံး application specification ရရှိရန် 'Meta-Prompting' ကို သုံးရန်။", value: 10 },
        { text: "To buy a custom domain", textMy: "Domain ဝယ်ရန်။", value: 0 }
      ],
      hint: "Creative Studio phase focused on intent.",
      hintMy: "စိတ်ကူးကို အရင်ဆုံး ပုံစံထုတ်သည့် အဆင့်ဖြစ်သည်။",
      explanation: "The goal is to optimize your prompt in the Playground before moving to the Build section.",
      explanationMy: "Build အဆင့်သို့ မသွားမီ Playground တွင် မိမိ၏ prompt ကို အကောင်းဆုံးဖြစ်အောင် ပြုပြင်ရန် ဖြစ်သည်။"
    },
    {
      q: "What is the recommended Temperature setting in the Playground for high-precision App Specs?",
      qMy: "တိကျသော App Specs များရရှိရန် Playground တွင် Temperature ကို မည်သို့ သတ်မှတ်သင့်သနည်း?",
      options: [
        { text: "1.0", textMy: "1.0", value: 0 },
        { text: "0.5", textMy: "0.5", value: 0 },
        { text: "0", textMy: "0", value: 10 },
        { text: "Random", textMy: "Random", value: 0 }
      ],
      hint: "Think about precision versus creativity.",
      hintMy: "တိကျမှုနှင့် ဖန်တီးနိုင်စွမ်းကို နှိုင်းယှဉ်စဉ်းစားပါ။",
      explanation: "A Temperature of 0 is recommended for precision when generating structured App Specs.",
      explanationMy: "တိကျသော ရလဒ်များရရှိရန် Temperature ကို 0 သတ်မှတ်ခြင်းက အကောင်းဆုံးဖြစ်သည်။"
    },
    {
      q: "In the Optimization Cycle, what is the 2nd step after writing a basic idea?",
      qMy: "Optimization Cycle တွင် အခြေခံစိတ်ကူး ရေးပြီးနောက် ဒုတိယအဆင့်မှာ အဘယ်နည်း?",
      options: [
        { text: "Ask AI to re-write it as a professional App Specification", textMy: "ပရော်ဖက်ရှင်နယ် App Specification တစ်ခုအဖြစ် ပြန်ရေးခိုင်းရန်။", value: 10 },
        { text: "Click the Rocket icon", textMy: "Rocket icon ကို နှိပ်ရန်။", value: 0 }
      ],
      hint: "Let the AI architect the build prompt.",
      hintMy: "AI ကိုယ်တိုင်က ညွှန်ကြားချက်များကို အရင်ရေးဆွဲပါစေ။",
      explanation: "Meta-prompting lets the AI refine your intent into a format suitable for the 'Build' section.",
      explanationMy: "AI ကို ပရော်ဖက်ရှင်နယ် specification ပြန်ရေးခိုင်းခြင်းက Build tab တွင် ပိုမိုကောင်းမွန်သော ရလဒ်ရစေသည်။"
    },
    {
      q: "What is 'GitHub' in the context of this SOP?",
      qMy: "ဤ SOP အရ 'GitHub' ဆိုသည်မှာ အဘယ်နည်း?",
      options: [
        { text: "Cloud Storage for Code", textMy: "ကုဒ်များ သိမ်းဆည်းရန် Cloud Storage", value: 10 },
        { text: "A website for buying domains", textMy: "Domain ဝယ်သည့် ဆိုဒ်", value: 0 }
      ],
      hint: "It ensures your work is safe and version-controlled.",
      hintMy: "၎င်းသည် ကုဒ်များကို လုံခြုံစွာ သိမ်းဆည်းပေးပြီး အဆင့်ဆင့် မှတ်တမ်းတင်ပေးသည်။",
      explanation: "GitHub acts as the secure host and versioning layer for your application's source code.",
      explanationMy: "GitHub သည် သင့်အပလီကေးရှင်း၏ ကုဒ်များကို သိမ်းဆည်းရန်နှင့် ထိန်းချုပ်ရန်အတွက် အဓိကကျသော နေရာဖြစ်သည်။"
    },
    {
      q: "What does 'Committing' mean in GitHub?",
      qMy: "GitHub တွင် 'Committing' ဆိုသည်မှာ အဘယ်နည်း?",
      options: [
        { text: "Saving a 'snapshot' of your progress", textMy: "သင့်လုပ်ဆောင်ချက်များကို snapshot တစ်ခုအနေဖြင့် သိမ်းဆည်းခြင်း။", value: 10 },
        { text: "Deleting your project", textMy: "ပရောဂျက်ကို ဖျက်ပစ်ခြင်း။", value: 0 }
      ],
      hint: "It takes a point-in-time record of your code.",
      hintMy: "၎င်းသည် သင့်ကုဒ်များကို အဆင့်လိုက် မှတ်တမ်းတင်ခြင်း ဖြစ်သည်။",
      explanation: "A commit records your changes to the repository, allowing you to track progress or revert if needed.",
      explanationMy: "Commit လုပ်ခြင်းသည် ကုဒ်ပြင်ဆင်မှုများကို သိမ်းဆည်းခြင်းဖြစ်ပြီး အမှားပါက ပြန်လည်ပြင်ဆင်ရန် ကူညီပေးသည်။"
    },
    {
      q: "Which branch is considered the 'Stable' version of your app?",
      qMy: "သင့် app ၏ 'Stable' (တည်ငြိမ်သော) version အဖြစ် မည်သည့် branch ကို သတ်မှတ်သနည်း?",
      options: [
        { text: "Main Branch", textMy: "Main Branch", value: 10 },
        { text: "Draft Branch", textMy: "Draft Branch", value: 0 }
      ],
      hint: "The default branch used for production.",
      hintMy: "ထုတ်လွှင့်ရန်အတွက် အသုံးပြုသည့် ပင်မ branch ဖြစ်သည်။",
      explanation: "The 'Main' branch typically hosts the production-ready code for your application.",
      explanationMy: "Main branch သည် အများပြည်သူသုံးရန် အသင့်ဖြစ်နေသော ကုဒ်များကို သိမ်းဆည်းသည့် နေရာဖြစ်သည်။"
    },
    {
      q: "What is the CRUCIAL step when saving from AI Studio to GitHub?",
      qMy: "AI Studio မှ GitHub သို့ သိမ်းဆည်းရာတွင် အရေးကြီးဆုံးအဆင့်မှာ အဘယ်နည်း?",
      options: [
        { text: "Clicking 'Stage and Commit all changes'", textMy: "'Stage and Commit all changes' ကို နှိပ်ခြင်း။", value: 10 },
        { text: "Naming the repository 'Test'", textMy: "Repository အမည်ကို 'Test' ဟု ပေးခြင်း။", value: 0 }
      ],
      hint: "If you skip this, your code won't actually be uploaded.",
      hintMy: "ဤအဆင့်ကို ကျော်သွားပါက ကုဒ်များ GitHub ပေါ်သို့ ရောက်ရှိမည် မဟုတ်ပါ။",
      explanation: "Staging and committing is the final action that pushes your code from the editor to the cloud repository.",
      explanationMy: "Stage and Commit လုပ်မှသာ ကုဒ်များ GitHub cloud ပေါ်သို့ အမှန်တကယ် ရောက်ရှိမည် ဖြစ်သည်။"
    },
    {
      q: "What service acts as the 'Engine' to turn GitHub code into a live website?",
      qMy: "GitHub ကုဒ်များကို ဝဘ်ဆိုဒ်အဖြစ် လွှင့်တင်ပေးသော ဝန်ဆောင်မှုမှာ အဘယ်နည်း?",
      options: [
        { text: "Vercel", textMy: "Vercel", value: 10 },
        { text: "Google Maps", textMy: "Google Maps", value: 0 }
      ],
      hint: "It provides the hosting and a .vercel.app URL.",
      hintMy: "၎င်းသည် host လုပ်ပေးပြီး .vercel.app URL ကို ပေးသည်။",
      explanation: "Vercel connects to GitHub to build and host your web application automatically.",
      explanationMy: "Vercel သည် GitHub ရှိ ကုဒ်များကို ဝဘ်ဆိုဒ်အဖြစ် ပြောင်းလဲလွှင့်တင်ပေးသည့် အင်ဂျင် ဖြစ်သည်။"
    },
    {
      q: "How does 'Continuous Deployment' work in Vercel?",
      qMy: "Vercel ရှိ 'Continuous Deployment' က မည်သို့ အလုပ်လုပ်သနည်း?",
      options: [
        { text: "Vercel automatically updates the site whenever you 'Commit' to GitHub", textMy: "GitHub သို့ 'Commit' လုပ်လိုက်သည်နှင့် Vercel က ဝဘ်ဆိုဒ်ကို အလိုအလျောက် update လုပ်ပေးသည်။", value: 10 },
        { text: "You must manually re-upload files every day", textMy: "နေ့တိုင်း ဖိုင်များကို ကိုယ်တိုင် ပြန်တင်ရမည်။", value: 0 }
      ],
      hint: "No manual re-uploading required.",
      hintMy: "ကိုယ်တိုင် ပြန်တင်နေစရာ မလိုပါ။",
      explanation: "Vercel detects changes in your GitHub repository and triggers a new build and deployment instantly.",
      explanationMy: "GitHub တွင် ကုဒ်ပြင်လိုက်သည်နှင့် Vercel က အလိုအလျောက် သိရှိပြီး ဝဘ်ဆိုဒ်ကို ချက်ချင်း ပြောင်းလဲပေးသည်။"
    },
    {
      q: "What is a major risk when changing Name Servers at a domain registrar?",
      qMy: "Domain registrar တွင် Name Servers ပြောင်းလဲခြင်း၏ အဓိက စွန့်စားရမှုမှာ အဘယ်နည်း?",
      options: [
        { text: "It may disconnect existing services like professional email (MX records)", textMy: "Business email (MX records) များ အဆက်အသွယ် ပြတ်တောက်သွားနိုင်သည်။", value: 10 },
        { text: "It will delete your GitHub repository", textMy: "GitHub repository ပျက်သွားမည်။", value: 0 }
      ],
      hint: "Check MX records before proceeding.",
      hintMy: "မလုပ်ဆောင်မီ MX records များကို အရင်စစ်ပါ။",
      explanation: "Delegating DNS management to Vercel changes the routing for all services linked to that domain, including email.",
      explanationMy: "Name Servers ပြောင်းခြင်းသည် domain နှင့် ချိတ်ဆက်ထားသော email ဝန်ဆောင်မှုများကို ထိခိုက်စေနိုင်သည်။"
    },
    {
      q: "Where in Vercel do you add your custom domain?",
      qMy: "Vercel တွင် custom domain ကို မည်သည့်နေရာ၌ ထည့်ရမည်နည်း?",
      options: [
        { text: "Settings > Domains", textMy: "Settings > Domains", value: 10 },
        { text: "Profile > Friends", textMy: "Profile > Friends", value: 0 }
      ],
      hint: "Found under project configuration.",
      hintMy: "ပရောဂျက်၏ သတ်မှတ်ချက်များအောက်တွင် ရှိသည်။",
      explanation: "The Domains settings area is where you link your external brand name to your Vercel deployment.",
      explanationMy: "Settings ထဲရှိ Domains အပိုင်းတွင် မိမိ၏ ကိုယ်ပိုင် domain ကို ချိတ်ဆက်ရမည် ဖြစ်သည်။"
    },
    {
      q: "How many Name Servers does Vercel typically provide to copy?",
      qMy: "Vercel က များသောအားဖြင့် Name Server address မည်မျှ ပေးသနည်း?",
      options: [
        { text: "Two (e.g., ns1 and ns2)", textMy: "နှစ်ခု (ဥပမာ- ns1 နှင့် ns2)", value: 10 },
        { text: "Fifty", textMy: "ငါးဆယ်", value: 0 }
      ],
      hint: "Standard DNS setup usually requires a primary and secondary.",
      hintMy: "ပုံမှန်အားဖြင့် ပင်မနှင့် အရံ address နှစ်ခု ပေးသည်။",
      explanation: "Vercel provides two specific nameserver addresses to ensure redundancy and proper routing.",
      explanationMy: "Vercel သည် လုံခြုံမှုနှင့် တည်ငြိမ်မှုအတွက် address နှစ်ခုကို ပေးလေ့ရှိသည်။"
    },
    {
      q: "What does 'Propagation' mean in DNS settings?",
      qMy: "DNS setting များတွင် 'Propagation' ဆိုသည်မှာ အဘယ်နည်း?",
      options: [
        { text: "The time it takes for DNS changes to spread across the internet", textMy: "DNS ပြောင်းလဲမှုများ အင်တာနက်အနှံ့ ရောက်ရှိရန် ကြာချိန်။", value: 10 },
        { text: "The cost of the domain", textMy: "Domain ၏ တန်ဖိုး။", value: 0 }
      ],
      hint: "Can take from minutes to 48 hours.",
      hintMy: "မိနစ်ပိုင်းမှ ၄၈ နာရီအထိ ကြာနိုင်သည်။",
      explanation: "Propagation is the process of internet servers updating their records to reflect your new nameserver settings.",
      explanationMy: "Propagation ဆိုသည်မှာ setting အသစ်များကို အင်တာနက်ဆာဗာများက အသိအမှတ်ပြုရန် အချိန်ယူရခြင်း ဖြစ်သည်။"
    },
    {
      q: "Which tool can track the status of your DNS propagation?",
      qMy: "DNS propagation အခြေအနေကို မည်သည့် tool ဖြင့် စစ်ဆေးနိုင်သနည်း?",
      options: [
        { text: "whatsmydns.net", textMy: "whatsmydns.net", value: 10 },
        { text: "facebook.com", textMy: "facebook.com", value: 0 }
      ],
      hint: "A popular global DNS propagation checker.",
      hintMy: "ကမ္ဘာအနှံ့ DNS အခြေအနေကို စစ်ဆေးပေးသည့် ဆိုဒ် ဖြစ်သည်။",
      explanation: "whatsmydns.net allows you to verify if your new records are visible from various global locations.",
      explanationMy: "whatsmydns.net သည် သင်၏ setting အသစ်များ အင်တာနက်ပေါ်တွင် ရောက်၊ မရောက် စစ်ဆေးရန် အကောင်းဆုံး ဖြစ်သည်။"
    },
    {
      q: "What should you NEVER share in Public Repositories for security reasons?",
      qMy: "လုံခြုံရေးအတွက် Public Repository များတွင် မည်သည့်အရာကို လုံးဝ မမျှဝေသင့်သနည်း?",
      options: [
        { text: "API Keys", textMy: "API Keys များ", value: 10 },
        { text: "The App Name", textMy: "App ၏ အမည်", value: 0 }
      ],
      hint: "Think about credentials that access paid services.",
      hintMy: "ဝန်ဆောင်မှုများကို အသုံးပြုခွင့်ပေးသော လျှို့ဝှက်ကုဒ်များကို စဉ်းစားပါ။",
      explanation: "Exposing API keys publicly allows others to use your resources, potentially incurring costs or security breaches.",
      explanationMy: "API key များကို မျှဝေခြင်းက အခြားသူများကို သင့်အကောင့်မှတစ်ဆင့် သုံးခွင့်ပေးလိုက်သကဲ့သို့ ဖြစ်ပြီး စရိတ်စကများ ကျသင့်စေနိုင်သည်။"
    },
    {
      q: "What is the benefit of the 'On Device' toggle in the Build section?",
      qMy: "Build section ရှိ 'On Device' toggle ၏ အကျိုးကျေးဇူးမှာ အဘယ်နည်း?",
      options: [
        { text: "To preview how the app looks on Mobile vs Desktop", textMy: "Mobile နှင့် Desktop ပေါ်တွင် App မည်သို့ပေါ်မည်ကို ကြည့်ရန်။", value: 10 },
        { text: "To turn off the internet", textMy: "အင်တာနက် ပိတ်ရန်။", value: 0 }
      ],
      hint: "Multi-device testing.",
      hintMy: "စက်ပစ္စည်းအမျိုးမျိုးတွင် စမ်းသပ်ခြင်း။",
      explanation: "Previewing on different device sizes ensures your application is responsive and user-friendly on all screens.",
      explanationMy: "On Device toggle သည် ဖုန်းနှင့် ကွန်ပျူတာပေါ်တွင် App ၏ ပုံစံကို နှိုင်းယှဉ်ကြည့်ရန် ကူညီပေးသည်။"
    },
    {
      q: "In natural language app building, what does 'Vibe Coding' emphasize?",
      qMy: "Vibe Coding သည် မည်သည့်အချက်ကို အလေးပေးသနည်း?",
      options: [
        { text: "Intent to execution instantly using plain English", textMy: "လူသုံးစကားဖြင့် ပြောရုံဖြင့် ချက်ချင်း လက်တွေ့ အကောင်အထည်ဖော်ခြင်း။", value: 10 },
        { text: "Memorizing thousands of lines of code", textMy: "ကုဒ်ထောင်ပေါင်းများစွာကို အလွတ်ကျက်ခြင်း။", value: 0 }
      ],
      hint: "Building features without traditional syntax.",
      hintMy: "ရှုပ်ထွေးသော ကုဒ်ရေးနည်းများ မသုံးဘဲ features များ တည်ဆောက်ခြင်း။",
      explanation: "Vibe coding focuses on the user's creative intent, letting AI handle the underlying technical translation.",
      explanationMy: "Vibe coding သည် အသုံးပြုသူ၏ စိတ်ကူးကိုသာ အဓိကထားပြီး AI က နည်းပညာပိုင်းကို ဖြေရှင်းပေးသည်။"
    },
    {
      q: "What happens when you name your repository in AI Studio?",
      qMy: "AI Studio တွင် repository အမည်ပေးလိုက်ပါက ဘာဖြစ်လာမည်နည်း?",
      options: [
        { text: "It creates a digital folder for your project on the cloud", textMy: "သင့်ပရောဂျက်အတွက် cloud ပေါ်တွင် folder တစ်ခု ဖန်တီးပေးသည်။", value: 10 },
        { text: "It buys the website domain", textMy: "ဝဘ်ဆိုဒ် domain ကို ဝယ်ပေးသည်။", value: 0 }
      ],
      hint: "Think about the structure on GitHub.",
      hintMy: "GitHub ပေါ်ရှိ တည်ဆောက်ပုံကို စဉ်းစားပါ။",
      explanation: "A repository is the fundamental storage unit on GitHub where all project files and history are kept.",
      explanationMy: "Repository ဆိုသည်မှာ GitHub ပေါ်တွင် သင့်ဖိုင်အားလုံးကို သိမ်းဆည်းသည့် ပင်မ folder ဖြစ်သည်။"
    },
    {
      q: "If your app contains sensitive logic, which repository type should you use?",
      qMy: "သင့် app တွင် လျှို့ဝှက်ချက်များ ပါဝင်ပါက မည်သည့် repository အမျိုးအစားကို သုံးသင့်သနည်း?",
      options: [
        { text: "Private", textMy: "Private (သီးသန့်)", value: 10 },
        { text: "Public", textMy: "Public (အများသုံး)", value: 0 }
      ],
      hint: "Hides your code from the general public.",
      hintMy: "သင့်ကုဒ်များကို အခြားသူများ မမြင်အောင် ဝှက်ထားပေးသည်။",
      explanation: "Private repositories ensure that only authorized collaborators can view or edit your source code.",
      explanationMy: "Private repository ကို သုံးခြင်းဖြင့် သင့်ကုဒ်များကို အခြားသူများ လွယ်လွယ်နှင့် မမြင်နိုင်အောင် ကာကွယ်ပေးသည်။"
    },
    {
      q: "What is the final recommended step after deployment success?",
      qMy: "Deployment အောင်မြင်ပြီးနောက် နောက်ဆုံး လုပ်ဆောင်ရန် အကြံပြုချက်မှာ အဘယ်နည်း?",
      options: [
        { text: "Share the Vercel Public URL with the world", textMy: "Vercel Public URL ကို တစ်ကမ္ဘာလုံးသို့ မျှဝေရန်။", value: 10 },
        { text: "Delete the project", textMy: "ပရောဂျက်ကို ဖျက်ပစ်ရန်။", value: 0 }
      ],
      hint: "Showcase your work.",
      hintMy: "သင့်အလုပ်များကို ထုတ်ပြပါ။",
      explanation: "Sharing your live URL is the ultimate goal of the SOP, allowing users to interact with your creation.",
      explanationMy: "SOP ၏ နောက်ဆုံးရည်မှန်းချက်မှာ သင်ဖန်တီးထားသောအရာကို အခြားသူများ အသုံးပြုနိုင်ရန် မျှဝေခြင်း ဖြစ်သည်။"
    }
  ]
};

export const AILEVELS_MASTER_QUIZ: QuizSet = {
  id: 'ailevels-master',
  title: 'AI Levels Mastery',
  titleMy: 'AI အဆင့်များ ကျွမ်းကျင်မှု စစ်ဆေးခြင်း',
  questions: [
    {
      q: "What characterizes Level 1 AI (Assisted AI)?",
      qMy: "အဆင့် ၁ AI (Assisted AI) ၏ ဝိသေသမှာ အဘယ်နည်း?",
      options: [
        { text: "Direct human supervision for specific tasks", textMy: "သတ်မှတ်ထားသော အလုပ်များအတွက် လူသား၏ တိုက်ရိုက်ကြီးကြပ်မှု", value: 10 },
        { text: "Autonomous decision making", textMy: "ကိုယ်ပိုင် ဆုံးဖြတ်ချက် ချနိုင်ခြင်း", value: 0 }
      ],
      hint: "Think about basic tools like grammar checkers.",
      hintMy: "သဒ္ဒါစစ်ဆေးသည့် ကိရိယာများကဲ့သို့ အခြေခံကိရိယာများကို စဉ်းစားပါ။",
      explanation: "Level 1 AI acts as a tool that assists humans with specific, predefined tasks.",
      explanationMy: "အဆင့် ၁ AI သည် လူသားများကို သတ်မှတ်ထားသော အလုပ်များတွင် ကူညီပေးသည့် ကိရိယာတစ်ခုအဖြစ် လုပ်ဆောင်သည်။"
    },
    {
      q: "Which level of AI is capable of 'Reasoning'?",
      qMy: "မည်သည့် AI အဆင့်သည် 'Reasoning' (စဉ်းစားဆင်ခြင်ခြင်း) ကို လုပ်ဆောင်နိုင်သနည်း?",
      options: [
        { text: "Level 2", textMy: "အဆင့် ၂", value: 10 },
        { text: "Level 1", textMy: "အဆင့် ၁", value: 0 }
      ],
      hint: "This level can explain its thought process.",
      hintMy: "ဤအဆင့်သည် ၎င်း၏ စဉ်းစားပုံကို ရှင်းပြနိုင်သည်။",
      explanation: "Level 2 AI (Reasoners) can solve complex problems and provide the logic behind their answers.",
      explanationMy: "အဆင့် ၂ AI (Reasoners) သည် ရှုပ်ထွေးသော ပြဿနာများကို ဖြေရှင်းနိုင်ပြီး ၎င်းတို့၏ အဖြေနောက်ကွယ်မှ ယုတ္တိဗေဒကို ပေးနိုင်သည်။"
    },
    {
      q: "What is the primary difference between a Reasoner and an Agent?",
      qMy: "Reasoner နှင့် Agent တို့၏ အဓိက ကွာခြားချက်မှာ အဘယ်နည်း?",
      options: [
        { text: "Agents can take autonomous actions", textMy: "Agent များသည် ကိုယ်ပိုင် လုပ်ဆောင်ချက်များကို လုပ်ဆောင်နိုင်သည်", value: 10 },
        { text: "Reasoners are faster", textMy: "Reasoner များသည် ပိုမြန်သည်", value: 0 }
      ],
      hint: "Think about 'doing' vs 'thinking'.",
      hintMy: "'လုပ်ဆောင်ခြင်း' နှင့် 'စဉ်းစားခြင်း' ကို နှိုင်းယှဉ်ကြည့်ပါ။",
      explanation: "While Reasoners think and explain, Agents (Level 3) can execute multi-step workflows autonomously.",
      explanationMy: "Reasoner များက စဉ်းစားပြီး ရှင်းပြနေစဉ် Agent များ (အဆင့် ၃) က အဆင့်ဆင့်သော အလုပ်များကို ကိုယ်တိုင် လုပ်ဆောင်နိုင်သည်။"
    },
    {
      q: "Level 4 AI (Innovators) are defined by their ability to:",
      qMy: "အဆင့် ၄ AI (Innovators) များ၏ စွမ်းဆောင်ရည်မှာ:",
      options: [
        { text: "Discover new knowledge and create original inventions", textMy: "အသိပညာအသစ်များကို ရှာဖွေပြီး မူရင်းတီထွင်မှုများကို ဖန်တီးနိုင်ခြင်း", value: 10 },
        { text: "Follow human instructions perfectly", textMy: "လူသား၏ ညွှန်ကြားချက်များကို အတိအကျ လိုက်နာနိုင်ခြင်း", value: 0 }
      ],
      hint: "They go beyond existing data.",
      hintMy: "၎င်းတို့သည် ရှိပြီးသား ဒေတာများထက် ကျော်လွန်လုပ်ဆောင်နိုင်သည်။",
      explanation: "Innovators can push the boundaries of human knowledge by creating something truly new.",
      explanationMy: "Innovator များသည် အမှန်တကယ် အသစ်အဆန်းဖြစ်သောအရာများကို ဖန်တီးခြင်းဖြင့် လူသားတို့၏ အသိပညာဘောင်ကို ချဲ့ထွင်နိုင်သည်။"
    },
    {
      q: "What represents the pinnacle of AI evolution (Level 5)?",
      qMy: "AI ဆင့်ကဲပြောင်းလဲမှု၏ အမြင့်ဆုံးအဆင့် (အဆင့် ၅) မှာ အဘယ်နည်း?",
      options: [
        { text: "AI-run Organizations", textMy: "AI ဖြင့် လည်ပတ်သော အဖွဲ့အစည်းများ", value: 10 },
        { text: "A very smart chatbot", textMy: "အလွန်ထက်မြက်သော chatbot တစ်ခု", value: 0 }
      ],
      hint: "Think about managing entire systems.",
      hintMy: "စနစ်တစ်ခုလုံးကို စီမံခန့်ခွဲခြင်းကို စဉ်းစားပါ။",
      explanation: "Level 5 AI involves autonomous systems capable of managing entire organizations or complex ecosystems.",
      explanationMy: "အဆင့် ၅ AI သည် အဖွဲ့အစည်းတစ်ခုလုံး သို့မဟုတ် ရှုပ်ထွေးသော ဂေဟစနစ်များကို စီမံခန့်ခွဲနိုင်သည့် ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရ စနစ်များ ပါဝင်သည်။"
    }
  ]
};

export const getMentorSystemPrompt = (lang: Language) => {
  const isMy = lang === 'my';
  return `You are a world-class AI Mindset Mentor. Your goal is to help users transition from a 'Doer' to a 'Director' mindset.
Follow these principles:
1. Encourage using AI as a trainer, not a crutch.
2. Emphasize the importance of 'Taste' and spotting excellence.
3. Help develop 'Vision' for future opportunities.
4. Advocate for leading with 'Care'.
5. Teach the 10/80/10 rule.
${isMy ? 'Please respond entirely in Myanmar language.' : 'Please respond in English.'}
Be strategic, professional, yet encouraging.`;
};

export const QUIZ_QUESTIONS = PILLAR_QUIZ.questions;
