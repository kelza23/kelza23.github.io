import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../content';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-zinc-950 relative">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-black text-white mb-4">Tangible Impact.</h2>
                        <p className="text-zinc-400 max-w-xl text-lg">
                            Highlighting projects where AI theory met real-world constraints to deliver measurable value.
                        </p>
                    </motion.div>


                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-zinc-900/50 rounded-3xl p-8 hover:bg-zinc-900 transition-all border border-white/5 hover:border-blue-500/30 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3 border border-blue-500/20">
                                            {project.partner}
                                        </span>
                                        <h3 className="text-3xl font-bold text-white group-hover:text-blue-200 transition-colors tracking-tight">{project.title}</h3>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-full text-zinc-400 group-hover:text-white group-hover:bg-blue-500 transition-all duration-300 transform group-hover:rotate-45" aria-hidden="true">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <p className="text-zinc-400 mb-8 leading-relaxed text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold text-zinc-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
