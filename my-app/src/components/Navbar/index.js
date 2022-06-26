import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Hamburger
} from './NavbarElements';
import { NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" style>
            About
          </NavLink>
          <NavDropdown title="Packages">
            <NavDropdown.Item href="groups/group1">Sliver</NavDropdown.Item>
            <NavDropdown.Item href="groups/group2">Gold</NavDropdown.Item>
          </NavDropdown>
          <NavLink to="/calendar" style>
            Book Your Class
          </NavLink>
          <NavLink to="/clients" style>
            Success Clients
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
