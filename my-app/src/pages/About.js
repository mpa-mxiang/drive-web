import React, { useMemo } from 'react';
import './About.css';
import self from '../images/self.jpg';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <div className="p-5 text-center">
        <h1 className="mb-5">About Us</h1>
        
        <p className="pt-3">
          Hi, I'm Max, providing Online Digital Driver's Training in Kitchener,
          Waterloo, Cambridge, Palmerston, and Mount Forest for last 12 years.
        </p>
      </div>

  
    </div>
  );
};

export default About;
