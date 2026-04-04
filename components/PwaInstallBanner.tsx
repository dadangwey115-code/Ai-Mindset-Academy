
import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const PwaInstallBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // 1. Check if already dismissed in the last 7 days
    const dismissedAt = localStorage.getItem('pwa-banner-dismissed');
    if (dismissedAt) {
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - parseInt(dismissedAt) < sevenDaysInMs) {
        return;
      }
    }

    // 2. Detect Standalone Mode (already installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone 
      || document.referrer.includes('android-app://');
    
    if (isStandalone) return;

    // 3. Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome|crios|fxios|opr|mercury/.test(userAgent);
    
    if (isIosDevice && isSafari) {
      setIsIos(true);
      setIsVisible(true);
      return;
    }

    // 4. Handle Android/Chrome Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setInstallPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('pwa-banner-dismissed', Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="md:hidden fixed bottom-20 left-4 right-4 z-[60] bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-2 rounded-xl shrink-0">
              <BrainCircuit className="text-white w-6 h-6" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-sm truncate">AI Mindset Academy</h3>
              
              {isIos ? (
                <div className="mt-1 text-gray-400 text-xs leading-tight">
                  Tap <Share className="inline w-3 h-3 mx-0.5" /> then 
                  <span className="text-white font-medium mx-1">"Add to Home Screen"</span>
                  <PlusSquare className="inline w-3 h-3 mx-0.5" /> to install.
                </div>
              ) : (
                <p className="mt-1 text-gray-400 text-xs">
                  Install our app for a better experience and offline access.
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              {!isIos && installPrompt && (
                <button
                  onClick={handleInstallClick}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download size={14} />
                  Install
                </button>
              )}
              
              <button
                onClick={handleDismiss}
                className="p-1.5 text-gray-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
