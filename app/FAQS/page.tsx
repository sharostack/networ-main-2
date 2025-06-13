'use client';

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';

const faqs = [
    {
        category: "Basics",
        question: "What is NetworkQY?",
        answer:
            "NetworkQY is a smart networking platform designed to connect professionals with recruiters and industry experts to help you grow your career and business relationships effectively.",
    },
    {
        category: "Basics",
        question: "Who can use NetworkQY?",
        answer:
            "NetworkQY is ideal for job seekers, recruiters, HR professionals, and anyone looking to expand their professional network in a meaningful and efficient way.",
    },
    {
        category: "Functionality",
        question: "How does NetworkQY match me with recruiters and contacts?",
        answer:
            "Our AI-powered system analyzes your skills, career goals, and preferences, then recommends the most relevant recruiters and professionals to connect with.",
    },
    {
        category: "Functionality",
        question: "Can I customize the types of professionals I want to connect with?",
        answer:
            "Yes, you can filter recommendations based on industry, job roles, experience level, and geographic location to tailor your networking experience.",
    },
    {
        category: "Functionality",
        question: "Does NetworkQY support direct messaging with recruiters?",
        answer:
            "Yes, once connected, you can message recruiters and professionals directly through a secure chat interface within the platform.",
    },
    {
        category: "Privacy & Security",
        question: "How is my personal data protected?",
        answer:
            "Your data is securely encrypted and used only to enhance your networking experience. We adhere to strict privacy policies and do not share your information without your explicit consent.",
    },
    {
        category: "Privacy & Security",
        question: "Can recruiters see my full profile?",
        answer:
            "You control what parts of your profile are visible to recruiters. You can choose to highlight key skills or keep sensitive information private.",
    },
    {
        category: "Platform Usage",
        question: "Is there a mobile app available?",
        answer:
            "Yes, NetworkQY has a mobile app for both iOS and Android, enabling you to network on the go.",
    },
    {
        category: "Platform Usage",
        question: "Are there any subscription fees?",
        answer:
            "NetworkQY offers both free and premium membership tiers. Premium plans provide advanced features such as enhanced profile visibility and unlimited messaging.",
    },
    {
        category: "Platform Usage",
        question: "How do I report inappropriate behavior or spam?",
        answer:
            "You can report any suspicious or inappropriate activity directly through the user profile or chat interface, and our moderation team will review it promptly.",
    },
    {
        category: "Support & Feedback",
        question: "How can I get help or support?",
        answer:
            "You can reach our support team via the in-app help center or email support@networkqy.com.",
    },
    {
        category: "Support & Feedback",
        question: "Can I suggest new features or improvements?",
        answer:
            "Absolutely! We welcome user feedback to help us improve. Use the feedback form available in your account settings.",
    },
];

const additionalFaqs = [
    {
        question: "Will NetworkQY notify me of new recruiters or connections?",
        answer:
            "Yes, you can enable notifications for new recruiter recommendations and connection requests to stay updated in real-time.",
    },
    {
        question: "Can I integrate NetworkQY with my existing LinkedIn profile?",
        answer:
            "We plan to support integrations with LinkedIn and other professional networks soon to streamline your profile and contacts.",
    },
    {
        question: "Is my networking activity private from my current employer?",
        answer:
            "Yes, your activity on NetworkQY is confidential and only shared with the contacts and recruiters you choose to connect with.",
    },
];


