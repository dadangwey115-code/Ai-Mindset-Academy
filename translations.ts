
import { Language } from './types';

export const UI_STRINGS: Record<Language, any> = {
  en: {
    hero: {
      tag: "Master the AI-First Era",
      title1: "Don't Use AI to Work.",
      title2: "Use AI to Lead.",
      subtitle: "Based on the frameworks of Dan Martell and the Core Mindsets for the AI Era. Transform from a 'Doer' to a 'Director'.",
      btnStart: "Get Started",
      btnWatch: "Watch Concept"
    },
    nav: {
      home: "Home",
      curriculum: "Curriculum",
      prompting: "Prompting",
      notebooklm: "NotebookLM",
      aistudio: "AI Studio",
      deployment: "Deployment",
      ailevels: "AI Levels",
      quiz: "Take Quiz",
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
    },
    auth: {
      loginTitle: "Welcome Back",
      signupTitle: "Join the Academy",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      name: "Full Name",
      loginBtn: "Login",
      signupBtn: "Create Account",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      toggleSignup: "Sign Up",
      toggleLogin: "Login",
      error: "Authentication Error",
      successLogin: "Logged in successfully!",
      successSignup: "Account created successfully!",
    },
    assistants: {
      hubTitle: "AI Assistants",
      academyName: "Academy Master Assistant",
      promptName: "Prompting Guru Assistant",
      academyDesc: "Learn everything about the class",
      promptDesc: "Engineering perfect prompts"
    },
    resources: {
      title: "Lecture Materials & PDFs",
      sub: "Download the complete slide decks and strategy guides for offline study.",
      btn: "Access PDF Library",
      cta: "Download Lecture Notes"
    },
    prompting: {
      title: "Mastering Prompt Engineering",
      subtitle: "Google's 5 Pillars & Beyond",
      intro: "Learn the core architecture of high-performance prompting. Move from guessing to engineering.",
      pillarTitle: "The 5 Pillars (T-C-R-E-I)",
      pillarSub: "The fundamental framework for any high-stakes prompt.",
      chainingTitle: "Prompt Chaining",
      chainingSub: "Break complex tasks into logical, high-fidelity steps.",
      logicTitle: "Deep Logic Structures",
      logicSub: "Extract the reasoning path from the model.",
      agentTitle: "Specialized AI Agents",
      agentSub: "Create persistent expert personas for auditing and training.",
      iterativeTitle: "Iterative Excellence",
      iterativeSub: "Optimization loops for the final 10% of quality.",
      tcreiDetails: {
        title: "T-C-R-E-I Framework",
        task: { title: "Task", body: "Clearly define the objective." },
        context: { title: "Context", body: "Provide relevant background info." },
        reference: { title: "Reference", body: "Give examples of excellence." },
        evaluate: { title: "Evaluate", body: "Audit the output for quality." },
        iterate: { title: "Iterate", body: "Refine based on gaps." }
      },
      chainingDetails: {
        title: "Prompt Chaining Logic",
        intro: "Complex tasks fail because they overload the neural context window.",
        example: {
          title: "The Chaining Workflow",
          step1: "Extract raw themes from a transcript.",
          step2: "Generate taglines based on those themes.",
          step3: "Draft a campaign using the taglines."
        },
        why: { title: "Why it works", body: "It keeps accuracy high at every junction." }
      },
      logicDetails: {
        title: "Advanced Reasoning Extraction",
        intro: "Don't just ask for an answer; ask for the math behind it.",
        risk: "Generic prompts lead to generic averages.",
        cot: { title: "Chain of Thought", goal: "Reduce logic errors.", how: "Ask AI to 'Think step-by-step'.", example: "Analyze this code. Walk through the logic step-by-step...", result: "Finds bugs missed by fast-shot prompting." },
        tot: { title: "Tree of Thought", goal: "Explore multiple angles.", how: "Ask for 3 distinct reasoning paths.", example: "Generate 3 potential strategies. Path A (Aggressive)...", result: "Provides strategic breadth." }
      },
      agentDetails: {
        title: "Creating Expert Agents",
        intro: "Turn the LLM into a persistent consultant.",
        types: {
          simulation: { title: "Simulation Agent", desc: "Roleplay high-stakes scenarios.", how: "Act as a Senior Auditor...", benefit: "Practicing without risk." },
          feedback: { title: "Expert Feedback", desc: "Get professional critiques.", how: "Review this based on SaaS principles...", benefit: "Detecting blind spots." }
        },
        blueprint: { title: "The Agent Blueprint", steps: ["Define System Role", "Establish Context", "Set Instruction", "Define Stop Phrase"] }
      },
      iterativeDetails: {
        title: "Refinement Strategies",
        intro: "The first prompt is the 'Draft'. The third prompt is the 'Director'.",
        tacticsTitle: "Tuning Tactics",
        tactics: [
          { t: "Analogous Tasks", d: "Reframe the problem using a similar concept." },
          { t: "Constraints", d: "Add strict 'no' and 'must' requirements." }
        ],
        hitl: { title: "Human in the Loop", body: "Always audit the output before implementation." }
      }
    },
    notebooklm: {
      title: "NotebookLM for Leaders",
      subtitle: "Source-Grounded Intelligence",
      intro: "Transform massive datasets into actionable knowledge bases.",
      topicTitle: "Topic Mapping",
      topicSub: "Narrow scope ensures high-fidelity neural attention.",
      formatTitle: "Multi-Format Inputs",
      formatSub: "Combine PDFs, YouTube, and Audio for a 360-degree view.",
      auditTitle: "Source Validation",
      auditSub: "Audit author credentials and publication dates for truth.",
      filterTitle: "Surgical Control",
      filterSub: "Isolate specific sources to eliminate noise.",
      synthesisTitle: "Actionable Synthesis",
      synthesisSub: "Generate briefings, decks, and audio overviews grounded in fact."
    },
    aistudio: {
      title: "Google AI Studio: Feature Explainer",
      subtitle: "From Basic Prompts to a Full Creative Studio",
      intro: "Today, AI technology is accessible to everyone, but most people still only use it for simple prompts. Google AI Studio is a 'Full Creative Studio' where you can build apps, create professional content, and perform strategic analysis without writing a single line of code.",
      whyTitle: "Why use AI Studio?",
      why1: "Build Apps without Coding: Simply describe your intent in Plain English, and the AI writes the code to transform it into a functional app.",
      why2: "Completely Free to Start: Access it directly via browser at aistudio.google.com with just a Google account.",
      why3: "Versatile Tool: A one-stop shop for Chat, Image, Video, Audio creation, and Strategic Analysis.",
      chat: {
        title: "1. Chat Tab: Controlling AI Intelligence",
        desc: "The Chat Tab is where you shape the AI's personality. System Instructions are key here.",
        instruction: "By defining Gemini as 'Act as a professional UX Designer,' every response will follow that expert persona.",
        advanced: "Advanced features include Thinking Mode (seeing the reasoning path) and Google Search Grounding (verified data).",
        table: {
          feature: "Feature", flash: "Gemini 2.5 Flash", pro: "Gemini 2.5 Pro",
          speed: "Speed", speedFlash: "Ultra-fast, instant", speedPro: "Slower, much deeper",
          intel: "Intelligence", intelFlash: "Great for quick reasoning", intelPro: "Elite reasoning (GPT-5 class)",
          cost: "Cost", bestFor: "Best For", bestForFlash: "Daily chatbots & fast apps", bestForPro: "Coding, data logic"
        }
      },
      stream: {
        title: "2. Stream Tab: Real-time Interaction",
        desc: "Connect with AI via Real-time Voice or Text. Perfect for language learning.",
        step1: "Select Model & Voice: Choose your preferred persona.",
        step2: "Practice: Ask 'Help me learn Spanish' naturally.",
        step3: "Response: Speak directly without typing."
      },
      media: {
        title: "3. Generate Media Tab: High-End Creation",
        desc: "Section for content creators to generate assets.",
        imageTitle: "Image Generation",
        image1: "Nano Banana Pro: 4K quality text rendering.",
        image2: "Imagen 4: Ultimate photo-realism.",
        videoTitle: "Video (VEO 3.1)",
        videoDesc: "Cinematic videos with Matching Ambient Sound.",
        audioTitle: "Audio & Music",
        audioDesc: "Multi-speaker podcasts or Ambient Music via LIA Real-time."
      },
      build: {
        title: "4. Build Tab: Vibe Coding (No-Code)",
        desc: "Describe your app and watch the AI write the code.",
        preview: "Real-time Preview: Type prompts like 'Add a widget' instantly.",
        github: "GitHub: Sync and move to Pro IDEs.",
        deploy: "One-Click: Host on Google Cloud.",
        secretTitle: "Master Class Secret",
        secretDesc: "Use Chat first to write a detailed App Prompt, then paste into Build."
      },
      advanced: {
        title: "5. Advanced Applications",
        s1Title: "Strategic Analysis", s1Desc: "Analyze competitors via URL.",
        s2Title: "Whiteboard to Excel", s2Desc: "Convert hand-drawn notes to sheets.",
        s3Title: "Document Analysis", s3Desc: "Audit contracts for clauses.",
        s4Title: "Live Screen Sharing", s4Desc: "Get live UX feedback."
      },
      tips: {
        title: "3 Key Takeaways",
        t1: "Always use System Instructions.",
        t2: "Flash for speed, Pro for depth.",
        t3: "Vibe Coding: Build apps in minutes."
      }
    },
    deployment: {
      title: "Application Deployment SOP",
      subtitle: "The Path to Production",
      intro: "A professional standard operating procedure for moving from Playground to Public URL.",
      phase1: {
        title: "Phase 1: Creative Studio",
        sub: "Refining the intent before touching code.",
        point1Title: "Meta-Prompting", point1Body: "Use AI to design the perfect build prompt.",
        point2Title: "Model Precision", point2Body: "Use Temp 0 for technical logic."
      },
      phase2: {
        title: "Phase 2: Version Control",
        sub: "Using GitHub as the Cloud Layer for code.",
        concepts: { 1: "Repositories (The Project Home)", 2: "Branching (The Safety Net)", 3: "PRs (Code Verification)", 4: "Merging (Stable Builds)" },
        save: "CRITICAL: Stage and Commit changes to upload to the cloud."
      },
      phase3: {
        title: "Phase 3: Hosting",
        sub: "The Engine that powers your live site.",
        bridge: "Vercel connects your GitHub code to a .vercel.app URL.",
        magic: "Continuous Deployment: Commit code and the site updates instantly."
      },
      phase4: {
        title: "Phase 4: Custom Domains",
        sub: "Professional branding and global presence.",
        dns: "Delegate name servers to Vercel for complete control.",
        warning: "Warning: Moving Name Servers can disrupt existing email services (MX records)."
      }
    },
    ailevels: {
      title: "AI Levels: From Tool to Agent",
      subtitle: "Understanding the Evolution of Intelligence",
      intro: "Explore the different levels of AI integration and how they transform from simple tools into autonomous agents.",
      level1: { title: "Level 1: Assisted AI", body: "AI helps with specific tasks under direct human supervision." },
      level2: { title: "Level 2: Reasoners", body: "AI can solve complex problems and explain its reasoning process." },
      level3: { title: "Level 3: Agents", body: "AI can take actions and complete multi-step workflows autonomously." },
      level4: { title: "Level 4: Innovators", body: "AI can discover new knowledge and create original inventions." },
      level5: { title: "Level 5: Organizations", body: "AI systems that can manage entire departments or companies." }
    },
    sections: {
      learningPath: "The Learning Path",
      learningPathSub: "Master the 5 pillars that separate AI-Augmented Leaders from automated workers.",
      strategyTitle: "Beyond Efficiency:",
      strategyHighlight: "The AI Sovereignty Blueprint",
      strategySub: "Scaling in the AI era is about encoding your unique value into proprietary workflows.",
      blueprintBtn: "Get Full Strategy Blueprint"
    },
    strategy: {
      s1Title: "Operational Sovereignty",
      s1Desc: "Build custom AI agents that reflect your company's proprietary data.",
      s2Title: "Organizational Literacy",
      s2Desc: "Every department lead must use the 10/80/10 model.",
      s3Title: "Scaling High-Value Empathy",
      s3Desc: "Automate research to focus on high-impact relationships."
    },
    quiz: {
      question: "Question",
      of: "of",
      score: "Your Score",
      retry: "Retry Quiz"
    },
    mentor: {
      title: "Mindset Mentor",
      sub: "Strategic AI Consulting",
      initial: "Hello! I am your AI Mindset Mentor. How can I help you shift from a 'Doer' to a 'Director' today?",
      placeholder: "Ask about strategy, taste, or the 10/80/10 rule..."
    }
  },
  my: {
    hero: {
      tag: "AI-First ခေတ်၏ အခွင့်အလမ်းများကို အမိအရ ဆုပ်ကိုင်ပါ",
      title1: "AI ကို အလုပ်လုပ်ဖို့သက်သက် မသုံးပါနဲ့။",
      title2: "AI ကို ဦးဆောင်ဖို့ အသုံးချပါ။",
      subtitle: "Dan Martell ၏ Framework များနှင့် AI ခေတ်အတွက် လိုအပ်သော အခြေခံစိတ်ဓာတ်များ။ အလုပ်ကို ကိုယ်တိုင်လုပ်သူ (Doer) အဖြစ်မှ AI ကို ညွှန်ကြားသူ (Director) အဖြစ်သို့ ကူးပြောင်းပါ။",
      btnStart: "စတင်လေ့လာရန်",
      btnWatch: "ဗဟုသုတ ကြည့်ရှုရန်"
    },
    nav: {
      home: "ပင်မစာမျက်နှာ",
      curriculum: "သင်ရိုးညွှန်းတမ်း",
      prompting: "Prompting (ညွှန်ကြားချက်ပေးခြင်း)",
      notebooklm: "NotebookLM (အချက်အလက်အခြေပြု AI)",
      aistudio: "AI Studio (ဖန်တီးမှုစတူဒီယို)",
      deployment: "Deployment (ဝဘ်ဆိုဒ်လွှင့်တင်ခြင်း)",
      ailevels: "AI အဆင့်များ",
      quiz: "အရည်အချင်းစစ်ရန်",
      login: "ဝင်ရောက်ရန်",
      signup: "အကောင့်ဖွင့်ရန်",
      logout: "ထွက်ရန်",
    },
    auth: {
      loginTitle: "ပြန်လည်ကြိုဆိုပါသည်",
      signupTitle: "အကယ်ဒမီသို့ဝင်ရောက်ပါ",
      email: "အီးမေးလ်လိပ်စာ",
      password: "လျှို့ဝှက်နံပါတ်",
      confirmPassword: "လျှို့ဝှက်နံပါတ်အတည်ပြုပါ",
      name: "နာမည်အပြည့်အစုံ",
      loginBtn: "ဝင်ရောက်ရန်",
      signupBtn: "အကောင့်ဖွင့်ရန်",
      noAccount: "အကောင့်မရှိသေးဘူးလား?",
      hasAccount: "အကောင့်ရှိပြီးသားလား?",
      toggleSignup: "အကောင့်ဖွင့်ရန်",
      toggleLogin: "ဝင်ရောက်ရန်",
      error: "အမှားအယွင်းရှိနေပါသည်",
      successLogin: "အောင်မြင်စွာဝင်ရောက်ပြီးပါပြီ",
      successSignup: "အကောင့်အောင်မြင်စွာဖွင့်ပြီးပါပြီ",
    },
    assistants: {
      hubTitle: "AI Assistants (အကူအညီပေးမည့် AI များ)",
      academyName: "Academy Master Assistant",
      promptName: "Prompting Guru Assistant",
      academyDesc: "သင်တန်းနှင့်ပတ်သက်သော အချက်အလက်များ မေးမြန်းရန်",
      promptDesc: "အဆင့်မြင့် Prompt (ညွှန်ကြားချက်) များ ရေးသားရန်"
    },
    resources: {
      title: "သင်ခန်းစာ PDF နှင့် လက်စွဲများ",
      sub: "အသေးစိတ် slide များနှင့် ဗျူဟာလမ်းညွှန်များကို အော့ဖ်လိုင်းလေ့လာရန် ဒေါင်းလုဒ်ရယူပါ။",
      btn: "PDF စာကြည့်တိုက်သို့ သွားရန်",
      cta: "သင်ခန်းစာ မှတ်စုများ ရယူရန်"
    },
    prompting: {
      title: "Prompt Engineering (AI ကို ညွှန်ကြားခြင်းအတတ်ပညာ)",
      subtitle: "Google ၏ အခြေခံကျောက်တိုင် ၅ ခုနှင့် နောက်ဆက်တွဲများ",
      intro: "စွမ်းဆောင်ရည်မြင့် Prompting ၏ အခြေခံတည်ဆောက်ပုံကို လေ့လာပါ။ ခန့်မှန်းရုံမှသည် စနစ်တကျ တည်ဆောက်သူ (Engineer) ဖြစ်လာပါ။",
      pillarTitle: "အခြေခံ ကျောက်တိုင် ၅ ခု (T-C-R-E-I)",
      pillarSub: "အဆင့်မြင့် Prompt တိုင်းအတွက် မရှိမဖြစ် Framework ဖြစ်သည်။",
      chainingTitle: "Prompt Chaining (ညွှန်ကြားချက်များကို ချိတ်ဆက်ခြင်း)",
      chainingSub: "ရှုပ်ထွေးသောအလုပ်များကို လွယ်ကူသော အဆင့်များအဖြစ် ခွဲထုတ်ခြင်း။",
      logicTitle: "Deep Logic (နက်နဲသော စဉ်းစားတွေးခေါ်မှု ပုံစံများ)",
      logicSub: "AI ၏ စဉ်းစားပုံလမ်းကြောင်းကို အဆင့်ဆင့် ဆွဲထုတ်ခြင်း။",
      agentTitle: "Specialized AI Agents (အထူးပြု AI အဖွဲ့သားများ)",
      agentSub: "ကျွမ်းကျင်သူ အကြံပေးများ ဖန်တီး၍ အလုပ်များကို စစ်ဆေးခြင်း။",
      iterativeTitle: "Iterative Excellence (အဆင့်ဆင့် အချောသတ်ခြင်း)",
      iterativeSub: "ရလဒ် အကောင်းဆုံးဖြစ်ရန် ပြန်လည် ပြုပြင်တည်ဆောက်ခြင်း။",
      tcreiDetails: {
        title: "T-C-R-E-I Framework အသေးစိတ်",
        task: { title: "Task (လုပ်ငန်း)", body: "တိကျသော ပန်းတိုင်ကို သတ်မှတ်ပါ။" },
        context: { title: "Context (အခြေအနေ)", body: "နောက်ခံ အချက်အလက်များ ပေးပါ။" },
        reference: { title: "Reference (စံနမူနာ)", body: "ထူးချွန်သော နမူနာများ ပြသပါ။" },
        evaluate: { title: "Evaluate (စစ်ဆေးခြင်း)", body: "ရလဒ်ကို ပြန်လည် သုံးသပ်ပါ။" },
        iterate: { title: "Iterate (ပြုပြင်ခြင်း)", body: "လိုအပ်သည်များကို ပြန်လည်ပြင်ဆင်ပါ။" }
      },
      chainingDetails: {
        title: "Prompt Chaining နည်းလမ်း",
        intro: "ရှုပ်ထွေးသော အလုပ်များကို တစ်ကြိမ်တည်း ခိုင်းပါက AI မှာ မှားယွင်းတတ်ပါသည်။ ထို့ကြောင့် အဆင့်ဆင့် ခွဲခိုင်းရပါမည်။",
        example: {
          title: "အလုပ်လုပ်ပုံ ဥပမာ",
          step1: "စာသားများမှ အဓိက အချက်များကို ထုတ်ယူပါ။",
          step2: "ထိုအချက်များပေါ်မူတည်၍ ခေါင်းစဉ် (Taglines) များ ရေးပါ။",
          step3: "ခေါင်းစဉ်များမှတစ်ဆင့် အစီအစဉ် (Campaign) တစ်ခု ရေးဆွဲပါ။"
        },
        why: { title: "ဘာကြောင့် သုံးသင့်သလဲ", body: "အဆင့်တိုင်းတွင် တိကျမှုကို ထိန်းထားနိုင်သောကြောင့် ဖြစ်သည်။" }
      },
      logicDetails: {
        title: "Advanced Reasoning (အဆင့်မြင့် စဉ်းစားပုံ ဆွဲထုတ်ခြင်း)",
        intro: "အဖြေကိုသာ မမေးပါနဲ့၊ အဖြေရပုံ လမ်းကြောင်းကိုပါ မေးပါ။",
        risk: "သာမန် Prompt များသည် သာမန်ရလဒ်များကိုသာ ပေးတတ်သည်။",
        cot: { title: "Chain of Thought (CoT)", goal: "စဉ်းစားပုံ အမှား လျှော့ချရန်။", how: "'အဆင့်ဆင့် စဉ်းစားပါ' (Think step-by-step) ဟု ခိုင်းပါ။", example: "ဤကုဒ်ကို စစ်ဆေးပါ။ စဉ်းစားပုံကို တစ်ဆင့်ချင်း ရှင်းပြပါ...", result: "သာမန်ထက် ပိုမိုတိကျသော အဖြေရစေသည်။" },
        tot: { title: "Tree of Thought (ToT)", goal: "ရှုထောင့်မျိုးစုံ သိရန်။", how: "နည်းလမ်း ၃ ခု စဉ်းစားခိုင်းပါ။", example: "ဖြစ်နိုင်ခြေရှိသော ဗျူဟာ ၃ ခုကို စဉ်းစားပါ။ လမ်းကြောင်း (က)...", result: "ဗျူဟာမြောက် ရွေးချယ်မှုများ ရရှိစေသည်။" }
      },
      agentDetails: {
        title: "Expert Agents (AI အဖွဲ့သားများ) ဖန်တီးခြင်း",
        intro: "AI ကို အမြဲတမ်း အကြံပေးမည့် ကျွမ်းကျင်သူ တစ်ဦးအဖြစ် ပြောင်းလဲပါ။",
        types: {
          simulation: { title: "Simulation Agent", desc: "လက်တွေ့ လေ့ကျင့်မှုများ လုပ်ပါ။", how: "သင်သည် အင်တာဗျူးသူ ဖြစ်သည်...", benefit: "အမှားမရှိဘဲ လေ့ကျင့်နိုင်ခြင်း။" },
          feedback: { title: "Expert Feedback", desc: "ကျွမ်းကျင်သူ ဝေဖန်ချက် ရယူပါ။", how: "ဤအလုပ်ကို စီးပွားရေး ရှုထောင့်မှ စစ်ဆေးပေးပါ...", benefit: "အားနည်းချက်များကို သိမြင်နိုင်ခြင်း။" }
        },
        blueprint: { title: "Agent Blueprint", steps: ["စရိုက် (System Role) သတ်မှတ်ပါ", "အခြေအနေ (Context) ပေးပါ", "ညွှန်ကြားချက် (Instruction) ပေးပါ", "ရပ်တန့်ရမည့်အချက် (Stop Phrase) သတ်မှတ်ပါ"] }
      },
      iterativeDetails: {
        title: "Refinement (ပြန်လည် ပြုပြင်ခြင်း) ဗျူဟာ",
        intro: "ပထမဆုံး Prompt သည် 'မူကြမ်း' သာ ဖြစ်သည်။ တတိယမြောက် Prompt မှသာ 'Director' အဆင့် ဖြစ်လာမည်။",
        tacticsTitle: "ပြုပြင်နည်းများ",
        tactics: [
          { t: "Analogous Tasks (နှိုင်းယှဉ်ချက်များ)", d: "အကြောင်းအရာကို အခြားရှုထောင့်မှ တင်စားချက်များဖြင့် တင်ပြကြည့်ပါ။" },
          { t: "Constraints (ကန့်သတ်ချက်များ)", d: "မဖြစ်မနေ ပါရမည့် အချက်များနှင့် မလုပ်ရမည့် အချက်များကို သတ်မှတ်ပါ။" }
        ],
        hitl: { title: "Human in the Loop (လူသား၏ အခန်းကဏ္ဍ)", body: "AI ရလဒ်ကို လက်တွေ့မသုံးမီ အမြဲတမ်း ကိုယ်တိုင် စစ်ဆေးပါ။" }
      }
    },
    notebooklm: {
      title: "Leaders များအတွက် NotebookLM",
      subtitle: "Source-Grounded Intelligence (အချက်အလက်ပေါ် အခြေခံသော ဉာဏ်ရည်)",
      intro: "များပြားလှသော ဒေတာများကို အသုံးချနိုင်သော အသိပညာများအဖြစ် ပြောင်းလဲပါ။",
      topicTitle: "Topic Mapping (ခေါင်းစဉ် သတ်မှတ်ခြင်း)",
      topicSub: "တိကျသော ခေါင်းစဉ်က AI ကို ပိုမို အာရုံစိုက်စေသည်။",
      formatTitle: "Multi-Format Inputs (Format မျိုးစုံ အသုံးပြုခြင်း)",
      formatSub: "PDF၊ YouTube နှင့် Audio တို့ကို ပေါင်းစပ် သုတေသနပြုပါ။",
      auditTitle: "Source Validation (အရင်းအမြစ် စစ်ဆေးခြင်း)",
      auditSub: "ရေးသားသူနှင့် ရက်စွဲများကို စစ်ဆေး၍ ခိုင်လုံမှု ရှိမရှိ ကြည့်ပါ။",
      filterTitle: "Surgical Control (တိကျစွာ ထိန်းချုပ်ခြင်း)",
      filterSub: "မသက်ဆိုင်သော အချက်အလက်များကို ဖယ်ထုတ်၍ လိုအပ်သည်ကိုသာ မေးပါ။",
      synthesisTitle: "Actionable Synthesis (အနှစ်ချုပ် ထုတ်ယူခြင်း)",
      synthesisSub: "အစီရင်ခံစာများ၊ Slide များနှင့် အသံဖိုင်များကို အချက်အလက်ခိုင်လုံစွာ ထုတ်ယူပါ။"
    },
    aistudio: {
      title: "Google AI Studio - Feature Explainer (အသုံးပြုနည်း လမ်းညွှန်)",
      subtitle: "Prompt တစ်ခုရိုက်ရုံမှသည် Full Creative Studio တစ်ခုအထိ",
      intro: "Google AI Studio သည် coding ရေးသားရန် မလိုဘဲ မိမိစိတ်ကူးထဲမှ App တစ်ခုကို ဖန်တီးနိုင်ခြင်း၊ Content ဖန်တီးခြင်းနှင့် မဟာဗျူဟာမြောက် ခွဲခြမ်းစိတ်ဖြာမှုများ ပြုလုပ်နိုင်ခြင်းတို့ကြောင့် 'Full Creative Studio' တစ်ခုဟုပင် တင်စားနိုင်ပါသည်။",
      whyTitle: "AI Studio ကို အဘယ်ကြောင့် အသုံးပြုသင့်သနည်း?",
      why1: "Coding မလိုဘဲ App များ တည်ဆောက်နိုင်ခြင်း: မိမိအလိုရှိသည်ကို လူသုံးစကား (Plain English) ဖြင့် ပြောရုံဖြင့် AI က သင့်အတွက် Code များ ရေးပေးပြီး အလုပ်လုပ်သော App အဖြစ် ပြောင်းလဲပေးသည်။",
      why2: "လုံးဝ အခမဲ့ စတင်နိုင်ခြင်း: Google အကောင့်ရှိရုံဖြင့် aistudio.google.com တွင် browser ပေါ်၌ တိုက်ရိုက် အသုံးပြုနိုင်သည်။",
      why3: "စွယ်စုံသုံး ကိရိယာဖြစ်ခြင်း: Chat သာမက Image, Video, Audio ဖန်တီးမှုများနှင့် Strategic Analysis များကို တစ်နေရာတည်းတွင် လုပ်ဆောင်နိုင်သည်။",
      chat: {
        title: "၁။ Chat Tab: AI ၏ စဉ်းစားဉာဏ်ကို စနစ်တကျ ထိန်းချုပ်ခြင်း",
        desc: "Chat Tab သည် AI နှင့် စကားပြောရုံသက်သက် မဟုတ်ဘဲ AI ၏ စရိုက်လက္ခဏာ (Persona) ကို ပုံသွင်းယူသည့် နေရာဖြစ်သည်။",
        instruction: "Gemini ကို 'သင်သည် ကျွမ်းကျင်သော UX Designer တစ်ဦးဖြစ်သည်' ဟု သတ်မှတ်ပေးခြင်းဖြင့် AI ၏ တုံ့ပြန်မှုတိုင်းမှာ ထိုစရိုက်အတိုင်း ဖြစ်လာမည်ဖြစ်သည်။",
        advanced: "Thinking Mode (AI ၏ စဉ်းစားပုံ အဆင့်ဆင့်) နှင့် Google Search Grounding (အချက်အလက်များကို Google search မှ တိုက်ရိုက်ရယူခြင်း) တို့ကိုလည်း အသုံးပြုနိုင်သည်။",
        table: {
          feature: "လုပ်ဆောင်ချက်", flash: "Gemini 2.5 Flash", pro: "Gemini 2.5 Pro",
          speed: "Speed (မြန်နှုန်း)", speedFlash: "အလွန်မြန်ဆန်ပြီး ချက်ချင်း တုံ့ပြန်သည်", speedPro: "Flash ထက် နှေးသော်လည်း ပိုမိုနက်နဲသည်",
          intel: "Intelligence (ဉာဏ်ရည်)", intelFlash: "မြန်ဆန်သော တုံ့ပြန်မှုအတွက် ကောင်းသည်", intelPro: "အလွန်ရှုပ်ထွေးသော Reasoning များ လုပ်နိုင်သည်",
          cost: "ကုန်ကျစရိတ်", bestFor: "အသင့်တော်ဆုံး", bestForFlash: "နေ့စဉ်သုံး Chatbot နှင့် မြန်ဆန်သော App များ", bestForPro: "Coding, ဒေတာ ခွဲခြမ်းစိတ်ဖြာမှုနှင့် နက်နဲသော စဉ်းစားမှုများ"
        }
      },
      stream: {
        title: "၂။ Stream Tab: Real-time Interaction (အချိန်နှင့်တစ်ပြေးညီ တုံ့ပြန်မှု)",
        desc: "AI နှင့် Voice သို့မဟုတ် Text ဖြင့် အချိန်နှင့်တစ်ပြေးညီ (Real-time) အပြန်အလှန် ဆက်သွယ်နိုင်သည့် နေရာဖြစ်သည်။",
        step1: "Model နှင့် အသံရွေးချယ်ပါ: မိမိအသုံးပြုလိုသော Gemini Model နှင့် နှစ်သက်ရာ အသံကို ရွေးချယ်ပါ။",
        step2: "ဘာသာစကား လေ့ကျင့်ပါ: 'Help me learn Spanish' ဟု ပြောလိုက်ပါက AI က ချက်ချင်း စကားပြန်ပြောပါမည်။",
        step3: "ချက်ချင်း တုံ့ပြန်မှု: စာရိုက်ရန် မလိုဘဲ အသံဖြင့် တိုက်ရိုက် မေးမြန်း ဆွေးနွေးနိုင်သည်။"
      },
      media: {
        title: "၃။ Generate Media Tab: ဖန်တီးမှုအသစ်များ ပြုလုပ်ခြင်း",
        desc: "Content Creator များအတွက် အားအကိုးရဆုံး ကဏ္ဍ ဖြစ်လာပါလိမ့်မည်။",
        imageTitle: "Image Generation (ပုံရိပ်များ ဖန်တီးခြင်း)",
        image1: "Nano Banana Pro: 4K အရည်အသွေး ထွက်ရှိပြီး စာသားများကို တိကျစွာ ဖော်ပြနိုင်သည်။",
        image2: "Imagen 4: ဓာတ်ပုံစစ်စစ်ကဲ့သို့ Photo-realism အတွက် သုံးပါ။",
        videoTitle: "Video (VEO 3.1)",
        videoDesc: " Cinematic ဗီဒီယိုများကို Matching Ambient Sound (နောက်ခံအသံ) နှင့်အတူ တစ်ပါတည်း ဖန်တီးပေးခြင်း ဖြစ်သည်။",
        audioTitle: "Audio & Music (အသံနှင့် တေးဂီတ)",
        audioDesc: "Multi-speaker podcast များ ဖန်တီးနိုင်ခြင်းနှင့် LIA Real-time ဖြင့် Ambient Music များ ဖန်တီးနိုင်သည်။"
      },
      build: {
        title: "၄။ Build Tab: Vibe Coding (Coding မလိုဘဲ App များ ဖန်တီးခြင်း)",
        desc: "မိမိအလိုရှိသော App ၏ ပုံစံကို လူသုံးစကားဖြင့် ဖော်ပြရုံဖြင့် AI က Code များ ရေးပေးခြင်း ဖြစ်သည်။",
        preview: "Real-time Preview: Prompt ရိုက်လိုက်သည်နှင့် App Preview ကို ချက်ချင်း တွေ့ရမည်။",
        github: "GitHub Integration: Code များကို GitHub နှင့် Sync လုပ်ပြီး ဆက်လက် အဆင့်မြှင့်တင်နိုင်သည်။",
        deploy: "Deploy လုပ်ခြင်း: Rocket Icon ကို နှိပ်ပြီး Public URL တစ်ခုဖြင့် အများသုံးနိုင်ရန် မျှဝေနိုင်သည်။",
        secretTitle: "Master Class Secret (လျှို့ဝှက်ချက်)",
        secretDesc: "Playground တွင် Gemini ကို 'ကျွန်ုပ်အတွက် အသေးစိတ်ကျသော App Building Prompt တစ်ခု အရင်ရေးပေးပါ' ဟု ခိုင်းပါ။ ထို Prompt ကိုမှ Build Tab တွင် ပြန်သုံးပါ။"
      },
      advanced: {
        title: "၅။ Advanced Applications (အဆင့်မြင့် အသုံးချမှုများ)",
        s1Title: "Strategic Analysis", s1Desc: "ပြိုင်ဘက်၏ Landing Page URL ကို ထည့်ပြီး 'ဤလုပ်ငန်း၏ အားနည်းချက်ကို ရှာပေးပါ' ဟု ခိုင်းနိုင်သည်။",
        s2Title: "Whiteboard to Excel", s2Desc: "Whiteboard ပုံများကို တင်လိုက်ရုံဖြင့် စနစ်ကျသော Excel ဇယားအဖြစ် ပြောင်းလဲပေးနိုင်သည်။",
        s3Title: "Document Analysis", s3Desc: "စာမျက်နှာ ၄၀ ကျော်ရှိသော စာချုပ်များကို တင်ပြီး အချက်အလက်များကို တိုက်ရိုက် မေးမြန်းနိုင်သည်။",
        s4Title: "Live Screen Sharing", s4Desc: "AI ကို မိမိ Screen ကြည့်ခိုင်းပြီး UX ဒီဇိုင်း အဆင်ပြေရဲ့လားဟု Live အသံဖြင့် ဆွေးနွေးနိုင်သည်။"
      },
      tips: {
        title: "အဓိက မှတ်သားစရာ ၃ ချက်",
        t1: "System Instructions ကို အမြဲသုံးပါ။",
        t2: "Specific Models ကို ရွေးချယ်ပါ (Flash, Pro, Nano)။",
        t3: "Vibe Coding ကို စမ်းသပ်ပါ - မိနစ်ပိုင်းအတွင်း App တည်ဆောက်နိုင်သည်။"
      }
    },
    deployment: {
      title: "Application Deployment SOP (ထုတ်လွှင့်ခြင်း လုပ်ငန်းစဉ်)",
      subtitle: "The Path to Production (ထုတ်လွှင့်ခြင်း လမ်းကြောင်း)",
      intro: "Playground မှသည် Public URL အထိ ပရော်ဖက်ရှင်နယ် ဆန်စွာ ထုတ်လွှင့်နည်း လမ်းညွှန်။",
      phase1: {
        title: "Phase 1: Creative Studio",
        sub: "ကုဒ်မရေးမီ စိတ်ကူးကို အရင်ဆုံး ပြုပြင်ခြင်း။",
        point1Title: "Meta-Prompting", point1Body: "အကောင်းဆုံး build prompt ရရှိရန် AI ကို အရင်ဆုံး ပုံစံထုတ်ခိုင်းပါ။",
        point2Title: "Model Precision", point2Body: "နည်းပညာပိုင်းဆိုင်ရာများအတွက် Temp 0 ကို သုံးပါ။"
      },
      phase2: {
        title: "Phase 2: Version Control",
        sub: "GitHub ကို ကုဒ်များ သိမ်းဆည်းရန် Cloud Layer အဖြစ် သုံးခြင်း။",
        concepts: { 1: "Repositories (ပရောဂျက်၏ အိမ်)", 2: "Branching (ဘေးကင်းလုံခြုံရေး ပိုက်)", 3: "PRs (ကုဒ် စစ်ဆေးခြင်း)", 4: "Merging (ပေါင်းစပ်ခြင်း)" },
        save: "အရေးကြီးဆုံးအချက်: Stage and Commit လုပ်မှသာ ကုဒ်များ Cloud ပေါ်သို့ ရောက်ရှိမည်။"
      },
      phase3: {
        title: "Phase 3: Hosting",
        sub: "သင့်ဝဘ်ဆိုဒ်ကို လွှင့်တင်ပေးမည့် အင်ဂျင် (Engine)။",
        bridge: "Vercel သည် GitHub ကုဒ်များကို .vercel.app URL သို့ ချိတ်ဆက်ပေးသည်။",
        magic: "Continuous Deployment: ကုဒ်ပြင်လိုက်သည်နှင့် ဝဘ်ဆိုဒ်က အလိုအလျောက် update ဖြစ်သည်။"
      },
      phase4: {
        title: "Phase 4: Custom Domains",
        sub: "Professional Branding နှင့် ကမ္ဘာအနှံ့ ဝင်ရောက်နိုင်မှု။",
        dns: "Name servers များကို Vercel ထံသို့ လွှဲပြောင်းပေးပါ။",
        warning: "သတိပြုရန်: Name Servers ပြောင်းလဲခြင်းသည် လက်ရှိသုံးနေသော Email များကို ထိခိုက်စေနိုင်သည်။"
      }
    },
    ailevels: {
      title: "AI အဆင့်များ: Tool မှ Agent သို့",
      subtitle: "ဉာဏ်ရည်တု၏ ဆင့်ကဲပြောင်းလဲမှုကို နားလည်ခြင်း",
      intro: "AI ပေါင်းစပ်မှု၏ မတူညီသော အဆင့်များကို လေ့လာပြီး ၎င်းတို့သည် ရိုးရှင်းသော ကိရိယာများမှ ကိုယ်ပိုင်လုပ်ဆောင်နိုင်သော အေးဂျင့်များအဖြစ် မည်သို့ ပြောင်းလဲသွားသည်ကို ရှာဖွေပါ။",
      level1: { title: "အဆင့် ၁: Assisted AI", body: "AI သည် လူသား၏ တိုက်ရိုက်ကြီးကြပ်မှုအောက်တွင် သတ်မှတ်ထားသော အလုပ်များကို ကူညီပေးသည်။" },
      level2: { title: "အဆင့် ၂: Reasoners", body: "AI သည် ရှုပ်ထွေးသော ပြဿနာများကို ဖြေရှင်းနိုင်ပြီး ၎င်း၏ စဉ်းစားပုံကို ရှင်းပြနိုင်သည်။" },
      level3: { title: "အဆင့် ၃: Agents", body: "AI သည် အဆင့်ဆင့်သော အလုပ်များကို ကိုယ်တိုင် ဆုံးဖြတ်လုပ်ဆောင်နိုင်သည်။" },
      level4: { title: "အဆင့် ၄: Innovators", body: "AI သည် အသိပညာအသစ်များကို ရှာဖွေနိုင်ပြီး မူရင်းတီထွင်မှုများကို ဖန်တီးနိုင်သည်။" },
      level5: { title: "အဆင့် ၅: Organizations", body: "ဌာနတစ်ခုလုံး သို့မဟုတ် ကုမ္ပဏီတစ်ခုလုံးကို စီမံခန့်ခွဲနိုင်သော AI စနစ်များ။" }
    },
    sections: {
      learningPath: "The Learning Path (သင်ယူမှု လမ်းစဉ်)",
      learningPathSub: "AI ခေတ်တွင် အောင်မြင်သော ခေါင်းဆောင်တစ်ဦးဖြစ်ရန် လိုအပ်သော အခြေခံကျောက်တိုင် ၅ ခု။",
      strategyTitle: "Beyond Efficiency (မြန်ဆန်ရုံတင်မကဘဲ) -",
      strategyHighlight: "The AI Sovereignty Blueprint",
      strategySub: "AI ခေတ်တွင် လုပ်ငန်းချဲ့ထွင်ခြင်းသည် သင်၏ တန်ဖိုးရှိသော နည်းလမ်းများကို ကိုယ်ပိုင် AI စနစ်များတွင် ထည့်သွင်းခြင်းသာ ဖြစ်သည်။",
      blueprintBtn: "ဗျူဟာစာအုပ်ကို ရယူရန်"
    },
    strategy: {
      s1Title: "Operational Sovereignty",
      s1Desc: "Generic tools များအစား သင့်လုပ်ငန်း၏ ကိုယ်ပိုင် AI Agent များကို တည်ဆောက်ပါ။",
      s2Title: "Organizational Literacy",
      s2Desc: "ဌာနတိုင်းမှ ခေါင်းဆောင်များသည် 10/80/10 မော်ဒယ်ကို သုံးရမည်။",
      s3Title: "Scaling High-Value Empathy",
      s3Desc: "သုနတေသနများကို AI ဖြင့် လုပ်ဆောင်ပြီး လူသားချင်း ဆက်ဆံရေးအတွက် အချိန်ပိုပေးပါ။"
    },
    quiz: {
      question: "မေးခွန်း",
      of: "အနက်",
      score: "သင့်ရမှတ်",
      retry: "ပြန်လည်ဖြေဆိုရန်"
    },
    mentor: {
      title: "Mindset Mentor",
      sub: "Strategic AI Consulting (မဟာဗျူဟာမြောက် AI အကြံပေး)",
      initial: "မင်္ဂလာပါ! ကျွန်ုပ်က သင်၏ AI Mindset Mentor ဖြစ်ပါသည်။ ယနေ့ သင့်ကို မည်သို့ ကူညီပေးရမလဲ?",
      placeholder: "ဗျူဟာ၊ Taste သို့မဟုတ် 10/80/10 စည်းမျဉ်းများအကြောင်း မေးမြန်းပါ..."
    }
  }
};
