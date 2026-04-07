import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  CheckCircle, 
  XCircle, 
  Loader2, 
  Mail, 
  User, 
  MessageSquare, 
  LogOut,
  BrainCircuit,
  AlertCircle,
  Search,
  RefreshCw,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import pb, { adminLogin, fetchPendingRequests, approveStudent } from '../services/pb';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

interface AdminDashboardProps {
  language: Language;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ language }) => {
  const navigate = useNavigate();
  const t = UI_STRINGS[language].admin;

  // In PocketBase, admins are stored in a different way in the authStore
  // We can check if the current model is an admin by checking if it's valid
  // and if it's not a regular user record (which would have a collectionId)
  const [isAdmin, setIsAdmin] = useState(pb.authStore.isValid && !pb.authStore.model?.collectionId);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isAdmin) {
      loadRequests();
    }
  }, [isAdmin]);

  const loadRequests = async () => {
    setLoading(true);
    try {
      const data = await fetchPendingRequests();
      setRequests(data);
    } catch (err: any) {
      setError(t.fetchError);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Clear any existing student/user tokens to avoid conflicts
      pb.authStore.clear();
      
      await adminLogin(loginData.email, loginData.password);
      // After successful admin login, pb.authStore.model will be an Admin object
      setIsAdmin(pb.authStore.isValid && !pb.authStore.model?.collectionId);
    } catch (err: any) {
      console.error('Admin login error:', err);
      if (err.status === 404) {
        setError(t.authError404);
      } else if (err.status === 400 || err.status === 401) {
        setError(t.authErrorInvalid);
      } else {
        setError(err.message || t.authErrorUnexpected);
      }
    } finally {
      setLoading(false);
    }
  };

  const [confirmingId, setConfirmingId] = useState<string | null>(null);

  const handleApprove = async (request: any) => {
    setLoading(true);
    try {
      await approveStudent(request.id, request.name, request.email);
      setSuccessMessage(t.approveSuccess.replace('{name}', request.name));
      setTimeout(() => setSuccessMessage(null), 5000);
      setConfirmingId(null);
      loadRequests();
    } catch (err: any) {
      setError(t.approveError);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    pb.authStore.clear();
    setIsAdmin(false);
  };

  const filteredRequests = requests.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAdmin) {
    return (
      <div className={`min-h-screen bg-white dark:bg-black flex items-center justify-center p-6 ${language === 'my' ? 'myanmar-text' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 rounded-[40px] p-10 backdrop-blur-xl shadow-2xl relative"
        >
          <button 
            onClick={() => navigate('/')}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-white/10"
            aria-label={UI_STRINGS[language].nav.backToHome}
          >
            <X size={20} />
          </button>

          <div className="text-center mb-8">
            <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-600/20">
              <ShieldCheck className="text-white w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
              {t.portalTitle}
            </h1>
            <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mt-2">
              {t.secureAccess}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">{t.adminEmail}</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                <input
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="admin@academy.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">{t.password}</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 p-4 rounded-2xl"
              >
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/20 mt-8"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : t.loginBtn}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-[#050505] transition-colors duration-300 ${language === 'my' ? 'myanmar-text' : ''}`}>
      {/* Header */}
      <header className="bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 sticky top-0 z-30 backdrop-blur-xl bg-opacity-80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 mr-2"
              aria-label={UI_STRINGS[language].nav.backToHome}
            >
              <X size={20} />
            </button>
            <div className="bg-indigo-600 p-2 rounded-xl">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-black text-gray-900 dark:text-white tracking-tight uppercase">{t.dashboardTitle}</h1>
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{t.accessManagement}</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors text-sm font-bold"
          >
            <LogOut size={18} />
            <span>{t.logout}</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats & Search */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
            <input 
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.pendingRequests}</p>
              <p className="text-3xl font-black text-gray-900 dark:text-white">{requests.length}</p>
            </div>
            <button 
              onClick={loadRequests}
              className="p-3 bg-indigo-600/10 text-indigo-500 rounded-xl hover:bg-indigo-600/20 transition-colors"
            >
              <RefreshCw className={loading ? 'animate-spin' : ''} size={20} />
            </button>
          </div>
        </div>

        {/* Alerts */}
        <AnimatePresence>
          {successMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-500 font-bold"
            >
              <CheckCircle size={20} />
              <span>{successMessage}</span>
            </motion.div>
          )}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 font-bold"
            >
              <AlertCircle size={20} />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Requests List */}
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[32px] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10">
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{t.student}</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{t.reason}</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{t.requestedAt}</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-right">{t.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {filteredRequests.length > 0 ? (
                  filteredRequests.map((request) => (
                    <motion.tr 
                      layout
                      key={request.id}
                      className="group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-600/10 flex items-center justify-center text-indigo-500 font-bold">
                            {request.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">{request.name}</p>
                            <p className="text-xs text-gray-500">{request.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-start gap-2 max-w-xs">
                          <MessageSquare size={14} className="text-gray-400 mt-1 shrink-0" />
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 italic">
                            "{request.reason}"
                          </p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-xs text-gray-500">
                          {new Date(request.created).toLocaleDateString()}
                        </p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <AnimatePresence mode="wait">
                          {confirmingId === request.id ? (
                            <motion.div 
                              key="confirm"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="flex items-center gap-2 justify-end"
                            >
                              <button
                                onClick={() => setConfirmingId(null)}
                                className="px-3 py-2 text-gray-500 hover:text-gray-700 text-xs font-bold"
                              >
                                {t.cancel}
                              </button>
                              <button
                                onClick={() => handleApprove(request)}
                                disabled={loading}
                                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
                              >
                                {loading ? <Loader2 className="animate-spin" size={14} /> : <CheckCircle size={14} />}
                                <span>{t.confirmApprove}</span>
                              </button>
                            </motion.div>
                          ) : (
                            <motion.button
                              key="approve"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              onClick={() => setConfirmingId(request.id)}
                              disabled={loading}
                              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/10 flex items-center gap-2 ml-auto"
                            >
                              <CheckCircle size={14} />
                              <span>{t.approveBtn}</span>
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center gap-4 opacity-30">
                        <Users size={48} />
                        <p className="font-bold uppercase tracking-widest text-sm">{t.noRequests}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
