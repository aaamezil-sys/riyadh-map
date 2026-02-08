'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const RiyadhIsochrone = dynamic(() => import('../../components/RiyadhIsochrone'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-black text-emerald-500">
      <span className="animate-pulse">Loading Logistics Engine...</span>
    </div>
  )
});

export default function MapPage() {
  return (
    // 1. Flex container forces the layout to use exactly 100% of the screen height
    <main className="flex flex-col h-screen w-screen bg-black overflow-hidden">
      
      {/* 2. Top Bar (Button Outside Map) */}
      <div className="flex-none z-10 p-4 border-b border-white/10 bg-black flex justify-between items-center">
        <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase">
          Riyadh Logistics Engine
        </span>
        
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Platform
        </Link>
      </div>

      {/* 3. Map Container (Fills ALL remaining space) */}
      <div className="flex-1 relative w-full bg-gray-900">
        <div className="absolute inset-0">
          <RiyadhIsochrone />
        </div>
      </div>
      
    </main>
  );
}