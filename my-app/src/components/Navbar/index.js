import React from 'react';
import { Nav, NavLink, NavMenu, A } from './NavbarElements';
import { Container, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <>
      <Nav>
        <A href="/">Max's Driving School</A>
        <NavMenu>
          <NavLink to="/about" style>
            About
          </NavLink>
          <NavLink to="/packages" style>
            Packages
          </NavLink>
          <NavLink
            to="/booking"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}
          >
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
