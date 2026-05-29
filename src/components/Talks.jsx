import React from 'react';
import { motion } from 'framer-motion';
import { talks, techStack } from '../content';
import { Mic } from 'lucide-react';

export const Talks = () => {
    return (
        <section id="talks" className="py-24 border-t border-white/5" style={{ background: 'var(--ink)' }}>
            <div className="content-wrap">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-[11px] text-blue-500 tracking-[0.2em] uppercase mb-4">// Speaking</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Talks &amp; Thought Leadership</h2>
                </motion.div>

                {/* Talk list — table-style, not cards */}
                <div className="divide-y divide-white/5 mb-16">
                    {talks.map((talk, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.06 }}
                            viewport={{ once: true }}
                            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-5 hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded"
                        >
                            <span className="text-[11px] text-blue-400 tracking-widest uppercase shrink-0 w-24">{talk.date}</span>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-[13px] font-bold text-zinc-200 group-hover:text-white transition-colors mb-0.5">
                                    {talk.title}
                                </h4>
                                <p className="text-[11px] text-zinc-600 uppercase tracking-wide">{talk.venue}</p>
                            </div>
                            <span className="text-[10px] text-zinc-700 uppercase tracking-wider shrink-0 hidden sm:block">{talk.topic}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Credentials — two columns */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-12 border-t border-white/5 grid sm:grid-cols-2 gap-10"
                >
                    <div>
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-5">Certifications</p>
                        <ul className="space-y-2">
                            {techStack.certifications.map((c, i) => (
                                <li key={i} className="flex items-center gap-2 text-[12px] text-zinc-500">
                                    <span className="w-1 h-1 rounded-full bg-blue-600 shrink-0" />
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-5">Memberships &amp; Languages</p>
                        <ul className="space-y-2 mb-5">
                            {techStack.memberships.map((m, i) => (
                                <li key={i} className="flex items-center gap-2 text-[12px] text-zinc-500">
                                    <span className="w-1 h-1 rounded-full bg-blue-600 shrink-0" />
                                    {m}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {techStack.languages.map((l, i) => (
                                <span key={i} className="text-[11px] text-zinc-500 border border-white/5 px-2.5 py-1 rounded">
                                    {l}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
