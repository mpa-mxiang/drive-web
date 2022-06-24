import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import Calendar from "./Calendar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "./logo.svg";

function App() {

  return (

    <div className="App">
      <div><img src={logo} alt="App Logo" />
        <Routes>
          <Route path="/Calendar"
            element={
              <Calendar />
            } />



        </Routes>

      </div>;
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


/*import Signup from "./components/Signup";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/UserAuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
*/
/*
          <Route path="/" element={<Calenlar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/YourGroups" element={<Card />} />
          <Route path="/YourTasks" element={<Task />} />
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