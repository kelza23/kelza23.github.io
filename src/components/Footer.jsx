import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../content';
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => (
    <section id="contact" className="py-24 border-t border-white/5" style={{ background: 'var(--ink-2)' }}>
        <div className="content-wrap">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-[11px] text-blue-500 tracking-[0.2em] uppercase mb-6">// Contact</p>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Let's Collaborate.
                </h2>

                <p className="text-sm text-zinc-500 mb-10 max-w-lg leading-loose">
                    Available for technical consultation, industry-aligned research partnerships,
                    and strategic speaking engagements.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <motion.a
                        href={`mailto:${profile.email}?subject=Collaboration%20Enquiry`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors rounded"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        Start a Conversation
                    </motion.a>
                    <a
                        href={`https://linkedin.com/in/${profile.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-zinc-400 text-[11px] uppercase tracking-widest hover:border-blue-500/30 hover:text-blue-300 transition-all rounded"
                    >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export const Footer = () => (
    <footer className="py-8 border-t" style={{ background: 'var(--ink)', borderColor: 'var(--border)' }}>
        <div className="content-wrap flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400 text-[9px] font-bold">
                    KC
                </div>
                <span className="text-[11px] uppercase tracking-widest">
                    © {new Date().getFullYear()} Kelvin Choo
                </span>
            </div>

            <div className="flex items-center gap-1">
                <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer"
                    className="p-2 hover:text-white transition-colors" title="GitHub">
                    <Github className="w-4 h-4" />
                </a>
                <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer"
                    className="p-2 hover:text-white transition-colors" title="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                </a>
                <a href={`mailto:${profile.email}?subject=Collaboration%20Enquiry`}
                    className="p-2 hover:text-white transition-colors" title="Email">
                    <Mail className="w-4 h-4" />
                </a>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest">
                <MapPin className="w-3 h-3" />
                {profile.location}
            </div>
        </div>
    </footer>
);
