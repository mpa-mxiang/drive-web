import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
      navigate("./Calendar");
      // navigate("./groupsCard");
    } catch (err) {
      setError(err.message);
    }
  }


  //const classes = useStyles();

  return (
    <div className="p-4 box my-3 text-center">
      Hello Welcome <br />
      <div /*className={classes.root}*/>
        <div>
          <Button
            style={{
              margin: '50px',
            }} /*className={classes.viewBtn} onClick={ }*/
          >
            Packages and Prices
          </Button>
          <Button
            style={{
              margin: '50px',
            }} /*className={classes.viewBtn}*/ onClick={navigateToCalendar}
          >
            Book Your Class
          </Button>
          <Button style={{ margin: '50px' }} /*className={classes.viewBtn}*/>
            Success Clients
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
