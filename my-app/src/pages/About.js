import React from 'react';
import './About.css';
import self from '../images/self.jpg';
import { userMemo } from 'react';
import { GoogleMap, userLoadScript, Marker } from '@react-google-maps/api';
const About = () => {
  const { isLoaded } = userLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <div className="p-5 text-center">
        <h1 className="mb-5">About Us</h1>
        <img src={self} alt="" />
        <p className="pt-3">
          Hi, I'm Max, providing Online Digital Driver's Training in Kitchener,
          Waterloo, Cambridge, Palmerston, and Mount Forest for last 12 years.
        </p>
      </div>
      <div>

      </div>
    </div>
  );
};
function Map() {
  const center = userMemo(() => { { lat: 44, lng: -80 } });

  return <GoogleMap zoom={10}
    center={center}
    mapContainerClassName="map-container">
    <Marker position={center}></Marker>
  </GoogleMap>;
}
export default About;
