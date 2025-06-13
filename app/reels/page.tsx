'use client';

import { useState } from 'react';
import { FaArrowRight, FaUpload } from 'react-icons/fa';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const dummyReels = [
  {
    name: 'Rhea Sharma',
    title: 'Startup Operator @ fintech.ai',
    videoUrl: '/videos/reel1.mp4',
  },
  {
    name: 'Arjun Mehta',
    title: 'Founder @ growthverse.io',
    videoUrl: '/videos/reel2.mp4',
  },
  {
    name: 'Lina Abbas',
    title: 'Community Head @ MENA Builders',
    videoUrl: '/videos/reel3.mp4',
  },
];

export default function ReelsPage() {
  const [current, setCurrent] = useState(0);
  const [reelFile, setReelFile] = useState<File | null>(null);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % dummyReels.length);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setReelFile(file);
    // In real app: Upload to backend or cloud storage
    alert('🎥 Your reel has been uploaded! (simulated)');
  };

  const reel = dummyReels[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-2">🎞️ Elevator Reels</h1>
      <p className="text-sm text-purple-300 mb-4">Get discovered. Make your intro in 15 seconds.</p>

      <div className="w-full max-w-sm aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-xl relative">
        <ReactPlayer
          url={reel.videoUrl}
          playing
          loop
          controls={false}
          muted
          width="100%"
          height="100%"
          className="rounded-xl"
        />
        <div className="absolute bottom-4 left-4 text-left z-10">
          <p className="text-lg font-semibold text-white drop-shadow">{reel.name}</p>
          <p className="text-sm text-purple-300 drop-shadow">{reel.title}</p>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="flex items-center gap-2 mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow"
      >
        Next <FaArrowRight />
      </button>

      <div className="mt-10 text-center">
        <label className="cursor-pointer inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-4 py-2 rounded-full">
          <FaUpload /> Upload Your Reel
          <input
            type="file"
            accept="video/mp4,video/webm"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
        {reelFile && (
          <p className="text-xs text-green-400 mt-2">✅ Reel selected: {reelFile.name}</p>
        )}
      </div>
    </div>
  );
}
