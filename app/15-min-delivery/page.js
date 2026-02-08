'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

// Load the map
const RiyadhIsochrone = dynamic(() => import('../../components/RiyadhIsochrone'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-black text-emerald-500">
      <span className="animate-pulse">Loading Logistics Engine...</span>
    </div>
  )
});

export default function MapPage() {
  return (
    // 1. Force Full Screen (w-screen h-screen) and hide scrollbars (overflow-hidden)
    <main className="relative w-screen h-screen bg-black overflow-hidden">
      
      {/* 2. Floating Back Button (Top Right) */}
      <div className="absolute top-6 right-6 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-sm text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Platform
        </Link>
      </div>

      {/* The Map Component */}
      <div className="w-full h-full">
        <RiyadhIsochrone />
      </div>
      
    </main>
  );
}