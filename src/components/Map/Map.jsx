import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import storeData from "../../data/store-data/storeData.json"
import { storeImg } from '../../assets/images';
// Default Leaflet icon fix


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const PlacesSearch = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchPlaces = () => {
      setPlaces(storeData.places);
    };

    fetchPlaces();
  }, []);
  

  const handleOpenStore = (store) => {
    navigate(`/store/${store.id}`, {state: {store}});
  }

  return (
    <div>
      <h1>Nearby Schools and Colleges</h1>
     
     <MapContainer center={[23.237560, 72.647781]} zoom={12} className="w-full h-[500px] md:h-[600px] lg:h-[700px]" >

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
                <div className='flex w-[20rem] items-center gap-10'>
                  <div>
                <img src={storeImg} alt="err" className='max-w-[4rem] cursor-pointer' onClick={() => {handleOpenStore(place)}}/>
                  </div>
                <div>
                <h1 className='cursor-pointer mb-2 text-lg' onClick={() => {handleOpenStore(place)}}>{place.properties.name}</h1>
                <button className='px-4 py-2 bg-blue-400 rounded-md'>add to libarary</button>
                </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      
    </div>
  );
};

export default PlacesSearch;
