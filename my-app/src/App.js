import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
/*
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

import logo from "./logo.svg";
*/
function App() {
  return (
    <div>
      <p>Hello World! nice nice</p>
    </div>
  );
}
export default App;

/*
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




/*import Signup from "./components/Signup";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/UserAuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
*/

/*
function App() {
  
  return (
    
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
  );
}

export default App;
*/
