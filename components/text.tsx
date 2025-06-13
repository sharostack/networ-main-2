'use client'
import { useState, useEffect, useRef } from "react";

export default function ChatInput() {
    const [input, setInput] = useState("");
    const [placeholder, setPlaceholder] = useState("Ask me anything...");
    const [index, setIndex] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const suggestions = [
            "Ask me about startups in Dubai...",
            "Generate a LinkedIn connection request message...",
            "Find me Founders in Silicon Valley, California...",
        ];

        const interval = setInterval(() => {
            setIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % suggestions.length;
                setPlaceholder(suggestions[nextIndex]);
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;
        window.location.href = "https://networkqy.com";
        setInput("");
    };

    return (
        <div className="flex items-center gap-4 p-6 border border-purple-600/40 rounded-3xl shadow-xl bg-zinc-500/30 backdrop-blur-lg w-full max-w-5xl mx-auto">

      <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          rows={1}
          className="flex-1 resize-none overflow-hidden p-2 text-black bg-transparent placeholder-black/60 border-none focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md"
          aria-label="Chat input"
      />
            <button
                onClick={handleSend}
                disabled={!input.trim()}
                aria-disabled={!input.trim()}
                className={`px-4 py-1.5 text-sm font-medium rounded-xl transition-colors ${
                    input.trim()
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-purple-900 text-purple-400 cursor-not-allowed"
                }`}
            >
                Send
            </button>
        </div>
    );
}