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
    <main className="flex flex-col h-screen w-screen bg-black overflow-hidden">
      
      {/* 1. CSS FORCE: This guarantees the map fills the bottom area 100% */}
      <style dangerouslySetInnerHTML={{__html: `
        .mapboxgl-map, .mapboxgl-canvas-container, .mapboxgl-canvas {
          height: 100% !important;
          width: 100% !important;
          position: absolute !important;
          inset: 0 !important;
        }
      `}} />

      {/* 2. HEADER: Professional Title & Branding */}
      <div className="flex-none z-10 px-6 py-4 border-b border-white/10 bg-black flex justify-between items-center h-20">
        
        {/* Left: The Titles */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase">
              RIYADH
            </span>
            <span className="h-px w-8 bg-white/20"></span>
            <span className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
              BY AHMED MEZIL
            </span>
          </div>
          <h1 className="text-white text-xl md:text-2xl font-bold tracking-tight">
            15-Minute Delivery Zones
          </h1>
        </div>
        
        {/* Right: Back Button */}
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/50 rounded-lg text-sm text-gray-300 hover:text-emerald-400 transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="hidden md:inline">Back to Platform</span>
          <span className="md:hidden">Back</span>
        </Link>
      </div>

      {/* 3. MAP AREA: Fills all remaining space */}
      <div className="flex-1 relative w-full bg-gray-900">
        <RiyadhIsochrone />
      </div>
      
    </main>
  );
}