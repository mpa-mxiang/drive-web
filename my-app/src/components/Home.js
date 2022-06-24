import React, { useState } from "react";
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "../contexts/UserAuthContext";
import Carousel from "react-elastic-carousel";

import { makeStyles } from "@material-ui/core/styles";


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


const Home = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");



    const navigateToGroups = async () => {
        try {
            navigate("/YourGroups");
            // navigate("./groupsCard");
        } catch (err) {
            setError(err.message);
        }
    }


    const classes = useStyles();

    return (
        <>
            <HeaderBar />

            <div className="p-4 box my-3 text-center">
                Hello Welcome <br />
                {user && user.email}

                <div className={classes.root}>
                    <Wrapper />
                    <CardWrapper />

                    <div>


                        <ReadMoreBtn style={{ margin: "50px" }} className={classes.viewBtn} onClick={navigateToGroups}>See Your Groups</ReadMoreBtn>
                        <ReadMoreBtn style={{ margin: "50px" }} className={classes.viewBtn} onClick={navigateToTasks}>See Your Tasks</ReadMoreBtn>
                        <ReadMoreBtn style={{ margin: "50px" }} className={classes.viewBtn}>Pick Your Pet</ReadMoreBtn>
                        {/* <Link to="./GroupsPg/groupCard">See Your Groups</Link> */}
                    </div>

                    <div>
                        <Button variant="primary" onClick={handleLogOut}>Log out</Button>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Home;