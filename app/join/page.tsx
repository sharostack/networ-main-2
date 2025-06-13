'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JoinLoadingPage() {
  const router = useRouter();
  const [message, setMessage] = useState('Setting up your Network...');
  const [showOptions, setShowOptions] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setMessage('Your Network is Ready');
      setShowOptions(true);
    }, 3000); // show buttons after 3s

    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    if (videoWatched) {
      const redirectTimer = setTimeout(() => {
        router.push('/onboarding');
      }, 17000); // wait full 17s more after button click
      return () => clearTimeout(redirectTimer);
    }
  }, [videoWatched]);

  const handleContinue = () => {
    router.push('/onboarding');
  };

  const handleWatchVideo = () => {
    setShowOptions(false);
    setVideoWatched(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${
          videoWatched ? '' : 'opacity-30'
        }`}
        src="/videos/network-bg.mp4"
      />
      <div className="z-10 text-center px-4">
        <h1 className="text-3xl font-bold mb-4">{message}</h1>
        {showOptions && (
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={handleContinue}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-lg"
            >
              Continue
            </button>
            <button
              onClick={handleWatchVideo}
              className="text-sm underline text-purple-300 hover:text-purple-200"
            >
              Watch the Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
