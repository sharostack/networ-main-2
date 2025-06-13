'use client';

import { Parallax } from 'react-scroll-parallax';

export default function HomePage() {
  return (
    <main>
      {/* First section */}
      <section className="h-screen flex items-center justify-center bg-white">
        <h1 className="text-5xl font-bold">Welcome to NetworkQY</h1>
      </section>

      {/* Parallax section */}
      <section className="h-screen relative bg-purple-50 overflow-hidden flex items-center justify-center">
        <Parallax translateY={[-50, 50]}>
          <h2 className="text-4xl font-bold text-purple-700">Scroll with Style 🚀</h2>
        </Parallax>
      </section>

      {/* Next section */}
      <section className="h-screen flex items-center justify-center bg-white">
        <p className="text-xl">More content here...</p>
      </section>
    </main>
  );
}
