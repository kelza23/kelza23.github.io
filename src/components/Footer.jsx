import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../content';
import { MapPin } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-none opacity-90 text-white">
                        Let's <br /> Collaborate.
                    </h2>
                    <p className="text-zinc-400 mb-12 max-w-lg mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        Available for technical consultation, industry-aligned research partnerships, and strategic speaking engagements.
                    </p>
                    <motion.a
                        href={`mailto:${profile.email}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-12 py-5 bg-white text-zinc-950 font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-2xl rounded-xl"
                    >
                        Start a Conversation
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="py-12 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-500">
                <div className="flex items-center space-x-3 mb-4 md:mb-0 group cursor-default">
                    <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg font-bold text-[10px] group-hover:bg-blue-600 transition-colors">KC</div>
                    <span className="text-xs font-bold uppercase tracking-widest group-hover:text-zinc-300 transition-colors">© {new Date().getFullYear()} Kelvin Choo</span>
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest group cursor-pointer hover:text-blue-500 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-blue-500/20">
                    <MapPin className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    {profile.location}
                </div>
            </div>
        </footer>
    );
};
