'use client';

import dynamic from 'next/dynamic';

const RiyadhIsochrone = dynamic(() => import('../../components/RiyadhIsochrone'), { 
  ssr: false,
  loading: () => <div style={{color: 'white', padding: '20px'}}>Loading Logistics Engine...</div>
});

export default function MapPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <RiyadhIsochrone />
    </div>
  );
}