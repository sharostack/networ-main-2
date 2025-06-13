"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaProjectDiagram } from 'react-icons/fa';


const WorldMap = dynamic(() => import('@/components/WorldHeatmap'), { ssr: false });
const GraphComponent = dynamic(() => import('@/components/GraphNetwork'), { ssr: false });

export default function NetworkOverviewPage() {
  const [view, setView] = useState<'heatmap' | 'graph'>('heatmap');

  useEffect(() => {
    document.title = 'NetworkQY Activity Map';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">📊 Explore Your Network</h1>
      <p className="text-purple-300 text-sm mb-6">
        Visualize where your connections are active and how you’re all linked.
      </p>

      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setView('heatmap')}
          className={`px-4 py-2 rounded-full border transition ${view === 'heatmap' ? 'bg-purple-600 border-purple-600' : 'border-white'}`}
        >
          <FaMapMarkerAlt className="inline mr-2" /> Heatmap
        </button>
        <button
          onClick={() => setView('graph')}
          className={`px-4 py-2 rounded-full border transition ${view === 'graph' ? 'bg-purple-600 border-purple-600' : 'border-white'}`}
        >
          <FaProjectDiagram className="inline mr-2" /> Graph View
        </button>
      </div>

      <div className="w-full max-w-6xl h-[500px] rounded-xl overflow-hidden bg-white/5 shadow-xl">
        {view === 'heatmap' ? <WorldMap /> : <GraphComponent />}
      </div>
    </div>
  );
}
