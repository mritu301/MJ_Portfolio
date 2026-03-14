import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Code2, Database, Cloud, Languages } from 'lucide-react';

const Skills: React.FC = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Technical Arsenal</h2>
          <p className="text-white/60 max-w-2xl">A comprehensive overview of the technologies, frameworks, and methodologies I leverage to build data-driven solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Top Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <Cloud className="text-emerald-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">Cloud & Architecture</h3>
            <div className="flex flex-wrap gap-2">
              {skills.top.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all md:col-span-2"
          >
            <Database className="text-emerald-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">Data & Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <Languages className="text-emerald-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
            <div className="space-y-4">
              {skills.languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-white/80">{lang}</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(dot => (
                      <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot <= 4 ? 'bg-emerald-500' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
