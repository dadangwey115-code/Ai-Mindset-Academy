
import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const driveLink = "https://drive.google.com/drive/folders/1a0vAqN6TzpkTX4V1MDKAvi3YGN-uXmTE?usp=sharing";

  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="text-blue-500 w-6 h-6" />
          <span className="text-2xl font-bold text-white tracking-tight">AI Mindset Academy</span>
        </div>
        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
          Join the new class of leaders who don't fear automation, but harness it as the ultimate lever for human excellence.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-medium">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Support Center</a>
          <a 
            href={driveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-blue-500 hover:text-blue-400 transition-colors"
          >
            PDF Library <ExternalLink size={14} />
          </a>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} AI Mindset Academy • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
