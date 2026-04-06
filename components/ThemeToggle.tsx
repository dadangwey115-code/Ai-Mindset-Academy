
import React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label={`Switch theme (current: ${theme})`}
      title={`Current theme: ${theme}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" && (
          <motion.div
            key="light"
            initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-amber-500" />
          </motion.div>
        )}
        {theme === "dark" && (
          <motion.div
            key="dark"
            initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-blue-400" />
          </motion.div>
        )}
        {theme === "system" && (
          <motion.div
            key="system"
            initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Monitor className="w-5 h-5 text-gray-400" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Indicator dot */}
      <div className="absolute bottom-1.5 flex gap-0.5">
        <div className={`w-1 h-1 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-amber-500 scale-125' : 'bg-gray-600'}`} />
        <div className={`w-1 h-1 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-blue-400 scale-125' : 'bg-gray-600'}`} />
        <div className={`w-1 h-1 rounded-full transition-all duration-300 ${theme === 'system' ? 'bg-gray-400 scale-125' : 'bg-gray-600'}`} />
      </div>
    </button>
  );
}
