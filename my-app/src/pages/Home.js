import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeaderBanner from './Banner/HeaderBanner';
import './Home.css';
import About1 from '../pages/About/About1';
import Reviews from '../pages/Reviews/Reviews';

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const navigateToCalendar = async () => {
    try {
      navigate('/booking');
    } catch (err) {
      setError(err.message);
      return { error };
    }
  };
  const navigateToPackage = async () => {
    try {
      navigate('/packages');
    } catch (err) {
      setError(err.message);
      return { error };
    }
  };
  const navigateToClients = async () => {
    try {
      navigate('/clients');
    } catch (err) {
      setError(err.message);
      return { error };
    }
  };

  //const classes = useStyles();

  return (
    <div className="p-0 box my-0 text-center">
      <HeaderBanner />
      <div className="banner">
        <div className="banner-info">
          <h1>Max's Driving School</h1>
          <br />
          <h2>
            Serving the community to provide a customized lesson plan to ensure
            you are a safe and capable driver
          </h2>
          <h2>
            Call for more details:
            <a href="tel:PHONE_NUM">+1(226)972-6161</a>
          </h2>
          <Button onClick={navigateToPackage}>Packages and Prices</Button>

          <Button onClick={navigateToCalendar}>Book Your class</Button>

          <Button onClick={navigateToClients}>Success Clients</Button>
        </div>
      </div>

      <div className="container">
        <header className="text-center margin-bottom-60">
          <br></br>
          <br></br>
          <br></br>
          <p class="lead font-lato">Max's Driving School is one of the most respected schools in the KW area. Max's Driving School is committed to providing high-quality service of safe and defensive driving education for all ages in the KW and Cambridge area. Our 40-hour in-car+online, Ministry of Transportation Approved Beginner Driver Education (BDE) course is always available. Upon successful completion of the course, the graduates will qualify for the Driver's Licence History.
          </p>
          <br></br>
          <p class="lead font-lato">
            The Driver's Licence History provides proof of successful completion of, and graduation from our BDE course and it is widely recognized by the insurance industry. BDE graduates with a Driver's Licence History may be eligible for an insurance discount.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <h2>Reasons Why YOU Should Join Us</h2>
          <p class="lead font-lato">
            Max's Driving School is one of the most respected driving schools in
            Kitchener. Our unique approach to teaching, one-of-a-kind teaching
            techniques, and efficient program structures make Pioneer Driving
            School an excellent choice for new drivers in Kitchener, Waterloo,
            and Cambridge.
          </p>

        </header>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <ul className="list-unstyled list-icons">
              <li>
                • Convenient location (lots of parking, bus stop in front)
              </li>
              <li>• Learn Defensive Driving Techniques</li>
              <li>• Precision Driving Program</li>
              <li>• Hazard Avoidance Program</li>
              <li>• Flexible hours for the in-car training</li>
              <li>• Training could be provided in your own vehicle</li>
              <li>• Package deals and single lessons available</li>
            </ul>
          </div>
          <div className="col-md-6 col-xs-12">
            <ul className="list-unstyled list-icons">
              <li>• Freeway Driving</li>
              <li>• Dual-control vehicles to ensure your comfort and safety</li>
              <li>
                • Free pick up and drop off anywhere in Kitchener, Waterloo and
                Cambridge area
              </li>
              <li>• Eligibility of G2 license in 8 months</li>
              <li>• Payment plans available to suit your budget needs</li>
              <li>• High-quality service</li>
              <li>• Gift certificates</li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Reviews />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        <a href="mailto:webmaster@example.com">Book Your Road Test</a>
      </h2>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
