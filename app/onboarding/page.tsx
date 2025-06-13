'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowUp } from 'react-icons/fa';

export default function OnboardingPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    email: '',
    linkedin: '',
    profilePic: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    router.push('/connect-setup');

  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-10 blur-2xl animate-spin-slow bottom-[-80px] right-[-60px]" />
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-xl text-white animate-fade-in"
      >
        <h1 className="text-3xl font-bold mb-8 text-center tracking-wide">Tell us about yourself</h1>

        {/* Upload Photo */}
        <div className="relative w-40 h-40 rounded-xl bg-gray-100 bg-opacity-20 flex items-center justify-center mb-6 border border-white/20">
          <label className="cursor-pointer absolute z-10 px-4 py-2 bg-white text-gray-700 shadow rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition">
            <FaArrowUp />
            Upload Photo
            <input type="file" accept="image/*" name="profilePic" onChange={handleChange} className="hidden" />
          </label>
        </div>

        {/* First and Last Name */}
        <div className="flex gap-4 w-full mb-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="w-1/2 px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="w-1/2 px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Bio */}
        <div className="w-full mb-4">
          <label className="text-sm text-white font-medium mb-1 block">About</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Who are you? (30–100 characters)"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            rows={3}
          />
          <div className="text-right text-xs text-purple-300 mt-1">
            {form.bio.length}/30 characters
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg text-lg mb-4 transition shadow-xl hover:shadow-purple-500/40"
        >
          Continue
        </button>

        {/* Private Info */}
        <p className="text-xs text-purple-200 italic mb-2">The following won’t be shown on your profile.</p>

        {/* Email Address */}
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email Address"
          type="email"
          className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3"
        />

        {/* LinkedIn */}
        <input
          name="linkedin"
          value={form.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn Profile URL"
          className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </form>

      {/* Animations */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
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
