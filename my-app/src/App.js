import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './App.css';
import Booking from './pages/Booking';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
//import HeaderBar from "./HeaderBar";
import Navbar from './components/Navbar/index';
import About from './pages/About/About';
import Clients from './pages/Clients';
import Packages from './pages/Packages';
import Footer from './pages/Footer/Footer';


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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
