import React from 'react';
import { motion } from 'framer-motion';
import { experience, aiSpecialties } from '../content';
import { Database, Cpu, Code, Activity, Star } from 'lucide-react';

const IconMap = {
    Database: <Database className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    Activity: <Activity className="w-5 h-5" />,
};

export const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Column: Header */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Professional <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Trajectory.</span>
                                </h2>
                                <p className="text-zinc-500 mb-8 font-medium text-lg">
                                    A non-linear path from academic labs to industrial sites and athletic fields.
                                </p>

                                <div className="grid gap-3">
                                    {aiSpecialties.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                                        >
                                            <div className="text-blue-500 mr-4 p-2 bg-blue-500/10 rounded-lg">{IconMap[item.icon]}</div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-wider text-zinc-200">{item.title}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="lg:w-2/3 space-y-16">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 border-l-2 border-zinc-800 hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-4 border-blue-600 transition-all group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{job.period}</span>
                                </div>

                                <div className="flex items-center text-sm font-bold text-zinc-500 mb-6 uppercase tracking-wide">
                                    {job.company}
                                    <span className="mx-2 text-zinc-700">•</span>
                                    <span className="text-indigo-400">{job.type}</span>
                                </div>

                                <p className="text-zinc-400 mb-8 leading-relaxed text-lg font-light border-l-2 border-white/5 pl-4">
                                    {job.description}
                                </p>

                                <div className="bg-white/5 rounded-2xl p-8 border border-white/5 group-hover:bg-white/[0.07] transition-colors">
                                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Key Impact</h4>
                                    <ul className="space-y-4">
                                        {job.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start text-zinc-300 text-sm">
                                                <Star className="w-5 h-5 text-yellow-500/80 mr-4 mt-0.5 shrink-0" fill="currentColor" />
                                                <span className="leading-relaxed">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
