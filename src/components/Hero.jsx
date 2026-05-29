import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../content';
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react';

/* ── Particle Canvas ───────────────────────────────────────────────────────── */
const SignalCanvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        const nodes = [];
        const COUNT = 40;
        const MAX_D = 140;

        const resize = () => {
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < COUNT; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.4 + 0.5,
                p: Math.random() * Math.PI * 2,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const n of nodes) {
                n.x += n.vx; n.y += n.vy; n.p += 0.015;
                if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height)  n.vy *= -1;
                const g = Math.sin(n.p) * 0.5 + 0.5;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r + g * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(37,99,235,${0.3 + g * 0.4})`;
                ctx.fill();
            }
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx*dx + dy*dy);
                    if (d < MAX_D) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(37,99,235,${(1 - d/MAX_D) * 0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
};

/* ── Ticker ────────────────────────────────────────────────────────────────── */
const ITEMS = [
    '> AUD 2.5M secured',
    '4 industry partners',
    '7 HDR candidates',
    'World Champs 2024 photographer',
    'Edge AI · NVIDIA Jetson',
    'AI · Defence · Transport · Sport',
    'CI/CD from lab to frontline',
];
const Ticker = () => {
    const doubled = [...ITEMS, ...ITEMS];
    return (
        <div className="ticker-mask overflow-hidden border-t border-white/5 py-3">
            <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
                {doubled.map((item, i) => (
                    <span key={i} className="text-[11px] text-zinc-600 mx-10 tracking-widest uppercase">
                        <span className="text-blue-600 mr-2">—</span>{item}
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ── Hero ──────────────────────────────────────────────────────────────────── */
export const Hero = () => {
    const go = (id) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Backgrounds */}
            <div className="absolute inset-0 bg-dots opacity-40" />
            <SignalCanvas />
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 55%, transparent 20%, #0c0c0e 100%)' }} />

            {/* Main content — tightly constrained */}
            <div className="content-wrap relative z-10 pt-32 pb-12">
                {/* Status badge */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mb-8">
                    <span className="inline-flex items-center gap-2 text-[11px] text-blue-400 tracking-[0.2em] uppercase border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-dot-pulse inline-block" />
                        {profile.title}
                    </span>
                </motion.div>

                {/* Headline — fixed, not stretchy */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    From Lab<br />
                    <span className="text-blue-400">to Frontline.</span>
                </motion.h1>

                {/* Name line */}
                <motion.p
                    className="text-[11px] text-zinc-500 tracking-[0.2em] uppercase mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    Dr. Yit Hong (Kelvin) Choo &nbsp;·&nbsp; PhD Engineering &nbsp;·&nbsp; Geelong VIC
                </motion.p>

                {/* Summary — max width so it doesn't spread too wide */}
                <motion.p
                    className="text-sm text-zinc-400 leading-loose mb-10 max-w-xl"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    {profile.summary}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-wrap items-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    <button
                        id="hero-cta-playbook"
                        onClick={() => go('experience')}
                        className="group flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-950 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-200 rounded"
                    >
                        View Playbook <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <a
                        id="hero-cta-email"
                        href={`mailto:${profile.email}?subject=Collaboration%20Enquiry`}
                        className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-zinc-400 text-[11px] uppercase tracking-widest hover:border-white/20 hover:text-white transition-all duration-200 rounded"
                    >
                        <Mail className="w-3.5 h-3.5" /> Get In Touch
                    </a>
                    <div className="flex items-center gap-1 ml-1">
                        <a id="hero-linkedin" href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer"
                            className="p-2 text-zinc-600 hover:text-white transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a id="hero-github" href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer"
                            className="p-2 text-zinc-600 hover:text-white transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Funding stat */}
                <motion.div
                    className="inline-flex items-center gap-3 text-[11px] text-zinc-500 border-l-2 border-blue-500/40 pl-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <span className="text-blue-400 font-bold">{profile.funding}</span>
                    <span>in secured grants &amp; contracts</span>
                </motion.div>
            </div>

            {/* Ticker */}
            <motion.div
                className="relative z-10 mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                <Ticker />
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                aria-hidden="true"
            >
                <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
            </motion.div>
        </section>
    );
};
