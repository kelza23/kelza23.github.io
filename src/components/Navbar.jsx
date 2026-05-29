import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Menu, X } from 'lucide-react';

const NAV = [
    { name: 'Philosophy', id: 'philosophy' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects',   id: 'projects' },
    { name: 'Talks',      id: 'talks' },
    { name: 'Contact',    id: 'contact' },
];

export const Navbar = () => {
    const [scrolled,  setScrolled]  = useState(false);
    const [active,    setActive]    = useState('home');
    const [menuOpen,  setMenuOpen]  = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const sections = ['home', ...NAV.map(l => l.id)];
            const pos = window.scrollY + 100;
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
                    setActive(id);
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const go = (id) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 inset-x-0 z-50"
            >
                <div className={twMerge(
                    'transition-all duration-300 border-b',
                    scrolled
                        ? 'border-white/6 backdrop-blur-lg'
                        : 'border-transparent',
                )}
                    style={{ background: scrolled ? 'rgba(12,12,14,0.92)' : 'transparent' }}>
                    <div className="content-wrap flex items-center justify-between h-14">
                        {/* Logo */}
                        <button onClick={() => go('home')} className="flex items-center gap-2.5 group">
                            <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold tracking-wider group-hover:bg-blue-500 transition-colors">
                                KC
                            </div>
                            <span className="text-[12px] font-bold tracking-widest text-white uppercase">
                                Kelvin<span className="text-blue-400">Choo</span>
                            </span>
                        </button>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {NAV.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => go(link.id)}
                                    className={twMerge(
                                        'px-3 py-1.5 text-[11px] uppercase tracking-widest transition-all duration-200 rounded',
                                        active === link.id
                                            ? 'text-white bg-white/6'
                                            : 'text-zinc-500 hover:text-zinc-200',
                                    )}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => go('contact')}
                                className="ml-3 px-4 py-1.5 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors rounded"
                            >
                                Connect
                            </button>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMenuOpen(p => !p)}
                            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="fixed top-14 inset-x-0 z-40 md:hidden border-b border-white/6"
                        style={{ background: 'rgba(12,12,14,0.97)', backdropFilter: 'blur(16px)' }}
                    >
                        <div className="content-wrap py-4 flex flex-col gap-1">
                            {NAV.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => go(link.id)}
                                    className={twMerge(
                                        'w-full text-left px-3 py-2.5 text-[12px] uppercase tracking-widest rounded transition-all',
                                        active === link.id ? 'text-white bg-white/6' : 'text-zinc-500 hover:text-white',
                                    )}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => go('contact')}
                                className="mt-2 px-3 py-2.5 bg-blue-600 text-white text-[12px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors rounded"
                            >
                                Connect
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
