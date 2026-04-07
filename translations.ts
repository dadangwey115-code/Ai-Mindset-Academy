
import { Language } from './types';

export const UI_STRINGS: Record<Language, any> = {
  en: {
    hero: {
      tag: "Master the AI-First Era",
      title1: "Don't Use AI to Work.",
      title2: "Use AI to Lead.",
      subtitle: "Based on the frameworks of Dan Martell and the Core Mindsets for the AI Era. Transform from a 'Doer' to a 'Director'.",
      btnStart: "Get Started",
      btnWatch: "Explore AI Answers"
    },
    concept: {
      title: "Explore AI Answers",
      subtitle: "Understand the 'Why' behind the AI Mindset",
      tabs: {
        teachers: "Teachers",
        parents: "Parents",
        business: "Business"
      },
      sections: {
        teachers: [
          { q: "If an AI could handle 80% of your lesson planning and administrative grading, how much more energy would you have to actually connect with and inspire your students?", a: "Use Gemini 3.1 Pro to generate lesson plans from a single PDF. Use an AI Grader to provide the first draft of feedback on essays, which you then refine." },
          { q: "How can you realistically provide a unique, personalized learning path for 30 different students in one hour without an AI 'Teaching Assistant' at your side?", a: "Use 'Branching Logic.' Feed the AI a student's past test scores and ask: 'Create three versions of this math problem: one for a visual learner, one for a logic-based learner, and one for a struggling student.'" },
          { q: "What if every student could receive instant, constructive feedback on their essay at 9:00 PM on a Sunday, even while you are resting?", a: "Set up a Custom GPT or Gemini Gem specifically trained on your grading rubric. Students upload drafts; the AI points out grammar and structure errors before you ever see the paper." },
          { q: "Are we teaching students to memorize facts that an AI can find in seconds, or are we teaching them how to ask the AI the right questions to solve world problems?", a: "Move to Problem-Based Learning. Give students a global crisis (e.g., climate change) and grade them on the Prompts they use to find solutions, not just the facts they find." },
          { q: "If AI is the 'calculator' for writing and coding, is it our responsibility to ban it, or to teach students how to drive it ethically and effectively?", a: "Teach 'AI-Human Collaboration.' Assignments should require an 'AI Log' where students show which parts the AI wrote and how they verified the facts." }
        ],
        parents: [
          { q: "When your child enters the workforce in 10–15 years, will they be competing against AI, or will they be expected to command AI to do their job?", a: "Don't just let them play games; teach them Prompt Engineering. Show them how to use AI to build a simple app or write a story. Being a 'User' is common; being a 'Commander' is the career skill." },
          { q: "Do you know how to teach your child to identify AI-generated 'Deepfakes' or misinformation, or are you leaving them to figure it out alone on the internet?", a: "Use AI to teach AI. Show them 'Deepfake Challenges' online. Practice 'Verification Habits'—always check three sources if a video looks too perfect or too shocking." },
          { q: "Why pay for an expensive tutor once a week when your child could have a 24/7 AI tutor that understands their specific learning style and never loses patience?", a: "Use NotebookLM by Google. Upload your child’s specific textbook. The AI becomes a tutor that only uses the facts from that book, so it won’t hallucinate or get distracted." },
          { q: "How much 'mental load' could you shed if an AI managed your family’s grocery lists, meal plans, and activity schedules based on everyone's health goals and preferences?", a: "Use Agentic Workflows (n8n/Zapier). Connect your digital calendar to a meal-planning AI. It can automatically generate a grocery list based on your busy nights and health goals." },
          { q: "If your child has a niche interest—like space or ancient history—how can AI help them dive deeper into that subject than any standard textbook ever could?", a: "Use Image Generation (Imagen/Midjourney). If a child loves space, have them describe a new planet and see it come to life instantly. This turns passive learning into active creation." }
        ],
        business: [
          { q: "Every hour your team spends on manual data entry or basic customer support is an hour you are paying 'human prices' for 'machine tasks'. Can your margins survive that?", a: "Implement RPA (Robotic Process Automation) + AI. Any task that is 'If This, Then That' (like moving data from an email to an Excel sheet) should be automated. You save 30+ hours a week per employee." },
          { q: "You are sitting on years of customer data; do you have an AI 'Data Scientist' looking for the hidden patterns that could predict your next million-dollar product?", a: "Use Gemini 1.5/3.1's Long Context. Upload 1,000 customer reviews or a year of sales data. Ask: 'What is the #1 reason people stop buying from us that we haven't noticed yet?'" },
          { q: "Can your business provide 'White Glove' service to a customer in a different time zone and language at 3:00 AM without hiring a single new person?", a: "Deploy AI Chatbots grounded in your company data. Unlike old bots, these use LLMs to understand intent and emotion, solving 80% of issues without human intervention." },
          { q: "Will top-tier talent want to work for your company if they find out they have to do manual work that their previous employer had already automated with AI?", a: "Advertise your 'AI-First Culture.' Top talent wants to work where the tools are sharp. If you provide AI assistants to every staff member, you will attract the most efficient people in Myanmar." },
          { q: "In a market that changes every week, can you afford to wait for a monthly report, or do you need an Agentic AI system that gives you a 'Real-Time' pulse of your entire operation?", a: "Build a 'Business Intelligence Agent.' Instead of waiting for a meeting, you should be able to type to your data: 'How is my Singapore branch doing compared to last Tuesday?' and get an answer in 5 seconds." }
        ]
      }
    },
    nav: {
      home: "Home",
      curriculum: "Courses",
      prompting: "Prompting",
      notebooklm: "NotebookLM",
      aistudio: "AI Studio",
      deployment: "Deployment",
      ailevels: "AI Levels",
      quiz: "Take Quiz",
      login: "Login",
      signup: "Request Access",
      logout: "Logout",
      profile: "My Profile",
    },
    toast: {
      congrats: "Congratulations!",
      lessonCompleted: "Lesson Completed"
    },
    auth: {
      loginTitle: "Welcome Back",
      signupTitle: "Request Exclusive Access",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      name: "Full Name",
      loginBtn: "Login",
      signupBtn: "Request Invitation",
      noAccount: "Want to join the AI Mindset Academy?",
      requestInvitation: "Request an exclusive invitation",
      hasAccount: "Already have an invitation?",
      toggleSignup: "Request Access",
      toggleLogin: "Login",
      loginInfo: "The AI Mindset Academy is currently in exclusive preview. Please request an invitation to join our next cohort.",
      error: "Authentication Error",
      requestPending: "An access request for this email is already pending. Please wait for admin approval.",
      successLogin: "Logged in successfully!",
      successSignup: "Request submitted successfully!",
      authHeadline: "Master AI. Master Your Future.",
      categories: {
        teachers: "Teachers",
        parents: "Parents",
        business: "Business"
      },
      carousel: [
        {
          title: "For Teachers: Fatigue Reduction",
          description: "If AI handles 80% of your lesson prep and grading, how much more energy could you focus on your students' emotional growth?"
        },
        {
          title: "For Teachers: Personalized Learning",
          description: "How can you practically personalize learning for 30 students without an AI 'Teaching Assistant'?"
        },
        {
          title: "For Teachers: 24/7 Support",
          description: "How great would it be if AI could provide instant feedback to a student's essay even while you're resting on a Sunday night?"
        },
        {
          title: "For Teachers: Modern Curriculum",
          description: "Will you keep making students memorize facts AI can find in seconds, or teach them how to ask AI the right questions to solve problems?"
        },
        {
          title: "For Teachers: Ethical AI",
          description: "AI is becoming the 'calculator' for writing and coding. Instead of banning it, how will you guide students to use it ethically and effectively?"
        },
        {
          title: "For Parents: Future Readiness",
          description: "In 10-15 years, will your child be a 'competitor' to AI or the one 'directing' it?"
        },
        {
          title: "For Parents: Digital Safety",
          description: "Have you taught your child to distinguish between AI-generated misinformation and deepfakes, or are they left unprotected?"
        },
        {
          title: "For Parents: Personal AI Tutor",
          description: "Instead of an expensive tutor who visits once a week, wouldn't you want a 24/7 AI tutor that understands your child's unique learning style?"
        },
        {
          title: "For Parents: Household Management",
          description: "How much stress would be lifted if AI managed your family's shopping lists, recipes, and schedules based on your health needs?"
        },
        {
          title: "For Parents: Passion Exploration",
          description: "If your child loves astronomy or history, how can you use AI to help them explore deeper knowledge beyond standard textbooks?"
        },
        {
          title: "For Business: Resource Optimization",
          description: "Isn't it a waste of valuable human resources to have your employees performing manual tasks that machines can do?"
        },
        {
          title: "For Business: Data Insights",
          description: "How will you find hidden sales opportunities in years of customer data without an AI 'Data Scientist'?"
        },
        {
          title: "For Business: 24/7 Global Service",
          description: "Why aren't you using AI to provide 24/7 service to global customers in their own languages, even at 3 AM?"
        },
        {
          title: "For Business: Attracting Talent",
          description: "In an era of rapid tech advancement, would top talent choose a company that works manually or one that leverages AI?"
        },
        {
          title: "For Business: Real-time Decisions",
          description: "Market conditions change weekly. Will you wait for a month-end report or use Agentic AI for real-time insights?"
        }
      ]
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
      promptFrameworkTitle: "P.R.O.M.P.T. Framework",
      promptFrameworkSub: "The identity-driven framework for system-level engineering and AI agents.",
      comparisonTitle: "T-C-R-E-I vs. P.R.O.M.P.T.",
      comparisonSub: "Choosing the right framework for your specific use case.",
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
      },
      promptFrameworkDetails: {
        title: "P.R.O.M.P.T. Framework",
        intro: "To move from trial-and-error to predictable excellence, we use the P.R.O.M.P.T. framework.",
        persona: { title: "[P] Persona", body: "Assign a persona to filter generalized knowledge and access domain expertise." },
        context: { title: "[R] Relevant Context", body: "Provide background to prevent incorrect assumptions about your tech stack or logic." },
        objective: { title: "[O] Objective", body: "Explicit, action-oriented command using strong verbs like Write, Refactor, or Debug." },
        manner: { title: "[M] Manner & Style", body: "Control tone, format (JSON, Markdown), and structure for system compatibility." },
        parameters: { title: "[P] Parameters & Constraints", body: "Establish guardrails and tell the AI what NOT to do." },
        test: { title: "[T] Test & Tweak", body: "Iterate based on initial output. Treat prompts like source code." }
      },
      comparisonDetails: {
        title: "T-C-R-E-I vs. P.R.O.M.P.T.",
        intro: "Both frameworks solve the same problem but approach it from different angles.",
        tcrei: { title: "T-C-R-E-I", body: "Action-driven and iterative. Best for human-to-AI interaction, content creation, and workflow tools. Focuses on Examples." },
        prompt: { title: "P.R.O.M.P.T.", body: "Identity-driven and boundary-focused. Best for system-level engineering and building AI agents. Focuses on Persona and Parameters." },
        verdict: { title: "The Verdict", body: "Use T-C-R-E-I for quick problem solving. Use P.R.O.M.P.T. for autonomous agents or backend integrations." }
      },
      intentSection: {
        title: "Intent-Based Prompting",
        subtitle: "The Core Philosophy of Effective AI Communication",
        prompting: "Prompting is what you say.",
        context: "Context is what you know.",
        intent: "Intent is what you want.",
        focus: "Focus on the goal, not just the words.",
        learnMore: "Learn More",
        url: "https://intent-architect.mindset-it.online/"
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
    },
    profile: {
      title: "User Dashboard",
      journey: "Learning Journey",
      completed: "Completed",
      pending: "Locked / Pending",
      certificate: "Download Certificate",
      certTitle: "Certificate of Completion",
      certSubtitle: "AI Mindset Academy",
      certText: "This is to certify that",
      certBody: "has successfully completed the full curriculum of the AI Mindset Academy, mastering the frameworks of AI-Augmented Leadership and Strategic Implementation.",
      certDate: "Date of Achievement",
      certSignature: "Academy Director",
      noLessons: "No lessons completed yet. Start your journey in the Curriculum tab!",
      stats: "Academy Statistics",
      modulesCompleted: "Modules Completed",
      totalPoints: "Total Points Earned"
    },
    promptLibrary: {
      title: "Prompt Library",
      subtitle: "Access high-quality, pre-engineered prompts.",
      btn: "Open Library",
      modalTitle: "Mindful Prompting",
      modalSub: "Pause. Think. Act.",
      pause: {
        title: "1. Pause (Before Copy)",
        body: "Don't just copy blindly. Read the prompt structure. Understand the intent behind each instruction."
      },
      think: {
        title: "2. Think (Before Paste)",
        body: "How does this prompt fit your specific goal? What variables (Context, Task) do you need to adjust for your unique situation?"
      },
      act: {
        title: "3. Act (Before Enter)",
        body: "Paste, refine, and then hit enter. AI is your co-pilot, but you are the Director. Quality results require your final touch."
      },
      go: "Continue to Library",
      geminiGem: "Gemini Gem (Prompt Assistant)"
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
    concept: {
      title: "AI အမေးအဖြေ",
      subtitle: "AI Mindset ၏ နောက်ကွယ်မှ 'အကြောင်းရင်း' ကို နားလည်ပါ",
      tabs: {
        teachers: "ဆရာ",
        parents: "မိဘ",
        business: "လုပ်ငန်း"
      },
      sections: {
        teachers: [
          { q: "သင်ခန်းစာ ပြင်ဆင်တာတွေနဲ့ အိမ်စာစစ်တဲ့ အလုပ်တွေရဲ့ ၈၀% ကို AI က ကူလုပ်ပေးမယ်ဆိုရင်၊ ကျန်တဲ့အချိန်တွေကို ကျောင်းသားတွေရဲ့ စိတ်ဓာတ်ပိုင်းဆိုင်ရာ တိုးတက်ဖို့အတွက် မင်း ဘယ်လောက်တောင် ပိုပြီး အာရုံစိုက်နိုင်မလဲ?", a: "Gemini 3.1 Pro ကိုသုံးပြီး PDF တစ်ခုတည်းကနေ သင်ခန်းစာပြင်ဆင်မှုတွေ ပြုလုပ်ပါ။ AI Grader ကိုသုံးပြီး စာစီစာကုံးတွေအတွက် ပထမမူကြမ်း အကြံပြုချက်တွေ ရယူပြီးမှ ကိုယ်တိုင် ပြန်လည်စစ်ဆေးပါ။" },
          { q: "ကျောင်းသား ၃၀ ရှိတဲ့ အတန်းထဲမှာ ကျောင်းသားတစ်ဦးချင်းစီရဲ့ အားသာချက်၊ အားနည်းချက်အလိုက် မတူညီတဲ့ သင်ကြားမှုပုံစံကို AI 'သင်ကြားရေးလက်ထောက်' မပါဘဲနဲ့ မင်း ဘယ်လို လက်တွေ့ကျကျ လုပ်ပေးနိုင်မလဲ?", a: "'Branching Logic' ကို အသုံးပြုပါ။ ကျောင်းသားရဲ့ အရင်က ရမှတ်တွေကို AI ထဲထည့်ပြီး 'ဒီသင်္ချာပုစ္ဆာကို ပုံနဲ့ကြည့်မှနားလည်သူ၊ ယုတ္တိဗေဒနဲ့နားလည်သူနဲ့ အခက်အခဲရှိနေသူတွေအတွက် ပုံစံ ၃ မျိုး ထုတ်ပေးပါ' လို့ ခိုင်းစေနိုင်ပါတယ်။" },
          { q: "တနင်္ဂနွေနေ့ည မင်းအနားယူနေချိန်မှာတောင် ကျောင်းသားတစ်ယောက်က သူ့ရဲ့စာစီစာကုံးအတွက် အကြံဉာဏ်တောင်းရင် AI က ချက်ချင်း အဖြေပေးနိုင်နေတာဟာ ဘယ်လောက် ကောင်းမွန်တဲ့ အခွင့်အလမ်းဖြစ်မလဲ?", a: "သင်ကြားရေးစံနှုန်း (Grading Rubric) တွေကို သင်ကြားပေးထားတဲ့ Custom GPT သို့မဟုတ် Gemini Gem တစ်ခု တည်ဆောက်ထားပါ။ ကျောင်းသားတွေက သူတို့ရဲ့ မူကြမ်းတွေကို တင်လိုက်တာနဲ့ AI က သဒ္ဒါနဲ့ တည်ဆောက်ပုံ အမှားတွေကို သင်မစစ်ခင်ကတည်းက ထောက်ပြပေးပါလိမ့်မယ်။" },
          { q: "AI က စက္ကန့်ပိုင်းအတွင်း ရှာပေးနိုင်တဲ့ အချက်အလက်တွေကို ကျောင်းသားတွေကို အလွတ်ကျက်ခိုင်းနေဦးမှာလား? ဒါမှမဟုတ် ပြဿနာတွေကို ဖြေရှင်းဖို့ AI ကို ဘယ်လို မှန်ကန်တဲ့ မေးခွန်းမေးရမလဲဆိုတာကို သင်ပေးမှာလား?", a: "ပြဿနာအခြေပြု သင်ယူမှု (Problem-Based Learning) ကို ပြောင်းလဲပါ။ ကမ္ဘာလုံးဆိုင်ရာ အကျပ်အတည်းတစ်ခု (ဥပမာ- ရာသီဥတုပြောင်းလဲမှု) ကို ပေးပြီး ကျောင်းသားတွေက အဖြေရှာဖို့အတွက် AI ကို ဘယ်လို ညွှန်ကြားချက် (Prompts) တွေ သုံးသလဲဆိုတာပေါ်မှာ အမှတ်ပေးပါ။" },
          { q: "AI ဆိုတာ စာရေးတာနဲ့ Coding ရေးတာတွေအတွက် 'ဂဏန်းပေါင်းစက်' လို ဖြစ်လာပြီဆိုတော့၊ ဒါကို ပိတ်ပင်မယ့်အစား ကျောင်းသားတွေ အကျိုးရှိရှိနဲ့ ကျင့်ဝတ်နဲ့အညီ သုံးတတ်အောင် ဘယ်လို လမ်းပြပေးမလဲ?", a: "'AI-Human Collaboration' ကို သင်ကြားပေးပါ။ အိမ်စာတွေမှာ ကျောင်းသားတွေက ဘယ်အပိုင်းကို AI က ရေးပေးတာလဲ၊ အချက်အလက်တွေ မှန်မမှန် ဘယ်လို စစ်ဆေးခဲ့သလဲဆိုတာကို ဖော်ပြရမယ့် 'AI Log' ပါဝင်ခိုင်းပါ။" }
        ],
        parents: [
          { q: "နောက် ၁၀ နှစ်၊ ၁၅ နှစ်နေရင် မင်းရဲ့ကလေးက AI နဲ့ 'ပြိုင်ဘက်' ဖြစ်နေမလား? ဒါမှမဟုတ် AI ကို 'စေခိုင်းတတ်တဲ့သူ' ဖြစ်နေမလား?", a: "ဂိမ်းဆော့ဖို့သက်သက် မလွှတ်ထားပါနဲ့၊ Prompt Engineering ကို သင်ပေးပါ။ AI သုံးပြီး App အသေးစားလေးတွေ ဒါမှမဟုတ် ပုံပြင်တွေ ဘယ်လိုဖန်တီးရမလဲဆိုတာ ပြသပေးပါ။ 'အသုံးပြုသူ' (User) ဖြစ်တာထက် 'ညွှန်ကြားသူ' (Commander) ဖြစ်တာက အနာဂတ်အတွက် အရေးကြီးတဲ့ အရည်အချင်းပါ။" },
          { q: "အင်တာနက်ပေါ်က AI နဲ့ လုပ်ထားတဲ့ 'သတင်းမှား' တွေနဲ့ 'Deepfakes' (ရုပ်သံတု) တွေကို ခွဲခြားတတ်အောင် မင်းရဲ့ကလေးကို သင်ပေးထားပြီးပြီလား? ဒါမှမဟုတ် သူတို့ကို အကာအကွယ်မဲ့ပဲ လွှတ်ထားမှာလား?", a: "AI ကိုသုံးပြီး AI အကြောင်း သင်ပေးပါ။ အွန်လိုင်းက 'Deepfake Challenges' တွေကို ပြသပါ။ 'စစ်ဆေးတဲ့ အလေ့အကျင့်' (Verification Habits) ကို လေ့ကျင့်ပေးပါ - ဗီဒီယိုတစ်ခုက အရမ်းပြီးပြည့်စုံနေရင် ဒါမှမဟုတ် အရမ်းအံ့သြစရာကောင်းနေရင် အရင်းအမြစ် ၃ ခုလောက်မှာ အမြဲပြန်စစ်ခိုင်းပါ။" },
          { q: "တစ်ပတ်ကို တစ်ကြိမ်ပဲ လာနိုင်တဲ့ စရိတ်ကြီးတဲ့ ကျူရှင်ဆရာအစား၊ မင်းကလေးရဲ့ သင်ယူမှုပုံစံကို နားလည်ပြီး စိတ်ရှည်လက်ရှည်နဲ့ ၂၄ နာရီပတ်လုံး သင်ပေးနိုင်တဲ့ AI ကျူရှင်ဆရာ ရှိနေတာကို မသုံးချင်ဘူးလား?", a: "Google ရဲ့ NotebookLM ကို သုံးပါ။ သင့်ကလေးရဲ့ ကျောင်းသုံးစာအုပ်ကို တင်ထားလိုက်ပါ။ AI က အဲဒီစာအုပ်ထဲက အချက်အလက်တွေကိုပဲ သုံးပြီး သင်ပေးမယ့် ကျူရှင်ဆရာ ဖြစ်လာပါလိမ့်မယ်။" },
          { q: "မိသားစုရဲ့ ကျန်းမာရေးနဲ့ စားသောက်မှုပုံစံအလိုက် ဈေးဝယ်စာရင်း၊ ဟင်းချက်နည်းနဲ့ အစီအစဉ်တွေကို AI က ကူညီစီမံပေးမယ်ဆိုရင် မင်းရဲ့ စိတ်ဖိစီးမှုတွေ ဘယ်လောက် လျော့သွားမလဲ?", a: "Agentic Workflows (n8n/Zapier) ကို သုံးပါ။ သင့်ရဲ့ ဒစ်ဂျစ်တယ်ပြက္ခဒိန်ကို ဟင်းချက်နည်းစီမံပေးတဲ့ AI နဲ့ ချိတ်ဆက်ပါ။ လူတိုင်းရဲ့ အားလပ်ချိန်နဲ့ ကျန်းမာရေးပန်းတိုင်တွေပေါ် မူတည်ပြီး ဈေးဝယ်စာရင်းကို အလိုအလျောက် ထုတ်ပေးပါလိမ့်မယ်။" },
          { q: "မင်းကလေးက နက္ခတ္တဗေဒ ဒါမှမဟုတ် သမိုင်းကို ဝါသနာပါရင် ပုံမှန်စာအုပ်တွေထက် ပိုမိုနက်နဲတဲ့ ဗဟုသုတတွေကို AI နဲ့ ဘယ်လို ရှာဖွေလေ့လာခိုင်းမလဲ?", a: "Image Generation (Imagen/Midjourney) ကို သုံးပါ။ အကယ်၍ ကလေးက အာကာသကို ဝါသနာပါရင် ဂြိုဟ်အသစ်တစ်ခုအကြောင်း ဖော်ပြခိုင်းပြီး ချက်ချင်း ပုံဖော်ကြည့်ခိုင်းပါ။ ဒါက အသိပညာကို လက်တွေ့ဖန်တီးမှုအဖြစ် ပြောင်းလဲပေးပါတယ်။" }
        ],
        business: [
          { q: "မင်းရဲ့ ဝန်ထမ်းတွေက စက်တွေလုပ်နိုင်တဲ့ အလုပ်ကြမ်းတွေကိုပဲ ထိုင်လုပ်နေရတာဟာ ကုမ္ပဏီအတွက် တန်ဖိုးရှိတဲ့ လူသားအရင်းအမြစ်ကို ဖြုန်းတီးနေတာ မဟုတ်ဘူးလား?", a: "RPA (Robotic Process Automation) + AI ကို အကောင်အထည်ဖော်ပါ။ 'ဒါဖြစ်ရင် ဟိုဒါလုပ်' ဆိုတဲ့ အလုပ်မျိုးတွေ (ဥပမာ- အီးမေးလ်က ဒေတာတွေကို Excel ထဲပြောင်းတာ) ကို အလိုအလျောက် လုပ်ခိုင်းပါ။ ဒါက ဝန်ထမ်းတစ်ယောက်ချင်းစီရဲ့ အချိန်ကို တစ်ပတ်မှာ ၃၀ နာရီကျော် သက်သာစေပါတယ်။" },
          { q: "မင်းဆီမှာ နှစ်ပေါင်းများစွာ စုထားတဲ့ Customer အချက်အလက်တွေထဲကနေ နောက်ထပ် ဘယ်လို ပစ္စည်းအသစ်တွေ ရောင်းကောင်းမလဲဆိုတာကို AI 'ဒေတာပညာရှင်' မပါဘဲနဲ့ မင်း ဘယ်လို ရှာမလဲ?", a: "Gemini 1.5/3.1 ရဲ့ Long Context ကို သုံးပါ။ Customer Review ၁,၀၀၀ လောက် ဒါမှမဟုတ် တစ်နှစ်စာ အရောင်းဒေတာတွေကို တင်လိုက်ပါ။ 'ငါတို့ သတိမထားမိသေးဘဲ လူတွေ ငါတို့ဆီကနေ ပစ္စည်းမဝယ်တော့တဲ့ အဓိကအကြောင်းရင်းက ဘာလဲ?' လို့ မေးကြည့်ပါ။" },
          { q: "ဝန်ထမ်းအသစ် ထပ်မခန့်ဘဲနဲ့ ကမ္ဘာတစ်ဝှမ်းက မတူညီတဲ့ ဘာသာစကားပြောတဲ့ Customer တွေကို မနက် ၃ နာရီမှာတောင် အကောင်းဆုံး ဝန်ဆောင်မှုပေးနိုင်ဖို့ AI ကို ဘာကြောင့် မသုံးသေးတာလဲ?", a: "သင့်ကုမ္ပဏီရဲ့ အချက်အလက်တွေကို သင်ကြားပေးထားတဲ့ AI Chatbots တွေကို သုံးပါ။ အရင်က bot တွေနဲ့မတူဘဲ ဒီ LLM တွေက စိတ်ခံစားမှုနဲ့ ရည်ရွယ်ချက်ကို နားလည်တာကြောင့် ပြဿနာတွေရဲ့ ၈၀% ကို လူမပါဘဲ ဖြေရှင်းပေးနိုင်ပါတယ်။" },
          { q: "နည်းပညာတွေ တိုးတက်နေတဲ့ ခေတ်မှာ AI ကို သုံးပြီး အလုပ်လုပ်ရတဲ့ ကုမ္ပဏီနဲ့ လက်နဲ့ပဲ လုပ်နေရတဲ့ ကုမ္ပဏီ၊ ဘယ်နေရာမှာ လူတော်တွေက လာအလုပ်လုပ်ချင်ကြမလဲ?", a: "သင့်ရဲ့ 'AI-First Culture' ကို ကြော်ငြာပါ။ ထူးချွန်တဲ့သူတွေက ခေတ်မီတဲ့ ကိရိယာတွေရှိတဲ့နေရာမှာ အလုပ်လုပ်ချင်ကြပါတယ်။ ဝန်ထမ်းတိုင်းကို AI Assistant တွေ ပေးထားမယ်ဆိုရင် မြန်မာနိုင်ငံက အတော်ဆုံးသူတွေကို ဆွဲဆောင်နိုင်ပါလိမ့်မယ်။" },
          { q: "ဈေးကွက်က အပတ်တိုင်း ပြောင်းလဲနေတာကြောင့် လကုန်မှ ထွက်လာတဲ့ Report ကို စောင့်နေမလား? ဒါမှမဟုတ် အချိန်နဲ့တပြေးညီ အခြေအနေတွေကို သိနိုင်တဲ့ Agentic AI စနစ်ကို သုံးမလား?", a: "'Business Intelligence Agent' တစ်ခု တည်ဆောက်ပါ။ အစည်းအဝေးကို စောင့်မနေဘဲ သင့်ရဲ့ ဒေတာတွေကို 'ပြီးခဲ့တဲ့ အင်္ဂါနေ့နဲ့ယှဉ်ရင် စင်ကာပူဘဏ်ခွဲရဲ့ အခြေအနေ ဘယ်လိုရှိလဲ?' လို့ မေးလိုက်ရုံနဲ့ ၅ စက္ကန့်အတွင်း အဖြေရပါလိမ့်မယ်။" }
        ]
      }
    },
    nav: {
      home: "ပင်မစာမျက်နှာ",
      curriculum: "သင်တန်းများ",
      prompting: "Prompting (ညွှန်ကြားချက်ပေးခြင်း)",
      notebooklm: "NotebookLM (အချက်အလက်အခြေပြု AI)",
      aistudio: "AI Studio (ဖန်တီးမှုစတူဒီယို)",
      deployment: "Deployment (ဝဘ်ဆိုဒ်လွှင့်တင်ခြင်း)",
      ailevels: "AI အဆင့်များ",
      quiz: "အရည်အချင်းစစ်ရန်",
      login: "ဝင်ရောက်ရန်",
      signup: "ဝင်ခွင့်တောင်းဆိုရန်",
      logout: "ထွက်ရန်",
      profile: "ကျွန်ုပ်၏ ပရိုဖိုင်",
    },
    auth: {
      loginTitle: "ပြန်လည်ကြိုဆိုပါသည်",
      signupTitle: "အထူးဝင်ခွင့်တောင်းဆိုရန်",
      email: "အီးမေးလ်လိပ်စာ",
      password: "လျှို့ဝှက်နံပါတ်",
      confirmPassword: "လျှို့ဝှက်နံပါတ်အတည်ပြုပါ",
      name: "နာမည်အပြည့်အစုံ",
      loginBtn: "ဝင်ရောက်ရန်",
      signupBtn: "ဖိတ်ခေါ်မှုတောင်းဆိုရန်",
      noAccount: "AI Mindset Academy သို့ ဝင်ရောက်လိုပါသလား?",
      requestInvitation: "အထူးဖိတ်ခေါ်မှု တောင်းဆိုရန်",
      hasAccount: "ဖိတ်ခေါ်မှု ရရှိပြီးသားလား?",
      toggleSignup: "ဝင်ခွင့်တောင်းဆိုရန်",
      toggleLogin: "ဝင်ရောက်ရန်",
      loginInfo: "AI Mindset Academy သည် လက်ရှိတွင် အထူးသီးသန့် အစမ်းသုံးကာလ ဖြစ်ပါသည်။ နောက်တစ်သုတ်တွင် ပါဝင်ရန် ဖိတ်ခေါ်မှု တောင်းဆိုပေးပါ။",
      error: "အမှားအယွင်းရှိနေပါသည်",
      requestPending: "ဤအီးမေးလ်ဖြင့် ဝင်ခွင့်တောင်းဆိုမှု ပြုလုပ်ထားပြီးဖြစ်ပါသည်။ အက်ဒမင်၏ အတည်ပြုချက်ကို ခေတ္တစောင့်ဆိုင်းပေးပါ။",
      successLogin: "အောင်မြင်စွာဝင်ရောက်ပြီးပါပြီ",
      successSignup: "တောင်းဆိုမှု အောင်မြင်စွာ ပေးပို့ပြီးပါပြီ",
      authHeadline: "Master AI. Master Your Future.",
      categories: {
        teachers: "ဆရာ၊ ဆရာမများ",
        parents: "မိဘများ",
        business: "စီးပွားရေးလုပ်ငန်းရှင်များ"
      },
      carousel: [
        {
          title: "ဆရာ၊ ဆရာမများအတွက် - ပင်ပန်းမှု လျှော့ချရေး",
          description: "သင်ခန်းစာ ပြင်ဆင်တာတွေနဲ့ အိမ်စာစစ်တဲ့ အလုပ်တွေရဲ့ ၈၀% ကို AI က ကူလုပ်ပေးမယ်ဆိုရင်၊ ကျန်တဲ့အချိန်တွေကို ကျောင်းသားတွေရဲ့ စိတ်ဓာတ်ပိုင်းဆိုင်ရာ တိုးတက်ဖို့အတွက် မင်း ဘယ်လောက်တောင် ပိုပြီး အာရုံစိုက်နိုင်မလဲ?"
        },
        {
          title: "ဆရာ၊ ဆရာမများအတွက် - တစ်ဦးချင်း သင်ကြားမှု",
          description: "ကျောင်းသား ၃၀ ရှိတဲ့ အတန်းထဲမှာ ကျောင်းသားတစ်ဦးချင်းစီရဲ့ အားသာချက်၊ အားနည်းချက်အလိုက် မတူညီတဲ့ သင်ကြားမှုပုံစံကို AI 'သင်ကြားရေးလက်ထောက်' မပါဘဲနဲ့ မင်း ဘယ်လို လက်တွေ့ကျကျ လုပ်ပေးနိုင်မလဲ?"
        },
        {
          title: "ဆရာ၊ ဆရာမများအတွက် - အချိန်မရွေး အကူအညီပေးနိုင်မှု",
          description: "တနင်္ဂနွေနေ့ည မင်းအနားယူနေချိန်မှာတောင် ကျောင်းသားတစ်ယောက်က သူ့ရဲ့စာစီစာကုံးအတွက် အကြံဉာဏ်တောင်းရင် AI က ချက်ချင်း အဖြေပေးနိုင်နေတာဟာ ဘယ်လောက် ကောင်းမွန်တဲ့ အခွင့်အလမ်းဖြစ်မလဲ?"
        },
        {
          title: "ဆရာ၊ ဆရာမများအတွက် - သင်ရိုးညွှန်းတမ်း ပြောင်းလဲမှု",
          description: "AI က စက္ကန့်ပိုင်းအတွင်း ရှာပေးနိုင်တဲ့ အချက်အလက်တွေကို ကျောင်းသားတွေကို အလွတ်ကျက်ခိုင်းနေဦးမှာလား? ဒါမှမဟုတ် ပြဿနာတွေကို ဖြေရှင်းဖို့ AI ကို ဘယ်လို မှန်ကန်တဲ့ မေးခွန်းမေးရမလဲဆိုတာကို သင်ပေးမှာလား?"
        },
        {
          title: "ဆရာ၊ ဆရာမများအတွက် - ခေတ်သစ် အတတ်ပညာ",
          description: "AI ဆိုတာ စာရေးတာနဲ့ Coding ရေးတာတွေအတွက် 'ဂဏန်းပေါင်းစက်' လို ဖြစ်လာပြီဆိုတော့၊ ဒါကို ပိတ်ပင်မယ့်အစား ကျောင်းသားတွေ အကျိုးရှိရှိနဲ့ ကျင့်ဝတ်နဲ့အညီ သုံးတတ်အောင် ဘယ်လို လမ်းပြပေးမလဲ?"
        },
        {
          title: "မိဘများအတွက် - အနာဂတ် အလုပ်အကိုင်",
          description: "နောက် ၁၀ နှစ်၊ ၁၅ နှစ်နေရင် မင်းရဲ့ကလေးက AI နဲ့ 'ပြိုင်ဘက်' ဖြစ်နေမလား? ဒါမှမဟုတ် AI ကို 'စေခိုင်းတတ်တဲ့သူ' ဖြစ်နေမလား?"
        },
        {
          title: "မိဘများအတွက် - ဘေးကင်းလုံခြုံမှု",
          description: "အင်တာနက်ပေါ်က AI နဲ့ လုပ်ထားတဲ့ 'သတင်းမှား' တွေနဲ့ 'Deepfakes' (ရုပ်သံတု) တွေကို ခွဲခြားတတ်အောင် မင်းရဲ့ကလေးကို သင်ပေးထားပြီးပြီလား? ဒါမှမဟုတ် သူတို့ကို အကာအကွယ်မဲ့ပဲ လွှတ်ထားမှာလား?"
        },
        {
          title: "မိဘများအတွက် - ကိုယ်ပိုင်ကျူရှင်ဆရာ",
          description: "တစ်ပတ်ကို တစ်ကြိမ်ပဲ လာနိုင်တဲ့ စရိတ်ကြီးတဲ့ ကျူရှင်ဆရာအစား၊ မင်းကလေးရဲ့ သင်ယူမှုပုံစံကို နားလည်ပြီး စိတ်ရှည်လက်ရှည်နဲ့ ၂၄ နာရီပတ်လုံး သင်ပေးနိုင်တဲ့ AI ကျူရှင်ဆရာ ရှိနေတာကို မသုံးချင်ဘူးလား?"
        },
        {
          title: "မိဘများအတွက် - အိမ်ထောင်မှု စီမံခန့်ခွဲသူ",
          description: "မိသားစုရဲ့ ကျန်းမာရေးနဲ့ စားသောက်မှုပုံစံအလိုက် ဈေးဝယ်စာရင်း၊ ဟင်းချက်နည်းနဲ့ အစီအစဉ်တွေကို AI က ကူညီစီမံပေးမယ်ဆိုရင် မင်းရဲ့ စိတ်ဖိစီးမှုတွေ ဘယ်လောက် လျော့သွားမလဲ?"
        },
        {
          title: "မိဘများအတွက် - ဝါသနာကို မြှင့်တင်ပေးခြင်း",
          description: "မင်းကလေးက နက္ခတ္တဗေဒ ဒါမှမဟုတ် သမိုင်းကို ဝါသနာပါရင် ပုံမှန်စာအုပ်တွေထက် ပိုမိုနက်နဲတဲ့ ဗဟုသုတတွေကို AI နဲ့ ဘယ်လို ရှာဖွေလေ့လာခိုင်းမလဲ?"
        },
        {
          title: "စီးပွားရေးလုပ်ငန်းရှင်များအတွက် - လူစွမ်းအား အသုံးချမှု",
          description: "မင်းရဲ့ ဝန်ထမ်းတွေက စက်တွေလုပ်နိုင်တဲ့ အလုပ်ကြမ်းတွေကိုပဲ ထိုင်လုပ်နေရတာဟာ ကုမ္ပဏီအတွက် တန်ဖိုးရှိတဲ့ လူသားအရင်းအမြစ်ကို ဖြုန်းတီးနေတာ မဟုတ်ဘူးလား?"
        },
        {
          title: "စီးပွားရေးလုပ်ငန်းရှင်များအတွက် - ဖုံးကွယ်နေတဲ့ အခွင့်အလမ်း",
          description: "မင်းဆီမှာ နှစ်ပေါင်းများစွာ စုထားတဲ့ Customer အချက်အလက်တွေထဲကနေ နောက်ထပ် ဘယ်လို ပစ္စည်းအသစ်တွေ ရောင်းကောင်းမလဲဆိုတာကို AI 'ဒေတာပညာရှင်' မပါဘဲနဲ့ မင်း ဘယ်လို ရှာမလဲ?"
        },
        {
          title: "စီးပွားရေးလုပ်ငန်းရှင်များအတွက် - ၂၄ နာရီ ဝန်ဆောင်မှု",
          description: "ဝန်ထမ်းအသစ် ထပ်မခန့်ဘဲနဲ့ ကမ္ဘာတစ်ဝှမ်းက မတူညီတဲ့ ဘာသာစကားပြောတဲ့ Customer တွေကို မနက် ၃ နာရီမှာတောင် အကောင်းဆုံး ဝန်ဆောင်မှုပေးနိုင်ဖို့ AI ကို ဘာကြောင့် မသုံးသေးတာလဲ?"
        },
        {
          title: "စီးပွားရေးလုပ်ငန်းရှင်များအတွက် - တော်တဲ့သူတွေကို ဆွဲဆောင်ခြင်း",
          description: "နည်းပညာတွေ တိုးတက်နေတဲ့ ခေတ်မှာ AI ကို သုံးပြီး အလုပ်လုပ်ရတဲ့ ကုမ္ပဏီနဲ့ လက်နဲ့ပဲ လုပ်နေရတဲ့ ကုမ္ပဏီ၊ ဘယ်နေရာမှာ လူတော်တွေက လာအလုပ်လုပ်ချင်ကြမလဲ?"
        },
        {
          title: "စီးပွားရေးလုပ်ငန်းရှင်များအတွက် - မြန်ဆန်တဲ့ ဆုံးဖြတ်ချက်",
          description: "ဈေးကွက်က အပတ်တိုင်း ပြောင်းလဲနေတာကြောင့် လကုန်မှ ထွက်လာတဲ့ Report ကို စောင့်နေမလား? ဒါမှမဟုတ် အချိန်နဲ့တပြေးညီ အခြေအနေတွေကို သိနိုင်တဲ့ Agentic AI စနစ်ကို သုံးမလား?"
        }
      ]
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
      promptFrameworkTitle: "P.R.O.M.P.T. Framework (စနစ်တကျ ညွှန်ကြားခြင်း နည်းလမ်း)",
      promptFrameworkSub: "AI Agent များနှင့် စနစ်ပိုင်းဆိုင်ရာ တည်ဆောက်မှုများအတွက် အထူးပြု Framework ဖြစ်သည်။",
      comparisonTitle: "T-C-R-E-I နှင့် P.R.O.M.P.T. နှိုင်းယှဉ်ချက်",
      comparisonSub: "သင့်လုပ်ငန်းအတွက် အသင့်တော်ဆုံး နည်းလမ်းကို ရွေးချယ်ခြင်း။",
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
      },
      promptFrameworkDetails: {
        title: "P.R.O.M.P.T. Framework",
        intro: "ခန့်မှန်းရုံမှသည် တိကျသော ရလဒ်များ ရရှိရန် P.R.O.M.P.T. framework ကို အသုံးပြုပါသည်။",
        persona: { title: "[P] Persona (စရိုက်)", body: "AI အား ကျွမ်းကျင်သူ တစ်ဦးအဖြစ် သတ်မှတ်ပေးခြင်း ဖြစ်သည်။" },
        context: { title: "[R] Relevant Context (နောက်ခံအချက်အလက်)", body: "လုပ်ငန်းစဉ်နှင့် ပတ်သက်သော အခြေအနေများကို ပေးခြင်း ဖြစ်သည်။" },
        objective: { title: "[O] Objective (ပန်းတိုင်)", body: "တိကျသော လုပ်ဆောင်ချက် (ဥပမာ- ရေးသားပါ၊ ပြင်ဆင်ပါ) ကို ခိုင်းစေခြင်း ဖြစ်သည်။" },
        manner: { title: "[M] Manner & Style (ပုံစံနှင့် ဟန်ပန်)", body: "ရလဒ်၏ လေသံနှင့် Format (ဥပမာ- JSON) ကို ထိန်းချုပ်ခြင်း ဖြစ်သည်။" },
        parameters: { title: "[P] Parameters & Constraints (ကန့်သတ်ချက်များ)", body: "မလုပ်ရမည့် အချက်များနှင့် ဘောင်များကို သတ်မှတ်ပေးခြင်း ဖြစ်သည်။" },
        test: { title: "[T] Test & Tweak (စမ်းသပ် ပြုပြင်ခြင်း)", body: "ရလဒ်ကို ကြည့်၍ ပြန်လည် အချောသတ်ခြင်း ဖြစ်သည်။" }
      },
      comparisonDetails: {
        title: "T-C-R-E-I vs. P.R.O.M.P.T.",
        intro: "နည်းလမ်း နှစ်ခုလုံးသည် အဖြေကောင်းရရန် ဖြစ်သော်လည်း အသုံးပြုပုံ ကွဲပြားပါသည်။",
        tcrei: { title: "T-C-R-E-I", body: "လူသားနှင့် AI အပြန်အလှန် ပြောဆိုမှု၊ Content ဖန်တီးမှုများအတွက် အကောင်းဆုံး ဖြစ်သည်။" },
        prompt: { title: "P.R.O.M.P.T.", body: "AI Agent များ တည်ဆောက်ခြင်းနှင့် စနစ်ပိုင်းဆိုင်ရာ ချိတ်ဆက်မှုများအတွက် အကောင်းဆုံး ဖြစ်သည်။" },
        verdict: { title: "အနှစ်ချုပ်", body: "သာမန် အလုပ်များအတွက် T-C-R-E-I ကို သုံးပါ။ အထူးပြု AI စနစ်များအတွက် P.R.O.M.P.T. ကို သုံးပါ။" }
      },
      intentSection: {
        title: "Intent-Based Prompting",
        subtitle: "ထိရောက်သော AI ဆက်သွယ်မှု၏ အဓိက ဒဿန",
        prompting: "Prompting (ညွှန်ကြားခြင်း) ဆိုသည်မှာ သင်ပြောဆိုလိုက်သော အရာဖြစ်သည်။",
        context: "Context (အခြေအနေ) ဆိုသည်မှာ သင်သိရှိထားသော အရာဖြစ်သည်။",
        intent: "Intent (ရည်ရွယ်ချက်) ဆိုသည်မှာ သင်အမှန်တကယ် လိုလားသောအရာဖြစ်သည်။",
        focus: "စကားလုံးများထက် ပန်းတိုင်ကိုသာ အဓိက အာရုံစိုက်ပါ။",
        learnMore: "အသေးစိတ်လေ့လာရန်",
        url: "https://intent-architect.mindset-it.online/"
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
    },
    profile: {
      title: "အသုံးပြုသူ၏ ဒက်ရှ်ဘုတ် (Dashboard)",
      journey: "သင်ယူမှု ခရီးစဉ်",
      completed: "ပြီးမြောက်ပြီး",
      pending: "မပြီးသေးပါ / ပိတ်ထားသည်",
      certificate: "လက်မှတ် ရယူရန်",
      certTitle: "သင်တန်းဆင်း လက်မှတ်",
      certSubtitle: "AI Mindset Academy",
      certText: "ဤလက်မှတ်သည်",
      certBody: "AI Mindset Academy ၏ သင်ရိုးညွှန်းတမ်းတစ်ခုလုံးကို အောင်မြင်စွာ ပြီးမြောက်ခဲ့ပြီး AI-Augmented Leadership နှင့် မဟာဗျူဟာမြောက် အကောင်အထည်ဖော်မှုများကို ကျွမ်းကျင်စွာ တတ်မြောက်ခဲ့ကြောင်း အသိအမှတ်ပြုပါသည်။",
      certDate: "အောင်မြင်သည့် ရက်စွဲ",
      certSignature: "အကယ်ဒမီ ဒါရိုက်တာ",
      noLessons: "သင်ခန်းစာများ မပြီးမြောက်သေးပါ။ သင်ရိုးညွှန်းတမ်းတွင် စတင်လေ့လာပါ!",
      stats: "အကယ်ဒမီ စာရင်းဇယားများ",
      modulesCompleted: "ပြီးမြောက်သော သင်ခန်းစာများ",
      totalPoints: "ရရှိသော စုစုပေါင်းအမှတ်"
    },
    promptLibrary: {
      title: "Prompt Library (ညွှန်ကြားချက် စုစည်းမှု)",
      subtitle: "စနစ်တကျ တည်ဆောက်ထားသော အရည်အသွေးမြင့် Prompt များကို ရယူပါ။",
      btn: "Library သို့ သွားရန်",
      modalTitle: "Mindful Prompting (သတိရှိသော ညွှန်ကြားချက်ပေးခြင်း)",
      modalSub: "Pause. Think. Act. (ရပ်နားပါ။ စဉ်းစားပါ။ လုပ်ဆောင်ပါ။)",
      pause: {
        title: "၁။ Pause (Copy မကူးမီ ရပ်နားပါ)",
        body: "မျက်စိမှိတ်ပြီး Copy မကူးပါနဲ့။ Prompt ရဲ့ တည်ဆောက်ပုံကို အရင်ဖတ်ပါ။ ညွှန်ကြားချက်တစ်ခုချင်းစီရဲ့ ရည်ရွယ်ချက်ကို နားလည်အောင် ကြိုးစားပါ။"
      },
      think: {
        title: "၂။ Think (Paste မလုပ်မီ စဉ်းစားပါ)",
        body: "ဒီ Prompt က သင့်ရဲ့ ပန်းတိုင်နဲ့ ဘယ်လို ကိုက်ညီသလဲ? သင့်ရဲ့ သီးခြားအခြေအနေအတွက် ဘယ်အချက်အလက် (Context, Task) တွေကို ပြင်ဆင်ဖို့ လိုမလဲ?"
      },
      act: {
        title: "၃။ Act (Enter မနှိပ်မီ လုပ်ဆောင်ပါ)",
        body: "Paste လုပ်ပါ၊ လိုအပ်တာတွေ ပြင်ဆင်ပါ၊ ပြီးမှ Enter နှိပ်ပါ။ AI က သင့်ရဲ့ လက်ထောက်သာဖြစ်ပြီး သင်ကသာ ညွှန်ကြားသူ (Director) ဖြစ်ပါတယ်။ အရည်အသွေးမြင့် ရလဒ်တွေရဖို့ သင့်ရဲ့ နောက်ဆုံးစစ်ဆေးမှု လိုအပ်ပါတယ်။"
      },
      go: "Library သို့ ဆက်သွားရန်",
      geminiGem: "Gemini Gem (Prompt အကူအညီ)"
    },
    toast: {
      congrats: "ဂုဏ်ယူပါတယ်!",
      lessonCompleted: "သင်ခန်းစာ ပြီးမြောက်ပါပြီ"
    }
  }
};
