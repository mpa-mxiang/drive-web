import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Home from "./components/Home";

import "./App.css";
import Calendar from "./Calendar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./components/Home";
function App() {

  return (

    <div className="App">
      <div><h1>Calendar</h1>
        <Routes>
          <Route path="/Home"
            element={
              <Home />
            } />



        </Routes>

      </div>;
      <Container>
        <Row>
          <Col>
            <Route path="/" element={<Calendar />} />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

/*
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import Header from "./header"
import HeaderBar from "./headerBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/GroupsPg/Cards";
import Task from "./components/Tasks/Task";
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (

    <div className="App">
      <div>{loading ? <img src={logo} alt="App Logo" /> : <UserAuthContextProvider>
        <Routes>
          <Route path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>} />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/YourGroups" element={<Card />} />
          <Route path="/YourTasks" element={<Task />} />
        </Routes>

      </UserAuthContextProvider>}</div>;
      <Container>
        <Row>
          <Col>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
*/