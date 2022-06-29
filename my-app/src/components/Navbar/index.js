import React from 'react';
import { Nav, NavLink, NavMenu, A } from './NavbarElements';
import { Container, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <>
      <Nav>
        <A href="/">
          Max's Driving School
        </A>
        <NavMenu>
          <NavLink to="/about" style>
            About
          </NavLink>
          <NavLink to="/packages" style>
            Packages
          </NavLink>
          <NavLink to="/calendar" style>
            Book Your Class
          </NavLink>
          <NavLink to="/clients" style>
            Success Clients
          </NavLink>
          <NavLink to="/register" style>
            Register
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
