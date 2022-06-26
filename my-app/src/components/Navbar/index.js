import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/about' style>
            About
          </NavLink>
          <NavDropdown title="Packages">
            <NavDropdown.Item href="groups/group1">Sliver</NavDropdown.Item>
            <NavDropdown.Item href="groups/group2">Gold</NavDropdown.Item>
          </NavDropdown>
          <NavLink to='/calendar' style>
            Book Your Class
          </NavLink>
          <NavLink to='/clients' style>
            Success Clients
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;
