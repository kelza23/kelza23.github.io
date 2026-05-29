import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../content';
import { ArrowUpRight } from 'lucide-react';

const GlowCard = ({ project, idx }) => {
    const cardRef = useRef(null);

    const onMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
        card.style.setProperty('--gc', project.accent.glow);
    }, [project.accent.glow]);

    const onLeave = useCallback(() => {
        cardRef.current?.style.removeProperty('--mx');
        cardRef.current?.style.removeProperty('--my');
    }, []);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            viewport={{ once: true }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`group relative rounded border border-white/5 ${project.accent.border} overflow-hidden transition-colors duration-300 p-6`}
            style={{ background: 'var(--ink-2)' }}
        >
            {/* Mouse-tracking glow */}
            <div className="pointer-events-none absolute -inset-px rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), var(--gc,transparent), transparent 50%)' }} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <span className={`inline-block text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border mb-2 ${project.accent.tagFixed}`}>
                            {project.tag}
                        </span>
                        <h3 className="text-[14px] font-bold text-white leading-snug">{project.title}</h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 shrink-0 ml-4 mt-0.5 group-hover:rotate-45 transition-all duration-300" />
                </div>

                {/* Partner & funding */}
                <p className="text-[11px] text-zinc-600 mb-1 uppercase tracking-wide">{project.partner}</p>
                {project.funding && (
                    <p className="text-[11px] text-zinc-400 font-bold mb-4">{project.funding}</p>
                )}

                {/* Description */}
                <p className="text-[12px] text-zinc-500 leading-loose flex-grow mb-5 group-hover:text-zinc-400 transition-colors">
                    {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t, i) => (
                        <span key={i} className={`text-[10px] px-2 py-1 rounded border ${project.accent.tagFixed} opacity-50 group-hover:opacity-100 transition-opacity`}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="py-24 border-t border-white/5" style={{ background: 'var(--ink-3)' }}>
            <div className="content-wrap">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
                >
                    <div>
                        <p className="text-[11px] text-blue-500 tracking-[0.2em] uppercase mb-4">// Portfolio</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Tangible Impact</h2>
                        <p className="text-sm text-zinc-500">
                            AI theory meeting real-world constraints.
                        </p>
                    </div>
                    <div className="shrink-0 text-right">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Total Funding</p>
                        <p className="text-xl font-bold text-blue-400">&gt; AUD 2,500,000</p>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                    {projects.map((project, idx) => (
                        <GlowCard key={idx} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
