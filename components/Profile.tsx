
import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Lock, Download, Trophy, Star, Calendar, User as UserIcon } from 'lucide-react';
import { Language, User } from '../types';
import { UI_STRINGS } from '../translations';
import { CURRICULUM_MODULES } from '../constants';
import { jsPDF } from 'jspdf';

interface ProfileProps {
  user: User;
  language: Language;
}

export const Profile: React.FC<ProfileProps> = ({ user, language }) => {
  const t = UI_STRINGS[language].profile;
  const completedLessons = user.completed_lessons || [];
  
  const totalModules = CURRICULUM_MODULES.length;
  const completedCount = completedLessons.length;
  const progress = Math.min((completedCount / totalModules) * 100, 100);
  const isFullyCompleted = completedCount >= totalModules;

  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Background
    doc.setFillColor(10, 10, 10);
    doc.rect(0, 0, 297, 210, 'F');

    // Border
    doc.setDrawColor(37, 99, 235); // Blue-600
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);
    doc.setLineWidth(0.5);
    doc.rect(12, 12, 273, 186);

    // Header
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(40);
    doc.text(t.certTitle, 148.5, 50, { align: 'center' });
    
    doc.setFontSize(20);
    doc.setTextColor(150, 150, 150);
    doc.text(t.certSubtitle, 148.5, 65, { align: 'center' });

    // Body
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(16);
    doc.text(t.certText, 148.5, 90, { align: 'center' });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.text(user.name || user.email.split('@')[0], 148.5, 110, { align: 'center' });

    doc.setTextColor(180, 180, 180);
    doc.setFontSize(14);
    const splitBody = doc.splitTextToSize(t.certBody, 200);
    doc.text(splitBody, 148.5, 130, { align: 'center' });

    // Footer
    const today = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.text(`${t.certDate}: ${today}`, 60, 170, { align: 'center' });
    doc.text(t.certSignature, 237, 170, { align: 'center' });
    
    doc.setDrawColor(100, 100, 100);
    doc.line(40, 175, 80, 175);
    doc.line(217, 175, 257, 175);

    // Decorative Elements
    doc.setDrawColor(37, 99, 235);
    doc.circle(148.5, 170, 15);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text("AI", 148.5, 171, { align: 'center' });

    doc.save(`AI_Mindset_Academy_Certificate_${user.name || 'User'}.pdf`);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-blue-600/20">
                <UserIcon size={64} />
              </div>
              {isFullyCompleted && (
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black p-2 rounded-full shadow-lg">
                  <Trophy size={20} />
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">{user.name || user.email.split('@')[0]}</h1>
              <p className="text-gray-400 mb-6">{user.email}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{t.modulesCompleted}</p>
                  <p className="text-2xl font-black text-blue-400">{completedCount}/{totalModules}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{t.totalPoints}</p>
                  <p className="text-2xl font-black text-emerald-400">{completedCount * 100}</p>
                </div>
                <div className="hidden sm:block bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Academy Rank</p>
                  <p className="text-2xl font-black text-purple-400">
                    {progress === 100 ? 'Director' : progress >= 50 ? 'Strategist' : 'Learner'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Star className="text-yellow-500" size={20} />
              {t.journey}
            </h2>
            
            <div className="space-y-4">
              {CURRICULUM_MODULES.map((module, index) => {
                const isCompleted = completedLessons.includes(module.id);
                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                      isCompleted 
                      ? 'bg-blue-600/10 border-blue-600/30' 
                      : 'bg-zinc-900/30 border-white/5 opacity-60'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${isCompleted ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500'}`}>
                      <module.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold ${isCompleted ? 'text-white' : 'text-gray-400'}`}>
                        {language === 'my' ? module.titleMy : module.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {isCompleted ? t.completed : t.pending}
                      </p>
                    </div>
                    {isCompleted ? (
                      <CheckCircle2 className="text-blue-500" size={24} />
                    ) : (
                      <Lock className="text-gray-700" size={20} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certificate Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="text-blue-500" size={20} />
              Academy Honors
            </h2>
            
            <div className={`p-6 rounded-3xl border text-center transition-all ${
              isFullyCompleted 
              ? 'bg-gradient-to-b from-blue-600/20 to-indigo-600/20 border-blue-600/50' 
              : 'bg-zinc-900/50 border-white/10 grayscale opacity-50'
            }`}>
              <div className="w-20 h-20 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <Award className={isFullyCompleted ? "text-blue-400" : "text-gray-600"} size={40} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.certTitle}</h3>
              <p className="text-sm text-gray-400 mb-6">
                {isFullyCompleted 
                  ? "Congratulations! You have mastered the AI Mindset curriculum."
                  : "Complete all 5 modules to unlock your official Academy Certificate."}
              </p>
              
              <button
                disabled={!isFullyCompleted}
                onClick={generateCertificate}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                  isFullyCompleted
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-white/5 text-gray-600 cursor-not-allowed'
                }`}
              >
                <Download size={18} />
                {t.certificate}
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/10">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-purple-400" />
                Next Steps
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
                  Join the AI Mindset Community
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
                  Apply the 10/80/10 rule to your next project
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
                  Share your certificate on LinkedIn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
