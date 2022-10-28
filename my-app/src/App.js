import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './App.css';

import Booking from './pages/Booking';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
//import HeaderBar from "./HeaderBar";
import Navbar from './components/Navbar/Index';
import About from './pages/About';
import Clients from './pages/Clients';
import Packages from './pages/Packages';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </Router>
      <footer
        itemScope=""
        itemType="http://schema.org/localBusiness"
        id="footer"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p>Call and see why we are different.</p>
              <address>
                <ul className="list-unstyled">
                  <li className="footer-sprite phone">
                    Phone:{' '}
                    <strong>
                      <span itemProp="telephone">1-226-972-6161</span>
                    </strong>
                  </li>
                  <li className="footer-sprite email">
                    <a href="mailto:maxamin@hotmail.com">
                      <span itemProp="email">maxamin@hotmail.com </span>
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className="col-md-3">
              <h4 className="letter-spacing-1">EXPLORE OUR SITE</h4>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/packages">Packages</a>
                </li>
                <li>
                  <a href="/time">Calendar</a>
                </li>
                <li>
                  <a href="/clients">Success Clients</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            © 2022 <span itemProp="name">Max's Driving School</span> Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

/*
      <Container>
        <Row>
          <Col>
            <Router>
              <Routes>
                <Route path="/" element={<Calendar />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </Container>
    */

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
