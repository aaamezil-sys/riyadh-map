import RiyadhIsochrone from '../../components/RiyadhIsochrone';

export default function RiyadhIntelligencePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Riyadh Spatial Intelligence
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Interactive logistics analysis for Vision 2030 expansion.
          </p>
        </div>

        {/* The Map Component */}
        <RiyadhIsochrone />
        
        {/* Footer / Methodology */}
        <div className="mt-8 text-sm text-gray-600 border-t border-gray-800 pt-4">
          <p>Methodology: 15-minute isochrone calculation using live traffic algorithms via Mapbox API.</p>
        </div>

      </div>
    </main>
  );
}