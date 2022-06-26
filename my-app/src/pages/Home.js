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
    }
  };
  const navigateToPackage = async () => {
    try {
      navigate('/packages');
    } catch (err) {
      setError(err.message);
    }
  };
  const navigateToClients = async () => {
    try {
      navigate('/clients');
    } catch (err) {
      setError(err.message);
    }
  };

  //const classes = useStyles();

  return (
    <div className="p-4 box my-3 text-center">
      <div className="banner">
        <div className="banner-info">
          <h1>
            Max's Driving School
          </h1>
          <br />
          <h1>
            Coaching with Confidence
          </h1>
          <Button
            onClick={navigateToPackage}>
            Packages and Prices
          </Button>

          <Button
            onClick={navigateToCalendar}>
            Book Your Class
          </Button>

          <Button
            onClick={navigateToClients}>
            Success Clients
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Home;
