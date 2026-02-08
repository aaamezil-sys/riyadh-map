'use client';

import Link from 'next/link';

export default function RiyadhPlatform() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-16 relative overflow-hidden">
      
      {/* --- NEW: Floating Back Button --- */}
      <div className="absolute top-6 right-6 md:top-10 md:right-16 z-50">
        <a 
          href="https://ahmedmezil.com" 
          className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs md:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Portfolio
        </a>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] uppercase tracking-widest font-bold mb-6">
            Ahmed Mezil Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Riyadh Intelligence <br />
            <span className="text-emerald-500">Platform</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A suite of advanced spatial intelligence engines designed to support logistics, infrastructure, and investment decisions for Vision 2030.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 15-Minute Logistics - LIVE */}
          <div className="group relative bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl shadow-inner border border-white/5">
                  ⚡
                </div>
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded uppercase tracking-tighter border border-emerald-500/20">
                  Live System
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">15-Minute Logistics</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Real-time isochrone mapping to determine precise 15-minute delivery zones using traffic data.
              </p>
              <Link href="/15-min-delivery" className="inline-flex items-center text-emerald-400 text-sm font-bold hover:gap-2 transition-all group-hover:text-emerald-300">
                Launch Engine <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          {/* Riyadh Metro - IN DEV */}
          <div className="relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 opacity-60">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl grayscale">
                🚇
              </div>
              <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded uppercase tracking-tighter">
                In Development
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">Metro Network</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Catchment analysis for all 6 lines and 84 stations to identify high-value transit-oriented real estate.
            </p>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Q2 2026</span>
          </div>

          {/* Zoning - IN DEV */}
          <div className="relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 opacity-60">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl grayscale">
                🏗️
              </div>
              <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded uppercase tracking-tighter">
                Q2 2026
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">Zoning & Land Use</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Commercial vs. Residential density heatmaps to identify under-served investment zones.
            </p>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">In Development</span>
          </div>

        </div>
      </div>
    </main>
  );
}