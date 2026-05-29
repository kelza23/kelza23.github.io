import React from 'react';
import { motion } from 'framer-motion';
import { experience, aiSpecialties, supervision, techStack } from '../content';
import { Database, Cpu, Code, Activity, Star, GraduationCap } from 'lucide-react';

const IconMap = {
    Database: <Database className="w-4 h-4" />,
    Cpu:      <Cpu className="w-4 h-4" />,
    Code:     <Code className="w-4 h-4" />,
    Activity: <Activity className="w-4 h-4" />,
};

export const Experience = () => {
    return (
        <section id="experience" className="py-24 border-t border-white/5" style={{ background: 'var(--ink)' }}>
            <div className="content-wrap">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[11px] text-blue-500 tracking-[0.2em] uppercase mb-4">// Career</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Professional Trajectory</h2>
                    <p className="text-sm text-zinc-500">
                        A non-linear path from academic labs to industrial sites and athletic fields.
                    </p>
                </motion.div>

                {/* Specialties — compact pill row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 mb-16 pb-16 border-b border-white/5"
                >
                    {aiSpecialties.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-2 border border-white/6 rounded text-[11px] text-zinc-400 hover:border-blue-500/30 hover:text-zinc-200 transition-colors cursor-default"
                            style={{ background: 'var(--ink-2)' }}>
                            <span className="text-blue-500">{IconMap[s.icon]}</span>
                            <span className="tracking-wide">{s.title}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Timeline */}
                <div className="space-y-12">
                    {experience.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            viewport={{ once: true }}
                            className="group grid md:grid-cols-[200px_1fr] gap-6 md:gap-10"
                        >
                            {/* Left — meta */}
                            <div>
                                <p className="text-[11px] text-blue-400 tracking-widest uppercase mb-1">{job.period}</p>
                                <p className="text-[11px] text-zinc-500 uppercase tracking-wide mb-1">{job.company}</p>
                                <span className="inline-block text-[10px] text-zinc-600 tracking-widest uppercase border border-white/5 px-2 py-0.5 rounded">
                                    {job.type}
                                </span>
                            </div>

                            {/* Right — content */}
                            <div>
                                <h3 className="text-base font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                    {job.role}
                                </h3>
                                <p className="text-[13px] text-zinc-400 leading-loose mb-5">
                                    {job.description}
                                </p>
                                <ul className="space-y-2">
                                    {job.highlights.map((h, hi) => (
                                        <li key={hi} className="flex items-start gap-3 text-[12px] text-zinc-500">
                                            <span className="text-blue-600 mt-0.5 shrink-0">→</span>
                                            <span className="leading-relaxed">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech stack */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-16 border-t border-white/5"
                >
                    <p className="text-[11px] text-blue-500 tracking-[0.2em] uppercase mb-6">// Technical Arsenal</p>
                    <div className="space-y-4">
                        {[
                            { label: 'Software', items: techStack.software },
                            { label: 'Hardware', items: techStack.hardware },
                        ].map(({ label, items }) => (
                            <div key={label} className="flex flex-wrap items-baseline gap-3">
                                <span className="text-[10px] text-zinc-600 uppercase tracking-widest w-20 shrink-0">{label}</span>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((t, i) => (
                                        <span key={i} className="text-[11px] text-zinc-500 border border-white/5 px-2.5 py-1 rounded hover:text-zinc-300 hover:border-white/10 transition-colors cursor-default">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Supervision */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-16 border-t border-white/5"
                >
                    <div className="flex items-center gap-2 mb-8">
                        <GraduationCap className="w-4 h-4 text-blue-500" />
                        <p className="text-[11px] text-blue-500 tracking-[0.2em] uppercase">// Research Supervision</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {supervision.map((group, gi) => (
                            <div key={gi}>
                                <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-4">{group.type}</p>
                                <div className="space-y-3">
                                    {group.students.map((s, si) => (
                                        <div key={si} className="flex items-start gap-3 p-4 border border-white/5 rounded hover:border-white/10 transition-colors"
                                            style={{ background: 'var(--ink-2)' }}>
                                            <div className="w-7 h-7 rounded border border-blue-500/20 flex items-center justify-center text-[9px] text-blue-400 font-bold shrink-0"
                                                style={{ background: 'var(--blue-lo)' }}>
                                                {s.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                            </div>
                                            <div className="min-w-0">
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <span className="text-[12px] font-bold text-zinc-200">{s.name}</span>
                                                    {s.status && (
                                                        <span className="text-[9px] text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase tracking-wider">
                                                            {s.status}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[11px] text-zinc-600 leading-relaxed">{s.topic}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
