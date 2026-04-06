
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, Bot, User, Loader2 } from 'lucide-react';
import { Message, Language } from '../types';
import { getGeminiChat, streamGeminiResponse } from '../services/gemini';
import { UI_STRINGS } from '../translations';

export const AIMentor: React.FC<{ language: Language }> = ({ language }) => {
  const t = UI_STRINGS[language].mentor;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    setMessages([{ 
      role: 'ai', 
      text: t.initial 
    }]);
    chatRef.current = getGeminiChat(language);
  }, [language]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      let aiResponseText = "";
      setMessages(prev => [...prev, { role: 'ai', text: "" }]);
      
      const stream = streamGeminiResponse(chatRef.current, userText);
      
      for await (const chunk of stream) {
        aiResponseText += chunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'ai', text: aiResponseText };
          return updated;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="py-20 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 h-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white mb-2">{t.title}</h2>
          <p className="text-gray-400">{t.sub}</p>
        </div>
        
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden flex flex-col h-[650px] shadow-2xl relative">
          <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500 border border-blue-500/20">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Mindset Mentor</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-green-500/70 text-[10px] uppercase font-bold tracking-wider">Online</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.03)_0%,transparent_50%)]">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  m.role === 'user' ? 'bg-blue-600' : 'bg-white/10 text-blue-400'
                }`}>
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white/[0.03] text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.text || (isTyping && i === messages.length - 1 ? (
                    <div className="flex gap-1 py-1">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  ) : "")}
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          <div className="p-5 bg-white/[0.02] border-t border-white/10">
            <div className="flex gap-3 items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                aria-label="Type your message to the AI Mentor"
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-500 text-white p-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
              >
                {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-3 text-center uppercase tracking-widest font-medium">Powered by Gemini 3 Pro • Mindset V2.4</p>
          </div>
        </div>
      </div>
    </div>
  );
};
