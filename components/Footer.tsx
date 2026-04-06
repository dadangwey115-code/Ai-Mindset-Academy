
import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black py-16 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <BrainCircuit className="text-blue-500 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">AI Mindset Academy</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Join the new class of leaders who don't fear automation, but harness it as the ultimate lever for human excellence.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-300 text-sm font-medium">
          <a href="#" className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1">Support Center</a>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} AI Mindset Academy • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
