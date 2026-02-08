import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-emerald-500/30">
      
      {/* Abstract Background Glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Header */}
        <header className="mb-24 text-center md:text-left">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-medium tracking-widest text-emerald-400 uppercase">Ahmed Mezil Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Riyadh Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
              Platform
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A suite of advanced spatial intelligence engines designed to support 
            logistics, infrastructure, and investment decisions for Vision 2030.
          </p>
        </header>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 15-Min Delivery (Active) */}
          <Link href="/15-min-delivery" className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-500 blur opacity-20"></div>
            <div className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:translate-y-[-4px]">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <span className="text-2xl">⚡️</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider text-emerald-400 bg-emerald-900/20 border border-emerald-500/20">LIVE SYSTEM</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">15-Minute Logistics</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Real-time isochrone mapping to determine precise 15-minute delivery zones using traffic data.
              </p>
              <div className="flex items-center text-emerald-500 text-sm font-semibold">
                Launch Engine <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Metro (Coming Soon) */}
          <div className="relative group cursor-not-allowed opacity-60 hover:opacity-100 transition-opacity">
            <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">🚇</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider text-gray-500 border border-white/10">IN DEVELOPMENT</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-300">Metro Network</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Catchment analysis for all 6 lines and 84 stations to identify high-value transit-oriented real estate.
              </p>
            </div>
          </div>

          {/* Card 3: Zoning (Coming Soon) */}
          <div className="relative group cursor-not-allowed opacity-60 hover:opacity-100 transition-opacity">
            <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">🏗️</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider text-gray-500 border border-white/10">Q2 2026</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-300">Zoning & Land Use</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Commercial vs. Residential density heatmaps to identify under-served investment zones.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-white/10 pt-8 flex justify-between text-sm text-gray-600">
          <p>© 2026 Ahmed Mezil. All rights reserved.</p>
          <p>Riyadh • Toronto</p>
        </footer>
        
      </div>
    </main>
  );
}