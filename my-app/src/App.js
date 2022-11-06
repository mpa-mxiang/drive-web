import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './App.css';
import { FaPhone } from 'react-icons/fa';
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
              <span>Call and see why we are different.</span>
              <ul className="list-unstyled">
                <li className="footer-sprite phone">
                  <FaPhone />
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
