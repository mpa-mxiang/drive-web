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
      <div className="container"></div>
    </div>
  );
};

export default Home;
