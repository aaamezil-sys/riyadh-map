'use client';

import dynamic from 'next/dynamic';

const RiyadhIsochrone = dynamic(() => import('../../components/RiyadhIsochrone'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[#0a0a0a] text-emerald-500">
      Loading Logistics Engine...
    </div>
  )
});

export default function MapPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <RiyadhIsochrone />
    </main>
  );
}