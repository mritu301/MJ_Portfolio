import React from 'react';
import { resumeData } from '../data';
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { basics } = resumeData;

  return (
    <footer className="py-24 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">Let's build something <span className="text-emerald-500">extraordinary</span>.</h2>
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              Open for collaborations in Data Science, Machine Learning, and Enterprise Analytics. Reach out to discuss how we can drive value through data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40">Contact Details</h3>
              <div className="space-y-4">
                <a href={`mailto:${basics.email}`} className="flex items-center space-x-3 text-white hover:text-emerald-500 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>{basics.email}</span>
                </a>
                <a href={`tel:${basics.phone}`} className="flex items-center space-x-3 text-white hover:text-emerald-500 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span>{basics.phone}</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40">Social & Location</h3>
              <div className="space-y-4">
                <a href={`https://${basics.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white hover:text-emerald-500 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <span className="flex items-center space-x-1">
                    <span>LinkedIn</span>
                    <ExternalLink size={12} className="opacity-40" />
                  </span>
                </a>
                <div className="flex items-center space-x-3 text-white/60">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span>{basics.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white/20">
          <div>© 2026 Mritunjay Kumar (MJ). All Rights Reserved.</div>
          <div className="flex space-x-6">
            <span>Built with React & Framer Motion</span>
            <span>Singapore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
