import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ChevronRight, RotateCcw } from 'lucide-react';

const FitFinder = () => {
  const [step, setStep] = useState(1);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);

  const calculateFit = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2000);
  };

  const getResult = () => {
    const bmi = weight / ((height / 100) ** 2);
    if (bmi < 18.5) return { size: 'Small (S)', fit: 'Slim Tailored', desc: 'Crafted for a sleek, sharp silhouette.' };
    if (bmi < 25) return { size: 'Medium (M)', fit: 'Regular Fit', desc: 'The perfect balance of comfort and form.' };
    if (bmi < 30) return { size: 'Large (L)', fit: 'Athletic Cut', desc: 'Roomy in the shoulders with a tapered waist.' };
    return { size: 'Extra Large (XL)', fit: 'Relaxed Silhouette', desc: 'Designed for effortless comfort and drape.' };
  };

  return (
    <div className="relative max-w-lg mx-auto overflow-hidden rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      {/* Premium Header */}
      <div className="p-8 border-b border-white/5 bg-gradient-to-r from-[#182257]/20 to-transparent">
        <div className="flex items-center gap-3 mb-2">
          
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a358] font-bold">Maison Precision</span>
        </div>
        <h3 className="text-2xl font-serif text-white">The Fit Finder</h3>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Height Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-4">Height (cm)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="150" max="200" value={height} 
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="flex-1 accent-[#c5a358]"
                  />
                  <span className="text-xl font-serif text-white w-12">{height}</span>
                </div>
              </div>

              {/* Weight Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-4">Weight (kg)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="45" max="120" value={weight} 
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="flex-1 accent-[#c5a358]"
                  />
                  <span className="text-xl font-serif text-white w-12">{weight}</span>
                </div>
              </div>

              <button 
                onClick={calculateFit}
                className="group relative w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-[#c5a358] hover:text-white"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Analyze My Silhouette <ChevronRight size={14} />
                </span>
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="py-16 flex flex-col items-center"
            >
              <div className="w-16 h-16 border-t-2 border-[#c5a358] border-solid rounded-full animate-spin mb-6" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 animate-pulse">Mapping body metrics to Élara patterns...</p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-center py-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                <Check size={24} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2">Your Recommended Style</p>
              <h4 className="text-4xl font-serif text-white mb-2 italic">{getResult().size}</h4>
              <p className="text-xs text-[#c5a358] font-medium tracking-wide mb-4">{getResult().fit}</p>
              <p className="text-sm text-zinc-500 max-w-[250px] mx-auto leading-relaxed mb-8">
                {getResult().desc}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setStep(1)}
                  className="py-3 border border-white/10 text-[9px] uppercase font-bold tracking-[0.2em] text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw size={12} /> Retry
                </button>
                <button className="py-3 bg-[#c5a358] text-white text-[9px] uppercase font-bold tracking-[0.2em] shadow-lg shadow-[#c5a358]/20">
                  Shop My Size
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FitFinder;