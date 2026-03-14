import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Trophy, Award, CheckCircle, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const { awards, certifications } = resumeData;

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Recognition & Mastery</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Honors, awards, and industry-standard certifications validating my expertise in data and engineering.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Awards */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Trophy className="text-emerald-500" size={24} />
              <h3 className="text-2xl font-bold text-white">Honors & Awards</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-4 group hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{award}</h4>
                    <p className="text-sm text-white/40">Professional Excellence Recognition</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Star className="text-emerald-500" size={24} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
                >
                  <CheckCircle className="text-emerald-500 mb-4 group-hover:rotate-12 transition-transform" size={20} />
                  <h4 className="text-white font-bold text-sm leading-tight">{cert}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Top 3 Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-white/5 to-emerald-500/20"
        >
          <div className="bg-black/90 rounded-[22px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-black text-emerald-500 mb-2">6+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/40">Years Experience</div>
              <p className="mt-4 text-sm text-white/60">Professional track record with top-tier global clients.</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
              <div className="text-4xl font-black text-emerald-500 mb-2">ACE</div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/40">Excellence Award</div>
              <p className="mt-4 text-sm text-white/60">Recognized for outstanding contributions to Metrolinx.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-500 mb-2">NUS</div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/40">M.Tech Analytics</div>
              <p className="mt-4 text-sm text-white/60">Advanced specialization from National University of Singapore.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
