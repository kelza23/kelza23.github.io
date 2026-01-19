import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../content';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

export const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-sm">
                        {profile.title.toUpperCase()}
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Engineering the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-glow">
                        Future of AI.
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {profile.summary}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="group relative px-8 py-4 bg-white text-zinc-950 font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View The Playbook <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <div className="flex items-center gap-4 px-6">
                        <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer" className="p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" className="p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};
