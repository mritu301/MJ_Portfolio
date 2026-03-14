import React from 'react';
import { motion } from 'motion/react';

const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-6xl font-bold tracking-tighter text-white">
          <span className="text-emerald-500">M</span>J
        </div>
        <motion.div
          className="absolute -inset-4 border border-emerald-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      
      <motion.p
        className="mt-4 text-xs font-mono text-emerald-500/60 uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Initializing Portfolio v2.0
      </motion.p>
    </motion.div>
  );
};

export default Splash;
