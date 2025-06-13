'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl rounded-2xl z-50 transition-all duration-300 ${
                isAtTop
                    ? 'bg-transparent border-transparent shadow-none'
                    : 'backdrop-blur-xl border border-zinc-800/50 bg-zinc-900/60 shadow-[0_2px_16px_rgba(168,85,247,0.08)]'
            }`}
        >
            <div className="flex justify-between items-center px-6 py-4 text-purple-300">
                <h1
                    className="text-2xl font-bold text-purple-400 tracking-tight
                    transition-shadow duration-300
                    hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.9)]
                    focus:drop-shadow-[0_0_8px_rgba(168,85,247,1)]
                    cursor-pointer"
                >
                    NetworkQY
                </h1>
                <nav className="hidden md:flex space-x-6 text-base font-medium">
                    {['About', 'FAQS', 'Chatbot'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="hover:text-purple-200 transition-colors duration-300
                                hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]
                                focus:drop-shadow-[0_0_10px_rgba(168,85,247,1)]
                                outline-none"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className="md:hidden text-purple-300
                        hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]
                        focus:drop-shadow-[0_0_10px_rgba(168,85,247,1)]
                        transition duration-300 outline-none"
                    aria-label="Toggle menu"
                >
                    {navOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {navOpen && (
                <div className="md:hidden px-6 pb-4 pt-2 space-y-2 text-purple-200 text-base font-medium">
                    <Link href="/about" onClick={() => setNavOpen(false)} className="block">
                        About
                    </Link>
                    <Link href="/FAQS" onClick={() => setNavOpen(false)} className="block">
                        FAQS
                    </Link>
                    <Link href="/chatbot" onClick={() => setNavOpen(false)} className="block">
                        Chatbot
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
