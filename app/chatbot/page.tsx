'use client';

import { useState } from 'react';
import { FaRobot, FaArrowUp, FaTrash, FaPlus } from 'react-icons/fa';

export default function ChatbotPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: "👋 Hi! I'm your NetworkQY assistant. Ask me anything about your connections!" },
  ]);
  const [conversations, setConversations] = useState([messages]);
  const [activeChat, setActiveChat] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', text: input };
    const botReply = {
      role: 'bot',
      text: `🤖 Analyzing... Here’s how you can connect better: "${input}" → Try reaching out with a warm intro.`
    };

    const updatedChat = [...conversations[activeChat], userMessage, botReply];
    const newConversations = [...conversations];
    newConversations[activeChat] = updatedChat;
    setConversations(newConversations);
    setMessages(updatedChat);
    setInput('');
  };

  const handleNewChat = () => {
    const newChat = [
      { role: 'bot', text: "👋 New chat started. Ask me anything!" }
    ];
    setConversations([...conversations, newChat]);
    setMessages(newChat);
    setActiveChat(conversations.length);
  };

  const handleDeleteChat = (index: number) => {
    const updatedConversations = conversations.filter((_, i) => i !== index);
    setConversations(updatedConversations);
    const newActive = index === activeChat ? 0 : activeChat > index ? activeChat - 1 : activeChat;
    setActiveChat(newActive);
    setMessages(updatedConversations[newActive] || []);
  };

  const switchChat = (index: number) => {
    setActiveChat(index);
    setMessages(conversations[index]);
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      <aside className="w-64 bg-purple-950 border-r border-purple-900 p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">💬 Chats</h2>
        {conversations.map((conv, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg cursor-pointer flex justify-between items-center ${i === activeChat ? 'bg-purple-800 text-white' : 'bg-purple-900 text-purple-300 hover:bg-purple-800'}`}
            onClick={() => switchChat(i)}
          >
            <span>Chat {i + 1}</span>
            <button onClick={(e) => { e.stopPropagation(); handleDeleteChat(i); }} className="text-red-400 hover:text-red-300"><FaTrash /></button>
          </div>
        ))}
        <button onClick={handleNewChat} className="w-full flex items-center gap-2 justify-center text-sm py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full">
          <FaPlus /> New Chat
        </button>
      </aside>

      <main className="flex-1 p-6 flex flex-col items-center relative bg-gradient-to-b from-black via-purple-950 to-black">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
          <div className="absolute w-60 h-60 bg-blue-400 opacity-10 blur-2xl rounded-full bottom-20 right-20 animate-spin-slow"></div>
        </div>

        <div className="relative z-10 max-w-2xl w-full flex flex-col gap-6 animate-fade-in">
          <h1 className="text-3xl font-bold text-center">🤖 NetworkQY Copilot</h1>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-h-[60vh] overflow-y-auto space-y-4 shadow-xl">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <p className={`inline-block px-4 py-2 rounded-xl text-sm max-w-[80%] shadow ${msg.role === 'user' ? 'bg-purple-700' : 'bg-purple-900'}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask how to network with Sara..."
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSend}
              className="px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white shadow-lg"
            >
              <FaArrowUp />
            </button>
          </div>

          <div className="text-sm text-purple-300 text-center mt-4">
            <p className="mb-2">💡 Try asking:</p>
            <ul className="space-y-1 text-sm">
              <li>• Who should I meet this week?</li>
              <li>• How can I add value to Ravi?</li>
              <li>• Draft an intro message for Ayesha.</li>
            </ul>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out both;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
