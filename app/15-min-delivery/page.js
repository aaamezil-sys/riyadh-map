'use client';

import dynamic from 'next/dynamic';

// This loads the map component from your components folder
const RiyadhIsochrone = dynamic(() => import('../../components/RiyadhIsochrone'), { 
  ssr: false,
  loading: () => <p>Loading Logistics Engine...</p>
});

export default function MapPage() {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <RiyadhIsochrone />
    </main>
  );
}