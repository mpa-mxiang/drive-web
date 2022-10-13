import React, { useMemo } from 'react';
import './About.css';
import self from '../images/self.jpg';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';

const About = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  function notify() {
    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: '6479976478',
        message: 'test phone message',
        key: 'textbelt',
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  }

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
        <button onClick={notify()}>send message</button>
      </div>
      <div>
        <GoogleMap
          zoom={10}
          defaultCenter={{
            lat: 44,
            lng: -80,
          }}
          mapContainerClassName="map-container"
        >
          <Marker
            position={{
              lat: 44,
              lng: -80,
            }}
          ></Marker>
        </GoogleMap>
      </div>
    </div>
  );
};

export default About;
