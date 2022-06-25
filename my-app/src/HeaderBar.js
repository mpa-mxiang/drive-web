import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function HeaderBar() {
    return (
        <Navbar bg="myWhite" variant="light" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                Max Driving School
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown title="Packages">
                        <NavDropdown.Item href="groups/group1">Sliver</NavDropdown.Item>
                        <NavDropdown.Item href="groups/group2">Gold</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="book">Pet</Nav.Link>
                    <Nav.Link href="success-clients">Success Clients</Nav.Link>
                    <Nav.Link href="more">More</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default HeaderBar;