import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const { basics } = resumeData;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-6">
            <MapPin size={12} />
            <span>{basics.location}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            {basics.name}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {basics.titles.slice(0, 4).map((title, i) => (
              <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-sm">
                {title}
              </span>
            ))}
          </div>

          <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
            {basics.summary.split('. ')[0]}. {basics.summary.split('. ')[1]}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all group"
            >
              <span>View Experience</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-xl">
                  M
                </div>
                <div>
                  <div className="text-white font-bold">UST Global</div>
                  <div className="text-white/40 text-sm">Data Analytics Engineer</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500" 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  <span>Data Science</span>
                  <span>85%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white">6+</div>
                  <div className="text-[10px] text-white/40 uppercase">Years Exp</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white">4+</div>
                  <div className="text-[10px] text-white/40 uppercase">Clients</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
