import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';


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
      <div className="banner"></div>
      <div className="banner-info">
        <h1>Max's Driving School</h1>
        <br />
        <h2>
          Serving the community to provide a customized lesson plan to ensure
          you are a safe and capable driver
        </h2>
        <h2>Call +1(226)972-6161 for more details</h2>
        <Button onClick={navigateToPackage}>Packages and Prices</Button>

        <Button onClick={navigateToCalendar}>Book Your class</Button>

        <Button onClick={navigateToClients}>Success Clients</Button>
      </div>
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <h2>About us</h2>
        <p>Max's Driving School is one of the most respected schools in the KW area. Max's Driving School is committed to providing high-quality service of safe and defensive driving education for all ages in the KW and Cambridge area. Our 40-hour in-car+online, Ministry of Transportation Approved Beginner Driver Education (BDE) course is available. Upon successful completion of the study, the graduates will qualify for the Driver's Licence History. The Driver's Licence History provides proof of successful completion, and the insurance industry widely recognizes graduation from our BDE course and it. BDE graduates with a Driver's Licence History may be eligible for an insurance discount. All of our in-className and in-car instructors are Ministry certified. They must undergo annual criminal background checks to maintain their teaching privileges. They all have up-to-date knowledge of the traffic Law and Regulations.</p>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
      </div>
      <div className="container">
        <header className="text-center margin-bottom-60">
          <h2>Reasons Why YOU Should Join Us</h2>
          <p className="lead font-lato">Max's Driving School is one of the most respected driving schools in Kitchener. Our unique approach to teaching, one-of-a-kind teaching techniques, and efficient program structures make Pioneer Driving School an excellent choice for new drivers in Kitchener, Waterloo, and Cambridge.</p>
        </header>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <ul className="list-unstyled list-icons">
              <li><i className="fa fa-check text-success"></i>Convenient location (lots of parking, bus stop in front)</li>
              <li><i className="fa fa-check text-success"></i>Learn Defensive Driving Techniques</li>
              <li><i className="fa fa-check text-success"></i>Precision Driving Program</li>
              <li><i className="fa fa-check text-success"></i>Hazard Avoidance Program</li>
              <li><i className="fa fa-check text-success"></i>Flexible hours for the in-car training</li>
              <li><i className="fa fa-check text-success"></i>Training could be provided in your own vehicle</li>
              <li><i className="fa fa-check text-success"></i>Package deals and single lessons available</li>
            </ul>
          </div>
          <div className="col-md-6 col-xs-12">
            <ul className="list-unstyled list-icons">
              <li><i className="fa fa-check text-success"></i>Freeway Driving</li>
              <li><i className="fa fa-check text-success"></i>Dual-control vehicles to ensure your comfort and safety</li>
              <li>
                <i className="fa fa-check text-success"></i>
                Free pick up and drop off anywhere in Kitchener, Waterloo and Cambridge area
              </li>
              <li><i className="fa fa-check text-success"></i>Eligibilty of G2 licence in 8 months</li>
              <li><i className="fa fa-check text-success"></i>Payment plans available to suit your budget needs</li>
              <li><i className="fa fa-check text-success"></i>High-quality service</li>
              <li><i className="fa fa-check text-success"></i>Gift certificates</li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
          <a href="https://drivetest.ca/book-a-road-test/booking" target="_blank">Book Your Road Test</a></h2>

        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>


    </div >

  );
};

export default Home;

