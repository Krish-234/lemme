import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
// Default Leaflet icon fix


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const PlacesSearch = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(
          `https://api.geoapify.com/v2/places?categories=education.school,education.college&filter=rect%3A77.068899%2C28.724258%2C77.251703%2C28.526251&limit=20&apiKey=1a2f63e61b1c406796a9863e62a0f933`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch places data');
        }

        const data = await response.json();
        setPlaces(data.features);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div>
      <h1>Nearby Schools and Colleges</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
     <MapContainer center={[28.6139, 77.209]} zoom={12} className="w-full h-[500px] md:h-[600px] lg:h-[700px]" >

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {places.map((place, index) => (
            <Marker 
              key={index}
              position={[
                place.geometry.coordinates[1],
                place.geometry.coordinates[0],
              ]}
            >
              <Popup>
                <h2 className='cursor-pointer' onClick={() => {}}>{place.properties.name}</h2>
                <p>{place.properties.city}, {place.properties.state}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default PlacesSearch;
