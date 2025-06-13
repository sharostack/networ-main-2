'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import ChatInput from '../components/text';
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import GlowingEffect from '@/components/GlowEffect';

const sections = [
    {
        heading: 'Reimagine Connections.',
        subheading: 'The First AI-Powered Professional Social Network.',
        cta: 'Join Today',
        description: 'NetworkQY leverages artificial intelligence to help you build meaningful professional relationships faster and smarter.'
    },
    {
        heading: 'Why NetworkQY?',
        bullets: [
            { emoji: '🔍', title: 'Find Hidden Matches', text: 'AI surfaces connections based on your intent, values, and timing — not just keywords.' },
            { emoji: '🤝', title: 'Warm Intros, Always', text: 'Receive high-context intros that feel organic, not cold calls.' },
            { emoji: '📈', title: 'Smarter Follow-Ups', text: 'Get notified when it’s the right time to reconnect or make a move.' },
            { emoji: '🚀', title: 'Accelerate Growth', text: 'Build meaningful relationships that drive your startup’s success.' },
            { emoji: '🧠', title: 'Intent-Aware Discovery', text: 'Our AI adapts to your goals in real time, helping you connect with the right people, faster.' }
        ]
    },
    {
        heading: 'Built for Builders.',
        tagline: 'Whether you’re fundraising, hiring, or launching something new — NetworkQY is your sidekick for serendipity.',
        cta: 'Join the Beta'
    }
];

const rotatingTexts = [
    'Find your cofounder',
    'Pitch your startup',
    'Connect with investors',
    'Join powerful communities',
    'Get discovered by talent'
];

const partnerLogos = [
    { name: 'PerplexityAI', src: '/partners/perplexity.png' },
    { name: 'Google', src: '/partners/gcp.png' },
    { name: 'in5 Dubai', src: '/partners/in5.png' },
    { name: 'NVIDIA', src: '/partners/nvidea.png' },
    { name: 'Dubai Holding', src: '/partners/dh.jpg' }
];

export default function PageNew() {
    const [displayedText, setDisplayedText] = useState('');
    const [fullText, setFullText] = useState(rotatingTexts[0]);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = 80;
        const delayBetweenPhrases = 1200;

        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                const nextIndex = (textIndex + 1) % rotatingTexts.length;
                setFullText(rotatingTexts[nextIndex]);
                setDisplayedText('');
                setCharIndex(0);
                setTextIndex(nextIndex);
            }, delayBetweenPhrases);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, fullText, textIndex]);

    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen((prev) => !prev);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ParallaxProvider>
            {/* Header: Unchanged */}
            <header
                className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl rounded-2xl z-50 transition-all duration-300 ${
                    isAtTop
                        ? "bg-transparent border-transparent shadow-none"
                        : "backdrop-blur-xl border border-zinc-800/50 bg-zinc-900/60 shadow-[0_2px_16px_rgba(168,85,247,0.08)]"
                }`}
            >
                <div className="flex justify-between items-center px-6 py-4 text-purple-300">
                    <h1 className="text-2xl font-bold text-purple-400 tracking-tight hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.9)] cursor-pointer">NetworkQY</h1>
                    <nav className="hidden md:flex space-x-6 text-base font-medium">
                        {["About", "FAQS", "Chatbot"].map((item) => (
                            <Link key={item} href={`/${item}`} className="hover:text-purple-200 transition">
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <button onClick={toggleNav} className="md:hidden text-purple-300">
                        {navOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {navOpen && (
                    <div className="md:hidden px-6 pb-4 pt-2 space-y-2 text-purple-200 text-base font-medium">
                        <Link href="/about" onClick={() => setNavOpen(false)} className="block">About</Link>
                        <Link href="/FAQS" onClick={() => setNavOpen(false)} className="block">FAQS</Link>
                        <Link href="/chatbot" onClick={() => setNavOpen(false)} className="block">Chatbot</Link>
                    </div>
                )}
            </header>

            <main className="min-h-screen text-white font-sans leading-relaxed tracking-wide bg-gradient-to-b from-black via-zinc-900 to-purple-950">

                {/* Hero Section */}
                <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-36 overflow-hidden bg-transparent">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-90 z-0" />

                    <div className="absolute top-24 inset-x-0 z-0 flex justify-center">
                        <div className="absolute -inset-8 blur-3xl bg-purple-700/20 rounded-[2rem] z-[-1]" />
                        <div className="w-full max-w-7xl px-4">
                            <div className="overflow-hidden rounded-[2rem] shadow-xl border border-purple-800/30">
                                <Image
                                    src="/partners/purple-bg.jpg"
                                    alt="Hero Background"
                                    width={1600}
                                    height={900}
                                    className="w-full h-[500px] md:h-[650px] object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold z-10 text-gray-900 tracking-tight drop-shadow-lg max-w-5xl leading-tight">
                        NetworkQY
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl mt-4 text-purple-400 font-semibold min-h-[3rem] z-10 transition-all duration-500 tracking-wide">
                        {displayedText}
                    </p>
                    <div className="z-10 mt-6 w-full max-w-5xl px-4">
                        <ChatInput />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-400 mt-8 max-w-xl mx-auto z-10 px-2 leading-relaxed">
                        {sections[0].subheading}
                    </p>
                    <Link href="/join" className="z-10 mt-12">
                        <button className="px-10 py-3 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all text-white font-semibold text-lg tracking-wide">
                            {sections[0].cta}
                        </button>
                    </Link>
                </section>

                {/* Divider */}
                <div className="border-t border-purple-700/30 mx-auto max-w-7xl" />

                {/* Why Section */}
                <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-transparent text-center max-w-7xl mx-auto">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 text-white tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {sections[1].heading}
                    </motion.h2>

                    <Parallax translateY={[-20, 20]}>
                        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
                            {sections[1].bullets.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-zinc-900/80 border border-purple-700/50 rounded-3xl p-8 w-full sm:w-72 transition-all duration-300 shadow-xl hover:scale-[1.05] hover:shadow-purple-700/20 flex flex-col items-center text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-5xl mb-4">{item.emoji}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-zinc-400">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Parallax>
                </section>

                {/* Divider */}
                <div className="border-t border-purple-700/30 mx-auto max-w-7xl" />

                {/* Final CTA */}
                <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-transparent text-center max-w-4xl mx-auto">
                    <motion.div
                        className="relative z-10 bg-zinc-800/50 border border-purple-600 rounded-3xl p-12 shadow-2xl backdrop-blur-md"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">{sections[2].heading}</h2>
                        <p className="text-base sm:text-lg text-zinc-300 mb-10">{sections[2].tagline}</p>
                        <Link href="/join">
                            <button className="px-10 py-3 bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-800 transition-all font-semibold text-lg">
                                {sections[2].cta}
                            </button>
                        </Link>
                    </motion.div>
                </section>

                {/* Partners */}
                <section className="bg-transparent py-16 max-w-7xl mx-auto px-4 sm:px-6">
                    <p className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest text-center mb-8 font-semibold">
                        Backed by
                    </p>
                    <div className="flex flex-wrap justify-center gap-14 items-center">
                        {partnerLogos.map((logo, i) => (
                            <div key={i} className="relative w-28 sm:w-36 h-12 sm:h-16 grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
                                <Image src={logo.src} alt={logo.name} fill style={{ objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center py-10 border-t border-zinc-800 text-purple-400 mt-20 text-sm select-none tracking-wide">
                    &copy; 2025 NetworkQY — The First AI-Powered Networking Platform.
                </footer>
            </main>
        </ParallaxProvider>
    );
}