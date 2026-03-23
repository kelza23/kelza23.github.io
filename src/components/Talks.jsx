import React from 'react';
import { motion } from 'framer-motion';
import { talks } from '../content';
import { Mic } from 'lucide-react';

export const Talks = () => {
    return (
        <section id="talks" className="py-24 bg-zinc-950 border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-16 space-x-6">
                    <div className="h-px bg-zinc-800 flex-1"></div>
                    <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500 flex items-center gap-3">
                        <span className="p-2 bg-zinc-900 rounded-lg"><Mic className="w-4 h-4 text-blue-500" /></span>
                        Speaking & Thought Leadership
                    </h2>
                    <div className="h-px bg-zinc-800 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {talks.map((talk, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center text-center p-10 bg-zinc-900/30 hover:bg-zinc-900 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500"
                        >
                            <span className="text-[10px] font-black text-blue-400 uppercase mb-4 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10">{talk.date}</span>
                            <h4 className="font-bold text-xl mb-3 text-white group-hover:text-blue-200 transition-colors">{talk.title}</h4>
                            <p className="text-sm text-zinc-400 font-medium mb-1">{talk.venue}</p>
                            <p className="text-xs text-zinc-600 uppercase tracking-wide">{talk.topic}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
