'use client';
import dynamic from 'next/dynamic';

const RiyadhIsochrone = dynamic(() => import('../../components/RiyadhIsochrone'), { ssr: false });

export default function Page() {
  return <RiyadhIsochrone />;
}