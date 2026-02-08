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
    <main className="h-screen w-screen bg-black overflow-hidden flex flex-col">
      
      {/* 1. FORCE OVERRIDE: This CSS attacks the map component and forces it to fill the parent */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Target the immediate child div of the map container */
        #map-force-container > div {
          height: 100% !important;
          width: 100% !important;
          position: absolute !important;
        }
        /* Target mapbox internals */
        .mapboxgl-map, .mapboxgl-canvas-container, .mapboxgl-canvas {
          height: 100% !important;
          width: 100% !important;
        }
      `}} />

      {/* 2. HEADER: Fixed Height (h-16 = 4rem) */}
      <div className="h-16 flex-none z-10 px-6 border-b border-white/10 bg-black flex justify-between items-center">
        
        {/* Title Section */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-emerald-500 font-bold tracking-widest text-[10px] uppercase">
              RIYADH
            </span>
            <span className="h-px w-6 bg-white/20"></span>
            <span className="text-gray-500 text-[9px] uppercase tracking-widest font-medium">
              BY AHMED MEZIL
            </span>
          </div>
          <h1 className="text-white text-lg font-bold tracking-tight leading-none">
            15-Minute Delivery Zones
          </h1>
        </div>
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/50 rounded-lg text-xs text-gray-300 hover:text-emerald-400 transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back</span>
        </Link>
      </div>

      {/* 3. MAP CONTAINER: Calculated Height (Screen - Header) */}
      <div id="map-force-container" className="relative w-full bg-gray-900" style={{ height: 'calc(100vh - 4rem)' }}>
        <RiyadhIsochrone />
      </div>
      
    </main>
  );
}