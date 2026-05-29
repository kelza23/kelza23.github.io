import React from 'react';
import { motion } from 'framer-motion';
import { philosophy, profile } from '../content';

const NUMS = ['01', '02', '03'];

export const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 border-t border-white/5" style={{ background: 'var(--ink-2)' }}>
            <div className="content-wrap">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[11px] text-blue-500 tracking-[0.2em] uppercase mb-4">// Principles</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        The Modern Researcher's Playbook
                    </h2>
                    <p className="text-sm text-zinc-500 italic max-w-xl leading-relaxed border-l-2 border-blue-600/30 pl-4">
                        &ldquo;{profile.motto}&rdquo;
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
                    {philosophy.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            className="group relative p-8 transition-colors duration-300 hover:bg-white/[0.02]"
                            style={{ background: 'var(--ink-2)' }}
                        >
                            {/* Accent bar */}
                            <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-transparent group-hover:bg-blue-600/50 transition-colors duration-300" />

                            <span className="text-[10px] text-zinc-700 tracking-widest uppercase block mb-5">{NUMS[idx]}</span>
                            <h3 className="text-[13px] font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-[12px] text-zinc-500 leading-loose group-hover:text-zinc-400 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