export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [openAdditionalIndex, setOpenAdditionalIndex] = useState<number | null>(null);
    const [navOpen, setNavOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const categories = ["All", ...new Set(faqs.map((f) => f.category))];
    const filteredFaqs =
        activeCategory === "All"
            ? faqs
            : faqs.filter((faq) => faq.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-zinc-950 text-zinc-300 font-sans">
            {/* HEADER */}
            <header
                className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl rounded-2xl z-50 transition-all duration-300 ${
                    isAtTop
                        ? "bg-transparent border-transparent shadow-none"
                        : "backdrop-blur-xl border border-zinc-800/50 bg-zinc-900/60 shadow-[0_2px_16px_rgba(168,85,247,0.08)]"
                }`}
            >
                <div className="flex justify-between items-center px-6 py-4 text-purple-300">
                    <Link href="/">
  <h1 className="text-2xl font-bold text-purple-400 tracking-tight
    transition-shadow duration-300
    hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.9)]
    focus:drop-shadow-[0_0_8px_rgba(168,85,247,1)]
    cursor-pointer
  ">
    NetworkQY
  </h1>
</Link>
                    <nav className="hidden md:flex space-x-6 text-base font-medium">
                        {["About", "FAQS", "Chatbot"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item}`}
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
                        <Link href="/about" onClick={() => setNavOpen(false)} className="block">About</Link>
                        <Link href="/FAQS" onClick={() => setNavOpen(false)} className="block">FAQS</Link>
                        <Link href="/chatbot" onClick={() => setNavOpen(false)} className="block">Chatbot</Link>
                    </div>
                )}
            </header>

            {/* MAIN CONTENT */}
            <main className="pt-30 px-8 pb-0 mb-0 max-w-7xl mx-auto space-y-10">

                {/* CATEGORY + FAQS */}
                <div className="flex flex-col md:flex-row gap-12">
                    {/* SIDEBAR */}
                    <aside className="md:w-1/4 space-y-3 md:sticky md:top-30 self-start">
                        <h3 className="text-xl font-semibold text-purple-300 mb-2 tracking-wide">
                            Categories
                        </h3>
                        <div className="space-y-2">
                            {categories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    className={`w-full text-left px-4 py-2 rounded-lg font-semibold border transition
                                    focus:outline-none focus:ring-2 focus:ring-purple-400
                                    ${
                                        activeCategory === cat
                                            ? "bg-purple-700 text-white border-purple-700 shadow-[0_0_8px_rgba(168,85,247,0.7)] scale-105"
                                            : "bg-zinc-900 text-purple-400 border-zinc-700 hover:bg-zinc-800 hover:text-white hover:shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                                    }`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* FAQ LIST */}
                    <section className="flex-1 space-y-6">
                        <h2 className="text-5xl font-extrabold text-purple-300 tracking-tight mb-5 drop-shadow-sm md:text-right">
                        FAQs
                    </h2>
                        {filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-zinc-700 bg-zinc-900/80 transition p-6
                hover:shadow-[0_0_10px_rgba(168,85,247,0.75)]
                hover:border-purple-500"
                            >
                                <h4 className="text-lg font-semibold text-purple-200 mb-2">{faq.question}</h4>
                                <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}

                        {/* People Also Ask */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-purple-300">People Also Ask</h3>
                            {additionalFaqs.map((faq, index) => {
                                const isOpen = openAdditionalIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`rounded-xl border border-zinc-700 bg-zinc-900/80 transition
                        ${
                                            isOpen
                                                ? "shadow-[0_0_15px_rgba(168,85,247,0.9)] border-transparent"
                                                : "hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:border-transparent"
                                        }
                    `}
                                    >
                                        <button
                                            className="w-full px-6 py-4 flex justify-between items-center text-left font-medium text-purple-300"
                                            onClick={() =>
                                                setOpenAdditionalIndex((prev) =>
                                                    prev === index ? null : index
                                                )
                                            }
                                        >
                                            <span>{faq.question}</span>
                                            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="px-6 pb-4 text-zinc-300 leading-relaxed"
                                                >
                                                    {faq.answer}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                <div className="border-t border-zinc-800/60 my-4"></div>
            </main>

            {/* FOOTER */}
            <footer className="text-center py-10 border-t border-zinc-800 text-purple-400 text-sm select-none tracking-wide">
                &copy; 2025 NetworkQY — The First AI-Powered Networking Platform.
            </footer>
        </div>
    );
}