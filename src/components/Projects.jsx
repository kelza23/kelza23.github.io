import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../content';
import { ArrowUpRight } from 'lucide-react';

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
                            className={`group relative bg-zinc-900/50 rounded-3xl p-8 hover:bg-zinc-900 transition-all border border-white/5 ${project.accent.border} overflow-hidden`}
                            style={{
                                '--hover-glow': project.accent.glow,
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        {/* Partner badge */}
                                        <span className={`inline-block py-1 px-3 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 border ${project.accent.tag}`}>
                                            {project.partner}
                                        </span>
                                        {/* Tag & Funding row */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                                {project.tag}
                                            </span>
                                            {project.funding && (
                                                <>
                                                    <span className="text-zinc-700 text-[10px]">·</span>
                                                    <span className="text-[10px] font-bold text-zinc-400 font-mono">{project.funding}</span>
                                                </>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors tracking-tight">{project.title}</h3>
                                    </div>
                                    <div className={`p-3 bg-white/5 rounded-full text-zinc-400 group-hover:text-white ${project.accent.icon} transition-all duration-300 transform group-hover:rotate-45 shrink-0 ml-4`} aria-hidden="true">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <p className="text-zinc-400 mb-8 leading-relaxed text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-colors ${project.accent.tagFixed} opacity-70 group-hover:opacity-100`}>
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
