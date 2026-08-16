import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowLeft, Lock } from 'lucide-react';
import { getCurrentUser, checkIsAdmin, getUserRole } from '../services/storage';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

export interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('student' | 'admin')[];
  requireAuth?: boolean;
  redirectTo?: string;
  language?: Language;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
  requireAuth = true,
  redirectTo = '/',
  language = 'en',
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = getCurrentUser();
  const isAdmin = checkIsAdmin();
  const currentRole = getUserRole();
  const isAuthenticated = !!user || isAdmin;

  // 1. Check if authentication is required but user is not logged in
  if (requireAuth && !isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // 2. Check role restriction (if specified)
  if (allowedRoles && allowedRoles.length > 0) {
    const hasAllowedRole = currentRole ? allowedRoles.includes(currentRole) : false;
    
    if (!hasAllowedRole) {
      // Clean, accessible fallback for role restriction
      return (
        <div 
          className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-6 transition-colors duration-300"
          role="region"
          aria-label="Access Restricted Notice"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-6">
              <ShieldAlert size={32} aria-hidden="true" />
            </div>

            <h1 
              id="restricted-title"
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Access Restricted
            </h1>
            
            <p 
              id="restricted-desc"
              className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            >
              This area requires elevated administrator privileges. Your current account role is <span className="font-semibold capitalize text-indigo-600 dark:text-indigo-400">{currentRole || 'unauthorized'}</span>.
            </p>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => navigate('/')}
                aria-describedby="restricted-desc"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-zinc-900 cursor-pointer"
              >
                <ArrowLeft size={18} aria-hidden="true" />
                <span>Return to Learning Dashboard</span>
              </button>
            </div>
          </motion.div>
        </div>
      );
    }
  }

  // 3. User is authorized
  return <>{children}</>;
};
