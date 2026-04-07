
import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X, Smartphone, Monitor, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BeforeInstallPromptEvent } from '../types';

export const InstallPWAButton: React.FC<{ language: 'en' | 'my' }> = ({ language }) => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);
  const [platform, setPlatform] = useState<'android' | 'ios' | 'desktop' | 'unknown'>('unknown');

  useEffect(() => {
    // Check if we already have a deferred prompt from index.html
    if (window.deferredPrompt) {
      setInstallPrompt(window.deferredPrompt);
    }

    // Detect Standalone Mode
    const standalone = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone 
      || document.referrer.includes('android-app://');
    setIsStandalone(standalone);

    // Detect Platform
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    
    if (isIosDevice) {
      setIsIos(true);
      setPlatform('ios');
    } else if (isAndroid) {
      setPlatform('android');
    } else {
      setPlatform('desktop');
    }

    // Handle Install Prompt (in case it fires after mount)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setInstallPrompt(promptEvent);
      window.deferredPrompt = promptEvent;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (platform === 'ios') {
      setShowIosModal(true);
      return;
    }

    const promptToUse = installPrompt || window.deferredPrompt;

    if (promptToUse) {
      await promptToUse.prompt();
      const { outcome } = await promptToUse.userChoice;
      if (outcome === 'accepted') {
        setInstallPrompt(null);
        window.deferredPrompt = null;
      }
    } else {
      // For desktop or android where prompt isn't available yet
      // or already installed
      if (isStandalone) {
        alert(language === 'my' ? "App ကို ထည့်သွင်းပြီးပါပြီ" : "App is already installed");
      } else {
        setShowIosModal(true); // Fallback to info modal
      }
    }
  };

  if (isStandalone) return null;

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleInstallClick}
        className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 border border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="p-2 bg-white/10 rounded-xl">
          {platform === 'desktop' ? <Monitor size={20} /> : <Smartphone size={20} />}
        </div>
        
        <div className="flex flex-col items-start">
          <span className="text-[10px] uppercase tracking-widest opacity-70 leading-none mb-1">
            {language === 'my' ? 'အက်ပ်ကို ရယူပါ' : 'Get the App'}
          </span>
          <span className="text-sm leading-none">
            {language === 'my' ? 'AI Academy ကို ထည့်သွင်းပါ' : 'Install AI Academy'}
          </span>
        </div>
        
        <Download size={18} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
      </motion.button>

      {/* iOS / Fallback Modal */}
      <AnimatePresence>
        {showIosModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
              
              <button 
                onClick={() => setShowIosModal(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  <Smartphone size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'my' ? 'အက်ပ်ကို ထည့်သွင်းနည်း' : 'How to Install'}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8">
                  {isIos 
                    ? (language === 'my' ? 'Safari တွင် အောက်ပါအတိုင်း လုပ်ဆောင်ပါ' : 'Follow these steps in Safari')
                    : (platform === 'desktop' 
                        ? (language === 'my' ? 'သင့် Browser ၏ Install ခလုတ်ကို အသုံးပြုပါ' : 'Use your browser\'s install feature')
                        : (language === 'my' ? 'သင့်ဖုန်းတွင် အက်ပ်အဖြစ် အသုံးပြုပါ' : 'Use this as an app on your device'))}
                </p>

                <div className="w-full space-y-4 text-left">
                  {isIos ? (
                    <>
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                          <Share size={18} />
                        </div>
                        <p className="text-xs text-gray-300">
                          {language === 'my' 
                            ? 'အောက်ခြေရှိ Share icon ကို နှိပ်ပါ။' 
                            : 'Tap the Share icon at the bottom of Safari.'}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 shrink-0">
                          <PlusSquare size={18} />
                        </div>
                        <p className="text-xs text-gray-300">
                          {language === 'my' 
                            ? '"Add to Home Screen" ကို ရွေးချယ်ပါ။' 
                            : 'Select "Add to Home Screen" from the menu.'}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Info size={18} />
                      </div>
                      <p className="text-xs text-gray-300">
                        {language === 'my' 
                          ? 'သင့် Browser ၏ Address bar ရှိ Install icon ကို နှိပ်ခြင်းဖြင့် အက်ပ်ကို ထည့်သွင်းနိုင်ပါသည်။' 
                          : 'Look for the install icon in your browser\'s address bar or menu to install the app.'}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setShowIosModal(false)}
                  className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10"
                >
                  {language === 'my' ? 'နားလည်ပါပြီ' : 'Got it'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
