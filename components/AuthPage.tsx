import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, AlertCircle, Loader2, BrainCircuit } from 'lucide-react';
import pb from '../services/pb';
import { UI_STRINGS } from '../translations';
import { Language } from '../types';

interface AuthPageProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ language, onLanguageChange }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });

  const t = UI_STRINGS[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        await pb.collection('ai_users').authWithPassword(
          formData.email,
          formData.password
        );
      } else {
        if (formData.password !== formData.passwordConfirm) {
          setError(language === 'my' ? "စကားဝှက်များ မတူညီပါ" : "Passwords do not match");
          setLoading(false);
          return;
        }

        const data = {
          email: formData.email,
          password: formData.password,
          passwordConfirm: formData.passwordConfirm,
          name: formData.name,
        };
        await pb.collection('ai_users').create(data);
        
        // Auto login after signup
        await pb.collection('ai_users').authWithPassword(
          formData.email,
          formData.password
        );
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      setError(err.message || t.auth.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden ${language === 'my' ? 'myanmar-text' : ''}`}>
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-10">
        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5">
          <button 
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
          >
            EN
          </button>
          <button 
            onClick={() => onLanguageChange('my')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'my' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
          >
            MM
          </button>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 p-3 rounded-2xl mb-4 shadow-lg shadow-blue-600/20">
            <BrainCircuit className="text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tighter uppercase">
            AI Mindset Academy
          </h1>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">
            Private Access Only
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              {isLogin ? t.auth.loginTitle : t.auth.signupTitle}
            </h2>
            <p className="text-gray-400 text-sm">
              {isLogin ? t.auth.noAccount : t.auth.hasAccount}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
              >
                {isLogin ? t.auth.toggleSignup : t.auth.toggleLogin}
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                  {t.auth.name}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                {t.auth.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                {t.auth.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                  {t.auth.confirmPassword}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="password"
                    name="passwordConfirm"
                    required
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 p-3 rounded-xl"
                >
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 mt-6"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                isLogin ? t.auth.loginBtn : t.auth.signupBtn
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
