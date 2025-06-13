'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import ChatInput from '../components/text';
import { Menu, X } from "lucide-react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


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
                <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-28 overflow-hidden bg-transparent"> {/* Reduced py from 36 to 28 */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-90 z-0" />

                    <div className="absolute top-0 md:top-20 inset-x-0 z-0 flex justify-center h-full md:h-auto"> {/* Adjusted top for image */}
                        <div className="absolute -inset-8 blur-3xl bg-purple-700/20 rounded-[2rem] z-[-1]" />
                        <div className="w-full max-w-[1600px] px-0 h-full md:h-auto">

                            <div className="overflow-hidden rounded-[2rem] shadow-xl border border-purple-800/30 h-full">
                                <Image
                                    src='/partners/purple-bg.jpg'
                                    alt="Hero Background"
                                    width={1600}
                                    height={900}
                                    className="w-full h-full object-cover object-center"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="mt-8 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold z-10 text-zinc-900 tracking-tight drop-shadow-lg max-w-5xl leading-tight">
                        NetworkQY
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl mt-4 text-purple-400 font-semibold min-h-[3rem] z-10 transition-all duration-500 tracking-wide">
                        {displayedText}
                    </p>
                    <div className="z-10 mt-6 w-full max-w-5xl px-4"> {/* Reduced margin-top */}
                        <ChatInput />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-500 mt-8 max-w-xl mx-auto z-10 px-2 leading-relaxed"> {/* Reduced margin-top */}
                        {sections[0].subheading}
                    </p>
                    <Link href="/join" className="z-10 mt-10"> {/* Reduced margin-top */}
                        <button className="px-10 py-3 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all text-white font-semibold text-lg tracking-wide">
                            {sections[0].cta}
                        </button>
                    </Link>
                </section>

                {/* Divider */}
                <div className="border-t border-purple-700/30 mx-auto max-w-7xl my-16 md:my-10" /> {/* Reduced vertical margin */}

                {/* Why Section */}
                <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-transparent text-center max-w-7xl mx-auto"> {/* Reduced py from 20/28 to 16/24 */}
                    <Parallax translateY={[-20, 20]} className="relative z-20">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-white tracking-tight leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {sections[1].heading}
                        </motion.h2>
                    </Parallax>

                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"> {/* Reduced gap from 8/10 to 6/8 */}
                        {sections[1].bullets.map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-zinc-900/80 border border-purple-700/50 rounded-3xl p-6 transition-all duration-300 shadow-xl hover:scale-[1.03] hover:shadow-purple-700/20 flex flex-col items-center text-center group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div> {/* Reduced mb from 4 to 3 */}
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Divider */}
                <div className="border-t border-purple-700/30 mx-auto max-w-7xl my-16 md:my-24" /> {/* Reduced vertical margin */}

                {/* Final CTA */}
                <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-transparent text-center max-w-4xl mx-auto"> {/* Reduced py from 20/28 to 16/24 */}
                    <motion.div
                        className="relative z-10 bg-zinc-800/60 border border-purple-600 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md hover:shadow-purple-700/30 transition-shadow duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">{sections[2].heading}</h2> {/* Reduced mb from 6 to 5 */}
                        <p className="text-base sm:text-lg text-zinc-300 mb-8 leading-relaxed">{sections[2].tagline}</p> {/* Reduced mb from 10 to 8 */}
                        <Link href="/join">
                            <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full shadow-lg hover:from-purple-700 hover:to-purple-900 transition-all font-semibold text-lg tracking-wide transform hover:-translate-y-1">
                                {sections[2].cta}
                            </button>
                        </Link>
                    </motion.div>
                </section>

                {/* Divider */}
                <div className="border-t border-purple-700/30 mx-auto max-w-7xl my-16 md:my-24" /> {/* Reduced vertical margin */}

                {/* Partners */}
                <section className="bg-transparent py-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.h2 // Changed from p to h2 for better semantic meaning and hierarchy
                        className="text-lg md:text-xl text-purple-400 uppercase tracking-widest text-center mb-10 font-bold" // Increased font size, changed color
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Backed by Leading Innovators
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center">
                        {partnerLogos.map((logo, i) => (
                            <motion.div
                                key={i}
                                className="relative w-32 sm:w-40 h-14 sm:h-18 grayscale hover:grayscale-0 transition duration-300 cursor-pointer opacity-80 hover:opacity-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }} // Staggered and slightly faster animation
                                viewport={{ once: true, amount: 0.5 }} // Only animate when 50% in view
                            >
                                <Image src={logo.src} alt={logo.name} fill style={{ objectFit: 'contain' }} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-zinc-950 py-16 mt-20 border-t border-purple-800/20 text-purple-300 text-sm sm:text-base"> {/* Reduced py from 24 to 16, mt from 24 to 20 */}
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Reduced gap from 16 to 12 */}

                        {/* Branding */}
                        <div className="md:col-span-1">
                            <h2 className="text-2xl font-bold text-purple-400 mb-4">NetworkQY</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm max-w-xs">
                                Reimagining how professionals connect through AI-powered, intent-based networking. Build smarter, deeper relationships.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div className="md:col-span-1">
                            <h3 className="text-purple-200 font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-zinc-400">
                                <li><Link href="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
                                <li><Link href="/FAQS" className="hover:text-purple-300 transition-colors">FAQs</Link></li>
                                <li><Link href="/privacy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-purple-300 transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter & Socials */}
                        <div className="md:col-span-1">
                            <h3 className="text-purple-200 font-semibold text-sm uppercase tracking-wider mb-4">Stay Updated</h3>
                            <form className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-3 sm:space-y-0">
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="flex-1 px-4 py-2 rounded-md bg-zinc-800 border border-purple-600 placeholder-zinc-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition"
                                >
                                    Subscribe
                                </button>
                            </form>

                            <div className="flex space-x-5 mt-5"> {/* Reduced mt from 6 to 5 */}
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-100 transition-colors">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.28 4.28 0 0 0 1.88-2.36 8.52 8.52 0 0 1-2.7 1.03A4.26 4.26 0 0 0 16.11 4c-2.36 0-4.27 1.91-4.27 4.27 0 .34.04.67.11.99C7.69 8.99 4.07 7.1 1.64 4.16a4.3 4.3 0 0 0-.58 2.15c0 1.48.75 2.79 1.89 3.56a4.27 4.27 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.2a4.3 4.3 0 0 1-1.93.07c.54 1.68 2.1 2.9 3.95 2.93A8.54 8.54 0 0 1 2 19.54a12.04 12.04 0 0 0 6.52 1.91c7.83 0 12.11-6.49 12.11-12.11 0-.18 0-.36-.01-.53A8.6 8.6 0 0 0 24 5.1a8.38 8.38 0 0 1-2.54.7z"/>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-100 transition-colors">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-.96 0-1.5-.66-1.5-1.48 0-.84.57-1.48 1.55-1.48s1.5.64 1.5 1.48c0 .82-.54 1.48-1.55 1.48zm13.5 11.2h-3v-5.2c0-1.24-.44-2.1-1.56-2.1-.85 0-1.36.57-1.59 1.12-.08.2-.1.48-.1.76v5.42h-3v-10h3v1.36c.4-.6 1.08-1.46 2.63-1.46 1.92 0 3.36 1.24 3.36 3.92v6.18z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-purple-800/20 mt-12 pt-6"> {/* Reduced mt from 16 to 12 */}
                        <p className="text-center text-xs text-zinc-500 tracking-wide pb-0">
                            &copy; 2025 NetworkQY. All rights reserved.
                        </p>
                    </div>
                </footer>
            </main>
        </ParallaxProvider>
    );
}