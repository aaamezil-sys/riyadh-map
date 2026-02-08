import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-12">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Riyadh Intelligence <span className="text-emerald-500">Platform</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Advanced spatial analytics and logistics engines for the Vision 2030 expansion.
          Built by <span className="text-white font-semibold">Ahmed Mezil</span>.
        </p>
      </header>

      {/* Grid of Tools */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Tool 1: The Active Map */}
        <Link href="/15-min-delivery" className="group">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 h-64 transition-all duration-300 hover:border-emerald-500 hover:bg-[#151515] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded">LIVE</span>
                <span className="text-2xl">⚡️</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">15-Minute Logistics</h2>
              <p className="text-gray-400 text-sm">Interactive delivery zone analysis using real-time traffic isochrones.</p>
            </div>
            <div className="text-emerald-500 text-sm font-medium flex items-center gap-2">
              Launch Tool <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>

        {/* Tool 2: Coming Soon (Metro) */}
        <div className="bg-[#111] border border-gray-800/50 rounded-2xl p-6 h-64 opacity-60 flex flex-col justify-between cursor-not-allowed">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-1 rounded">IN DEVELOPMENT</span>
              <span className="text-2xl">🚇</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-500">Riyadh Metro Network</h2>
            <p className="text-gray-500 text-sm">Complete station catchment analysis for all 6 lines and 84 stations.</p>
          </div>
        </div>

        {/* Tool 3: Coming Soon (Zoning) */}
        <div className="bg-[#111] border border-gray-800/50 rounded-2xl p-6 h-64 opacity-60 flex flex-col justify-between cursor-not-allowed">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-1 rounded">Q2 2026</span>
              <span className="text-2xl">🏗️</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-500">Zoning & Land Use</h2>
            <p className="text-gray-500 text-sm">Commercial vs. Residential density heatmaps for investment planning.</p>
          </div>
        </div>

      </div>
    </main>
  );
}