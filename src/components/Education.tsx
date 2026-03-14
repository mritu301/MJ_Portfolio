import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Academic Foundation</h2>
          <p className="text-white/60 max-w-2xl">The educational background that shaped my technical mindset and analytical capabilities.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div className="flex items-center space-x-2 text-white/40 text-sm font-mono">
                  <Calendar size={14} />
                  <span>{edu.dates}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
              <p className="text-emerald-500 font-medium">{edu.degree}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra section for completeness */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <h3 className="text-white font-bold mb-6 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Additional Information</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.extra.map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 text-xs">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
