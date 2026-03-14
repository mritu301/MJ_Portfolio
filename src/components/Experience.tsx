import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Professional Journey</h2>
          <p className="text-white/60 max-w-2xl">A timeline of my professional growth, technical contributions, and impact across global organizations.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'bg-white/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full p-6 flex flex-col sm:flex-row sm:items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${expandedIndex === index ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}>
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-sm text-emerald-500 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="hidden sm:block text-right">
                      <div className="text-sm text-white/60 flex items-center justify-end space-x-2">
                        <Calendar size={14} />
                        <span>{exp.dates}</span>
                      </div>
                      <div className="text-xs text-white/40 mt-1">{exp.duration}</div>
                    </div>
                    {expandedIndex === index ? <ChevronUp className="text-white/40" /> : <ChevronDown className="text-white/40" />}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/10"
                    >
                      <div className="p-6 pt-0 space-y-4">
                        <div className="flex items-center space-x-2 text-xs text-white/40 mb-4">
                          <MapPin size={12} />
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start space-x-3 text-sm text-white/70 leading-relaxed">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.bullets.length === 0 && (
                          <p className="text-sm text-white/40 italic">Details of role and responsibilities focused on core engineering and data processes.</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-emerald-500 text-black"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles size={20} />
                <h3 className="font-bold uppercase tracking-widest text-xs">Impact Highlights</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-black mb-1">6+</div>
                  <p className="text-sm font-medium opacity-80 leading-tight">Years of professional experience with global clients like Fiat, Honda, Metrolinx, and Uber.</p>
                </div>
                <div className="h-px bg-black/10" />
                <div>
                  <div className="text-3xl font-black mb-1">ACE</div>
                  <p className="text-sm font-medium opacity-80 leading-tight">Award-winning efforts for Metrolinx "PRESTO" smartcard-based fare system.</p>
                </div>
                <div className="h-px bg-black/10" />
                <div>
                  <div className="text-3xl font-black mb-1">NUS</div>
                  <p className="text-sm font-medium opacity-80 leading-tight">M.Tech Enterprise Business Analytics student, result-driven and passionate.</p>
                </div>
              </div>
            </motion.div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Top Clients</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Infineon', 'Hewlett Packard', 'Fiat', 'Honda', 'Metrolinx', 'Uber'].map((client, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
