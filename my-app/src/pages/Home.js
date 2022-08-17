import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';

//import { makeStyles } from "@material-ui/core/styles";

/*
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px auto",
        // margin: "20px"
    },
    viewBtn: {
        position: "relative",
        top: "160px",
        margin: "20px auto",
    }
}));
*/

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const navigateToCalendar = async () => {
    try {
      navigate('/calendar');
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

        <Button onClick={navigateToCalendar}>Book Your Class</Button>

        <Button onClick={navigateToClients}>Success Clients</Button>
      </div>
      <div className="container">
        <h2>About us</h2>
        <p>Max's Driving School is one of the most respected schools in the KW area. Max's Driving School is committed to provide a high quality service of safe and defensive driving education for all ages in the KW and Cambridge area. Our 40-hour in-class/in-car/online, Ministry of Transportation Approved Beginner Driver Education (BDE) course is available every month. Upon successful completion of the course, the graduates will qualify for the Driver's Licence History.

          The Driver's Licence History provides proof of successful completion of, and graduation from our BDE course and it is widely recognized by the insurance industry. BDE graduates with a Driver's Licence History may be eligible for an insurance discount.

          All of our in-class and in-car instructors are Ministry certified. They must go through annual criminal background check in order to maintain their teaching privileges. They all have up-to-date knowledge of the traffic Law and Regulations.</p>
        <hr></hr>
        <div class="text-center">
        </div>
      </div>
    </div>
  );
};

export default Home;
