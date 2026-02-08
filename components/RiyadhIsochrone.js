'use client';

import { useState, useCallback } from 'react';
import Map, { Source, Layer, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// CENTER OF RIYADH (Al Olaya)
const RIYADH_CENTER = { lat: 24.7136, lng: 46.6753 };

export default function RiyadhIsochrone() {
  const [viewport, setViewport] = useState({
    latitude: RIYADH_CENTER.lat,
    longitude: RIYADH_CENTER.lng,
    zoom: 11
  });
  
  const [isochrone, setIsochrone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [marker, setMarker] = useState(null);

  // 🔴 RE-PASTE YOUR MAPBOX TOKEN HERE 🔴
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWFhbWV6aWwiLCJhIjoiY2xxNzFvZmp4MTBnbzJpdWs5YzFla2NmOCJ9.j3lxSfWk0WOkr9VoUsw2ig'; 

  const getIsochrone = async (lng, lat) => {
    setLoading(true);
    try {
      const query = await fetch(
        `https://api.mapbox.com/isochrone/v1/mapbox/driving/${lng},${lat}?contours_minutes=15&polygons=true&access_token=${MAPBOX_TOKEN}`
      );
      const data = await query.json();
      setIsochrone(data);
    } catch (err) {
      console.error("Failed to fetch logistics data", err);
    }
    setLoading(false);
  };

  const handleMapClick = useCallback((event) => {
    const { lng, lat } = event.lngLat;
    setMarker({ lng, lat });
    getIsochrone(lng, lat);
  }, [MAPBOX_TOKEN]); 

  return (
    // WE REPLACED TAILWIND CLASSES WITH STANDARD STYLES BELOW
    <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
      
      {/* UI OVERLAY */}
      <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10, background: 'rgba(0,0,0,0.9)', padding: '16px', borderRadius: '8px', border: '1px solid #444', color: 'white', maxWidth: '300px' }}>
        <h3 style={{ margin: '0 0 4px 0', color: '#34d399', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
          Riyadh Logistics Engine
        </h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#9ca3af' }}>
          Click anywhere on the map to calculate the <span style={{ color: 'white', fontFamily: 'monospace' }}>15-minute delivery zone</span>.
        </p>
        
        {loading && (
          <div style={{ fontSize: '12px', color: '#6ee7b7' }}>
            CALCULATING ROUTE ALGORITHMS...
          </div>
        )}
      </div>

      <Map
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={handleMapClick}
      >
        <NavigationControl position="bottom-right" />

        {marker && (
          <Marker longitude={marker.lng} latitude={marker.lat} color="#10b981" />
        )}

        {isochrone && (
          <Source id="iso" type="geojson" data={isochrone}>
            <Layer
              id="isoLayer"
              type="fill"
              paint={{
                'fill-color': '#10b981', 
                'fill-opacity': 0.3
              }}
            />
            <Layer
              id="isoOutline"
              type="line"
              paint={{
                'line-color': '#10b981',
                'line-width': 2,
                'line-opacity': 0.8
              }}
            />
          </Source>
        )}
      </Map>
    </div>
  );
}