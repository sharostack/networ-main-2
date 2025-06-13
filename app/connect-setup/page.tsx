'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectSetupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    goal: '',
    lookingFor: '',
    tags: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Networking Preferences:', form);
    router.push('/matches');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-3xl p-10 w-full max-w-2xl animate-fade-in"
      >
        <h1 className="text-3xl font-bold mb-8 text-center tracking-wider">Set Your Networking Goals</h1>

        {/* Goal */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">What's your main goal on Networkqy?</label>
          <select
            name="goal"
            value={form.goal}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a goal</option>
            <option value="fundraising">Fundraising</option>
            <option value="hiring">Hiring</option>
            <option value="hiring">Looking for Jobs</option>
            <option value="cofounder">Finding a Co-founder</option>
            <option value="exploring">Exploring Communities</option>
            <option value="getting-discovered">Getting Discovered</option>
          </select>
        </div>

        {/* Looking For */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">What kind of people do you want to meet?</label>
          <input
            name="lookingFor"
            value={form.lookingFor}
            onChange={handleChange}
            placeholder="e.g. Startup investors, UX Designers, B2B Founders"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Add tags that describe you</label>
          <input
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="e.g. AI, Gaming, SaaS, Fintech"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg text-lg shadow-lg transition"
        >
          Let AI Find Connections
        </button>
      </form>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
