import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
//import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './App.css';
import Calendar from './pages/Calendar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
//import HeaderBar from "./HeaderBar";
import Navbar from './components/Navbar';
import About from "./pages/About";
import Book from "./pages/Calendar";
import Clients from "./pages/Clients";
import Packages from "./pages/Packages";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/calendar' component={Book} />
          <Route path='/clients' component={Clients} />
          <Route path='/packages' component={Packages} />
        </Switch>
      </Router>
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
