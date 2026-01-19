import React from 'react';
import { motion } from 'framer-motion';
import { philosophy } from '../content';
import { Briefcase, Lightbulb, Trophy } from 'lucide-react';

export const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-zinc-950/50" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-black text-white mb-4">The Modern Researcher's Playbook</h2>
                    <p className="text-zinc-400 italic">"Everything you don't know is something you can learn."</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {philosophy.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {idx === 0 ? <Briefcase className="w-6 h-6" /> : idx === 1 ? <Lightbulb className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
