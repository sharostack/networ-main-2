'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserFriends, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

export default function MatchesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMatches([
        {
          name: 'Ayesha Patel',
          title: 'VC @ Horizon Ventures',
          tags: ['AI', 'SaaS', 'Seed'],
          mutual: 'Interested in early-stage fintech',
          image: 'https://i.pravatar.cc/150?img=1',
        },
        {
          name: 'Ravi Kumar',
          title: 'Co-founder @ BuildLabs',
          tags: ['No-Code', 'Product', 'Founders'],
          mutual: 'Looking for growth partners',
          image: 'https://i.pravatar.cc/150?img=2',
        },
        {
          name: 'Sara Ahmed',
          title: 'Hiring @ Nimbus AI',
          tags: ['ML', 'Recruiting', 'Remote'],
          mutual: 'Actively hiring engineers',
          image: 'https://i.pravatar.cc/150?img=3',
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const handleContinue = () => {
    router.push('/connect-done');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-4 py-10 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-60 h-60 bg-blue-400 opacity-10 blur-2xl rounded-full bottom-20 right-20 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center tracking-wide animate-fade-in">🎯 Your AI Matches</h1>

        {loading ? (
          <div className="text-center text-purple-300 animate-pulse text-lg">
            Finding people who match your vibe...
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {matches.map((match, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-purple-500/40 transition flex flex-col items-center transform hover:scale-105 duration-300"
              >
                <Image
                  src={match.image}
                  alt={match.name}
                  width={90}
                  height={90}
                  className="rounded-full mb-4 border-4 border-purple-600 shadow-md"
                />
                <h2 className="text-lg font-semibold mb-1 text-center text-white/90">{match.name}</h2>
                <p className="text-sm text-purple-200 mb-2 text-center">{match.title}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {match.tags.map((tag: string, j: number) => (
                    <span
                      key={j}
                      className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm italic text-purple-300 mb-4 text-center">{match.mutual}</p>
                <button
                  className="mt-auto w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm transition shadow hover:shadow-purple-400"
                >
                  <FaHandshake className="inline mr-2" /> Send Connection Request
                </button>
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <div className="text-center mt-12 animate-fade-in">
            <button
              onClick={handleContinue}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-full shadow-lg transition hover:shadow-purple-400"
            >
              Continue
            </button>
          </div>
        )}

        <div className="text-center mt-10 text-sm text-purple-400 animate-fade-in">
          Don’t see your type? <button className="underline hover:text-purple-200">Ask AI to regenerate</button>
        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out both;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}